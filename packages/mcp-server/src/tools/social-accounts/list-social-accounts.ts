// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/social-accounts',
  operationId: 'SocialAccountsController_getAllSocialAccounts_v1',
};

export const tool: Tool = {
  name: 'list_social_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a paginated result for social accounts based on the applied filters\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/social_account_list_response',\n  $defs: {\n    social_account_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/social_account'\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'number',\n              description: 'Maximum number of items returned.'\n            },\n            next: {\n              type: 'string',\n              description: 'URL to the next page of results, or null if none.'\n            },\n            offset: {\n              type: 'number',\n              description: 'Number of items skipped.'\n            },\n            total: {\n              type: 'number',\n              description: 'Total number of items available.'\n            }\n          },\n          required: [            'limit',\n            'next',\n            'offset',\n            'total'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    social_account: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the social account'\n        },\n        access_token: {\n          type: 'string',\n          description: 'The access token of the social account'\n        },\n        access_token_expires_at: {\n          type: 'string',\n          description: 'The access token expiration date of the social account',\n          format: 'date-time'\n        },\n        external_id: {\n          type: 'string',\n          description: 'The external id of the social account'\n        },\n        metadata: {\n          type: 'object',\n          description: 'The metadata of the social account',\n          additionalProperties: true\n        },\n        platform: {\n          type: 'string',\n          description: 'The platform of the social account'\n        },\n        profile_photo_url: {\n          type: 'string',\n          description: 'The platform\\'s profile photo of the social account'\n        },\n        refresh_token: {\n          type: 'string',\n          description: 'The refresh token of the social account'\n        },\n        refresh_token_expires_at: {\n          type: 'string',\n          description: 'The refresh token expiration date of the social account',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the account',\n          enum: [            'connected',\n            'disconnected'\n          ]\n        },\n        user_id: {\n          type: 'string',\n          description: 'The platform\\'s id of the social account'\n        },\n        username: {\n          type: 'string',\n          description: 'The platform\\'s username of the social account'\n        }\n      },\n      required: [        'id',\n        'access_token',\n        'access_token_expires_at',\n        'external_id',\n        'metadata',\n        'platform',\n        'profile_photo_url',\n        'refresh_token',\n        'refresh_token_expires_at',\n        'status',\n        'user_id',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'array',
        description: 'Filter by id(s). Multiple values imply OR logic (e.g., ?id=spc_xxxxxx&id=spc_yyyyyy).',
        items: {
          type: 'string',
        },
      },
      external_id: {
        type: 'array',
        description:
          'Filter by externalId(s). Multiple values imply OR logic (e.g., ?externalId=test&externalId=test2).',
        items: {
          type: 'string',
        },
      },
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
      username: {
        type: 'array',
        description:
          'Filter by username(s). Multiple values imply OR logic (e.g., ?username=test&username=test2).',
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.socialAccounts.list(body)));
};

export default { metadata, tool, handler };
