// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/social-accounts',
  operationId: 'SocialAccountsController_createSocialAccount_v1',
};

export const tool: Tool = {
  name: 'create_social_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIf a social account with the same platform and user_id already exists, it will be updated. If not, a new social account will be created.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/social_account',\n  $defs: {\n    social_account: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the social account'\n        },\n        access_token: {\n          type: 'string',\n          description: 'The access token of the social account'\n        },\n        access_token_expires_at: {\n          type: 'string',\n          description: 'The access token expiration date of the social account',\n          format: 'date-time'\n        },\n        external_id: {\n          type: 'string',\n          description: 'The external id of the social account'\n        },\n        metadata: {\n          type: 'object',\n          description: 'The metadata of the social account',\n          additionalProperties: true\n        },\n        platform: {\n          type: 'string',\n          description: 'The platform of the social account'\n        },\n        profile_photo_url: {\n          type: 'string',\n          description: 'The platform\\'s profile photo of the social account'\n        },\n        refresh_token: {\n          type: 'string',\n          description: 'The refresh token of the social account'\n        },\n        refresh_token_expires_at: {\n          type: 'string',\n          description: 'The refresh token expiration date of the social account',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the account',\n          enum: [            'connected',\n            'disconnected'\n          ]\n        },\n        user_id: {\n          type: 'string',\n          description: 'The platform\\'s id of the social account'\n        },\n        username: {\n          type: 'string',\n          description: 'The platform\\'s username of the social account'\n        }\n      },\n      required: [        'id',\n        'access_token',\n        'access_token_expires_at',\n        'external_id',\n        'metadata',\n        'platform',\n        'profile_photo_url',\n        'refresh_token',\n        'refresh_token_expires_at',\n        'status',\n        'user_id',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      access_token: {
        type: 'string',
        description: 'The access token of the social account',
      },
      access_token_expires_at: {
        type: 'string',
        description: 'The access token expiration date of the social account',
        format: 'date-time',
      },
      platform: {
        type: 'string',
        description: 'The platform of the social account',
        enum: [
          'facebook',
          'instagram',
          'x',
          'tiktok',
          'youtube',
          'pinterest',
          'linkedin',
          'bluesky',
          'threads',
          'tiktok_business',
        ],
      },
      user_id: {
        type: 'string',
        description: 'The user id of the social account',
      },
      external_id: {
        type: 'string',
        description: 'The external id of the social account',
      },
      metadata: {
        type: 'object',
        description: 'The metadata of the social account',
        additionalProperties: true,
      },
      refresh_token: {
        type: 'string',
        description: 'The refresh token of the social account',
      },
      refresh_token_expires_at: {
        type: 'string',
        description: 'The refresh token expiration date of the social account',
        format: 'date-time',
      },
      username: {
        type: 'string',
        description: "The platform's username of the social account",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['access_token', 'access_token_expires_at', 'platform', 'user_id'],
  },
  annotations: {},
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.socialAccounts.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
