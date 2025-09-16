// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SocialAccountsAPI from './social-accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SocialPosts extends APIResource {
  /**
   * Create Post
   */
  create(body: SocialPostCreateParams, options?: RequestOptions): APIPromise<SocialPost> {
    return this._client.post('/v1/social-posts', { body, ...options });
  }

  /**
   * Get Post by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SocialPost> {
    return this._client.get(path`/v1/social-posts/${id}`, options);
  }

  /**
   * Update Post
   */
  update(id: string, body: SocialPostUpdateParams, options?: RequestOptions): APIPromise<SocialPost> {
    return this._client.put(path`/v1/social-posts/${id}`, { body, ...options });
  }

  /**
   * Get a paginated result for posts based on the applied filters
   */
  list(
    query: SocialPostListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SocialPostListResponse> {
    return this._client.get('/v1/social-posts', { query, ...options });
  }

  /**
   * Delete Post
   */
  delete(id: string, options?: RequestOptions): APIPromise<SocialPostDeleteResponse> {
    return this._client.delete(path`/v1/social-posts/${id}`, options);
  }
}

export interface BlueskyConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<BlueskyConfigurationDto.Media> | null;
}

export namespace BlueskyConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface CreateSocialPost {
  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Array of social account IDs for posting
   */
  social_accounts: Array<string>;

  /**
   * Account-specific configurations for the post
   */
  account_configurations?: Array<CreateSocialPost.AccountConfiguration> | null;

  /**
   * Array of social account IDs for posting
   */
  external_id?: string | null;

  /**
   * If isDraft is set then the post will not be processed
   */
  isDraft?: boolean | null;

  /**
   * Array of media URLs associated with the post
   */
  media?: Array<CreateSocialPost.Media> | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations?: PlatformConfigurationsDto | null;

  /**
   * Scheduled date and time for the post, setting to null or undefined will post
   * instantly
   */
  scheduled_at?: string | null;
}

export namespace CreateSocialPost {
  export interface AccountConfiguration {
    /**
     * Configuration for the social account
     */
    configuration: AccountConfiguration.Configuration;

    /**
     * ID of the social account, you want to apply the configuration to
     */
    social_account_id: string;
  }

  export namespace AccountConfiguration {
    /**
     * Configuration for the social account
     */
    export interface Configuration {
      /**
       * Allow comments on TikTok
       */
      allow_comment?: boolean | null;

      /**
       * Allow duets on TikTok
       */
      allow_duet?: boolean | null;

      /**
       * Allow stitch on TikTok
       */
      allow_stitch?: boolean | null;

      /**
       * Pinterest board IDs
       */
      board_ids?: Array<string> | null;

      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Disclose branded content on TikTok
       */
      disclose_branded_content?: boolean | null;

      /**
       * Disclose your brand on TikTok
       */
      disclose_your_brand?: boolean | null;

      /**
       * Flag content as AI generated on TikTok
       */
      is_ai_generated?: boolean | null;

      /**
       * Will create a draft upload to TikTok, posting will need to be completed from
       * within the app
       */
      is_draft?: boolean | null;

      /**
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Post placement for Facebook/Instagram/Threads
       */
      placement?: 'reels' | 'timeline' | 'stories' | null;

      /**
       * Sets the privacy status for TikTok (private, public)
       */
      privacy_status?: string | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
  }

  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface FacebookConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<FacebookConfigurationDto.Media> | null;

  /**
   * Facebook post placement
   */
  placement?: 'reels' | 'stories' | 'timeline' | null;
}

export namespace FacebookConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface InstagramConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Instagram usernames to be tagged as a collaborator
   */
  collaborators?: Array<string> | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<InstagramConfigurationDto.Media> | null;

  /**
   * Instagram post placement
   */
  placement?: 'reels' | 'stories' | 'timeline' | null;
}

export namespace InstagramConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface LinkedinConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<LinkedinConfigurationDto.Media> | null;
}

export namespace LinkedinConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface PinterestConfigurationDto {
  /**
   * Pinterest board IDs
   */
  board_ids?: Array<string> | null;

  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Pinterest post link
   */
  link?: string | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<PinterestConfigurationDto.Media> | null;
}

export namespace PinterestConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface PlatformConfigurationsDto {
  /**
   * Bluesky configuration
   */
  bluesky?: BlueskyConfigurationDto | null;

  /**
   * Facebook configuration
   */
  facebook?: FacebookConfigurationDto | null;

  /**
   * Instagram configuration
   */
  instagram?: InstagramConfigurationDto | null;

  /**
   * LinkedIn configuration
   */
  linkedin?: LinkedinConfigurationDto | null;

  /**
   * Pinterest configuration
   */
  pinterest?: PinterestConfigurationDto | null;

  /**
   * Threads configuration
   */
  threads?: ThreadsConfigurationDto | null;

  /**
   * TikTok configuration
   */
  tiktok?: TiktokConfiguration | null;

  /**
   * TikTok configuration
   */
  tiktok_business?: TiktokConfiguration | null;

  /**
   * Twitter configuration
   */
  x?: TwitterConfigurationDto | null;

  /**
   * YouTube configuration
   */
  youtube?: YoutubeConfigurationDto | null;
}

export interface SocialPost {
  /**
   * Unique identifier of the post
   */
  id: string;

  /**
   * Account-specific configurations for the post
   */
  account_configurations: Array<SocialPost.AccountConfiguration> | null;

  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Timestamp when the post was created
   */
  created_at: string;

  /**
   * Provided unique identifier of the post
   */
  external_id: string | null;

  /**
   * Array of media URLs associated with the post
   */
  media: Array<SocialPost.Media> | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations: PlatformConfigurationsDto | null;

  /**
   * Scheduled date and time for the post
   */
  scheduled_at: string | null;

  /**
   * Array of social account IDs for posting
   */
  social_accounts: Array<SocialAccountsAPI.SocialAccount>;

  /**
   * Current status of the post: draft, processed, scheduled, or processing
   */
  status: 'draft' | 'scheduled' | 'processing' | 'processed';

  /**
   * Timestamp when the post was last updated
   */
  updated_at: string;
}

export namespace SocialPost {
  export interface AccountConfiguration {
    /**
     * Configuration for the social account
     */
    configuration: AccountConfiguration.Configuration;

    /**
     * ID of the social account, you want to apply the configuration to
     */
    social_account_id: string;
  }

  export namespace AccountConfiguration {
    /**
     * Configuration for the social account
     */
    export interface Configuration {
      /**
       * Allow comments on TikTok
       */
      allow_comment?: boolean | null;

      /**
       * Allow duets on TikTok
       */
      allow_duet?: boolean | null;

      /**
       * Allow stitch on TikTok
       */
      allow_stitch?: boolean | null;

      /**
       * Pinterest board IDs
       */
      board_ids?: Array<string> | null;

      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Disclose branded content on TikTok
       */
      disclose_branded_content?: boolean | null;

      /**
       * Disclose your brand on TikTok
       */
      disclose_your_brand?: boolean | null;

      /**
       * Flag content as AI generated on TikTok
       */
      is_ai_generated?: boolean | null;

      /**
       * Will create a draft upload to TikTok, posting will need to be completed from
       * within the app
       */
      is_draft?: boolean | null;

      /**
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Post placement for Facebook/Instagram/Threads
       */
      placement?: 'reels' | 'timeline' | 'stories' | null;

      /**
       * Sets the privacy status for TikTok (private, public)
       */
      privacy_status?: string | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
  }

  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface ThreadsConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<ThreadsConfigurationDto.Media> | null;

  /**
   * Threads post placement
   */
  placement?: 'reels' | 'timeline' | null;
}

export namespace ThreadsConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface TiktokConfiguration {
  /**
   * Allow comments on TikTok
   */
  allow_comment?: boolean | null;

  /**
   * Allow duets on TikTok
   */
  allow_duet?: boolean | null;

  /**
   * Allow stitch on TikTok
   */
  allow_stitch?: boolean | null;

  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Disclose branded content on TikTok
   */
  disclose_branded_content?: boolean | null;

  /**
   * Disclose your brand on TikTok
   */
  disclose_your_brand?: boolean | null;

  /**
   * Flag content as AI generated on TikTok
   */
  is_ai_generated?: boolean | null;

  /**
   * Will create a draft upload to TikTok, posting will need to be completed from
   * within the app
   */
  is_draft?: boolean | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<TiktokConfiguration.Media> | null;

  /**
   * Sets the privacy status for TikTok (private, public)
   */
  privacy_status?: string | null;

  /**
   * Overrides the `title` from the post
   */
  title?: string | null;
}

export namespace TiktokConfiguration {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface TwitterConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<TwitterConfigurationDto.Media> | null;
}

export namespace TwitterConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface YoutubeConfigurationDto {
  /**
   * Overrides the `caption` from the post
   */
  caption?: unknown | null;

  /**
   * Overrides the `media` from the post
   */
  media?: Array<YoutubeConfigurationDto.Media> | null;

  /**
   * Overrides the `title` from the post
   */
  title?: string | null;
}

export namespace YoutubeConfigurationDto {
  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface SocialPostListResponse {
  data: Array<SocialPost>;

  meta: SocialPostListResponse.Meta;
}

export namespace SocialPostListResponse {
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

export interface SocialPostDeleteResponse {
  /**
   * Whether or not the entity was deleted
   */
  success: boolean;
}

export interface SocialPostCreateParams {
  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Array of social account IDs for posting
   */
  social_accounts: Array<string>;

  /**
   * Account-specific configurations for the post
   */
  account_configurations?: Array<SocialPostCreateParams.AccountConfiguration> | null;

  /**
   * Array of social account IDs for posting
   */
  external_id?: string | null;

  /**
   * If isDraft is set then the post will not be processed
   */
  isDraft?: boolean | null;

  /**
   * Array of media URLs associated with the post
   */
  media?: Array<SocialPostCreateParams.Media> | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations?: PlatformConfigurationsDto | null;

  /**
   * Scheduled date and time for the post, setting to null or undefined will post
   * instantly
   */
  scheduled_at?: string | null;
}

export namespace SocialPostCreateParams {
  export interface AccountConfiguration {
    /**
     * Configuration for the social account
     */
    configuration: AccountConfiguration.Configuration;

    /**
     * ID of the social account, you want to apply the configuration to
     */
    social_account_id: string;
  }

  export namespace AccountConfiguration {
    /**
     * Configuration for the social account
     */
    export interface Configuration {
      /**
       * Allow comments on TikTok
       */
      allow_comment?: boolean | null;

      /**
       * Allow duets on TikTok
       */
      allow_duet?: boolean | null;

      /**
       * Allow stitch on TikTok
       */
      allow_stitch?: boolean | null;

      /**
       * Pinterest board IDs
       */
      board_ids?: Array<string> | null;

      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Disclose branded content on TikTok
       */
      disclose_branded_content?: boolean | null;

      /**
       * Disclose your brand on TikTok
       */
      disclose_your_brand?: boolean | null;

      /**
       * Flag content as AI generated on TikTok
       */
      is_ai_generated?: boolean | null;

      /**
       * Will create a draft upload to TikTok, posting will need to be completed from
       * within the app
       */
      is_draft?: boolean | null;

      /**
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Post placement for Facebook/Instagram/Threads
       */
      placement?: 'reels' | 'timeline' | 'stories' | null;

      /**
       * Sets the privacy status for TikTok (private, public)
       */
      privacy_status?: string | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
  }

  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface SocialPostUpdateParams {
  /**
   * Caption text for the post
   */
  caption: string;

  /**
   * Array of social account IDs for posting
   */
  social_accounts: Array<string>;

  /**
   * Account-specific configurations for the post
   */
  account_configurations?: Array<SocialPostUpdateParams.AccountConfiguration> | null;

  /**
   * Array of social account IDs for posting
   */
  external_id?: string | null;

  /**
   * If isDraft is set then the post will not be processed
   */
  isDraft?: boolean | null;

  /**
   * Array of media URLs associated with the post
   */
  media?: Array<SocialPostUpdateParams.Media> | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations?: PlatformConfigurationsDto | null;

  /**
   * Scheduled date and time for the post, setting to null or undefined will post
   * instantly
   */
  scheduled_at?: string | null;
}

export namespace SocialPostUpdateParams {
  export interface AccountConfiguration {
    /**
     * Configuration for the social account
     */
    configuration: AccountConfiguration.Configuration;

    /**
     * ID of the social account, you want to apply the configuration to
     */
    social_account_id: string;
  }

  export namespace AccountConfiguration {
    /**
     * Configuration for the social account
     */
    export interface Configuration {
      /**
       * Allow comments on TikTok
       */
      allow_comment?: boolean | null;

      /**
       * Allow duets on TikTok
       */
      allow_duet?: boolean | null;

      /**
       * Allow stitch on TikTok
       */
      allow_stitch?: boolean | null;

      /**
       * Pinterest board IDs
       */
      board_ids?: Array<string> | null;

      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Disclose branded content on TikTok
       */
      disclose_branded_content?: boolean | null;

      /**
       * Disclose your brand on TikTok
       */
      disclose_your_brand?: boolean | null;

      /**
       * Flag content as AI generated on TikTok
       */
      is_ai_generated?: boolean | null;

      /**
       * Will create a draft upload to TikTok, posting will need to be completed from
       * within the app
       */
      is_draft?: boolean | null;

      /**
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Post placement for Facebook/Instagram/Threads
       */
      placement?: 'reels' | 'timeline' | 'stories' | null;

      /**
       * Sets the privacy status for TikTok (private, public)
       */
      privacy_status?: string | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
  }

  export interface Media {
    /**
     * Public URL of the media
     */
    url: string;

    /**
     * Timestamp in milliseconds of frame to use as thumbnail for the media
     */
    thumbnail_timestamp_ms?: unknown | null;

    /**
     * Public URL of the thumbnail for the media
     */
    thumbnail_url?: unknown | null;
  }
}

export interface SocialPostListParams {
  /**
   * Filter by external ID. Multiple values imply OR logic.
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
   * Filter by platforms. Multiple values imply OR logic.
   */
  platform?: Array<
    'bluesky' | 'facebook' | 'instagram' | 'linkedin' | 'pinterest' | 'threads' | 'tiktok' | 'x' | 'youtube'
  >;

  /**
   * Filter by post status. Multiple values imply OR logic.
   */
  status?: Array<'draft' | 'scheduled' | 'processing' | 'processed'>;
}

export declare namespace SocialPosts {
  export {
    type BlueskyConfigurationDto as BlueskyConfigurationDto,
    type CreateSocialPost as CreateSocialPost,
    type FacebookConfigurationDto as FacebookConfigurationDto,
    type InstagramConfigurationDto as InstagramConfigurationDto,
    type LinkedinConfigurationDto as LinkedinConfigurationDto,
    type PinterestConfigurationDto as PinterestConfigurationDto,
    type PlatformConfigurationsDto as PlatformConfigurationsDto,
    type SocialPost as SocialPost,
    type ThreadsConfigurationDto as ThreadsConfigurationDto,
    type TiktokConfiguration as TiktokConfiguration,
    type TwitterConfigurationDto as TwitterConfigurationDto,
    type YoutubeConfigurationDto as YoutubeConfigurationDto,
    type SocialPostListResponse as SocialPostListResponse,
    type SocialPostDeleteResponse as SocialPostDeleteResponse,
    type SocialPostCreateParams as SocialPostCreateParams,
    type SocialPostUpdateParams as SocialPostUpdateParams,
    type SocialPostListParams as SocialPostListParams,
  };
}
