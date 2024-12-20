#!/usr/bin/env python3
""" This module demonstrates inserting documents"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """function that lists all documents in a collection"""
    if kwargs:
        mongo_collection.insert_one(kwargs)
        doc = mongo_collection.find_one(kwargs)
        return doc["_id"]
