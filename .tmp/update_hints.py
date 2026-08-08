import re
import json

def update_hints():
    with open('script.js', 'r') as f:
        code = f.read()

    # 1. Update data with hints
    
    new_data = """const verbsPracticeBook1 = [
    { q: "Tôi thường học bài vào buổi tối để chuẩn bị cho bài kiểm tra.", a: ["I usually study in the evening to prepare for the test", "I usually study in the evening to prepare for the exam", "I usually study in the evening to prepare for my test", "I usually study in the evening to prepare for my exam"], hint: "<b>Thì:</b> Hiện tại đơn (Dấu hiệu: thường - usually).<br><b>Từ vựng:</b> học bài (study), chuẩn bị cho (prepare for), bài kiểm tra (test/exam)." },
    { q: "Gia đình tôi đã sống ở thành phố này được hơn 10 năm.", a: ["My family has lived in this city for more than 10 years", "My family have lived in this city for more than 10 years", "My family has lived in this city for over 10 years"], hint: "<b>Thì:</b> Hiện tại hoàn thành (Dấu hiệu: được hơn 10 năm - for more than 10 years).<br><b>Từ vựng:</b> gia đình (family), sống (live), thành phố (city)." },
    { q: "Tuần trước, tôi tham gia một khóa học kỹ năng mềm rất bổ ích.", a: ["Last week, I joined a very useful soft skills course", "Last week, I attended a very useful soft skills course", "Last week I joined a very useful soft skills course", "Last week I attended a very useful soft skills course"], hint: "<b>Thì:</b> Quá khứ đơn (Dấu hiệu: tuần trước - last week).<br><b>Từ vựng:</b> tham gia (join/attend), khóa học (course), kỹ năng mềm (soft skills), bổ ích (useful)." },
    { q: "Bạn tôi sẽ thi tiếng Anh vào tháng sau, vì vậy cậu ấy học rất chăm chỉ mỗi ngày.", a: ["My friend will take an English exam next month, so he studies very hard every day", "My friend will take an English test next month, so he studies very hard every day", "My friend will take an English exam next month so he studies very hard every day", "My friend will take an English test next month so he studies very hard every day"], hint: "<b>Thì:</b> Tương lai đơn (vế trước - vào tháng sau) và Hiện tại đơn (vế sau - mỗi ngày).<br><b>Từ vựng:</b> thi (take an exam/test), chăm chỉ (hard)." },
    { q: "Nhiều học sinh không ngủ đủ giấc vì họ phải làm bài tập về nhà mỗi ngày.", a: ["Many students do not get enough sleep because they have to do homework every day", "Many students don't get enough sleep because they have to do homework every day", "Many students do not get enough sleep because they have to do their homework every day"], hint: "<b>Thì:</b> Hiện tại đơn.<br><b>Từ vựng:</b> học sinh (student), ngủ đủ giấc (get enough sleep), phải làm (have to do), bài tập về nhà (homework)." }
];

const verbsPracticeBook2 = [
    { q: "Viết luận là phần quan trọng trong bài thi viết VSTEP.", a: ["Writing an essay is an important part of the VSTEP writing exam", "Essay writing is an important part of the VSTEP writing exam", "Writing an essay is an important part in the VSTEP writing exam", "Writing an essay is an important part of the VSTEP writing test"], hint: "<b>Thì:</b> Hiện tại đơn (Động từ To-be).<br><b>Từ vựng:</b> viết luận (writing an essay / essay writing), quan trọng (important), phần (part)." },
    { q: "Trung tâm Anh ngữ River là nơi mà tôi đã học khoá học VSTEP vào năm ngoái.", a: ["River English Center is the place where I took a VSTEP course last year", "River English Center is where I took a VSTEP course last year", "The River English Center is the place where I took a VSTEP course last year"], hint: "<b>Thì:</b> Hiện tại đơn (vế trước) và Quá khứ đơn (vế sau - vào năm ngoái).<br><b>Từ vựng:</b> nơi (place/where), khóa học (course), học/tham gia (take)." },
    { q: "Tôi nghĩ viết một lá thư không quá khó.", a: ["I think writing a letter is not too difficult", "I think that writing a letter is not too difficult", "I think writing a letter is not very difficult"], hint: "<b>Thì:</b> Hiện tại đơn (Cả 2 vế).<br><b>Từ vựng:</b> nghĩ (think), lá thư (letter), khó (difficult/hard)." },
    { q: "Chúng tôi đã là bạn thân kể từ cấp 3.", a: ["We have been close friends since high school", "We've been close friends since high school"], hint: "<b>Thì:</b> Hiện tại hoàn thành (Động từ To-be) (Dấu hiệu: kể từ - since).<br><b>Từ vựng:</b> bạn thân (close friends), cấp 3 (high school)." },
    { q: "Tôi sẽ thành công trong kỳ thi VSTEP.", a: ["I will be successful in the VSTEP exam", "I will be successful in the VSTEP test"], hint: "<b>Thì:</b> Tương lai đơn (Động từ To-be).<br><b>Từ vựng:</b> thành công (successful)." }
];

const verbsPracticeBook3 = [
    { q: "Việc đọc sách có thể giúp tôi mở rộng kiến thức của mình.", a: ["Reading books can help me broaden my knowledge", "Reading books can help me expand my knowledge", "Reading can help me broaden my knowledge"], hint: "<b>Động từ khiếm khuyết:</b> có thể (can / could).<br><b>Từ vựng:</b> việc đọc sách (reading books), giúp (help), mở rộng (broaden/expand), kiến thức (knowledge)." },
    { q: "Bạn nên học từ vựng Tiếng Anh mỗi ngày để cải thiện kỹ năng đọc của bạn.", a: ["You should learn English vocabulary every day to improve your reading skill", "You should learn English vocabulary every day to improve your reading skills", "You should study English vocabulary every day to improve your reading skills"], hint: "<b>Động từ khiếm khuyết:</b> nên (should).<br><b>Từ vựng:</b> từ vựng (vocabulary), cải thiện (improve), kỹ năng đọc (reading skill)." },
    { q: "Tôi sẽ nộp bài luận của mình vào ngày mai.", a: ["I will submit my essay tomorrow", "I will hand in my essay tomorrow"], hint: "<b>Động từ khiếm khuyết:</b> sẽ (will).<br><b>Từ vựng:</b> nộp (submit / hand in), bài luận (essay)." },
    { q: "Chúng ta không nên sao chép ý tưởng trên mạng.", a: ["We should not copy ideas from the Internet", "We shouldn't copy ideas from the Internet", "We should not copy ideas on the Internet"], hint: "<b>Động từ khiếm khuyết:</b> không nên (should not / shouldn't).<br><b>Từ vựng:</b> sao chép (copy), ý tưởng (ideas), trên mạng (from the Internet / on the Internet)." },
    { q: "Bạn có thể luyện viết mỗi ngày nếu bạn muốn giỏi kỹ năng viết.", a: ["You can practice writing every day if you want to be good at writing skills", "You can practice writing every day if you want to be good at writing skill", "You can practice writing every day if you want to be good at writing"], hint: "<b>Động từ khiếm khuyết:</b> có thể (can).<br><b>Từ vựng:</b> luyện tập (practice), giỏi (good at)." }
];"""

    start_idx = code.find("const verbsPracticeBook1 = [")
    end_idx = code.find("];", code.find("const verbsPracticeBook3 = [")) + 2
    
    code = code[:start_idx] + new_data + code[end_idx:]

    # 2. Update render templates to include hint toggle
    
    # We need to replace pBook1Html, pBook2Html, pBook3Html template logic.
    def replace_html(book_num):
        old_template = f"""const pBook{book_num}Html = verbsPracticeBook{book_num}.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${{idx + 1}}</div>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${{q.q}}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <input type="text" id="verb_trans{book_num}_${{idx}}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook{book_num}[${{idx}}] = this.value; document.getElementById('verbexp_book{book_num}_${{idx}}').style.display='none'; window.saveProgress(true);" value="${{window.verbsAnswersBook{book_num}[idx] || ''}}">
                    <button onclick="checkVerbsBook({book_num}, ${{idx}})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="verbexp_book{book_num}_${{idx}}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');"""
        
        new_template = f"""const pBook{book_num}Html = verbsPracticeBook{book_num}.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${{idx + 1}}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px; margin-bottom: 8px;">${{q.q}}</p>
                        ${{q.hint ? `<button onclick="const h = document.getElementById('verb_hint_{book_num}_${{idx}}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="verb_hint_{book_num}_${{idx}}" style="display: none; background: #f0f9ff; border-left: 4px solid #38bdf8; padding: 12px; border-radius: 4px; margin-bottom: 16px; font-size: 0.95rem; color: #0c4a6e; line-height: 1.6;">${{q.hint}}</div>` : ''}}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="verb_trans{book_num}_${{idx}}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook{book_num}[${{idx}}] = this.value; document.getElementById('verbexp_book{book_num}_${{idx}}').style.display='none'; window.saveProgress(true);" value="${{window.verbsAnswersBook{book_num}[idx] || ''}}">
                    <button onclick="checkVerbsBook({book_num}, ${{idx}})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp_book{book_num}_${{idx}}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');"""
        return old_template, new_template

    o1, n1 = replace_html(1)
    o2, n2 = replace_html(2)
    o3, n3 = replace_html(3)
    
    # We must format exactly as it is in script.js to replace
    # Wait, formatting in my string above may have whitespace differences. Let's use regex or just partial replacement.
    
    code = code.replace(o1, n1)
    code = code.replace(o2, n2)
    code = code.replace(o3, n3)
    
    with open('script.js', 'w') as f:
        f.write(code)

update_hints()
