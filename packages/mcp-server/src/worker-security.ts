import path from 'node:path';

export function workerReadPaths(workerPath: string, nodeModulesPath: string): string[] {
  const paths = [path.dirname(path.resolve(workerPath)), path.resolve(nodeModulesPath)];
  if (paths.some((directory) => directory === path.parse(directory).root)) {
    throw new Error('Refusing to grant filesystem-root read access to a local worker.');
  }
  return [...new Set(paths)];
}

// Local workers must never inherit deployment secrets or another caller's credentials.
export function workerEnvironment(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  return {
    ...(env['PATH'] !== undefined && { PATH: env['PATH'] }),
    ...(env['DENO_DIR'] !== undefined && { DENO_DIR: env['DENO_DIR'] }),
    // Alpine's Deno binary needs the container's configured shared-library paths.
    ...(env['LD_LIBRARY_PATH'] !== undefined && { LD_LIBRARY_PATH: env['LD_LIBRARY_PATH'] }),
    DENO_NO_UPDATE_CHECK: '1',
  };
}

export const MAX_LOCAL_EXECUTIONS = 8;
export const LOCAL_EXECUTION_TIMEOUT_MS = 5 * 60 * 1000;
export const MAX_LOCAL_OUTPUT_BYTES = 1024 * 1024;
