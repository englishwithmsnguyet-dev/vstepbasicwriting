import re

with open('script.js', 'r') as f:
    code = f.read()

# Remove Kiểm tra button from Pronouns 1
code = re.sub(
    r'<button onclick="checkPronouns1\(\$\{idx\}\)".*?>Kiểm tra</button>',
    '',
    code
)
# Add submit button at the end of Pronouns 1
pronouns1_submit = r"""
            <div style="text-align: center; margin-top: 24px;">
                <button onclick="window.submitPronouns1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
            </div>
"""
code = re.sub(r'(</div>\s*<!-- BÀI 2 -->)', lambda m: pronouns1_submit + m.group(1), code)

# Remove Kiểm tra button from Pronouns 2
code = re.sub(
    r'<button onclick="checkPronouns2\(\$\{idx\}\)".*?>Kiểm tra</button>',
    '',
    code
)
# Add submit button at the end of Pronouns 2
pronouns2_submit = r"""
            <div style="text-align: center; margin-top: 24px;">
                <button onclick="window.submitPronouns2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 2</button>
            </div>
"""
code = re.sub(r'(</div>\s*<!-- BÀI 3 -->)', lambda m: pronouns2_submit + m.group(1), code)

# Replace Kiểm tra đoạn văn with NỘP BÀI 3
code = re.sub(
    r'<button class="btn-primary" onclick="checkPronounsParagraph\(\)"[^>]+>KIỂM TRA ĐOẠN VĂN</button>',
    r'<button class="btn-primary" onclick="window.submitPronouns3()" style="padding: 16px 40px; font-size: 1.3rem; border-radius: 30px; box-shadow: 0 4px 15px rgba(87,70,227,0.4); border: none; background: var(--primary-color); color: white; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 20px rgba(87,70,227,0.6)\'" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 15px rgba(87,70,227,0.4)\'">NỘP BÀI 3</button>',
    code
)


# Add the new submit functions for Pronouns
new_functions = r"""
window.submitPronouns1 = function() {
    let correctCount = 0;
    let completed = true;
    pronounsPractice1Data.forEach((q, idx) => {
        if (window.pronounsAnswers1[idx] === null) {
            completed = false;
        } else {
            if (window.pronounsAnswers1[idx] === q.a) correctCount++;
        }
        window.checkPronouns1(idx); // update UI
    });
    if (!completed) {
        alert("Vui lòng trả lời hết các câu hỏi trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, pronounsPractice1Data.length, "KẾT QUẢ BÀI 1 (ĐẠI TỪ)");
}

window.submitPronouns2 = function() {
    let correctCount = 0;
    let completed = true;
    pronounsPractice2Data.forEach((q, idx) => {
        const userInput = window.pronounsAnswers2[idx];
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
            if (isCorrect) correctCount++;
        }
        window.checkPronouns2(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, pronounsPractice2Data.length, "KẾT QUẢ BÀI 2 (ĐẠI TỪ)");
}

window.submitPronouns3 = function() {
    const data = pronounsParagraphData;
    let correctCount = 0;
    let completed = true;
    data.answers.forEach((ans, idx) => {
        const userInput = window.pronounsAnswersPara[idx];
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
    window.checkPronounsParagraph(); // update UI (color and explanation)
    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI 3 (ĐẠI TỪ)");
}
"""

# Insert these functions before checkPronouns1 definition
code = re.sub(r'(window\.checkPronouns1 = function)', lambda m: new_functions + '\n' + m.group(1), code)

with open('script.js', 'w') as f:
    f.write(code)

print("Replaced pronouns")
