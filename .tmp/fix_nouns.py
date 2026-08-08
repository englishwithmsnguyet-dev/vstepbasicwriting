import re

with open('script.js', 'r') as f:
    text = f.read()

def replacer(match):
    content = match.group(0)
    # Replace strong with b style
    content = content.replace('<strong>', '<b style="color: var(--primary-color);">')
    content = content.replace('</strong>', '</b>')
    return content

# Regex to find nounsPractice2Data array
text = re.sub(r'(const nounsPractice2Data = \[[\s\S]*?\];)', replacer, text)

with open('script.js', 'w') as f:
    f.write(text)

print("Safely replaced strong in nounsPractice2Data")
