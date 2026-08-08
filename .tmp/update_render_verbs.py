import re

def update_render():
    with open('script.js', 'r') as f:
        code = f.read()

    start_idx = code.find("        // PRACTICE")
    end_idx = code.find("window.submitVerbs1 = function()", start_idx)
    if start_idx == -1 or end_idx == -1:
        print("Could not find practice block")
        return

    new_content = """        // PRACTICE
        // BÀI 1: Dịch (Động từ thường)
        const pBook1Html = verbsPracticeBook1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <input type="text" id="verb_trans1_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook1[${idx}] = this.value; document.getElementById('verbexp_book1_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook1[idx] || ''}">
                    <button onclick="checkVerbsBook(1, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="verbexp_book1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        // BÀI 2: Dịch (To-be)
        const pBook2Html = verbsPracticeBook2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <input type="text" id="verb_trans2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook2[${idx}] = this.value; document.getElementById('verbexp_book2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook2[idx] || ''}">
                    <button onclick="checkVerbsBook(2, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="verbexp_book2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        // BÀI 3: Dịch (Khiếm khuyết)
        const pBook3Html = verbsPracticeBook3.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <input type="text" id="verb_trans3_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook3[${idx}] = this.value; document.getElementById('verbexp_book3_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook3[idx] || ''}">
                    <button onclick="checkVerbsBook(3, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="verbexp_book3_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        // BÀI 4: Trắc nghiệm (cũ là Bài 1)
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

        // BÀI 5: Sửa lỗi sai (cũ là Bài 2)
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

        // BÀI 6: Chia động từ trong đoạn văn (cũ là Bài 3)
        let paraHtml = '';
        verbsPracticeParaData.segments.forEach((seg, idx) => {
            paraHtml += seg.text;
            if (idx < verbsPracticeParaData.answers.length) {
                paraHtml += `<input type="text" id="verb_para_${idx}" class="para-input" placeholder="(${idx + 1})" value="${window.verbsAnswersPara[idx] || ''}" oninput="window.verbsAnswersPara[${idx}] = this.value; document.getElementById('verb_para_explanation').style.display='none'; window.saveProgress(true);" style="width: 120px; padding: 4px 8px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 1.05rem; text-align: center; font-weight: 700; color: var(--primary-color); outline: none; margin: 0 4px; transition: all 0.2s; background: white;">`;
            }
        });

        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                
                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 32px; margin-top: 32px;">
                <h1 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 24px; text-align: center;">📚 BÀI TẬP TRONG SÁCH</h1>

                <!-- BÀI 1 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid var(--primary-color);">
                    <h2 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Động từ thường (Dịch câu)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh. Chú ý cách dùng thì.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbsBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
                    </div>
                </div>

                <!-- BÀI 2 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #f59e0b;">
                    <h2 style="color: #d97706; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Động từ To-be (Dịch câu)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh. Chú ý cách dùng thì.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbsBook2()" style="padding: 12px 32px; background: #f59e0b; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(245,158,11,0.3);">NỘP BÀI 2</button>
                    </div>
                </div>

                <!-- BÀI 3 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #10b981;">
                    <h2 style="color: #059669; margin-bottom: 16px; font-size: 1.4rem;">Bài 3: Động từ khiếm khuyết (Dịch câu)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook3Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbsBook3()" style="padding: 12px 32px; background: #10b981; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">NỘP BÀI 3</button>
                    </div>
                </div>

                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 32px; margin-top: 48px;">
                <h1 style="color: #6366f1; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">🚀 BÀI TẬP LUYỆN THÊM</h1>

                <!-- BÀI 4 (OLD 1) -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #6366f1;">
                    <h2 style="color: #4f46e5; margin-bottom: 16px; font-size: 1.4rem;">Bài 4: Sự hòa hợp Chủ - Vị (Trắc nghiệm)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn dạng động từ đúng nhất để hoàn thành các câu sau.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs4()" style="padding: 12px 32px; background: #6366f1; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">NỘP BÀI 4</button>
                    </div>
                </div>

                <!-- BÀI 5 (OLD 2) -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #ec4899;">
                    <h2 style="color: #db2777; margin-bottom: 16px; font-size: 1.4rem;">Bài 5: Sửa lỗi sai về Thì / Động từ</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Tìm ra lỗi sai trong cách chia động từ (phần bôi đậm) và viết lại dạng đúng.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs5()" style="padding: 12px 32px; background: #ec4899; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(236,72,153,0.3);">NỘP BÀI 5</button>
                    </div>
                </div>

                <!-- BÀI 6 (OLD 3) -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #8b5cf6;">
                    <h2 style="color: #7c3aed; margin-bottom: 16px; font-size: 1.4rem;">Bài 6: Điền từ vào đoạn văn</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chia động từ thích hợp vào các ô trống trong đoạn văn sau (Chú ý chia theo thì và chủ ngữ).</p>
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; font-size: 1.15rem; line-height: 2; color: #334155;">
                        ${paraHtml}
                    </div>
                    <div id="verb_para_explanation" style="display: none; margin-top: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px;">
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs6()" style="padding: 12px 32px; background: #8b5cf6; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(139,92,246,0.3);">NỘP BÀI 6</button>
                    </div>
                </div>
            </div>
        `;
    }

    contentWrapper.innerHTML = tabsHtml + contentHtml;
}

"""

    code = code[:start_idx] + new_content + code[end_idx:]
    
    with open('script.js', 'w') as f:
        f.write(code)

update_render()
print("Success render update")
