# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from .._models import BaseModel

__all__ = ["MediaCreateUploadURLResponse"]


class MediaCreateUploadURLResponse(BaseModel):
    media_url: str
    """The public URL for the media, to use once file has been uploaded"""

    upload_url: str
    """The signed upload URL for the client to upload the file"""
