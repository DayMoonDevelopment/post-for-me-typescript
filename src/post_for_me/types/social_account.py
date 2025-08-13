# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Optional
from typing_extensions import Literal

from .._models import BaseModel

__all__ = ["SocialAccount"]


class SocialAccount(BaseModel):
    id: str
    """The unique identifier of the social account"""

    external_id: Optional[str] = None
    """The external id of the social account"""

    platform: str
    """The platform of the social account"""

    status: Literal["connected", "disconnected"]
    """Status of the account"""

    username: Optional[str] = None
    """The platform's username of the social account"""
