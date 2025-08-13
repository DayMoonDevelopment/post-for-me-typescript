# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from .._models import BaseModel

__all__ = ["SocialAccountCreateAuthURLResponse"]


class SocialAccountCreateAuthURLResponse(BaseModel):
    platform: str
    """The social account provider"""

    url: str
    """The url to redirect the user to, in order to connect their account"""
