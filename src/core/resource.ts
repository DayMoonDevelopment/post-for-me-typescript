// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PostForMe } from '../client';

export abstract class APIResource {
  protected _client: PostForMe;

  constructor(client: PostForMe) {
    this._client = client;
  }
}
