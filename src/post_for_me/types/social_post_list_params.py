# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import List
from typing_extensions import Literal, TypedDict

__all__ = ["SocialPostListParams"]


class SocialPostListParams(TypedDict, total=False):
    external_id: List[str]
    """Filter by external ID. Multiple values imply OR logic."""

    limit: float
    """Number of items to return"""

    offset: float
    """Number of items to skip"""

    platform: List[
        Literal["bluesky", "facebook", "instagram", "linkedin", "pinterest", "threads", "tiktok", "twitter", "youtube"]
    ]
    """Filter by platforms. Multiple values imply OR logic."""

    status: List[Literal["draft", "scheduled", "processing", "processed"]]
    """Filter by post status. Multiple values imply OR logic."""
