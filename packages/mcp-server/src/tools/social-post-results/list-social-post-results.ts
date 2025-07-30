// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_post_results',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/social-post-results',
  operationId: 'SocialPostResultsController_getAllPostResults_v1',
};

export const tool: Tool = {
  name: 'list_social_post_results',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a paginated result for post results based on the applied filters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/social_post_result'\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'number',\n          description: 'Maximum number of items returned.'\n        },\n        next: {\n          type: 'string',\n          description: 'URL to the next page of results, or null if none.'\n        },\n        offset: {\n          type: 'number',\n          description: 'Number of items skipped.'\n        },\n        total: {\n          type: 'number',\n          description: 'Total number of items available.'\n        }\n      },\n      required: [        'limit',\n        'next',\n        'offset',\n        'total'\n      ]\n    }\n  },\n  required: [    'data',\n    'meta'\n  ],\n  $defs: {\n    social_post_result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the post result'\n        },\n        details: {\n          type: 'object',\n          description: 'Detailed logs from the post'\n        },\n        error: {\n          type: 'object',\n          description: 'Error message if the post failed'\n        },\n        platform_data: {\n          type: 'object',\n          description: 'Platform-specific data',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Platform-specific ID'\n            },\n            url: {\n              type: 'string',\n              description: 'URL of the posted content'\n            }\n          }\n        },\n        post_id: {\n          type: 'string',\n          description: 'The ID of the associated post'\n        },\n        social_account_id: {\n          type: 'string',\n          description: 'The ID of the associated social account'\n        },\n        success: {\n          type: 'boolean',\n          description: 'Indicates if the post was successful'\n        }\n      },\n      required: [        'id',\n        'details',\n        'error',\n        'platform_data',\n        'post_id',\n        'social_account_id',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'number',
        description: 'Number of items to return',
      },
      offset: {
        type: 'number',
        description: 'Number of items to skip',
      },
      platform: {
        type: 'array',
        description:
          'Filter by platform(s). Multiple values imply OR logic (e.g., ?platform=x&platform=facebook).',
        items: {
          type: 'string',
        },
      },
      post_id: {
        type: 'array',
        description: 'Filter by post IDs. Multiple values imply OR logic (e.g., ?post_id=123&post_id=456).',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.socialPostResults.list(body)));
};

export default { metadata, tool, handler };
