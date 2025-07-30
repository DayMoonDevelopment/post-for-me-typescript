// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'post-for-me-mcp/filtering';
import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a URL that initiates the authentication flow for a user's social media account. When visited, the user is redirected to the selected social platform's login/authorization page. Upon successful authentication, they are redirected back to your application\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    platform: {\n      type: 'string',\n      description: 'The social account provider'\n    },\n    url: {\n      type: 'string',\n      description: 'The url to redirect the user to, in order to connect their account'\n    }\n  },\n  required: [    'platform',\n    'url'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      platform: {
        type: 'string',
        description: 'The social account provider',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.socialAccounts.createAuthURL(body)));
};

export default { metadata, tool, handler };
