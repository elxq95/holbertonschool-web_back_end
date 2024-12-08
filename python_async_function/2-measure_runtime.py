#!/usr/bin/env python3
''' This module measures the total execution time
for wait_n(n, max_delay), and returns total_time / n'''

import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    ''' This asynce function measures the total execution time
    for wait_n(n, max_delay), and returns total_time / n and
    returns a float'''
    start: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end: float = time.time()
    total_time: float = end - start
    return total_time / n