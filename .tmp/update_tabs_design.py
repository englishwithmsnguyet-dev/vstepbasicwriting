import re

def update_design():
    with open('script.js', 'r') as f:
        code = f.read()

    # We need to replace the tabsHtml and the if (activeTab === ...) logic in renderVerbsDetail
    
    start_tabs = """    const tabsHtml = `"""
    end_tabs = """    `;"""
    
    # We must be careful because tabsHtml might be defined in other render functions (like Nouns).
    # Let's target the one inside renderVerbsDetail.
    verbs_start = code.find("window.renderVerbsDetail = function(activeTab = 'theory') {")
    idx_tabs_start = code.find(start_tabs, verbs_start)
    idx_tabs_end = code.find(end_tabs, idx_tabs_start)
    
    new_tabs = """    const tabsHtml = `
        <div class="tabs" style="display: flex; gap: 16px; margin-bottom: 32px; justify-content: center;">
            <button onclick="renderVerbsDetail('theory')" style="
                padding: 12px 40px; 
                font-size: 1.2rem; 
                font-family: 'Georgia', serif; 
                font-weight: 900; 
                border-radius: 9999px; 
                cursor: pointer; 
                transition: all 0.3s ease; 
                display: flex; 
                align-items: center; 
                gap: 8px;
                ${activeTab === 'theory' 
                    ? 'background-color: #8b5cf6; color: white; border: none; box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4); transform: translateY(-2px);' 
                    : 'background-color: white; color: #1e293b; border: 2px solid #e2e8f0;'}
            ">📚 LÝ THUYẾT</button>
            
            <button onclick="renderVerbsDetail('practice')" style="
                padding: 12px 40px; 
                font-size: 1.2rem; 
                font-family: 'Georgia', serif; 
                font-weight: 900; 
                border-radius: 9999px; 
                cursor: pointer; 
                transition: all 0.3s ease; 
                display: flex; 
                align-items: center; 
                gap: 8px;
                ${activeTab === 'practice' 
                    ? 'background-color: #8b5cf6; color: white; border: none; box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4); transform: translateY(-2px);' 
                    : 'background-color: white; color: #1e293b; border: 2px solid #e2e8f0;'}
            ">✏️ BÀI TẬP</button>
        </div>
    `;"""

    code = code[:idx_tabs_start] + new_tabs + code[idx_tabs_end+6:]
    
    # Now fix the if/else logic
    
    old_else = """        if (activeTab === 'practice_book') {"""
    old_else_idx = code.find(old_else, verbs_start)
    
    if old_else_idx != -1:
        # Revert to `} else {`
        # But wait, my code currently has `} else if (activeTab === 'practice_book' || activeTab === 'practice_extra') {`
        # Let's check what I exactly wrote in v59.
        pass

    with open('script.js', 'w') as f:
        f.write(code)

update_design()
