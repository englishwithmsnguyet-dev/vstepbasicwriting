// =========================================================================
// ==================== HỆ THỐNG TỔNG ÔN TẬP (FINAL REVIEW) ====================
// =========================================================================

// Dữ liệu 4 bài tập dịch câu tổng hợp 7 chủ điểm (mỗi bài 10 câu)
const finalReviewTests = [
    {
        id: "test1",
        title: "BÀI TẬP TỔNG ÔN TẬP 1",
        subTitle: "Chủ đề: Đời sống thường nhật & Thói quen học tập",
        desc: "Dịch các câu sau sang tiếng Anh, vận dụng chuẩn xác các chủ điểm: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ và Từ nối.",
        questions: [
            {
                q: "Chị gái tôi thường thức dậy sớm vào mỗi buổi sáng và tự nấu bữa sáng cho mình.",
                a: [
                    "My sister usually wakes up early every morning and cooks breakfast for herself.",
                    "My older sister usually wakes up early every morning and cooks breakfast for herself.",
                    "My sister often wakes up early every morning and cooks breakfast for herself.",
                    "My sister usually gets up early every morning and cooks breakfast for herself.",
                    "My sister usually wakes up early in the morning and cooks breakfast for herself."
                ],
                exp: "• <b>Chủ ngữ:</b> My sister (Danh từ/Đại từ ngôi thứ 3 số ít).<br>• <b>Trạng từ tần suất & thời gian:</b> usually, early, every morning.<br>• <b>Đại từ phản thân:</b> herself.<br>• <b>Thì:</b> Hiện tại đơn (wakes up, cooks)."
            },
            {
                q: "Mặc dù bài kiểm tra này rất khó, tất cả các học sinh đều hoàn thành nó một cách xuất sắc.",
                a: [
                    "Although this test is very difficult, all students complete it excellently.",
                    "Although this exam is very difficult, all students complete it excellently.",
                    "Although this test was very difficult, all the students completed it excellently.",
                    "Although this exam was very difficult, all the students completed it excellently.",
                    "Though this test was very difficult, all students completed it excellently."
                ],
                exp: "• <b>Từ nối nhượng bộ:</b> Although (đứng đầu câu có dấu phẩy ngăn cách).<br>• <b>Tính từ:</b> difficult (đi sau to-be).<br>• <b>Trạng từ:</b> excellently.<br>• <b>Đại từ:</b> it (thay cho this test)."
            },
            {
                q: "Chúng tôi đã sống tại thành phố Cần Thơ trong mười năm và chúng tôi rất yêu nơi này.",
                a: [
                    "We have lived in Can Tho city for ten years, and we love this place very much.",
                    "We have lived in Can Tho for ten years, and we love this place very much.",
                    "We have been living in Can Tho city for ten years, and we love this place very much.",
                    "We have lived in Can Tho city for 10 years, and we really love this place.",
                    "We have lived in Can Tho for 10 years, and we love this place very much."
                ],
                exp: "• <b>Thì Hiện tại hoàn thành:</b> have lived (kết hợp với giới từ 'for ten years').<br>• <b>Giới từ nơi chốn:</b> in Can Tho city.<br>• <b>Từ nối FANBOYS:</b> and (nối 2 mệnh đề độc lập có dấu phẩy trước and)."
            },
            {
                q: "Bạn nên học từ vựng một cách cẩn thận, hoặc bạn sẽ quên chúng nhanh chóng.",
                a: [
                    "You should learn vocabulary carefully, or you will forget it quickly.",
                    "You should learn vocabulary carefully, or you will forget them quickly.",
                    "You should study vocabulary carefully, or you will forget it quickly.",
                    "You should learn new words carefully, or you will forget them quickly.",
                    "You should study new words carefully, or you will forget them fast."
                ],
                exp: "• <b>Động từ khiếm khuyết:</b> should learn.<br>• <b>Trạng từ cách thức:</b> carefully, quickly.<br>• <b>Từ nối FANBOYS:</b> or (có dấu phẩy trước or vì nối 2 mệnh đề)."
            },
            {
                q: "Đọc sách trong thư viện giúp tôi nâng cao kiến thức và giữ cho tâm trí thoải mái.",
                a: [
                    "Reading books in the library helps me improve my knowledge and keep my mind relaxed.",
                    "Reading books in the library helps me improve my knowledge and keeps my mind comfortable.",
                    "Reading books in the library helps me enhance my knowledge and keep my mind relaxed.",
                    "Reading books at the library helps me improve my knowledge and keep my mind relaxed."
                ],
                exp: "• <b>Chủ ngữ là V-ing:</b> Reading books (động từ chia số ít: helps).<br>• <b>Cấu trúc:</b> keep + O + adj (keep my mind relaxed)."
            },
            {
                q: "Họ không tham gia cuộc họp ngày hôm qua vì thời tiết rất xấu.",
                a: [
                    "They did not attend the meeting yesterday because the weather was very bad.",
                    "They didn't attend the meeting yesterday because the weather was very bad.",
                    "They didn't join the meeting yesterday because the weather was very bad.",
                    "They did not participate in the meeting yesterday because the weather was very bad."
                ],
                exp: "• <b>Thì Quá khứ đơn:</b> did not attend / was.<br>• <b>Từ nối chỉ nguyên nhân:</b> because (đứng giữa câu không cần dấu phẩy).<br>• <b>Danh từ không đếm được:</b> weather."
            },
            {
                q: "Cô ấy không những thông minh mà còn rất tốt bụng với bạn bè của mình.",
                a: [
                    "She is not only intelligent but also very kind to her friends.",
                    "She is not only smart but also very kind to her friends.",
                    "She is not only intelligent but also very friendly to her friends."
                ],
                exp: "• <b>Liên từ tương quan:</b> not only ... but also ... (nối 2 tính từ tương đương).<br>• <b>Tính từ & giới từ:</b> kind to (tốt bụng với ai)."
            },
            {
                q: "Nếu bạn luyện tập tiếng Anh mỗi ngày, kỹ năng nói của bạn sẽ tiến bộ rõ rệt.",
                a: [
                    "If you practice English every day, your speaking skills will improve significantly.",
                    "If you practise English every day, your speaking skill will improve significantly.",
                    "If you practice English daily, your speaking skills will improve noticeably.",
                    "If you practice English every day, your speaking skills will improve quickly."
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> If + Hiện tại đơn, Tương lai đơn.<br>• <b>Trạng từ:</b> every day / daily, significantly."
            },
            {
                q: "Chiếc máy tính xách tay mới trên bàn làm việc là của anh ấy, không phải của tôi.",
                a: [
                    "The new laptop on the desk is his, not mine.",
                    "The new laptop on the working table is his, not mine.",
                    "The new laptop on the desk belongs to him, not mine.",
                    "The new laptop on the desk is his, not my laptop."
                ],
                exp: "• <b>Đại từ sở hữu:</b> his, mine (thay cho his laptop, my laptop).<br>• <b>Giới từ nơi chốn:</b> on the desk."
            },
            {
                q: "Tóm lại, việc giữ gìn sức khỏe tốt là vô cùng quan trọng đối với mọi người.",
                a: [
                    "In short, maintaining good health is extremely important for everyone.",
                    "In summary, maintaining good health is extremely important for everybody.",
                    "In conclusion, maintaining good health is extremely important for everyone.",
                    "To sum up, keeping good health is extremely important for everyone.",
                    "In short, staying healthy is extremely important for everyone."
                ],
                exp: "• <b>Từ liên kết kết luận:</b> In short, / To sum up, (có dấu phẩy theo sau).<br>• <b>Chủ ngữ Danh động từ:</b> Maintaining good health.<br>• <b>Trạng từ chỉ mức độ:</b> extremely (bổ nghĩa cho tính từ important)."
            }
        ]
    },
    {
        id: "test2",
        title: "BÀI TẬP TỔNG ÔN TẬP 2",
        subTitle: "Chủ đề: Giáo dục, Công việc & Môi trường công sở",
        desc: "Dịch các câu sau sang tiếng Anh, vận dụng chuẩn xác các chủ điểm: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ và Từ nối.",
        questions: [
            {
                q: "Giám đốc của chúng tôi luôn luôn lắng nghe ý kiến của nhân viên một cách kiên nhẫn.",
                a: [
                    "Our manager always listens to employees' opinions patiently.",
                    "Our director always listens to employees' opinions patiently.",
                    "Our manager always listens to the staff's opinions patiently.",
                    "Our boss always listens to employees' opinions patiently."
                ],
                exp: "• <b>Trạng từ tần suất:</b> always (đứng trước động từ thường).<br>• <b>Giới từ đi với động từ:</b> listen to.<br>• <b>Trạng từ cách thức:</b> patiently."
            },
            {
                q: "Khóa học trực tuyến này cung cấp cho sinh viên nhiều thông tin hữu ích về công nghệ.",
                a: [
                    "This online course provides students with a lot of useful information about technology.",
                    "This online course provides students with much useful information about technology.",
                    "This online course gives students a lot of useful information about technology.",
                    "This online course provides students with plenty of useful information about technology."
                ],
                exp: "• <b>Cấu trúc:</b> provide somebody with something.<br>• <b>Danh từ không đếm được:</b> information, technology (dùng a lot of / much, không có 's')."
            },
            {
                q: "Anh ấy đã làm việc chăm chỉ suốt cả tuần; do đó, anh ấy đã vượt qua kỳ thi phỏng vấn.",
                a: [
                    "He worked hard all week; therefore, he passed the interview.",
                    "He worked hard all week. Therefore, he passed the interview exam.",
                    "He worked hard throughout the week; therefore, he passed the interview.",
                    "He worked hard all week, so he passed the interview."
                ],
                exp: "• <b>Từ liên kết chỉ kết quả:</b> therefore (có dấu phẩy sau therefore).<br>• <b>Trạng từ đặc biệt:</b> hard (chăm chỉ - không thêm đuôi -ly)."
            },
            {
                q: "Trước khi nộp bài luận, bạn phải kiểm tra tất cả các lỗi chính tả một cách cẩn thận.",
                a: [
                    "Before submitting the essay, you must check all spelling mistakes carefully.",
                    "Before you submit the essay, you must check all spelling mistakes carefully.",
                    "Before submitting your essay, you have to check all spelling mistakes carefully.",
                    "Before submitting the essay, you must check all spelling errors carefully."
                ],
                exp: "• <b>Mệnh đề trạng ngữ thời gian:</b> Before + V-ing / S + V (đứng đầu câu có dấu phẩy).<br>• <b>Động từ tình thái:</b> must check.<br>• <b>Trạng từ:</b> carefully."
            },
            {
                q: "Hầu hết các sinh viên đều cảm thấy hào hứng với dự án nghiên cứu mới.",
                a: [
                    "Most students feel excited about the new research project.",
                    "Most of the students feel excited about the new research project.",
                    "Most students feel very excited about the new research project."
                ],
                exp: "• <b>Lượng từ:</b> Most students.<br>• <b>Tính từ chỉ cảm xúc:</b> excited (-ed) đi với giới từ 'about'."
            },
            {
                q: "Chúng tôi đã hoàn thành báo cáo này vào tối hôm qua và đã gửi nó cho giáo viên.",
                a: [
                    "We finished this report last night and sent it to the teacher.",
                    "We completed this report yesterday evening and sent it to our teacher.",
                    "We completed this report last night and sent it to the teacher."
                ],
                exp: "• <b>Thì Quá khứ đơn:</b> finished ... and sent (hành động nối tiếp cùng chủ ngữ We).<br>• <b>Giới từ:</b> sent it to..."
            },
            {
                q: "Họ dự định tổ chức một buổi hội thảo chuyên nghiệp tại khách sạn vào thứ Sáu tuần tới.",
                a: [
                    "They plan to organize a professional workshop at the hotel next Friday.",
                    "They intend to hold a professional seminar at the hotel next Friday.",
                    "They plan to hold a professional workshop at the hotel next Friday.",
                    "They are planning to organize a professional workshop at the hotel next Friday."
                ],
                exp: "• <b>Cấu trúc:</b> plan to-V.<br>• <b>Trật tự trạng ngữ:</b> nơi chốn (at the hotel) trước thời gian (next Friday)."
            },
            {
                q: "Làm việc theo nhóm không chỉ cải thiện kỹ năng giao tiếp mà còn tiết kiệm nhiều thời gian.",
                a: [
                    "Working in teams not only improves communication skills but also saves a lot of time.",
                    "Working in groups not only improves communication skills but also saves a lot of time.",
                    "Teamwork not only improves communication skills but also saves a lot of time."
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Working in teams (chia động từ số ít: improves, saves).<br>• <b>Liên từ tương quan:</b> not only ... but also ..."
            },
            {
                q: "Thư viện trường đại học mở cửa từ 7 giờ sáng đến 9 giờ tối vào các ngày trong tuần.",
                a: [
                    "The university library is open from 7 a.m. to 9 p.m. on weekdays.",
                    "The university library opens from 7 a.m. to 9 p.m. on weekdays.",
                    "The school library is open from 7 AM to 9 PM on weekdays.",
                    "The university library is open from 7:00 AM to 9:00 PM on weekdays."
                ],
                exp: "• <b>Giới từ thời gian:</b> from ... to ...<br>• <b>Giới từ chỉ ngày:</b> on weekdays (vào các ngày trong tuần)."
            },
            {
                q: "Hơn nữa, người xin việc cần phải chuẩn bị một bản lý lịch ấn tượng.",
                a: [
                    "Moreover, job applicants need to prepare an impressive CV.",
                    "Furthermore, job applicants need to prepare an impressive resume.",
                    "In addition, applicants need to prepare an impressive resume.",
                    "Moreover, applicants need to prepare an impressive CV."
                ],
                exp: "• <b>Từ liên kết bổ sung ý:</b> Moreover, / Furthermore, (có dấu phẩy sau từ nối).<br>• <b>Mạo từ 'an':</b> đứng trước nguyên âm (an impressive CV)."
            }
        ]
    },
    {
        id: "test3",
        title: "BÀI TẬP TỔNG ÔN TẬP 3",
        subTitle: "Chủ đề: Sức khỏe, Thể thao & Lối sống tích cực",
        desc: "Dịch các câu sau sang tiếng Anh, vận dụng chuẩn xác các chủ điểm: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ và Từ nối.",
        questions: [
            {
                q: "Ăn nhiều rau xanh và uống đủ nước mỗi ngày giúp chúng ta duy trì sức khỏe tốt.",
                a: [
                    "Eating a lot of green vegetables and drinking enough water every day helps us maintain good health.",
                    "Eating plenty of green vegetables and drinking enough water every day helps us stay healthy.",
                    "Eating green vegetables and drinking enough water daily helps us maintain good health.",
                    "Eating lots of green vegetables and drinking enough water every day helps us keep fit."
                ],
                exp: "• <b>Cụm danh động từ làm chủ ngữ:</b> Eating ... and drinking ...<br>• <b>Đại từ tân ngữ:</b> us.<br>• <b>Cụm từ vựng:</b> maintain good health / stay healthy."
            },
            {
                q: "Anh ấy rất giỏi chơi bóng đá, nhưng anh ấy hiếm khi có thời gian rảnh vào cuối tuần.",
                a: [
                    "He is very good at playing football, but he rarely has free time on weekends.",
                    "He is very good at playing soccer, but he seldom has free time on the weekend.",
                    "He is very good at playing football, but he rarely has free time at the weekend."
                ],
                exp: "• <b>Tính từ + Giới từ:</b> good at + V-ing.<br>• <b>Từ nối FANBOYS:</b> but (có dấu phẩy trước but vì nối 2 mệnh đề).<br>• <b>Trạng từ tần suất:</b> rarely / seldom."
            },
            {
                q: "Nếu mọi người không tập thể dục thường xuyên, họ sẽ cảm thấy mệt mỏi và căng thẳng.",
                a: [
                    "If people do not exercise regularly, they will feel tired and stressed.",
                    "If people don't exercise regularly, they will feel tired and stressed.",
                    "If people do not do exercise regularly, they will feel tired and stressed.",
                    "Unless people exercise regularly, they will feel tired and stressed."
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> If + S + don't V, S + will feel + adj.<br>• <b>Tính từ miêu tả trạng thái:</b> tired and stressed."
            },
            {
                q: "Đi bộ nhanh trong công viên vào buổi chiều là một thói quen vô cùng lành mạnh.",
                a: [
                    "Walking briskly in the park in the afternoon is an extremely healthy habit.",
                    "Brisk walking in the park in the afternoon is an extremely healthy habit.",
                    "Walking fast in the park in the afternoon is a very healthy habit."
                ],
                exp: "• <b>Trạng từ cách thức:</b> briskly / fast.<br>• <b>Giới từ thời gian/nơi chốn:</b> in the park, in the afternoon.<br>• <b>Tính từ:</b> healthy habit."
            },
            {
                q: "Bác sĩ khuyên bệnh nhân nên tránh xa thức ăn nhanh và đồ uống có ga.",
                a: [
                    "The doctor advises patients to stay away from fast food and sugary drinks.",
                    "The doctor advised the patient to stay away from fast food and soft drinks.",
                    "The doctor advises the patient to avoid fast food and carbonated drinks.",
                    "The doctor advised patients to avoid fast food and fizzy drinks."
                ],
                exp: "• <b>Cấu trúc:</b> advise somebody to-V.<br>• <b>Danh từ không đếm được:</b> fast food."
            },
            {
                q: "Cô ấy tự rèn luyện yoga tại nhà mỗi sáng để cải thiện sự dẻo dai của cơ thể.",
                a: [
                    "She practices yoga by herself at home every morning to improve her body's flexibility.",
                    "She practices yoga at home every morning to improve her body flexibility.",
                    "She does yoga by herself at home every morning to improve her physical flexibility."
                ],
                exp: "• <b>Đại từ phản thân:</b> by herself (tự mình).<br>• <b>Mệnh đề chỉ mục đích:</b> to improve..."
            },
            {
                q: "Tuy nhiên, nhiều người trẻ hiện nay vẫn thức khuya và lướt mạng xã hội.",
                a: [
                    "However, many young people nowadays still stay up late and surf social media.",
                    "However, many young people today still stay up late and browse social networks.",
                    "However, many young people still stay up late and surf the internet nowadays."
                ],
                exp: "• <b>Từ liên kết tương phản:</b> However, (bắt buộc có dấu phẩy theo sau).<br>• <b>Cụm từ:</b> stay up late, social media."
            },
            {
                q: "Cả bơi lội và chạy bộ đều mang lại những lợi ích tuyệt vời cho hệ tim mạch.",
                a: [
                    "Both swimming and jogging bring great benefits to the cardiovascular system.",
                    "Both swimming and running bring great benefits to heart health.",
                    "Both swimming and running provide great benefits for the cardiovascular system."
                ],
                exp: "• <b>Liên từ tương quan:</b> Both ... and ... (chủ ngữ số nhiều chia động từ nguyên mẫu: bring/provide)."
            },
            {
                q: "Tôi đã không ăn đồ ngọt kể từ khi tôi bắt đầu chế độ ăn kiêng vào tháng trước.",
                a: [
                    "I have not eaten sweets since I started my diet last month.",
                    "I haven't eaten sweets since I started my diet last month.",
                    "I have not eaten sugary food since I started my diet last month."
                ],
                exp: "• <b>Liên từ thời gian:</b> S + have/has V3/ed + since + S + V2/ed."
            },
            {
                q: "Vì lý do đó, chúng ta nên xây dựng một lối sống cân bằng ngay từ hôm nay.",
                a: [
                    "For that reason, we should build a balanced lifestyle from today.",
                    "For that reason, we should develop a balanced lifestyle right from today.",
                    "For that reason, we ought to build a balanced lifestyle from today."
                ],
                exp: "• <b>Cụm từ liên kết:</b> For that reason, (có dấu phẩy).<br>• <b>Tính từ:</b> balanced (cân bằng)."
            }
        ]
    },
    {
        id: "test4",
        title: "BÀI TẬP TỔNG ÔN TẬP 4",
        subTitle: "Chủ đề: Du lịch, Môi trường & Đô thị hiện đại",
        desc: "Dịch các câu sau sang tiếng Anh, vận dụng chuẩn xác các chủ điểm: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ và Từ nối.",
        questions: [
            {
                q: "Đà Lạt là một thành phố xinh đẹp với không khí trong lành và nhiều phong cảnh thơ mộng.",
                a: [
                    "Da Lat is a beautiful city with fresh air and many poetic landscapes.",
                    "Da Lat is a beautiful city with fresh air and much poetic scenery.",
                    "Dalat is a beautiful city with fresh air and poetic scenery.",
                    "Da Lat is a lovely city with fresh air and many romantic landscapes."
                ],
                exp: "• <b>Danh từ đếm được vs không đếm được:</b> fresh air (không đếm được), landscapes (đếm được) / scenery (không đếm được).<br>• <b>Tính từ miêu tả:</b> beautiful, fresh, poetic."
            },
            {
                q: "Khi khách du lịch đến thăm một đất nước mới, họ nên tôn trọng văn hóa địa phương.",
                a: [
                    "When tourists visit a new country, they should respect the local culture.",
                    "When travelers visit a new country, they should respect local culture.",
                    "When tourists visit a new country, they ought to respect the local culture."
                ],
                exp: "• <b>Mệnh đề trạng ngữ chỉ thời gian với When:</b> đứng đầu câu có dấu phẩy.<br>• <b>Đại từ:</b> they (thay cho tourists)."
            },
            {
                q: "Chính phủ đang nỗ lực trồng nhiều cây xanh hơn nhằm mục đích giảm ô nhiễm môi trường.",
                a: [
                    "The government is trying to plant more green trees in order to reduce environmental pollution.",
                    "The government is trying to plant more trees to reduce environmental pollution.",
                    "The government is making efforts to plant more trees so as to reduce environmental pollution."
                ],
                exp: "• <b>Thì Hiện tại tiếp diễn:</b> is trying to-V.<br>• <b>Cụm chỉ mục đích:</b> in order to / so as to + V nguyên mẫu.<br>• <b>Cụm danh từ:</b> environmental pollution."
            },
            {
                q: "Bạn có thể đi đến hòn đảo bằng tàu cao tốc hoặc bằng máy bay.",
                a: [
                    "You can travel to the island by speedboat or by plane.",
                    "You can go to the island by express boat or by airplane.",
                    "You can travel to the island by speedboat or by airplane."
                ],
                exp: "• <b>Liên từ kết hợp:</b> or (nối 2 cụm phương tiện, không dùng dấu phẩy trước or).<br>• <b>Giới từ chỉ phương tiện:</b> by speedboat, by plane."
            },
            {
                q: "Mặc dù giao thông trong giờ cao điểm rất đông đúc, xe buýt vẫn đến đúng giờ.",
                a: [
                    "Although traffic during rush hour is very heavy, the bus still arrives on time.",
                    "Although the traffic in rush hour is very crowded, the bus still arrives on time.",
                    "Even though traffic during rush hour is very busy, the bus still arrives on time."
                ],
                exp: "• <b>Từ nối:</b> Although (có dấu phẩy ngăn 2 mệnh đề).<br>• <b>Thành ngữ giới từ:</b> on time (đúng giờ) vs in time (kịp giờ).<br>• <b>Cụm danh từ:</b> rush hour."
            },
            {
                q: "Người dân địa phương luôn đối xử với du khách nước ngoài một cách cực kỳ thân thiện.",
                a: [
                    "Local people always treat foreign tourists extremely friendly.",
                    "Local people always treat foreign visitors in an extremely friendly manner.",
                    "The local residents always treat foreign tourists extremely politely.",
                    "Local people always treat foreign tourists very friendly."
                ],
                exp: "• <b>Trạng từ tần suất:</b> always.<br>• <b>Trạng từ chỉ mức độ:</b> extremely."
            },
            {
                q: "Chúng tôi đã quyết định hủy chuyến đi cắm trại vì một cơn mưa lớn bất ngờ.",
                a: [
                    "We decided to cancel the camping trip because of a sudden heavy rain.",
                    "We decided to cancel the camping trip due to a sudden heavy downpour.",
                    "We decided to call off the camping trip because of heavy rain."
                ],
                exp: "• <b>Giới từ chỉ nguyên nhân:</b> because of + Cụm danh từ.<br>• <b>Động từ quá khứ:</b> decided to cancel."
            },
            {
                q: "Thứ nhất, chúng ta cần phân loại rác thải sinh hoạt cẩn thận tại nhà.",
                a: [
                    "Firstly, we need to sort household waste carefully at home.",
                    "First of all, we need to classify household garbage carefully at home.",
                    "Firstly, we need to separate household waste carefully at home."
                ],
                exp: "• <b>Từ liên kết trình tự ý:</b> Firstly, / First of all, (bắt buộc có dấu phẩy).<br>• <b>Trạng từ:</b> carefully."
            },
            {
                q: "Khách sạn sang trọng này không chỉ có tầm nhìn tuyệt đẹp mà dịch vụ của nó còn rất chu đáo.",
                a: [
                    "This luxurious hotel not only has a stunning view, but its service is also very attentive.",
                    "This luxury hotel not only has a stunning view but its service is also very thoughtful.",
                    "This luxury hotel not only has a wonderful view, but its service is also very attentive."
                ],
                exp: "• <b>Tính từ:</b> luxurious / luxury.<br>• <b>Tính từ sở hữu:</b> its service (its không có dấu nháy đơn)."
            },
            {
                q: "Tóm lại, bảo vệ các tài nguyên thiên nhiên là trách nhiệm chung của toàn xã hội.",
                a: [
                    "In conclusion, protecting natural resources is the shared responsibility of the whole society.",
                    "In summary, protecting natural resources is the common responsibility of the whole society.",
                    "To sum up, protecting natural resources is the shared responsibility of all society.",
                    "In short, protecting natural resources is the responsibility of the whole society."
                ],
                exp: "• <b>Từ liên kết kết luận:</b> In conclusion, (có dấu phẩy).<br>• <b>Chủ ngữ Danh động từ:</b> Protecting natural resources.<br>• <b>Cụm danh từ:</b> natural resources, shared responsibility."
            }
        ]
    }
];

// Biến trạng thái của hệ thống Tổng Ôn Tập
let currentReviewTestId = 'test1';
let reviewUserAnswers = {}; // { 'test1': { 0: '...', 1: '...' } }
let reviewTimers = {}; // Lưu timer countdown cho từng test
let reviewTimeLeft = {}; // Số giây còn lại (mặc định 20 * 60 = 1200 giây)
let reviewSubmitted = {}; // { 'test1': true/false }

// Khởi tạo answers ban đầu
finalReviewTests.forEach(test => {
    if (!reviewUserAnswers[test.id]) reviewUserAnswers[test.id] = {};
    if (reviewTimeLeft[test.id] === undefined) reviewTimeLeft[test.id] = 20 * 60; // 20 phút = 1200 giây
    if (reviewSubmitted[test.id] === undefined) reviewSubmitted[test.id] = false;
});

// Hàm khởi tạo và bắt đầu đếm ngược thời gian (20 phút)
window.startReviewTimer = function(testId) {
    if (reviewTimers[testId]) return; // Đã chạy rồi thì không tạo thêm
    if (reviewSubmitted[testId]) return; // Đã nộp rồi thì không đếm nữa

    reviewTimers[testId] = setInterval(() => {
        if (reviewTimeLeft[testId] > 0) {
            reviewTimeLeft[testId]--;
            updateReviewTimerDisplay(testId);
        } else {
            clearInterval(reviewTimers[testId]);
            reviewTimers[testId] = null;
            alert("⏰ Đã hết thời gian 20 phút! Hệ thống sẽ tự động nộp bài và chấm điểm.");
            window.submitFinalReview(testId, true);
        }
    }, 1000);
};

// Cập nhật giao diện đồng hồ đếm ngược
function updateReviewTimerDisplay(testId) {
    const timerEl = document.getElementById(`review-timer-${testId}`);
    if (!timerEl) return;
    const minutes = Math.floor(reviewTimeLeft[testId] / 60);
    const seconds = reviewTimeLeft[testId] % 60;
    const strMin = minutes < 10 ? '0' + minutes : minutes;
    const strSec = seconds < 10 ? '0' + seconds : seconds;
    
    // Đổi màu cảnh báo khi còn dưới 3 phút
    if (reviewTimeLeft[testId] <= 180) {
        timerEl.style.color = '#ef4444';
        timerEl.style.borderColor = '#ef4444';
        timerEl.style.background = '#fef2f2';
    } else {
        timerEl.style.color = '#4338ca';
        timerEl.style.borderColor = '#c7d2fe';
        timerEl.style.background = '#eef2ff';
    }

    timerEl.innerHTML = `⏱️ <b>Thời gian còn lại:</b> <span style="font-size: 1.25rem; font-weight: 800; font-family: monospace; margin-left: 6px;">${strMin}:${strSec}</span>`;
}

// Chuyển đề làm bài
window.switchReviewTest = function(testId) {
    currentReviewTestId = testId;
    renderFinalReviewView();
};

// Kiểm tra 1 câu đơn lẻ
window.checkSingleReviewSentence = function(testId, qIdx) {
    const test = finalReviewTests.find(t => t.id === testId);
    if (!test) return;
    const q = test.questions[qIdx];
    const val = (reviewUserAnswers[testId][qIdx] || '').trim();
    const expDiv = document.getElementById(`review-exp-${testId}-${qIdx}`);
    if (!expDiv) return;

    if (!val) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = "⚠️ Vui lòng nhập câu dịch trước khi kiểm tra!";
        return;
    }

    const cleanUser = window.normalizeText ? window.normalizeText(val) : val.toLowerCase().trim();
    const isCorrect = q.a.some(ans => {
        const cleanAns = window.normalizeText ? window.normalizeText(ans) : ans.toLowerCase().trim();
        return cleanAns === cleanUser;
    });

    const formCheck = window.checkSentencePunctuation ? window.checkSentencePunctuation(val, isCorrect) : { valid: isCorrect, isNear: false, message: '' };

    expDiv.style.display = 'block';

    if (formCheck.valid) {
        expDiv.style.background = '#f0fdf4';
        expDiv.style.color = '#166534';
        expDiv.style.border = '1px solid #bbf7d0';
        expDiv.innerHTML = `✅ <b>Chính xác!</b> Câu dịch rất chuẩn ngữ pháp.<br><div style="margin-top: 6px; font-size: 0.95rem; color: #15803d;">${q.exp}</div>`;
    } else if (formCheck.isNear) {
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = `${formCheck.message}<br><div style="margin-top: 6px; font-size: 0.95rem;">${q.exp}</div>`;
    } else {
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = `❌ <b>Chưa chính xác.</b><br><br><b>💡 Gợi ý đáp án chuẩn:</b><br>- ${q.a.slice(0, 3).join('<br>- ')}<br><div style="margin-top: 8px; font-size: 0.95rem; color: #475569; border-top: 1px dashed #cbd5e1; padding-top: 6px;"><b>Phân tích kiến thức:</b> ${q.exp}</div>`;
    }
};

// Nộp bài thi
window.submitFinalReview = function(testId, isAutoSubmit = false) {
    const test = finalReviewTests.find(t => t.id === testId);
    if (!test) return;

    if (!isAutoSubmit) {
        let unanswered = 0;
        test.questions.forEach((_, idx) => {
            const val = (reviewUserAnswers[testId][idx] || '').trim();
            if (!val) unanswered++;
        });

        if (unanswered > 0) {
            const confirmSubmit = confirm(`Bạn còn ${unanswered} câu chưa làm xong. Bạn có chắc chắn muốn nộp bài ngay bây giờ không?`);
            if (!confirmSubmit) return;
        }
    }

    // Dừng timer
    if (reviewTimers[testId]) {
        clearInterval(reviewTimers[testId]);
        reviewTimers[testId] = null;
    }
    reviewSubmitted[testId] = true;

    // Chấm điểm
    let correctCount = 0;
    test.questions.forEach((q, idx) => {
        const val = (reviewUserAnswers[testId][idx] || '').trim();
        if (val) {
            const cleanUser = window.normalizeText ? window.normalizeText(val) : val.toLowerCase().trim();
            const isMatch = q.a.some(ans => {
                const cleanAns = window.normalizeText ? window.normalizeText(ans) : ans.toLowerCase().trim();
                return cleanAns === cleanUser;
            });
            if (isMatch && val.endsWith('.')) {
                correctCount++;
            }
        }
        window.checkSingleReviewSentence(testId, idx);
    });

    // Cập nhật nút nộp bài
    const submitBtn = document.getElementById(`review-submit-btn-${testId}`);
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.innerText = `ĐÃ NỘP BÀI (${correctCount}/${test.questions.length} CÂU ĐÚNG)`;
    }

    // Hiển thị modal kết quả
    if (typeof window.showExerciseResult === 'function') {
        window.showExerciseResult(correctCount, test.questions.length, `KẾT QUẢ ${test.title}`);
    } else {
        alert(`Bạn đã hoàn thành ${test.title}!\nKết quả: ${correctCount}/${test.questions.length} câu chính xác.`);
    }

    if (typeof window.saveProgress === 'function') {
        window.saveProgress(true);
    }
};

// Render giao diện Tổng Ôn Tập
window.renderFinalReviewView = function() {
    const contentWrapper = document.getElementById('content-wrapper');
    if (!contentWrapper) return;

    const curTest = finalReviewTests.find(t => t.id === currentReviewTestId) || finalReviewTests[0];

    // Khởi tạo timer ngay khi xem đề
    if (!reviewSubmitted[curTest.id] && !reviewTimers[curTest.id]) {
        window.startReviewTimer(curTest.id);
    }

    // Menu 4 bài tập
    const testTabsHtml = finalReviewTests.map((t, idx) => {
        const isActive = t.id === curTest.id;
        const isDone = reviewSubmitted[t.id];
        return `
            <button onclick="window.switchReviewTest('${t.id}')" style="padding: 10px 20px; border-radius: 24px; font-weight: 800; font-size: 1rem; border: 2px solid ${isActive ? 'var(--primary-color)' : '#e2e8f0'}; background: ${isActive ? 'var(--primary-color)' : 'white'}; color: ${isActive ? 'white' : '#475569'}; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: ${isActive ? '0 4px 10px rgba(87,70,227,0.25)' : 'none'}; transition: all 0.2s;">
                <span>${isDone ? '✅' : '📝'}</span> ${t.title}
            </button>
        `;
    }).join('');

    // Danh sách 10 câu hỏi dịch
    const questionsHtml = curTest.questions.map((q, idx) => {
        const userVal = (reviewUserAnswers[curTest.id] && reviewUserAnswers[curTest.id][idx]) || '';
        return `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 14px; padding: 22px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 20px;">
                <div style="display: flex; gap: 14px; align-items: flex-start; margin-bottom: 14px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin: 4px 0 0 0; line-height: 1.6;">${q.q}</p>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px; padding-left: 48px;">
                    <textarea id="review_ans_${curTest.id}_${idx}" rows="2" placeholder="Nhập câu dịch tiếng Anh đầy đủ tại đây..." style="padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box; resize: vertical; font-family: inherit;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="reviewUserAnswers['${curTest.id}'][${idx}] = this.value; document.getElementById('review-exp-${curTest.id}-${idx}').style.display='none';">${userVal}</textarea>
                    
                    <button onclick="window.checkSingleReviewSentence('${curTest.id}', ${idx})" style="padding: 8px 18px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra câu này</button>
                </div>
                <div style="padding-left: 48px;">
                    <div id="review-exp-${curTest.id}-${idx}" style="display: none; margin-top: 12px; padding: 12px 14px; border-radius: 10px; font-size: 1rem; line-height: 1.5;"></div>
                </div>
            </div>
        `;
    }).join('');

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 960px; margin: 0 auto; padding-bottom: 60px;">
            
            <!-- HEADER TỔNG ÔN TẬP -->
            <div style="margin-bottom: 24px;">
                <h1 class="page-title" style="text-align: left; margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                    <span>🎓</span> TỔNG ÔN TẬP (FINAL REVIEW)
                </h1>
                <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">Hệ thống 4 bài thi dịch câu tổng hợp toàn bộ kiến thức của 7 chủ điểm: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ và Từ nối.</p>
            </div>

            <!-- TABS CHỌN 4 ĐỀ THI -->
            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
                ${testTabsHtml}
            </div>

            <!-- CARD THÔNG TIN ĐỀ THI & ĐỒNG HỒ ĐẾM NGƯỢC -->
            <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 24px; border-top: 6px solid var(--primary-color);">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                    <div>
                        <span style="background: var(--primary-light); color: var(--primary-color); font-weight: bold; padding: 4px 14px; border-radius: 20px; font-size: 0.9rem;">10 CÂU DỊCH TỔNG HỢP</span>
                        <h2 style="color: var(--primary-color); font-size: 1.5rem; font-weight: 800; margin: 10px 0 4px 0;">${curTest.title}: ${curTest.subTitle}</h2>
                        <p style="color: var(--text-muted); margin: 0; font-size: 1.05rem;">${curTest.desc}</p>
                    </div>

                    <!-- KHUNG ĐỒNG HỒ ĐẾM NGƯỢC 20 PHÚT -->
                    <div id="review-timer-${curTest.id}" style="padding: 10px 18px; border-radius: 30px; font-size: 1.05rem; border: 2px solid #c7d2fe; background: #eef2ff; color: #4338ca; display: flex; align-items: center; box-shadow: 0 2px 6px rgba(99,102,241,0.1);">
                        <!-- Timer display dynamically injected -->
                    </div>
                </div>
            </div>

            <!-- KHU VỰC 10 CÂU HỎI -->
            <div style="margin-bottom: 32px;">
                ${questionsHtml}
            </div>

            <!-- NÚT NỘP BÀI TỔNG THỂ -->
            <div style="text-align: center; margin-top: 36px; padding: 24px; background: white; border-radius: 16px; box-shadow: var(--shadow-sm); border: 1px solid #e2e8f0;">
                <button id="review-submit-btn-${curTest.id}" onclick="window.submitFinalReview('${curTest.id}')" style="padding: 14px 44px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: 800; font-size: 1.15rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(87,70,227,0.3);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 16px rgba(87,70,227,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(87,70,227,0.3)'">
                    🚀 NỘP BÀI & KIỂM TRA TOÀN BỘ (10 CÂU)
                </button>
                <div style="font-size: 0.95rem; color: #64748b; margin-top: 10px;">(Hệ thống sẽ chấm điểm chi tiết và hiển thị bảng giải thích của từng câu)</div>
            </div>

        </div>
    `;

    // Cập nhật text ban đầu cho đồng hồ
    updateReviewTimerDisplay(curTest.id);
};
