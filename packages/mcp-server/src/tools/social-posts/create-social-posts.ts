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
                collaborators: {
                  type: 'array',
                  description:
                    'List of page ids or users to invite as collaborators for a Video Reel (Instagram and Facebook)',
                  items: {
                    type: 'array',
                    items: {
                      type: 'object',
                      additionalProperties: true,
                    },
                  },
                },
                community_id: {
                  type: 'string',
                  description: 'Id of the twitter community to post to',
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
                location: {
                  type: 'string',
                  description:
                    'Page id with a location that you want to tag the image or video with (Instagram and Facebook)',
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
                poll: {
                  type: 'object',
                  description: 'Poll options for the twitter',
                  properties: {
                    duration_minutes: {
                      type: 'number',
                      description: 'Duration of the poll in minutes',
                    },
                    options: {
                      type: 'array',
                      description: 'The choices of the poll, requiring 2-4 options',
                      items: {
                        type: 'string',
                      },
                    },
                    reply_settings: {
                      type: 'string',
                      description: 'Who can reply to the tweet',
                      enum: ['following', 'mentionedUsers', 'subscribers', 'verified'],
                    },
                  },
                  required: ['duration_minutes', 'options'],
                },
                privacy_status: {
                  type: 'string',
                  description: 'Sets the privacy status for TikTok (private, public)',
                },
                quote_tweet_id: {
                  type: 'string',
                  description: 'Id of the tweet you want to quote',
                },
                reply_settings: {
                  type: 'string',
                  description: 'Who can reply to the tweet',
                  enum: ['following', 'mentionedUsers', 'subscribers', 'verified'],
                },
                share_to_feed: {
                  type: 'boolean',
                  description: 'If false Instagram video posts will only be shown in the Reels tab',
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
            tags: {
              type: 'array',
              description: 'List of tags to attach to the media',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                  },
                  platform: {
                    type: 'string',
                    description: 'The platform for the tags',
                    enum: ['facebook', 'instagram'],
                  },
                  type: {
                    type: 'string',
                    description:
                      'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                    enum: ['user', 'product'],
                  },
                  x: {
                    type: 'number',
                    description:
                      'Percentage distance from left edge of the image, Not required for videos or stories',
                  },
                  y: {
                    type: 'number',
                    description:
                      'Percentage distance from top edge of the image, Not required for videos or stories',
                  },
                },
                required: ['id', 'platform', 'type'],
              },
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
          collaborators: {
            type: 'array',
            description: 'List of page ids to invite as collaborators for a Video Reel',
            items: {
              type: 'array',
              items: {
                type: 'object',
                additionalProperties: true,
              },
            },
          },
          location: {
            type: 'string',
            description: 'Page id with a location that you want to tag the image or video with',
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
          location: {
            type: 'string',
            description: 'Page id with a location that you want to tag the image or video with',
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
          share_to_feed: {
            type: 'boolean',
            description: 'If false video posts will only be shown in the Reels tab',
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
          community_id: {
            type: 'string',
            description: 'Id of the community to post to',
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
          poll: {
            type: 'object',
            description: 'Poll options for the tweet',
            properties: {
              duration_minutes: {
                type: 'number',
                description: 'Duration of the poll in minutes',
              },
              options: {
                type: 'array',
                description: 'The choices of the poll, requiring 2-4 options',
                items: {
                  type: 'string',
                },
              },
              reply_settings: {
                type: 'string',
                description: 'Who can reply to the tweet',
                enum: ['following', 'mentionedUsers', 'subscribers', 'verified'],
              },
            },
            required: ['duration_minutes', 'options'],
          },
          quote_tweet_id: {
            type: 'string',
            description: 'Id of the tweet you want to quote',
          },
          reply_settings: {
            type: 'string',
            description: 'Who can reply to the tweet',
            enum: ['following', 'mentionedUsers', 'subscribers', 'verified'],
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
                tags: {
                  type: 'array',
                  description: 'List of tags to attach to the media',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Facebook User ID, Instagram Username or Instagram product id to tag',
                      },
                      platform: {
                        type: 'string',
                        description: 'The platform for the tags',
                        enum: ['facebook', 'instagram'],
                      },
                      type: {
                        type: 'string',
                        description:
                          'The type of tag, user to tag accounts, product to tag products (only supported for instagram)',
                        enum: ['user', 'product'],
                      },
                      x: {
                        type: 'number',
                        description:
                          'Percentage distance from left edge of the image, Not required for videos or stories',
                      },
                      y: {
                        type: 'number',
                        description:
                          'Percentage distance from top edge of the image, Not required for videos or stories',
                      },
                    },
                    required: ['id', 'platform', 'type'],
                  },
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
