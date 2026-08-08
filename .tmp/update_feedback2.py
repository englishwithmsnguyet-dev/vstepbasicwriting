import re

with open('script.js', 'r') as f:
    code = f.read()

new_logic = r"""window.getLevenshtein = function(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
};

window.generateFeedback = function(userStr, expectedAnswers) {
    const userWords = userStr.trim().toLowerCase().split(/\s+/).filter(w => w.length > 0);
    if (userWords.length === 0) return "Bạn chưa nhập câu trả lời!";

    let bestExp = expectedAnswers[0];
    let maxMatch = -1;
    for (let exp of expectedAnswers) {
        let expWords = exp.toLowerCase().split(/\s+/);
        let matches = 0;
        for (let w of userWords) {
            if (expWords.includes(w)) matches++;
        }
        if (matches > maxMatch) {
            maxMatch = matches;
            bestExp = exp;
        }
    }

    const expWords = bestExp.toLowerCase().split(/\s+/);
    
    for (let u of userWords) {
        if (!expWords.includes(u)) {
            for (let e of expWords) {
                if (!userWords.includes(e)) {
                    let dist = window.getLevenshtein(u, e);
                    if ((dist <= 2 && e.length > 3) || (dist === 1 && e.length <= 3)) {
                        return `Bạn viết sai chính tả rồi nè! Từ "<b>${u}</b>" phải viết là "<b>${e}</b>".`;
                    }
                }
            }
        }
    }

    const missing = expWords.filter(e => !userWords.includes(e));
    const extra = userWords.filter(u => !expWords.includes(u));

    if (missing.length === 0 && extra.length === 0) {
        return `Bạn viết sai trật tự từ rồi! Hãy sắp xếp lại nhé.`;
    }

    if (missing.length === 1 && extra.length === 1) {
        return `Có vẻ bạn đã dùng nhầm từ "<b>${extra[0]}</b>". Hãy thử dùng từ "<b>${missing[0]}</b>" nhé!`;
    }

    if (extra.length > 0 && missing.length === 0) {
        return `Bạn bị thừa từ "<b>${extra[0]}</b>" rồi! Hãy bỏ đi nhé.`;
    }

    if (missing.length > 0) {
        let wordType = "từ";
        if (["a", "an", "the"].includes(missing[0])) wordType = "mạo từ";
        return `Bạn thiếu ${wordType} "<b>${missing[0]}</b>" rồi! Hãy bổ sung nhé.`;
    }

    return `Bạn viết sai từ vựng hoặc chưa chính xác! Hãy kiểm tra lại gợi ý từ vựng nhé.`;
};

window.checkNounsTranslation = function(idx) {
    const userInput = window.nounsTransAnswers[idx];
    const expDiv = document.getElementById(`transexp_${idx}`);
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa nhập bản dịch!</b> Vui lòng nhập đáp án của bạn.';
        return;
    }
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = nounsPractice3Data[idx].a;
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
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>` + (nounsPractice3Data[idx].exp ? ` ${nounsPractice3Data[idx].exp}` : '');
    } else {
        const smartFeedback = window.generateFeedback(cleanUser, validAnswers);
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA CHÍNH XÁC.</b> ${smartFeedback} <br><div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">💡 <b>Gợi ý đáp án:</b> ${validAnswers[0]}</div>` + (nounsPractice3Data[idx].exp ? `<div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">📝 <b>Giải thích:</b> ${nounsPractice3Data[idx].exp}</div>` : '');
    }
}
"""

start_idx = code.find('window.checkNounsTranslation = function(idx) {')
end_idx = code.find('window.checkNounsSingleAnswer = function(idx) {', start_idx)

if start_idx != -1 and end_idx != -1:
    code = code[:start_idx] + new_logic + code[end_idx:]
    with open('script.js', 'w') as f:
        f.write(code)
    print("Updated feedback logic in script.js")
else:
    print("Could not find checkNounsTranslation function.")
