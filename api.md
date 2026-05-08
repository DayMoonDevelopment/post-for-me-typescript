# Media

Types:

- <code><a href="./src/resources/media.ts">MediaCreateUploadURLResponse</a></code>

Methods:

- <code title="post /v1/media/create-upload-url">client.media.<a href="./src/resources/media.ts">createUploadURL</a>() -> MediaCreateUploadURLResponse</code>

# SocialPosts

Types:

- <code><a href="./src/resources/social-posts.ts">AccountConfiguration</a></code>
- <code><a href="./src/resources/social-posts.ts">BlueskyConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">CreateSocialPost</a></code>
- <code><a href="./src/resources/social-posts.ts">DeleteEntityResponse</a></code>
- <code><a href="./src/resources/social-posts.ts">FacebookConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">InstagramConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">LinkedinConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">PinterestConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">PlatformConfigurationsDto</a></code>
- <code><a href="./src/resources/social-posts.ts">SocialPost</a></code>
- <code><a href="./src/resources/social-posts.ts">SocialPostMedia</a></code>
- <code><a href="./src/resources/social-posts.ts">ThreadsConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">TiktokConfiguration</a></code>
- <code><a href="./src/resources/social-posts.ts">TwitterConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">TwitterPoll</a></code>
- <code><a href="./src/resources/social-posts.ts">YoutubeConfigurationDto</a></code>
- <code><a href="./src/resources/social-posts.ts">SocialPostListResponse</a></code>

Methods:

- <code title="post /v1/social-posts">client.socialPosts.<a href="./src/resources/social-posts.ts">create</a>({ ...params }) -> SocialPost</code>
- <code title="get /v1/social-posts/{id}">client.socialPosts.<a href="./src/resources/social-posts.ts">retrieve</a>(id) -> SocialPost</code>
- <code title="put /v1/social-posts/{id}">client.socialPosts.<a href="./src/resources/social-posts.ts">update</a>(id, { ...params }) -> SocialPost</code>
- <code title="get /v1/social-posts">client.socialPosts.<a href="./src/resources/social-posts.ts">list</a>({ ...params }) -> SocialPostListResponse</code>
- <code title="delete /v1/social-posts/{id}">client.socialPosts.<a href="./src/resources/social-posts.ts">delete</a>(id) -> DeleteEntityResponse</code>

# SocialPostResults

Types:

- <code><a href="./src/resources/social-post-results.ts">SocialPostResult</a></code>
- <code><a href="./src/resources/social-post-results.ts">SocialPostResultListResponse</a></code>

Methods:

- <code title="get /v1/social-post-results/{id}">client.socialPostResults.<a href="./src/resources/social-post-results.ts">retrieve</a>(id) -> SocialPostResult</code>
- <code title="get /v1/social-post-results">client.socialPostResults.<a href="./src/resources/social-post-results.ts">list</a>({ ...params }) -> SocialPostResultListResponse</code>

# SocialAccounts

Types:

- <code><a href="./src/resources/social-accounts.ts">SocialAccount</a></code>
- <code><a href="./src/resources/social-accounts.ts">SocialAccountMetadata</a></code>
- <code><a href="./src/resources/social-accounts.ts">SocialAccountListResponse</a></code>
- <code><a href="./src/resources/social-accounts.ts">SocialAccountCreateAuthURLResponse</a></code>
- <code><a href="./src/resources/social-accounts.ts">SocialAccountDisconnectResponse</a></code>

Methods:

- <code title="post /v1/social-accounts">client.socialAccounts.<a href="./src/resources/social-accounts.ts">create</a>({ ...params }) -> SocialAccount</code>
- <code title="get /v1/social-accounts/{id}">client.socialAccounts.<a href="./src/resources/social-accounts.ts">retrieve</a>(id) -> SocialAccount</code>
- <code title="patch /v1/social-accounts/{id}">client.socialAccounts.<a href="./src/resources/social-accounts.ts">update</a>(id, { ...params }) -> SocialAccount</code>
- <code title="get /v1/social-accounts">client.socialAccounts.<a href="./src/resources/social-accounts.ts">list</a>({ ...params }) -> SocialAccountListResponse</code>
- <code title="post /v1/social-accounts/auth-url">client.socialAccounts.<a href="./src/resources/social-accounts.ts">createAuthURL</a>({ ...params }) -> SocialAccountCreateAuthURLResponse</code>
- <code title="post /v1/social-accounts/{id}/disconnect">client.socialAccounts.<a href="./src/resources/social-accounts.ts">disconnect</a>(id) -> SocialAccountDisconnectResponse</code>

# SocialAccountFeeds

Types:

- <code><a href="./src/resources/social-account-feeds.ts">FacebookActivityByActionType</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">FacebookVideoRetentionGraph</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">FacebookVideoViewTimeByDemographic</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">PinterestMetricsWindow</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">PlatformPost</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">TiktokBusinessVideoMetricPercentage</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">YoutubePostPlatformData</a></code>
- <code><a href="./src/resources/social-account-feeds.ts">SocialAccountFeedListResponse</a></code>

Methods:

- <code title="get /v1/social-account-feeds/{social_account_id}">client.socialAccountFeeds.<a href="./src/resources/social-account-feeds.ts">list</a>(socialAccountID, { ...params }) -> SocialAccountFeedListResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> Webhook</code>
- <code title="get /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(id) -> Webhook</code>
- <code title="patch /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> Webhook</code>
- <code title="get /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id) -> DeleteEntityResponse</code>

# SocialPostPreviews

Types:

- <code><a href="./src/resources/social-post-previews.ts">CreateSocialPostPreview</a></code>
- <code><a href="./src/resources/social-post-previews.ts">SocialPostPreview</a></code>
- <code><a href="./src/resources/social-post-previews.ts">SocialPostPreviewCreateResponse</a></code>

Methods:

- <code title="post /v1/social-post-previews">client.socialPostPreviews.<a href="./src/resources/social-post-previews.ts">create</a>({ ...params }) -> SocialPostPreviewCreateResponse</code>
