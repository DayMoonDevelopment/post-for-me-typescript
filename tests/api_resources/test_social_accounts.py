# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from post_for_me import PostForMe, AsyncPostForMe
from tests.utils import assert_matches_type
from post_for_me.types import (
    SocialAccount,
    SocialAccountListResponse,
    SocialAccountDisconnectResponse,
    SocialAccountCreateAuthURLResponse,
)

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestSocialAccounts:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_retrieve(self, client: PostForMe) -> None:
        social_account = client.social_accounts.retrieve(
            "id",
        )
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_retrieve(self, client: PostForMe) -> None:
        response = client.social_accounts.with_raw_response.retrieve(
            "id",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = response.parse()
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_retrieve(self, client: PostForMe) -> None:
        with client.social_accounts.with_streaming_response.retrieve(
            "id",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = response.parse()
            assert_matches_type(SocialAccount, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_path_params_retrieve(self, client: PostForMe) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `id` but received ''"):
            client.social_accounts.with_raw_response.retrieve(
                "",
            )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_update(self, client: PostForMe) -> None:
        social_account = client.social_accounts.update(
            id="id",
        )
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_update_with_all_params(self, client: PostForMe) -> None:
        social_account = client.social_accounts.update(
            id="id",
            external_id="external_id",
            username="username",
        )
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_update(self, client: PostForMe) -> None:
        response = client.social_accounts.with_raw_response.update(
            id="id",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = response.parse()
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_update(self, client: PostForMe) -> None:
        with client.social_accounts.with_streaming_response.update(
            id="id",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = response.parse()
            assert_matches_type(SocialAccount, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_path_params_update(self, client: PostForMe) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `id` but received ''"):
            client.social_accounts.with_raw_response.update(
                id="",
            )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_list(self, client: PostForMe) -> None:
        social_account = client.social_accounts.list()
        assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_list_with_all_params(self, client: PostForMe) -> None:
        social_account = client.social_accounts.list(
            id=["string"],
            external_id=["string"],
            limit=0,
            offset=0,
            platform=["string"],
            username=["string"],
        )
        assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_list(self, client: PostForMe) -> None:
        response = client.social_accounts.with_raw_response.list()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = response.parse()
        assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_list(self, client: PostForMe) -> None:
        with client.social_accounts.with_streaming_response.list() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = response.parse()
            assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_create_auth_url(self, client: PostForMe) -> None:
        social_account = client.social_accounts.create_auth_url(
            platform="platform",
        )
        assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_create_auth_url_with_all_params(self, client: PostForMe) -> None:
        social_account = client.social_accounts.create_auth_url(
            platform="platform",
            platform_data={
                "bluesky": {
                    "app_password": "app_password",
                    "handle": "handle",
                },
                "linkedin": {"connection_type": "personal"},
            },
        )
        assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_create_auth_url(self, client: PostForMe) -> None:
        response = client.social_accounts.with_raw_response.create_auth_url(
            platform="platform",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = response.parse()
        assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_create_auth_url(self, client: PostForMe) -> None:
        with client.social_accounts.with_streaming_response.create_auth_url(
            platform="platform",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = response.parse()
            assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_disconnect(self, client: PostForMe) -> None:
        social_account = client.social_accounts.disconnect(
            "id",
        )
        assert_matches_type(SocialAccountDisconnectResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_disconnect(self, client: PostForMe) -> None:
        response = client.social_accounts.with_raw_response.disconnect(
            "id",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = response.parse()
        assert_matches_type(SocialAccountDisconnectResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_disconnect(self, client: PostForMe) -> None:
        with client.social_accounts.with_streaming_response.disconnect(
            "id",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = response.parse()
            assert_matches_type(SocialAccountDisconnectResponse, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_path_params_disconnect(self, client: PostForMe) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `id` but received ''"):
            client.social_accounts.with_raw_response.disconnect(
                "",
            )


class TestAsyncSocialAccounts:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_retrieve(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.retrieve(
            "id",
        )
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_retrieve(self, async_client: AsyncPostForMe) -> None:
        response = await async_client.social_accounts.with_raw_response.retrieve(
            "id",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = await response.parse()
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_retrieve(self, async_client: AsyncPostForMe) -> None:
        async with async_client.social_accounts.with_streaming_response.retrieve(
            "id",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = await response.parse()
            assert_matches_type(SocialAccount, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_path_params_retrieve(self, async_client: AsyncPostForMe) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `id` but received ''"):
            await async_client.social_accounts.with_raw_response.retrieve(
                "",
            )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_update(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.update(
            id="id",
        )
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_update_with_all_params(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.update(
            id="id",
            external_id="external_id",
            username="username",
        )
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_update(self, async_client: AsyncPostForMe) -> None:
        response = await async_client.social_accounts.with_raw_response.update(
            id="id",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = await response.parse()
        assert_matches_type(SocialAccount, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_update(self, async_client: AsyncPostForMe) -> None:
        async with async_client.social_accounts.with_streaming_response.update(
            id="id",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = await response.parse()
            assert_matches_type(SocialAccount, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_path_params_update(self, async_client: AsyncPostForMe) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `id` but received ''"):
            await async_client.social_accounts.with_raw_response.update(
                id="",
            )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_list(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.list()
        assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_list_with_all_params(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.list(
            id=["string"],
            external_id=["string"],
            limit=0,
            offset=0,
            platform=["string"],
            username=["string"],
        )
        assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_list(self, async_client: AsyncPostForMe) -> None:
        response = await async_client.social_accounts.with_raw_response.list()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = await response.parse()
        assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_list(self, async_client: AsyncPostForMe) -> None:
        async with async_client.social_accounts.with_streaming_response.list() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = await response.parse()
            assert_matches_type(SocialAccountListResponse, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_create_auth_url(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.create_auth_url(
            platform="platform",
        )
        assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_create_auth_url_with_all_params(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.create_auth_url(
            platform="platform",
            platform_data={
                "bluesky": {
                    "app_password": "app_password",
                    "handle": "handle",
                },
                "linkedin": {"connection_type": "personal"},
            },
        )
        assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_create_auth_url(self, async_client: AsyncPostForMe) -> None:
        response = await async_client.social_accounts.with_raw_response.create_auth_url(
            platform="platform",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = await response.parse()
        assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_create_auth_url(self, async_client: AsyncPostForMe) -> None:
        async with async_client.social_accounts.with_streaming_response.create_auth_url(
            platform="platform",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = await response.parse()
            assert_matches_type(SocialAccountCreateAuthURLResponse, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_disconnect(self, async_client: AsyncPostForMe) -> None:
        social_account = await async_client.social_accounts.disconnect(
            "id",
        )
        assert_matches_type(SocialAccountDisconnectResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_disconnect(self, async_client: AsyncPostForMe) -> None:
        response = await async_client.social_accounts.with_raw_response.disconnect(
            "id",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        social_account = await response.parse()
        assert_matches_type(SocialAccountDisconnectResponse, social_account, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_disconnect(self, async_client: AsyncPostForMe) -> None:
        async with async_client.social_accounts.with_streaming_response.disconnect(
            "id",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            social_account = await response.parse()
            assert_matches_type(SocialAccountDisconnectResponse, social_account, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_path_params_disconnect(self, async_client: AsyncPostForMe) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `id` but received ''"):
            await async_client.social_accounts.with_raw_response.disconnect(
                "",
            )
