import re

def update_state():
    with open('script.js', 'r') as f:
        code = f.read()

    # 1. Update load state (around line 15)
    load_old = """    if (state.pronounsAnswers3) window.pronounsAnswers3 = state.pronounsAnswers3;"""
    load_new = """    if (state.pronounsAnswers3) window.pronounsAnswers3 = state.pronounsAnswers3;
    if (state.verbsAnswersBook1) window.verbsAnswersBook1 = state.verbsAnswersBook1;
    if (state.verbsAnswersBook2) window.verbsAnswersBook2 = state.verbsAnswersBook2;
    if (state.verbsAnswersBook3) window.verbsAnswersBook3 = state.verbsAnswersBook3;"""
    code = code.replace(load_old, load_new)

    # 2. Update save state (around line 4310)
    save_old = """    if (window.pronounsAnswers3) state.pronounsAnswers3 = window.pronounsAnswers3;"""
    save_new = """    if (window.pronounsAnswers3) state.pronounsAnswers3 = window.pronounsAnswers3;
    if (window.verbsAnswersBook1) state.verbsAnswersBook1 = window.verbsAnswersBook1;
    if (window.verbsAnswersBook2) state.verbsAnswersBook2 = window.verbsAnswersBook2;
    if (window.verbsAnswersBook3) state.verbsAnswersBook3 = window.verbsAnswersBook3;"""
    code = code.replace(save_old, save_new)

    # 3. Update init state in renderVerbsDetail
    init_old = """    if (!window.verbsAnswers1) window.verbsAnswers1 = new Array(verbsPractice1Data.length).fill(null);"""
    init_new = """    if (!window.verbsAnswersBook1) window.verbsAnswersBook1 = new Array(verbsPracticeBook1.length).fill('');
    if (!window.verbsAnswersBook2) window.verbsAnswersBook2 = new Array(verbsPracticeBook2.length).fill('');
    if (!window.verbsAnswersBook3) window.verbsAnswersBook3 = new Array(verbsPracticeBook3.length).fill('');
    if (!window.verbsAnswers1) window.verbsAnswers1 = new Array(verbsPractice1Data.length).fill(null);"""
    code = code.replace(init_old, init_new)

    with open('script.js', 'w') as f:
        f.write(code)

update_state()
print("Success state update")
