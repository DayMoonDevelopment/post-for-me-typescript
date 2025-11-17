// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostForMe from 'post-for-me';

const client = new PostForMe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource socialAccounts', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.socialAccounts.create({
      access_token: 'access_token',
      access_token_expires_at: '2019-12-27T18:11:19.117Z',
      platform: 'facebook',
      user_id: 'user_id',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.socialAccounts.create({
      access_token: 'access_token',
      access_token_expires_at: '2019-12-27T18:11:19.117Z',
      platform: 'facebook',
      user_id: 'user_id',
      external_id: 'external_id',
      metadata: {},
      refresh_token: 'refresh_token',
      refresh_token_expires_at: '2019-12-27T18:11:19.117Z',
      username: 'username',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.socialAccounts.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.socialAccounts.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.socialAccounts.list();
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
      client.socialAccounts.list(
        {
          id: ['string'],
          external_id: ['string'],
          limit: 0,
          offset: 0,
          platform: ['string'],
          username: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostForMe.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createAuthURL: only required params', async () => {
    const responsePromise = client.socialAccounts.createAuthURL({ platform: 'platform' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createAuthURL: required and optional params', async () => {
    const response = await client.socialAccounts.createAuthURL({
      platform: 'platform',
      external_id: 'external_id',
      platform_data: {
        bluesky: { app_password: 'app_password', handle: 'handle' },
        instagram: { connection_type: 'instagram' },
        linkedin: { connection_type: 'personal' },
      },
      redirect_url_override: 'redirect_url_override',
    });
  });

  // Prism tests are disabled
  test.skip('disconnect', async () => {
    const responsePromise = client.socialAccounts.disconnect('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
