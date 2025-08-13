from __future__ import annotations

from typing import Any
from typing_extensions import override

from ._proxy import LazyProxy


class ResourcesProxy(LazyProxy[Any]):
    """A proxy for the `post_for_me.resources` module.

    This is used so that we can lazily import `post_for_me.resources` only when
    needed *and* so that users can just import `post_for_me` and reference `post_for_me.resources`
    """

    @override
    def __load__(self) -> Any:
        import importlib

        mod = importlib.import_module("post_for_me.resources")
        return mod


resources = ResourcesProxy().__as_proxied__()
