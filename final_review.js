// =========================================================================
// ==================== HỆ THỐNG TỔNG ÔN TẬP (FINAL REVIEW) ====================
// =========================================================================

// Dữ liệu 4 bài tập dịch câu VỪA PHẢI, THỰC TẾ, CƠ BẢN DÀNH CHO VIẾT THƯ & VIẾT LUẬN B1 VSTEP
const finalReviewTests = [
    {
        id: "test1",
        title: "BÀI TẬP 1",
        subTitle: "Thông tin, thói quen, kế hoạch & miêu tả thực tế",
        desc: "Luyện tập dịch 10 câu nòng cốt, rõ ràng, chuẩn ngữ pháp, tránh các lỗi dịch từng từ (word-by-word) thường gặp.",
        questions: [
            {
                q: "Tôi thường dành hai tiếng mỗi ngày để học tiếng Anh.",
                a: [
                    "I usually spend two hours every day studying English.",
                    "I usually spend two hours every day studying English",
                    "I usually spend 2 hours every day studying English.",
                    "I often spend two hours every day studying English.",
                    "I usually spend two hours a day studying English."
                ],
                hints: [
                    { en: "usually / often", vn: "thường (trạng từ tần suất đứng trước động từ)" },
                    { en: "spend time + V-ing", vn: "dành thời gian làm gì" },
                    { en: "every day", vn: "mỗi ngày (đứng cuối câu)" }
                ],
                exp: "• <b>Cấu trúc:</b> <i>spend + thời gian + V-ing</i>.<br>• <b>Vị trí trạng từ chỉ tần suất:</b> đứng trước động từ thường (I usually spend)."
            },
            {
                q: "Thành phố này có rất nhiều địa điểm thú vị để tham quan.",
                a: [
                    "This city has a lot of interesting places to visit.",
                    "This city has a lot of interesting places to visit",
                    "This city has many interesting places to visit.",
                    "There are many interesting places to visit in this city.",
                    "There are a lot of interesting places to visit in this city."
                ],
                hints: [
                    { en: "interesting places", vn: "địa điểm thú vị (tính từ đứng trước danh từ)" },
                    { en: "to visit", vn: "để tham quan (to-V)" }
                ],
                exp: "• <b>Trật tự từ:</b> Tính từ đứng trước danh từ (interesting places).<br>• <b>Động từ chỉ mục đích:</b> to visit."
            },
            {
                q: "Tôi muốn giới thiệu một cuốn sách hay cho bạn.",
                a: [
                    "I want to recommend a good book to you.",
                    "I want to recommend a good book to you",
                    "I want to introduce a good book to you.",
                    "I would like to recommend a good book to you.",
                    "I want to suggest a good book to you."
                ],
                hints: [
                    { en: "recommend / introduce ... to you", vn: "giới thiệu... cho bạn" },
                    { en: "a good book", vn: "một cuốn sách hay" }
                ],
                exp: "• <b>Cấu trúc:</b> want to + V nguyên mẫu.<br>• <b>Giới từ:</b> recommend sth to sb."
            },
            {
                q: "Ngủ đủ giấc giúp học sinh tập trung tốt hơn trong lớp học.",
                a: [
                    "Getting enough sleep helps students concentrate better in class.",
                    "Getting enough sleep helps students concentrate better in class",
                    "Getting enough sleep helps students focus better in class.",
                    "Getting enough sleep helps students focus better in class",
                    "Sleeping enough helps students concentrate better in class.",
                    "Getting enough sleep helps students concentrate better during class."
                ],
                hints: [
                    { en: "Getting enough sleep", vn: "Ngủ đủ giấc (chủ ngữ Danh động từ chia động từ số ít)" },
                    { en: "concentrate / focus better", vn: "tập trung tốt hơn (trạng từ so sánh hơn)" },
                    { en: "in class", vn: "trong lớp học" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Getting enough sleep (chia động từ số ít: helps).<br>• <b>Cấu trúc:</b> help + O + V nguyên mẫu (concentrate / focus).<br>• <b>Trạng từ so sánh hơn:</b> better."
            },
            {
                q: "Học ngoại ngữ giúp con người dễ dàng tìm được một công việc tốt.",
                a: [
                    "Learning a foreign language helps people easily find a good job.",
                    "Learning a foreign language helps people easily find a good job",
                    "Learning a foreign language helps people find a good job easily.",
                    "Learning a foreign language helps people find a good job easily",
                    "Studying a foreign language helps people easily find a good job.",
                    "Learning foreign languages helps people easily find a good job."
                ],
                hints: [
                    { en: "Learning a foreign language", vn: "Học ngoại ngữ (chủ ngữ Danh động từ)" },
                    { en: "easily find", vn: "dễ dàng tìm được (trạng từ đứng trước động từ)" },
                    { en: "a good job", vn: "một công việc tốt" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Learning a foreign language (chia động từ số ít: helps).<br>• <b>Cấu trúc:</b> help + O + V (find).<br>• <b>Trạng từ:</b> easily."
            },
            {
                q: "Thời tiết ở đây rất mát mẻ và dễ chịu vào mùa hè.",
                a: [
                    "The weather here is very cool and pleasant in the summer.",
                    "The weather here is very cool and pleasant in the summer",
                    "The weather here is very cool and comfortable in the summer.",
                    "The weather here is very cool and pleasant in summer."
                ],
                hints: [
                    { en: "cool and pleasant", vn: "mát mẻ và dễ chịu (tính từ)" },
                    { en: "in the summer", vn: "vào mùa hè (giới từ chỉ mùa: in)" }
                ],
                exp: "• <b>Liên từ đẳng lập:</b> cool and pleasant.<br>• <b>Giới từ chỉ mùa:</b> in the summer."
            },
            {
                q: "Tôi cảm thấy rất hào hứng về chuyến đi sắp tới của chúng tôi.",
                a: [
                    "I feel very excited about our upcoming trip.",
                    "I feel very excited about our upcoming trip",
                    "I am very excited about our upcoming trip.",
                    "I feel really excited about our upcoming trip.",
                    "I feel very excited about our next trip."
                ],
                hints: [
                    { en: "feel excited about", vn: "cảm thấy hào hứng về... (tính từ đuôi -ed chỉ cảm xúc con người)" },
                    { en: "upcoming trip", vn: "chuyến đi sắp tới" }
                ],
                exp: "• <b>Động từ nối + Tính từ:</b> feel + excited about (dùng đuôi -ed cho cảm xúc người).<br>• <b>Tính từ sở hữu:</b> our upcoming trip."
            },
            {
                q: "Bảo tàng mở cửa từ 8 giờ sáng đến 5 giờ chiều mỗi ngày.",
                a: [
                    "The museum opens from 8 a.m. to 5 p.m. every day.",
                    "The museum opens from 8 a.m. to 5 p.m. every day",
                    "The museum is open from 8 a.m. to 5 p.m. every day.",
                    "The museum opens from 8 AM to 5 PM every day.",
                    "The museum opens from 8:00 AM to 5:00 PM every day."
                ],
                hints: [
                    { en: "opens", vn: "mở cửa (Hiện tại đơn số ít chỉ lịch trình)" },
                    { en: "from ... to ...", vn: "từ... đến..." },
                    { en: "every day", vn: "mỗi ngày" }
                ],
                exp: "• <b>Thì Hiện tại đơn:</b> The museum (số ít) chia động từ opens có 's'.<br>• <b>Cặp giới từ chỉ thời gian:</b> from ... to ..."
            },
            {
                q: "Mặc dù trời mưa to, chúng tôi vẫn quyết định đi cắm trại.",
                a: [
                    "Although it rained heavily, we still decided to go camping.",
                    "Although it rained heavily, we still decided to go camping",
                    "Even though it rained heavily, we still decided to go camping.",
                    "Although it was raining heavily, we still decided to go camping.",
                    "Though it rained heavily, we still decided to go camping."
                ],
                hints: [
                    { en: "Although", vn: "Mặc dù (mệnh đề đứng đầu câu có dấu phẩy)" },
                    { en: "rained heavily", vn: "mưa to (heavily là trạng từ bổ nghĩa cho rained)" },
                    { en: "decided to go camping", vn: "quyết định đi cắm trại" }
                ],
                exp: "• <b>Liên từ chỉ sự nhượng bộ:</b> Although.<br>• <b>Trạng từ:</b> heavily.<br>• <b>Cấu trúc:</b> decide to-V."
            },
            {
                q: "Chuyến đi này sẽ mang lại cho bạn nhiều trải nghiệm tuyệt vời.",
                a: [
                    "This trip will bring you many wonderful experiences.",
                    "This trip will bring you many wonderful experiences",
                    "This trip will bring you many great experiences.",
                    "This journey will bring you many wonderful experiences.",
                    "This trip will give you many wonderful experiences."
                ],
                hints: [
                    { en: "will bring you", vn: "sẽ mang lại cho bạn (động từ 2 tân ngữ)" },
                    { en: "wonderful experiences", vn: "những trải nghiệm tuyệt vời" }
                ],
                exp: "• <b>Thì Tương lai đơn:</b> will bring.<br>• <b>Động từ 2 tân ngữ:</b> bring + you (tân ngữ 1) + many wonderful experiences (tân ngữ 2)."
            }
        ]
    },
    {
        id: "test2",
        title: "BÀI TẬP 2",
        subTitle: "Đưa ra lời khuyên, đề xuất kế hoạch, chỉ dẫn & chào tạm biệt",
        desc: "Luyện tập dịch 10 câu quen thuộc dùng để viết phần thân bài và kết thư trong Task 1.",
        questions: [
            {
                q: "Bạn có thể chỉ cho tôi một khách sạn tốt ở gần trung tâm không?",
                a: [
                    "Can you recommend a good hotel near the center?",
                    "Can you show me a good hotel near the center?",
                    "Could you recommend a good hotel near the city center?",
                    "Could you show me a good hotel near the center?",
                    "Can you suggest a good hotel near the center?"
                ],
                hints: [
                    { en: "recommend / show me", vn: "giới thiệu / chỉ cho tôi" },
                    { en: "a good hotel", vn: "khách sạn tốt" },
                    { en: "near the center", vn: "ở gần trung tâm (giới từ nơi chốn: near)" }
                ],
                exp: "• <b>Câu hỏi yêu cầu lịch sự:</b> Can/Could you + V...?<br>• <b>Giới từ chỉ nơi chốn:</b> near the center."
            },
            {
                q: "Chúng ta có thể gặp nhau ở quán cà phê trước trường vào lúc 9 giờ sáng.",
                a: [
                    "We can meet at the coffee shop in front of the school at 9 a.m.",
                    "We can meet at the cafe in front of the school at 9 a.m.",
                    "We can meet at the coffee shop in front of the school at 9 AM.",
                    "We can meet at a coffee shop in front of the school at 9 o'clock."
                ],
                hints: [
                    { en: "in front of the school", vn: "ở trước trường (giới từ chỉ vị trí)" },
                    { en: "at 9 a.m.", vn: "vào lúc 9 giờ sáng (giới từ chỉ giờ: at)" }
                ],
                exp: "• <b>Giới từ chỉ nơi chốn:</b> at the coffee shop, in front of the school.<br>• <b>Giới từ chỉ thời gian:</b> at 9 a.m."
            },
            {
                q: "Theo tôi, bạn nên mua một chiếc máy tính xách tay để phục vụ việc học.",
                a: [
                    "In my opinion, you should buy a laptop for your study.",
                    "In my opinion, you should buy a laptop for your study",
                    "In my view, you should buy a laptop for your studies.",
                    "I think you should buy a laptop for your study.",
                    "In my opinion, you should buy a new laptop for your study."
                ],
                hints: [
                    { en: "In my opinion,", vn: "Theo tôi, (có dấu phẩy)" },
                    { en: "should buy a laptop", vn: "nên mua một chiếc máy tính xách tay" },
                    { en: "for your study", vn: "cho việc học của bạn" }
                ],
                exp: "• <b>Cụm từ đưa lời khuyên:</b> In my opinion, you should + V.<br>• <b>Giới từ:</b> for your study."
            },
            {
                q: "Tôi khuyên bạn nên mang theo áo ấm vì thời tiết ở đây khá lạnh.",
                a: [
                    "I advise you to bring warm clothes because the weather here is quite cold.",
                    "I advise you to take warm clothes because the weather here is quite cold.",
                    "I suggest that you bring warm clothes because the weather here is quite cold.",
                    "I recommend you bring warm clothes because the weather here is quite cold."
                ],
                hints: [
                    { en: "advise you to bring...", vn: "khuyên bạn nên mang theo..." },
                    { en: "warm clothes", vn: "áo ấm / quần áo ấm" },
                    { en: "quite cold", vn: "khá lạnh (quite là trạng từ chỉ mức độ)" }
                ],
                exp: "• <b>Cấu trúc:</b> advise sb to-V.<br>• <b>Từ nối:</b> because (không có dấu phẩy phía trước).<br>• <b>Trạng từ mức độ:</b> quite cold."
            },
            {
                q: "Tôi đã đặt vé máy bay rồi, vì vậy bạn không cần phải lo lắng.",
                a: [
                    "I have booked the flight tickets, so you do not need to worry.",
                    "I have booked the flight tickets, so you do not need to worry",
                    "I booked the flight tickets, so you do not need to worry.",
                    "I have already booked the flight ticket, so you do not need to worry.",
                    "I bought the flight tickets, so you don't have to worry."
                ],
                hints: [
                    { en: "have booked the flight tickets", vn: "đã đặt vé máy bay (HTHT)" },
                    { en: "so", vn: "vì vậy (từ nối có dấu phẩy)" },
                    { en: "do not need to worry", vn: "không cần phải lo lắng" }
                ],
                exp: "• <b>Thì Hiện tại hoàn thành:</b> have booked.<br>• <b>Từ nối FANBOYS:</b> so (nối 2 mệnh đề có dấu phẩy)."
            },
            {
                q: "Chuyến đi này sẽ là một cơ hội tuyệt vời để chúng ta thư giãn cùng nhau.",
                a: [
                    "This trip will be a great opportunity for us to relax together.",
                    "This trip will be a great opportunity for us to relax together",
                    "This trip will be a wonderful opportunity for us to relax together.",
                    "This trip will be a great chance for us to relax together."
                ],
                hints: [
                    { en: "a great opportunity", vn: "một cơ hội tuyệt vời" },
                    { en: "for us to relax", vn: "để chúng ta thư giãn (for sb to-V)" },
                    { en: "together", vn: "cùng nhau (trạng từ)" }
                ],
                exp: "• <b>Thì Tương lai đơn:</b> will be.<br>• <b>Cấu trúc:</b> an opportunity for sb to-V."
            },
            {
                q: "Bạn có thể gửi cho tôi một vài bức ảnh về chuyến đi vừa rồi được không?",
                a: [
                    "Can you send me some photos of the recent trip?",
                    "Could you send me some photos of the recent trip?",
                    "Can you send me some pictures of the last trip?",
                    "Could you please send me some photos of the recent trip?"
                ],
                hints: [
                    { en: "send me some photos", vn: "gửi cho tôi vài bức ảnh (S + V + O1 + O2)" },
                    { en: "recent trip / last trip", vn: "chuyến đi vừa rồi" }
                ],
                exp: "• <b>Cấu trúc 2 tân ngữ:</b> send + me (O1) + some photos (O2).<br>• <b>Tính từ:</b> recent trip."
            },
            {
                q: "Nếu bạn đến muộn, xin vui lòng gọi điện thoại cho tôi trước.",
                a: [
                    "If you arrive late, please call me in advance.",
                    "If you arrive late, please call me in advance",
                    "If you come late, please call me in advance.",
                    "If you arrive late, please phone me in advance.",
                    "If you are late, please call me in advance."
                ],
                hints: [
                    { en: "arrive late", vn: "đến muộn (late là trạng từ)" },
                    { en: "in advance", vn: "trước / báo trước" }
                ],
                exp: "• <b>Câu điều kiện loại 1 kết hợp câu mệnh lệnh:</b> If + HTĐ, please + V.<br>• <b>Cụm trạng ngữ:</b> in advance."
            },
            {
                q: "Tôi tin rằng bạn sẽ vượt qua kỳ thi phỏng vấn một cách dễ dàng.",
                a: [
                    "I believe that you will pass the interview easily.",
                    "I believe that you will pass the interview easily",
                    "I believe you will pass the job interview easily.",
                    "I am sure that you will pass the interview easily."
                ],
                hints: [
                    { en: "pass the interview", vn: "vượt qua kỳ phỏng vấn" },
                    { en: "easily", vn: "một cách dễ dàng (trạng từ chỉ thể cách đứng cuối câu)" }
                ],
                exp: "• <b>Mệnh đề danh từ:</b> I believe that + S + V.<br>• <b>Trạng từ chỉ cách thức:</b> easily (thêm -ly từ tính từ easy)."
            },
            {
                q: "Tập thể dục buổi sáng giúp tôi cảm thấy tràn đầy năng lượng cả ngày.",
                a: [
                    "Exercising in the morning helps me feel energetic all day.",
                    "Exercising in the morning helps me feel energetic all day",
                    "Exercising in the morning helps me feel full of energy all day.",
                    "Morning exercise helps me feel energetic all day.",
                    "Doing exercise in the morning helps me feel energetic all day."
                ],
                hints: [
                    { en: "Exercising in the morning", vn: "Tập thể dục buổi sáng (chủ ngữ Danh động từ)" },
                    { en: "feel energetic", vn: "cảm thấy tràn đầy năng lượng" },
                    { en: "all day", vn: "cả ngày" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Exercising (chia động từ số ít: helps).<br>• <b>Cấu trúc:</b> help + O + V (feel).<br>• <b>Tính từ:</b> energetic."
            }
        ]
    },
    {
        id: "test3",
        title: "BÀI TẬP 3",
        subTitle: "Giới trẻ, Giáo dục, Thói quen & Sức khỏe",
        desc: "Luyện tập dịch 10 câu nòng cốt, tự nhiên, thường xuyên xuất hiện trong các bài luận Writing Task 2.",
        questions: [
            {
                q: "Nghe nhạc là một cách hiệu quả để thư giãn sau giờ học.",
                a: [
                    "Listening to music is an effective way to relax after school.",
                    "Listening to music is an effective way to relax after school",
                    "Listening to music is an effective way to relax after class.",
                    "Listening to music is a great way to relax after school."
                ],
                hints: [
                    { en: "Listening to music", vn: "Nghe nhạc (chủ ngữ Danh động từ chia động từ số ít)" },
                    { en: "an effective way", vn: "một cách hiệu quả (mạo từ 'an' trước nguyên âm)" },
                    { en: "relax after school", vn: "thư giãn sau giờ học" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Listening to music (chia to be số ít: is).<br>• <b>Cụm danh từ:</b> an effective way.<br>• <b>Giới từ:</b> after school."
            },
            {
                q: "Người trẻ nên ăn uống lành mạnh và tập thể dục thường xuyên để giữ sức khỏe.",
                a: [
                    "Young people should eat healthily and exercise regularly to stay healthy.",
                    "Young people should eat healthily and exercise regularly to stay healthy",
                    "Young people should eat healthily and exercise regularly to keep fit.",
                    "Young people should eat healthily and exercise regularly to maintain good health.",
                    "Young people should eat healthy food and exercise regularly to stay healthy."
                ],
                hints: [
                    { en: "eat healthily", vn: "ăn uống lành mạnh (healthily là trạng từ)" },
                    { en: "exercise regularly", vn: "tập thể dục thường xuyên (regularly là trạng từ)" },
                    { en: "stay healthy / keep fit", vn: "giữ sức khỏe" }
                ],
                exp: "• <b>Động từ tình thái:</b> should + V nguyên mẫu.<br>• <b>Trạng từ chỉ cách thức:</b> healthily, regularly.<br>• <b>Mục đích:</b> to stay healthy."
            },
            {
                q: "Làm việc nhóm giúp người ta phát triển kỹ năng giao tiếp.",
                a: [
                    "Teamwork helps people develop communication skills.",
                    "Teamwork helps people develop communication skills",
                    "Working in a team helps people develop communication skills.",
                    "Working in teams helps people develop communication skills.",
                    "Teamwork helps people improve communication skills."
                ],
                hints: [
                    { en: "Teamwork", vn: "Làm việc nhóm (danh từ không đếm được, chia động từ số ít)" },
                    { en: "develop (v)", vn: "phát triển" },
                    { en: "communication skills", vn: "kỹ năng giao tiếp" }
                ],
                exp: "• <b>Chủ ngữ số ít:</b> Teamwork (động từ chia helps có 's').<br>• <b>Cấu trúc:</b> help + O + V (helps people develop).<br>• <b>Cụm danh từ:</b> communication skills."
            },
            {
                q: "Nhiều học sinh phải đối mặt với áp lực học tập lớn.",
                a: [
                    "Many students face great study pressure.",
                    "Many students face great study pressure",
                    "Many students have to face great study pressure.",
                    "Many students face heavy study pressure.",
                    "Many students have to deal with heavy academic pressure."
                ],
                hints: [
                    { en: "face / have to face", vn: "đối mặt với / phải đối mặt với" },
                    { en: "study pressure / academic pressure", vn: "áp lực học tập" }
                ],
                exp: "• <b>Lượng từ:</b> Many students (danh từ đếm được số nhiều).<br>• <b>Cụm tính từ + danh từ:</b> great study pressure."
            },
            {
                q: "Đọc sách mỗi ngày giúp học sinh mở rộng kiến thức và vốn từ vựng.",
                a: [
                    "Reading books every day helps students expand their knowledge and vocabulary.",
                    "Reading books every day helps students expand their knowledge and vocabulary",
                    "Reading books daily helps students widen their knowledge and vocabulary.",
                    "Reading books every day helps students broaden their knowledge and vocabulary."
                ],
                hints: [
                    { en: "expand / widen / broaden", vn: "mở rộng" },
                    { en: "knowledge and vocabulary", vn: "kiến thức và từ vựng" }
                ],
                exp: "• <b>Chủ ngữ V-ing:</b> Reading books (chia helps có 's').<br>• <b>Tính từ sở hữu:</b> their knowledge.<br>• <b>Danh từ không đếm được:</b> knowledge."
            },
            {
                q: "Thức ăn nhanh rất tiện lợi nhưng nó có thể gây ra các vấn đề về sức khỏe.",
                a: [
                    "Fast food is very convenient, but it can cause health problems.",
                    "Fast food is very convenient, but it can cause health problems",
                    "Fast food is very convenient, but it may cause health problems.",
                    "Fast food is very convenient, but it can lead to health problems."
                ],
                hints: [
                    { en: "convenient (adj)", vn: "tiện lợi" },
                    { en: "but", vn: "nhưng (liên từ nối 2 mệnh đề có dấu phẩy phía trước)" },
                    { en: "cause health problems", vn: "gây ra các vấn đề về sức khỏe" }
                ],
                exp: "• <b>Liên từ FANBOYS:</b> but (có dấu phẩy khi nối 2 mệnh đề độc lập).<br>• <b>Đại từ:</b> it thay thế cho fast food.<br>• <b>Động từ tình thái:</b> can cause."
            },
            {
                q: "Nhiều trẻ em dành quá nhiều thời gian xem tivi thay vì chơi thể thao.",
                a: [
                    "Many children spend too much time watching TV instead of playing sports.",
                    "Many children spend too much time watching TV instead of playing sports",
                    "Many children spend too much time watching television instead of playing sports.",
                    "Many kids spend too much time watching TV instead of playing sports."
                ],
                hints: [
                    { en: "spend time + V-ing", vn: "dành thời gian làm gì" },
                    { en: "too much time", vn: "quá nhiều thời gian (much đi với danh từ không đếm được)" },
                    { en: "instead of + V-ing", vn: "thay vì làm gì" }
                ],
                exp: "• <b>Cấu trúc:</b> spend time + V-ing.<br>• <b>Giới từ:</b> instead of + V-ing (instead of playing sports)."
            },
            {
                q: "Nếu sinh viên quản lý thời gian tốt, họ sẽ ít bị căng thẳng hơn.",
                a: [
                    "If students manage their time well, they will be less stressed.",
                    "If students manage their time well, they will be less stressed",
                    "If students manage time well, they will feel less stressed.",
                    "If students manage their time well, they will have less stress."
                ],
                hints: [
                    { en: "manage time well", vn: "quản lý thời gian tốt (well là trạng từ)" },
                    { en: "less stressed", vn: "ít bị căng thẳng hơn (so sánh kém của tính từ stressed)" }
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> If + Hiện tại đơn, Tương lai đơn.<br>• <b>Trạng từ:</b> well bổ nghĩa cho động từ manage."
            },
            {
                q: "Học tiếng Anh giúp mọi người có nhiều cơ hội việc làm tốt hơn trong tương lai.",
                a: [
                    "Learning English helps people have better job opportunities in the future.",
                    "Learning English helps people have better job opportunities in the future",
                    "Learning English helps people get better job opportunities in the future.",
                    "Studying English helps people have better job opportunities in the future."
                ],
                hints: [
                    { en: "job opportunities", vn: "cơ hội việc làm (danh từ số nhiều)" },
                    { en: "better", vn: "tốt hơn (so sánh hơn của good)" },
                    { en: "in the future", vn: "trong tương lai (cụm giới từ)" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Learning English.<br>• <b>So sánh hơn:</b> better job opportunities.<br>• <b>Giới từ:</b> in the future."
            },
            {
                q: "Tóm lại, gia đình và nhà trường đóng vai trò quan trọng trong việc giáo dục con cái.",
                a: [
                    "In conclusion, family and school play an important role in educating children.",
                    "In conclusion, family and school play an important role in educating children",
                    "To sum up, family and school play an important role in educating children.",
                    "In summary, family and school play an important role in children's education.",
                    "In short, family and school play an important role in educating children."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại, (từ nối kết bài luận có dấu phẩy)" },
                    { en: "play an important role in + V-ing", vn: "đóng vai trò quan trọng trong..." },
                    { en: "educating children", vn: "việc giáo dục trẻ em" }
                ],
                exp: "• <b>Từ nối kết bài:</b> In conclusion,.<br>• <b>Cụm thành ngữ cố định:</b> play an important role in + V-ing/Noun."
            }
        ]
    },
    {
        id: "test4",
        title: "BÀI TẬP 4",
        subTitle: "Công nghệ, Môi trường, Lối sống & Xã hội",
        desc: "Luyện tập dịch 10 câu giải pháp, phân tích hai mặt và kết luận có tính ứng dụng cao nhất.",
        questions: [
            {
                q: "Điện thoại thông minh giúp con người tìm kiếm thông tin một cách nhanh chóng.",
                a: [
                    "Smartphones help people search for information quickly.",
                    "Smartphones help people search for information quickly",
                    "Smartphones help people find information quickly.",
                    "Smartphones help people search for information fast."
                ],
                hints: [
                    { en: "Smartphones", vn: "Điện thoại thông minh (danh từ số nhiều)" },
                    { en: "search for information", vn: "tìm kiếm thông tin (information không đếm được)" },
                    { en: "quickly", vn: "một cách nhanh chóng (trạng từ chỉ thể cách)" }
                ],
                exp: "• <b>Chủ ngữ số nhiều:</b> Smartphones (động từ help nguyên mẫu).<br>• <b>Giới từ:</b> search for.<br>• <b>Trạng từ:</b> quickly."
            },
            {
                q: "Một mặt, mua sắm trực tuyến giúp tiết kiệm rất nhiều thời gian.",
                a: [
                    "On the one hand, online shopping helps save a lot of time.",
                    "On the one hand, online shopping helps save a lot of time",
                    "On the one hand, shopping online helps save a lot of time.",
                    "On the one hand, online shopping helps people save a lot of time."
                ],
                hints: [
                    { en: "On the one hand,", vn: "Một mặt, (từ nối nêu mặt thứ nhất có dấu phẩy)" },
                    { en: "online shopping", vn: "mua sắm trực tuyến (danh động từ số ít)" },
                    { en: "save a lot of time", vn: "tiết kiệm nhiều thời gian" }
                ],
                exp: "• <b>Cụm từ liên kết:</b> On the one hand,.<br>• <b>Chủ ngữ Danh động từ:</b> online shopping (chia động từ số ít: helps)."
            },
            {
                q: "Mặt khác, người mua không thể kiểm tra chất lượng sản phẩm trực tiếp.",
                a: [
                    "On the other hand, buyers cannot check product quality directly.",
                    "On the other hand, buyers cannot check product quality directly",
                    "On the other hand, customers cannot check the quality of products directly.",
                    "On the other hand, shoppers cannot check product quality directly."
                ],
                hints: [
                    { en: "On the other hand,", vn: "Mặt khác, (từ nối nêu mặt đối lập có dấu phẩy)" },
                    { en: "cannot check", vn: "không thể kiểm tra (động từ khuyết thiếu)" },
                    { en: "product quality", vn: "chất lượng sản phẩm" },
                    { en: "directly", vn: "trực tiếp (trạng từ đứng cuối câu)" }
                ],
                exp: "• <b>Cụm từ liên kết đối lập:</b> On the other hand,.<br>• <b>Động từ tình thái:</b> cannot + V nguyên mẫu.<br>• <b>Trạng từ:</b> directly."
            },
            {
                q: "Để bảo vệ môi trường, chính phủ nên khuyến khích người dân sử dụng phương tiện công cộng.",
                a: [
                    "To protect the environment, the government should encourage people to use public transport.",
                    "To protect the environment, the government should encourage people to use public transport",
                    "In order to protect the environment, the government should encourage people to use public transportation.",
                    "To protect the environment, the government should encourage citizens to use public transport."
                ],
                hints: [
                    { en: "To protect the environment,", vn: "Để bảo vệ môi trường, (mục đích đứng đầu câu có dấu phẩy)" },
                    { en: "encourage sb to + V", vn: "khuyến khích ai làm gì" },
                    { en: "public transport", vn: "phương tiện công cộng" }
                ],
                exp: "• <b>Mệnh đề chỉ mục đích:</b> To-V đứng đầu câu.<br>• <b>Cấu trúc động từ:</b> encourage + O + to-V."
            },
            {
                q: "Sử dụng túi vải thay vì túi nilon là một hành động đơn giản nhưng hiệu quả.",
                a: [
                    "Using cloth bags instead of plastic bags is a simple but effective action.",
                    "Using cloth bags instead of plastic bags is a simple but effective action",
                    "Using canvas bags instead of plastic bags is a simple but effective action.",
                    "Using cloth bags instead of plastic bags is simple but effective."
                ],
                hints: [
                    { en: "Using cloth bags", vn: "Sử dụng túi vải (chủ ngữ V-ing chia số ít: is)" },
                    { en: "instead of + N", vn: "thay vì..." },
                    { en: "plastic bags", vn: "túi nilon" },
                    { en: "simple but effective", vn: "đơn giản nhưng hiệu quả" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Using cloth bags.<br>• <b>Giới từ:</b> instead of.<br>• <b>Liên từ đẳng lập:</b> simple but effective."
            },
            {
                q: "Mặc dù sống ở thành phố rất tiện lợi, chi phí sinh hoạt ở đây lại rất cao.",
                a: [
                    "Although living in the city is very convenient, the cost of living here is very high.",
                    "Although living in the city is very convenient, the cost of living here is very high",
                    "Even though living in the city is very convenient, the cost of living here is very high.",
                    "Though living in a city is very convenient, the cost of living here is very high."
                ],
                hints: [
                    { en: "living in the city", vn: "sống ở thành phố (chủ ngữ V-ing)" },
                    { en: "convenient (adj)", vn: "thuận tiện / tiện lợi" },
                    { en: "the cost of living", vn: "chi phí sinh hoạt" }
                ],
                exp: "• <b>Liên từ phụ thuộc:</b> Although (mệnh đề phụ đứng trước có dấu phẩy).<br>• <b>Tính từ:</b> convenient, high."
            },
            {
                q: "Đi xe đạp không những giúp bảo vệ môi trường mà còn cải thiện sức khỏe.",
                a: [
                    "Cycling not only helps protect the environment but also improves health.",
                    "Cycling not only helps protect the environment but also improves health",
                    "Riding a bicycle not only helps protect the environment but also improves health.",
                    "Riding a bike not only helps protect the environment but also improves our health."
                ],
                hints: [
                    { en: "Cycling / Riding a bicycle", vn: "Đi xe đạp (chủ ngữ V-ing)" },
                    { en: "not only ... but also ...", vn: "không những... mà còn..." },
                    { en: "improve health", vn: "cải thiện sức khỏe" }
                ],
                exp: "• <b>Liên từ tương quan:</b> not only ... but also ... (các động từ chia đồng bộ số ít: helps, improves)."
            },
            {
                q: "Nhiều người trẻ ngày nay thích làm việc từ xa vì nó mang lại sự linh hoạt.",
                a: [
                    "Many young people today prefer working remotely because it provides flexibility.",
                    "Many young people today prefer working remotely because it provides flexibility",
                    "Many young people today like working remotely because it brings flexibility.",
                    "Many young people nowadays like working from home because it offers flexibility."
                ],
                hints: [
                    { en: "working remotely / from home", vn: "làm việc từ xa" },
                    { en: "because", vn: "bởi vì" },
                    { en: "flexibility", vn: "sự linh hoạt (danh từ)" }
                ],
                exp: "• <b>Động từ sở thích:</b> prefer / like + V-ing.<br>• <b>Từ nối:</b> because.<br>• <b>Đại từ:</b> it thay thế cho việc làm việc từ xa."
            },
            {
                q: "Mỗi cá nhân đều có thể đóng góp vào việc giữ gìn thành phố sạch đẹp.",
                a: [
                    "Each individual can contribute to keeping the city clean and beautiful.",
                    "Each individual can contribute to keeping the city clean and beautiful",
                    "Every individual can contribute to keeping the city clean and beautiful.",
                    "Every person can contribute to keeping the city clean and beautiful."
                ],
                hints: [
                    { en: "Each individual / Every person", vn: "Mỗi cá nhân" },
                    { en: "contribute to + V-ing", vn: "đóng góp vào việc làm gì" },
                    { en: "clean and beautiful", vn: "sạch và đẹp (tính từ)" }
                ],
                exp: "• <b>Đại từ không xác định:</b> Each individual.<br>• <b>Cụm động từ + giới từ:</b> contribute to + V-ing.<br>• <b>Cấu trúc:</b> keep + O + adj (keeping the city clean and beautiful)."
            },
            {
                q: "Tóm lại, công nghệ mang lại nhiều lợi ích nếu chúng ta biết sử dụng nó đúng cách.",
                a: [
                    "In conclusion, technology brings many benefits if we know how to use it properly.",
                    "In conclusion, technology brings many benefits if we know how to use it properly",
                    "To sum up, technology brings many benefits if we use it properly.",
                    "In summary, technology brings a lot of benefits if we know how to use it properly.",
                    "In short, technology provides many benefits if we use it in the right way."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại, (kết bài luận)" },
                    { en: "technology", vn: "công nghệ (danh từ không đếm được chia số ít: brings)" },
                    { en: "know how to use", vn: "biết cách sử dụng" },
                    { en: "properly", vn: "đúng cách (trạng từ chỉ cách thức)" }
                ],
                exp: "• <b>Từ nối kết bài:</b> In conclusion,.<br>• <b>Mệnh đề điều kiện:</b> if we know how to use it properly.<br>• <b>Trạng từ:</b> properly."
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
