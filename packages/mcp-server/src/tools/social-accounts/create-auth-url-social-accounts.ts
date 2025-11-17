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
  httpPath: '/v1/social-accounts/auth-url',
  operationId: 'SocialAccountsController_createSocialAccountAuthUrl_v1',
};

export const tool: Tool = {
  name: 'create_auth_url_social_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a URL that initiates the authentication flow for a user's social media account. When visited, the user is redirected to the selected social platform's login/authorization page. Upon successful authentication, they are redirected back to your application\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/social_account_create_auth_url_response',\n  $defs: {\n    social_account_create_auth_url_response: {\n      type: 'object',\n      properties: {\n        platform: {\n          type: 'string',\n          description: 'The social account provider'\n        },\n        url: {\n          type: 'string',\n          description: 'The url to redirect the user to, in order to connect their account'\n        }\n      },\n      required: [        'platform',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      platform: {
        type: 'string',
        description: 'The social account provider',
      },
      external_id: {
        type: 'string',
        description: 'Your unique identifier for the social account',
      },
      platform_data: {
        type: 'object',
        description: 'Additional data needed for the provider',
        properties: {
          bluesky: {
            type: 'object',
            description: 'Additional data needed for connecting bluesky accounts',
            properties: {
              app_password: {
                type: 'string',
                description: 'The app password of the account',
              },
              handle: {
                type: 'string',
                description: 'The handle of the account',
              },
            },
            required: ['app_password', 'handle'],
          },
          instagram: {
            type: 'object',
            description: 'Additional data for connecting instagram accounts',
            properties: {
              connection_type: {
                type: 'string',
                description:
                  'The type of connection; instagram for using login with instagram, facebook for using login with facebook.',
                enum: ['instagram', 'facebook'],
              },
            },
            required: ['connection_type'],
          },
          linkedin: {
            type: 'object',
            description: 'Additional data for connecting linkedin accounts',
            properties: {
              connection_type: {
                type: 'string',
                description:
                  'The type of connection; personal for posting on behalf of the user only, organization for posting on behalf of both an organization and the user',
                enum: ['personal', 'organization'],
              },
            },
            required: ['connection_type'],
          },
        },
      },
      redirect_url_override: {
        type: 'string',
        description:
          "Override the default redirect URL for the OAuth flow. If provided, this URL will be used instead of our redirect URL. Make sure this URL is included in your app's authorized redirect urls. This override will not work when using our system credientals.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['platform'],
  },
  annotations: {},
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.socialAccounts.createAuthURL(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
