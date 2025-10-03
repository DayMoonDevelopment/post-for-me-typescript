// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostForMe from 'post-for-me';

const client = new PostForMe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource socialPosts', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.socialPosts.create({ caption: 'caption', social_accounts: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.socialPosts.create({
      caption: 'caption',
      social_accounts: ['string'],
      account_configurations: [
        {
          configuration: {
            allow_comment: true,
            allow_duet: true,
            allow_stitch: true,
            auto_add_music: true,
            board_ids: ['string'],
            caption: {},
            collaborators: [[{}]],
            community_id: 'community_id',
            disclose_branded_content: true,
            disclose_your_brand: true,
            is_ai_generated: true,
            is_draft: true,
            link: 'link',
            location: 'location',
            media: ['string'],
            placement: 'reels',
            poll: { duration_minutes: 0, options: ['string'], reply_settings: 'following' },
            privacy_status: 'privacy_status',
            quote_tweet_id: 'quote_tweet_id',
            reply_settings: 'following',
            share_to_feed: true,
            title: 'title',
          },
          social_account_id: 'social_account_id',
        },
      ],
      external_id: 'external_id',
      isDraft: true,
      media: [
        {
          url: 'url',
          tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
        },
        instagram: {
          caption: {},
          collaborators: ['string'],
          location: 'location',
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
          share_to_feed: true,
        },
        linkedin: {
          caption: {},
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
        },
        pinterest: {
          board_ids: ['string'],
          caption: {},
          link: 'link',
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
        },
        threads: {
          caption: {},
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          poll: { duration_minutes: 0, options: ['string'], reply_settings: 'following' },
          quote_tweet_id: 'quote_tweet_id',
          reply_settings: 'following',
        },
        youtube: {
          caption: {},
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          title: 'title',
        },
      },
      scheduled_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.socialPosts.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.socialPosts.update('id', {
      caption: 'caption',
      social_accounts: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.socialPosts.update('id', {
      caption: 'caption',
      social_accounts: ['string'],
      account_configurations: [
        {
          configuration: {
            allow_comment: true,
            allow_duet: true,
            allow_stitch: true,
            auto_add_music: true,
            board_ids: ['string'],
            caption: {},
            collaborators: [[{}]],
            community_id: 'community_id',
            disclose_branded_content: true,
            disclose_your_brand: true,
            is_ai_generated: true,
            is_draft: true,
            link: 'link',
            location: 'location',
            media: ['string'],
            placement: 'reels',
            poll: { duration_minutes: 0, options: ['string'], reply_settings: 'following' },
            privacy_status: 'privacy_status',
            quote_tweet_id: 'quote_tweet_id',
            reply_settings: 'following',
            share_to_feed: true,
            title: 'title',
          },
          social_account_id: 'social_account_id',
        },
      ],
      external_id: 'external_id',
      isDraft: true,
      media: [
        {
          url: 'url',
          tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
        },
        instagram: {
          caption: {},
          collaborators: ['string'],
          location: 'location',
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          placement: 'reels',
          share_to_feed: true,
        },
        linkedin: {
          caption: {},
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
        },
        pinterest: {
          board_ids: ['string'],
          caption: {},
          link: 'link',
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
        },
        threads: {
          caption: {},
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
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
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          poll: { duration_minutes: 0, options: ['string'], reply_settings: 'following' },
          quote_tweet_id: 'quote_tweet_id',
          reply_settings: 'following',
        },
        youtube: {
          caption: {},
          media: [
            {
              url: 'url',
              tags: [{ id: 'id', platform: 'facebook', type: 'user', x: 0, y: 0 }],
              thumbnail_timestamp_ms: {},
              thumbnail_url: {},
            },
          ],
          title: 'title',
        },
      },
      scheduled_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.socialPosts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.socialPosts.list(
        { external_id: ['string'], limit: 0, offset: 0, platform: ['bluesky'], status: ['draft'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostForMe.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.socialPosts.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
