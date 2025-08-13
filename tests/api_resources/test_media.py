# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from post_for_me import PostForMe, AsyncPostForMe
from tests.utils import assert_matches_type
from post_for_me.types import MediaCreateUploadURLResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestMedia:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_create_upload_url(self, client: PostForMe) -> None:
        media = client.media.create_upload_url()
        assert_matches_type(MediaCreateUploadURLResponse, media, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_create_upload_url(self, client: PostForMe) -> None:
        response = client.media.with_raw_response.create_upload_url()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        media = response.parse()
        assert_matches_type(MediaCreateUploadURLResponse, media, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_create_upload_url(self, client: PostForMe) -> None:
        with client.media.with_streaming_response.create_upload_url() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            media = response.parse()
            assert_matches_type(MediaCreateUploadURLResponse, media, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncMedia:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_create_upload_url(self, async_client: AsyncPostForMe) -> None:
        media = await async_client.media.create_upload_url()
        assert_matches_type(MediaCreateUploadURLResponse, media, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_create_upload_url(self, async_client: AsyncPostForMe) -> None:
        response = await async_client.media.with_raw_response.create_upload_url()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        media = await response.parse()
        assert_matches_type(MediaCreateUploadURLResponse, media, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_create_upload_url(self, async_client: AsyncPostForMe) -> None:
        async with async_client.media.with_streaming_response.create_upload_url() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            media = await response.parse()
            assert_matches_type(MediaCreateUploadURLResponse, media, path=["response"])

        assert cast(Any, response.is_closed) is True
