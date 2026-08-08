import re

with open('script.js', 'r') as f:
    code = f.read()

# 1. Rename existing nounsPractice3Data to nounsPractice4Data
code = code.replace("const nounsPractice3Data = [", "const nounsPractice4Data = [")

# 2. Insert new nounsPractice3Data
new_p3 = """const nounsPractice3Data = [
    { q: "một môi trường học tập tích cực", a: ["a positive learning environment"] },
    { q: "những lợi ích của việc học trực tuyến", a: ["the benefits of online learning", "the advantages of online learning", "benefits of online learning", "advantages of online learning"] },
    { q: "các kỹ năng mềm quan trọng", a: ["important soft skills"] },
    { q: "những nguyên nhân của ô nhiễm không khí", a: ["the causes of air pollution", "causes of air pollution"] },
    { q: "một bài kiểm tra cuối kỳ", a: ["a final exam"] },
    { q: "một tách cà phê nóng", a: ["a cup of hot coffee", "a glass of hot coffee", "a mug of hot coffee"] },
    { q: "nhiều thông tin quan trọng", a: ["a lot of important information", "lots of important information"] },
    { q: "những học sinh của lớp này", a: ["the students of this class"] },
    { q: "các kỹ năng mềm thiết yếu", a: ["essential soft skills"] },
    { q: "kết nối Internet không ổn định", a: ["an unstable Internet connection"] },
    { q: "những thiết bị công nghệ hiện đại", a: ["modern technological devices", "modern technology devices"] },
    { q: "ngày tốt nghiệp của tôi", a: ["my graduation day"] },
    { q: "sức khoẻ tinh thần của chúng ta", a: ["our mental health"] },
    { q: "những thói quen ăn uống lành mạnh", a: ["healthy eating habits", "healthy diet habits"] },
    { q: "một lối sống lành mạnh", a: ["a healthy lifestyle", "a healthy life style"] },
    { q: "các vấn đề kỹ thuật", a: ["technical issues", "technical problems"] },
    { q: "chất lượng âm thanh kém", a: ["poor sound quality", "bad sound quality"] },
    { q: "một môi trường tốt hơn", a: ["a better environment"] },
    { q: "một khoá học tiếng Anh ngắn hạn", a: ["a short-term English course"] },
    { q: "một mùi khó chịu", a: ["an unpleasant smell", "a bad smell"] }
];

const nounsPractice4Data = ["""
code = code.replace("const nounsPractice4Data = [", new_p3, 1)

# 3. HTML Injection
hints_p3_html = """
                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px; margin-top: 40px;">
                <div style="margin-bottom: 32px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 3: DỊCH CÁC CỤM DANH TỪ (CƠ BẢN)</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Diễn đạt các cụm từ sau đây thành các "cụm danh từ tiếng Anh". Vui lòng sử dụng đúng a/an/the, dạng số ít/nhiều và trật tự từ.</p>
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                        <h3 style="margin-top: 0; margin-bottom: 24px; color: #475569; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            GỢI Ý TỪ VỰNG CỐT LÕI
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px 24px; font-size: 0.95rem; color: #334155; line-height: 1.6;">
                            <div>• <b>positive learning environment</b>: môi trường học tập tích cực</div>
                            <div>• <b>benefits / advantages</b>: lợi ích</div>
                            <div>• <b>soft skills</b>: kỹ năng mềm</div>
                            <div>• <b>causes</b>: nguyên nhân</div>
                            <div>• <b>air pollution</b>: ô nhiễm không khí</div>
                            <div>• <b>final exam</b>: bài kiểm tra cuối kỳ</div>
                            <div>• <b>cup / mug / glass</b>: tách, ly</div>
                            <div>• <b>information</b>: thông tin (không đếm được)</div>
                            <div>• <b>essential</b>: thiết yếu</div>
                            <div>• <b>unstable connection</b>: kết nối không ổn định</div>
                            <div>• <b>technological devices</b>: thiết bị công nghệ</div>
                            <div>• <b>graduation day</b>: ngày tốt nghiệp</div>
                            <div>• <b>mental health</b>: sức khoẻ tinh thần</div>
                            <div>• <b>eating habits</b>: thói quen ăn uống</div>
                            <div>• <b>lifestyle</b>: lối sống</div>
                            <div>• <b>technical issues / problems</b>: vấn đề kỹ thuật</div>
                            <div>• <b>poor sound quality</b>: chất lượng âm thanh kém</div>
                            <div>• <b>short-term course</b>: khoá học ngắn hạn</div>
                            <div>• <b>unpleasant smell</b>: mùi khó chịu</div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        ${nounsPractice3Data.map((q, idx) => `
                            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                                <div style="display: flex; gap: 12px; align-items: flex-start;">
                                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; font-size: 1.1rem;">
                                        ${idx + 1}
                                    </div>
                                    <div style="flex: 1;">
                                        <p style="font-size: 1.1rem; font-weight: 500; margin-bottom: 12px; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                                        <input type="text" id="noun_trans3_${idx}" placeholder="Nhập đáp án tiếng Anh..." value="${window.nounsAnswers3[idx] || ''}" style="width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.nounsAnswers3[${idx}] = this.value; document.getElementById('nountransexp3_${idx}').style.display='none'; window.saveProgress(true);">
                                        <div id="nountransexp3_${idx}" style="display: none; margin-top: 12px; padding: 10px 14px; border-radius: 8px; font-size: 1rem;"></div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="checkNouns3()" style="padding: 10px 24px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra Bài 3</button>
                    </div>
                </div>

                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px; margin-top: 40px;">
                <div style="margin-bottom: 32px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 4: DỊCH CỤM DANH TỪ (NÂNG CAO)</h2>
"""

old_b3_header = r"""<hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px; margin-top: 40px;">
                <div style="margin-bottom: 32px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 3: DỊCH CỤM DANH TỪ</h2>"""

code = code.replace(old_b3_header, hints_p3_html)

# Update BÀI 4 references inside HTML
p4_start = code.find('BÀI 4: DỊCH CỤM DANH TỪ (NÂNG CAO)')
p4_end = code.find('</div>\n            </div>', p4_start)

if p4_start != -1 and p4_end != -1:
    old_p4_html = code[p4_start:p4_end]
    new_p4_html = old_p4_html.replace('nounsPractice3Data', 'nounsPractice4Data')
    new_p4_html = new_p4_html.replace('nounsTransAnswers', 'nounsAnswers4')
    new_p4_html = new_p4_html.replace('noun_trans_', 'noun_trans4_')
    new_p4_html = new_p4_html.replace('nountransexp_', 'nountransexp4_')
    new_p4_html = new_p4_html.replace('checkNounsTranslation()', 'checkNouns4()')
    code = code[:p4_start] + new_p4_html + code[p4_end:]

# Update state variables
init_code_old = "if (!window.nounsTransAnswers) window.nounsTransAnswers = new Array(nounsPractice3Data.length).fill('');"
init_code_new = """    if (!window.nounsAnswers3) window.nounsAnswers3 = new Array(nounsPractice3Data.length).fill('');
    if (!window.nounsAnswers4) window.nounsAnswers4 = new Array(nounsPractice4Data.length).fill('');"""
code = code.replace(init_code_old, init_code_new)

save_old = "if (window.nounsTransAnswers) state.nounsTransAnswers = window.nounsTransAnswers;"
save_new = """if (window.nounsAnswers3) state.nounsAnswers3 = window.nounsAnswers3;
        if (window.nounsAnswers4) state.nounsAnswers4 = window.nounsAnswers4;"""
code = code.replace(save_old, save_new)

load_old = "if (state.nounsTransAnswers) window.nounsTransAnswers = state.nounsTransAnswers;"
load_new = """if (state.nounsAnswers3) window.nounsAnswers3 = state.nounsAnswers3;
        if (state.nounsAnswers4) window.nounsAnswers4 = state.nounsAnswers4;"""
code = code.replace(load_old, load_new)


# Function replacement
func_start = code.find('window.checkNounsTranslation = function() {')
func_end = code.find('}', code.find('window.showExerciseResult(p3Correct, nounsPractice3Data.length, "KẾT QUẢ BÀI 3 (DANH TỪ)");')) + 1

if func_start != -1 and func_end != -1:
    new_checks = """window.checkNouns3 = function() {
    let p3Correct = 0;
    nounsPractice3Data.forEach((q, idx) => {
        const userInput = window.nounsAnswers3[idx];
        const expDiv = document.getElementById(`nountransexp3_${idx}`);
        if (!userInput || !userInput.trim()) {
            expDiv.innerHTML = `<b style="color:#b91c1c;">⚠️ Bạn chưa nhập đáp án</b>`;
            expDiv.style.display = 'block';
            expDiv.style.background = '#fef2f2';
            expDiv.style.border = '1px solid #fecaca';
            return;
        }

        const validAnswers = nounsPractice3Data[idx].a;
        const normalizedInput = userInput.trim().toLowerCase().replace(/\\s+/g, ' ');
        const isMatch = validAnswers.some(ans => normalizedInput === ans.toLowerCase());

        let smartFeedback = '';
        if (!isMatch) {
            smartFeedback = window.getSmartFeedback(normalizedInput, validAnswers[0]);
        }

        if (isMatch) {
            expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>`;
            expDiv.style.background = '#f0fdf4';
            expDiv.style.border = '1px solid #bbf7d0';
            p3Correct++;
        } else {
            expDiv.innerHTML = `<b>❌ CHƯA CHÍNH XÁC.</b> ${smartFeedback} <br><div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">💡 <b>Gợi ý đáp án:</b> ${validAnswers[0]}</div>`;
            expDiv.style.background = '#fef2f2';
            expDiv.style.border = '1px solid #fecaca';
        }
        expDiv.style.display = 'block';
    });
    window.showExerciseResult(p3Correct, nounsPractice3Data.length, "KẾT QUẢ BÀI 3 (DANH TỪ)");
}

window.checkNouns4 = function() {
    let p4Correct = 0;
    nounsPractice4Data.forEach((q, idx) => {
        const userInput = window.nounsAnswers4[idx];
        const expDiv = document.getElementById(`nountransexp4_${idx}`);
        if (!userInput || !userInput.trim()) {
            expDiv.innerHTML = `<b style="color:#b91c1c;">⚠️ Bạn chưa nhập đáp án</b>`;
            expDiv.style.display = 'block';
            expDiv.style.background = '#fef2f2';
            expDiv.style.border = '1px solid #fecaca';
            return;
        }

        const validAnswers = nounsPractice4Data[idx].a;
        const normalizedInput = userInput.trim().toLowerCase().replace(/\\s+/g, ' ');
        const isMatch = validAnswers.some(ans => normalizedInput === ans.toLowerCase());

        let smartFeedback = '';
        if (!isMatch) {
            smartFeedback = window.getSmartFeedback(normalizedInput, validAnswers[0]);
        }

        if (isMatch) {
            expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>` + (nounsPractice4Data[idx].exp ? ` ${nounsPractice4Data[idx].exp}` : '');
            expDiv.style.background = '#f0fdf4';
            expDiv.style.border = '1px solid #bbf7d0';
            p4Correct++;
        } else {
            expDiv.innerHTML = `<b>❌ CHƯA CHÍNH XÁC.</b> ${smartFeedback} <br><div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">💡 <b>Gợi ý đáp án:</b> ${validAnswers[0]}</div>` + (nounsPractice4Data[idx].exp ? `<div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">📝 <b>Giải thích:</b> ${nounsPractice4Data[idx].exp}</div>` : '');
            expDiv.style.background = '#fef2f2';
            expDiv.style.border = '1px solid #fecaca';
        }
        expDiv.style.display = 'block';
    });
    window.showExerciseResult(p4Correct, nounsPractice4Data.length, "KẾT QUẢ BÀI 4 (DANH TỪ)");
}"""
    code = code[:func_start] + new_checks + code[func_end:]


with open('script.js', 'w') as f:
    f.write(code)

print("Script completed")
