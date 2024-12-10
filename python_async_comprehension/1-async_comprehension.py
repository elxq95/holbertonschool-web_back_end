#!/usr/bin/env python3
"""
This module demonstrates asynchronous comprehensions.
It includes a coroutine that collects random numbers generated asynchronously.
"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronous coroutine that collects 10 random numbers.

    This function collects 10 random numbers from the `async_generator`
    using an asynchronous comprehension and returns them as a list.

    Returns:
        List[float]: A list of 10 random floats collected asynchronously.
    """
    return [number async for number in async_generator()]