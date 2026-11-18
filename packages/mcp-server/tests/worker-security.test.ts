import { workerEnvironment, workerReadPaths } from '../src/worker-security';

describe('workerReadPaths', () => {
  it('restricts the flattened Docker layout to /app rather than /', () => {
    expect(workerReadPaths('/app/code-tool-worker.mjs', '/app/node_modules')).toEqual([
      '/app',
      '/app/node_modules',
    ]);
  });

  it('allows dist and dependencies without exposing the entire package parent', () => {
    expect(
      workerReadPaths('/workspace/mcp/dist/code-tool-worker.mjs', '/workspace/mcp/node_modules'),
    ).toEqual(['/workspace/mcp/dist', '/workspace/mcp/node_modules']);
  });

  it('does not infer extra grants from an enclosing node_modules directory', () => {
    expect(
      workerReadPaths(
        '/workspace/node_modules/post-for-me-mcp/dist/code-tool-worker.mjs',
        '/workspace/node_modules/post-for-me-mcp/node_modules',
      ),
    ).not.toContain('/workspace/node_modules');
  });

  it('fails closed if either read grant would expose the filesystem root', () => {
    expect(() => workerReadPaths('/code-tool-worker.mjs', '/node_modules')).toThrow(/filesystem-root/);
    expect(() => workerReadPaths('/app/code-tool-worker.mjs', '/app/..')).toThrow(/filesystem-root/);
  });
});

describe('workerEnvironment', () => {
  it('passes only runtime configuration, never deployment secrets or SDK defaults', () => {
    expect(
      workerEnvironment({
        PATH: '/usr/bin',
        DENO_DIR: '/deno-dir',
        LD_LIBRARY_PATH: '/usr/lib:/usr/local/lib',
        UNKEY_ROOT_KEY: 'secret',
        POST_FOR_ME_API_KEY: 'shared-key',
        POST_FOR_ME_BASE_URL: 'https://untrusted.example',
        POST_FOR_ME_CUSTOM_HEADERS: '{"Authorization":"shared-secret"}',
        NODE_OPTIONS: '--inspect',
      }),
    ).toEqual({
      PATH: '/usr/bin',
      DENO_DIR: '/deno-dir',
      LD_LIBRARY_PATH: '/usr/lib:/usr/local/lib',
      DENO_NO_UPDATE_CHECK: '1',
    });
  });

  it('does not require optional runtime environment variables', () => {
    expect(workerEnvironment({})).toEqual({ DENO_NO_UPDATE_CHECK: '1' });
  });
});
