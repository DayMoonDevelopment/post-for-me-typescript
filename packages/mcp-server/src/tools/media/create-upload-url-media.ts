// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'media',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/media/create-upload-url',
  operationId: 'MediaController_createUploadUrl_v1',
};

export const tool: Tool = {
  name: 'create_upload_url_media',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\nTo upload media to attach to your post, make a `POST` request to the `/media/create-upload-url` endpoint. \n\nYou'll receive the public url of your media item (which can be used when making a post) and will include an `upload_url` which is a signed URL of the storage location for uploading your file to. \n\nThis URL is unique and publicly signed for a short time, so make sure to upload your files in a timely manner.\n\n**Example flow using JavaScript and the Fetch API:**\n\n**Request an upload URL**\n\n   ```js\n   // Step 1: Request an upload URL from your API\n   const response = await fetch('https://api.postforme.dev/v1/media/create-upload-url', {\n     method: 'POST',\n     headers: {\n       'Content-Type': 'application/json'\n     }\n   });\n\n   const { media_url, upload_url } = await response.json();\n   ```\n\n**Upload your file to the signed URL**\n\n   ```js\n   // Step 2: Upload your file to the signed URL\n   const file = /* your File or Blob object, e.g., from an <input type=\"file\"> */;\n   await fetch(upload_url, {\n     method: 'PUT',\n     headers: {\n       'Content-Type': 'image/jpeg'\n     },\n     body: file\n   });\n   ```\n\n**Use the `media_url` when creating your post**\n\n    ```js\n    // Step 3: Use the `media_url` when creating your post\n    const response = await fetch('https://api.postforme.dev/v1/social-posts', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        social_accounts: ['spc_...', ...],\n        caption: 'My caption',\n        media: [\n          { \n            url: media_url \n          }\n        ]\n      })\n    });\n    ```\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    media_url: {\n      type: 'string',\n      description: 'The public URL for the media, to use once file has been uploaded'\n    },\n    upload_url: {\n      type: 'string',\n      description: 'The signed upload URL for the client to upload the file'\n    }\n  },\n  required: [    'media_url',\n    'upload_url'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.media.createUploadURL()));
};

export default { metadata, tool, handler };
