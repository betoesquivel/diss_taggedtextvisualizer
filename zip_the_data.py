#!/usr/bin/env python

import json
import itertools

f1 = open('coloured_stanford.jsonl')
f2 = open('coloured_tagme.jsonl')
f3 = open('coloured_wikifier.jsonl')



tagged_docs = []
for (t1, t2, t3) in zip(itertools.islice(f1, 10), itertools.islice(f2,10), itertools.islice(f3,10)):
    doc = []
    for (w1, w2, w3) in zip(json.loads( t1 ), json.loads(t2), json.loads(t3)):
        word_with_tags = [
            w1,
            w2,
            w3
        ]
        doc.append(word_with_tags)
    tagged_docs.append(doc)

print json.dumps(tagged_docs)
