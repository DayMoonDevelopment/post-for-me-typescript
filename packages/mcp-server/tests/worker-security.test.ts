import { workerEnvironment } from '../src/worker-security';

describe('workerEnvironment', () => {
  it('passes only runtime configuration, never deployment secrets or SDK defaults', () => {
    expect(
      workerEnvironment({
        PATH: '/usr/bin',
        DENO_DIR: '/deno-dir',
        UNKEY_ROOT_KEY: 'secret',
        POST_FOR_ME_API_KEY: 'shared-key',
        POST_FOR_ME_BASE_URL: 'https://untrusted.example',
        POST_FOR_ME_CUSTOM_HEADERS: '{"Authorization":"shared-secret"}',
        NODE_OPTIONS: '--inspect',
      }),
    ).toEqual({ PATH: '/usr/bin', DENO_DIR: '/deno-dir', DENO_NO_UPDATE_CHECK: '1' });
  });

  it('does not require optional runtime environment variables', () => {
    expect(workerEnvironment({})).toEqual({ DENO_NO_UPDATE_CHECK: '1' });
  });
});
