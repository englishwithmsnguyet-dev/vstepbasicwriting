import re

with open('script.js', 'r') as f:
    code = f.read()

# Define the new HTML for examples loop
new_examples_html = r"""    s.examples.forEach((exObj, exIdx) => {
        html += `
            <div class="example-reveal-card" data-state="0" style="background: white; border: 2px solid #e2e8f0; border-radius: 20px; padding: 24px 32px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.02);" onmouseover="if(this.dataset.state === '0') { this.style.borderColor='${color}'; this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.05)'; }" onmouseout="if(this.dataset.state === '0') { this.style.borderColor='#e2e8f0'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'; }" onclick="if(this.dataset.state === '0') { this.dataset.state = '1'; this.querySelector('.ex-state-0').style.display = 'none'; this.querySelector('.ex-state-1').style.display = 'block'; this.style.borderColor = '${color}'; this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'; } else if(this.dataset.state === '1') { this.dataset.state = '2'; this.querySelector('.ex-hint').style.display = 'none'; this.querySelector('.ex-vi').style.display = 'block'; this.style.cursor = 'default'; }">
                <!-- Hint State 0 -->
                <div class="ex-state-0" style="font-size: 1.25rem; color: #64748b; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 0;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; color: #94a3b8; display: flex; align-items: center; justify-content: center; font-size: 1rem;">${exIdx + 1}</div>
                    <span>Nhấn để xem Ví dụ phân tích số ${exIdx + 1}</span>
                </div>
                
                <!-- Expanded State -->
                <div class="ex-state-1" style="display: none;">
                    <div style="display: flex; gap: 24px; align-items: flex-start;">
                        <div style="background: ${color}20; color: ${color}; width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; font-size: 1.5rem; box-shadow: inset 0 2px 4px rgba(255,255,255,0.5);">${exIdx + 1}</div>
                        <div style="flex: 1; padding-top: 4px;">
                            <div style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); line-height: 1.6; letter-spacing: 0.5px;">${exObj.en}</div>
                            
                            <div class="ex-hint" style="font-size: 1.1rem; color: #94a3b8; margin-top: 16px; font-weight: 500; display: flex; align-items: center; gap: 8px;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                Nhấn thêm lần nữa để xem nghĩa tiếng Việt
                            </div>
                            
                            <div class="ex-vi" style="display: none; font-size: 1.25rem; color: #475569; margin-top: 16px; font-weight: 500; border-left: 4px solid ${color}; padding-left: 20px; background: #f8fafc; padding-top: 16px; padding-bottom: 16px; border-radius: 0 12px 12px 0;">
                                ${exObj.vi}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });"""

# Find the examples block
start_pattern = r'    s\.examples\.forEach\(\(exObj, exIdx\) => \{'
end_pattern = r'    \}\);\n\n    html \+\= `'

def replace_func2(match):
    return new_examples_html + "\n\n    html += `"

code = re.sub(start_pattern + r'[\s\S]*?' + end_pattern, replace_func2, code)

with open('script.js', 'w') as f:
    f.write(code)

print("Updated examples UI")
