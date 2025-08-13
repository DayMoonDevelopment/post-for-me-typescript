# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import httpx

from .._types import NOT_GIVEN, Body, Query, Headers, NotGiven
from .._compat import cached_property
from .._resource import SyncAPIResource, AsyncAPIResource
from .._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from .._base_client import make_request_options
from ..types.media_create_upload_url_response import MediaCreateUploadURLResponse

__all__ = ["MediaResource", "AsyncMediaResource"]


class MediaResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> MediaResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#accessing-raw-response-data-eg-headers
        """
        return MediaResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> MediaResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#with_streaming_response
        """
        return MediaResourceWithStreamingResponse(self)

    def create_upload_url(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> MediaCreateUploadURLResponse:
        """
        To upload media to attach to your post, make a `POST` request to the
        `/media/create-upload-url` endpoint.

        You'll receive the public url of your media item (which can be used when making
        a post) and will include an `upload_url` which is a signed URL of the storage
        location for uploading your file to.

        This URL is unique and publicly signed for a short time, so make sure to upload
        your files in a timely manner.

        **Example flow using JavaScript and the Fetch API:**

        **Request an upload URL**

        ```js
        // Step 1: Request an upload URL from your API
        const response = await fetch(
          "https://api.postforme.dev/v1/media/create-upload-url",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { media_url, upload_url } = await response.json();
        ```

        **Upload your file to the signed URL**

        ```js
        // Step 2: Upload your file to the signed URL
        const file = /* your File or Blob object, e.g., from an <input type="file"> */;
        await fetch(upload_url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'image/jpeg'
          },
          body: file
        });
        ```

        **Use the `media_url` when creating your post**

            ```js
            // Step 3: Use the `media_url` when creating your post
            const response = await fetch('https://api.postforme.dev/v1/social-posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                social_accounts: ['spc_...', ...],
                caption: 'My caption',
                media: [
                  {
                    url: media_url
                  }
                ]
              })
            });
            ```
        """
        return self._post(
            "/v1/media/create-upload-url",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=MediaCreateUploadURLResponse,
        )


class AsyncMediaResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncMediaResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#accessing-raw-response-data-eg-headers
        """
        return AsyncMediaResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncMediaResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/post-for-me-python#with_streaming_response
        """
        return AsyncMediaResourceWithStreamingResponse(self)

    async def create_upload_url(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> MediaCreateUploadURLResponse:
        """
        To upload media to attach to your post, make a `POST` request to the
        `/media/create-upload-url` endpoint.

        You'll receive the public url of your media item (which can be used when making
        a post) and will include an `upload_url` which is a signed URL of the storage
        location for uploading your file to.

        This URL is unique and publicly signed for a short time, so make sure to upload
        your files in a timely manner.

        **Example flow using JavaScript and the Fetch API:**

        **Request an upload URL**

        ```js
        // Step 1: Request an upload URL from your API
        const response = await fetch(
          "https://api.postforme.dev/v1/media/create-upload-url",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { media_url, upload_url } = await response.json();
        ```

        **Upload your file to the signed URL**

        ```js
        // Step 2: Upload your file to the signed URL
        const file = /* your File or Blob object, e.g., from an <input type="file"> */;
        await fetch(upload_url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'image/jpeg'
          },
          body: file
        });
        ```

        **Use the `media_url` when creating your post**

            ```js
            // Step 3: Use the `media_url` when creating your post
            const response = await fetch('https://api.postforme.dev/v1/social-posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                social_accounts: ['spc_...', ...],
                caption: 'My caption',
                media: [
                  {
                    url: media_url
                  }
                ]
              })
            });
            ```
        """
        return await self._post(
            "/v1/media/create-upload-url",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=MediaCreateUploadURLResponse,
        )


class MediaResourceWithRawResponse:
    def __init__(self, media: MediaResource) -> None:
        self._media = media

        self.create_upload_url = to_raw_response_wrapper(
            media.create_upload_url,
        )


class AsyncMediaResourceWithRawResponse:
    def __init__(self, media: AsyncMediaResource) -> None:
        self._media = media

        self.create_upload_url = async_to_raw_response_wrapper(
            media.create_upload_url,
        )


class MediaResourceWithStreamingResponse:
    def __init__(self, media: MediaResource) -> None:
        self._media = media

        self.create_upload_url = to_streamed_response_wrapper(
            media.create_upload_url,
        )


class AsyncMediaResourceWithStreamingResponse:
    def __init__(self, media: AsyncMediaResource) -> None:
        self._media = media

        self.create_upload_url = async_to_streamed_response_wrapper(
            media.create_upload_url,
        )
