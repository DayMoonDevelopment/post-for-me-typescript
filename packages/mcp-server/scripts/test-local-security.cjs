// Run after building the SDK and MCP server, with the Docker image's Deno on PATH.
const assert = require('node:assert/strict');
const { PostForMe } = require('post-for-me');
const { codeTool } = require('../dist/code-tool.js');
const { configureLogger } = require('../dist/logger.js');
const security = require('../dist/worker-security.js');

configureLogger({ level: 'fatal', pretty: false });
process.env.UNKEY_ROOT_KEY = 'deployment-secret-sentinel';
process.env.POST_FOR_ME_API_KEY = 'shared-key-sentinel';

async function main() {
  const tool = codeTool({ codeExecutionMode: 'local' });
  const execute = (apiKey, code) =>
    tool.handler({
      reqContext: {
        client: new PostForMe({ apiKey }),
        upstreamClientEnvs: { UNKEY_ROOT_KEY: 'injected-secret-sentinel' },
      },
      args: { code },
    });

  await Promise.all(
    ['caller-a', 'caller-b'].map(async (apiKey) => {
      const result = await execute(
        apiKey,
        `async function run(client) {
          return {
            key: client.apiKey,
            secret: (globalThis as any).Deno.env.get('UNKEY_ROOT_KEY') ?? null,
            shared: (globalThis as any).Deno.env.get('POST_FOR_ME_API_KEY') ?? null,
          };
        }`,
      );
      assert.ok(!result.isError, JSON.stringify(result));
      assert.deepEqual(JSON.parse(result.content[0].text), { key: apiKey, secret: null, shared: null });
    }),
  );

  const filesystem = await execute(
    'caller-a',
    `async function run(client) {
      const denied: Record<string, boolean> = {};
      for (const target of ['/etc/passwd', '/proc/self/environ']) {
        try { await (globalThis as any).Deno.readTextFile(target); denied[target] = false; }
        catch (error) {
          if ((error as any).name !== 'NotCapable' && (error as any).name !== 'PermissionDenied') throw error;
          denied[target] = true;
        }
      }
      return denied;
    }`,
  );
  assert.ok(!filesystem.isError, JSON.stringify(filesystem));
  assert.deepEqual(JSON.parse(filesystem.content[0].text), {
    '/etc/passwd': true,
    '/proc/self/environ': true,
  });

  await assert.rejects(
    execute('caller-a', `async function run(client) { return 'x'.repeat(1100000); }`),
    /output exceeded/,
  );

  // Exercise the production deadline path without waiting five minutes.
  security.LOCAL_EXECUTION_TIMEOUT_MS = 5000;
  const start = Date.now();
  await assert.rejects(
    execute('caller-a', 'async function run(client) { while (true) {} }'),
    /exited|socket hang up/i,
  );
  assert.ok(Date.now() - start >= 4500, 'Worker should be stopped by the execution deadline');
  assert.ok(Date.now() - start < 10000, 'Deadline should stop even an infinite loop');

  console.log(
    'Passed: concurrent key isolation, secret isolation, filesystem restriction, output limit, and execution deadline.',
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
