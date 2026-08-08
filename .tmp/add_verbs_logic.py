import re

with open('script.js', 'r') as f:
    code = f.read()

verbs_logic = r"""
// ==================== VERBS LOGIC ====================
window.renderVerbsDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('main-content');
    
    // Init global vars if not exist
    if (!window.verbsAnswers1) window.verbsAnswers1 = new Array(verbsPractice1Data.length).fill(null);
    if (!window.verbsAnswers2) window.verbsAnswers2 = new Array(verbsPractice2Data.length).fill('');
    if (!window.verbsAnswersPara) window.verbsAnswersPara = new Array(verbsPracticeParaData.answers.length).fill('');

    const tabsHtml = `
        <div class="tabs" style="display: flex; gap: 8px; margin-bottom: 24px;">
            <button onclick="renderVerbsDetail('theory')" class="btn-tab ${activeTab === 'theory' ? 'active' : ''}">📖 LÝ THUYẾT</button>
            <button onclick="renderVerbsDetail('practice')" class="btn-tab ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;

    let contentHtml = '';
    
    if (activeTab === 'theory') {
        const theoryCards = verbsTheoryData.map((item, idx) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem;">${item.title}</h3>
                <div style="color: var(--text-main); font-size: 1.1rem; line-height: 1.6;">${item.content}</div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    ${theoryCards}
                </div>
            </div>
        `;
    } else {
        // PRACTICE
        // BÀI 1: Trắc nghiệm
        const p1Html = verbsPractice1Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                </div>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; padding-left: 44px;">
                    ${q.options.map((opt, oIdx) => `
                        <label style="display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: ${window.verbsAnswers1[idx] === oIdx ? '#eff6ff' : '#f8fafc'}; border: 2px solid ${window.verbsAnswers1[idx] === oIdx ? 'var(--primary-color)' : '#e2e8f0'}; border-radius: 8px; cursor: pointer; transition: all 0.2s;" onclick="window.selectVerbs1Option(this, ${idx}, ${oIdx})">
                            <input type="radio" name="verb_q1_${idx}" value="${oIdx}" style="display:none;" ${window.verbsAnswers1[idx] === oIdx ? 'checked' : ''}>
                            <div class="radio-custom" style="width: 18px; height: 18px; border-radius: 50%; border: 2px solid #cbd5e1; background: ${window.verbsAnswers1[idx] === oIdx ? 'var(--primary-color)' : 'transparent'};"></div>
                            <span style="font-weight: 500;">${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp1_${idx}" style="display: none; margin-top: 16px; padding: 12px 16px; border-radius: 8px; font-size: 1.05rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 2: Sửa lỗi sai
        const p2Html = verbsPractice2Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-bottom: 12px; margin-top: 4px;">${q.q}</p>
                        <input type="text" id="verb_input2_${idx}" placeholder="Sửa phần bôi đậm thành..." value="${window.verbsAnswers2[idx] || ''}" style="width: 100%; max-width: 400px; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswers2[${idx}] = this.value; document.getElementById('verbexp2_${idx}').style.display='none'; window.saveProgress(true);">
                    </div>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp2_${idx}" style="display: none; margin-top: 16px; padding: 12px 16px; border-radius: 8px; font-size: 1.05rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 3: Chia động từ trong đoạn văn
        let paraHtml = '';
        verbsPracticeParaData.segments.forEach((seg, idx) => {
            paraHtml += seg.text;
            if (idx < verbsPracticeParaData.answers.length) {
                paraHtml += `<input type="text" id="verb_para_${idx}" class="para-input" placeholder="(${idx + 1})" value="${window.verbsAnswersPara[idx] || ''}" oninput="window.verbsAnswersPara[${idx}] = this.value; document.getElementById('verb_para_explanation').style.display='none'; window.saveProgress(true);" style="width: 120px; padding: 4px 8px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 1.05rem; text-align: center; font-weight: 700; color: var(--primary-color); outline: none; margin: 0 4px; transition: all 0.2s; background: white;">`;
            }
        });

        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                <!-- BÀI 1 -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid var(--primary-color);">
                    <h2 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Sự hòa hợp Chủ - Vị</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn dạng động từ đúng nhất để hoàn thành các câu sau.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
                    </div>
                </div>

                <!-- BÀI 2 -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #f59e0b;">
                    <h2 style="color: #d97706; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Sửa lỗi sai về Thì / Động từ</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Tìm ra lỗi sai trong cách chia động từ (phần bôi đậm) và viết lại dạng đúng.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 2</button>
                    </div>
                </div>

                <!-- BÀI 3 -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #10b981;">
                    <h2 style="color: #059669; margin-bottom: 16px; font-size: 1.4rem;">Bài 3: Chia động từ trong đoạn văn</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chia động từ trong ngoặc theo đúng thì để hoàn thành bức thư sau.</p>
                    <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 1.15rem; line-height: 2.2; color: var(--text-main); font-family: 'Georgia', serif;">
                        ${paraHtml}
                    </div>
                    <div id="verb_para_explanation" style="display: none; margin-top: 24px; padding: 20px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <h3 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.2rem;">GIẢI THÍCH ĐÁP ÁN:</h3>
                        <div id="verb_para_exp_list" style="font-size: 1.1rem; color: var(--text-main); line-height: 1.6;"></div>
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button class="btn-primary" onclick="window.submitVerbs3()" style="padding: 16px 40px; font-size: 1.3rem; border-radius: 30px; box-shadow: 0 4px 15px rgba(16,185,129,0.4); border: none; background: #10b981; color: white; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16,185,129,0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16,185,129,0.4)'">NỘP BÀI 3</button>
                    </div>
                </div>
            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="topic-detail-header" style="margin-bottom: 32px;">
            <button class="btn-back" onclick="renderView('chapter2')" style="margin-bottom: 16px; background: none; border: none; color: var(--primary-color); font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.05rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                QUAY LẠI CHƯƠNG 02
            </button>
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 03: ĐỘNG TỪ (VERBS)</h1>
            ${tabsHtml}
        </div>
        ${contentHtml}
    `;
}

window.selectVerbs1Option = function(el, idx, oIdx) {
    window.verbsAnswers1[idx] = oIdx;
    window.saveProgress(true);
    const exp = document.getElementById(`verbexp1_${idx}`);
    if (exp) exp.style.display = 'none';
    const container = el.parentElement;
    const labels = container.querySelectorAll('label');
    labels.forEach((label, lIdx) => {
        const radioCircle = label.querySelector('.radio-custom');
        const radioInput = label.querySelector('input[type="radio"]');
        if (lIdx === oIdx) {
            label.style.background = '#eff6ff';
            label.style.borderColor = 'var(--primary-color)';
            if (radioCircle) radioCircle.style.background = 'var(--primary-color)';
            if (radioInput) radioInput.checked = true;
        } else {
            label.style.background = '#f8fafc';
            label.style.borderColor = '#e2e8f0';
            if (radioCircle) radioCircle.style.background = 'transparent';
            if (radioInput) radioInput.checked = false;
        }
    });
};

window.checkVerbs1 = function(idx) {
    const ans = window.verbsAnswers1[idx];
    const expDiv = document.getElementById(`verbexp1_${idx}`);
    
    const correctIdx = verbsPractice1Data[idx].answer;
    expDiv.style.display = 'block';
    
    if (ans === correctIdx) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${verbsPractice1Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Đáp án đúng là <b>${verbsPractice1Data[idx].options[correctIdx]}</b>. ${verbsPractice1Data[idx].exp}`;
    }
}

window.checkVerbs2 = function(idx) {
    const userInput = window.verbsAnswers2[idx];
    const expDiv = document.getElementById(`verbexp2_${idx}`);
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = verbsPractice2Data[idx].answer;
    let isCorrect = false;
    
    for (let ans of validAnswers) {
        if (cleanUser === ans.toLowerCase()) {
            isCorrect = true;
            break;
        }
    }
    
    expDiv.style.display = 'block';
    if (isCorrect) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${verbsPractice2Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA ĐÚNG.</b> Tham khảo: <b>${validAnswers[0]}</b>. ${verbsPractice2Data[idx].exp}`;
    }
}

window.checkVerbsParagraph = function() {
    const data = verbsPracticeParaData;
    const expDiv = document.getElementById('verb_para_explanation');
    const expList = document.getElementById('verb_para_exp_list');
    
    let html = '';
    let correctCount = 0;
    
    data.answers.forEach((correctAnswer, idx) => {
        const input = document.getElementById(`verb_para_${idx}`);
        if (!input) return;
        
        const val = input.value.trim();
        const isCorrect = val.toLowerCase() === correctAnswer.toLowerCase();
        
        if (isCorrect) {
            input.style.borderColor = '#22c55e';
            input.style.background = '#f0fdf4';
            input.style.color = '#15803d';
            correctCount++;
            html += `<li style="margin-bottom: 8px;"><span style="color:#15803d; font-weight:bold;">Câu ${idx + 1} (Đúng):</span> Đáp án là <b>${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        } else {
            input.style.borderColor = '#ef4444';
            input.style.background = '#fef2f2';
            input.style.color = '#b91c1c';
            html += `<li style="margin-bottom: 8px;"><span style="color:#b91c1c; font-weight:bold;">Câu ${idx + 1} (Sai):</span> Bạn điền "${val || 'trống'}", đáp án đúng là <b style="color:#15803d;">${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        }
    });
    
    const summaryHtml = `<div style="background: ${correctCount === data.answers.length ? '#f0fdf4' : '#fffbeb'}; border-left: 4px solid ${correctCount === data.answers.length ? '#22c55e' : '#f59e0b'}; padding: 12px; margin-bottom: 16px; border-radius: 4px; font-weight: bold; color: ${correctCount === data.answers.length ? '#166534' : '#b45309'}; font-size: 1.1rem;">
        📊 Kết quả: Bạn làm đúng ${correctCount} / ${data.answers.length} câu.
    </div>`;
    
    expList.innerHTML = summaryHtml + '<ol style="padding-left: 20px; margin: 0;">' + html + '</ol>';
    expDiv.style.display = 'block';
}

window.submitVerbs1 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPractice1Data.forEach((q, idx) => {
        if (window.verbsAnswers1[idx] === null) {
            completed = false;
        } else {
            if (window.verbsAnswers1[idx] === q.answer) correctCount++;
        }
        window.checkVerbs1(idx);
    });
    if (!completed) {
        alert("Vui lòng trả lời hết các câu hỏi trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPractice1Data.length, "KẾT QUẢ BÀI 1 (ĐỘNG TỪ)");
}

window.submitVerbs2 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPractice2Data.forEach((q, idx) => {
        const userInput = window.verbsAnswers2[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            const validAnswers = q.answer;
            let isCorrect = false;
            for (let ans of validAnswers) {
                if (cleanUser === ans.toLowerCase()) {
                    isCorrect = true;
                    break;
                }
            }
            if (isCorrect) correctCount++;
        }
        window.checkVerbs2(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPractice2Data.length, "KẾT QUẢ BÀI 2 (ĐỘNG TỪ)");
}

window.submitVerbs3 = function() {
    const data = verbsPracticeParaData;
    let correctCount = 0;
    let completed = true;
    data.answers.forEach((ans, idx) => {
        const userInput = window.verbsAnswersPara[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase();
            if (cleanUser === ans.toLowerCase()) {
                correctCount++;
            }
        }
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các ô trống trước khi nộp bài!");
        return;
    }
    window.checkVerbsParagraph();
    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI 3 (ĐỘNG TỪ)");
}
"""

# Insert before // --- PROGRESS SAVE & LOAD ---
code = re.sub(r'(// --- PROGRESS SAVE & LOAD ---)', lambda m: verbs_logic + '\n' + m.group(1), code)

with open('script.js', 'w') as f:
    f.write(code)

print("Added Verbs Logic")
