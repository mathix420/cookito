import re
import sys

PREFIXES = [
    r'^\[WIP\]',
    r'^\[ADD\]',
    r'^\[SWAP\]',
    r'^\[FIX( #[0-9]+)?\]',
    r'^\[TEST\]',
    r'^\[MERGE\]',
    r'^\[UPDATE\]',
    r'^\[REMOVE\]',
    r'^\[DELETE\]',
    r'^\[FEATURE\]'
]

if not sys.argv[1]:
    exit("Error: no commit message")

with open(sys.argv[1]) as fp:
    commit_message = fp.read()

if not re.match('|'.join(PREFIXES), commit_message):
    exit(f"Commit must be prefixed by a valid type")

print("Commit lint: PASSED")
