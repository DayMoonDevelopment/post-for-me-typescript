// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostForMe from 'post-for-me';

const client = new PostForMe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource socialPostPreviews', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.socialPostPreviews.create({
      caption: 'caption',
      preview_social_accounts: [{ id: 'id', platform: 'platform' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.socialPostPreviews.create({
      caption: 'caption',
      preview_social_accounts: [
        {
          id: 'id',
          platform: 'platform',
          username: 'username',
        },
      ],
      account_configurations: [
        {
          configuration: {
            localizations: { foo: { description: 'description', title: 'title' } },
            allow_comment: true,
            allow_duet: true,
            allow_stitch: true,
            audio_name: 'audio_name',
            auto_add_music: true,
            board_ids: ['string'],
            caption: {},
            category_id: 'category_id',
            collaborators: [[{}]],
            community_id: 'community_id',
            contains_synthetic_media: true,
            default_language: 'default_language',
            disclose_branded_content: true,
            disclose_your_brand: true,
            embeddable: true,
            is_ai_generated: true,
            is_draft: true,
            license: 'youtube',
            link: 'link',
            location: 'location',
            made_for_kids: true,
            media: [
              {
                url: 'url',
                skip_processing: true,
                tags: [
                  {
                    id: 'id',
                    platform: 'facebook',
                    type: 'user',
                    x: 0,
                    y: 0,
                  },
                ],
                thumbnail_timestamp_ms: {},
                thumbnail_url: {},
              },
            ],
            placement: 'reels',
            poll: {
              duration_minutes: 0,
              options: ['string'],
              reply_settings: 'following',
            },
            privacy_status: 'public',
            public_stats_viewable: true,
            publish_at: 'publish_at',
            quote_tweet_id: 'quote_tweet_id',
            recording_date: 'recording_date',
            reply_settings: 'following',
            reshare_post_id: 'reshare_post_id',
            set_caption_for_each_image: true,
            share_to_feed: true,
            tags: ['string'],
            title: 'title',
            trial_reel_type: 'manual',
          },
          social_account_id: 'social_account_id',
        },
      ],
      media: [
        {
          url: 'url',
          skip_processing: true,
          tags: [
            {
              id: 'id',
              platform: 'facebook',
              type: 'user',
              x: 0,
              y: 0,
            },
          ],
          thumbnail_timestamp_ms: {},
          thumbnail_url: {},
        },
      ],
      platform_configurations: {
        bluesky: {
          caption: {},
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
        },
        facebook: {
          caption: {},
          collaborators: [[{}]],
          location: 'location',
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
          set_caption_for_each_image: true,
        },
        instagram: {
          audio_name: 'audio_name',
          caption: {},
          collaborators: ['string'],
          location: 'location',
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
          share_to_feed: true,
          trial_reel_type: 'manual',
        },
        linkedin: {
          caption: {},
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          reshare_post_id: 'reshare_post_id',
        },
        pinterest: {
          board_ids: ['string'],
          caption: {},
          link: 'link',
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          title: 'title',
        },
        threads: {
          caption: {},
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
        },
        tiktok: {
          allow_comment: true,
          allow_duet: true,
          allow_stitch: true,
          auto_add_music: true,
          caption: {},
          disclose_branded_content: true,
          disclose_your_brand: true,
          is_ai_generated: true,
          is_draft: true,
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          privacy_status: 'privacy_status',
          title: 'title',
        },
        tiktok_business: {
          allow_comment: true,
          allow_duet: true,
          allow_stitch: true,
          auto_add_music: true,
          caption: {},
          disclose_branded_content: true,
          disclose_your_brand: true,
          is_ai_generated: true,
          is_draft: true,
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          privacy_status: 'privacy_status',
          title: 'title',
        },
        x: {
          caption: {},
          community_id: 'community_id',
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          poll: {
            duration_minutes: 0,
            options: ['string'],
            reply_settings: 'following',
          },
          quote_tweet_id: 'quote_tweet_id',
          reply_settings: 'following',
        },
        youtube: {
          localizations: { foo: { description: 'description', title: 'title' } },
          caption: {},
          category_id: 'category_id',
          contains_synthetic_media: true,
          default_language: 'default_language',
          description: 'description',
          embeddable: true,
          license: 'youtube',
          made_for_kids: true,
          media: [
            {
              url: 'url',
              skip_processing: true,
              tags: [
                {
                  id: 'id',
                  platform: 'facebook',
                  type: 'user',
                  x: 0,
                  y: 0,
                },
              ],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          privacy_status: 'public',
          public_stats_viewable: true,
          publish_at: 'publish_at',
          recording_date: 'recording_date',
          tags: ['string'],
          title: 'title',
        },
      },
    });
  });
});
