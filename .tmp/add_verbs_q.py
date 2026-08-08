import re
import json

def add_questions():
    with open('script.js', 'r') as f:
        code = f.read()

    old_data = """const verbsPractice1Data = [
    {
        q: "The group of students _____ waiting outside the classroom.",
        options: ["is", "are", "have", "were"],
        answer: 0,
        exp: "Chủ ngữ chính là 'The group' (số ít) nên động từ to-be phải là 'is'."
    },
    {
        q: "I usually _____ coffee in the morning, but today I am drinking tea.",
        options: ["drank", "drunk", "drink", "drinks"],
        answer: 2,
        exp: "Dấu hiệu 'usually' chỉ thói quen hiện tại. Chủ ngữ 'I' nên động từ 'drink' giữ nguyên."
    },
    {
        q: "Last night, the manager _____ an email to all employees.",
        options: ["send", "sent", "sends", "has sent"],
        answer: 1,
        exp: "Dấu hiệu 'Last night' chỉ sự việc đã kết thúc trong quá khứ. Động từ chia ở Quá khứ đơn (sent)."
    },
    {
        q: "Information about the new courses _____ available on our website.",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        exp: "'Information' là danh từ không đếm được, luôn đóng vai trò là chủ ngữ số ít, do đó dùng 'is'."
    },
    {
        q: "We _____ in this city since 2015.",
        options: ["live", "lived", "have lived", "will live"],
        answer: 2,
        exp: "Dấu hiệu 'since 2015' chỉ thì Hiện tại hoàn thành (have lived)."
    }
];"""

    new_data = """const verbsPractice1Data = [
    {
        q: "The group of students _____ waiting outside the classroom.",
        options: ["is", "are", "have", "were"],
        answer: 0,
        exp: "Chủ ngữ chính là 'The group' (số ít) nên động từ to-be phải là 'is'."
    },
    {
        q: "I usually _____ coffee in the morning, but today I am drinking tea.",
        options: ["drank", "drunk", "drink", "drinks"],
        answer: 2,
        exp: "Dấu hiệu 'usually' chỉ thói quen hiện tại. Chủ ngữ 'I' nên động từ 'drink' giữ nguyên."
    },
    {
        q: "Last night, the manager _____ an email to all employees.",
        options: ["send", "sent", "sends", "has sent"],
        answer: 1,
        exp: "Dấu hiệu 'Last night' chỉ sự việc đã kết thúc trong quá khứ. Động từ chia ở Quá khứ đơn (sent)."
    },
    {
        q: "Information about the new courses _____ available on our website.",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        exp: "'Information' là danh từ không đếm được, luôn đóng vai trò là chủ ngữ số ít, do đó dùng 'is'."
    },
    {
        q: "We _____ in this city since 2015.",
        options: ["live", "lived", "have lived", "will live"],
        answer: 2,
        exp: "Dấu hiệu 'since 2015' chỉ thì Hiện tại hoàn thành (have lived)."
    },
    {
        q: "Neither the teacher nor the students _____ aware of the new policy.",
        options: ["is", "are", "has", "have"],
        answer: 1,
        exp: "Cấu trúc 'Neither N1 nor N2' thì động từ chia theo N2. Ở đây N2 là 'the students' (số nhiều) nên dùng 'are'."
    },
    {
        q: "A number of applicants _____ already been interviewed for the job.",
        options: ["has", "have", "is", "are"],
        answer: 1,
        exp: "Cấu trúc 'A number of + danh từ số nhiều' đi với động từ số nhiều. Câu ở thì hoàn thành nên dùng 'have'."
    },
    {
        q: "The number of employees in this company _____ increasing every year.",
        options: ["is", "are", "have", "has"],
        answer: 0,
        exp: "Cấu trúc 'The number of + danh từ số nhiều' đi với động từ số ít. Dấu hiệu tiếp diễn 'increasing' cần to-be nên dùng 'is'."
    },
    {
        q: "Physics _____ my favorite subject when I was in high school.",
        options: ["are", "were", "is", "was"],
        answer: 3,
        exp: "'Physics' (môn Vật lý) là danh từ không đếm được (số ít), hơn nữa ngữ cảnh trong quá khứ 'when I was...' nên dùng 'was'."
    },
    {
        q: "Everyone in the office _____ very hard to meet the deadlines every day.",
        options: ["working", "work", "works", "have worked"],
        answer: 2,
        exp: "Đại từ bất định 'Everyone' luôn đi với động từ chia số ít (works)."
    }
];"""

    if old_data in code:
        code = code.replace(old_data, new_data)
        with open('script.js', 'w') as f:
            f.write(code)
        print("Success")
    else:
        print("Could not find the old data block exactly.")

add_questions()
