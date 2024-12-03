#!/usr/bin/env python3 
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Takes a float `multiplier` as an argument and returns a function
    that multiplies a float by the `multiplier`.

    Args:
        multiplier (float): The multiplier value.

    Returns:
        Callable[[float], float]: A function that takes a float and returns its product with the multiplier.
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function
