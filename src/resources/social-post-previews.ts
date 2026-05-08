// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SocialPostsAPI from './social-posts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 *
 * Social Post Previews allow you to see what a Social Post will create for each account in the post.
 */
export class SocialPostPreviews extends APIResource {
  /**
   * Create Post Previews
   */
  create(
    body: SocialPostPreviewCreateParams,
    options?: RequestOptions,
  ): APIPromise<SocialPostPreviewCreateResponse> {
    return this._client.post('/v1/social-post-previews', { body, ...options });
  }
}

export interface CreateSocialPostPreview {
  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Array of social accounts. Can preview non connected accounts, just specify a
   * random ID
   */
  preview_social_accounts: Array<CreateSocialPostPreview.PreviewSocialAccount>;

  /**
   * Account-specific configurations for the post
   */
  account_configurations?: Array<SocialPostsAPI.AccountConfiguration> | null;

  /**
   * Array of media URLs associated with the post
   */
  media?: Array<SocialPostsAPI.SocialPostMedia> | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations?: SocialPostsAPI.PlatformConfigurationsDto | null;
}

export namespace CreateSocialPostPreview {
  export interface PreviewSocialAccount {
    /**
     * ID of the social account, ex: spc_12312
     */
    id: string;

    /**
     * Platform of the social account
     */
    platform: string;

    /**
     * username of the social account
     */
    username?: string;
  }
}

export interface SocialPostPreview {
  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Platform of the post
   */
  platform: string;

  /**
   * Id of the social account
   */
  social_account_id: string;

  /**
   * Additional configuration for this platform
   */
  configuration?: unknown;

  /**
   * Array of media URLs associated with the post
   */
  media?: Array<SocialPostsAPI.SocialPostMedia> | null;

  /**
   * Url of the social account profile picture
   */
  social_account_profile_picture_url?: unknown;

  /**
   * Username of the social account
   */
  social_account_username?: unknown;
}

export type SocialPostPreviewCreateResponse = Array<SocialPostPreview>;

export interface SocialPostPreviewCreateParams {
  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Array of social accounts. Can preview non connected accounts, just specify a
   * random ID
   */
  preview_social_accounts: Array<SocialPostPreviewCreateParams.PreviewSocialAccount>;

  /**
   * Account-specific configurations for the post
   */
  account_configurations?: Array<SocialPostsAPI.AccountConfiguration> | null;

  /**
   * Array of media URLs associated with the post
   */
  media?: Array<SocialPostsAPI.SocialPostMedia> | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations?: SocialPostsAPI.PlatformConfigurationsDto | null;
}

export namespace SocialPostPreviewCreateParams {
  export interface PreviewSocialAccount {
    /**
     * ID of the social account, ex: spc_12312
     */
    id: string;

    /**
     * Platform of the social account
     */
    platform: string;

    /**
     * username of the social account
     */
    username?: string;
  }
}

export declare namespace SocialPostPreviews {
  export {
    type CreateSocialPostPreview as CreateSocialPostPreview,
    type SocialPostPreview as SocialPostPreview,
    type SocialPostPreviewCreateResponse as SocialPostPreviewCreateResponse,
    type SocialPostPreviewCreateParams as SocialPostPreviewCreateParams,
  };
}
