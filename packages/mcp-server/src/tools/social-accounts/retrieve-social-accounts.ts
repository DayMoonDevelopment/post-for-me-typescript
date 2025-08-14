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
  httpPath: '/v1/social-accounts/{id}',
  operationId: 'SocialAccountsController_getSocialAccount_v1',
};

export const tool: Tool = {
  name: 'retrieve_social_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet social account by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/social_account',\n  $defs: {\n    social_account: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the social account'\n        },\n        access_token: {\n          type: 'string',\n          description: 'The access token of the social account'\n        },\n        access_token_expires_at: {\n          type: 'string',\n          description: 'The access token expiration date of the social account',\n          format: 'date-time'\n        },\n        external_id: {\n          type: 'string',\n          description: 'The external id of the social account'\n        },\n        metadata: {\n          type: 'object',\n          description: 'The metadata of the social account'\n        },\n        platform: {\n          type: 'string',\n          description: 'The platform of the social account'\n        },\n        refresh_token: {\n          type: 'string',\n          description: 'The refresh token of the social account'\n        },\n        refresh_token_expires_at: {\n          type: 'string',\n          description: 'The refresh token expiration date of the social account',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the account',\n          enum: [            'connected',\n            'disconnected'\n          ]\n        },\n        user_id: {\n          type: 'string',\n          description: 'The platform\\'s id of the social account'\n        },\n        username: {\n          type: 'string',\n          description: 'The platform\\'s username of the social account'\n        }\n      },\n      required: [        'id',\n        'access_token',\n        'access_token_expires_at',\n        'external_id',\n        'metadata',\n        'platform',\n        'refresh_token',\n        'refresh_token_expires_at',\n        'status',\n        'user_id',\n        'username'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.socialAccounts.retrieve(id)));
};

export default { metadata, tool, handler };
