#!/usr/bin/env python

import json
import itertools

f1 = open('100_parsed_from_stanford.jsonl')

raw_docs = []
for raw in itertools.islice(f1,10):
    raw_docs.append(json.loads( raw )['tokens'])

print json.dumps(raw_docs)
