# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing_extensions import Literal, Required, TypedDict

__all__ = ["SocialAccountCreateAuthURLParams", "PlatformData", "PlatformDataBluesky", "PlatformDataLinkedin"]


class SocialAccountCreateAuthURLParams(TypedDict, total=False):
    platform: Required[str]
    """The social account provider"""

    platform_data: PlatformData
    """Additional data needed for the provider"""


class PlatformDataBluesky(TypedDict, total=False):
    app_password: Required[str]
    """The app password of the account"""

    handle: Required[str]
    """The handle of the account"""


class PlatformDataLinkedin(TypedDict, total=False):
    connection_type: Required[Literal["personal", "organization"]]
    """
    The type of connection; personal for posting on behalf of the user only,
    organization for posting on behalf of both an organization and the user
    """


class PlatformData(TypedDict, total=False):
    bluesky: PlatformDataBluesky
    """Additional data needed for connecting bluesky accounts"""

    linkedin: PlatformDataLinkedin
    """Additional data for connecting linkedin accounts"""
