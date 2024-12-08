import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay between 0 and max_delay
    (inclusive) and returns the delay.

    Args:
        max_delay (int): The maximum delay in seconds (default is 10).

    Returns:
        float: The actual delay time.
    """
    delay = random.uniform(0, max_delay)  # Generate a random float between 0 and max_delay
    await asyncio.sleep(delay)  # Asynchronous sleep for the delay
    return delay
