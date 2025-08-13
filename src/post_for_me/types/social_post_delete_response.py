# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from .._models import BaseModel

__all__ = ["SocialPostDeleteResponse"]


class SocialPostDeleteResponse(BaseModel):
    success: bool
    """Whether or not the entity was deleted"""
