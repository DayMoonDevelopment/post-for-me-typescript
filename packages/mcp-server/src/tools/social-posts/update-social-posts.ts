// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_posts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/social-posts/{id}',
  operationId: 'SocialPostsController_updatePost_v1',
};

export const tool: Tool = {
  name: 'update_social_posts',
  description: 'Update Post',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      caption: {
        type: 'string',
        description: 'Caption text for the post',
      },
      social_accounts: {
        type: 'array',
        description: 'Array of social account IDs for posting',
        items: {
          type: 'string',
        },
      },
      account_configurations: {
        type: 'array',
        description: 'Account-specific configurations for the post',
        items: {
          type: 'object',
          properties: {
            configuration: {
              type: 'object',
              description: 'Configuration for the social account',
              properties: {
                allow_comment: {
                  type: 'boolean',
                  description: 'Allow comments on TikTok',
                },
                allow_duet: {
                  type: 'boolean',
                  description: 'Allow duets on TikTok',
                },
                allow_stitch: {
                  type: 'boolean',
                  description: 'Allow stitch on TikTok',
                },
                board_ids: {
                  type: 'array',
                  description: 'Pinterest board IDs',
                  items: {
                    type: 'string',
                  },
                },
                caption: {
                  type: 'object',
                  description: 'Overrides the `caption` from the post',
                  additionalProperties: true,
                },
                disclose_branded_content: {
                  type: 'boolean',
                  description: 'Disclose branded content on TikTok',
                },
                disclose_your_brand: {
                  type: 'boolean',
                  description: 'Disclose your brand on TikTok',
                },
                link: {
                  type: 'string',
                  description: 'Pinterest post link',
                },
                media: {
                  type: 'array',
                  description: 'Overrides the `media` from the post',
                  items: {
                    type: 'string',
                  },
                },
                placement: {
                  type: 'string',
                  description: 'Post placement for Facebook/Instagram/Threads',
                  enum: ['reels', 'timeline', 'stories'],
                },
                privacy_status: {
                  type: 'string',
                  description: 'Sets the privacy status for TikTok (private, public)',
                },
                title: {
                  type: 'string',
                  description: 'Overrides the `title` from the post',
                },
              },
            },
            social_account_id: {
              type: 'string',
              description: 'ID of the social account, you want to apply the configuration to',
            },
          },
          required: ['configuration', 'social_account_id'],
        },
      },
      external_id: {
        type: 'string',
        description: 'Array of social account IDs for posting',
      },
      isDraft: {
        type: 'boolean',
        description: 'If isDraft is set then the post will not be processed',
      },
      media: {
        type: 'array',
        description: 'Array of media URLs associated with the post',
        items: {
          type: 'object',
          properties: {
            url: {
              type: 'string',
              description: 'Public URL of the media',
            },
            thumbnail_timestamp_ms: {
              type: 'object',
              description: 'Timestamp in milliseconds of frame to use as thumbnail for the media',
              additionalProperties: true,
            },
            thumbnail_url: {
              type: 'object',
              description: 'Public URL of the thumbnail for the media',
              additionalProperties: true,
            },
          },
          required: ['url'],
        },
      },
      platform_configurations: {
        type: 'object',
        description: 'Platform-specific configurations for the post',
        properties: {
          bluesky: {
            type: 'object',
            description: 'Bluesky configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
            },
          },
          facebook: {
            type: 'object',
            description: 'Facebook configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
              placement: {
                type: 'string',
                description: 'Facebook post placement',
                enum: ['reels', 'stories', 'timeline'],
              },
            },
          },
          instagram: {
            type: 'object',
            description: 'Instagram configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              collaborators: {
                type: 'array',
                description: 'Instagram usernames to be tagged as a collaborator',
                items: {
                  type: 'string',
                },
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
              placement: {
                type: 'string',
                description: 'Instagram post placement',
                enum: ['reels', 'stories', 'timeline'],
              },
            },
          },
          linkedin: {
            type: 'object',
            description: 'LinkedIn configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
            },
          },
          pinterest: {
            type: 'object',
            description: 'Pinterest configuration',
            properties: {
              board_ids: {
                type: 'array',
                description: 'Pinterest board IDs',
                items: {
                  type: 'string',
                },
              },
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              link: {
                type: 'string',
                description: 'Pinterest post link',
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
            },
          },
          threads: {
            type: 'object',
            description: 'Threads configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
              placement: {
                type: 'string',
                description: 'Threads post placement',
                enum: ['reels', 'timeline'],
              },
            },
          },
          tiktok: {
            $ref: '#/$defs/tiktok_configuration',
          },
          tiktok_business: {
            $ref: '#/$defs/tiktok_configuration',
          },
          x: {
            type: 'object',
            description: 'Twitter configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
            },
          },
          youtube: {
            type: 'object',
            description: 'YouTube configuration',
            properties: {
              caption: {
                type: 'object',
                description: 'Overrides the `caption` from the post',
                additionalProperties: true,
              },
              media: {
                type: 'array',
                description: 'Overrides the `media` from the post',
                items: {
                  type: 'string',
                },
              },
              title: {
                type: 'string',
                description: 'Overrides the `title` from the post',
              },
            },
          },
        },
      },
      scheduled_at: {
        type: 'string',
        description: 'Scheduled date and time for the post, setting to null or undefined will post instantly',
        format: 'date-time',
      },
    },
    required: ['id', 'caption', 'social_accounts'],
    $defs: {
      tiktok_configuration: {
        type: 'object',
        properties: {
          allow_comment: {
            type: 'boolean',
            description: 'Allow comments on TikTok',
          },
          allow_duet: {
            type: 'boolean',
            description: 'Allow duets on TikTok',
          },
          allow_stitch: {
            type: 'boolean',
            description: 'Allow stitch on TikTok',
          },
          caption: {
            type: 'object',
            description: 'Overrides the `caption` from the post',
            additionalProperties: true,
          },
          disclose_branded_content: {
            type: 'boolean',
            description: 'Disclose branded content on TikTok',
          },
          disclose_your_brand: {
            type: 'boolean',
            description: 'Disclose your brand on TikTok',
          },
          is_ai_generated: {
            type: 'boolean',
            description: 'Flag content as AI generated on TikTok',
          },
          media: {
            type: 'array',
            description: 'Overrides the `media` from the post',
            items: {
              type: 'string',
            },
          },
          privacy_status: {
            type: 'string',
            description: 'Sets the privacy status for TikTok (private, public)',
          },
          title: {
            type: 'string',
            description: 'Overrides the `title` from the post',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.socialPosts.update(id, body));
};

export default { metadata, tool, handler };
