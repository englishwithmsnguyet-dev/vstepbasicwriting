import re

with open('script.js', 'r') as f:
    code = f.read()

# 1. Update saveProgress
code = code.replace(
    'pronounsAnswersPara: window.pronounsAnswersPara',
    'pronounsAnswersPara: window.pronounsAnswersPara,\n        verbsAnswers1: window.verbsAnswers1,\n        verbsAnswers2: window.verbsAnswers2,\n        verbsAnswersPara: window.verbsAnswersPara'
)

# 2. Update loadProgress
code = code.replace(
    'if (state.pronounsAnswersPara) window.pronounsAnswersPara = state.pronounsAnswersPara;',
    'if (state.pronounsAnswersPara) window.pronounsAnswersPara = state.pronounsAnswersPara;\n        if (state.verbsAnswers1) window.verbsAnswers1 = state.verbsAnswers1;\n        if (state.verbsAnswers2) window.verbsAnswers2 = state.verbsAnswers2;\n        if (state.verbsAnswersPara) window.verbsAnswersPara = state.verbsAnswersPara;'
)

# 3. Update openTopic
code = code.replace(
    "else if (topicId === 'pronouns' && typeof renderPronounsDetail === 'function') renderPronounsDetail();",
    "else if (topicId === 'pronouns' && typeof renderPronounsDetail === 'function') renderPronounsDetail();\n            else if (topicId === 'verbs' && typeof renderVerbsDetail === 'function') renderVerbsDetail();"
)
code = code.replace(
    "else if (topicId === 'pronouns') renderPronounsDetail();",
    "else if (topicId === 'pronouns') renderPronounsDetail();\n    else if (topicId === 'verbs') renderVerbsDetail();"
)

with open('script.js', 'w') as f:
    f.write(code)

print("Updated save/load progress and openTopic")
