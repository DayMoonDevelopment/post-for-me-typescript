// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SocialAccounts extends APIResource {
  /**
   * If a social account with the same platform and user_id already exists, it will
   * be updated. If not, a new social account will be created.
   *
   * @example
   * ```ts
   * const socialAccount = await client.socialAccounts.create({
   *   access_token: 'access_token',
   *   access_token_expires_at: '2019-12-27T18:11:19.117Z',
   *   platform: 'facebook',
   *   user_id: 'user_id',
   * });
   * ```
   */
  create(body: SocialAccountCreateParams, options?: RequestOptions): APIPromise<SocialAccount> {
    return this._client.post('/v1/social-accounts', { body, ...options });
  }

  /**
   * Get social account by ID
   *
   * @example
   * ```ts
   * const socialAccount = await client.socialAccounts.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SocialAccount> {
    return this._client.get(path`/v1/social-accounts/${id}`, options);
  }

  /**
   * Update social account
   *
   * @example
   * ```ts
   * const socialAccount = await client.socialAccounts.update(
   *   'id',
   * );
   * ```
   */
  update(id: string, body: SocialAccountUpdateParams, options?: RequestOptions): APIPromise<SocialAccount> {
    return this._client.patch(path`/v1/social-accounts/${id}`, { body, ...options });
  }

  /**
   * Get a paginated result for social accounts based on the applied filters
   *
   * @example
   * ```ts
   * const socialAccounts = await client.socialAccounts.list();
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.socialAccounts.createAuthURL({
   *   platform: 'platform',
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.socialAccounts.disconnect(
   *   'id',
   * );
   * ```
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
   * The platform's profile photo of the social account
   */
  profile_photo_url: string | null;

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
   * The platform's profile photo of the social account
   */
  profile_photo_url: string | null;

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

export interface SocialAccountCreateParams {
  /**
   * The access token of the social account
   */
  access_token: string;

  /**
   * The access token expiration date of the social account
   */
  access_token_expires_at: string;

  /**
   * The platform of the social account
   */
  platform:
    | 'facebook'
    | 'instagram'
    | 'x'
    | 'tiktok'
    | 'youtube'
    | 'pinterest'
    | 'linkedin'
    | 'bluesky'
    | 'threads'
    | 'tiktok_business';

  /**
   * The user id of the social account
   */
  user_id: string;

  /**
   * The external id of the social account
   */
  external_id?: string | null;

  /**
   * The metadata of the social account
   */
  metadata?: unknown;

  /**
   * The refresh token of the social account
   */
  refresh_token?: string | null;

  /**
   * The refresh token expiration date of the social account
   */
  refresh_token_expires_at?: string | null;

  /**
   * The platform's username of the social account
   */
  username?: string | null;
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
   * List of permissions you want to allow. Will default to only post permissions.
   * You must include the "feeds" permission to request an account feed and metrics
   */
  permissions?: Array<'posts' | 'feeds'>;

  /**
   * Additional data needed for the provider
   */
  platform_data?: SocialAccountCreateAuthURLParams.PlatformData;

  /**
   * Override the default redirect URL for the OAuth flow. If provided, this URL will
   * be used instead of our redirect URL. Make sure this URL is included in your
   * app's authorized redirect urls. This override will not work when using our
   * system credientals.
   */
  redirect_url_override?: string;
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
     * Additional data for connecting facebook accounts
     */
    facebook?: PlatformData.Facebook;

    /**
     * Additional data for connecting instagram accounts
     */
    instagram?: PlatformData.Instagram;

    /**
     * Additional data for connecting linkedin accounts
     */
    linkedin?: PlatformData.Linkedin;

    /**
     * Additional data for connecting Pinterest accounts
     */
    pinterest?: PlatformData.Pinterest;

    /**
     * Additional data for connecting Threads accounts
     */
    threads?: PlatformData.Threads;

    /**
     * Additional data for connecting TikTok accounts
     */
    tiktok?: PlatformData.Tiktok;

    /**
     * Additional data for connecting TikTok Business accounts
     */
    tiktok_business?: PlatformData.TiktokBusiness;

    /**
     * Additional data for connecting YouTube accounts
     */
    youtube?: PlatformData.Youtube;
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
     * Additional data for connecting facebook accounts
     */
    export interface Facebook {
      /**
       * Override the default permissions/scopes requested during OAuth. Default scopes:
       * public_profile, pages_show_list, pages_read_engagement, pages_manage_posts,
       * business_management
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting instagram accounts
     */
    export interface Instagram {
      /**
       * The type of connection; instagram for using login with instagram, facebook for
       * using login with facebook.
       */
      connection_type: 'instagram' | 'facebook';

      /**
       * Override the default permissions/scopes requested during OAuth. Default
       * instagram scopes: instagram_business_basic, instagram_business_content_publish.
       * Default facebook scopes: instagram_basic, instagram_content_publish,
       * pages_show_list, public_profile, business_management
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting linkedin accounts
     */
    export interface Linkedin {
      /**
       * The type of connection; If using our provided credentials always use
       * "organization". If using your own crednetials then only use "organization" if
       * you are using the Community API
       */
      connection_type: 'personal' | 'organization';

      /**
       * Override the default permissions/scopes requested during OAuth. Default personal
       * scopes: openid, w_member_social, profile, email. Default organization scopes:
       * r_basicprofile, w_member_social, r_organization_social, w_organization_social,
       * rw_organization_admin
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting Pinterest accounts
     */
    export interface Pinterest {
      /**
       * Override the default permissions/scopes requested during OAuth. Default scopes:
       * boards:read, boards:write, pins:read, pins:write, user_accounts:read
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting Threads accounts
     */
    export interface Threads {
      /**
       * Override the default permissions/scopes requested during OAuth. Default scopes:
       * threads_basic, threads_content_publish
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting TikTok accounts
     */
    export interface Tiktok {
      /**
       * Override the default permissions/scopes requested during OAuth. Default scopes:
       * user.info.basic, video.list, video.upload, video.publish
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting TikTok Business accounts
     */
    export interface TiktokBusiness {
      /**
       * Override the default permissions/scopes requested during OAuth. Default scopes:
       * user.info.basic, user.info.username, user.info.stats, user.info.profile,
       * user.account.type, user.insights, video.list, video.insights, comment.list,
       * comment.list.manage, video.publish, video.upload, biz.spark.auth,
       * discovery.search.words
       */
      permission_overrides?: Array<Array<unknown>>;
    }

    /**
     * Additional data for connecting YouTube accounts
     */
    export interface Youtube {
      /**
       * Override the default permissions/scopes requested during OAuth. Default scopes:
       * https://www.googleapis.com/auth/youtube.force-ssl,
       * https://www.googleapis.com/auth/youtube.upload,
       * https://www.googleapis.com/auth/youtube.readonly,
       * https://www.googleapis.com/auth/userinfo.profile
       */
      permission_overrides?: Array<Array<unknown>>;
    }
  }
}

export declare namespace SocialAccounts {
  export {
    type SocialAccount as SocialAccount,
    type SocialAccountListResponse as SocialAccountListResponse,
    type SocialAccountCreateAuthURLResponse as SocialAccountCreateAuthURLResponse,
    type SocialAccountDisconnectResponse as SocialAccountDisconnectResponse,
    type SocialAccountCreateParams as SocialAccountCreateParams,
    type SocialAccountUpdateParams as SocialAccountUpdateParams,
    type SocialAccountListParams as SocialAccountListParams,
    type SocialAccountCreateAuthURLParams as SocialAccountCreateAuthURLParams,
  };
}
