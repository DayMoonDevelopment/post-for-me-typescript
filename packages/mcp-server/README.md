# Post For Me TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export POST_FOR_ME_API_KEY="My API Key"
npx -y post-for-me-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "post_for_me_api": {
      "command": "npx",
      "args": ["-y", "post-for-me-mcp"],
      "env": {
        "POST_FOR_ME_API_KEY": "My API Key"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=post-for-me-mcp&config=eyJuYW1lIjoicG9zdC1mb3ItbWUtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vcG9zdC1mb3ItbWUuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1wb3N0LWZvci1tZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22post-for-me-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpost-for-me.stlmcp.com%22%2C%22headers%22%3A%7B%22x-post-for-me-api-key%22%3A%22My%20API%20Key%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add post_for_me_mcp_api --header "x-post-for-me-api-key: My API Key" --transport http https://post-for-me.stlmcp.com
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

### Self-hosting on Unkey

The Docker image uses local Deno execution, embedded documentation search, and
`instructions.md`. These defaults avoid the Stainless runtime endpoints.

Every HTTP MCP request must include `Authorization: Bearer <key>` or
`x-post-for-me-api-key`. The API validates the key and enforces tenant permissions
and API rate limits. Do not configure a shared `POST_FOR_ME_API_KEY` in the hosted
container. `/health` remains available without credentials.

HTTP callers cannot override the worker environment or server method restrictions
through `x-stainless-mcp-client-envs` or `x-stainless-mcp-client-permissions`.
Local workers receive only runtime configuration (`PATH`, `DENO_DIR`, `LD_LIBRARY_PATH`, and the
disabled-update-check setting), with request credentials passed explicitly to the
SDK. Worker stdout/stderr is not forwarded to shared server logs.

Each server process permits eight concurrent executions. Workers are killed after
five minutes, including startup, and responses larger than 1 MiB are rejected.
These are safeguards, not a complete resource-isolation boundary: configure
container memory/CPU limits on the host. A worker can still allocate memory before
producing a response. Keep unrelated secrets and sensitive files out of the image.

Local execution permits network access to the configured API hostname and read
access to the application/dependencies. It does not permit uploading media to
external storage hosts. Method restrictions are best-effort checks, not a substitute
for API authorization.

After building the SDK and MCP server, run `node scripts/test-local-security.cjs`
from `packages/mcp-server` with Deno 2.7.1 on `PATH` to exercise real worker
isolation, output limits, and forced termination. This test does not call the API.

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------------- | ------------------------ | --------------- |
| `x-post-for-me-api-key` | `apiKey` | bearer |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "post_for_me_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```
