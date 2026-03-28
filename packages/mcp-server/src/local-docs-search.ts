// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create_upload_url',
    endpoint: '/v1/media/create-upload-url',
    httpMethod: 'post',
    summary: 'Upload media',
    description:
      "\nTo upload media to attach to your post, make a `POST` request to the `/media/create-upload-url` endpoint. \n\nYou'll receive the public url of your media item (which can be used when making a post) and will include an `upload_url` which is a signed URL of the storage location for uploading your file to. \n\nThis URL is unique and publicly signed for a short time, so make sure to upload your files in a timely manner.\n\n**Example flow using JavaScript and the Fetch API:**\n\n**Request an upload URL**\n\n   ```js\n   // Step 1: Request an upload URL from your API\n   const response = await fetch('https://api.postforme.dev/v1/media/create-upload-url', {\n     method: 'POST',\n     headers: {\n       'Content-Type': 'application/json'\n     }\n   });\n\n   const { media_url, upload_url } = await response.json();\n   ```\n\n**Upload your file to the signed URL**\n\n   ```js\n   // Step 2: Upload your file to the signed URL\n   const file = /* your File or Blob object, e.g., from an <input type=\"file\"> */;\n   await fetch(upload_url, {\n     method: 'PUT',\n     headers: {\n       'Content-Type': 'image/jpeg'\n     },\n     body: file\n   });\n   ```\n\n**Use the `media_url` when creating your post**\n\n    ```js\n    // Step 3: Use the `media_url` when creating your post\n    const response = await fetch('https://api.postforme.dev/v1/social-posts', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        social_accounts: ['spc_...', ...],\n        caption: 'My caption',\n        media: [\n          { \n            url: media_url \n          }\n        ]\n      })\n    });\n    ```\n",
    stainlessPath: '(resource) media > (method) create_upload_url',
    qualified: 'client.media.createUploadURL',
    response: '{ media_url: string; upload_url: string; }',
    markdown:
      "## create_upload_url\n\n`client.media.createUploadURL(): { media_url: string; upload_url: string; }`\n\n**post** `/v1/media/create-upload-url`\n\n\nTo upload media to attach to your post, make a `POST` request to the `/media/create-upload-url` endpoint. \n\nYou'll receive the public url of your media item (which can be used when making a post) and will include an `upload_url` which is a signed URL of the storage location for uploading your file to. \n\nThis URL is unique and publicly signed for a short time, so make sure to upload your files in a timely manner.\n\n**Example flow using JavaScript and the Fetch API:**\n\n**Request an upload URL**\n\n   ```js\n   // Step 1: Request an upload URL from your API\n   const response = await fetch('https://api.postforme.dev/v1/media/create-upload-url', {\n     method: 'POST',\n     headers: {\n       'Content-Type': 'application/json'\n     }\n   });\n\n   const { media_url, upload_url } = await response.json();\n   ```\n\n**Upload your file to the signed URL**\n\n   ```js\n   // Step 2: Upload your file to the signed URL\n   const file = /* your File or Blob object, e.g., from an <input type=\"file\"> */;\n   await fetch(upload_url, {\n     method: 'PUT',\n     headers: {\n       'Content-Type': 'image/jpeg'\n     },\n     body: file\n   });\n   ```\n\n**Use the `media_url` when creating your post**\n\n    ```js\n    // Step 3: Use the `media_url` when creating your post\n    const response = await fetch('https://api.postforme.dev/v1/social-posts', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        social_accounts: ['spc_...', ...],\n        caption: 'My caption',\n        media: [\n          { \n            url: media_url \n          }\n        ]\n      })\n    });\n    ```\n\n\n### Returns\n\n- `{ media_url: string; upload_url: string; }`\n\n  - `media_url: string`\n  - `upload_url: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst response = await client.media.createUploadURL();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/social-posts',
    httpMethod: 'post',
    summary: 'Create Post',
    description: 'Create Post',
    stainlessPath: '(resource) social_posts > (method) create',
    qualified: 'client.socialPosts.create',
    params: [
      'caption: string;',
      'social_accounts: string[];',
      "account_configurations?: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[];",
      'external_id?: string;',
      'isDraft?: boolean;',
      "media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[];",
      "platform_configurations?: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; };",
      'scheduled_at?: string;',
    ],
    response:
      "{ id: string; account_configurations: { configuration: object; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: object[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: object; scheduled_at: string; social_accounts: object[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }",
    markdown:
      "## create\n\n`client.socialPosts.create(caption: string, social_accounts: string[], account_configurations?: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: object[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: object; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[], external_id?: string, isDraft?: boolean, media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[], platform_configurations?: { bluesky?: bluesky_configuration_dto; facebook?: facebook_configuration_dto; instagram?: instagram_configuration_dto; linkedin?: linkedin_configuration_dto; pinterest?: pinterest_configuration_dto; threads?: threads_configuration_dto; tiktok?: tiktok_configuration; tiktok_business?: tiktok_configuration; x?: twitter_configuration_dto; youtube?: youtube_configuration_dto; }, scheduled_at?: string): { id: string; account_configurations: object[]; caption: string; created_at: string; external_id: string; media: object[]; platform_configurations: platform_configurations_dto; scheduled_at: string; social_accounts: social_account[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }`\n\n**post** `/v1/social-posts`\n\nCreate Post\n\n### Parameters\n\n- `caption: string`\n  Caption text for the post\n\n- `social_accounts: string[]`\n  Array of social account IDs for posting\n\n- `account_configurations?: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]`\n  Account-specific configurations for the post\n\n- `external_id?: string`\n  Array of social account IDs for posting\n\n- `isDraft?: boolean`\n  If isDraft is set then the post will not be processed\n\n- `media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]`\n  Array of media associated with the post. If multiple media items are provided and the placement is `stories`, individual posts are created per media item.\n\n- `platform_configurations?: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; }`\n  Platform-specific configurations for the post\n  - `bluesky?: { caption?: object; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; }`\n    Bluesky configuration\n  - `facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'stories' | 'timeline'; }`\n    Facebook configuration\n  - `instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }`\n    Instagram configuration\n  - `linkedin?: { caption?: object; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; }`\n    LinkedIn configuration\n  - `pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; }`\n    Pinterest configuration\n  - `threads?: { caption?: object; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline'; }`\n    Threads configuration\n  - `tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; privacy_status?: string; title?: string; }`\n    TikTok configuration\n  - `tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; privacy_status?: string; title?: string; }`\n    TikTok configuration\n  - `x?: { caption?: object; community_id?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }`\n    Twitter configuration\n  - `youtube?: { caption?: object; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }`\n    YouTube configuration\n\n- `scheduled_at?: string`\n  Scheduled date and time for the post, setting to null or undefined will post instantly\n\n### Returns\n\n- `{ id: string; account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: object[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: object; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: { bluesky?: bluesky_configuration_dto; facebook?: facebook_configuration_dto; instagram?: instagram_configuration_dto; linkedin?: linkedin_configuration_dto; pinterest?: pinterest_configuration_dto; threads?: threads_configuration_dto; tiktok?: tiktok_configuration; tiktok_business?: tiktok_configuration; x?: twitter_configuration_dto; youtube?: youtube_configuration_dto; }; scheduled_at: string; social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }`\n\n  - `id: string`\n  - `account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]`\n  - `caption: string`\n  - `created_at: string`\n  - `external_id: string`\n  - `media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]`\n  - `platform_configurations: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; }`\n  - `scheduled_at: string`\n  - `social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]`\n  - `status: 'draft' | 'scheduled' | 'processing' | 'processed'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPost = await client.socialPosts.create({ caption: 'caption', social_accounts: ['string'] });\n\nconsole.log(socialPost);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/social-posts/{id}',
    httpMethod: 'get',
    summary: 'Get Post by ID',
    description: 'Get Post by ID',
    stainlessPath: '(resource) social_posts > (method) retrieve',
    qualified: 'client.socialPosts.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; account_configurations: { configuration: object; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: object[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: object; scheduled_at: string; social_accounts: object[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.socialPosts.retrieve(id: string): { id: string; account_configurations: object[]; caption: string; created_at: string; external_id: string; media: object[]; platform_configurations: platform_configurations_dto; scheduled_at: string; social_accounts: social_account[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }`\n\n**get** `/v1/social-posts/{id}`\n\nGet Post by ID\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: object[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: object; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: { bluesky?: bluesky_configuration_dto; facebook?: facebook_configuration_dto; instagram?: instagram_configuration_dto; linkedin?: linkedin_configuration_dto; pinterest?: pinterest_configuration_dto; threads?: threads_configuration_dto; tiktok?: tiktok_configuration; tiktok_business?: tiktok_configuration; x?: twitter_configuration_dto; youtube?: youtube_configuration_dto; }; scheduled_at: string; social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }`\n\n  - `id: string`\n  - `account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]`\n  - `caption: string`\n  - `created_at: string`\n  - `external_id: string`\n  - `media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]`\n  - `platform_configurations: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; }`\n  - `scheduled_at: string`\n  - `social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]`\n  - `status: 'draft' | 'scheduled' | 'processing' | 'processed'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPost = await client.socialPosts.retrieve('id');\n\nconsole.log(socialPost);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/social-posts/{id}',
    httpMethod: 'put',
    summary: 'Update Post',
    description: 'Update Post',
    stainlessPath: '(resource) social_posts > (method) update',
    qualified: 'client.socialPosts.update',
    params: [
      'id: string;',
      'caption: string;',
      'social_accounts: string[];',
      "account_configurations?: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[];",
      'external_id?: string;',
      'isDraft?: boolean;',
      "media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[];",
      "platform_configurations?: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; };",
      'scheduled_at?: string;',
    ],
    response:
      "{ id: string; account_configurations: { configuration: object; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: object[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: object; scheduled_at: string; social_accounts: object[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }",
    markdown:
      "## update\n\n`client.socialPosts.update(id: string, caption: string, social_accounts: string[], account_configurations?: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: object[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: object; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[], external_id?: string, isDraft?: boolean, media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[], platform_configurations?: { bluesky?: bluesky_configuration_dto; facebook?: facebook_configuration_dto; instagram?: instagram_configuration_dto; linkedin?: linkedin_configuration_dto; pinterest?: pinterest_configuration_dto; threads?: threads_configuration_dto; tiktok?: tiktok_configuration; tiktok_business?: tiktok_configuration; x?: twitter_configuration_dto; youtube?: youtube_configuration_dto; }, scheduled_at?: string): { id: string; account_configurations: object[]; caption: string; created_at: string; external_id: string; media: object[]; platform_configurations: platform_configurations_dto; scheduled_at: string; social_accounts: social_account[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }`\n\n**put** `/v1/social-posts/{id}`\n\nUpdate Post\n\n### Parameters\n\n- `id: string`\n\n- `caption: string`\n  Caption text for the post\n\n- `social_accounts: string[]`\n  Array of social account IDs for posting\n\n- `account_configurations?: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]`\n  Account-specific configurations for the post\n\n- `external_id?: string`\n  Array of social account IDs for posting\n\n- `isDraft?: boolean`\n  If isDraft is set then the post will not be processed\n\n- `media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]`\n  Array of media associated with the post. If multiple media items are provided and the placement is `stories`, individual posts are created per media item.\n\n- `platform_configurations?: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; }`\n  Platform-specific configurations for the post\n  - `bluesky?: { caption?: object; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; }`\n    Bluesky configuration\n  - `facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'stories' | 'timeline'; }`\n    Facebook configuration\n  - `instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }`\n    Instagram configuration\n  - `linkedin?: { caption?: object; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; }`\n    LinkedIn configuration\n  - `pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; }`\n    Pinterest configuration\n  - `threads?: { caption?: object; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline'; }`\n    Threads configuration\n  - `tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; privacy_status?: string; title?: string; }`\n    TikTok configuration\n  - `tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; privacy_status?: string; title?: string; }`\n    TikTok configuration\n  - `x?: { caption?: object; community_id?: string; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }`\n    Twitter configuration\n  - `youtube?: { caption?: object; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }`\n    YouTube configuration\n\n- `scheduled_at?: string`\n  Scheduled date and time for the post, setting to null or undefined will post instantly\n\n### Returns\n\n- `{ id: string; account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: object[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: object; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: { bluesky?: bluesky_configuration_dto; facebook?: facebook_configuration_dto; instagram?: instagram_configuration_dto; linkedin?: linkedin_configuration_dto; pinterest?: pinterest_configuration_dto; threads?: threads_configuration_dto; tiktok?: tiktok_configuration; tiktok_business?: tiktok_configuration; x?: twitter_configuration_dto; youtube?: youtube_configuration_dto; }; scheduled_at: string; social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }`\n\n  - `id: string`\n  - `account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: { duration_minutes: number; options: string[]; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]`\n  - `caption: string`\n  - `created_at: string`\n  - `external_id: string`\n  - `media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]`\n  - `platform_configurations: { bluesky?: { caption?: object; media?: object[]; }; facebook?: { caption?: object; collaborators?: object[][]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; }; instagram?: { caption?: object; collaborators?: string[]; location?: string; media?: object[]; placement?: 'reels' | 'stories' | 'timeline'; share_to_feed?: boolean; trial_reel_type?: 'manual' | 'performance'; }; linkedin?: { caption?: object; media?: object[]; }; pinterest?: { board_ids?: string[]; caption?: object; link?: string; media?: object[]; }; threads?: { caption?: object; media?: object[]; placement?: 'reels' | 'timeline'; }; tiktok?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; tiktok_business?: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; caption?: object; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; media?: object[]; privacy_status?: string; title?: string; }; x?: { caption?: object; community_id?: string; media?: object[]; poll?: object; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; }; youtube?: { caption?: object; made_for_kids?: boolean; media?: object[]; privacy_status?: 'public' | 'private' | 'unlisted'; title?: string; }; }`\n  - `scheduled_at: string`\n  - `social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]`\n  - `status: 'draft' | 'scheduled' | 'processing' | 'processed'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPost = await client.socialPosts.update('id', { caption: 'caption', social_accounts: ['string'] });\n\nconsole.log(socialPost);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/social-posts',
    httpMethod: 'get',
    summary: 'Get posts',
    description: 'Get a paginated result for posts based on the applied filters',
    stainlessPath: '(resource) social_posts > (method) list',
    qualified: 'client.socialPosts.list',
    params: [
      'external_id?: string[];',
      'limit?: number;',
      'offset?: number;',
      'platform?: string[];',
      'social_account_id?: string[];',
      "status?: 'draft' | 'scheduled' | 'processing' | 'processed'[];",
    ],
    response:
      "{ data: { id: string; account_configurations: object[]; caption: string; created_at: string; external_id: string; media: object[]; platform_configurations: platform_configurations_dto; scheduled_at: string; social_accounts: social_account[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }[]; meta: { limit: number; next: string; offset: number; total: number; }; }",
    markdown:
      "## list\n\n`client.socialPosts.list(external_id?: string[], limit?: number, offset?: number, platform?: string[], social_account_id?: string[], status?: 'draft' | 'scheduled' | 'processing' | 'processed'[]): { data: social_post[]; meta: object; }`\n\n**get** `/v1/social-posts`\n\nGet a paginated result for posts based on the applied filters\n\n### Parameters\n\n- `external_id?: string[]`\n  Filter by external ID. Multiple values imply OR logic.\n\n- `limit?: number`\n  Number of items to return\n\n- `offset?: number`\n  Number of items to skip\n\n- `platform?: string[]`\n  Filter by platforms. Multiple values imply OR logic.\n\n- `social_account_id?: string[]`\n  Filter by social account ID. Multiple values imply OR logic.\n\n- `status?: 'draft' | 'scheduled' | 'processing' | 'processed'[]`\n  Filter by post status. Multiple values imply OR logic.\n\n### Returns\n\n- `{ data: { id: string; account_configurations: object[]; caption: string; created_at: string; external_id: string; media: object[]; platform_configurations: platform_configurations_dto; scheduled_at: string; social_accounts: social_account[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }[]; meta: { limit: number; next: string; offset: number; total: number; }; }`\n\n  - `data: { id: string; account_configurations: { configuration: { allow_comment?: boolean; allow_duet?: boolean; allow_stitch?: boolean; auto_add_music?: boolean; board_ids?: string[]; caption?: object; collaborators?: object[][]; community_id?: string; disclose_branded_content?: boolean; disclose_your_brand?: boolean; is_ai_generated?: boolean; is_draft?: boolean; link?: string; location?: string; made_for_kids?: boolean; media?: object[]; placement?: 'reels' | 'timeline' | 'stories'; poll?: object; privacy_status?: 'public' | 'private' | 'unlisted'; quote_tweet_id?: string; reply_settings?: 'following' | 'mentionedUsers' | 'subscribers' | 'verified'; share_to_feed?: boolean; title?: string; trial_reel_type?: 'manual' | 'performance'; }; social_account_id: string; }[]; caption: string; created_at: string; external_id: string; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_configurations: { bluesky?: bluesky_configuration_dto; facebook?: facebook_configuration_dto; instagram?: instagram_configuration_dto; linkedin?: linkedin_configuration_dto; pinterest?: pinterest_configuration_dto; threads?: threads_configuration_dto; tiktok?: tiktok_configuration; tiktok_business?: tiktok_configuration; x?: twitter_configuration_dto; youtube?: youtube_configuration_dto; }; scheduled_at: string; social_accounts: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]; status: 'draft' | 'scheduled' | 'processing' | 'processed'; updated_at: string; }[]`\n  - `meta: { limit: number; next: string; offset: number; total: number; }`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPosts = await client.socialPosts.list();\n\nconsole.log(socialPosts);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/social-posts/{id}',
    httpMethod: 'delete',
    summary: 'Delete Post',
    description: 'Delete Post',
    stainlessPath: '(resource) social_posts > (method) delete',
    qualified: 'client.socialPosts.delete',
    params: ['id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## delete\n\n`client.socialPosts.delete(id: string): { success: boolean; }`\n\n**delete** `/v1/social-posts/{id}`\n\nDelete Post\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ success: boolean; }`\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPost = await client.socialPosts.delete('id');\n\nconsole.log(socialPost);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/social-post-results/{id}',
    httpMethod: 'get',
    summary: 'Get post result by ID',
    description: 'Get post result by ID',
    stainlessPath: '(resource) social_post_results > (method) retrieve',
    qualified: 'client.socialPostResults.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; details: object; error: object; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_data: { id?: string; url?: string; }; post_id: string; social_account_id: string; success: boolean; }",
    markdown:
      "## retrieve\n\n`client.socialPostResults.retrieve(id: string): { id: string; details: object; error: object; media: object[]; platform_data: object; post_id: string; social_account_id: string; success: boolean; }`\n\n**get** `/v1/social-post-results/{id}`\n\nGet post result by ID\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; details: object; error: object; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_data: { id?: string; url?: string; }; post_id: string; social_account_id: string; success: boolean; }`\n\n  - `id: string`\n  - `details: object`\n  - `error: object`\n  - `media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]`\n  - `platform_data: { id?: string; url?: string; }`\n  - `post_id: string`\n  - `social_account_id: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPostResult = await client.socialPostResults.retrieve('id');\n\nconsole.log(socialPostResult);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/social-post-results',
    httpMethod: 'get',
    summary: 'Get post results',
    description: 'Get a paginated result for post results based on the applied filters',
    stainlessPath: '(resource) social_post_results > (method) list',
    qualified: 'client.socialPostResults.list',
    params: [
      'limit?: number;',
      'offset?: number;',
      'platform?: string[];',
      'post_id?: string[];',
      'social_account_id?: string[];',
    ],
    response:
      '{ data: { id: string; details: object; error: object; media: object[]; platform_data: object; post_id: string; social_account_id: string; success: boolean; }[]; meta: { limit: number; next: string; offset: number; total: number; }; }',
    markdown:
      "## list\n\n`client.socialPostResults.list(limit?: number, offset?: number, platform?: string[], post_id?: string[], social_account_id?: string[]): { data: social_post_result[]; meta: object; }`\n\n**get** `/v1/social-post-results`\n\nGet a paginated result for post results based on the applied filters\n\n### Parameters\n\n- `limit?: number`\n  Number of items to return\n\n- `offset?: number`\n  Number of items to skip\n\n- `platform?: string[]`\n  Filter by platform(s). Multiple values imply OR logic (e.g., ?platform=x&platform=facebook).\n\n- `post_id?: string[]`\n  Filter by post IDs. Multiple values imply OR logic (e.g., ?post_id=123&post_id=456).\n\n- `social_account_id?: string[]`\n  Filter by social account ID(s). Multiple values imply OR logic (e.g., ?social_account_id=123&social_account_id=456).\n\n### Returns\n\n- `{ data: { id: string; details: object; error: object; media: object[]; platform_data: object; post_id: string; social_account_id: string; success: boolean; }[]; meta: { limit: number; next: string; offset: number; total: number; }; }`\n\n  - `data: { id: string; details: object; error: object; media: { url: string; skip_processing?: boolean; tags?: { id: string; platform: 'facebook' | 'instagram'; type: 'user' | 'product'; x?: number; y?: number; }[]; thumbnail_timestamp_ms?: object; thumbnail_url?: object; }[]; platform_data: { id?: string; url?: string; }; post_id: string; social_account_id: string; success: boolean; }[]`\n  - `meta: { limit: number; next: string; offset: number; total: number; }`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialPostResults = await client.socialPostResults.list();\n\nconsole.log(socialPostResults);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/social-accounts',
    httpMethod: 'post',
    summary: 'Create Social Account',
    description:
      'If a social account with the same platform and user_id already exists, it will be updated. If not, a new social account will be created.',
    stainlessPath: '(resource) social_accounts > (method) create',
    qualified: 'client.socialAccounts.create',
    params: [
      'access_token: string;',
      'access_token_expires_at: string;',
      'platform: string;',
      'user_id: string;',
      'external_id?: string;',
      'metadata?: object;',
      'refresh_token?: string;',
      'refresh_token_expires_at?: string;',
      'username?: string;',
    ],
    response:
      "{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }",
    markdown:
      "## create\n\n`client.socialAccounts.create(access_token: string, access_token_expires_at: string, platform: string, user_id: string, external_id?: string, metadata?: object, refresh_token?: string, refresh_token_expires_at?: string, username?: string): { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }`\n\n**post** `/v1/social-accounts`\n\nIf a social account with the same platform and user_id already exists, it will be updated. If not, a new social account will be created.\n\n### Parameters\n\n- `access_token: string`\n  The access token of the social account\n\n- `access_token_expires_at: string`\n  The access token expiration date of the social account\n\n- `platform: string`\n  The platform of the social account\n\n- `user_id: string`\n  The user id of the social account\n\n- `external_id?: string`\n  The external id of the social account\n\n- `metadata?: object`\n  The metadata of the social account\n\n- `refresh_token?: string`\n  The refresh token of the social account\n\n- `refresh_token_expires_at?: string`\n  The refresh token expiration date of the social account\n\n- `username?: string`\n  The platform's username of the social account\n\n### Returns\n\n- `{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }`\n\n  - `id: string`\n  - `access_token: string`\n  - `access_token_expires_at: string`\n  - `external_id: string`\n  - `metadata: object`\n  - `platform: string`\n  - `profile_photo_url: string`\n  - `refresh_token: string`\n  - `refresh_token_expires_at: string`\n  - `status: 'connected' | 'disconnected'`\n  - `user_id: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialAccount = await client.socialAccounts.create({\n  access_token: 'access_token',\n  access_token_expires_at: '2019-12-27T18:11:19.117Z',\n  platform: 'facebook',\n  user_id: 'user_id',\n});\n\nconsole.log(socialAccount);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/social-accounts/{id}',
    httpMethod: 'get',
    summary: 'Get social account by ID',
    description: 'Get social account by ID',
    stainlessPath: '(resource) social_accounts > (method) retrieve',
    qualified: 'client.socialAccounts.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }",
    markdown:
      "## retrieve\n\n`client.socialAccounts.retrieve(id: string): { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }`\n\n**get** `/v1/social-accounts/{id}`\n\nGet social account by ID\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }`\n\n  - `id: string`\n  - `access_token: string`\n  - `access_token_expires_at: string`\n  - `external_id: string`\n  - `metadata: object`\n  - `platform: string`\n  - `profile_photo_url: string`\n  - `refresh_token: string`\n  - `refresh_token_expires_at: string`\n  - `status: 'connected' | 'disconnected'`\n  - `user_id: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialAccount = await client.socialAccounts.retrieve('id');\n\nconsole.log(socialAccount);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/social-accounts/{id}',
    httpMethod: 'patch',
    summary: 'Update social account',
    description: 'Update social account',
    stainlessPath: '(resource) social_accounts > (method) update',
    qualified: 'client.socialAccounts.update',
    params: ['id: string;', 'external_id?: string;', 'username?: string;'],
    response:
      "{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }",
    markdown:
      "## update\n\n`client.socialAccounts.update(id: string, external_id?: string, username?: string): { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }`\n\n**patch** `/v1/social-accounts/{id}`\n\nUpdate social account\n\n### Parameters\n\n- `id: string`\n\n- `external_id?: string`\n  The platform's external id of the social account\n\n- `username?: string`\n  The platform's username of the social account\n\n### Returns\n\n- `{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }`\n\n  - `id: string`\n  - `access_token: string`\n  - `access_token_expires_at: string`\n  - `external_id: string`\n  - `metadata: object`\n  - `platform: string`\n  - `profile_photo_url: string`\n  - `refresh_token: string`\n  - `refresh_token_expires_at: string`\n  - `status: 'connected' | 'disconnected'`\n  - `user_id: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialAccount = await client.socialAccounts.update('id');\n\nconsole.log(socialAccount);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/social-accounts',
    httpMethod: 'get',
    summary: 'Get social accounts',
    description: 'Get a paginated result for social accounts based on the applied filters',
    stainlessPath: '(resource) social_accounts > (method) list',
    qualified: 'client.socialAccounts.list',
    params: [
      'id?: string[];',
      'external_id?: string[];',
      'limit?: number;',
      'offset?: number;',
      'platform?: string[];',
      "status?: 'connected' | 'disconnected'[];",
      'username?: string[];',
    ],
    response:
      "{ data: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]; meta: { limit: number; next: string; offset: number; total: number; }; }",
    markdown:
      "## list\n\n`client.socialAccounts.list(id?: string[], external_id?: string[], limit?: number, offset?: number, platform?: string[], status?: 'connected' | 'disconnected'[], username?: string[]): { data: social_account[]; meta: object; }`\n\n**get** `/v1/social-accounts`\n\nGet a paginated result for social accounts based on the applied filters\n\n### Parameters\n\n- `id?: string[]`\n  Filter by id(s). Multiple values imply OR logic (e.g., ?id=spc_xxxxxx&id=spc_yyyyyy).\n\n- `external_id?: string[]`\n  Filter by externalId(s). Multiple values imply OR logic (e.g., ?externalId=test&externalId=test2).\n\n- `limit?: number`\n  Number of items to return\n\n- `offset?: number`\n  Number of items to skip\n\n- `platform?: string[]`\n  Filter by platform(s). Multiple values imply OR logic (e.g., ?platform=x&platform=facebook).\n\n- `status?: 'connected' | 'disconnected'[]`\n  Filter by status. Multiple values imply OR logic (e.g., ?status=connected&status=disconnected).\n\n- `username?: string[]`\n  Filter by username(s). Multiple values imply OR logic (e.g., ?username=test&username=test2).\n\n### Returns\n\n- `{ data: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]; meta: { limit: number; next: string; offset: number; total: number; }; }`\n\n  - `data: { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'connected' | 'disconnected'; user_id: string; username: string; }[]`\n  - `meta: { limit: number; next: string; offset: number; total: number; }`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialAccounts = await client.socialAccounts.list();\n\nconsole.log(socialAccounts);\n```",
  },
  {
    name: 'create_auth_url',
    endpoint: '/v1/social-accounts/auth-url',
    httpMethod: 'post',
    summary: 'Create Social Account Auth URL',
    description:
      "Generates a URL that initiates the authentication flow for a user's social media account. When visited, the user is redirected to the selected social platform's login/authorization page. Upon successful authentication, they are redirected back to your application",
    stainlessPath: '(resource) social_accounts > (method) create_auth_url',
    qualified: 'client.socialAccounts.createAuthURL',
    params: [
      'platform: string;',
      'external_id?: string;',
      "permissions?: 'posts' | 'feeds'[];",
      "platform_data?: { bluesky?: { app_password: string; handle: string; }; facebook?: { permission_overrides?: object[][]; }; instagram?: { connection_type: 'instagram' | 'facebook'; permission_overrides?: object[][]; }; linkedin?: { connection_type: 'personal' | 'organization'; permission_overrides?: object[][]; }; pinterest?: { permission_overrides?: object[][]; }; threads?: { permission_overrides?: object[][]; }; tiktok?: { permission_overrides?: object[][]; }; tiktok_business?: { permission_overrides?: object[][]; }; youtube?: { permission_overrides?: object[][]; }; };",
      'redirect_url_override?: string;',
    ],
    response: '{ platform: string; url: string; }',
    markdown:
      "## create_auth_url\n\n`client.socialAccounts.createAuthURL(platform: string, external_id?: string, permissions?: 'posts' | 'feeds'[], platform_data?: { bluesky?: { app_password: string; handle: string; }; facebook?: { permission_overrides?: object[][]; }; instagram?: { connection_type: 'instagram' | 'facebook'; permission_overrides?: object[][]; }; linkedin?: { connection_type: 'personal' | 'organization'; permission_overrides?: object[][]; }; pinterest?: { permission_overrides?: object[][]; }; threads?: { permission_overrides?: object[][]; }; tiktok?: { permission_overrides?: object[][]; }; tiktok_business?: { permission_overrides?: object[][]; }; youtube?: { permission_overrides?: object[][]; }; }, redirect_url_override?: string): { platform: string; url: string; }`\n\n**post** `/v1/social-accounts/auth-url`\n\nGenerates a URL that initiates the authentication flow for a user's social media account. When visited, the user is redirected to the selected social platform's login/authorization page. Upon successful authentication, they are redirected back to your application\n\n### Parameters\n\n- `platform: string`\n  The social account provider\n\n- `external_id?: string`\n  Your unique identifier for the social account\n\n- `permissions?: 'posts' | 'feeds'[]`\n  List of permissions you want to allow. Will default to only post permissions. You must include the \"feeds\" permission to request an account feed and metrics\n\n- `platform_data?: { bluesky?: { app_password: string; handle: string; }; facebook?: { permission_overrides?: object[][]; }; instagram?: { connection_type: 'instagram' | 'facebook'; permission_overrides?: object[][]; }; linkedin?: { connection_type: 'personal' | 'organization'; permission_overrides?: object[][]; }; pinterest?: { permission_overrides?: object[][]; }; threads?: { permission_overrides?: object[][]; }; tiktok?: { permission_overrides?: object[][]; }; tiktok_business?: { permission_overrides?: object[][]; }; youtube?: { permission_overrides?: object[][]; }; }`\n  Additional data needed for the provider\n  - `bluesky?: { app_password: string; handle: string; }`\n    Additional data needed for connecting bluesky accounts\n  - `facebook?: { permission_overrides?: object[][]; }`\n    Additional data for connecting facebook accounts\n  - `instagram?: { connection_type: 'instagram' | 'facebook'; permission_overrides?: object[][]; }`\n    Additional data for connecting instagram accounts\n  - `linkedin?: { connection_type: 'personal' | 'organization'; permission_overrides?: object[][]; }`\n    Additional data for connecting linkedin accounts\n  - `pinterest?: { permission_overrides?: object[][]; }`\n    Additional data for connecting Pinterest accounts\n  - `threads?: { permission_overrides?: object[][]; }`\n    Additional data for connecting Threads accounts\n  - `tiktok?: { permission_overrides?: object[][]; }`\n    Additional data for connecting TikTok accounts\n  - `tiktok_business?: { permission_overrides?: object[][]; }`\n    Additional data for connecting TikTok Business accounts\n  - `youtube?: { permission_overrides?: object[][]; }`\n    Additional data for connecting YouTube accounts\n\n- `redirect_url_override?: string`\n  Override the default redirect URL for the OAuth flow. If provided, this URL will be used instead of our redirect URL. Make sure this URL is included in your app's authorized redirect urls. This override will not work when using our system credientals.\n\n### Returns\n\n- `{ platform: string; url: string; }`\n\n  - `platform: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst response = await client.socialAccounts.createAuthURL({ platform: 'platform' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'disconnect',
    endpoint: '/v1/social-accounts/{id}/disconnect',
    httpMethod: 'post',
    summary: 'Disconnect a social account',
    description:
      'Disconnecting an account with remove all auth tokens and mark the account as disconnected. The record of the account will be kept and can be retrieved and reconnected by the owner of the account.',
    stainlessPath: '(resource) social_accounts > (method) disconnect',
    qualified: 'client.socialAccounts.disconnect',
    params: ['id: string;'],
    response:
      "{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'disconnected'; user_id: string; username: string; }",
    markdown:
      "## disconnect\n\n`client.socialAccounts.disconnect(id: string): { id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'disconnected'; user_id: string; username: string; }`\n\n**post** `/v1/social-accounts/{id}/disconnect`\n\nDisconnecting an account with remove all auth tokens and mark the account as disconnected. The record of the account will be kept and can be retrieved and reconnected by the owner of the account.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; access_token: string; access_token_expires_at: string; external_id: string; metadata: object; platform: string; profile_photo_url: string; refresh_token: string; refresh_token_expires_at: string; status: 'disconnected'; user_id: string; username: string; }`\n\n  - `id: string`\n  - `access_token: string`\n  - `access_token_expires_at: string`\n  - `external_id: string`\n  - `metadata: object`\n  - `platform: string`\n  - `profile_photo_url: string`\n  - `refresh_token: string`\n  - `refresh_token_expires_at: string`\n  - `status: 'disconnected'`\n  - `user_id: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst response = await client.socialAccounts.disconnect('id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/social-account-feeds/{social_account_id}',
    httpMethod: 'get',
    summary: 'Get social account feed',
    description: 'Get a paginated result for the social account based on the applied filters',
    stainlessPath: '(resource) social_account_feeds > (method) list',
    qualified: 'client.socialAccountFeeds.list',
    params: [
      'social_account_id: string;',
      'cursor?: string;',
      "expand?: 'metrics'[];",
      'external_post_id?: string[];',
      'limit?: number;',
      'platform_post_id?: string[];',
      'social_post_id?: string[];',
    ],
    response:
      '{ data: { caption: string; media: object[][]; platform: string; platform_account_id: string; platform_post_id: string; platform_url: string; social_account_id: string; external_account_id?: string; external_post_id?: string; metrics?: object | object | object | object | object | object | object | object | object | object; platform_data?: object; posted_at?: string; social_post_id?: string; social_post_result_id?: string; }[]; meta: { cursor: string; limit: number; next: string; has_more?: boolean; }; }',
    markdown:
      "## list\n\n`client.socialAccountFeeds.list(social_account_id: string, cursor?: string, expand?: 'metrics'[], external_post_id?: string[], limit?: number, platform_post_id?: string[], social_post_id?: string[]): { data: platform_post[]; meta: object; }`\n\n**get** `/v1/social-account-feeds/{social_account_id}`\n\nGet a paginated result for the social account based on the applied filters\n\n### Parameters\n\n- `social_account_id: string`\n\n- `cursor?: string`\n  Cursor identifying next page of results\n\n- `expand?: 'metrics'[]`\n  Expand additional data in the response. Currently supports: \"metrics\" to include post analytics data.\n\n- `external_post_id?: string[]`\n  Filter by Post for Me Social Postexternal ID. Multiple values imply OR logic (e.g., ?external_post_id=xxxxxx&external_post_id=yyyyyy).\n\n- `limit?: number`\n  Number of items to return; Note: some platforms will have different max limits, in the case the provided limit is over the platform's limit we will return the max allowed by the platform.\n\n- `platform_post_id?: string[]`\n  Filter by the platform's id(s). Multiple values imply OR logic (e.g., ?social_post_id=spr_xxxxxx&social_post_id=spr_yyyyyy).\n\n- `social_post_id?: string[]`\n  Filter by Post for Me Social Post id(s). Multiple values imply OR logic (e.g., ?social_post_id=sp_xxxxxx&social_post_id=sp_yyyyyy).\n\n### Returns\n\n- `{ data: { caption: string; media: object[][]; platform: string; platform_account_id: string; platform_post_id: string; platform_url: string; social_account_id: string; external_account_id?: string; external_post_id?: string; metrics?: object | object | object | object | object | object | object | object | object | object; platform_data?: object; posted_at?: string; social_post_id?: string; social_post_result_id?: string; }[]; meta: { cursor: string; limit: number; next: string; has_more?: boolean; }; }`\n\n  - `data: { caption: string; media: object[][]; platform: string; platform_account_id: string; platform_post_id: string; platform_url: string; social_account_id: string; external_account_id?: string; external_post_id?: string; metrics?: { address_clicks: number; app_download_clicks: number; audience_cities: { city_name: string; percentage: number; }[]; audience_countries: { country: string; percentage: number; }[]; audience_genders: { gender: string; percentage: number; }[]; audience_types: { percentage: number; type: string; }[]; average_time_watched: number; comments: number; email_clicks: number; engagement_likes: { percentage: number; second: string; }[]; favorites: number; full_video_watched_rate: number; impression_sources: { impression_source: string; percentage: number; }[]; lead_submissions: number; likes: number; new_followers: number; phone_number_clicks: number; profile_views: number; reach: number; shares: number; total_time_watched: number; video_view_retention: { percentage: number; second: string; }[]; video_views: number; website_clicks: number; } | { comment_count: number; like_count: number; share_count: number; view_count: number; } | { comments?: number; follows?: number; ig_reels_avg_watch_time?: number; ig_reels_video_view_total_time?: number; likes?: number; navigation?: number; profile_activity?: number; profile_visits?: number; reach?: number; replies?: number; saved?: number; shares?: number; total_interactions?: number; views?: number; } | { comments: number; dislikes: number; likes: number; views: number; annotationClickableImpressions?: number; annotationClicks?: number; annotationClickThroughRate?: number; annotationClosableImpressions?: number; annotationCloseRate?: number; annotationCloses?: number; annotationImpressions?: number; averageViewDuration?: number; averageViewPercentage?: number; cardClickRate?: number; cardClicks?: number; cardImpressions?: number; cardTeaserClickRate?: number; cardTeaserClicks?: number; cardTeaserImpressions?: number; engagedViews?: number; estimatedMinutesWatched?: number; estimatedRedMinutesWatched?: number; redViews?: number; shares?: number; subscribersGained?: number; subscribersLost?: number; videosAddedToPlaylists?: number; videosRemovedFromPlaylists?: number; } | { activity_by_action_type?: { action_type: string; value: number; }[]; activity_by_action_type_unique?: { action_type: string; value: number; }[]; comments?: number; fan_reach?: number; media_views?: number; nonviral_reach?: number; organic_reach?: number; paid_reach?: number; reach?: number; reactions_anger?: number; reactions_by_type?: object; reactions_haha?: number; reactions_like?: number; reactions_love?: number; reactions_sorry?: number; reactions_total?: number; reactions_wow?: number; shares?: number; video_avg_time_watched?: number; video_complete_views_organic?: number; video_complete_views_organic_unique?: number; video_complete_views_paid?: number; video_complete_views_paid_unique?: number; video_length?: number; video_retention_graph_autoplayed?: { rate: number; time: number; }[]; video_retention_graph_clicked_to_play?: { rate: number; time: number; }[]; video_social_actions_unique?: number; video_view_time?: number; video_view_time_by_age_gender?: { key: string; value: number; }[]; video_view_time_by_country?: { key: string; value: number; }[]; video_view_time_by_distribution_type?: object; video_view_time_by_region?: { key: string; value: number; }[]; video_view_time_organic?: number; video_views?: number; video_views_15s?: number; video_views_60s?: number; video_views_autoplayed?: number; video_views_by_distribution_type?: object; video_views_clicked_to_play?: number; video_views_organic?: number; video_views_organic_unique?: number; video_views_paid?: number; video_views_paid_unique?: number; video_views_sound_on?: number; video_views_unique?: number; viral_reach?: number; } | { non_public_metrics?: { impression_count: number; url_link_clicks: number; user_profile_clicks: number; }; organic_metrics?: { impression_count: number; like_count: number; reply_count: number; retweet_count: number; url_link_clicks: number; user_profile_clicks: number; }; public_metrics?: { bookmark_count: number; impression_count: number; like_count: number; quote_count: number; reply_count: number; retweet_count: number; }; } | { likes: number; quotes: number; replies: number; reposts: number; shares: number; views: number; } | { clickCount?: number; commentCount?: number; engagement?: number; impressionCount?: number; likeCount?: number; shareCount?: number; timeWatched?: number; timeWatchedForVideoViews?: number; videoView?: number; viewer?: number; } | { likeCount: number; quoteCount: number; replyCount: number; repostCount: number; } | { 90d?: { comment?: number; impression?: number; last_updated?: string; outbound_click?: number; pin_click?: number; profile_visit?: object; reaction?: number; save?: number; user_follow?: object; video_10s_views?: number; video_average_time?: number; video_p95_views?: number; video_total_time?: number; video_views?: number; }; lifetime_metrics?: { comment?: number; impression?: number; last_updated?: string; outbound_click?: number; pin_click?: number; profile_visit?: object; reaction?: number; save?: number; user_follow?: object; video_10s_views?: number; video_average_time?: number; video_p95_views?: number; video_total_time?: number; video_views?: number; }; }; platform_data?: { title: string; }; posted_at?: string; social_post_id?: string; social_post_result_id?: string; }[]`\n  - `meta: { cursor: string; limit: number; next: string; has_more?: boolean; }`\n\n### Example\n\n```typescript\nimport PostForMe from 'post-for-me';\n\nconst client = new PostForMe();\n\nconst socialAccountFeeds = await client.socialAccountFeeds.list('social_account_id');\n\nconsole.log(socialAccountFeeds);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
