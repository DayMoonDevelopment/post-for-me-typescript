// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/social-posts/{id}',
  operationId: 'SocialPostsController_getPost_v1',
};

export const tool: Tool = {
  name: 'retrieve_social_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Post by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/social_post',\n  $defs: {\n    social_post: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the post'\n        },\n        account_configurations: {\n          type: 'array',\n          description: 'Account-specific configurations for the post',\n          items: {\n            type: 'object'\n          }\n        },\n        caption: {\n          type: 'string',\n          description: 'Caption text for the post'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the post was created'\n        },\n        external_id: {\n          type: 'string',\n          description: 'Provided unique identifier of the post'\n        },\n        media: {\n          type: 'object',\n          description: 'Array of media URLs associated with the post'\n        },\n        platform_configurations: {\n          type: 'object',\n          description: 'Platform-specific configurations for the post'\n        },\n        scheduled_at: {\n          type: 'string',\n          description: 'Scheduled date and time for the post'\n        },\n        social_accounts: {\n          type: 'array',\n          description: 'Array of social account IDs for posting',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the post: draft, processed, scheduled, or processing',\n          enum: [            'draft',\n            'scheduled',\n            'processing',\n            'processed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Timestamp when the post was last updated'\n        }\n      },\n      required: [        'id',\n        'account_configurations',\n        'caption',\n        'created_at',\n        'external_id',\n        'media',\n        'platform_configurations',\n        'scheduled_at',\n        'social_accounts',\n        'status',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.socialPosts.retrieve(id)));
};

export default { metadata, tool, handler };
