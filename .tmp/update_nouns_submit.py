import re
import os

with open('script.js', 'r') as f:
    code = f.read()

# 1. Remove the old big submit button from Nouns practice
old_submit_button = r'<div style="text-align: center; margin-top: 40px; margin-bottom: 40px;">\s*<button class="btn-primary" onclick="submitNounsPractice\(\)"[^>]+>NỘP BÀI VÀ XEM KẾT QUẢ</button>\s*<div id="nouns-final-result".*?</div>\s*</div>'
code = re.sub(old_submit_button, '', code, flags=re.DOTALL)

# 2. Add submit button for Nouns 1
nouns1_submit = r"""
            <div style="text-align: center; margin-top: 24px;">
                <button onclick="window.submitNouns1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
            </div>
"""
code = re.sub(r'(</div>\s*<!-- BÀI 2 -->)', lambda m: nouns1_submit + m.group(1), code)

# 3. Add submit button for Nouns 2
nouns2_submit = r"""
            <div style="text-align: center; margin-top: 24px;">
                <button onclick="window.submitNouns2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 2</button>
            </div>
"""
code = re.sub(r'(</div>\s*<!-- BÀI 3 -->)', lambda m: nouns2_submit + m.group(1), code)

# 4. Add submit button for Nouns 3
nouns3_submit = r"""
            <div style="text-align: center; margin-top: 24px; margin-bottom: 40px;">
                <button onclick="window.submitNouns3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 3</button>
            </div>
"""
code = re.sub(r'(</div>\s*`;\s*contentWrapper\.innerHTML =)', lambda m: nouns3_submit + m.group(1), code)

# 5. Extract new functions
new_functions = r"""
window.showExerciseResult = function(score, total, title) {
    const studentName = localStorage.getItem('studentName') || 'Học viên';
    let resultModal = document.getElementById('exercise-result-modal');
    if (!resultModal) {
        resultModal = document.createElement('div');
        resultModal.id = 'exercise-result-modal';
        resultModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(5px); opacity: 0; transition: opacity 0.3s;';
        document.body.appendChild(resultModal);
    }
    
    const percentage = score / total;
    let message = '';
    let color = '';
    if (percentage >= 0.8) {
        message = '🎉 Xuất sắc! Bạn làm rất tốt!';
        color = '#10b981';
    } else if (percentage >= 0.5) {
        message = '👍 Khá tốt! Hãy cố gắng hơn nhé!';
        color = '#f59e0b';
    } else {
        message = '💪 Cố lên! Bạn cần ôn tập lại kỹ hơn.';
        color = '#ef4444';
    }

    resultModal.innerHTML = `
        <div style="background: white; padding: 32px; border-radius: 20px; width: 90%; max-width: 450px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transform: scale(0.9); transition: transform 0.3s; border-top: 8px solid ${color};">
            <h2 style="color: var(--primary-color); margin-bottom: 8px; font-size: 1.8rem;">${title}</h2>
            <div style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 24px; font-weight: 500;">
                🎓 Học viên: <span style="color: var(--primary-color);">${studentName}</span>
            </div>
            
            <div style="font-size: 3rem; font-weight: 800; color: ${color}; margin-bottom: 8px;">
                ${score} <span style="font-size: 1.5rem; color: var(--text-muted);">/ ${total}</span>
            </div>
            <p style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 24px;">${message}</p>
            
            <button onclick="document.getElementById('exercise-result-modal').style.opacity = '0'; setTimeout(() => document.getElementById('exercise-result-modal').style.display = 'none', 300);" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 12px rgba(87,70,227,0.3);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Đóng lại</button>
        </div>
    `;
    
    resultModal.style.display = 'flex';
    setTimeout(() => {
        resultModal.style.opacity = '1';
        resultModal.firstElementChild.style.transform = 'scale(1)';
        if (percentage >= 0.8) {
            try { party.confetti(resultModal.firstElementChild, { count: party.variation.range(50, 80) }); } catch(e) {}
        }
    }, 10);
}

window.submitNouns1 = function() {
    let p1Correct = 0;
    const countableZone = document.getElementById('zone-countable');
    const uncountableZone = document.getElementById('zone-uncountable');
    const pool = document.getElementById('words-pool');
    
    if (pool && pool.querySelectorAll('.drag-word').length > 0) {
        alert("Vui lòng kéo hết các từ vào 2 cột trước khi nộp bài!");
        return;
    }
    
    countableZone.querySelectorAll('.drag-word').forEach(el => {
        if(el.getAttribute('data-type') === 'countable') p1Correct++;
    });
    uncountableZone.querySelectorAll('.drag-word').forEach(el => {
        if(el.getAttribute('data-type') === 'uncountable') p1Correct++;
    });
    window.checkNounsDragDrop();
    window.showExerciseResult(p1Correct, 10, "KẾT QUẢ BÀI 1 (DANH TỪ)");
}

window.submitNouns2 = function() {
    let p2Correct = 0;
    let completed = true;
    nounsPractice2Data.forEach((q, idx) => {
        const ans = window.nounsAnswers[idx];
        if (ans.tf === null || (ans.tf === false && (!ans.correction || ans.correction.trim() === ''))) {
            completed = false;
        } else {
            const correctIdx = nounsPractice2Data[idx].answer;
            const isActuallyCorrect = nounsPractice2Data[idx].options[correctIdx].includes("Giữ nguyên");
            if (isActuallyCorrect && ans.tf === true) {
                p2Correct++;
            } else if (!isActuallyCorrect && ans.tf === false) {
                const userCorrection = ans.correction.trim().toLowerCase();
                const correctStr = nounsPractice2Data[idx].options[correctIdx].toLowerCase();
                const validAnswers = correctStr.split('/').map(s => s.trim());
                if (validAnswers.includes(userCorrection)) {
                    p2Correct++;
                }
            }
        }
        window.checkNounsSingleAnswer(idx);
    });
    if (!completed) {
        alert("Vui lòng trả lời hết các câu hỏi trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(p2Correct, nounsPractice2Data.length, "KẾT QUẢ BÀI 2 (DANH TỪ)");
}

window.submitNouns3 = function() {
    let p3Correct = 0;
    let completed = true;
    nounsPractice3Data.forEach((q, idx) => {
        const userInput = window.nounsTransAnswers[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            const validAnswers = q.a;
            let isCorrect = false;
            for (let ans of validAnswers) {
                if (cleanUser === ans.toLowerCase()) {
                    isCorrect = true;
                    break;
                }
            }
            if (isCorrect) p3Correct++;
        }
        window.checkNounsTranslation(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(p3Correct, nounsPractice3Data.length, "KẾT QUẢ BÀI 3 (DANH TỪ)");
}
"""

# Replace window.submitNounsPractice exactly
start_idx = code.find('window.submitNounsPractice = function() {')
if start_idx != -1:
    end_idx = code.find('window.selectPronouns1Option = function(el, idx, oIdx) {', start_idx)
    if end_idx != -1:
        code = code[:start_idx] + new_functions + '\n' + code[end_idx:]

with open('script.js', 'w') as f:
    f.write(code)

print("Updated Nouns Submit Logic")
