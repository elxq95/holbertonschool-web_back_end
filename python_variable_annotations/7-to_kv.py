#!/usr/bin/env python3

from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string `k` and an int/float `v` as arguments and returns a tuple.
    The first element is `k`, and the second element is the square of `v`.

    Args:
        k (str): A string value.
        v (Union[int, float]): An integer or float value.

    Returns:
        Tuple[str, float]: A tuple with the string and the square of the value.
    """
    return (k, float(v ** 2))
