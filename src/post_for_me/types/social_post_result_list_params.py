# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import List
from typing_extensions import TypedDict

__all__ = ["SocialPostResultListParams"]


class SocialPostResultListParams(TypedDict, total=False):
    limit: float
    """Number of items to return"""

    offset: float
    """Number of items to skip"""

    platform: List[str]
    """Filter by platform(s).

    Multiple values imply OR logic (e.g., ?platform=x&platform=facebook).
    """

    post_id: List[str]
    """Filter by post IDs.

    Multiple values imply OR logic (e.g., ?post_id=123&post_id=456).
    """
