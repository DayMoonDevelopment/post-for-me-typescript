# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing_extensions import TypedDict

__all__ = ["SocialAccountUpdateParams"]


class SocialAccountUpdateParams(TypedDict, total=False):
    external_id: str
    """The platform's external id of the social account"""

    username: str
    """The platform's username of the social account"""
