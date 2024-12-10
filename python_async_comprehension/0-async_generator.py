#!/usr/bin/env python3

"""
This module provides examples of asynchronous generators and comprehensions.
It is designed to demonstrate how to create, document, and type-annotate Python functions.
"""

from typing import Generator
import asyncio
import random

async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronous generator that yields random floats.

    Yields:
        float: A random float between 0 and 10, yielded after 1-second intervals.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
