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
    | PlatformPost.YouTubePostMetricsDto
    | PlatformPost.FacebookPostMetricsDto
    | PlatformPost.TwitterPostMetricsDto
    | PlatformPost.ThreadsPostMetricsDto
    | PlatformPost.LinkedInPostMetricsDto
    | PlatformPost.BlueskyPostMetricsDto
    | PlatformPost.PinterestPostMetricsDto;

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

  export interface FacebookPostMetricsDto {
    /**
     * Total activity breakdown by action type
     */
    activity_by_action_type?: Array<FacebookPostMetricsDto.ActivityByActionType>;

    /**
     * Unique users activity breakdown by action type
     */
    activity_by_action_type_unique?: Array<FacebookPostMetricsDto.ActivityByActionTypeUnique>;

    /**
     * Number of comments (from post object)
     */
    comments?: number;

    /**
     * Number of fans who saw the post
     */
    fan_reach?: number;

    /**
     * Number of times the photo or video was viewed
     */
    media_views?: number;

    /**
     * Number of people who saw the post via non-viral distribution
     */
    nonviral_reach?: number;

    /**
     * Number of people who saw the post via organic distribution
     */
    organic_reach?: number;

    /**
     * Number of people who saw the post via paid distribution
     */
    paid_reach?: number;

    /**
     * Total number of unique people who saw the post
     */
    reach?: number;

    /**
     * Number of anger reactions
     */
    reactions_anger?: number;

    /**
     * Breakdown of all reaction types
     */
    reactions_by_type?: unknown;

    /**
     * Number of haha reactions
     */
    reactions_haha?: number;

    /**
     * Number of like reactions
     */
    reactions_like?: number;

    /**
     * Number of love reactions
     */
    reactions_love?: number;

    /**
     * Number of sad reactions
     */
    reactions_sorry?: number;

    /**
     * Total number of reactions (all types)
     */
    reactions_total?: number;

    /**
     * Number of wow reactions
     */
    reactions_wow?: number;

    /**
     * Number of shares (from post object)
     */
    shares?: number;

    /**
     * Average time video was viewed in milliseconds
     */
    video_avg_time_watched?: number;

    /**
     * Number of times video was viewed to 95% organically
     */
    video_complete_views_organic?: number;

    /**
     * Number of unique people who viewed video to 95% organically
     */
    video_complete_views_organic_unique?: number;

    /**
     * Number of times video was viewed to 95% via paid distribution
     */
    video_complete_views_paid?: number;

    /**
     * Number of unique people who viewed video to 95% via paid distribution
     */
    video_complete_views_paid_unique?: number;

    /**
     * Length of the video in milliseconds
     */
    video_length?: number;

    /**
     * Video retention graph for autoplayed views
     */
    video_retention_graph_autoplayed?: Array<FacebookPostMetricsDto.VideoRetentionGraphAutoplayed>;

    /**
     * Video retention graph for clicked-to-play views
     */
    video_retention_graph_clicked_to_play?: Array<FacebookPostMetricsDto.VideoRetentionGraphClickedToPlay>;

    /**
     * Number of unique people who performed social actions on the video
     */
    video_social_actions_unique?: number;

    /**
     * Total time video was viewed in milliseconds
     */
    video_view_time?: number;

    /**
     * Video view time breakdown by age and gender
     */
    video_view_time_by_age_gender?: Array<FacebookPostMetricsDto.VideoViewTimeByAgeGender>;

    /**
     * Video view time breakdown by country
     */
    video_view_time_by_country?: Array<FacebookPostMetricsDto.VideoViewTimeByCountry>;

    /**
     * Video view time breakdown by distribution type
     */
    video_view_time_by_distribution_type?: unknown;

    /**
     * Video view time breakdown by region
     */
    video_view_time_by_region?: Array<FacebookPostMetricsDto.VideoViewTimeByRegion>;

    /**
     * Total time video was viewed in milliseconds via organic distribution
     */
    video_view_time_organic?: number;

    /**
     * Number of times video was viewed for 3+ seconds
     */
    video_views?: number;

    /**
     * Number of times video was viewed for 15+ seconds
     */
    video_views_15s?: number;

    /**
     * Number of times video was viewed for 60+ seconds (excludes videos shorter than
     * 60s)
     */
    video_views_60s?: number;

    /**
     * Number of times video was autoplayed for 3+ seconds
     */
    video_views_autoplayed?: number;

    /**
     * Video views breakdown by distribution type
     */
    video_views_by_distribution_type?: unknown;

    /**
     * Number of times video was clicked to play for 3+ seconds
     */
    video_views_clicked_to_play?: number;

    /**
     * Number of times video was viewed for 3+ seconds organically
     */
    video_views_organic?: number;

    /**
     * Number of unique people who viewed the video for 3+ seconds organically
     */
    video_views_organic_unique?: number;

    /**
     * Number of times video was viewed for 3+ seconds via paid distribution
     */
    video_views_paid?: number;

    /**
     * Number of unique people who viewed the video for 3+ seconds via paid
     * distribution
     */
    video_views_paid_unique?: number;

    /**
     * Number of times video was viewed with sound on
     */
    video_views_sound_on?: number;

    /**
     * Number of unique people who viewed the video for 3+ seconds
     */
    video_views_unique?: number;

    /**
     * Number of people who saw the post in News Feed via viral reach
     */
    viral_reach?: number;
  }

  export namespace FacebookPostMetricsDto {
    export interface ActivityByActionType {
      /**
       * Action type (e.g., like, comment, share)
       */
      action_type: string;

      /**
       * Number of actions
       */
      value: number;
    }

    export interface ActivityByActionTypeUnique {
      /**
       * Action type (e.g., like, comment, share)
       */
      action_type: string;

      /**
       * Number of actions
       */
      value: number;
    }

    export interface VideoRetentionGraphAutoplayed {
      /**
       * Percentage of viewers at this time
       */
      rate: number;

      /**
       * Time in seconds
       */
      time: number;
    }

    export interface VideoRetentionGraphClickedToPlay {
      /**
       * Percentage of viewers at this time
       */
      rate: number;

      /**
       * Time in seconds
       */
      time: number;
    }

    export interface VideoViewTimeByAgeGender {
      /**
       * Demographic key (e.g., age_gender, region, country)
       */
      key: string;

      /**
       * Total view time in milliseconds
       */
      value: number;
    }

    export interface VideoViewTimeByCountry {
      /**
       * Demographic key (e.g., age_gender, region, country)
       */
      key: string;

      /**
       * Total view time in milliseconds
       */
      value: number;
    }

    export interface VideoViewTimeByRegion {
      /**
       * Demographic key (e.g., age_gender, region, country)
       */
      key: string;

      /**
       * Total view time in milliseconds
       */
      value: number;
    }
  }

  export interface TwitterPostMetricsDto {
    /**
     * Non-public metrics for the Tweet (available to the Tweet owner or advertisers)
     */
    non_public_metrics?: TwitterPostMetricsDto.NonPublicMetrics;

    /**
     * Organic metrics for the Tweet (available to the Tweet owner)
     */
    organic_metrics?: TwitterPostMetricsDto.OrganicMetrics;

    /**
     * Publicly available metrics for the Tweet
     */
    public_metrics?: TwitterPostMetricsDto.PublicMetrics;
  }

  export namespace TwitterPostMetricsDto {
    /**
     * Non-public metrics for the Tweet (available to the Tweet owner or advertisers)
     */
    export interface NonPublicMetrics {
      /**
       * Number of times this Tweet has been viewed via promoted distribution
       */
      impression_count: number;

      /**
       * Number of clicks on links in this Tweet via promoted distribution
       */
      url_link_clicks: number;

      /**
       * Number of clicks on the author's profile via promoted distribution
       */
      user_profile_clicks: number;
    }

    /**
     * Organic metrics for the Tweet (available to the Tweet owner)
     */
    export interface OrganicMetrics {
      /**
       * Number of times this Tweet has been viewed organically
       */
      impression_count: number;

      /**
       * Number of Likes of this Tweet from organic distribution
       */
      like_count: number;

      /**
       * Number of Replies of this Tweet from organic distribution
       */
      reply_count: number;

      /**
       * Number of Retweets of this Tweet from organic distribution
       */
      retweet_count: number;

      /**
       * Number of clicks on links in this Tweet from organic distribution
       */
      url_link_clicks: number;

      /**
       * Number of clicks on the author's profile from organic distribution
       */
      user_profile_clicks: number;
    }

    /**
     * Publicly available metrics for the Tweet
     */
    export interface PublicMetrics {
      /**
       * Number of times this Tweet has been bookmarked
       */
      bookmark_count: number;

      /**
       * Number of times this Tweet has been viewed
       */
      impression_count: number;

      /**
       * Number of Likes of this Tweet
       */
      like_count: number;

      /**
       * Number of Quotes of this Tweet
       */
      quote_count: number;

      /**
       * Number of Replies of this Tweet
       */
      reply_count: number;

      /**
       * Number of Retweets of this Tweet
       */
      retweet_count: number;
    }
  }

  export interface ThreadsPostMetricsDto {
    /**
     * Number of likes on the post
     */
    likes: number;

    /**
     * Number of quotes of the post
     */
    quotes: number;

    /**
     * Number of replies on the post
     */
    replies: number;

    /**
     * Number of reposts of the post
     */
    reposts: number;

    /**
     * Number of shares of the post
     */
    shares: number;

    /**
     * Number of views on the post
     */
    views: number;
  }

  export interface LinkedInPostMetricsDto {
    /**
     * Number of clicks
     */
    clickCount?: number;

    /**
     * Number of comments
     */
    commentCount?: number;

    /**
     * Engagement rate
     */
    engagement?: number;

    /**
     * Number of impressions
     */
    impressionCount?: number;

    /**
     * Number of likes
     */
    likeCount?: number;

    /**
     * Number of shares
     */
    shareCount?: number;

    /**
     * TIME_WATCHED: The time the video was watched in milliseconds. Video auto-looping
     * will continue to increase this metric for each subsequent play
     */
    timeWatched?: number;

    /**
     * TIME_WATCHED_FOR_VIDEO_VIEWS: The time watched in milliseconds for video
     * play-pause cycles that are at least 3 seconds. Video auto-looping will continue
     * to increase this metric for each subsequent play. Analytics data for this metric
     * will be available for six months
     */
    timeWatchedForVideoViews?: number;

    /**
     * VIDEO_VIEW: Video views with play-pause cycles for at least 3 seconds.
     * Auto-looping videos are counted as one when loaded. Each subsequent auto-looped
     * play doesn't increase this metric. Analytics data for this metric won't be
     * available after six months
     */
    videoView?: number;

    /**
     * VIEWER: Unique viewers who made engaged plays on the video. Auto-looping videos
     * are counted as one when loaded. Each subsequent auto-looped play doesn't
     * increase this metric. Analytics data for this metric won't be available after
     * six months
     */
    viewer?: number;
  }

  export interface BlueskyPostMetricsDto {
    /**
     * Number of likes on the post
     */
    likeCount: number;

    /**
     * Number of quotes of the post
     */
    quoteCount: number;

    /**
     * Number of replies on the post
     */
    replyCount: number;

    /**
     * Number of reposts of the post
     */
    repostCount: number;
  }

  export interface PinterestPostMetricsDto {
    /**
     * Last 90 days of Pin metrics
     */
    '90d'?: PinterestPostMetricsDto._90d;

    /**
     * Lifetime Pin metrics
     */
    lifetime_metrics?: PinterestPostMetricsDto.LifetimeMetrics;
  }

  export namespace PinterestPostMetricsDto {
    /**
     * Last 90 days of Pin metrics
     */
    export interface _90d {
      /**
       * Number of comments on the Pin
       */
      comment?: number;

      /**
       * Number of times the Pin was shown (impressions)
       */
      impression?: number;

      /**
       * The last time Pinterest updated these metrics
       */
      last_updated?: string;

      /**
       * Number of clicks from the Pin to an external destination (outbound clicks)
       */
      outbound_click?: number;

      /**
       * Number of clicks on the Pin to view it in closeup (Pin clicks)
       */
      pin_click?: number;

      /**
       * Number of visits to the author's profile driven from the Pin
       */
      profile_visit?: unknown | null;

      /**
       * Total number of reactions on the Pin
       */
      reaction?: number;

      /**
       * Number of saves of the Pin
       */
      save?: number;

      /**
       * Number of follows driven from the Pin
       */
      user_follow?: unknown | null;

      /**
       * Number of video views of at least 10 seconds
       */
      video_10s_views?: number;

      /**
       * Average watch time for the video
       */
      video_average_time?: number;

      /**
       * Number of video views that reached 95% completion
       */
      video_p95_views?: number;

      /**
       * Total watch time for the video
       */
      video_total_time?: number;

      /**
       * Number of video views
       */
      video_views?: number;
    }

    /**
     * Lifetime Pin metrics
     */
    export interface LifetimeMetrics {
      /**
       * Number of comments on the Pin
       */
      comment?: number;

      /**
       * Number of times the Pin was shown (impressions)
       */
      impression?: number;

      /**
       * The last time Pinterest updated these metrics
       */
      last_updated?: string;

      /**
       * Number of clicks from the Pin to an external destination (outbound clicks)
       */
      outbound_click?: number;

      /**
       * Number of clicks on the Pin to view it in closeup (Pin clicks)
       */
      pin_click?: number;

      /**
       * Number of visits to the author's profile driven from the Pin
       */
      profile_visit?: unknown | null;

      /**
       * Total number of reactions on the Pin
       */
      reaction?: number;

      /**
       * Number of saves of the Pin
       */
      save?: number;

      /**
       * Number of follows driven from the Pin
       */
      user_follow?: unknown | null;

      /**
       * Number of video views of at least 10 seconds
       */
      video_10s_views?: number;

      /**
       * Average watch time for the video
       */
      video_average_time?: number;

      /**
       * Number of video views that reached 95% completion
       */
      video_p95_views?: number;

      /**
       * Total watch time for the video
       */
      video_total_time?: number;

      /**
       * Number of video views
       */
      video_views?: number;
    }
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
