// =========================================================================
// ==================== HỆ THỐNG TỔNG ÔN TẬP (FINAL REVIEW) ====================
// =========================================================================

// Dữ liệu 4 bài tập dịch câu VỪA PHẢI, THỰC TẾ, C CƠ BẢN DÀNH CHO VIẾT THƯ & VIẾT LUẬN B1 VSTEP
const finalReviewTests = [
    {
        id: "test1",
        title: "BÀI TẬP 1 (CÁC CÂU DÙNG TRONG VIẾT THƯ - PHẦN 1)",
        subTitle: "Mở đầu thư, hỏi thăm, cảm ơn, mời hẹn & chia sẻ thông tin",
        desc: "Luyện tập dịch 10 câu ngắn gọn, vừa sức, áp dụng 7 chủ điểm ngữ pháp vào bài thi Viết Thư B1 (Writing Task 1).",
        questions: [
            {
                q: "Tôi viết lá thư này để kể cho bạn nghe về kỳ nghỉ hè của tôi.",
                a: [
                    "I am writing this letter to tell you about my summer vacation.",
                    "I am writing this letter to tell you about my summer holiday.",
                    "I am writing this email to tell you about my summer vacation.",
                    "I am writing this email to tell you about my summer holiday."
                ],
                hints: [
                    { en: "tell you about", vn: "kể cho bạn nghe về..." },
                    { en: "summer vacation / holiday", vn: "kỳ nghỉ hè" }
                ],
                exp: "• <b>Cấu trúc mở đầu thư quen thuộc:</b> <i>I am writing this letter to + V nguyên mẫu</i>.<br>• <b>Giới từ:</b> tell sb about sth."
            },
            {
                q: "Cảm ơn bạn rất nhiều vì món quà sinh nhật tuyệt vời của bạn.",
                a: [
                    "Thank you very much for your wonderful birthday gift.",
                    "Thank you so much for your wonderful birthday present.",
                    "Thank you very much for your great birthday gift.",
                    "Thanks a lot for your wonderful birthday present."
                ],
                hints: [
                    { en: "Thank you for...", vn: "Cảm ơn bạn vì..." },
                    { en: "birthday gift / present", vn: "món quà sinh nhật" }
                ],
                exp: "• <b>Cấu trúc cảm ơn:</b> <i>Thank you for + Cụm danh từ / V-ing</i>.<br>• <b>Tính từ đứng trước danh từ:</b> wonderful birthday gift."
            },
            {
                q: "Tôi rất vui khi biết rằng bạn đã vượt qua kỳ thi tiếng Anh.",
                a: [
                    "I am very glad to know that you passed the English exam.",
                    "I am very happy to know that you passed the English test.",
                    "I was very happy to hear that you passed the English exam.",
                    "I am glad to hear that you passed the English test."
                ],
                hints: [
                    { en: "glad / happy to know that", vn: "rất vui khi biết rằng..." },
                    { en: "pass the exam / test", vn: "vượt qua kỳ thi (thì Quá khứ đơn: passed)" }
                ],
                exp: "• <b>Tính từ chỉ cảm xúc:</b> <i>glad / happy to-V</i>.<br>• <b>Mệnh đề quá khứ đơn:</b> you passed the English exam."
            },
            {
                q: "Mặc dù tôi rất bận, tôi vẫn dành thời gian để viết thư cho bạn.",
                a: [
                    "Although I am very busy, I still spend time writing to you.",
                    "Although I am very busy, I still make time to write to you.",
                    "Though I am very busy, I still take time to write to you.",
                    "Even though I am very busy, I still spend time writing to you."
                ],
                hints: [
                    { en: "Although / Even though", vn: "Mặc dù (từ nối đứng đầu câu có dấu phẩy)" },
                    { en: "spend time + V-ing", vn: "dành thời gian làm gì" }
                ],
                exp: "• <b>Từ nối nhượng bộ:</b> Although đứng đầu câu có dấu phẩy ngăn cách.<br>• <b>Cấu trúc:</b> spend time + V-ing."
            },
            {
                q: "Bạn có thể đi xem phim với tôi vào tối thứ Bảy tuần này không?",
                a: [
                    "Can you go to the cinema with me this Saturday evening?",
                    "Can you go to the movies with me this Saturday night?",
                    "Could you go to the cinema with me this Saturday evening?",
                    "Would you like to go to the cinema with me this Saturday evening?"
                ],
                hints: [
                    { en: "go to the cinema / movies", vn: "đi xem phim" },
                    { en: "this Saturday evening", vn: "tối thứ Bảy tuần này" }
                ],
                exp: "• <b>Câu hỏi lời mời:</b> Can you + V...? / Would you like to + V...? (kết thúc bằng dấu chấm hỏi '?')."
            },
            {
                q: "Tôi xin lỗi vì đã không trả lời thư của bạn sớm hơn.",
                a: [
                    "I am sorry for not replying to your letter sooner.",
                    "I am sorry for not replying to your letter earlier.",
                    "I am sorry for not answering your email sooner.",
                    "I am very sorry that I did not reply to your letter earlier."
                ],
                hints: [
                    { en: "sorry for not + V-ing", vn: "xin lỗi vì đã không..." },
                    { en: "reply to your letter / email", vn: "trả lời thư của bạn" },
                    { en: "sooner / earlier", vn: "sớm hơn (trạng từ so sánh hơn)" }
                ],
                exp: "• <b>Cấu trúc xin lỗi:</b> <i>sorry for + V-ing</i>.<br>• <b>Giới từ:</b> reply to."
            },
            {
                q: "Tôi đã sống ở Hà Nội được hai năm và tôi rất yêu thành phố này.",
                a: [
                    "I have lived in Hanoi for two years, and I love this city very much.",
                    "I have lived in Ha Noi for two years, and I really love this city.",
                    "I have been living in Hanoi for two years, and I love this city very much.",
                    "I have lived in Hanoi for 2 years, and I love this city very much."
                ],
                hints: [
                    { en: "for two years", vn: "được hai năm (dấu hiệu HTHT)" },
                    { en: "and", vn: "và (nối 2 mệnh đề có dấu phẩy trước and)" }
                ],
                exp: "• <b>Thì Hiện tại hoàn thành:</b> have lived kết hợp giới từ <i>for</i>.<br>• <b>Từ nối FANBOYS:</b> and (có dấu phẩy khi nối 2 mệnh đề độc lập)."
            },
            {
                q: "Theo tôi, bạn nên mua một chiếc máy tính xách tay mới cho việc học của bạn.",
                a: [
                    "In my opinion, you should buy a new laptop for your study.",
                    "In my opinion, you should buy a new laptop for your studies.",
                    "In my view, you should buy a new laptop for your learning.",
                    "I think you should buy a new laptop for your study."
                ],
                hints: [
                    { en: "In my opinion,", vn: "Theo tôi, (có dấu phẩy)" },
                    { en: "should buy", vn: "nên mua (động từ tình thái + V nguyên mẫu)" },
                    { en: "laptop", vn: "máy tính xách tay" }
                ],
                exp: "• <b>Cụm từ đưa ra lời khuyên:</b> In my opinion, you should + V."
            },
            {
                q: "Nếu bạn có thời gian rảnh vào ngày mai, hãy gọi cho tôi nhé.",
                a: [
                    "If you have free time tomorrow, please call me.",
                    "If you have free time tomorrow, give me a call.",
                    "If you have some free time tomorrow, please call me."
                ],
                hints: [
                    { en: "free time", vn: "thời gian rảnh (danh từ không đếm được)" },
                    { en: "please call me", vn: "hãy gọi cho tôi nhé" }
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> Mệnh đề If đứng trước có dấu phẩy ngăn cách.<br>• <b>Câu mệnh lệnh:</b> please + V nguyên mẫu."
            },
            {
                q: "Tôi rất mong sớm nhận được thư của bạn.",
                a: [
                    "I look forward to hearing from you soon.",
                    "I am looking forward to hearing from you soon.",
                    "I look forward to receiving your letter soon."
                ],
                hints: [
                    { en: "look forward to + V-ing", vn: "rất mong đợi điều gì (câu kết thư kinh điển)" },
                    { en: "hear from you", vn: "nhận được tin/thư từ bạn" }
                ],
                exp: "• <b>Cụm động từ kết thư chuẩn nhất:</b> <i>look forward to + V-ing</i>."
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
                q: "Bạn có thể chỉ cho tôi cách đi đến bến xe buýt gần nhất được không?",
                a: [
                    "Can you show me the way to the nearest bus station?",
                    "Could you show me the way to the nearest bus stop?",
                    "Can you tell me how to get to the nearest bus station?",
                    "Could you please show me the way to the nearest bus stop?"
                ],
                hints: [
                    { en: "show me the way to", vn: "chỉ cho tôi đường đến..." },
                    { en: "the nearest bus station / stop", vn: "trạm xe buýt gần nhất (so sánh nhất)" }
                ],
                exp: "• <b>Câu hỏi yêu cầu thông tin:</b> Can/Could you + V...?<br>• <b>Tính từ so sánh nhất:</b> the nearest."
            },
            {
                q: "Chúng ta có thể gặp nhau tại quán cà phê đối diện trường học vào lúc 3 giờ chiều.",
                a: [
                    "We can meet at the coffee shop opposite the school at 3 p.m.",
                    "We can meet at the cafe opposite the school at 3 p.m.",
                    "We can meet at a coffee shop opposite the school at 3 o'clock.",
                    "We can meet at the coffee shop opposite the school at 3 PM."
                ],
                hints: [
                    { en: "opposite the school", vn: "đối diện trường học (giới từ nơi chốn)" },
                    { en: "at 3 p.m.", vn: "vào lúc 3 giờ chiều (giới từ chỉ giờ: at)" }
                ],
                exp: "• <b>Giới từ nơi chốn & thời gian:</b> at the coffee shop, opposite the school, at 3 p.m."
            },
            {
                q: "Thành thật mà nói, tôi không thích đi du lịch vào những ngày cuối tuần đông đúc.",
                a: [
                    "To be honest, I do not like traveling on crowded weekends.",
                    "Honestly, I don't like traveling on crowded weekends.",
                    "To be honest, I don't like travelling on crowded weekends.",
                    "To be honest, I do not like traveling at crowded weekends."
                ],
                hints: [
                    { en: "To be honest / Honestly", vn: "Thành thật mà nói (có dấu phẩy)" },
                    { en: "crowded weekends", vn: "những ngày cuối tuần đông đúc" }
                ],
                exp: "• <b>Từ liên kết:</b> To be honest,.<br>• <b>Động từ sở thích:</b> like + V-ing."
            },
            {
                q: "Tôi khuyên bạn nên mang theo một chiếc áo khoác ấm vì trời có thể rất lạnh.",
                a: [
                    "I advise you to bring a warm jacket because it can be very cold.",
                    "I recommend that you bring a warm jacket because it can be very cold.",
                    "I advise you to take a warm coat because it can be very cold."
                ],
                hints: [
                    { en: "advise you to + V", vn: "khuyên bạn nên làm gì" },
                    { en: "a warm jacket / coat", vn: "áo khoác ấm" },
                    { en: "because", vn: "vì / bởi vì (không có dấu phẩy trước because)" }
                ],
                exp: "• <b>Cấu trúc:</b> advise sb to-V.<br>• <b>Từ nối:</b> because."
            },
            {
                q: "Chuyến đi này sẽ giúp chúng ta thư giãn sau những ngày làm việc vất vả.",
                a: [
                    "This trip will help us relax after hard-working days.",
                    "This trip will help us relax after days of hard work.",
                    "This trip will help us to relax after busy working days."
                ],
                hints: [
                    { en: "help us relax", vn: "giúp chúng tôi thư giãn (help + O + V nguyên mẫu)" },
                    { en: "hard-working days", vn: "những ngày làm việc chăm chỉ / vất vả" }
                ],
                exp: "• <b>Đại từ tân ngữ:</b> us.<br>• <b>Thì Tương lai đơn:</b> will help."
            },
            {
                q: "Tôi đã mua vé máy bay ngày hôm qua, vì vậy bạn không cần phải lo lắng về điều đó.",
                a: [
                    "I bought the flight ticket yesterday, so you do not need to worry about it.",
                    "I bought the plane ticket yesterday, so you don't need to worry about that.",
                    "I bought flight tickets yesterday, so you don't have to worry about it."
                ],
                hints: [
                    { en: "bought (quá khứ của buy)", vn: "đã mua" },
                    { en: "so", vn: "vì vậy (từ nối 2 mệnh đề có dấu phẩy)" },
                    { en: "worry about", vn: "lo lắng về..." }
                ],
                exp: "• <b>Thì Quá khứ đơn:</b> bought.<br>• <b>Động từ + Giới từ:</b> worry about."
            },
            {
                q: "Bạn có thể gửi cho tôi một vài bức ảnh về bữa tiệc được không?",
                a: [
                    "Can you send me some photos of the party?",
                    "Could you send me some pictures of the party?",
                    "Can you send me some photos from the party?"
                ],
                hints: [
                    { en: "send me some photos", vn: "gửi cho tôi vài bức ảnh (cấu trúc S + V + O1 + O2)" },
                    { en: "of the party", vn: "về bữa tiệc" }
                ],
                exp: "• <b>Cấu trúc 2 tân ngữ:</b> send + me (O1) + some photos (O2)."
            },
            {
                q: "Nếu bạn không thể đến đúng giờ, xin vui lòng nhắn tin cho tôi trước.",
                a: [
                    "If you cannot come on time, please text me in advance.",
                    "If you can't arrive on time, please message me in advance.",
                    "If you cannot arrive on time, please text me beforehand."
                ],
                hints: [
                    { en: "on time", vn: "đúng giờ" },
                    { en: "in advance", vn: "trước / báo trước" }
                ],
                exp: "• <b>Thành ngữ giới từ:</b> on time (đúng giờ).<br>• <b>Cụm trạng ngữ:</b> in advance."
            },
            {
                q: "Tôi hy vọng chúng ta sẽ có một khoảng thời gian tuyệt vời cùng nhau vào tuần tới.",
                a: [
                    "I hope we will have a great time together next week.",
                    "I hope that we will have a wonderful time together next week.",
                    "I hope we will have a good time together next week."
                ],
                hints: [
                    { en: "have a great time", vn: "có khoảng thời gian tuyệt vời" },
                    { en: "together", vn: "cùng nhau (trạng từ)" }
                ],
                exp: "• <b>Cấu trúc:</b> I hope (that) + S + will V.<br>• <b>Trạng từ chỉ thời gian:</b> next week (đứng cuối câu)."
            },
            {
                q: "Hãy giữ liên lạc nhé, và nhớ gửi lời chào của tôi đến gia đình bạn.",
                a: [
                    "Please keep in touch, and remember to say hello to your family.",
                    "Keep in touch, and remember to send my regards to your family.",
                    "Please keep in touch, and remember to give my best wishes to your family."
                ],
                hints: [
                    { en: "keep in touch", vn: "giữ liên lạc" },
                    { en: "say hello to / send my regards to", vn: "gửi lời chào đến..." }
                ],
                exp: "• <b>Cụm động từ kết thư:</b> keep in touch.<br>• <b>Động từ:</b> remember to-V (nhớ phải làm gì)."
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
                q: "Ngày nay, ngày càng có nhiều người thích mua sắm trên internet hơn.",
                a: [
                    "Nowadays, more and more people prefer shopping on the internet.",
                    "Nowadays, more and more people like shopping online.",
                    "Today, more and more people prefer online shopping.",
                    "Nowadays, an increasing number of people prefer shopping online."
                ],
                hints: [
                    { en: "Nowadays / Today", vn: "Ngày nay (trạng từ mở đầu câu có dấu phẩy)" },
                    { en: "more and more people", vn: "ngày càng nhiều người" },
                    { en: "prefer + V-ing", vn: "thích làm gì hơn" }
                ],
                exp: "• <b>Trạng từ mở bài:</b> Nowadays,.<br>• <b>Lượng từ so sánh kép:</b> more and more people."
            },
            {
                q: "Theo ý kiến của tôi, đọc sách mang lại rất nhiều lợi ích cho sinh viên.",
                a: [
                    "In my opinion, reading books brings a lot of benefits to students.",
                    "In my view, reading books brings many benefits to students.",
                    "In my opinion, reading books provides a lot of benefits for students."
                ],
                hints: [
                    { en: "In my opinion,", vn: "Theo ý kiến của tôi" },
                    { en: "reading books", vn: "việc đọc sách (chủ ngữ V-ing chia động từ số ít)" },
                    { en: "benefits", vn: "lợi ích (danh từ số nhiều)" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> reading books (động từ chia số ít: brings).<br>• <b>Cụm từ:</b> bring benefits to sb."
            },
            {
                q: "Thứ nhất, việc tập thể dục mỗi ngày giúp con người giảm bớt căng thẳng.",
                a: [
                    "Firstly, doing exercise every day helps people reduce stress.",
                    "First of all, exercising every day helps people reduce stress.",
                    "Firstly, taking regular exercise helps people reduce stress."
                ],
                hints: [
                    { en: "Firstly, / First of all,", vn: "Thứ nhất, (từ nối trình bày ý 1)" },
                    { en: "doing exercise / exercising", vn: "tập thể dục" },
                    { en: "reduce stress", vn: "giảm bớt căng thẳng" }
                ],
                exp: "• <b>Từ liên kết:</b> Firstly, (có dấu phẩy).<br>• <b>Cấu trúc:</b> help sb (to) V: helps people reduce stress."
            },
            {
                q: "Hơn nữa, thức ăn nhanh thường chứa nhiều dầu mỡ và không tốt cho sức khỏe.",
                a: [
                    "Furthermore, fast food usually contains a lot of fat and is not good for health.",
                    "Moreover, fast food often contains a lot of oil and is not good for health.",
                    "In addition, fast food usually contains a lot of fat and is bad for health."
                ],
                hints: [
                    { en: "Furthermore, / Moreover,", vn: "Hơn nữa, (từ nối thêm ý)" },
                    { en: "fast food", vn: "thức ăn nhanh (danh từ không đếm được, chia động từ số ít)" },
                    { en: "good for health", vn: "tốt cho sức khỏe" }
                ],
                exp: "• <b>Từ nối:</b> Furthermore,.<br>• <b>Danh từ không đếm được:</b> fast food (động từ contains có 's').<br>• <b>Tính từ + Giới từ:</b> good for."
            },
            {
                q: "Ví dụ, nhiều trẻ em dành quá nhiều thời gian chơi trò chơi điện tử mỗi ngày.",
                a: [
                    "For example, many children spend too much time playing video games every day.",
                    "For instance, many kids spend too much time playing video games every day.",
                    "For example, many children spend too much time on video games daily."
                ],
                hints: [
                    { en: "For example, / For instance,", vn: "Ví dụ, (từ nối đưa ví dụ có dấu phẩy)" },
                    { en: "spend time + V-ing", vn: "dành thời gian làm gì" },
                    { en: "video games", vn: "trò chơi điện tử" }
                ],
                exp: "• <b>Từ nối:</b> For example,.<br>• <b>Cấu trúc:</b> spend time playing.<br>• <b>Danh từ số nhiều:</b> children."
            },
            {
                q: "Do đó, các bậc phụ huynh nên kiểm soát việc sử dụng điện thoại của con mình.",
                a: [
                    "Therefore, parents should control their children's phone use.",
                    "As a result, parents should control the use of phones by their children.",
                    "Therefore, parents should control the phone usage of their kids."
                ],
                hints: [
                    { en: "Therefore, / As a result,", vn: "Do đó, (từ nối chỉ kết quả có dấu phẩy)" },
                    { en: "control (v)", vn: "kiểm soát" },
                    { en: "their children's phone use", vn: "việc dùng điện thoại của con họ (sở hữu cách)" }
                ],
                exp: "• <b>Từ liên kết:</b> Therefore,.<br>• <b>Động từ tình thái:</b> should control."
            },
            {
                q: "Mặc dù ô tô rất thuận tiện, chúng gây ra nhiều ô nhiễm không khí trong thành phố.",
                a: [
                    "Although cars are very convenient, they cause a lot of air pollution in the city.",
                    "Although cars are very convenient, they cause much air pollution in the city.",
                    "Even though cars are very convenient, they cause a lot of air pollution in cities."
                ],
                hints: [
                    { en: "Although", vn: "Mặc dù (có dấu phẩy ngăn 2 mệnh đề)" },
                    { en: "convenient (adj)", vn: "thuận tiện" },
                    { en: "air pollution", vn: "ô nhiễm không khí (không đếm được)" }
                ],
                exp: "• <b>Từ nối:</b> Although đứng đầu câu có dấu phẩy.<br>• <b>Danh từ không đếm được:</b> air pollution."
            },
            {
                q: "Đi xe đạp không những bảo vệ môi trường mà còn tiết kiệm tiền.",
                a: [
                    "Riding a bicycle not only protects the environment but also saves money.",
                    "Cycling not only protects the environment but also saves money.",
                    "Riding bikes not only protects the environment but also saves money."
                ],
                hints: [
                    { en: "not only ... but also ...", vn: "không những... mà còn... (liên từ tương quan)" },
                    { en: "protect the environment", vn: "bảo vệ môi trường" },
                    { en: "save money", vn: "tiết kiệm tiền" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Riding a bicycle.<br>• <b>Liên từ tương quan:</b> not only ... but also ... (động từ chia số ít: protects, saves)."
            },
            {
                q: "Nếu học sinh học tập chăm chỉ, họ sẽ đạt được điểm cao trong kỳ thi.",
                a: [
                    "If students study hard, they will get high scores in the exam.",
                    "If students study hard, they will achieve high marks in the exam.",
                    "If students work hard, they will get good grades in the test."
                ],
                hints: [
                    { en: "study hard", vn: "học tập chăm chỉ (hard là trạng từ)" },
                    { en: "high scores / marks", vn: "điểm cao" }
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> If + Hiện tại đơn, Tương lai đơn.<br>• <b>Trạng từ:</b> hard."
            },
            {
                q: "Tóm lại, học tiếng Anh là một kỹ năng vô cùng quan trọng đối với giới trẻ.",
                a: [
                    "In conclusion, learning English is an extremely important skill for young people.",
                    "In short, learning English is an extremely important skill for young people.",
                    "To sum up, learning English is an very important skill for the youth.",
                    "In summary, learning English is a very important skill for young people."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại, (từ nối kết bài luận)" },
                    { en: "learning English", vn: "việc học tiếng Anh (chủ ngữ V-ing)" },
                    { en: "important skill", vn: "kỹ năng quan trọng (mạo từ: an extremely important skill)" }
                ],
                exp: "• <b>Từ liên kết kết bài:</b> In conclusion,.<br>• <b>Trạng từ chỉ mức độ:</b> extremely."
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
                q: "Để giải quyết vấn đề này, chính phủ nên xây dựng thêm nhiều công viên công cộng.",
                a: [
                    "To solve this problem, the government should build more public parks.",
                    "To solve this issue, the government should build more public parks.",
                    "In order to solve this problem, the government should build more public parks."
                ],
                hints: [
                    { en: "To solve this problem,", vn: "Để giải quyết vấn đề này, (mục đích đứng đầu câu)" },
                    { en: "the government", vn: "chính phủ" },
                    { en: "public parks", vn: "công viên công cộng" }
                ],
                exp: "• <b>Mệnh đề chỉ mục đích:</b> To solve this problem, (có dấu phẩy).<br>• <b>Động từ tình thái:</b> should build."
            },
            {
                q: "Một mặt, sống ở thành phố lớn rất thuận tiện cho công việc và học tập.",
                a: [
                    "On the one hand, living in a big city is very convenient for work and study.",
                    "On the one hand, living in big cities is very convenient for work and studying.",
                    "On the one hand, living in a large city is very convenient for jobs and education."
                ],
                hints: [
                    { en: "On the one hand,", vn: "Một mặt, (từ nối so sánh 2 mặt của vấn đề)" },
                    { en: "living in a big city", vn: "sống ở thành phố lớn (chủ ngữ V-ing)" },
                    { en: "convenient for", vn: "thuận tiện cho việc gì" }
                ],
                exp: "• <b>Từ liên kết:</b> On the one hand,.<br>• <b>Tính từ + Giới từ:</b> convenient for."
            },
            {
                q: "Mặt khác, chi phí sinh hoạt ở đây đắt hơn nhiều so với ở nông thôn.",
                a: [
                    "On the other hand, the cost of living here is much more expensive than in the countryside.",
                    "On the other hand, the cost of living here is much higher than in rural areas.",
                    "On the other hand, living costs here are much more expensive than in the countryside."
                ],
                hints: [
                    { en: "On the other hand,", vn: "Mặt khác, (có dấu phẩy)" },
                    { en: "the cost of living", vn: "chi phí sinh hoạt" },
                    { en: "much more expensive than", vn: "đắt hơn nhiều so với (so sánh hơn)" },
                    { en: "in the countryside", vn: "ở nông thôn" }
                ],
                exp: "• <b>Từ liên kết:</b> On the other hand,.<br>• <b>So sánh hơn với tính từ dài:</b> much more expensive than."
            },
            {
                q: "Chúng ta cần bảo vệ các loài động vật hoang dã vì chúng đang gặp nguy hiểm.",
                a: [
                    "We need to protect wild animals because they are in danger.",
                    "We have to protect wild animals because they are in danger.",
                    "We should protect wild animals because they are endangered."
                ],
                hints: [
                    { en: "wild animals", vn: "động vật hoang dã" },
                    { en: "in danger / endangered", vn: "gặp nguy hiểm / có nguy cơ tuyệt chủng" }
                ],
                exp: "• <b>Cấu trúc:</b> need to-V.<br>• <b>Cụm giới từ:</b> in danger."
            },
            {
                q: "Trường học nên dạy cho học sinh cách tự bảo vệ bản thân khi dùng mạng xã hội.",
                a: [
                    "Schools should teach students how to protect themselves when using social media.",
                    "Schools should teach students how to protect themselves while using social networks.",
                    "Schools ought to teach students how to protect themselves when using social media."
                ],
                hints: [
                    { en: "teach students how to + V", vn: "dạy học sinh cách làm gì" },
                    { en: "protect themselves", vn: "tự bảo vệ bản thân họ (đại từ phản thân: themselves)" },
                    { en: "social media", vn: "mạng xã hội" }
                ],
                exp: "• <b>Đại từ phản thân:</b> themselves (thay cho students).<br>• <b>Cấu trúc từ để hỏi:</b> how to + V."
            },
            {
                q: "Sử dụng túi vải thay vì túi nilon là một thói quen tốt để bảo vệ thiên nhiên.",
                a: [
                    "Using cloth bags instead of plastic bags is a good habit to protect nature.",
                    "Using fabric bags instead of plastic bags is a good habit to protect nature.",
                    "Using reusable bags instead of plastic bags is a good habit to protect the environment."
                ],
                hints: [
                    { en: "instead of + N", vn: "thay vì..." },
                    { en: "plastic bags", vn: "túi nilon / túi nhựa" },
                    { en: "protect nature", vn: "bảo vệ thiên nhiên" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Using cloth bags.<br>• <b>Giới từ:</b> instead of."
            },
            {
                q: "Hầu hết các chuyên gia đều đồng ý rằng làm việc nhóm mang lại hiệu quả cao hơn.",
                a: [
                    "Most experts agree that teamwork brings higher efficiency.",
                    "Most experts agree that working in teams is more effective.",
                    "Most of the experts agree that working in groups brings higher efficiency."
                ],
                hints: [
                    { en: "Most experts agree that", vn: "Hầu hết các chuyên gia đều đồng ý rằng..." },
                    { en: "teamwork", vn: "làm việc nhóm (danh từ số ít)" },
                    { en: "higher efficiency / more effective", vn: "hiệu quả cao hơn" }
                ],
                exp: "• <b>Lượng từ:</b> Most experts (động từ agree nguyên mẫu).<br>• <b>Mệnh đề danh từ:</b> that + S + V."
            },
            {
                q: "Tuy nhiên, nhiều người vẫn chưa nhận thức được tầm quan trọng của việc tiết kiệm nước.",
                a: [
                    "However, many people are not yet aware of the importance of saving water.",
                    "However, many people are still not aware of the importance of saving water.",
                    "Nevertheless, many people are not aware of the importance of saving water yet."
                ],
                hints: [
                    { en: "However,", vn: "Tuy nhiên, (từ nối đứng đầu câu có dấu phẩy)" },
                    { en: "aware of", vn: "nhận thức về (tính từ + giới từ)" },
                    { en: "the importance of + V-ing", vn: "tầm quan trọng của..." }
                ],
                exp: "• <b>Từ liên kết:</b> However,.<br>• <b>Tính từ + Giới từ:</b> aware of."
            },
            {
                q: "Mỗi người chúng ta đều có thể đóng góp vào việc bảo vệ môi trường bằng những hành động nhỏ.",
                a: [
                    "Each of us can contribute to protecting the environment with small actions.",
                    "Every one of us can contribute to protecting the environment with small actions.",
                    "Each of us can contribute to environmental protection through small actions."
                ],
                hints: [
                    { en: "Each of us", vn: "Mỗi người chúng ta" },
                    { en: "contribute to + V-ing", vn: "đóng góp vào việc gì" },
                    { en: "small actions", vn: "những hành động nhỏ" }
                ],
                exp: "• <b>Cụm động từ + Giới từ:</b> contribute to + V-ing/Noun.<br>• <b>Giới từ:</b> with small actions."
            },
            {
                q: "Tóm lại, cả cá nhân và xã hội cần phải chung tay để tạo nên một tương lai tốt đẹp hơn.",
                a: [
                    "In conclusion, both individuals and society need to join hands to create a better future.",
                    "To sum up, both individuals and society must join hands to create a better future.",
                    "In summary, both individuals and society need to work together to create a better future."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại, (kết bài luận)" },
                    { en: "both ... and ...", vn: "cả... và... (liên từ tương quan)" },
                    { en: "join hands to + V", vn: "chung tay để làm gì" }
                ],
                exp: "• <b>Từ nối kết bài:</b> In conclusion,.<br>• <b>Liên từ tương quan:</b> both ... and ..."
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
