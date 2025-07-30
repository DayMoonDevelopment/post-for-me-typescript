// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SocialPostsAPI from './social-posts';
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
  platform_configurations?: CreateSocialPost.PlatformConfigurations | null;

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
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Threads post location
       */
      location?: 'reels' | 'timeline' | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

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

  /**
   * Platform-specific configurations for the post
   */
  export interface PlatformConfigurations {
    /**
     * Bluesky configuration
     */
    bluesky?: PlatformConfigurations.Bluesky | null;

    /**
     * Facebook configuration
     */
    facebook?: PlatformConfigurations.Facebook | null;

    /**
     * Instagram configuration
     */
    instagram?: PlatformConfigurations.Instagram | null;

    /**
     * LinkedIn configuration
     */
    linkedin?: PlatformConfigurations.Linkedin | null;

    /**
     * Pinterest configuration
     */
    pinterest?: PlatformConfigurations.Pinterest | null;

    /**
     * Threads configuration
     */
    threads?: PlatformConfigurations.Threads | null;

    /**
     * TikTok configuration
     */
    tiktok?: SocialPostsAPI.TiktokConfiguration | null;

    /**
     * TikTok configuration
     */
    tiktok_business?: SocialPostsAPI.TiktokConfiguration | null;

    /**
     * Twitter configuration
     */
    x?: PlatformConfigurations.X | null;

    /**
     * YouTube configuration
     */
    youtube?: PlatformConfigurations.Youtube | null;
  }

  export namespace PlatformConfigurations {
    /**
     * Bluesky configuration
     */
    export interface Bluesky {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Facebook configuration
     */
    export interface Facebook {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Instagram configuration
     */
    export interface Instagram {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * LinkedIn configuration
     */
    export interface Linkedin {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Pinterest configuration
     */
    export interface Pinterest {
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
      media?: Array<string> | null;
    }

    /**
     * Threads configuration
     */
    export interface Threads {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Threads post location
       */
      location?: 'reels' | 'timeline' | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Twitter configuration
     */
    export interface X {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * YouTube configuration
     */
    export interface Youtube {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
  }
}

export interface SocialPost {
  /**
   * Unique identifier of the post
   */
  id: string;

  /**
   * Account-specific configurations for the post
   */
  account_configurations: Array<unknown> | null;

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
  media: unknown | null;

  /**
   * Platform-specific configurations for the post
   */
  platform_configurations: unknown | null;

  /**
   * Scheduled date and time for the post
   */
  scheduled_at: string | null;

  /**
   * Array of social account IDs for posting
   */
  social_accounts: Array<string>;

  /**
   * Current status of the post: draft, processed, scheduled, or processing
   */
  status: 'draft' | 'scheduled' | 'processing' | 'processed';

  /**
   * Timestamp when the post was last updated
   */
  updated_at: string;
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
   * Overrides the `media` from the post
   */
  media?: Array<string> | null;

  /**
   * Sets the privacy status for TikTok (private, public)
   */
  privacy_status?: string | null;

  /**
   * Overrides the `title` from the post
   */
  title?: string | null;
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
  platform_configurations?: SocialPostCreateParams.PlatformConfigurations | null;

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
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Threads post location
       */
      location?: 'reels' | 'timeline' | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

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

  /**
   * Platform-specific configurations for the post
   */
  export interface PlatformConfigurations {
    /**
     * Bluesky configuration
     */
    bluesky?: PlatformConfigurations.Bluesky | null;

    /**
     * Facebook configuration
     */
    facebook?: PlatformConfigurations.Facebook | null;

    /**
     * Instagram configuration
     */
    instagram?: PlatformConfigurations.Instagram | null;

    /**
     * LinkedIn configuration
     */
    linkedin?: PlatformConfigurations.Linkedin | null;

    /**
     * Pinterest configuration
     */
    pinterest?: PlatformConfigurations.Pinterest | null;

    /**
     * Threads configuration
     */
    threads?: PlatformConfigurations.Threads | null;

    /**
     * TikTok configuration
     */
    tiktok?: SocialPostsAPI.TiktokConfiguration | null;

    /**
     * TikTok configuration
     */
    tiktok_business?: SocialPostsAPI.TiktokConfiguration | null;

    /**
     * Twitter configuration
     */
    x?: PlatformConfigurations.X | null;

    /**
     * YouTube configuration
     */
    youtube?: PlatformConfigurations.Youtube | null;
  }

  export namespace PlatformConfigurations {
    /**
     * Bluesky configuration
     */
    export interface Bluesky {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Facebook configuration
     */
    export interface Facebook {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Instagram configuration
     */
    export interface Instagram {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * LinkedIn configuration
     */
    export interface Linkedin {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Pinterest configuration
     */
    export interface Pinterest {
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
      media?: Array<string> | null;
    }

    /**
     * Threads configuration
     */
    export interface Threads {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Threads post location
       */
      location?: 'reels' | 'timeline' | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Twitter configuration
     */
    export interface X {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * YouTube configuration
     */
    export interface Youtube {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
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
  platform_configurations?: SocialPostUpdateParams.PlatformConfigurations | null;

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
       * Pinterest post link
       */
      link?: string | null;

      /**
       * Threads post location
       */
      location?: 'reels' | 'timeline' | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

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

  /**
   * Platform-specific configurations for the post
   */
  export interface PlatformConfigurations {
    /**
     * Bluesky configuration
     */
    bluesky?: PlatformConfigurations.Bluesky | null;

    /**
     * Facebook configuration
     */
    facebook?: PlatformConfigurations.Facebook | null;

    /**
     * Instagram configuration
     */
    instagram?: PlatformConfigurations.Instagram | null;

    /**
     * LinkedIn configuration
     */
    linkedin?: PlatformConfigurations.Linkedin | null;

    /**
     * Pinterest configuration
     */
    pinterest?: PlatformConfigurations.Pinterest | null;

    /**
     * Threads configuration
     */
    threads?: PlatformConfigurations.Threads | null;

    /**
     * TikTok configuration
     */
    tiktok?: SocialPostsAPI.TiktokConfiguration | null;

    /**
     * TikTok configuration
     */
    tiktok_business?: SocialPostsAPI.TiktokConfiguration | null;

    /**
     * Twitter configuration
     */
    x?: PlatformConfigurations.X | null;

    /**
     * YouTube configuration
     */
    youtube?: PlatformConfigurations.Youtube | null;
  }

  export namespace PlatformConfigurations {
    /**
     * Bluesky configuration
     */
    export interface Bluesky {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Facebook configuration
     */
    export interface Facebook {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Instagram configuration
     */
    export interface Instagram {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * LinkedIn configuration
     */
    export interface Linkedin {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Pinterest configuration
     */
    export interface Pinterest {
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
      media?: Array<string> | null;
    }

    /**
     * Threads configuration
     */
    export interface Threads {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Threads post location
       */
      location?: 'reels' | 'timeline' | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * Twitter configuration
     */
    export interface X {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;
    }

    /**
     * YouTube configuration
     */
    export interface Youtube {
      /**
       * Overrides the `caption` from the post
       */
      caption?: unknown | null;

      /**
       * Overrides the `media` from the post
       */
      media?: Array<string> | null;

      /**
       * Overrides the `title` from the post
       */
      title?: string | null;
    }
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
    | 'bluesky'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'pinterest'
    | 'threads'
    | 'tiktok'
    | 'twitter'
    | 'youtube'
  >;

  /**
   * Filter by post status. Multiple values imply OR logic.
   */
  status?: Array<'draft' | 'scheduled' | 'processing' | 'processed'>;
}

export declare namespace SocialPosts {
  export {
    type CreateSocialPost as CreateSocialPost,
    type SocialPost as SocialPost,
    type TiktokConfiguration as TiktokConfiguration,
    type SocialPostListResponse as SocialPostListResponse,
    type SocialPostDeleteResponse as SocialPostDeleteResponse,
    type SocialPostCreateParams as SocialPostCreateParams,
    type SocialPostUpdateParams as SocialPostUpdateParams,
    type SocialPostListParams as SocialPostListParams,
  };
}
