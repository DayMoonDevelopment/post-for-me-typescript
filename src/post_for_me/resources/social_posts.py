# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import List, Union, Iterable, Optional
from datetime import datetime
from typing_extensions import Literal

import httpx

from ..types import social_post_list_params, social_post_create_params, social_post_update_params
from .._types import NOT_GIVEN, Body, Query, Headers, NotGiven
from .._utils import maybe_transform, async_maybe_transform
from .._compat import cached_property
from .._resource import SyncAPIResource, AsyncAPIResource
from .._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from .._base_client import make_request_options
from ..types.social_post import SocialPost
from ..types.social_post_list_response import SocialPostListResponse
from ..types.social_post_delete_response import SocialPostDeleteResponse

__all__ = ["SocialPostsResource", "AsyncSocialPostsResource"]


class SocialPostsResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> SocialPostsResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#accessing-raw-response-data-eg-headers
        """
        return SocialPostsResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> SocialPostsResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#with_streaming_response
        """
        return SocialPostsResourceWithStreamingResponse(self)

    def create(
        self,
        *,
        caption: str,
        social_accounts: List[str],
        account_configurations: Optional[Iterable[social_post_create_params.AccountConfiguration]]
        | NotGiven = NOT_GIVEN,
        external_id: Optional[str] | NotGiven = NOT_GIVEN,
        is_draft: Optional[bool] | NotGiven = NOT_GIVEN,
        media: Optional[Iterable[social_post_create_params.Media]] | NotGiven = NOT_GIVEN,
        platform_configurations: Optional[social_post_create_params.PlatformConfigurations] | NotGiven = NOT_GIVEN,
        scheduled_at: Union[str, datetime, None] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPost:
        """
        Create Post

        Args:
          caption: Caption text for the post

          social_accounts: Array of social account IDs for posting

          account_configurations: Account-specific configurations for the post

          external_id: Array of social account IDs for posting

          is_draft: If isDraft is set then the post will not be processed

          media: Array of media URLs associated with the post

          platform_configurations: Platform-specific configurations for the post

          scheduled_at: Scheduled date and time for the post, setting to null or undefined will post
              instantly

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._post(
            "/v1/social-posts",
            body=maybe_transform(
                {
                    "caption": caption,
                    "social_accounts": social_accounts,
                    "account_configurations": account_configurations,
                    "external_id": external_id,
                    "is_draft": is_draft,
                    "media": media,
                    "platform_configurations": platform_configurations,
                    "scheduled_at": scheduled_at,
                },
                social_post_create_params.SocialPostCreateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPost,
        )

    def retrieve(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPost:
        """
        Get Post by ID

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return self._get(
            f"/v1/social-posts/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPost,
        )

    def update(
        self,
        id: str,
        *,
        caption: str,
        social_accounts: List[str],
        account_configurations: Optional[Iterable[social_post_update_params.AccountConfiguration]]
        | NotGiven = NOT_GIVEN,
        external_id: Optional[str] | NotGiven = NOT_GIVEN,
        is_draft: Optional[bool] | NotGiven = NOT_GIVEN,
        media: Optional[Iterable[social_post_update_params.Media]] | NotGiven = NOT_GIVEN,
        platform_configurations: Optional[social_post_update_params.PlatformConfigurations] | NotGiven = NOT_GIVEN,
        scheduled_at: Union[str, datetime, None] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPost:
        """
        Update Post

        Args:
          caption: Caption text for the post

          social_accounts: Array of social account IDs for posting

          account_configurations: Account-specific configurations for the post

          external_id: Array of social account IDs for posting

          is_draft: If isDraft is set then the post will not be processed

          media: Array of media URLs associated with the post

          platform_configurations: Platform-specific configurations for the post

          scheduled_at: Scheduled date and time for the post, setting to null or undefined will post
              instantly

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return self._put(
            f"/v1/social-posts/{id}",
            body=maybe_transform(
                {
                    "caption": caption,
                    "social_accounts": social_accounts,
                    "account_configurations": account_configurations,
                    "external_id": external_id,
                    "is_draft": is_draft,
                    "media": media,
                    "platform_configurations": platform_configurations,
                    "scheduled_at": scheduled_at,
                },
                social_post_update_params.SocialPostUpdateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPost,
        )

    def list(
        self,
        *,
        external_id: List[str] | NotGiven = NOT_GIVEN,
        limit: float | NotGiven = NOT_GIVEN,
        offset: float | NotGiven = NOT_GIVEN,
        platform: List[
            Literal[
                "bluesky", "facebook", "instagram", "linkedin", "pinterest", "threads", "tiktok", "twitter", "youtube"
            ]
        ]
        | NotGiven = NOT_GIVEN,
        status: List[Literal["draft", "scheduled", "processing", "processed"]] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPostListResponse:
        """
        Get a paginated result for posts based on the applied filters

        Args:
          external_id: Filter by external ID. Multiple values imply OR logic.

          limit: Number of items to return

          offset: Number of items to skip

          platform: Filter by platforms. Multiple values imply OR logic.

          status: Filter by post status. Multiple values imply OR logic.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            "/v1/social-posts",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "external_id": external_id,
                        "limit": limit,
                        "offset": offset,
                        "platform": platform,
                        "status": status,
                    },
                    social_post_list_params.SocialPostListParams,
                ),
            ),
            cast_to=SocialPostListResponse,
        )

    def delete(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPostDeleteResponse:
        """
        Delete Post

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return self._delete(
            f"/v1/social-posts/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPostDeleteResponse,
        )


class AsyncSocialPostsResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncSocialPostsResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#accessing-raw-response-data-eg-headers
        """
        return AsyncSocialPostsResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncSocialPostsResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#with_streaming_response
        """
        return AsyncSocialPostsResourceWithStreamingResponse(self)

    async def create(
        self,
        *,
        caption: str,
        social_accounts: List[str],
        account_configurations: Optional[Iterable[social_post_create_params.AccountConfiguration]]
        | NotGiven = NOT_GIVEN,
        external_id: Optional[str] | NotGiven = NOT_GIVEN,
        is_draft: Optional[bool] | NotGiven = NOT_GIVEN,
        media: Optional[Iterable[social_post_create_params.Media]] | NotGiven = NOT_GIVEN,
        platform_configurations: Optional[social_post_create_params.PlatformConfigurations] | NotGiven = NOT_GIVEN,
        scheduled_at: Union[str, datetime, None] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPost:
        """
        Create Post

        Args:
          caption: Caption text for the post

          social_accounts: Array of social account IDs for posting

          account_configurations: Account-specific configurations for the post

          external_id: Array of social account IDs for posting

          is_draft: If isDraft is set then the post will not be processed

          media: Array of media URLs associated with the post

          platform_configurations: Platform-specific configurations for the post

          scheduled_at: Scheduled date and time for the post, setting to null or undefined will post
              instantly

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._post(
            "/v1/social-posts",
            body=await async_maybe_transform(
                {
                    "caption": caption,
                    "social_accounts": social_accounts,
                    "account_configurations": account_configurations,
                    "external_id": external_id,
                    "is_draft": is_draft,
                    "media": media,
                    "platform_configurations": platform_configurations,
                    "scheduled_at": scheduled_at,
                },
                social_post_create_params.SocialPostCreateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPost,
        )

    async def retrieve(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPost:
        """
        Get Post by ID

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return await self._get(
            f"/v1/social-posts/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPost,
        )

    async def update(
        self,
        id: str,
        *,
        caption: str,
        social_accounts: List[str],
        account_configurations: Optional[Iterable[social_post_update_params.AccountConfiguration]]
        | NotGiven = NOT_GIVEN,
        external_id: Optional[str] | NotGiven = NOT_GIVEN,
        is_draft: Optional[bool] | NotGiven = NOT_GIVEN,
        media: Optional[Iterable[social_post_update_params.Media]] | NotGiven = NOT_GIVEN,
        platform_configurations: Optional[social_post_update_params.PlatformConfigurations] | NotGiven = NOT_GIVEN,
        scheduled_at: Union[str, datetime, None] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPost:
        """
        Update Post

        Args:
          caption: Caption text for the post

          social_accounts: Array of social account IDs for posting

          account_configurations: Account-specific configurations for the post

          external_id: Array of social account IDs for posting

          is_draft: If isDraft is set then the post will not be processed

          media: Array of media URLs associated with the post

          platform_configurations: Platform-specific configurations for the post

          scheduled_at: Scheduled date and time for the post, setting to null or undefined will post
              instantly

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return await self._put(
            f"/v1/social-posts/{id}",
            body=await async_maybe_transform(
                {
                    "caption": caption,
                    "social_accounts": social_accounts,
                    "account_configurations": account_configurations,
                    "external_id": external_id,
                    "is_draft": is_draft,
                    "media": media,
                    "platform_configurations": platform_configurations,
                    "scheduled_at": scheduled_at,
                },
                social_post_update_params.SocialPostUpdateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPost,
        )

    async def list(
        self,
        *,
        external_id: List[str] | NotGiven = NOT_GIVEN,
        limit: float | NotGiven = NOT_GIVEN,
        offset: float | NotGiven = NOT_GIVEN,
        platform: List[
            Literal[
                "bluesky", "facebook", "instagram", "linkedin", "pinterest", "threads", "tiktok", "twitter", "youtube"
            ]
        ]
        | NotGiven = NOT_GIVEN,
        status: List[Literal["draft", "scheduled", "processing", "processed"]] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPostListResponse:
        """
        Get a paginated result for posts based on the applied filters

        Args:
          external_id: Filter by external ID. Multiple values imply OR logic.

          limit: Number of items to return

          offset: Number of items to skip

          platform: Filter by platforms. Multiple values imply OR logic.

          status: Filter by post status. Multiple values imply OR logic.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            "/v1/social-posts",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=await async_maybe_transform(
                    {
                        "external_id": external_id,
                        "limit": limit,
                        "offset": offset,
                        "platform": platform,
                        "status": status,
                    },
                    social_post_list_params.SocialPostListParams,
                ),
            ),
            cast_to=SocialPostListResponse,
        )

    async def delete(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPostDeleteResponse:
        """
        Delete Post

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return await self._delete(
            f"/v1/social-posts/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPostDeleteResponse,
        )


class SocialPostsResourceWithRawResponse:
    def __init__(self, social_posts: SocialPostsResource) -> None:
        self._social_posts = social_posts

        self.create = to_raw_response_wrapper(
            social_posts.create,
        )
        self.retrieve = to_raw_response_wrapper(
            social_posts.retrieve,
        )
        self.update = to_raw_response_wrapper(
            social_posts.update,
        )
        self.list = to_raw_response_wrapper(
            social_posts.list,
        )
        self.delete = to_raw_response_wrapper(
            social_posts.delete,
        )


class AsyncSocialPostsResourceWithRawResponse:
    def __init__(self, social_posts: AsyncSocialPostsResource) -> None:
        self._social_posts = social_posts

        self.create = async_to_raw_response_wrapper(
            social_posts.create,
        )
        self.retrieve = async_to_raw_response_wrapper(
            social_posts.retrieve,
        )
        self.update = async_to_raw_response_wrapper(
            social_posts.update,
        )
        self.list = async_to_raw_response_wrapper(
            social_posts.list,
        )
        self.delete = async_to_raw_response_wrapper(
            social_posts.delete,
        )


class SocialPostsResourceWithStreamingResponse:
    def __init__(self, social_posts: SocialPostsResource) -> None:
        self._social_posts = social_posts

        self.create = to_streamed_response_wrapper(
            social_posts.create,
        )
        self.retrieve = to_streamed_response_wrapper(
            social_posts.retrieve,
        )
        self.update = to_streamed_response_wrapper(
            social_posts.update,
        )
        self.list = to_streamed_response_wrapper(
            social_posts.list,
        )
        self.delete = to_streamed_response_wrapper(
            social_posts.delete,
        )


class AsyncSocialPostsResourceWithStreamingResponse:
    def __init__(self, social_posts: AsyncSocialPostsResource) -> None:
        self._social_posts = social_posts

        self.create = async_to_streamed_response_wrapper(
            social_posts.create,
        )
        self.retrieve = async_to_streamed_response_wrapper(
            social_posts.retrieve,
        )
        self.update = async_to_streamed_response_wrapper(
            social_posts.update,
        )
        self.list = async_to_streamed_response_wrapper(
            social_posts.list,
        )
        self.delete = async_to_streamed_response_wrapper(
            social_posts.delete,
        )
