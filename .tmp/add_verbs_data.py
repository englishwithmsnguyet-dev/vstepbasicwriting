import re

with open('script.js', 'r') as f:
    code = f.read()

verbs_data = r"""
// --- VERBS DATA ---
const verbsTheoryData = [
    {
        title: "1. Động từ (Verbs) là gì?",
        content: `Động từ là từ chỉ <b>hành động</b> hoặc <b>trạng thái</b> của Chủ ngữ. Trong một câu Tiếng Anh tiêu chuẩn, <b>Động từ là thành phần BẮT BUỘC phải có</b>.<br><br>
        Ví dụ:<br>
        - She <b>works</b> in a bank. (Chỉ hành động)<br>
        - He <b>is</b> a teacher. (Chỉ trạng thái)`
    },
    {
        title: "2. Nội động từ và Ngoại động từ",
        content: `<b>a) Ngoại động từ (Transitive verbs):</b> Là những động từ <b>BẮT BUỘC phải có Tân ngữ</b> đi kèm phía sau để hoàn thiện nghĩa.<br>
        - Ví dụ: <i>buy, make, give, need, love...</i><br>
        - VD: I need <u>a new laptop</u>. (Không thể nói "I need." rồi chấm hết câu).<br><br>
        <b>b) Nội động từ (Intransitive verbs):</b> Là những động từ <b>KHÔNG CẦN Tân ngữ</b> đi kèm.<br>
        - Ví dụ: <i>sleep, arrive, happen, cry...</i><br>
        - VD: The baby is sleeping. (Câu đã hoàn chỉnh, không cần thêm tân ngữ).`
    },
    {
        title: "3. Sự hòa hợp Chủ - Vị (RẤT QUAN TRỌNG)",
        content: `Khi viết câu, động từ luôn luôn phải <b>chia theo đúng Chủ ngữ (số ít hay số nhiều)</b>.<br><br>
        - <b>Chủ ngữ số ít</b> (He, She, It, Danh từ số ít, Danh từ không đếm được): Động từ thêm 's' hoặc 'es' (hiện tại đơn), dùng <i>is/was/has</i>.<br>
        - <b>Chủ ngữ số nhiều</b> (We, You, They, Danh từ số nhiều): Động từ giữ nguyên, dùng <i>are/were/have</i>.<br><br>
        <i>⚠️ Lỗi sai phổ biến:</i> <s>The list of items are...</s> ➡️ Sửa: <b>The list of items <u>is</u></b> (vì Chủ ngữ chính là "The list" - số ít).`
    },
    {
        title: "4. Các thì cơ bản trong VSTEP Writing",
        content: `Bạn không cần dùng thì quá phức tạp. Chỉ cần nắm vững 4 thì sau:<br><br>
        - <b>Hiện tại đơn:</b> Sự thật hiển nhiên, thói quen (usually, often, normally...). VD: The store opens at 8 AM.<br>
        - <b>Quá khứ đơn:</b> Sự việc đã kết thúc trong quá khứ (yesterday, last year, in 2020...). VD: I graduated in 2018.<br>
        - <b>Tương lai đơn:</b> Sự việc sẽ xảy ra (tomorrow, next month). VD: I will call you later.<br>
        - <b>Hiện tại hoàn thành:</b> Sự việc bắt đầu trong QK, kéo dài đến HT (for 5 years, since 2010). VD: I have worked here for 2 years.`
    }
];

const verbsPractice1Data = [
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
];

const verbsPractice2Data = [
    {
        q: "Every student in my class <b>have</b> a different hobby.",
        answer: ["has"],
        exp: "Các từ bắt đầu bằng Every- luôn kết hợp với danh từ số ít và đi với động từ số ít."
    },
    {
        q: "She <b>work</b> for a marketing agency at the moment.",
        answer: ["is working"],
        exp: "Dấu hiệu 'at the moment' yêu cầu dùng thì Hiện tại tiếp diễn."
    },
    {
        q: "They <b>don't went</b> to the meeting yesterday because they were busy.",
        answer: ["didn't go", "did not go"],
        exp: "Trong thì Quá khứ đơn, dạng phủ định phải dùng 'didn't' + V nguyên mẫu."
    },
    {
        q: "The news about the accident <b>were</b> shocking to everyone.",
        answer: ["was"],
        exp: "'News' tuy có chữ 's' nhưng là Danh từ không đếm được (số ít), nên to-be là 'was'."
    },
    {
        q: "I promise I <b>helps</b> you with your homework tonight.",
        answer: ["will help"],
        exp: "Câu hứa hẹn (promise) và việc xảy ra tối nay (tonight) cần dùng thì Tương lai đơn."
    }
];

const verbsPracticeParaData = {
    segments: [
        { text: "Dear Mary,<br><br>I " },
        { text: " (write) this email to tell you some great news. Last month, I " },
        { text: " (apply) for a new job in London, and yesterday they " },
        { text: " (call) me to offer the position! I " },
        { text: " (be) so happy right now. " },
        { text: "<br><br>The company " },
        { text: " (specialize) in software development. Next week, I " },
        { text: " (travel) to London to sign the contract. I " },
        { text: " (already / start) packing my bags. My parents " },
        { text: " (feel) very proud of me." },
        { text: "<br><br>We haven't seen each other for a long time. I hope we " },
        { text: " (meet) up soon when I arrive in London.<br><br>Best wishes,<br>John" }
    ],
    answers: ["am writing", "applied", "called", "am", "specializes", "will travel", "have already started", "feel", "will meet"],
    explanations: [
        "Hành động đang diễn ra lúc nói (viết thư) dùng Hiện tại tiếp diễn.",
        "Dấu hiệu 'Last month' dùng Quá khứ đơn.",
        "Dấu hiệu 'yesterday' dùng Quá khứ đơn.",
        "Dấu hiệu 'right now' kết hợp động từ to-be dùng Hiện tại đơn (am).",
        "Sự thật hiển nhiên về công ty dùng Hiện tại đơn (chia thêm 's' hoặc 'es').",
        "Dấu hiệu 'Next week' dùng Tương lai đơn (hoặc HTTD mang nghĩa tương lai, nhưng TLĐ phổ biến nhất).",
        "Dấu hiệu 'already' dùng Hiện tại hoàn thành.",
        "Chủ ngữ 'My parents' số nhiều, nói về cảm xúc hiện tại dùng Hiện tại đơn (giữ nguyên).",
        "Câu kỳ vọng (I hope) dùng Tương lai đơn."
    ]
};
"""

# Insert before window.openTopic = function
code = re.sub(r'(window\.openTopic = function)', lambda m: verbs_data + '\n' + m.group(1), code)

with open('script.js', 'w') as f:
    f.write(code)

print("Added Verbs Data Successfully")
