# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import List, Optional
from typing_extensions import TypedDict

__all__ = ["TiktokConfigurationParam"]


class TiktokConfigurationParam(TypedDict, total=False):
    allow_comment: Optional[bool]
    """Allow comments on TikTok"""

    allow_duet: Optional[bool]
    """Allow duets on TikTok"""

    allow_stitch: Optional[bool]
    """Allow stitch on TikTok"""

    caption: Optional[object]
    """Overrides the `caption` from the post"""

    disclose_branded_content: Optional[bool]
    """Disclose branded content on TikTok"""

    disclose_your_brand: Optional[bool]
    """Disclose your brand on TikTok"""

    media: Optional[List[str]]
    """Overrides the `media` from the post"""

    privacy_status: Optional[str]
    """Sets the privacy status for TikTok (private, public)"""

    title: Optional[str]
    """Overrides the `title` from the post"""
