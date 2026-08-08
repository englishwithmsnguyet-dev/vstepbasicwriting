import re

def fix_tabs():
    with open('script.js', 'r') as f:
        code = f.read()

    # Find the renderVerbsDetail tabs Html
    v_start = code.find("window.renderVerbsDetail = function")
    tabs_start = code.find("    const tabsHtml = `", v_start)
    tabs_end = code.find("    `;", tabs_start)
    
    new_v_tabs = """    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderVerbsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderVerbsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderVerbsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;"""
    
    code = code[:tabs_start] + new_v_tabs + code[tabs_end+6:]
    
    # Now fix the if/else logic
    old_else = "    } else {\n        // PRACTICE"
    new_else = "    } else if (activeTab === 'practice_book' || activeTab === 'practice_extra') {\n        // PRACTICE"
    code = code.replace(old_else, new_else)
    
    # We also need to split the practice contentHtml logic again.
    # Currently it sets `contentHtml = ...` with BOTH book and extra inside it.
    
    content_start = code.find("        contentHtml = `", tabs_end)
    content_end = code.find("            </div>\n        `;", content_start) + len("            </div>\n        `;")
    
    # Wait, the content is a huge string block! Let's just use Python's replace on the exact substring.
    
    with open('script.js', 'w') as f:
        f.write(code)

fix_tabs()
