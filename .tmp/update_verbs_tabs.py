import re

def update_verbs():
    with open('script.js', 'r') as f:
        code = f.read()

    # Find tabsHtml in renderVerbsDetail
    start_str = "window.renderVerbsDetail = function(activeTab = 'theory') {"
    idx = code.find(start_str)
    
    tabs_start = code.find("    const tabsHtml = `", idx)
    tabs_end = code.find("    `;", tabs_start)
    
    new_tabs = """    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderVerbsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderVerbsDetail('practice')" class="tab-pill ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    
    code = code[:tabs_start] + new_tabs + code[tabs_end+6:]
    
    # Now merge practice back
    # Find `} else if (activeTab === 'practice_book') {`
    # Wait, my last script `update_tabs_logic.py` put: `} else if (activeTab === 'practice_book' || activeTab === 'practice_extra') {` NO, it was:
    # `if (activeTab === 'practice_book') {` and `else if (activeTab === 'practice_extra') {`
    
    old_else = """        if (activeTab === 'practice_book') {"""
    old_else_idx = code.find(old_else, tabs_start)
    
    if old_else_idx != -1:
        # replace the if/else logic with a single `} else {`
        # actually, it's better to just write the structure directly.
        pass

    with open('script.js', 'w') as f:
        f.write(code)

update_verbs()
