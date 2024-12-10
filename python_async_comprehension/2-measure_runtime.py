#!/usr/bin/env python3
"""
This module measures the runtime of parallel asynchronous comprehensions.
"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measure the total runtime of executing async_comprehension four times in parallel.

    Returns:
        float: Total runtime in seconds.
    """
    start_time = time.perf_counter()  # Record the start time

    # Execute async_comprehension four times concurrently
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())

    end_time = time.perf_counter()  # Record the end time
    return end_time - start_time
