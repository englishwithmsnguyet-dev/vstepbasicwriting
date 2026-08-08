import re

with open('script.js', 'r') as f:
    text = f.read()

# Replace double quotes in the style attribute with single quotes inside nounsPractice2Data
def replacer(match):
    content = match.group(0)
    content = content.replace('<b style="color: var(--primary-color);">', "<b style='color: var(--primary-color);'>")
    return content

text = re.sub(r'(const nounsPractice2Data = \[[\s\S]*?\];)', replacer, text)

with open('script.js', 'w') as f:
    f.write(text)

print("Fixed syntax error in nounsPractice2Data")
