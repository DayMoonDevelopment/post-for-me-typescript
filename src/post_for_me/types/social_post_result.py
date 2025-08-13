# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Optional

from .._models import BaseModel

__all__ = ["SocialPostResult", "PlatformData"]


class PlatformData(BaseModel):
    id: Optional[str] = None
    """Platform-specific ID"""

    url: Optional[str] = None
    """URL of the posted content"""


class SocialPostResult(BaseModel):
    id: str
    """The unique identifier of the post result"""

    details: object
    """Detailed logs from the post"""

    error: object
    """Error message if the post failed"""

    platform_data: PlatformData
    """Platform-specific data"""

    post_id: str
    """The ID of the associated post"""

    social_account_id: str
    """The ID of the associated social account"""

    success: bool
    """Indicates if the post was successful"""
