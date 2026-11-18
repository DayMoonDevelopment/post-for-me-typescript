import { Server } from 'node:http';
import { AddressInfo } from 'node:net';
import { streamableHTTPApp } from '../src/http';
import { initMcpServer, newMcpServer } from '../src/server';
import { McpOptions } from '../src/options';
import { configureLogger } from '../src/logger';

jest.mock('../src/server', () => ({
  newMcpServer: jest.fn(async () => ({ connect: jest.fn(async () => {}) })),
  initMcpServer: jest.fn(async () => {}),
}));

jest.mock('@modelcontextprotocol/sdk/server/streamableHttp.js', () => ({
  StreamableHTTPServerTransport: jest.fn(() => ({
    handleRequest: async (_req: unknown, res: any) => res.json({ ok: true }),
  })),
}));

describe('HTTP caller isolation', () => {
  let server: Server;
  let baseURL: string;
  const mcpOptions = { codeExecutionMode: 'local', codeBlockedMethods: ['delete'] } as McpOptions;

  beforeAll(async () => {
    configureLogger({ level: 'fatal', pretty: false });
    server = streamableHTTPApp({ mcpOptions }).listen(0, '127.0.0.1');
    await new Promise<void>((resolve) => server.once('listening', resolve));
    baseURL = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });
  beforeEach(() => jest.clearAllMocks());
  afterAll(async () => {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  });

  it('rejects missing keys before creating a server or worker', async () => {
    const response = await fetch(baseURL, { method: 'POST' });
    expect(response.status).toBe(401);
    expect(newMcpServer).not.toHaveBeenCalled();
  });

  it('keeps concurrent keys separate and ignores environment/permission override headers', async () => {
    await Promise.all(
      ['key-a', 'key-b'].map(async (key) => {
        const response = await fetch(baseURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-post-for-me-api-key': key,
            'x-stainless-mcp-client-envs': JSON.stringify({ POST_FOR_ME_API_KEY: 'attacker' }),
            'x-stainless-mcp-client-permissions': JSON.stringify({ blocked_methods: [] }),
          },
          body: '{}',
        });
        expect(response.status).toBe(200);
      }),
    );
    const calls = jest.mocked(initMcpServer).mock.calls.map(([params]) => params);
    expect(calls.map((params) => params.clientOptions?.apiKey).sort()).toEqual(['key-a', 'key-b']);
    for (const params of calls) {
      expect(params.mcpOptions).toBe(mcpOptions);
      expect(params.upstreamClientEnvs).toBeUndefined();
    }
  });
});
