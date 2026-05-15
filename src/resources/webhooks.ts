// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SocialPostsAPI from './social-posts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 *
 * Webhooks enable you to subscribe to certain events. This involves Post for Me making a POST request to the URL of any webhooks you create.
 * Only the events you subscribe to will be sent to your webhook URL.
 *
 * ## Payload
 * When an event happens that your webhook is subscribed to, we will make a POST request with the following JSON body
 *
 * ```
 *     {
 *         "event_type": "",
 *         "data": {}
 *     }
 * ```
 *
 * The event_type will be the event that triggered the webhook POST, data will be the resulting entity from the event
 *
 * ## Security
 * To verify the POST to your webhook URL is from us we will include a secret in the header "Post-For-Me-Webhook-Secret".
 * When you create a webhook you will receive the secret in the response.
 *
 * ## Retries
 * If your server fails to respond with a 2XX code, requests to it will be retried with exponential backoff around 8 times over the course of just over a day.
 */
export class Webhooks extends APIResource {
  /**
   * Create Webhook
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post('/v1/webhooks', { body, ...options });
  }

  /**
   * Get webhook by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/v1/webhooks/${id}`, options);
  }

  /**
   * Update Webhook
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.patch(path`/v1/webhooks/${id}`, { body, ...options });
  }

  /**
   * Get a paginated result for webhooks based on the applied filters
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/v1/webhooks', { query, ...options });
  }

  /**
   * Delete Webhook
   */
  delete(id: string, options?: RequestOptions): APIPromise<SocialPostsAPI.DeleteEntityResponse> {
    return this._client.delete(path`/v1/webhooks/${id}`, options);
  }
}

export interface Webhook {
  /**
   * The unique identifier of the webhook
   */
  id: string;

  /**
   * Events that will be sent to the webhook
   */
  event_types: Array<string>;

  /**
   * Secret key used to verify webhook post
   */
  secret: string;

  /**
   * The public webhook url
   */
  url: string;
}

export interface WebhookListResponse {
  data: Array<Webhook>;

  meta: WebhookListResponse.Meta;
}

export namespace WebhookListResponse {
  export interface Meta {
    /**
     * Maximum number of items returned.
     */
    limit: number;

    /**
     * URL to the next page of results, or null if none.
     */
    next: string | null;

    /**
     * Number of items skipped.
     */
    offset: number;

    /**
     * Total number of items available.
     */
    total: number;
  }
}

export interface WebhookCreateParams {
  /**
   * List of events the webhook will recieve
   */
  event_types: Array<
    | 'social.post.created'
    | 'social.post.updated'
    | 'social.post.deleted'
    | 'social.post.result.created'
    | 'social.account.created'
    | 'social.account.updated'
  >;

  /**
   * Public url to recieve event data
   */
  url: string;
}

export interface WebhookUpdateParams {
  /**
   * List of events the webhook will recieve
   */
  event_types?: Array<
    | 'social.post.created'
    | 'social.post.updated'
    | 'social.post.deleted'
    | 'social.post.result.created'
    | 'social.account.created'
    | 'social.account.updated'
  >;

  /**
   * Public url to recieve event data
   */
  url?: string;
}

export interface WebhookListParams {
  /**
   * Filter by id(s). Multiple values imply OR logic (e.g.,
   * ?id=wbh_xxxxxx&id=wbh_yyyyyy).
   */
  id?: Array<string>;

  /**
   * Filter by event type(s). Multiple values imply OR logic (e.g.,
   * ?event_type=social.post.created&event_type=social.post.updated).
   */
  event_type?: Array<string>;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Filter by url(s). Multiple values imply OR logic (e.g.,
   * ?url=https://example.com&url=https://postforme.dev).
   */
  url?: Array<string>;
}

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
