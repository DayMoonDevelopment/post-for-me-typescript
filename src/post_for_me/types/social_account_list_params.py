# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import List
from typing_extensions import TypedDict

__all__ = ["SocialAccountListParams"]


class SocialAccountListParams(TypedDict, total=False):
    id: List[str]
    """Filter by id(s).

    Multiple values imply OR logic (e.g., ?id=spc_xxxxxx&id=spc_yyyyyy).
    """

    external_id: List[str]
    """Filter by externalId(s).

    Multiple values imply OR logic (e.g., ?externalId=test&externalId=test2).
    """

    limit: float
    """Number of items to return"""

    offset: float
    """Number of items to skip"""

    platform: List[str]
    """Filter by platform(s).

    Multiple values imply OR logic (e.g., ?platform=x&platform=twitter).
    """

    username: List[str]
    """Filter by username(s).

    Multiple values imply OR logic (e.g., ?username=test&username=test2).
    """
