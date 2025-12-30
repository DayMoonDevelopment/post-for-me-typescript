// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostForMe from 'post-for-me';

const client = new PostForMe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource socialAccountFeeds', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.socialAccountFeeds.list('social_account_id');
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
      client.socialAccountFeeds.list(
        'social_account_id',
        {
          cursor: 'cursor',
          expand: ['metrics'],
          external_post_id: ['string'],
          limit: 0,
          platform_post_id: ['string'],
          social_post_id: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostForMe.NotFoundError);
  });
});
