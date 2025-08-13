# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import List

import httpx

from ..types import social_post_result_list_params
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
from ..types.social_post_result import SocialPostResult
from ..types.social_post_result_list_response import SocialPostResultListResponse

__all__ = ["SocialPostResultsResource", "AsyncSocialPostResultsResource"]


class SocialPostResultsResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> SocialPostResultsResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#accessing-raw-response-data-eg-headers
        """
        return SocialPostResultsResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> SocialPostResultsResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#with_streaming_response
        """
        return SocialPostResultsResourceWithStreamingResponse(self)

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
    ) -> SocialPostResult:
        """
        Get post result by ID

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return self._get(
            f"/v1/social-post-results/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPostResult,
        )

    def list(
        self,
        *,
        limit: float | NotGiven = NOT_GIVEN,
        offset: float | NotGiven = NOT_GIVEN,
        platform: List[str] | NotGiven = NOT_GIVEN,
        post_id: List[str] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPostResultListResponse:
        """
        Get a paginated result for post results based on the applied filters

        Args:
          limit: Number of items to return

          offset: Number of items to skip

          platform: Filter by platform(s). Multiple values imply OR logic (e.g.,
              ?platform=x&platform=facebook).

          post_id: Filter by post IDs. Multiple values imply OR logic (e.g.,
              ?post_id=123&post_id=456).

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            "/v1/social-post-results",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "limit": limit,
                        "offset": offset,
                        "platform": platform,
                        "post_id": post_id,
                    },
                    social_post_result_list_params.SocialPostResultListParams,
                ),
            ),
            cast_to=SocialPostResultListResponse,
        )


class AsyncSocialPostResultsResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncSocialPostResultsResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#accessing-raw-response-data-eg-headers
        """
        return AsyncSocialPostResultsResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncSocialPostResultsResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#with_streaming_response
        """
        return AsyncSocialPostResultsResourceWithStreamingResponse(self)

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
    ) -> SocialPostResult:
        """
        Get post result by ID

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not id:
            raise ValueError(f"Expected a non-empty value for `id` but received {id!r}")
        return await self._get(
            f"/v1/social-post-results/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SocialPostResult,
        )

    async def list(
        self,
        *,
        limit: float | NotGiven = NOT_GIVEN,
        offset: float | NotGiven = NOT_GIVEN,
        platform: List[str] | NotGiven = NOT_GIVEN,
        post_id: List[str] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> SocialPostResultListResponse:
        """
        Get a paginated result for post results based on the applied filters

        Args:
          limit: Number of items to return

          offset: Number of items to skip

          platform: Filter by platform(s). Multiple values imply OR logic (e.g.,
              ?platform=x&platform=facebook).

          post_id: Filter by post IDs. Multiple values imply OR logic (e.g.,
              ?post_id=123&post_id=456).

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            "/v1/social-post-results",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=await async_maybe_transform(
                    {
                        "limit": limit,
                        "offset": offset,
                        "platform": platform,
                        "post_id": post_id,
                    },
                    social_post_result_list_params.SocialPostResultListParams,
                ),
            ),
            cast_to=SocialPostResultListResponse,
        )


class SocialPostResultsResourceWithRawResponse:
    def __init__(self, social_post_results: SocialPostResultsResource) -> None:
        self._social_post_results = social_post_results

        self.retrieve = to_raw_response_wrapper(
            social_post_results.retrieve,
        )
        self.list = to_raw_response_wrapper(
            social_post_results.list,
        )


class AsyncSocialPostResultsResourceWithRawResponse:
    def __init__(self, social_post_results: AsyncSocialPostResultsResource) -> None:
        self._social_post_results = social_post_results

        self.retrieve = async_to_raw_response_wrapper(
            social_post_results.retrieve,
        )
        self.list = async_to_raw_response_wrapper(
            social_post_results.list,
        )


class SocialPostResultsResourceWithStreamingResponse:
    def __init__(self, social_post_results: SocialPostResultsResource) -> None:
        self._social_post_results = social_post_results

        self.retrieve = to_streamed_response_wrapper(
            social_post_results.retrieve,
        )
        self.list = to_streamed_response_wrapper(
            social_post_results.list,
        )


class AsyncSocialPostResultsResourceWithStreamingResponse:
    def __init__(self, social_post_results: AsyncSocialPostResultsResource) -> None:
        self._social_post_results = social_post_results

        self.retrieve = async_to_streamed_response_wrapper(
            social_post_results.retrieve,
        )
        self.list = async_to_streamed_response_wrapper(
            social_post_results.list,
        )
