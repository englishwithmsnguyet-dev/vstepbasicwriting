// =========================================================================
// ==================== HỆ THỐNG TỔNG ÔN TẬP (FINAL REVIEW) ====================
// =========================================================================

// Dữ liệu 4 bài tập dịch câu VỪA PHẢI, THỰC TẾ, CƠ BẢN DÀNH CHO VIẾT THƯ & VIẾT LUẬN B1 VSTEP
const finalReviewTests = [
    {
        id: "test1",
        title: "BÀI TẬP 1 (CÁC CÂU DÙNG TRONG VIẾT THƯ - PHẦN 1)",
        subTitle: "Mở đầu thư, hỏi thăm, cảm ơn, mời hẹn & chia sẻ thông tin",
        desc: "Luyện tập dịch 10 câu ngắn gọn, vừa sức, áp dụng 7 chủ điểm ngữ pháp vào bài thi Viết Thư B1 (Writing Task 1).",
        questions: [
            {
                q: "Tôi viết thư này để mời bạn đến bữa tiệc sinh nhật của tôi.",
                a: [
                    "I am writing this letter to invite you to my birthday party.",
                    "I am writing this letter to invite you to my birthday party",
                    "I am writing this email to invite you to my birthday party.",
                    "I am writing this email to invite you to my birthday party",
                    "I am writing to invite you to my birthday party.",
                    "I am writing to invite you to my birthday party"
                ],
                hints: [
                    { en: "invite you to...", vn: "mời bạn đến..." },
                    { en: "birthday party", vn: "bữa tiệc sinh nhật" }
                ],
                exp: "• <b>Cấu trúc mở đầu thư:</b> <i>I am writing this letter to + V nguyên mẫu</i>.<br>• <b>Giới từ:</b> invite sb to somewhere."
            },
            {
                q: "Cảm ơn bạn rất nhiều vì món quà sinh nhật.",
                a: [
                    "Thank you very much for the birthday gift.",
                    "Thank you very much for the birthday gift",
                    "Thank you so much for the birthday gift.",
                    "Thank you very much for the birthday present.",
                    "Thank you so much for the birthday present.",
                    "Thank you for the birthday gift.",
                    "Thank you very much for your birthday gift.",
                    "Thanks a lot for the birthday gift."
                ],
                hints: [
                    { en: "Thank you very much for...", vn: "Cảm ơn bạn rất nhiều vì..." },
                    { en: "birthday gift / present", vn: "món quà sinh nhật" }
                ],
                exp: "• <b>Cấu trúc cảm ơn:</b> <i>Thank you very much for + Danh từ / V-ing</i>.<br>• <b>Cụm danh từ:</b> the birthday gift."
            },
            {
                q: "Tôi rất vui khi nhận được thư của bạn.",
                a: [
                    "I am very happy to receive your letter.",
                    "I am very happy to receive your letter",
                    "I am very glad to receive your letter.",
                    "I am very happy to get your letter.",
                    "I was very happy to receive your letter.",
                    "I am glad to receive your email.",
                    "I am very happy to receive your email."
                ],
                hints: [
                    { en: "happy / glad to receive", vn: "rất vui khi nhận được" },
                    { en: "your letter / email", vn: "thư của bạn" }
                ],
                exp: "• <b>Cấu trúc tính từ chỉ cảm xúc:</b> <i>S + be + happy/glad + to-V</i>.<br>• <b>Động từ:</b> receive (nhận)."
            },
            {
                q: "Mặc dù tôi rất bận, tôi vẫn muốn viết thư cho bạn.",
                a: [
                    "Although I am very busy, I still want to write to you.",
                    "Although I am very busy, I still want to write to you",
                    "Though I am very busy, I still want to write to you.",
                    "Even though I am very busy, I still want to write to you.",
                    "Although I am busy, I still want to write to you."
                ],
                hints: [
                    { en: "Although / Even though", vn: "Mặc dù (từ nối đứng đầu câu có dấu phẩy)" },
                    { en: "want to write to you", vn: "muốn viết thư cho bạn" }
                ],
                exp: "• <b>Từ nối nhượng bộ:</b> Although đứng đầu câu có dấu phẩy.<br>• <b>Động từ + to-V:</b> want to write to sb."
            },
            {
                q: "Bạn có thể đi xem phim với tôi vào tối thứ Bảy tuần này không?",
                a: [
                    "Can you go to the cinema with me this Saturday evening?",
                    "Can you go to the movies with me this Saturday night?",
                    "Can you go to the cinema with me this Saturday night?",
                    "Could you go to the cinema with me this Saturday evening?",
                    "Would you like to go to the cinema with me this Saturday evening?"
                ],
                hints: [
                    { en: "go to the cinema / movies", vn: "đi xem phim" },
                    { en: "this Saturday evening / night", vn: "tối thứ Bảy tuần này" }
                ],
                exp: "• <b>Câu hỏi lời mời:</b> Can you + V...? / Would you like to + V...? (kết thúc bằng dấu hỏi '?')."
            },
            {
                q: "Tôi xin lỗi vì đã trả lời thư muộn.",
                a: [
                    "I am sorry for replying late.",
                    "I am sorry for replying late",
                    "I am sorry for my late reply.",
                    "I am sorry for answering late.",
                    "I am sorry for replying to your letter late.",
                    "I am very sorry for replying late."
                ],
                hints: [
                    { en: "sorry for + V-ing", vn: "xin lỗi vì đã làm gì" },
                    { en: "replying late / late reply", vn: "trả lời muộn" }
                ],
                exp: "• <b>Cấu trúc xin lỗi:</b> <i>I am sorry for + V-ing / Danh từ</i>.<br>• <b>Trạng từ:</b> late."
            },
            {
                q: "Tôi đã sống ở Hà Nội được hai năm và tôi rất yêu thành phố này.",
                a: [
                    "I have lived in Hanoi for two years, and I love this city very much.",
                    "I have lived in Hanoi for two years, and I love this city very much",
                    "I have lived in Ha Noi for two years, and I really love this city.",
                    "I have been living in Hanoi for two years, and I love this city very much.",
                    "I have lived in Hanoi for 2 years, and I love this city very much."
                ],
                hints: [
                    { en: "for two years", vn: "được hai năm (dấu hiệu HTHT)" },
                    { en: "and", vn: "và (nối 2 mệnh đề có dấu phẩy trước and)" }
                ],
                exp: "• <b>Thì Hiện tại hoàn thành:</b> have lived kết hợp giới từ <i>for</i>.<br>• <b>Từ nối:</b> and (có dấu phẩy khi nối 2 mệnh đề độc lập)."
            },
            {
                q: "Theo tôi, bạn nên mua một chiếc máy tính xách tay mới.",
                a: [
                    "In my opinion, you should buy a new laptop.",
                    "In my opinion, you should buy a new laptop",
                    "In my view, you should buy a new laptop.",
                    "I think you should buy a new laptop."
                ],
                hints: [
                    { en: "In my opinion,", vn: "Theo tôi, (có dấu phẩy)" },
                    { en: "should buy", vn: "nên mua (động từ tình thái + V nguyên mẫu)" },
                    { en: "laptop", vn: "máy tính xách tay" }
                ],
                exp: "• <b>Cụm từ đưa lời khuyên:</b> In my opinion, you should + V.<br>• <b>Tính từ trước danh từ:</b> a new laptop."
            },
            {
                q: "Nếu bạn có thời gian rảnh vào ngày mai, hãy gọi cho tôi nhé.",
                a: [
                    "If you have free time tomorrow, please call me.",
                    "If you have free time tomorrow, please call me",
                    "If you have free time tomorrow, give me a call.",
                    "If you have some free time tomorrow, please call me."
                ],
                hints: [
                    { en: "free time", vn: "thời gian rảnh" },
                    { en: "please call me", vn: "hãy gọi cho tôi nhé" }
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> Mệnh đề If đứng trước có dấu phẩy ngăn cách.<br>• <b>Câu mệnh lệnh:</b> please + V nguyên mẫu."
            },
            {
                q: "Tôi hy vọng sẽ gặp lại bạn sớm.",
                a: [
                    "I hope to see you soon.",
                    "I hope to see you soon",
                    "I hope to meet you soon.",
                    "I hope that I will see you soon.",
                    "I hope we will meet soon."
                ],
                hints: [
                    { en: "hope to see you", vn: "hy vọng gặp lại bạn (hope + to-V)" },
                    { en: "soon", vn: "sớm (trạng từ đứng cuối câu)" }
                ],
                exp: "• <b>Cấu trúc kết thư thân mật:</b> <i>I hope to + V</i>.<br>• <b>Trạng từ:</b> soon."
            }
        ]
    },
    {
        id: "test2",
        title: "BÀI TẬP 2 (CÁC CÂU DÙNG TRONG VIẾT THƯ - PHẦN 2)",
        subTitle: "Đưa ra lời khuyên, đề xuất kế hoạch, chỉ dẫn & chào tạm biệt",
        desc: "Luyện tập dịch 10 câu quen thuộc dùng để viết phần thân bài và kết thư trong Task 1.",
        questions: [
            {
                q: "Bạn có thể chỉ cho tôi đường đến trạm xe buýt gần nhất được không?",
                a: [
                    "Can you show me the way to the nearest bus station?",
                    "Could you show me the way to the nearest bus stop?",
                    "Can you show me the way to the nearest bus stop?",
                    "Can you tell me the way to the nearest bus stop?"
                ],
                hints: [
                    { en: "show me the way to", vn: "chỉ cho tôi đường đến..." },
                    { en: "nearest bus stop / station", vn: "trạm xe buýt gần nhất" }
                ],
                exp: "• <b>Câu hỏi yêu cầu thông tin:</b> Can/Could you show me...?<br>• <b>So sánh nhất:</b> the nearest."
            },
            {
                q: "Chúng ta có thể gặp nhau tại quán cà phê vào lúc 3 giờ chiều.",
                a: [
                    "We can meet at the coffee shop at 3 p.m.",
                    "We can meet at the coffee shop at 3 p.m",
                    "We can meet at the cafe at 3 p.m.",
                    "We can meet at a coffee shop at 3 p.m.",
                    "We can meet at the coffee shop at 3 PM."
                ],
                hints: [
                    { en: "coffee shop / cafe", vn: "quán cà phê" },
                    { en: "at 3 p.m.", vn: "vào lúc 3 giờ chiều (giới từ chỉ giờ: at)" }
                ],
                exp: "• <b>Giới từ chỉ nơi chốn & thời gian:</b> at the coffee shop, at 3 p.m."
            },
            {
                q: "Thành thật mà nói, tôi không thích đi du lịch vào cuối tuần.",
                a: [
                    "To be honest, I do not like traveling at weekends.",
                    "To be honest, I do not like traveling on weekends.",
                    "To be honest, I do not like traveling on weekends",
                    "Honestly, I do not like traveling on weekends.",
                    "To be honest, I do not like travelling on weekends."
                ],
                hints: [
                    { en: "To be honest, / Honestly,", vn: "Thành thật mà nói, (có dấu phẩy)" },
                    { en: "traveling on weekends", vn: "đi du lịch vào cuối tuần" }
                ],
                exp: "• <b>Cụm từ liên kết:</b> To be honest,.<br>• <b>Động từ sở thích:</b> like + V-ing."
            },
            {
                q: "Tôi khuyên bạn nên mang theo một chiếc áo khoác ấm.",
                a: [
                    "I advise you to bring a warm jacket.",
                    "I advise you to bring a warm jacket",
                    "I advise you to take a warm coat.",
                    "I advise you to bring a warm coat.",
                    "I suggest that you bring a warm jacket."
                ],
                hints: [
                    { en: "advise you to + V", vn: "khuyên bạn nên làm gì" },
                    { en: "a warm jacket / coat", vn: "áo khoác ấm" }
                ],
                exp: "• <b>Cấu trúc:</b> advise sb to-V.<br>• <b>Tính từ trước danh từ:</b> a warm jacket."
            },
            {
                q: "Chuyến đi này sẽ rất thú vị và bổ ích.",
                a: [
                    "This trip will be very interesting and useful.",
                    "This trip will be very interesting and useful",
                    "This journey will be very interesting and useful.",
                    "This trip is going to be very interesting and useful."
                ],
                hints: [
                    { en: "trip", vn: "chuyến đi" },
                    { en: "interesting and useful", vn: "thú vị và bổ ích (tính từ)" }
                ],
                exp: "• <b>Thì Tương lai đơn:</b> will be + Adj.<br>• <b>Liên từ đẳng lập:</b> interesting and useful."
            },
            {
                q: "Tôi đã mua vé ngày hôm qua, vì vậy bạn không cần phải lo lắng.",
                a: [
                    "I bought the ticket yesterday, so you do not need to worry.",
                    "I bought the ticket yesterday, so you do not need to worry",
                    "I bought the tickets yesterday, so you do not need to worry.",
                    "I bought the ticket yesterday, so you do not have to worry."
                ],
                hints: [
                    { en: "bought (quá khứ của buy)", vn: "đã mua" },
                    { en: "so", vn: "vì vậy (từ nối có dấu phẩy)" },
                    { en: "do not need to worry", vn: "không cần phải lo lắng" }
                ],
                exp: "• <b>Thì Quá khứ đơn:</b> bought.<br>• <b>Từ nối kết quả:</b> so."
            },
            {
                q: "Bạn có thể gửi cho tôi một vài bức ảnh được không?",
                a: [
                    "Can you send me some photos?",
                    "Could you send me some photos?",
                    "Can you send me some pictures?",
                    "Could you send me some pictures?"
                ],
                hints: [
                    { en: "send me some photos", vn: "gửi cho tôi vài bức ảnh" }
                ],
                exp: "• <b>Động từ 2 tân ngữ:</b> send + me (O1) + some photos (O2)."
            },
            {
                q: "Nếu bạn không thể đến đúng giờ, hãy nhắn tin cho tôi nhé.",
                a: [
                    "If you cannot come on time, please text me.",
                    "If you cannot come on time, please text me",
                    "If you can not come on time, please message me.",
                    "If you cannot arrive on time, please text me."
                ],
                hints: [
                    { en: "on time", vn: "đúng giờ" },
                    { en: "please text me", vn: "hãy nhắn tin cho tôi" }
                ],
                exp: "• <b>Giới từ:</b> on time (đúng giờ).<br>• <b>Câu điều kiện loại 1 kết hợp câu mệnh lệnh:</b> please + V."
            },
            {
                q: "Tôi hy vọng chúng ta sẽ có một khoảng thời gian tuyệt vời cùng nhau.",
                a: [
                    "I hope we will have a great time together.",
                    "I hope we will have a great time together",
                    "I hope that we will have a wonderful time together.",
                    "I hope we will have a good time together."
                ],
                hints: [
                    { en: "have a great time", vn: "có khoảng thời gian tuyệt vời" },
                    { en: "together", vn: "cùng nhau" }
                ],
                exp: "• <b>Cấu trúc:</b> I hope + S + will V.<br>• <b>Trạng từ:</b> together."
            },
            {
                q: "Hãy giữ liên lạc nhé.",
                a: [
                    "Please keep in touch.",
                    "Please keep in touch",
                    "Keep in touch.",
                    "Keep in touch",
                    "Let's keep in touch.",
                    "Let's keep in touch"
                ],
                hints: [
                    { en: "keep in touch", vn: "giữ liên lạc" }
                ],
                exp: "• <b>Cụm động từ kết thư phổ biến:</b> keep in touch."
            }
        ]
    },
    {
        id: "test3",
        title: "BÀI TẬP 3 (CÁC CÂU DÙNG TRONG VIẾT LUẬN - PHẦN 1)",
        subTitle: "Mở bài, nêu quan điểm, dẫn chứng & liên kết luận điểm",
        desc: "Luyện tập dịch 10 câu nòng cốt, cơ bản và vừa sức để viết Mở bài và Thân bài trong Writing Task 2.",
        questions: [
            {
                q: "Nhiều người thích mua sắm trực tuyến vì nó rất tiện lợi.",
                a: [
                    "Many people like shopping online because it is very convenient.",
                    "Many people like shopping online because it is very convenient",
                    "Many people prefer shopping online because it is very convenient.",
                    "Many people like online shopping because it is very convenient."
                ],
                hints: [
                    { en: "shopping online", vn: "mua sắm trực tuyến" },
                    { en: "convenient (adj)", vn: "tiện lợi" },
                    { en: "because", vn: "vì / bởi vì" }
                ],
                exp: "• <b>Động từ sở thích:</b> like + V-ing.<br>• <b>Từ nối nguyên nhân:</b> because (không có dấu phẩy phía trước)."
            },
            {
                q: "Theo ý kiến của tôi, đọc sách mang lại rất nhiều lợi ích cho học sinh.",
                a: [
                    "In my opinion, reading books brings a lot of benefits to students.",
                    "In my opinion, reading books brings a lot of benefits to students",
                    "In my view, reading books brings many benefits to students.",
                    "In my opinion, reading books brings many benefits for students."
                ],
                hints: [
                    { en: "In my opinion,", vn: "Theo ý kiến của tôi, (có dấu phẩy)" },
                    { en: "reading books", vn: "việc đọc sách (chủ ngữ V-ing chia số ít: brings)" },
                    { en: "benefits", vn: "lợi ích" }
                ],
                exp: "• <b>Cụm từ nêu quan điểm:</b> In my opinion,.<br>• <b>Chủ ngữ Danh động từ:</b> reading books chia động từ số ít."
            },
            {
                q: "Thứ nhất, tập thể dục mỗi ngày giúp con người giảm bớt căng thẳng.",
                a: [
                    "Firstly, exercising every day helps people reduce stress.",
                    "Firstly, exercising every day helps people reduce stress",
                    "Firstly, doing exercise every day helps people reduce stress.",
                    "First of all, exercising every day helps people reduce stress."
                ],
                hints: [
                    { en: "Firstly, / First of all,", vn: "Thứ nhất, (từ nối liệt kê luận điểm 1)" },
                    { en: "exercising / doing exercise", vn: "tập thể dục" },
                    { en: "reduce stress", vn: "giảm bớt căng thẳng" }
                ],
                exp: "• <b>Từ liên kết:</b> Firstly,.<br>• <b>Cấu trúc:</b> help + O + V: helps people reduce stress."
            },
            {
                q: "Hơn nữa, thức ăn nhanh không tốt cho sức khỏe của chúng ta.",
                a: [
                    "Furthermore, fast food is not good for our health.",
                    "Furthermore, fast food is not good for our health",
                    "Moreover, fast food is not good for our health.",
                    "In addition, fast food is not good for our health.",
                    "Furthermore, fast food is bad for our health."
                ],
                hints: [
                    { en: "Furthermore, / Moreover,", vn: "Hơn nữa, (từ nối bổ sung ý)" },
                    { en: "fast food", vn: "thức ăn nhanh (danh từ không đếm được)" },
                    { en: "good for health", vn: "tốt cho sức khỏe" }
                ],
                exp: "• <b>Từ nối:</b> Furthermore,.<br>• <b>Tính từ + Giới từ:</b> good for."
            },
            {
                q: "Ví dụ, nhiều trẻ em dành quá nhiều thời gian xem tivi mỗi ngày.",
                a: [
                    "For example, many children spend too much time watching TV every day.",
                    "For example, many children spend too much time watching TV every day",
                    "For instance, many children spend too much time watching TV every day.",
                    "For example, many kids spend too much time watching TV every day."
                ],
                hints: [
                    { en: "For example, / For instance,", vn: "Ví dụ, (từ nối đưa dẫn chứng có dấu phẩy)" },
                    { en: "spend time + V-ing", vn: "dành thời gian làm gì" },
                    { en: "too much time", vn: "quá nhiều thời gian (much dùng cho danh từ không đếm được)" }
                ],
                exp: "• <b>Lượng từ:</b> too much time.<br>• <b>Cấu trúc:</b> spend time + V-ing."
            },
            {
                q: "Do đó, các bậc phụ huynh nên kiểm soát thời gian sử dụng điện thoại của con mình.",
                a: [
                    "Therefore, parents should control their children's phone time.",
                    "Therefore, parents should control their children's phone time",
                    "Therefore, parents should control the phone time of their children.",
                    "As a result, parents should control their children's phone time."
                ],
                hints: [
                    { en: "Therefore, / As a result,", vn: "Do đó, (từ nối chỉ kết quả có dấu phẩy)" },
                    { en: "should control", vn: "nên kiểm soát" },
                    { en: "their children's phone time", vn: "thời gian dùng điện thoại của con họ (sở hữu cách)" }
                ],
                exp: "• <b>Từ nối:</b> Therefore,.<br>• <b>Động từ khiếm khuyết:</b> should + V nguyên mẫu.<br>• <b>Sở hữu cách:</b> children's."
            },
            {
                q: "Mặc dù ô tô rất thuận tiện, chúng gây ra ô nhiễm không khí.",
                a: [
                    "Although cars are very convenient, they cause air pollution.",
                    "Although cars are very convenient, they cause air pollution",
                    "Even though cars are very convenient, they cause air pollution.",
                    "Though cars are very convenient, they cause air pollution."
                ],
                hints: [
                    { en: "Although", vn: "Mặc dù (mệnh đề đứng đầu có dấu phẩy)" },
                    { en: "convenient (adj)", vn: "thuận tiện" },
                    { en: "air pollution", vn: "ô nhiễm không khí" }
                ],
                exp: "• <b>Liên từ phụ thuộc:</b> Although.<br>• <b>Đại từ:</b> they thay thế cho danh từ số nhiều cars."
            },
            {
                q: "Đi xe đạp không những tốt cho sức khỏe mà còn tiết kiệm tiền.",
                a: [
                    "Cycling is not only good for health but also saves money.",
                    "Cycling is not only good for health but also saves money",
                    "Riding a bicycle is not only good for health but also saves money.",
                    "Riding a bike is not only good for health but also saves money."
                ],
                hints: [
                    { en: "Cycling / Riding a bike", vn: "Đi xe đạp" },
                    { en: "not only ... but also ...", vn: "không những... mà còn..." },
                    { en: "save money", vn: "tiết kiệm tiền" }
                ],
                exp: "• <b>Liên từ tương quan:</b> not only ... but also ...<br>• <b>Chủ ngữ Danh động từ:</b> Cycling chia động từ số ít."
            },
            {
                q: "Nếu học sinh học tập chăm chỉ, họ sẽ đạt điểm cao trong kỳ thi.",
                a: [
                    "If students study hard, they will get high scores in the exam.",
                    "If students study hard, they will get high scores in the exam",
                    "If students study hard, they will get high marks in the exam.",
                    "If students work hard, they will get high scores in the exam.",
                    "If students study hard, they will get good grades in the exam."
                ],
                hints: [
                    { en: "study hard", vn: "học tập chăm chỉ (hard là trạng từ)" },
                    { en: "high scores / marks", vn: "điểm cao" }
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> If + Hiện tại đơn, Tương lai đơn.<br>• <b>Trạng từ chỉ cách thức:</b> hard."
            },
            {
                q: "Tóm lại, học tiếng Anh rất quan trọng cho tương lai.",
                a: [
                    "In conclusion, learning English is very important for the future.",
                    "In conclusion, learning English is very important for the future",
                    "To sum up, learning English is very important for the future.",
                    "In short, learning English is very important for the future.",
                    "In summary, learning English is very important for the future."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại, (từ nối kết bài luận có dấu phẩy)" },
                    { en: "learning English", vn: "việc học tiếng Anh (chủ ngữ V-ing)" },
                    { en: "important for the future", vn: "quan trọng cho tương lai" }
                ],
                exp: "• <b>Từ nối kết bài:</b> In conclusion,.<br>• <b>Tính từ + Giới từ:</b> important for."
            }
        ]
    },
    {
        id: "test4",
        title: "BÀI TẬP 4 (CÁC CÂU DÙNG TRONG VIẾT LUẬN - PHẦN 2)",
        subTitle: "Giải pháp, so sánh đối chiếu, nguyên nhân và kết bài",
        desc: "Luyện tập dịch 10 câu giải pháp và lập luận đơn giản, dễ nhớ, ghi trọn điểm cấu trúc câu B1/B2.",
        questions: [
            {
                q: "Để giải quyết vấn đề này, chính phủ nên xây dựng thêm công viên.",
                a: [
                    "To solve this problem, the government should build more parks.",
                    "To solve this problem, the government should build more parks",
                    "To solve this issue, the government should build more parks.",
                    "In order to solve this problem, the government should build more parks."
                ],
                hints: [
                    { en: "To solve this problem,", vn: "Để giải quyết vấn đề này, (mục đích đứng đầu câu có dấu phẩy)" },
                    { en: "the government", vn: "chính phủ" },
                    { en: "build more parks", vn: "xây thêm nhiều công viên" }
                ],
                exp: "• <b>Mệnh đề chỉ mục đích:</b> To-V đứng đầu câu.<br>• <b>Động từ tình thái:</b> should build."
            },
            {
                q: "Một mặt, sống ở thành phố rất thuận tiện.",
                a: [
                    "On the one hand, living in the city is very convenient.",
                    "On the one hand, living in the city is very convenient",
                    "On the one hand, living in a city is very convenient.",
                    "On the one hand, living in cities is very convenient.",
                    "On the one hand, life in the city is very convenient."
                ],
                hints: [
                    { en: "On the one hand,", vn: "Một mặt, (từ nối mở đầu ý 1 có dấu phẩy)" },
                    { en: "living in the city", vn: "sống ở thành phố (chủ ngữ V-ing)" },
                    { en: "convenient (adj)", vn: "thuận tiện" }
                ],
                exp: "• <b>Cụm liên kết:</b> On the one hand,.<br>• <b>Chủ ngữ Danh động từ:</b> living in the city."
            },
            {
                q: "Mặt khác, cuộc sống ở thành phố rất đắt đỏ.",
                a: [
                    "On the other hand, life in the city is very expensive.",
                    "On the other hand, life in the city is very expensive",
                    "On the other hand, living in the city is very expensive.",
                    "On the other hand, city life is very expensive.",
                    "On the other hand, the cost of living in the city is very expensive."
                ],
                hints: [
                    { en: "On the other hand,", vn: "Mặt khác, (từ nối mở đầu ý đối lập có dấu phẩy)" },
                    { en: "life in the city", vn: "cuộc sống ở thành phố" },
                    { en: "expensive (adj)", vn: "đắt đỏ" }
                ],
                exp: "• <b>Cụm liên kết đối lập:</b> On the other hand,.<br>• <b>Tính từ mô tả:</b> expensive."
            },
            {
                q: "Chúng ta cần bảo vệ động vật hoang dã vì chúng đang gặp nguy hiểm.",
                a: [
                    "We need to protect wild animals because they are in danger.",
                    "We need to protect wild animals because they are in danger",
                    "We should protect wild animals because they are in danger.",
                    "We must protect wild animals because they are in danger."
                ],
                hints: [
                    { en: "wild animals", vn: "động vật hoang dã" },
                    { en: "in danger", vn: "gặp nguy hiểm" }
                ],
                exp: "• <b>Cấu trúc:</b> need to-V.<br>• <b>Cụm giới từ:</b> in danger."
            },
            {
                q: "Trường học nên dạy học sinh cách bảo vệ môi trường.",
                a: [
                    "Schools should teach students how to protect the environment.",
                    "Schools should teach students how to protect the environment",
                    "Schools should teach pupils how to protect the environment.",
                    "Schools ought to teach students how to protect the environment."
                ],
                hints: [
                    { en: "teach students how to + V", vn: "dạy học sinh cách làm gì" },
                    { en: "protect the environment", vn: "bảo vệ môi trường" }
                ],
                exp: "• <b>Cấu trúc:</b> teach sb how to-V.<br>• <b>Danh từ xác định:</b> the environment."
            },
            {
                q: "Sử dụng túi vải thay vì túi nilon là một thói quen tốt.",
                a: [
                    "Using cloth bags instead of plastic bags is a good habit.",
                    "Using cloth bags instead of plastic bags is a good habit",
                    "Using canvas bags instead of plastic bags is a good habit.",
                    "Using reusable bags instead of plastic bags is a good habit."
                ],
                hints: [
                    { en: "Using cloth bags", vn: "Sử dụng túi vải (chủ ngữ V-ing)" },
                    { en: "instead of + N", vn: "thay vì..." },
                    { en: "plastic bags", vn: "túi nilon / túi nhựa" },
                    { en: "a good habit", vn: "một thói quen tốt" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Using cloth bags.<br>• <b>Giới từ:</b> instead of."
            },
            {
                q: "Hầu hết mọi người đều đồng ý rằng tiếng Anh rất hữu ích.",
                a: [
                    "Most people agree that English is very useful.",
                    "Most people agree that English is very useful",
                    "Most people agree that learning English is very useful."
                ],
                hints: [
                    { en: "Most people agree that", vn: "Hầu hết mọi người đều đồng ý rằng..." },
                    { en: "useful (adj)", vn: "hữu ích" }
                ],
                exp: "• <b>Lượng từ:</b> Most people + V nguyên mẫu.<br>• <b>Mệnh đề danh từ với that:</b> that English is very useful."
            },
            {
                q: "Tuy nhiên, nhiều người vẫn lãng phí nước mỗi ngày.",
                a: [
                    "However, many people still waste water every day.",
                    "However, many people still waste water every day",
                    "However, a lot of people still waste water every day.",
                    "However, many people still waste water daily."
                ],
                hints: [
                    { en: "However,", vn: "Tuy nhiên, (từ nối đứng đầu câu có dấu phẩy)" },
                    { en: "waste water", vn: "lãng phí nước (water là danh từ không đếm được)" },
                    { en: "every day", vn: "mỗi ngày (trạng từ chỉ tần suất đứng cuối câu)" }
                ],
                exp: "• <b>Từ liên kết:</b> However,.<br>• <b>Trạng từ đứng giữa chủ ngữ và động từ:</b> still waste."
            },
            {
                q: "Mỗi người chúng ta đều có thể bảo vệ môi trường bằng những hành động nhỏ.",
                a: [
                    "Each of us can protect the environment with small actions.",
                    "Each of us can protect the environment with small actions",
                    "Every one of us can protect the environment with small actions.",
                    "Each of us can protect the environment through small actions."
                ],
                hints: [
                    { en: "Each of us", vn: "Mỗi người chúng ta" },
                    { en: "protect the environment", vn: "bảo vệ môi trường" },
                    { en: "with small actions", vn: "bằng những hành động nhỏ" }
                ],
                exp: "• <b>Đại từ:</b> Each of us.<br>• <b>Giới từ chỉ phương tiện / cách thức:</b> with small actions."
            },
            {
                q: "Tóm lại, chúng ta nên chung tay để xây dựng một tương lai tốt đẹp hơn.",
                a: [
                    "In conclusion, we should join hands to build a better future.",
                    "In conclusion, we should join hands to build a better future",
                    "To sum up, we should join hands to build a better future.",
                    "In summary, we should work together to build a better future.",
                    "In short, we should join hands to create a better future."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại, (từ nối kết bài luận)" },
                    { en: "join hands to + V", vn: "chung tay để làm gì" },
                    { en: "a better future", vn: "một tương lai tốt đẹp hơn" }
                ],
                exp: "• <b>Từ nối kết bài:</b> In conclusion,.<br>• <b>Thành ngữ:</b> join hands to-V.<br>• <b>So sánh hơn của good:</b> better."
            }
        ]
    }
];

// Biến trạng thái của hệ thống Tổng Ôn Tập
let currentReviewTestId = 'test1';
let reviewUserAnswers = {}; // { 'test1': { 0: '...', 1: '...' } }
let reviewTimers = {}; // Lưu timer countdown cho từng test
let reviewTimeLeft = {}; // Số giây còn lại (20 * 60 = 1200 giây)
let reviewStarted = {}; // { 'test1': true/false } -> Chỉ hiện đề và chạy giờ khi bấm BẮT ĐẦU LÀM BÀI
let reviewSubmitted = {}; // { 'test1': true/false }

// Khởi tạo ban đầu
finalReviewTests.forEach(test => {
    if (!reviewUserAnswers[test.id]) reviewUserAnswers[test.id] = {};
    if (reviewTimeLeft[test.id] === undefined) reviewTimeLeft[test.id] = 20 * 60;
    if (reviewStarted[test.id] === undefined) reviewStarted[test.id] = false;
    if (reviewSubmitted[test.id] === undefined) reviewSubmitted[test.id] = false;
});

// Bắt đầu làm bài (khi bấm nút "BẮT ĐẦU LÀM BÀI")
window.startReviewTestSession = function(testId) {
    reviewStarted[testId] = true;
    renderFinalReviewView();
    window.startReviewTimer(testId);
};

// Đếm ngược 20 phút
window.startReviewTimer = function(testId) {
    if (reviewTimers[testId]) return;
    if (reviewSubmitted[testId]) return;

    reviewTimers[testId] = setInterval(() => {
        if (reviewTimeLeft[testId] > 0) {
            reviewTimeLeft[testId]--;
            updateReviewTimerDisplay(testId);
        } else {
            clearInterval(reviewTimers[testId]);
            reviewTimers[testId] = null;
            alert("⏰ ĐÃ HẾT THỜI GIAN 20 PHÚT! Hệ thống đang tự động nộp bài và phân tích kết quả bài làm của bạn.");
            window.submitFinalReview(testId, true);
        }
    }, 1000);
};

// Cập nhật text hiển thị đồng hồ
function updateReviewTimerDisplay(testId) {
    const timerEl = document.getElementById(`review-timer-${testId}`);
    if (!timerEl) return;
    const minutes = Math.floor(reviewTimeLeft[testId] / 60);
    const seconds = reviewTimeLeft[testId] % 60;
    const strMin = minutes < 10 ? '0' + minutes : minutes;
    const strSec = seconds < 10 ? '0' + seconds : seconds;
    
    if (reviewTimeLeft[testId] <= 180) {
        timerEl.style.color = '#ef4444';
        timerEl.style.borderColor = '#fca5a5';
        timerEl.style.background = '#fef2f2';
    } else {
        timerEl.style.color = '#4338ca';
        timerEl.style.borderColor = '#c7d2fe';
        timerEl.style.background = '#eef2ff';
    }

    timerEl.innerHTML = `⏱️ <b>Thời gian còn lại:</b> <span style="font-size: 1.3rem; font-weight: 900; font-family: monospace; margin-left: 6px;">${strMin}:${strSec}</span>`;
}

// Bật/tắt gợi ý từ vựng dưới mỗi câu
window.toggleReviewHints = function(testId, qIdx) {
    const hintBox = document.getElementById(`review-hint-${testId}-${qIdx}`);
    const hintBtn = document.getElementById(`review-hint-btn-${testId}-${qIdx}`);
    if (!hintBox) return;

    if (hintBox.style.display === 'none' || !hintBox.style.display) {
        hintBox.style.display = 'block';
        if (hintBtn) hintBtn.innerHTML = '💡 Ẩn từ vựng gợi ý';
    } else {
        hintBox.style.display = 'none';
        if (hintBtn) hintBtn.innerHTML = '💡 Xem từ vựng gợi ý';
    }
};

// Chuyển đề thi
window.switchReviewTest = function(testId) {
    currentReviewTestId = testId;
    renderFinalReviewView();
};

// Hàm phân tích và bắt lỗi sâu: Đầu câu không viết hoa, thiếu dấu câu, từ vựng/ngữ pháp
function evaluateReviewSentence(userVal, q) {
    const trimmed = (userVal || '').trim();
    if (!trimmed) {
        return {
            status: 'empty',
            isCorrect: false,
            score: 0,
            errorMsg: '⚠️ Bạn chưa nhập câu trả lời cho câu này!'
        };
    }

    const firstChar = trimmed.charAt(0);
    const isFirstCharLetter = /[a-zA-Z]/.test(firstChar);
    const isCapitalized = isFirstCharLetter ? (firstChar === firstChar.toUpperCase()) : true;
    const hasDot = trimmed.endsWith('.') || trimmed.endsWith('?');

    const cleanUser = window.normalizeText ? window.normalizeText(trimmed) : trimmed.toLowerCase().trim();
    
    // Kiểm tra trùng khớp đáp án chuẩn
    const matchedAns = q.a.find(ans => {
        const cleanAns = window.normalizeText ? window.normalizeText(ans) : ans.toLowerCase().trim();
        return cleanAns === cleanUser;
    });

    if (matchedAns) {
        if (isCapitalized && hasDot) {
            return {
                status: 'perfect',
                isCorrect: true,
                score: 1,
                errorMsg: '✅ <b>Xuất sắc!</b> Câu dịch hoàn toàn chính xác cả ngữ pháp, từ vựng và dấu câu.'
            };
        } else if (!isCapitalized && !hasDot) {
            return {
                status: 'punctuation_error',
                isCorrect: false,
                score: 0.5,
                errorMsg: '⚠️ <b>Lỗi hình thức câu:</b> Bạn dịch đúng nghĩa nhưng chưa <b>VIẾT HOA chữ cái đầu câu</b> và <b>thiếu DẤU CHẤM ở cuối câu</b>.'
            };
        } else if (!isCapitalized) {
            return {
                status: 'capital_error',
                isCorrect: false,
                score: 0.75,
                errorMsg: '⚠️ <b>Lỗi viết hoa:</b> Bạn dịch đúng nhưng chưa <b>VIẾT HOA chữ cái đầu câu</b>.'
            };
        } else {
            return {
                status: 'dot_error',
                isCorrect: false,
                score: 0.75,
                errorMsg: '⚠️ <b>Lỗi dấu câu:</b> Cuối câu bắt buộc phải có <b>DẤU CHẤM (.)</b> hoặc dấu chấm hỏi nhé.'
            };
        }
    } else {
        // Sai từ vựng / ngữ pháp
        let note = '';
        if (!isCapitalized) note += ' (Đồng thời đầu câu chưa viết hoa)';
        if (!hasDot) note += ' (Đồng thời cuối câu thiếu dấu chấm)';

        return {
            status: 'grammar_error',
            isCorrect: false,
            score: 0,
            errorMsg: `❌ <b>Chưa chính xác về từ vựng / ngữ pháp!</b>${note}<br><br><b>💡 Gợi ý câu chuẩn:</b><br>- ${q.a.slice(0, 3).join('<br>- ')}`
        };
    }
}

// Kiểm tra 1 câu đơn lẻ (nếu học viên muốn check thử)
window.checkSingleReviewSentence = function(testId, qIdx) {
    const test = finalReviewTests.find(t => t.id === testId);
    if (!test) return;
    const q = test.questions[qIdx];
    const val = (reviewUserAnswers[testId][qIdx] || '').trim();
    const expDiv = document.getElementById(`review-exp-${testId}-${qIdx}`);
    if (!expDiv) return;

    const evalResult = evaluateReviewSentence(val, q);
    expDiv.style.display = 'block';

    if (evalResult.status === 'perfect') {
        expDiv.style.background = '#f0fdf4';
        expDiv.style.color = '#166534';
        expDiv.style.border = '1px solid #bbf7d0';
        expDiv.innerHTML = `${evalResult.errorMsg}<br><div style="margin-top: 8px; font-size: 0.95rem; color: #15803d; border-top: 1px dashed #bbf7d0; padding-top: 6px;"><b>Phân tích:</b> ${q.exp}</div>`;
    } else if (evalResult.status.includes('error') && evalResult.isCorrect === false && evalResult.score > 0) {
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = `${evalResult.errorMsg}<br><div style="margin-top: 8px; font-size: 0.95rem; border-top: 1px dashed #fde68a; padding-top: 6px;"><b>Phân tích:</b> ${q.exp}</div>`;
    } else {
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = `${evalResult.errorMsg}<br><div style="margin-top: 8px; font-size: 0.95rem; color: #475569; border-top: 1px dashed #cbd5e1; padding-top: 6px;"><b>Phân tích:</b> ${q.exp}</div>`;
    }
};

// NỘP BÀI & KIỂM TRA ĐÁP ÁN (Rà soát toàn diện, chấm điểm, bắt lỗi chi tiết)
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
            const confirmSubmit = confirm(`Bạn còn ${unanswered} câu chưa điền câu dịch. Bạn có chắc chắn muốn nộp bài ngay bây giờ không?`);
            if (!confirmSubmit) return;
        }
    }

    // Dừng timer
    if (reviewTimers[testId]) {
        clearInterval(reviewTimers[testId]);
        reviewTimers[testId] = null;
    }
    reviewSubmitted[testId] = true;

    let perfectCount = 0;
    let totalScore = 0;
    let detailReports = [];

    test.questions.forEach((q, idx) => {
        const val = (reviewUserAnswers[testId][idx] || '').trim();
        const evalResult = evaluateReviewSentence(val, q);
        
        if (evalResult.status === 'perfect') perfectCount++;
        totalScore += evalResult.score;

        detailReports.push({
            qNum: idx + 1,
            userText: val || '<i>(Bỏ trống)</i>',
            eval: evalResult,
            standard: q.a[0]
        });

        // Hiển thị trực tiếp vào thẻ câu hỏi
        window.checkSingleReviewSentence(testId, idx);
    });

    // Cập nhật trạng thái nút
    const submitBtn = document.getElementById(`review-submit-btn-${testId}`);
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.innerHTML = `✅ ĐÃ NỘP BÀI & KIỂM TRA XONG (${perfectCount}/10 CÂU HOÀN HẢO)`;
    }

    // Mở Phiếu Báo Cáo Kết Quả Chuyên Nghiệp để học viên chụp màn hình gửi giáo viên
    showComprehensiveScorecard(test, perfectCount, totalScore, detailReports);

    if (typeof window.saveProgress === 'function') {
        window.saveProgress(true);
    }
};

// Bảng kết quả chuyên nghiệp để học viên CHỤP MÀN HÌNH GỬI GIÁO VIÊN
function showComprehensiveScorecard(test, perfectCount, totalScore, detailReports) {
    const studentName = localStorage.getItem('studentName') || 'Học viên';
    const studentClass = localStorage.getItem('studentClass') || 'Chưa cập nhật';
    const now = new Date();
    const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN');

    let modal = document.getElementById('comprehensive-scorecard-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'comprehensive-scorecard-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(15, 23, 42, 0.75); display: flex; align-items: center; justify-content: center; z-index: 99999; backdrop-filter: blur(8px); padding: 20px; box-sizing: border-box;';
        document.body.appendChild(modal);
    }

    let gradeTitle = "";
    let gradeBadgeColor = "";
    let gradeFeedback = "";

    if (perfectCount >= 9) {
        gradeTitle = "XUẤT SẮC (CHUẨN B2 / C1)";
        gradeBadgeColor = "#10b981";
        gradeFeedback = "Kỹ năng dựng câu và từ loại đạt mức hoàn hảo. Sẵn sàng bứt phá điểm số trong kỳ thi VSTEP Writing!";
    } else if (perfectCount >= 7) {
        gradeTitle = "ĐẠT YÊU CẦU (CHUẨN B1+ ĐẾN B2)";
        gradeBadgeColor = "#3b82f6";
        gradeFeedback = "Khả năng dịch câu rất tốt, nắm vững cấu trúc. Hãy chú ý hơn ở các dấu câu và trật tự từ để đạt điểm tuyệt đối!";
    } else if (perfectCount >= 5) {
        gradeTitle = "MỨC ĐỘ ĐẠT (CHUẨN B1)";
        gradeBadgeColor = "#f59e0b";
        gradeFeedback = "Đã nắm được ý nghĩa cơ bản nhưng còn mắc một số lỗi về chia thì, từ vựng hoặc dấu câu. Hãy rà soát lại lời giải chi tiết.";
    } else {
        gradeTitle = "CẦN CỐ GẮNG ÔN TẬP THÊM";
        gradeBadgeColor = "#ef4444";
        gradeFeedback = "Cần học lại lý thuyết của 7 chủ điểm và luyện tập dịch câu cẩn thận hơn để nâng cao độ chính xác.";
    }

    const itemsSummaryHtml = detailReports.map(item => `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; margin-bottom: 8px; text-align: left; font-size: 0.95rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-weight: 800; color: #1e293b;">Câu ${item.qNum}</span>
                <span>${item.eval.status === 'perfect' ? '<b style="color: #10b981;">✅ Đúng hoàn hảo (+1.0)</b>' : item.eval.score > 0 ? `<b style="color: #f59e0b;">⚠️ Lỗi hình thức (+${item.eval.score})</b>` : '<b style="color: #ef4444;">❌ Chưa chính xác (0)</b>'}</span>
            </div>
            <div style="color: #475569; margin-bottom: 4px;"><b>Bài làm:</b> ${item.userText}</div>
            ${item.eval.status !== 'perfect' ? `<div style="color: #166534; font-size: 0.9rem;"><b>Đáp án chuẩn:</b> ${item.standard}</div>` : ''}
        </div>
    `).join('');

    modal.innerHTML = `
        <div id="capture-scorecard-card" style="background: white; border-radius: 20px; width: 100%; max-width: 650px; max-height: 90vh; overflow-y: auto; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border-top: 8px solid ${gradeBadgeColor};">
            
            <!-- HEADER BÁO CÁO -->
            <div style="text-align: center; border-bottom: 2px dashed #e2e8f0; padding-bottom: 20px; margin-bottom: 20px;">
                <div style="display: inline-block; background: #eef2ff; color: #4338ca; padding: 4px 16px; border-radius: 20px; font-weight: 800; font-size: 0.85rem; margin-bottom: 8px;">
                    ENGLISH WITH MISS NGUYET • B1/B2 ONLINE
                </div>
                <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 1.6rem; font-weight: 900;">PHIẾU BÁO CÁO KẾT QUẢ TỔNG ÔN TẬP</h2>
                <div style="color: #64748b; font-size: 1rem; font-weight: 600;">${test.title}</div>
            </div>

            <!-- THÔNG TIN HỌC VIÊN -->
            <div style="background: #f8fafc; border-radius: 12px; padding: 14px 20px; margin-bottom: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 1rem;">
                <div>👤 <b>Học viên:</b> <span style="color: var(--primary-color); font-weight: 800;">${studentName}</span></div>
                <div>🏫 <b>Lớp:</b> <span style="color: var(--primary-color); font-weight: 800;">${studentClass}</span></div>
                <div>⏱️ <b>Thời gian nộp:</b> <span style="color: #475569;">${dateStr}</span></div>
                <div>🎯 <b>Thời lượng làm bài:</b> <span style="color: #475569;">${Math.floor((1200 - reviewTimeLeft[test.id]) / 60)} phút</span></div>
            </div>

            <!-- ĐIỂM SỐ CHÍNH -->
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="font-size: 3.5rem; font-weight: 900; color: ${gradeBadgeColor}; line-height: 1;">
                    ${perfectCount}<span style="font-size: 1.8rem; color: #94a3b8; font-weight: 600;"> / 10</span>
                </div>
                <div style="font-size: 1.15rem; font-weight: 800; color: ${gradeBadgeColor}; margin-top: 8px; text-transform: uppercase;">
                    🏆 ĐÁNH GIÁ: ${gradeTitle}
                </div>
                <p style="color: #475569; font-size: 1rem; margin: 8px auto 0 auto; max-width: 500px; font-style: italic;">
                    "${gradeFeedback}"
                </p>
            </div>

            <!-- TÓM TẮT CHI TIẾT 10 CÂU -->
            <div style="margin-bottom: 24px;">
                <h4 style="color: #1e293b; font-size: 1.05rem; margin: 0 0 12px 0; font-weight: 800; text-align: left;">
                    📋 Chi tiết rà soát từng câu:
                </h4>
                ${itemsSummaryHtml}
            </div>

            <!-- CHỮ KÝ HỌC VIÊN & LƯU Ý CHỤP ẢNH -->
            <div style="background: #fffbeb; border: 1px solid #fef08a; border-radius: 12px; padding: 14px; text-align: center; margin-bottom: 24px; color: #854d0e; font-size: 0.95rem;">
                📸 <b>HƯỚNG DẪN:</b> Học viên hãy <b>chụp ảnh màn hình bảng kết quả này</b> và gửi trực tiếp cho <b>Cô Nguyệt</b> để được lưu điểm danh bạ và nhận xét nhé!
            </div>

            <!-- NÚT ĐÓNG -->
            <div style="text-align: center;">
                <button onclick="document.getElementById('comprehensive-scorecard-modal').style.display='none';" style="padding: 12px 36px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: 800; font-size: 1.05rem; cursor: pointer; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">
                    Đóng Bảng Điểm
                </button>
            </div>

        </div>
    `;

    modal.style.display = 'flex';
}

// Render toàn bộ giao diện Tổng Ôn Tập
window.renderFinalReviewView = function() {
    const contentWrapper = document.getElementById('content-wrapper');
    if (!contentWrapper) return;

    const curTest = finalReviewTests.find(t => t.id === currentReviewTestId) || finalReviewTests[0];
    const isStarted = reviewStarted[curTest.id];
    const isSubmitted = reviewSubmitted[curTest.id];

    // Menu 4 bài tập
    const testTabsHtml = finalReviewTests.map((t, idx) => {
        const isActive = t.id === curTest.id;
        const isDone = reviewSubmitted[t.id];
        return `
            <button onclick="window.switchReviewTest('${t.id}')" style="padding: 10px 22px; border-radius: 24px; font-weight: 800; font-size: 1rem; border: 2px solid ${isActive ? 'var(--primary-color)' : '#e2e8f0'}; background: ${isActive ? 'var(--primary-color)' : 'white'}; color: ${isActive ? 'white' : '#475569'}; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: ${isActive ? '0 4px 12px rgba(87,70,227,0.25)' : 'none'}; transition: all 0.2s;">
                <span>${isDone ? '✅' : '📝'}</span> ${t.title}
            </button>
        `;
    }).join('');

    // Nếu chưa bấm BẮT ĐẦU LÀM BÀI -> Hiện màn hình chờ chuẩn sư phạm
    let mainBodyHtml = '';
    if (!isStarted) {
        mainBodyHtml = `
            <div style="background: white; border-radius: 18px; padding: 48px 32px; box-shadow: var(--shadow-md); text-align: center; border: 2px dashed #cbd5e1; margin-bottom: 30px;">
                <div style="font-size: 4rem; margin-bottom: 16px;">⏱️</div>
                <h2 style="color: var(--primary-color); font-size: 1.8rem; font-weight: 900; margin-bottom: 12px;">${curTest.title}</h2>
                <div style="display: inline-block; background: #eef2ff; color: #4338ca; padding: 6px 18px; border-radius: 20px; font-weight: 800; font-size: 1rem; margin-bottom: 20px;">
                    🎯 ${curTest.subTitle}
                </div>
                <p style="color: #475569; font-size: 1.15rem; max-width: 620px; margin: 0 auto 28px auto; line-height: 1.7;">
                    Bài thi gồm <b>10 câu dịch độc lập, vừa sức và thông dụng</b>, áp dụng các kiến thức cốt lõi của <b>7 chủ điểm ngữ pháp</b> (Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ, Từ nối).<br>
                    Thời gian làm bài: <b>20 phút</b>. Đồng hồ đếm ngược sẽ bắt đầu chạy ngay khi bạn bấm nút bên dưới.
                </p>
                <button onclick="window.startReviewTestSession('${curTest.id}')" style="padding: 16px 48px; background: linear-gradient(135deg, #5746e3 0%, #7c3aed 100%); color: white; border: none; border-radius: 35px; font-weight: 900; font-size: 1.25rem; cursor: pointer; box-shadow: 0 10px 25px rgba(87,70,227,0.35); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    🚀 BẮT ĐẦU LÀM BÀI (20 PHÚT)
                </button>
            </div>
        `;
    } else {
        // Đã bấm BẮT ĐẦU -> Hiển thị danh sách 10 câu và đồng hồ
        const questionsHtml = curTest.questions.map((q, idx) => {
            const userVal = (reviewUserAnswers[curTest.id] && reviewUserAnswers[curTest.id][idx]) || '';
            const hintsHtml = q.hints ? q.hints.map(h => `<span style="background: white; border: 1px solid #e2e8f0; padding: 4px 10px; border-radius: 6px; display: inline-block; margin: 3px 6px 3px 0;">• <b>${h.en}</b>: <i style="color: #475569;">${h.vn}</i></span>`).join('') : '';

            return `
                <div class="quiz-item" style="background: var(--bg-card); border-radius: 16px; padding: 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 22px;">
                    <div style="display: flex; gap: 14px; align-items: flex-start; margin-bottom: 14px;">
                        <div style="background: var(--primary-light); color: var(--primary-color); width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                        <div style="flex: 1;">
                            <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin: 4px 0 0 0; line-height: 1.6;">${q.q}</p>
                        </div>
                    </div>
                    
                    <div style="padding-left: 48px;">
                        <textarea id="review_ans_${curTest.id}_${idx}" rows="2" placeholder="Nhập câu dịch tiếng Anh (nhớ viết hoa đầu câu và có dấu chấm cuối câu)..." style="padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box; resize: vertical; font-family: inherit;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="reviewUserAnswers['${curTest.id}'][${idx}] = this.value; document.getElementById('review-exp-${curTest.id}-${idx}').style.display='none';">${userVal}</textarea>
                        
                        <!-- NÚT GỢI Ý TỪ VỰNG DƯỚI MỖI CÂU -->
                        <div style="display: flex; gap: 12px; align-items: center; margin-top: 10px; flex-wrap: wrap;">
                            <button id="review-hint-btn-${curTest.id}-${idx}" onclick="window.toggleReviewHints('${curTest.id}', ${idx})" style="padding: 6px 14px; background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; border-radius: 20px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
                                💡 Xem từ vựng gợi ý
                            </button>

                            <button onclick="window.checkSingleReviewSentence('${curTest.id}', ${idx})" style="padding: 6px 16px; background: white; color: var(--primary-color); border: 1.5px solid var(--primary-color); border-radius: 20px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">
                                🔍 Kiểm tra câu này
                            </button>
                        </div>

                        <!-- KHUNG TỪ VỰNG GỢI Ý (BẬT/TẮT KHI BẤM NÚT) -->
                        <div id="review-hint-${curTest.id}-${idx}" style="display: none; margin-top: 10px; padding: 12px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.95rem;">
                            <div style="font-weight: 800; color: #64748b; margin-bottom: 4px; font-size: 0.85rem; text-transform: uppercase;">Từ vựng trọng tâm:</div>
                            ${hintsHtml}
                        </div>

                        <div id="review-exp-${curTest.id}-${idx}" style="display: none; margin-top: 12px; padding: 12px 14px; border-radius: 10px; font-size: 1rem; line-height: 1.5;"></div>
                    </div>
                </div>
            `;
        }).join('');

        mainBodyHtml = `
            <!-- CARD THÔNG TIN ĐỀ THI & ĐỒNG HỒ ĐẾM NGƯỢC -->
            <div style="background: white; border-radius: 16px; padding: 22px 28px; box-shadow: var(--shadow-md); margin-bottom: 24px; border-top: 6px solid var(--primary-color);">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                    <div>
                        <span style="background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 4px 14px; border-radius: 20px; font-size: 0.85rem;">10 CÂU DỊCH THIẾT THỰC (B1 VSTEP)</span>
                        <h2 style="color: var(--primary-color); font-size: 1.45rem; font-weight: 900; margin: 8px 0 4px 0;">${curTest.title}</h2>
                        <p style="color: var(--text-muted); margin: 0; font-size: 1.05rem;">${curTest.subTitle}</p>
                    </div>

                    <!-- KHUNG ĐỒNG HỒ ĐẾM NGƯỢC 20 PHÚT -->
                    <div id="review-timer-${curTest.id}" style="padding: 10px 20px; border-radius: 30px; font-size: 1.05rem; border: 2px solid #c7d2fe; background: #eef2ff; color: #4338ca; display: flex; align-items: center; box-shadow: 0 2px 6px rgba(99,102,241,0.15);">
                        <!-- Timer display dynamically updated -->
                    </div>
                </div>
            </div>

            <!-- KHU VỰC 10 CÂU HỎI -->
            <div style="margin-bottom: 32px;">
                ${questionsHtml}
            </div>

            <!-- NÚT NỘP BÀI & KIỂM TRA ĐÁP ÁN -->
            <div style="text-align: center; margin-top: 36px; padding: 28px; background: white; border-radius: 18px; box-shadow: var(--shadow-sm); border: 1px solid #e2e8f0;">
                <button id="review-submit-btn-${curTest.id}" onclick="window.submitFinalReview('${curTest.id}')" style="padding: 16px 48px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; border-radius: 35px; font-weight: 900; font-size: 1.25rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 6px 16px rgba(16,185,129,0.35);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 20px rgba(16,185,129,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 16px rgba(16,185,129,0.35)'">
                    📝 NỘP BÀI & KIỂM TRA ĐÁP ÁN
                </button>
                <div style="font-size: 0.95rem; color: #64748b; margin-top: 12px;">Hệ thống sẽ rà soát kỹ lưỡng lỗi chính tả, chữ hoa đầu câu, dấu chấm câu và hiển thị Bảng điểm chi tiết để gửi cho giáo viên.</div>
            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 960px; margin: 0 auto; padding-bottom: 60px;">
            
            <!-- HEADER TỔNG ÔN TẬP -->
            <div style="margin-bottom: 24px;">
                <h1 class="page-title" style="text-align: left; margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                    <span>🎓</span> TỔNG ÔN TẬP (VIẾT THƯ & VIẾT LUẬN)
                </h1>
                <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">4 bài tập dịch câu thiết thực, vừa sức, áp dụng toàn diện 7 chủ điểm ngữ pháp vào kỳ thi VSTEP Writing.</p>
            </div>

            <!-- TABS CHỌN 4 ĐỀ THI -->
            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
                ${testTabsHtml}
            </div>

            <!-- MAIN CONTENT -->
            ${mainBodyHtml}

        </div>
    `;

    if (isStarted) {
        updateReviewTimerDisplay(curTest.id);
    }
};
