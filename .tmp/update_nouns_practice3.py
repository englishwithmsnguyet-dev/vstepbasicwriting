import re

with open('script.js', 'r') as f:
    code = f.read()

# 1. Replace nounsPractice3Data
new_nounsPractice3Data = r"""const nounsPractice3Data = [
    { q: "một khóa học trực tuyến miễn phí", a: ["a free online course"] },
    { q: "những cơ hội nghề nghiệp tốt hơn", a: ["better career opportunities"] },
    { q: "một kế hoạch học tập rõ ràng", a: ["a clear study plan", "a clear learning plan"] },
    { q: "một quyết định quan trọng", a: ["an important decision"] },
    { q: "những phương pháp giảng dạy hiện đại", a: ["modern teaching methods"] },
    { q: "một hệ thống giao thông công cộng", a: ["a public transportation system"] },
    { q: "các nguồn năng lượng tái tạo", a: ["renewable energy sources"] },
    { q: "một vấn đề xã hội nghiêm trọng", a: ["a serious social problem"] },
    { q: "những dịch vụ chăm sóc sức khỏe", a: ["healthcare services"] },
    { q: "một chương trình trao đổi sinh viên", a: ["a student exchange program"] },
    { q: "các thành viên câu lạc bộ", a: ["club members", "the club members"] },
    { q: "những lợi ích của việc tập thể dục thường xuyên", a: ["the benefits of regular exercise", "benefits of regular exercise"] },
    { q: "một thói quen học tập tốt", a: ["a good study habit"] },
    { q: "các phương tiện giao thông công cộng", a: ["public transportation", "means of public transportation"] },
    { q: "một mục tiêu nghề nghiệp dài hạn", a: ["a long-term career goal"] },
    { q: "những hoạt động xây dựng đội nhóm", a: ["team-building activities"] },
    { q: "chất lượng giáo dục đại học", a: ["the quality of higher education", "higher education quality"] },
    { q: "một cơ hội học tập quý giá", a: ["a valuable learning opportunity", "a valuable study opportunity"] },
    { q: "những giải pháp cho biến đổi khí hậu", a: ["solutions for climate change", "solutions to climate change"] },
    { q: "các hoạt động ngoại khóa bổ ích", a: ["beneficial extracurricular activities"] }
];"""

# Replace the existing nounsPractice3Data block
start_data = code.find('const nounsPractice3Data = [')
# Find the next const or function
end_data = code.find('window.renderNounsDetail = function', start_data)

if start_data != -1 and end_data != -1:
    # Need to keep the spaces and comments before window.renderNounsDetail
    # Let's find the closing bracket of nounsPractice3Data
    end_bracket = code.find('];', start_data) + 2
    code = code[:start_data] + new_nounsPractice3Data + code[end_bracket:]

# 2. Add vocabulary hint to BÀI 3 HTML
vocab_html = r"""
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                        <h3 style="margin-top: 0; color: #475569; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            GỢI Ý TỪ VỰNG CỐT LÕI (BÀI 3)
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px 24px; font-size: 0.95rem; color: #334155;">
                            <div>• <b>course</b> (n): khóa học</div>
                            <div>• <b>online</b> (adj): trực tuyến</div>
                            <div>• <b>free</b> (adj): miễn phí</div>
                            <div>• <b>opportunity</b> (n): cơ hội</div>
                            <div>• <b>career</b> (n): nghề nghiệp</div>
                            <div>• <b>plan</b> (n): kế hoạch</div>
                            <div>• <b>clear</b> (adj): rõ ràng</div>
                            <div>• <b>activity</b> (n): hoạt động</div>
                            <div>• <b>extracurricular</b> (adj): ngoại khóa</div>
                            <div>• <b>beneficial</b> (adj): bổ ích</div>
                            <div>• <b>decision</b> (n): quyết định</div>
                            <div>• <b>important</b> (adj): quan trọng</div>
                            <div>• <b>method</b> (n): phương pháp</div>
                            <div>• <b>teaching</b> (n): việc giảng dạy</div>
                            <div>• <b>modern</b> (adj): hiện đại</div>
                            <div>• <b>system</b> (n): hệ thống</div>
                            <div>• <b>public</b> (adj): công cộng</div>
                            <div>• <b>transportation</b> (n): giao thông công cộng</div>
                            <div>• <b>renewable</b> (adj): tái tạo</div>
                            <div>• <b>energy</b> (n): năng lượng</div>
                            <div>• <b>source</b> (n): nguồn</div>
                            <div>• <b>problem</b> (n): vấn đề</div>
                            <div>• <b>social</b> (adj): xã hội</div>
                            <div>• <b>serious</b> (adj): nghiêm trọng</div>
                            <div>• <b>service</b> (n): dịch vụ</div>
                            <div>• <b>healthcare</b> (n): chăm sóc sức khỏe</div>
                            <div>• <b>program</b> (n): chương trình</div>
                            <div>• <b>exchange</b> (n): trao đổi</div>
                            <div>• <b>student</b> (n): sinh viên</div>
                            <div>• <b>member</b> (n): thành viên</div>
                            <div>• <b>club</b> (n): câu lạc bộ</div>
                            <div>• <b>benefit</b> (n): lợi ích</div>
                            <div>• <b>exercise</b> (n): việc tập thể dục</div>
                            <div>• <b>habit</b> (n): thói quen</div>
                            <div>• <b>goal</b> (n): mục tiêu</div>
                            <div>• <b>long-term</b> (adj): dài hạn</div>
                            <div>• <b>team-building</b> (adj): xây dựng đội nhóm</div>
                            <div>• <b>quality</b> (n): chất lượng</div>
                            <div>• <b>higher education</b> (n): giáo dục đại học</div>
                            <div>• <b>valuable</b> (adj): quý giá</div>
                            <div>• <b>solution</b> (n): giải pháp</div>
                            <div>• <b>climate change</b> (n): biến đổi khí hậu</div>
                        </div>
                    </div>
"""

old_html_marker = r"""<h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 3: DỊCH CỤM DANH TỪ</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Hãy dịch các cụm danh từ sau sang tiếng Anh.</p>"""

new_html_marker = r"""<h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 3: DỊCH CỤM DANH TỪ</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Dịch các cụm danh từ sau từ tiếng Việt sang tiếng Anh. Các cụm danh từ trong bài được xây dựng theo 8 cách thành lập cụm danh từ thường gặp. Vui lòng sử dụng đúng a/an/the, dạng số ít/nhiều và trật tự từ.</p>""" + vocab_html

code = code.replace(old_html_marker, new_html_marker)

with open('script.js', 'w') as f:
    f.write(code)

print("Updated Nouns Practice 3 data and UI.")
