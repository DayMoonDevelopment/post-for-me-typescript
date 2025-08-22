// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SocialAccounts extends APIResource {
  /**
   * Get social account by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SocialAccount> {
    return this._client.get(path`/v1/social-accounts/${id}`, options);
  }

  /**
   * Update social account
   */
  update(id: string, body: SocialAccountUpdateParams, options?: RequestOptions): APIPromise<SocialAccount> {
    return this._client.patch(path`/v1/social-accounts/${id}`, { body, ...options });
  }

  /**
   * Get a paginated result for social accounts based on the applied filters
   */
  list(
    query: SocialAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SocialAccountListResponse> {
    return this._client.get('/v1/social-accounts', { query, ...options });
  }

  /**
   * Generates a URL that initiates the authentication flow for a user's social media
   * account. When visited, the user is redirected to the selected social platform's
   * login/authorization page. Upon successful authentication, they are redirected
   * back to your application
   */
  createAuthURL(
    body: SocialAccountCreateAuthURLParams,
    options?: RequestOptions,
  ): APIPromise<SocialAccountCreateAuthURLResponse> {
    return this._client.post('/v1/social-accounts/auth-url', { body, ...options });
  }

  /**
   * Disconnecting an account with remove all auth tokens and mark the account as
   * disconnected. The record of the account will be kept and can be retrieved and
   * reconnected by the owner of the account.
   */
  disconnect(id: string, options?: RequestOptions): APIPromise<SocialAccountDisconnectResponse> {
    return this._client.post(path`/v1/social-accounts/${id}/disconnect`, options);
  }
}

export interface SocialAccount {
  /**
   * The unique identifier of the social account
   */
  id: string;

  /**
   * The access token of the social account
   */
  access_token: string;

  /**
   * The access token expiration date of the social account
   */
  access_token_expires_at: string;

  /**
   * The external id of the social account
   */
  external_id: string | null;

  /**
   * The metadata of the social account
   */
  metadata: unknown | null;

  /**
   * The platform of the social account
   */
  platform: string;

  /**
   * The refresh token of the social account
   */
  refresh_token: string | null;

  /**
   * The refresh token expiration date of the social account
   */
  refresh_token_expires_at: string | null;

  /**
   * Status of the account
   */
  status: 'connected' | 'disconnected';

  /**
   * The platform's id of the social account
   */
  user_id: string;

  /**
   * The platform's username of the social account
   */
  username: string | null;
}

export interface SocialAccountListResponse {
  data: Array<SocialAccount>;

  meta: SocialAccountListResponse.Meta;
}

export namespace SocialAccountListResponse {
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

export interface SocialAccountCreateAuthURLResponse {
  /**
   * The social account provider
   */
  platform: string;

  /**
   * The url to redirect the user to, in order to connect their account
   */
  url: string;
}

export interface SocialAccountDisconnectResponse {
  /**
   * The unique identifier of the social account
   */
  id: string;

  /**
   * The access token of the social account
   */
  access_token: string;

  /**
   * The access token expiration date of the social account
   */
  access_token_expires_at: string;

  /**
   * The external id of the social account
   */
  external_id: string | null;

  /**
   * The metadata of the social account
   */
  metadata: unknown | null;

  /**
   * The platform of the social account
   */
  platform: string;

  /**
   * The refresh token of the social account
   */
  refresh_token: string | null;

  /**
   * The refresh token expiration date of the social account
   */
  refresh_token_expires_at: string | null;

  /**
   * Status of the account
   */
  status: 'disconnected';

  /**
   * The platform's id of the social account
   */
  user_id: string;

  /**
   * The platform's username of the social account
   */
  username: string | null;
}

export interface SocialAccountUpdateParams {
  /**
   * The platform's external id of the social account
   */
  external_id?: string;

  /**
   * The platform's username of the social account
   */
  username?: string;
}

export interface SocialAccountListParams {
  /**
   * Filter by id(s). Multiple values imply OR logic (e.g.,
   * ?id=spc_xxxxxx&id=spc_yyyyyy).
   */
  id?: Array<string>;

  /**
   * Filter by externalId(s). Multiple values imply OR logic (e.g.,
   * ?externalId=test&externalId=test2).
   */
  external_id?: Array<string>;

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
   * Filter by username(s). Multiple values imply OR logic (e.g.,
   * ?username=test&username=test2).
   */
  username?: Array<string>;
}

export interface SocialAccountCreateAuthURLParams {
  /**
   * The social account provider
   */
  platform: string;

  /**
   * Your unique identifier for the social account
   */
  external_id?: string;

  /**
   * Additional data needed for the provider
   */
  platform_data?: SocialAccountCreateAuthURLParams.PlatformData;
}

export namespace SocialAccountCreateAuthURLParams {
  /**
   * Additional data needed for the provider
   */
  export interface PlatformData {
    /**
     * Additional data needed for connecting bluesky accounts
     */
    bluesky?: PlatformData.Bluesky;

    /**
     * Additional data for connecting linkedin accounts
     */
    linkedin?: PlatformData.Linkedin;
  }

  export namespace PlatformData {
    /**
     * Additional data needed for connecting bluesky accounts
     */
    export interface Bluesky {
      /**
       * The app password of the account
       */
      app_password: string;

      /**
       * The handle of the account
       */
      handle: string;
    }

    /**
     * Additional data for connecting linkedin accounts
     */
    export interface Linkedin {
      /**
       * The type of connection; personal for posting on behalf of the user only,
       * organization for posting on behalf of both an organization and the user
       */
      connection_type: 'personal' | 'organization';
    }
  }
}

export declare namespace SocialAccounts {
  export {
    type SocialAccount as SocialAccount,
    type SocialAccountListResponse as SocialAccountListResponse,
    type SocialAccountCreateAuthURLResponse as SocialAccountCreateAuthURLResponse,
    type SocialAccountDisconnectResponse as SocialAccountDisconnectResponse,
    type SocialAccountUpdateParams as SocialAccountUpdateParams,
    type SocialAccountListParams as SocialAccountListParams,
    type SocialAccountCreateAuthURLParams as SocialAccountCreateAuthURLParams,
  };
}
