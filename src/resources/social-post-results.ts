// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SocialPostResults extends APIResource {
  /**
   * Get post result by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SocialPostResult> {
    return this._client.get(path`/v1/social-post-results/${id}`, options);
  }

  /**
   * Get a paginated result for post results based on the applied filters
   */
  list(
    query: SocialPostResultListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SocialPostResultListResponse> {
    return this._client.get('/v1/social-post-results', { query, ...options });
  }
}

export interface SocialPostResult {
  /**
   * The unique identifier of the post result
   */
  id: string;

  /**
   * Detailed logs from the post
   */
  details: unknown;

  /**
   * Error message if the post failed
   */
  error: unknown;

  /**
   * Platform-specific data
   */
  platform_data: SocialPostResult.PlatformData;

  /**
   * The ID of the associated post
   */
  post_id: string;

  /**
   * The ID of the associated social account
   */
  social_account_id: string;

  /**
   * Indicates if the post was successful
   */
  success: boolean;
}

export namespace SocialPostResult {
  /**
   * Platform-specific data
   */
  export interface PlatformData {
    /**
     * Platform-specific ID
     */
    id?: string;

    /**
     * URL of the posted content
     */
    url?: string;
  }
}

export interface SocialPostResultListResponse {
  data: Array<SocialPostResult>;

  meta: SocialPostResultListResponse.Meta;
}

export namespace SocialPostResultListResponse {
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

export interface SocialPostResultListParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Filter by platform(s). Multiple values imply OR logic (e.g.,
   * ?platform=x&platform=facebook).
   */
  platform?: Array<string>;

  /**
   * Filter by post IDs. Multiple values imply OR logic (e.g.,
   * ?post_id=123&post_id=456).
   */
  post_id?: Array<string>;

  /**
   * Filter by social account ID(s). Multiple values imply OR logic (e.g.,
   * ?social_account_id=123&social_account_id=456).
   */
  social_account_id?: Array<string>;
}

export declare namespace SocialPostResults {
  export {
    type SocialPostResult as SocialPostResult,
    type SocialPostResultListResponse as SocialPostResultListResponse,
    type SocialPostResultListParams as SocialPostResultListParams,
  };
}
