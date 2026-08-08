import re

with open('/Users/nguyetpham/.gemini/antigravity/brain/95fef404-7ae0-4885-ab61-af58403873a3/task.md', 'r') as f:
    t = f.read()

t = t.replace('- `[ ]`', '- `[x]`')

with open('/Users/nguyetpham/.gemini/antigravity/brain/95fef404-7ae0-4885-ab61-af58403873a3/task.md', 'w') as f:
    f.write(t)
