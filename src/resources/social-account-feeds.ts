// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SocialAccountFeeds extends APIResource {
  /**
   * Get a paginated result for the social account based on the applied filters
   */
  list(
    socialAccountID: string,
    query: SocialAccountFeedListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SocialAccountFeedListResponse> {
    return this._client.get(path`/v1/social-account-feeds/${socialAccountID}`, { query, ...options });
  }
}

export interface PlatformPost {
  /**
   * Caption or text content of the post
   */
  caption: string;

  /**
   * Array of media items attached to the post
   */
  media: Array<Array<unknown>>;

  /**
   * Social media platform name
   */
  platform: string;

  /**
   * Platform-specific account ID
   */
  platform_account_id: string;

  /**
   * Platform-specific post ID
   */
  platform_post_id: string;

  /**
   * URL to the post on the platform
   */
  platform_url: string;

  /**
   * ID of the social account
   */
  social_account_id: string;

  /**
   * External account ID from the platform
   */
  external_account_id?: string | null;

  /**
   * External post ID from the platform
   */
  external_post_id?: string | null;

  /**
   * Post metrics and analytics data
   */
  metrics?:
    | PlatformPost.TikTokBusinessMetricsDto
    | PlatformPost.TikTokPostMetricsDto
    | PlatformPost.InstagramPostMetricsDto
    | PlatformPost.YouTubePostMetricsDto;

  /**
   * Date the post was published
   */
  posted_at?: string;

  /**
   * ID of the social post
   */
  social_post_id?: string | null;

  /**
   * ID of the social post result
   */
  social_post_result_id?: string | null;
}

export namespace PlatformPost {
  export interface TikTokBusinessMetricsDto {
    /**
     * Number of address clicks
     */
    address_clicks: number;

    /**
     * Number of app download clicks
     */
    app_download_clicks: number;

    /**
     * Audience cities breakdown
     */
    audience_cities: Array<TikTokBusinessMetricsDto.AudienceCity>;

    /**
     * Audience countries breakdown
     */
    audience_countries: Array<TikTokBusinessMetricsDto.AudienceCountry>;

    /**
     * Audience genders breakdown
     */
    audience_genders: Array<TikTokBusinessMetricsDto.AudienceGender>;

    /**
     * Audience types breakdown
     */
    audience_types: Array<TikTokBusinessMetricsDto.AudienceType>;

    /**
     * Average time watched in seconds
     */
    average_time_watched: number;

    /**
     * Number of comments on the post
     */
    comments: number;

    /**
     * Number of email clicks
     */
    email_clicks: number;

    /**
     * Engagement likes data by percentage and time
     */
    engagement_likes: Array<TikTokBusinessMetricsDto.EngagementLike>;

    /**
     * Number of favorites on the post
     */
    favorites: number;

    /**
     * Rate of full video watches as a percentage
     */
    full_video_watched_rate: number;

    /**
     * Impression sources breakdown
     */
    impression_sources: Array<TikTokBusinessMetricsDto.ImpressionSource>;

    /**
     * Number of lead submissions
     */
    lead_submissions: number;

    /**
     * Number of likes on the post
     */
    likes: number;

    /**
     * Number of new followers gained from the post
     */
    new_followers: number;

    /**
     * Number of phone number clicks
     */
    phone_number_clicks: number;

    /**
     * Number of profile views generated
     */
    profile_views: number;

    /**
     * Total reach of the post
     */
    reach: number;

    /**
     * Number of shares on the post
     */
    shares: number;

    /**
     * Total time watched in seconds
     */
    total_time_watched: number;

    /**
     * Video view retention data by percentage and time
     */
    video_view_retention: Array<TikTokBusinessMetricsDto.VideoViewRetention>;

    /**
     * Total number of video views
     */
    video_views: number;

    /**
     * Number of website clicks
     */
    website_clicks: number;
  }

  export namespace TikTokBusinessMetricsDto {
    export interface AudienceCity {
      /**
       * City name
       */
      city_name: string;

      /**
       * Percentage of audience from this city
       */
      percentage: number;
    }

    export interface AudienceCountry {
      /**
       * Country name
       */
      country: string;

      /**
       * Percentage of audience from this country
       */
      percentage: number;
    }

    export interface AudienceGender {
      /**
       * Gender category
       */
      gender: string;

      /**
       * Percentage of audience of this gender
       */
      percentage: number;
    }

    export interface AudienceType {
      /**
       * Percentage of audience of this type
       */
      percentage: number;

      /**
       * Type of audience
       */
      type: string;
    }

    export interface EngagementLike {
      /**
       * Percentage value for the metric
       */
      percentage: number;

      /**
       * Time in seconds for the metric
       */
      second: string;
    }

    export interface ImpressionSource {
      /**
       * Name of the impression source
       */
      impression_source: string;

      /**
       * Percentage of impressions from this source
       */
      percentage: number;
    }

    export interface VideoViewRetention {
      /**
       * Percentage value for the metric
       */
      percentage: number;

      /**
       * Time in seconds for the metric
       */
      second: string;
    }
  }

  export interface TikTokPostMetricsDto {
    /**
     * Number of comments on the video
     */
    comment_count: number;

    /**
     * Number of likes on the video
     */
    like_count: number;

    /**
     * Number of shares of the video
     */
    share_count: number;

    /**
     * Number of views on the video
     */
    view_count: number;
  }

  export interface InstagramPostMetricsDto {
    /**
     * Number of comments on the post
     */
    comments?: number;

    /**
     * Number of new follows from this post
     */
    follows?: number;

    /**
     * Average watch time for Reels (in milliseconds)
     */
    ig_reels_avg_watch_time?: number;

    /**
     * Total watch time for Reels (in milliseconds)
     */
    ig_reels_video_view_total_time?: number;

    /**
     * Number of likes on the post
     */
    likes?: number;

    /**
     * Navigation actions taken on the media
     */
    navigation?: number;

    /**
     * Profile activity generated from this post
     */
    profile_activity?: number;

    /**
     * Number of profile visits from this post
     */
    profile_visits?: number;

    /**
     * Total number of unique accounts that have seen the media
     */
    reach?: number;

    /**
     * Number of replies to the story (story media only)
     */
    replies?: number;

    /**
     * Total number of unique accounts that have saved the media
     */
    saved?: number;

    /**
     * Total number of shares of the media
     */
    shares?: number;

    /**
     * Total interactions on the post
     */
    total_interactions?: number;

    /**
     * Number of views on the post
     */
    views?: number;
  }

  export interface YouTubePostMetricsDto {
    /**
     * Number of comments on the video
     */
    comments: number;

    /**
     * Number of dislikes on the video
     */
    dislikes: number;

    /**
     * Number of likes on the video
     */
    likes: number;

    /**
     * Number of views on the video
     */
    views: number;

    /**
     * Number of clickable annotation impressions
     */
    annotationClickableImpressions?: number;

    /**
     * Number of annotation clicks
     */
    annotationClicks?: number;

    /**
     * Annotation click-through rate
     */
    annotationClickThroughRate?: number;

    /**
     * Number of closable annotation impressions
     */
    annotationClosableImpressions?: number;

    /**
     * Annotation close rate
     */
    annotationCloseRate?: number;

    /**
     * Number of annotation closes
     */
    annotationCloses?: number;

    /**
     * Number of annotation impressions
     */
    annotationImpressions?: number;

    /**
     * Average view duration in seconds
     */
    averageViewDuration?: number;

    /**
     * Average percentage of the video watched
     */
    averageViewPercentage?: number;

    /**
     * Card click-through rate
     */
    cardClickRate?: number;

    /**
     * Number of card clicks
     */
    cardClicks?: number;

    /**
     * Number of card impressions
     */
    cardImpressions?: number;

    /**
     * Card teaser click-through rate
     */
    cardTeaserClickRate?: number;

    /**
     * Number of card teaser clicks
     */
    cardTeaserClicks?: number;

    /**
     * Number of card teaser impressions
     */
    cardTeaserImpressions?: number;

    /**
     * Number of engaged views
     */
    engagedViews?: number;

    /**
     * Estimated minutes watched
     */
    estimatedMinutesWatched?: number;

    /**
     * Estimated minutes watched by YouTube Premium (Red) members
     */
    estimatedRedMinutesWatched?: number;

    /**
     * Number of views from YouTube Premium (Red) members
     */
    redViews?: number;

    /**
     * Number of shares
     */
    shares?: number;

    /**
     * Subscribers gained
     */
    subscribersGained?: number;

    /**
     * Subscribers lost
     */
    subscribersLost?: number;

    /**
     * Number of times the video was added to playlists
     */
    videosAddedToPlaylists?: number;

    /**
     * Number of times the video was removed from playlists
     */
    videosRemovedFromPlaylists?: number;
  }
}

export interface SocialAccountFeedListResponse {
  data: Array<PlatformPost>;

  meta: SocialAccountFeedListResponse.Meta;
}

export namespace SocialAccountFeedListResponse {
  export interface Meta {
    /**
     * Id representing the next page of items
     */
    cursor: string;

    /**
     * Maximum number of items returned.
     */
    limit: number;

    /**
     * URL to the next page of results, or null if none.
     */
    next: string | null;

    /**
     * Indicates if there are more results or not
     */
    has_more?: boolean;
  }
}

export interface SocialAccountFeedListParams {
  /**
   * Cursor identifying next page of results
   */
  cursor?: string;

  /**
   * Expand additional data in the response. Currently supports: "metrics" to include
   * post analytics data.
   */
  expand?: Array<'metrics'>;

  /**
   * Filter by Post for Me Social Postexternal ID. Multiple values imply OR logic
   * (e.g., ?external_post_id=xxxxxx&external_post_id=yyyyyy).
   */
  external_post_id?: Array<string>;

  /**
   * Number of items to return; Note: some platforms will have different max limits,
   * in the case the provided limit is over the platform's limit we will return the
   * max allowed by the platform.
   */
  limit?: number;

  /**
   * Filter by the platform's id(s). Multiple values imply OR logic (e.g.,
   * ?social_post_id=spr_xxxxxx&social_post_id=spr_yyyyyy).
   */
  platform_post_id?: Array<string>;

  /**
   * Filter by Post for Me Social Post id(s). Multiple values imply OR logic (e.g.,
   * ?social_post_id=sp_xxxxxx&social_post_id=sp_yyyyyy).
   */
  social_post_id?: Array<string>;
}

export declare namespace SocialAccountFeeds {
  export {
    type PlatformPost as PlatformPost,
    type SocialAccountFeedListResponse as SocialAccountFeedListResponse,
    type SocialAccountFeedListParams as SocialAccountFeedListParams,
  };
}
