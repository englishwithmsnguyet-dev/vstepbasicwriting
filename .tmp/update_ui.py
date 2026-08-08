import re

with open('script.js', 'r') as f:
    code = f.read()

# Define the new HTML for renderSingleStructure
new_html = r"""window.renderSingleStructure = function(idx) {
    const s = structuresData[idx];
    const colors = ['#3b82f6', '#f59e0b', '#ef4444', '#a855f7', '#10b981', '#ec4899'];
    const color = colors[idx % colors.length];

    let html = `
        <div style="margin-bottom: 32px; display: flex; justify-content: space-between; align-items: center;">
            <button class="btn-primary" style="padding: 10px 24px; background: white; color: var(--text-main); border: 2px solid #e2e8f0; border-radius: 30px; font-weight: bold; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" onclick="renderStructuresDetail()" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)'; this.style.transform='translateX(-4px)';" onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--text-main)'; this.style.transform='translateX(0)';">
                &larr; Quay lại danh sách
            </button>
        </div>

        <div style="background: white; border-top: 0; border-radius: 32px; padding: 56px 40px; color: var(--text-main); text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.05); margin-bottom: 48px; position: relative; overflow: hidden; border: 1px solid rgba(0,0,0,0.03);">
            <!-- Decorative Background blob -->
            <div style="position: absolute; top: -100px; left: -100px; width: 300px; height: 300px; background: radial-gradient(circle, ${color}30 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -100px; right: -100px; width: 300px; height: 300px; background: radial-gradient(circle, ${color}20 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
            
            <div style="display: inline-block; padding: 6px 16px; background: ${color}15; color: ${color}; font-weight: 800; border-radius: 20px; font-size: 1.1rem; letter-spacing: 1px; margin-bottom: 24px; border: 1px solid ${color}40;">CẤU TRÚC ${idx + 1}</div>
            
            <div style="font-size: 5rem; font-weight: 900; font-family: 'Inter', system-ui, sans-serif; letter-spacing: 6px; margin-bottom: 32px; background: #f8fafc; padding: 24px 72px; border-radius: 100px; display: inline-block; box-shadow: 0 10px 25px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,1); border: 2px solid #e2e8f0; position: relative; z-index: 1;">${s.formula}</div>
            
            <p style="font-size: 1.35rem; line-height: 1.8; max-width: 750px; margin: 0 auto; color: #475569; font-weight: 500; margin-bottom: 40px;">${s.desc}</p>
            
            ${s.note ? `<div style="background: ${color}10; color: #334155; font-size: 1.15rem; line-height: 1.8; padding: 32px 40px; border-radius: 24px; text-align: left; max-width: 800px; margin: 0 auto; border: 2px solid ${color}30; box-shadow: 0 10px 30px rgba(0,0,0,0.02); position: relative;">
                ${s.note.replace('💡 <strong>LƯU Ý:</strong>', `<div style="color: ${color}; font-size: 1.25rem; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> LƯU Ý</div><div style="opacity: 0.95;">`).replace('💡 <strong>LƯU Ý QUAN TRỌNG:</strong>', `<div style="color: ${color}; font-size: 1.25rem; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> LƯU Ý QUAN TRỌNG</div><div style="opacity: 0.95;">`)}</div>
            </div>` : ''}
        </div>

        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 32px; gap: 16px;">
            <div style="height: 2px; background: #e2e8f0; flex: 1;"></div>
            <h2 style="font-size: 1.8rem; color: #1e293b; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; margin: 0;">📚 VÍ DỤ PHÂN TÍCH</h2>
            <div style="height: 2px; background: #e2e8f0; flex: 1;"></div>
        </div>
        <p style="text-align: center; color: var(--text-muted); font-size: 1.1rem; margin-top: -16px; margin-bottom: 32px;">(Nhấn vào từng ô để xem phân tích chi tiết)</p>

        <div style="display: flex; flex-direction: column; gap: 20px; max-width: 900px; margin: 0 auto;">
    `;"""

# Find the end of renderSingleStructure function
start_pattern = r'window\.renderSingleStructure = function\(idx\) \{'
end_pattern = r'        </div>\n    `;\n\n    s\.examples\.forEach\('

def replace_func(match):
    return new_html + "\n\n    s.examples.forEach("

code = re.sub(start_pattern + r'[\s\S]*?' + end_pattern, replace_func, code)

with open('script.js', 'w') as f:
    f.write(code)

print("Updated renderSingleStructure UI")
