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
      permissions: {
        type: 'array',
        description:
          'List of permissions you want to allow. Will default to only post permissions. You must include the "feeds" permission to request an account feed and metrics',
        items: {
          type: 'string',
          enum: ['posts', 'feeds'],
        },
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
          facebook: {
            type: 'object',
            description: 'Additional data for connecting facebook accounts',
            properties: {
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default scopes: public_profile, pages_show_list, pages_read_engagement, pages_manage_posts, business_management',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
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
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default instagram scopes: instagram_business_basic, instagram_business_content_publish. Default facebook scopes: instagram_basic, instagram_content_publish, pages_show_list, public_profile, business_management',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
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
                  'The type of connection; If using our provided credentials always use "organization". If using your own crednetials then only use "organization" if you are using the Community API',
                enum: ['personal', 'organization'],
              },
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default personal scopes: openid, w_member_social, profile, email. Default organization scopes: r_basicprofile, w_member_social, r_organization_social, w_organization_social, rw_organization_admin',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
            required: ['connection_type'],
          },
          pinterest: {
            type: 'object',
            description: 'Additional data for connecting Pinterest accounts',
            properties: {
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default scopes: boards:read, boards:write, pins:read, pins:write, user_accounts:read',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
          },
          threads: {
            type: 'object',
            description: 'Additional data for connecting Threads accounts',
            properties: {
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default scopes: threads_basic, threads_content_publish',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
          },
          tiktok: {
            type: 'object',
            description: 'Additional data for connecting TikTok accounts',
            properties: {
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default scopes: user.info.basic, video.list, video.upload, video.publish',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
          },
          tiktok_business: {
            type: 'object',
            description: 'Additional data for connecting TikTok Business accounts',
            properties: {
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default scopes: user.info.basic, user.info.username, user.info.stats, user.info.profile, user.account.type, user.insights, video.list, video.insights, comment.list, comment.list.manage, video.publish, video.upload, biz.spark.auth, discovery.search.words',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
          },
          youtube: {
            type: 'object',
            description: 'Additional data for connecting YouTube accounts',
            properties: {
              permission_overrides: {
                type: 'array',
                description:
                  'Override the default permissions/scopes requested during OAuth. Default scopes: https://www.googleapis.com/auth/youtube.force-ssl, https://www.googleapis.com/auth/youtube.upload, https://www.googleapis.com/auth/youtube.readonly, https://www.googleapis.com/auth/userinfo.profile',
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
            },
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
    if (error instanceof PostForMe.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
