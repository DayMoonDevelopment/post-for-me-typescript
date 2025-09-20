// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'post-for-me-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import PostForMe from 'post-for-me';

export const metadata: Metadata = {
  resource: 'social_posts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/social-posts',
  operationId: 'SocialPostsController_createPosts_v1',
};

export const tool: Tool = {
  name: 'create_social_posts',
  description: 'Create Post',
  inputSchema: {
    type: 'object',
    properties: {
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
                auto_add_music: {
                  type: 'boolean',
                  description: 'Will automatically add music to photo posts on TikTok',
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
                is_ai_generated: {
                  type: 'boolean',
                  description: 'Flag content as AI generated on TikTok',
                },
                is_draft: {
                  type: 'boolean',
                  description:
                    'Will create a draft upload to TikTok, posting will need to be completed from within the app',
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
        $ref: '#/$defs/platform_configurations_dto',
      },
      scheduled_at: {
        type: 'string',
        description: 'Scheduled date and time for the post, setting to null or undefined will post instantly',
        format: 'date-time',
      },
    },
    required: ['caption', 'social_accounts'],
    $defs: {
      platform_configurations_dto: {
        type: 'object',
        properties: {
          bluesky: {
            $ref: '#/$defs/bluesky_configuration_dto',
          },
          facebook: {
            $ref: '#/$defs/facebook_configuration_dto',
          },
          instagram: {
            $ref: '#/$defs/instagram_configuration_dto',
          },
          linkedin: {
            $ref: '#/$defs/linkedin_configuration_dto',
          },
          pinterest: {
            $ref: '#/$defs/pinterest_configuration_dto',
          },
          threads: {
            $ref: '#/$defs/threads_configuration_dto',
          },
          tiktok: {
            $ref: '#/$defs/tiktok_configuration',
          },
          tiktok_business: {
            $ref: '#/$defs/tiktok_configuration',
          },
          x: {
            $ref: '#/$defs/twitter_configuration_dto',
          },
          youtube: {
            $ref: '#/$defs/youtube_configuration_dto',
          },
        },
      },
      bluesky_configuration_dto: {
        type: 'object',
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
        },
      },
      facebook_configuration_dto: {
        type: 'object',
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
          placement: {
            type: 'string',
            description: 'Facebook post placement',
            enum: ['reels', 'stories', 'timeline'],
          },
        },
      },
      instagram_configuration_dto: {
        type: 'object',
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
          placement: {
            type: 'string',
            description: 'Instagram post placement',
            enum: ['reels', 'stories', 'timeline'],
          },
        },
      },
      linkedin_configuration_dto: {
        type: 'object',
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
        },
      },
      pinterest_configuration_dto: {
        type: 'object',
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
        },
      },
      threads_configuration_dto: {
        type: 'object',
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
          placement: {
            type: 'string',
            description: 'Threads post placement',
            enum: ['reels', 'timeline'],
          },
        },
      },
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
          auto_add_music: {
            type: 'boolean',
            description: 'Will automatically add music to photo posts',
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
          is_draft: {
            type: 'boolean',
            description:
              'Will create a draft upload to TikTok, posting will need to be completed from within the app',
          },
          media: {
            type: 'array',
            description: 'Overrides the `media` from the post',
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
      twitter_configuration_dto: {
        type: 'object',
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
        },
      },
      youtube_configuration_dto: {
        type: 'object',
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
          title: {
            type: 'string',
            description: 'Overrides the `title` from the post',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: PostForMe, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.socialPosts.create(body));
};

export default { metadata, tool, handler };
