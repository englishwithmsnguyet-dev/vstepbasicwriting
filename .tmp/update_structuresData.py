import re

with open('script.js', 'r') as f:
    code = f.read()

# I will replace the structuresData entirely.

new_structuresData = r"""const structuresData = [
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ef4444;">O</span>',
        name: 'Dạng 01: S + V + O',
        desc: 'Cấu trúc cơ bản nhất của câu chủ động. Trong đó, Chủ ngữ (S) thực hiện một hành động tác động trực tiếp lên một đối tượng là Tân ngữ (O).',
        note: '💡 <strong>LƯU Ý:</strong> <strong style="color: #f59e0b;">Động từ (V)</strong> trong cấu trúc này bắt buộc phải là <strong>Ngoại động từ (Transitive Verb)</strong>. Ngoại động từ đòi hỏi phải có đối tượng tiếp nhận hành động đi kèm. Nếu thiếu <strong style="color: #ef4444;">Tân ngữ (O)</strong>, câu sẽ bị sai ngữ pháp và không trọn vẹn ý nghĩa (Ví dụ: Bạn không thể chỉ nói "She loves...").',
        examples: [
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">loves</span> <span style="color: #ef4444;">music</span>.', vi: 'Cô ấy yêu âm nhạc.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">eat</span> <span style="color: #ef4444;">pizza</span>.', vi: 'Họ ăn bánh pizza.' },
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">drinks</span> <span style="color: #ef4444;">coffee</span>.', vi: 'Anh ấy uống cà phê.' },
            { en: '<span style="color: #3b82f6;">My friends</span> <span style="color: #f59e0b;">visit</span> <span style="color: #ef4444;">me</span>.', vi: 'Bạn bè của tôi đến thăm tôi.' },
            { en: '<span style="color: #3b82f6;">The cat</span> <span style="color: #f59e0b;">chased</span> <span style="color: #ef4444;">a mouse</span>.', vi: 'Con mèo đã đuổi theo một con chuột.' },
            { en: '<span style="color: #3b82f6;">We</span> <span style="color: #f59e0b;">bought</span> <span style="color: #ef4444;">a new car</span>.', vi: 'Chúng tôi đã mua một chiếc xe ô tô mới.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #a855f7;">C</span>',
        name: 'Dạng 02: S + V + C',
        desc: 'Cấu trúc miêu tả tính chất, trạng thái, hoặc định danh lại cho Chủ ngữ. Bổ ngữ (C) đóng vai trò cung cấp thông tin chi tiết cho Chủ ngữ.',
        note: '💡 <strong>LƯU Ý QUAN TRỌNG:</strong> <strong style="color: #f59e0b;">Động từ (V)</strong> ở đây là <strong>ĐỘNG TỪ LIÊN KẾT (Linking Verb)</strong> như: is, am, are, look, feel, become, seem... Động từ liên kết <strong>hoàn toàn không diễn tả hành động</strong>, mà đóng vai trò như một "chiếc cầu nối" giữa <strong style="color: #3b82f6;">Chủ ngữ (S)</strong> và phần <strong style="color: #a855f7;">Bổ ngữ (C)</strong>.',
        examples: [
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">is</span> <span style="color: #a855f7;">a doctor</span>.', vi: 'Cô ấy là một bác sĩ.' },
            { en: '<span style="color: #3b82f6;">The weather</span> <span style="color: #f59e0b;">became</span> <span style="color: #a855f7;">cold</span>.', vi: 'Thời tiết trở nên lạnh.' },
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">seems</span> <span style="color: #a855f7;">tired</span>.', vi: 'Anh ấy có vẻ mệt mỏi.' },
            { en: '<span style="color: #3b82f6;">The food</span> <span style="color: #f59e0b;">tastes</span> <span style="color: #a855f7;">delicious</span>.', vi: 'Thức ăn có vị rất ngon.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">are</span> <span style="color: #a855f7;">students</span>.', vi: 'Họ là học sinh.' },
            { en: '<span style="color: #3b82f6;">The music</span> <span style="color: #f59e0b;">sounds</span> <span style="color: #a855f7;">great</span>.', vi: 'Âm nhạc nghe thật tuyệt.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span>',
        name: 'Dạng 03: S + V',
        desc: 'Cấu trúc tối giản nhất trong tiếng Anh. Chỉ cần một Chủ ngữ (S) thực hiện hành động (V) là câu đã diễn đạt trọn vẹn ý nghĩa.',
        note: '💡 <strong>LƯU Ý:</strong> <strong style="color: #f59e0b;">Động từ (V)</strong> trong cấu trúc này bắt buộc phải là <strong>Nội động từ (Intransitive Verb)</strong>. Bản thân nội động từ đã mang ý nghĩa hoàn chỉnh, hành động không tác động lên bất kỳ ai hay sự vật nào khác. Do đó, tuyệt đối không có <strong style="color: #ef4444;">Tân ngữ (O)</strong> theo sau.',
        examples: [
            { en: '<span style="color: #3b82f6;">The baby</span> <span style="color: #f59e0b;">cries</span>.', vi: 'Em bé khóc.' },
            { en: '<span style="color: #3b82f6;">It</span> <span style="color: #f59e0b;">is raining</span>.', vi: 'Trời đang mưa.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">laughed</span>.', vi: 'Họ đã cười.' },
            { en: '<span style="color: #3b82f6;">The sun</span> <span style="color: #f59e0b;">shines</span>.', vi: 'Mặt trời tỏa sáng.' },
            { en: '<span style="color: #3b82f6;">Birds</span> <span style="color: #f59e0b;">fly</span>.', vi: 'Những chú chim bay.' },
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">slept</span>.', vi: 'Anh ấy đã ngủ.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ef4444;">O</span> + <span style="color: #10b981;">Adv</span>',
        name: 'Dạng 04: S + V + O + Adv',
        desc: 'Cấu trúc mở rộng của Dạng 1, cung cấp thêm thông tin về bối cảnh (thời gian, địa điểm, cách thức, lý do...) của hành động.',
        note: '💡 <strong>LƯU Ý:</strong> <strong style="color: #10b981;">Trạng ngữ (Adv)</strong> thường được đặt ở cuối câu để bổ nghĩa cho toàn bộ hành động hoặc cung cấp bối cảnh cụ thể. Việc sử dụng linh hoạt Trạng ngữ giúp câu văn trở nên chi tiết, tự nhiên và mang tính học thuật cao hơn.',
        examples: [
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">sings</span> <span style="color: #ef4444;">a song</span> <span style="color: #10b981;">beautifully</span>.', vi: 'Cô ấy hát một bài hát rất hay.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">played</span> <span style="color: #ef4444;">football</span> <span style="color: #10b981;">in the yard</span>.', vi: 'Họ đã chơi bóng đá trong sân.' },
            { en: '<span style="color: #3b82f6;">I</span> <span style="color: #f59e0b;">met</span> <span style="color: #ef4444;">my friends</span> <span style="color: #10b981;">at the park</span>.', vi: 'Tôi đã gặp bạn bè của mình ở công viên.' },
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">goes</span> <span style="color: #ef4444;">to the gym</span> <span style="color: #10b981;">every day</span>.', vi: 'Anh ấy đi đến phòng tập thể hình mỗi ngày.' },
            { en: '<span style="color: #3b82f6;">My mom</span> <span style="color: #f59e0b;">cooked</span> <span style="color: #ef4444;">dinner</span> <span style="color: #10b981;">yesterday</span>.', vi: 'Mẹ tôi đã nấu bữa tối vào hôm qua.' },
            { en: '<span style="color: #3b82f6;">The students</span> <span style="color: #f59e0b;">read</span> <span style="color: #ef4444;">books</span> <span style="color: #10b981;">quietly</span>.', vi: 'Các học sinh đã đọc sách một cách yên lặng.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ef4444;">O</span> + <span style="color: #a855f7;">C</span>',
        name: 'Dạng 05: S + V + O + C',
        desc: 'Cấu trúc phức hợp thể hiện việc Chủ ngữ thực hiện hành động khiến cho Tân ngữ thay đổi trạng thái, hoặc để đưa ra đánh giá, nhận xét về Tân ngữ đó.',
        note: '💡 <strong>LƯU Ý:</strong> Các <strong style="color: #f59e0b;">Động từ (V)</strong> phổ biến trong cấu trúc này mang ý nghĩa tác động (make, leave, paint) hoặc nhận thức/đánh giá (find, consider, name). <strong style="color: #a855f7;">Bổ ngữ (C)</strong> đứng ngay sau <strong style="color: #ef4444;">Tân ngữ (O)</strong> để miêu tả đặc điểm hoặc kết quả của Tân ngữ đó.',
        examples: [
            { en: '<span style="color: #3b82f6;">The news</span> <span style="color: #f59e0b;">made</span> <span style="color: #ef4444;">me</span> <span style="color: #a855f7;">sad</span>.', vi: 'Tin tức đó đã làm cho tôi buồn.' },
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">painted</span> <span style="color: #ef4444;">her room</span> <span style="color: #a855f7;">blue</span>.', vi: 'Cô ấy đã sơn căn phòng của mình màu xanh.' },
            { en: '<span style="color: #3b82f6;">I</span> <span style="color: #f59e0b;">found</span> <span style="color: #ef4444;">the movie</span> <span style="color: #a855f7;">boring</span>.', vi: 'Tôi thấy bộ phim đó thật nhàm chán.' },
            { en: '<span style="color: #3b82f6;">People</span> <span style="color: #f59e0b;">consider</span> <span style="color: #ef4444;">reading</span> <span style="color: #a855f7;">a good habit</span>.', vi: 'Mọi người coi việc đọc sách là một thói quen tốt.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">named</span> <span style="color: #ef4444;">the baby</span> <span style="color: #a855f7;">John</span>.', vi: 'Họ đã đặt tên cho em bé là John.' },
            { en: '<span style="color: #3b82f6;">The long trip</span> <span style="color: #f59e0b;">made</span> <span style="color: #ef4444;">us</span> <span style="color: #a855f7;">exhausted</span>.', vi: 'Chuyến đi dài đã làm chúng tôi kiệt sức.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ec4899;">O1</span> + <span style="color: #ef4444;">O2</span>',
        name: 'Dạng 06: S + V + O1 + O2',
        desc: 'Cấu trúc mang ý nghĩa "trao chuyển" (cho, tặng, gửi ai cái gì). Đặc trưng bởi việc sử dụng hai Tân ngữ đồng thời để làm rõ đối tượng tiếp nhận.',
        note: '💡 <strong>LƯU Ý:</strong> Cấu trúc này thường đi kèm với các <strong style="color: #f59e0b;">Động từ (V)</strong> như: give, send, tell, buy, offer, show... Trong đó, <strong style="color: #ec4899;">O1 (Tân ngữ gián tiếp)</strong> là người nhận hành động, và <strong style="color: #ef4444;">O2 (Tân ngữ trực tiếp)</strong> là sự vật/sự việc được trao chuyển.',
        examples: [
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">told</span> <span style="color: #ec4899;">me</span> <span style="color: #ef4444;">a story</span>.', vi: 'Anh ấy đã kể cho tôi một câu chuyện.' },
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">gave</span> <span style="color: #ec4899;">me</span> <span style="color: #ef4444;">a gift</span>.', vi: 'Cô ấy đã tặng tôi một món quà.' },
            { en: '<span style="color: #3b82f6;">My mom</span> <span style="color: #f59e0b;">bought</span> <span style="color: #ec4899;">me</span> <span style="color: #ef4444;">a new bag</span>.', vi: 'Mẹ tôi đã mua cho tôi một chiếc túi mới.' },
            { en: '<span style="color: #3b82f6;">The teacher</span> <span style="color: #f59e0b;">showed</span> <span style="color: #ec4899;">us</span> <span style="color: #ef4444;">a video</span>.', vi: 'Giáo viên đã cho chúng tôi xem một đoạn video.' },
            { en: '<span style="color: #3b82f6;">I</span> <span style="color: #f59e0b;">sent</span> <span style="color: #ec4899;">my friend</span> <span style="color: #ef4444;">an email</span>.', vi: 'Tôi đã gửi cho bạn tôi một bức thư điện tử.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">offered</span> <span style="color: #ec4899;">him</span> <span style="color: #ef4444;">a job</span>.', vi: 'Họ đã đề nghị cho anh ấy một công việc.' }
        ]
    }
];"""

start_idx = code.find('const structuresData = [')
end_idx = code.find('const structurePracticeData = [')

if start_idx != -1 and end_idx != -1:
    code = code[:start_idx] + new_structuresData + '\n\n' + code[end_idx:]
    with open('script.js', 'w') as f:
        f.write(code)
    print("Replaced structuresData.")
else:
    print("Could not find boundaries.")
