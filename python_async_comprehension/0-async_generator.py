#!/usr/bin/env python3
from typing import Generator
import random
import asyncio

# Define the asynchronous generator with proper annotations
async def async_generator() -> Generator[float, None, None]:
    for _ in range(10):
        await asyncio.sleep(1)  # Asynchronous sleep for 1 second
        yield random.uniform(0, 10)  # Yield a random float between 0 and 10
