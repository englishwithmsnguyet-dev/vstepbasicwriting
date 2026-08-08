import re

def update_submit():
    with open('script.js', 'r') as f:
        code = f.read()

    # Rename submitVerbs3 -> submitVerbs6
    code = code.replace("window.submitVerbs3 = function()", "window.submitVerbs6 = function()")
    # Update results
    code = code.replace('"KẾT QUẢ BÀI 1 (ĐỘNG TỪ)"', '"KẾT QUẢ BÀI 4 (ĐỘNG TỪ)"')
    code = code.replace('"KẾT QUẢ BÀI 2 (ĐỘNG TỪ)"', '"KẾT QUẢ BÀI 5 (ĐỘNG TỪ)"')
    code = code.replace('"KẾT QUẢ BÀI 3 (ĐỘNG TỪ)"', '"KẾT QUẢ BÀI 6 (ĐỘNG TỪ)"')

    new_logic = """
// ==================== VERBS BOOK LOGIC ====================
window.checkVerbsBook = function(bookId, idx) {
    const dataArray = bookId === 1 ? verbsPracticeBook1 : bookId === 2 ? verbsPracticeBook2 : verbsPracticeBook3;
    const ansArray = bookId === 1 ? window.verbsAnswersBook1 : bookId === 2 ? window.verbsAnswersBook2 : window.verbsAnswersBook3;
    const q = dataArray[idx];
    const val = (ansArray[idx] || "").trim().toLowerCase();
    const expDiv = document.getElementById(`verbexp_book${bookId}_${idx}`);
    
    if (!val) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = "❌ Bạn chưa nhập câu trả lời!";
        return;
    }

    const isCorrect = q.a.some(ans => ans.toLowerCase().trim() === val);
    if (isCorrect) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#f0fdf4';
        expDiv.style.color = '#166534';
        expDiv.style.border = '1px solid #bbf7d0';
        expDiv.innerHTML = "✅ Chính xác!";
    } else {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = `❌ Chưa chính xác. <br><br><b>💡 Gợi ý đáp án đúng:</b><br>- ${q.a.join('<br>- ')}`;
    }
}

window.submitVerbsBook1 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook1.forEach((q, idx) => {
        const val = (window.verbsAnswersBook1[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => ans.toLowerCase().trim() === val)) {
            correctCount++;
        }
        window.checkVerbsBook(1, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook1.length, "KẾT QUẢ BÀI 1 (ĐỘNG TỪ TRONG SÁCH)");
}

window.submitVerbsBook2 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook2.forEach((q, idx) => {
        const val = (window.verbsAnswersBook2[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => ans.toLowerCase().trim() === val)) {
            correctCount++;
        }
        window.checkVerbsBook(2, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook2.length, "KẾT QUẢ BÀI 2 (ĐỘNG TỪ TRONG SÁCH)");
}

window.submitVerbsBook3 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook3.forEach((q, idx) => {
        const val = (window.verbsAnswersBook3[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => ans.toLowerCase().trim() === val)) {
            correctCount++;
        }
        window.checkVerbsBook(3, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook3.length, "KẾT QUẢ BÀI 3 (ĐỘNG TỪ TRONG SÁCH)");
}

window.submitVerbs4 = function() {"""

    code = code.replace("window.submitVerbs4 = function() {", new_logic)
    
    with open('script.js', 'w') as f:
        f.write(code)

update_submit()
print("Success logic update")
