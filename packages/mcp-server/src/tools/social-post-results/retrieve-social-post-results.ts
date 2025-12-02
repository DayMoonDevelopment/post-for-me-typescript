// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_post_results',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/social-post-results/{id}',
  operationId: 'SocialPostResultsController_getPostResult_v1',
};

export const tool: Tool = {
  name: 'retrieve_social_post_results',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet post result by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/social_post_result',\n  $defs: {\n    social_post_result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the post result'\n        },\n        details: {\n          type: 'object',\n          description: 'Detailed logs from the post',\n          additionalProperties: true\n        },\n        error: {\n          type: 'object',\n          description: 'Error message if the post failed',\n          additionalProperties: true\n        },\n        platform_data: {\n          type: 'object',\n          description: 'Platform-specific data',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Platform-specific ID'\n            },\n            url: {\n              type: 'string',\n              description: 'URL of the posted content'\n            }\n          }\n        },\n        post_id: {\n          type: 'string',\n          description: 'The ID of the associated post'\n        },\n        social_account_id: {\n          type: 'string',\n          description: 'The ID of the associated social account'\n        },\n        success: {\n          type: 'boolean',\n          description: 'Indicates if the post was successful'\n        }\n      },\n      required: [        'id',\n        'details',\n        'error',\n        'platform_data',\n        'post_id',\n        'social_account_id',\n        'success'\n      ]\n    }\n  }\n}\n```",
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
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.socialPostResults.retrieve(id)));
  } catch (error) {
    if (error instanceof PostForMe.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
