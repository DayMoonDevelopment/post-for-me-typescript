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
      "args": ["-y", "post-for-me-mcp", "--client=claude", "--tools=all"],
      "env": {
        "POST_FOR_ME_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

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

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "post-for-me-mcp/server";

// import a specific tool
import createUploadURLMedia from "post-for-me-mcp/tools/media/create-upload-url-media";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createUploadURLMedia, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `media`:

- `create_upload_url_media` (`write`):
  To upload media to attach to your post, make a `POST` request to the `/media/create-upload-url` endpoint.

  You'll receive the public url of your media item (which can be used when making a post) and will include an `upload_url` which is a signed URL of the storage location for uploading your file to.

  This URL is unique and publicly signed for a short time, so make sure to upload your files in a timely manner.

  **Example flow using JavaScript and the Fetch API:**

  **Request an upload URL**

  ```js
  // Step 1: Request an upload URL from your API
  const response = await fetch('https://api.postforme.dev/v1/media/create-upload-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { media_url, upload_url } = await response.json();
  ```

  **Upload your file to the signed URL**

  ```js
  // Step 2: Upload your file to the signed URL
  const file = /* your File or Blob object, e.g., from an <input type="file"> */;
  await fetch(upload_url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'image/jpeg'
    },
    body: file
  });
  ```

  **Use the `media_url` when creating your post**

      ```js
      // Step 3: Use the `media_url` when creating your post
      const response = await fetch('https://api.postforme.dev/v1/social-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          social_accounts: ['spc_...', ...],
          caption: 'My caption',
          media: [
            {
              url: media_url
            }
          ]
        })
      });
      ```

### Resource `social_posts`:

- `create_social_posts` (`write`): Create Post
- `retrieve_social_posts` (`read`): Get Post by ID
- `update_social_posts` (`write`): Update Post
- `list_social_posts` (`read`): Get a paginated result for posts based on the applied filters
- `delete_social_posts` (`write`): Delete Post

### Resource `social_post_results`:

- `retrieve_social_post_results` (`read`): Get post result by ID
- `list_social_post_results` (`read`): Get a paginated result for post results based on the applied filters

### Resource `social_accounts`:

- `retrieve_social_accounts` (`read`): Get social account by ID
- `update_social_accounts` (`write`): Update social account
- `list_social_accounts` (`read`): Get a paginated result for social accounts based on the applied filters
- `create_auth_url_social_accounts` (`write`): Generates a URL that initiates the authentication flow for a user's social media account. When visited, the user is redirected to the selected social platform's login/authorization page. Upon successful authentication, they are redirected back to your application
- `disconnect_social_accounts` (`write`): Disconnecting an account with remove all auth tokens and mark the account as disconnected. The record of the account will be kept and can be retrieved and reconnected by the owner of the account.
