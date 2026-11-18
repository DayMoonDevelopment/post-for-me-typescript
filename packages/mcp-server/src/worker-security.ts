// Local workers must never inherit deployment secrets or another caller's credentials.
export function workerEnvironment(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  return {
    ...(env['PATH'] !== undefined && { PATH: env['PATH'] }),
    ...(env['DENO_DIR'] !== undefined && { DENO_DIR: env['DENO_DIR'] }),
    DENO_NO_UPDATE_CHECK: '1',
  };
}

export const MAX_LOCAL_EXECUTIONS = 8;
export const LOCAL_EXECUTION_TIMEOUT_MS = 5 * 60 * 1000;
export const MAX_LOCAL_OUTPUT_BYTES = 1024 * 1024;
