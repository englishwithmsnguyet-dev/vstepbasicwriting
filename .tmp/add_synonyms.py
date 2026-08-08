import re

with open('script.js', 'r') as f:
    code = f.read()

new_nounsPractice3Data = r"""const nounsPractice3Data = [
    { q: "một khóa học trực tuyến miễn phí", a: ["a free online course"] },
    { q: "những cơ hội nghề nghiệp tốt hơn", a: ["better career opportunities", "better job opportunities"] },
    { q: "một kế hoạch học tập rõ ràng", a: ["a clear study plan", "a clear learning plan"] },
    { q: "một quyết định quan trọng", a: ["an important decision"] },
    { q: "những phương pháp giảng dạy hiện đại", a: ["modern teaching methods"] },
    { q: "một hệ thống giao thông công cộng", a: ["a public transportation system", "a public transport system"] },
    { q: "các nguồn năng lượng tái tạo", a: ["renewable energy sources"] },
    { q: "một vấn đề xã hội nghiêm trọng", a: ["a serious social problem", "a serious social issue"] },
    { q: "những dịch vụ chăm sóc sức khỏe", a: ["healthcare services", "health care services"] },
    { q: "một chương trình trao đổi sinh viên", a: ["a student exchange program"] },
    { q: "các thành viên câu lạc bộ", a: ["club members", "the club members"] },
    { q: "những lợi ích của việc tập thể dục thường xuyên", a: ["the benefits of regular exercise", "benefits of regular exercise"] },
    { q: "một thói quen học tập tốt", a: ["a good study habit", "a good learning habit"] },
    { q: "các phương tiện giao thông công cộng", a: ["public transportation", "means of public transportation", "public transport"] },
    { q: "một mục tiêu nghề nghiệp dài hạn", a: ["a long-term career goal", "a long-term job goal"] },
    { q: "những hoạt động xây dựng đội nhóm", a: ["team-building activities", "teambuilding activities"] },
    { q: "chất lượng giáo dục đại học", a: ["the quality of higher education", "higher education quality", "quality of higher education"] },
    { q: "một cơ hội học tập quý giá", a: ["a valuable learning opportunity", "a valuable study opportunity"] },
    { q: "những giải pháp cho biến đổi khí hậu", a: ["solutions for climate change", "solutions to climate change"] },
    { q: "các hoạt động ngoại khóa bổ ích", a: ["beneficial extracurricular activities", "useful extracurricular activities"] }
];"""

start_data = code.find('const nounsPractice3Data = [')
end_data = code.find('];', start_data) + 2

if start_data != -1 and end_data != -1:
    code = code[:start_data] + new_nounsPractice3Data + code[end_data:]
    with open('script.js', 'w') as f:
        f.write(code)
    print("Updated Nouns Practice 3 data with additional valid options.")
else:
    print("Could not find nounsPractice3Data.")
