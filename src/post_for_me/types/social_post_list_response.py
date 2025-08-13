# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List, Optional

from .._models import BaseModel
from .social_post import SocialPost

__all__ = ["SocialPostListResponse", "Meta"]


class Meta(BaseModel):
    limit: float
    """Maximum number of items returned."""

    next: Optional[str] = None
    """URL to the next page of results, or null if none."""

    offset: float
    """Number of items skipped."""

    total: float
    """Total number of items available."""


class SocialPostListResponse(BaseModel):
    data: List[SocialPost]

    meta: Meta
