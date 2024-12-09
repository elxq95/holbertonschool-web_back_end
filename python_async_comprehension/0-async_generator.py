#!/usr/bin/env python3
import asyncio
import random

async def async_generator():
    """
    Coroutine that loops 10 times, waits 1 second asynchronously,
    and yields a random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Asynchronously wait for 1 second
        yield random.uniform(0, 10)  # Yield a random float between 0 and 10
