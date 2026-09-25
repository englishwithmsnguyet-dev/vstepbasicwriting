// =========================================================================
// ==================== HỆ THỐNG TỔNG ÔN TẬP (FINAL REVIEW) ====================
// =========================================================================

// Dữ liệu 4 bài tập dịch câu thiết thực cho VIẾT THƯ & VIẾT LUẬN VSTEP (mỗi bài đúng 10 câu)
const finalReviewTests = [
    {
        id: "test1",
        title: "BÀI TẬP 1 (VIẾT THƯ - BẬC THẦY)",
        subTitle: "Mở đầu thư, Thư mời, Cảm ơn & Chia sẻ trải nghiệm cá nhân",
        desc: "Rèn luyện khả năng dịch các câu nòng cốt thường dùng nhất trong bài thi Viết Thư (Writing Task 1).",
        questions: [
            {
                q: "Tôi viết lá thư này để cảm ơn bạn rất nhiều vì sự giúp đỡ nhiệt tình của bạn trong kỳ nghỉ vừa qua.",
                a: [
                    "I am writing this letter to thank you very much for your enthusiastic help during the last vacation.",
                    "I am writing this letter to thank you so much for your enthusiastic help during the last holiday.",
                    "I am writing this letter to thank you very much for your kind help during the last holiday.",
                    "I am writing this letter to thank you very much for your helpful support during the last vacation.",
                    "I am writing this letter to thank you very much for your enthusiastic assistance during the last vacation."
                ],
                hints: [
                    { en: "enthusiastic / kind help", vn: "sự giúp đỡ nhiệt tình / tử tế" },
                    { en: "during the last vacation / holiday", vn: "trong kỳ nghỉ vừa qua" }
                ],
                exp: "• <b>Mở đầu thư:</b> Cấu trúc quen thuộc <i>I am writing this letter to + V</i>.<br>• <b>Giới từ:</b> thank sb <i>for</i> sth, <i>during</i> + danh từ.<br>• <b>Tính từ & Danh từ:</b> enthusiastic help."
            },
            {
                q: "Mặc dù tôi rất bận rộn với công việc hiện tại, tôi vẫn sắp xếp thời gian để tham gia bữa tiệc sinh nhật của bạn.",
                a: [
                    "Although I am very busy with my current job, I still arrange time to attend your birthday party.",
                    "Although I am very busy with my current work, I still manage time to attend your birthday party.",
                    "Although I was very busy with my current job, I still arranged time to join your birthday party.",
                    "Even though I am very busy with my current work, I still make time to join your birthday party."
                ],
                hints: [
                    { en: "busy with", vn: "bận rộn với" },
                    { en: "arrange / manage time", vn: "sắp xếp thời gian" },
                    { en: "attend / join", vn: "tham gia" }
                ],
                exp: "• <b>Từ nối nhượng bộ:</b> Although đứng đầu câu có dấu phẩy ngăn cách.<br>• <b>Tính từ + Giới từ:</b> busy with.<br>• <b>Động từ nguyên mẫu chỉ mục đích:</b> to attend."
            },
            {
                q: "Thành thật mà nói, tôi cảm thấy vô cùng hào hứng khi nhận được lời mời tham gia chuyến dã ngoại của lớp chúng ta.",
                a: [
                    "To be honest, I feel extremely excited to receive the invitation to join our class picnic.",
                    "Honestly, I feel extremely excited when receiving the invitation to join our class picnic.",
                    "To be honest, I felt extremely excited to receive the invitation to join our class picnic.",
                    "Honestly, I feel very excited to receive the invitation to attend our class picnic."
                ],
                hints: [
                    { en: "To be honest / Honestly", vn: "Thành thật mà nói" },
                    { en: "extremely excited", vn: "vô cùng hào hứng (adj đuôi -ed)" },
                    { en: "invitation (n)", vn: "lời mời" }
                ],
                exp: "• <b>Từ liên kết đầu câu:</b> To be honest, / Honestly, (có dấu phẩy).<br>• <b>Tính từ chỉ cảm xúc người:</b> excited (-ed) đi với trạng từ chỉ mức độ <i>extremely</i>.<br>• <b>Danh từ:</b> invitation."
            },
            {
                q: "Bạn có thể vui lòng gửi cho tôi thêm một số thông tin chi tiết về khóa học tiếng Anh vào tuần tới không?",
                a: [
                    "Could you please send me some more detailed information about the English course next week?",
                    "Could you please send me more details about the English course next week?",
                    "Can you please send me some more detailed information about the English course next week?",
                    "Would you please send me some more details about the English course next week?"
                ],
                hints: [
                    { en: "Could you please + V", vn: "Bạn có thể vui lòng... không (lịch sự)" },
                    { en: "detailed information", vn: "thông tin chi tiết (information không đếm được)" }
                ],
                exp: "• <b>Câu hỏi yêu cầu lịch sự:</b> Could you please + V nguyên mẫu.<br>• <b>Cụm danh từ:</b> detailed information (information không có 's')."
            },
            {
                q: "Tôi đã không gặp bạn kể từ mùa hè năm ngoái, vì vậy tôi thực sự rất nhớ bạn.",
                a: [
                    "I haven't seen you since last summer, so I really miss you.",
                    "I have not seen you since last summer, so I really miss you.",
                    "I haven't met you since last summer, so I really miss you very much."
                ],
                hints: [
                    { en: "since last summer", vn: "kể từ mùa hè năm ngoái (dấu hiệu HTHT)" },
                    { en: "so", vn: "vì vậy (từ nối FANBOYS nối 2 mệnh đề có dấu phẩy)" }
                ],
                exp: "• <b>Thì Hiện tại hoàn thành:</b> have not seen kết hợp giới từ <i>since</i>.<br>• <b>Từ nối kết quả:</b> so (bắt buộc có dấu phẩy trước so khi nối 2 mệnh đề)."
            },
            {
                q: "Tôi thực sự xin lỗi vì đã không thể trả lời thư của bạn sớm hơn do sự cố máy tính.",
                a: [
                    "I am really sorry for not being able to reply to your letter earlier due to computer problems.",
                    "I am very sorry for not being able to reply to your letter sooner due to a computer problem.",
                    "I am terribly sorry for not replying to your email earlier because of a computer problem.",
                    "I am really sorry that I could not reply to your letter earlier due to computer issues."
                ],
                hints: [
                    { en: "sorry for not + V-ing", vn: "xin lỗi vì đã không..." },
                    { en: "reply to your letter / email", vn: "trả lời thư" },
                    { en: "due to / because of + N", vn: "do / bởi vì" }
                ],
                exp: "• <b>Tính từ + Giới từ:</b> sorry for.<br>• <b>Giới từ chỉ nguyên nhân:</b> due to / because of đi với Cụm danh từ.<br>• <b>Trạng từ so sánh hơn:</b> earlier / sooner."
            },
            {
                q: "Theo ý kiến của tôi, chúng ta nên đặt phòng khách sạn trước để tránh tình trạng hết phòng.",
                a: [
                    "In my opinion, we should book the hotel room in advance to avoid running out of rooms.",
                    "In my opinion, we should book hotel rooms in advance to avoid being fully booked.",
                    "In my view, we should reserve hotel rooms in advance to avoid running out of rooms.",
                    "In my opinion, we ought to book the hotel room in advance to avoid running out of rooms."
                ],
                hints: [
                    { en: "In my opinion / In my view", vn: "Theo ý kiến của tôi" },
                    { en: "book in advance", vn: "đặt trước" },
                    { en: "avoid + V-ing", vn: "tránh điều gì" }
                ],
                exp: "• <b>Cụm mở đầu:</b> In my opinion, (bắt buộc có dấu phẩy).<br>• <b>Động từ tình thái:</b> should + V.<br>• <b>Cụm giới từ:</b> in advance."
            },
            {
                q: "Tôi tin chắc rằng bạn sẽ thích chiếc máy ảnh này vì chất lượng hình ảnh của nó rất tuyệt vời.",
                a: [
                    "I am convinced that you will like this camera because its image quality is wonderful.",
                    "I am sure that you will like this camera because its picture quality is great.",
                    "I firmly believe that you will like this camera because its image quality is excellent.",
                    "I am sure that you will enjoy this camera because its image quality is fantastic."
                ],
                hints: [
                    { en: "I am sure / convinced that", vn: "Tôi tin chắc rằng..." },
                    { en: "its (tính từ sở hữu)", vn: "của nó (không viết it's)" },
                    { en: "image / picture quality", vn: "chất lượng hình ảnh" }
                ],
                exp: "• <b>Tính từ sở hữu:</b> its (phân biệt với đại từ viết tắt it's = it is).<br>• <b>Từ nối:</b> because (đứng giữa câu không dùng dấu phẩy)."
            },
            {
                q: "Nếu bạn có bất kỳ câu hỏi nào khác, xin vui lòng liên hệ với tôi qua số điện thoại này.",
                a: [
                    "If you have any further questions, please contact me via this phone number.",
                    "If you have any other questions, please contact me through this phone number.",
                    "If you have any further questions, feel free to contact me at this phone number.",
                    "If you have any questions, please contact me via this phone number."
                ],
                hints: [
                    { en: "any further questions", vn: "bất kỳ câu hỏi nào thêm/khác" },
                    { en: "contact me via / at", vn: "liên hệ với tôi qua..." }
                ],
                exp: "• <b>Câu điều kiện loại 1:</b> Mệnh đề If đứng trước có dấu phẩy.<br>• <b>Đại từ/Tính từ bất định:</b> any further questions.<br>• <b>Giới từ:</b> via / through / at."
            },
            {
                q: "Tôi rất mong sớm nhận được phản hồi từ bạn và hy vọng sẽ gặp lại bạn trong tương lai gần.",
                a: [
                    "I look forward to hearing from you soon and hope to see you in the near future.",
                    "I am looking forward to hearing from you soon and hope to see you in the near future.",
                    "I look forward to receiving your reply soon and hope to meet you in the near future."
                ],
                hints: [
                    { en: "look forward to + V-ing", vn: "rất mong đợi điều gì (cấu trúc kinh điển kết thư)" },
                    { en: "in the near future", vn: "trong tương lai gần" }
                ],
                exp: "• <b>Cụm động từ kết thư:</b> look forward to + V-ing.<br>• <b>Động từ theo sau hope:</b> hope to-V.<br>• <b>Giới từ thời gian:</b> in the near future."
            }
        ]
    },
    {
        id: "test2",
        title: "BÀI TẬP 2 (VIẾT LUẬN - THỰC TRẠNG & NGUYÊN NHÂN)",
        subTitle: "Mở bài nghị luận, Nêu vấn đề, Nguyên nhân & Dẫn chứng",
        desc: "Rèn luyện các cấu trúc câu học thuật dùng để viết Mở bài và Thân bài 1 (Nguyên nhân) trong Writing Task 2.",
        questions: [
            {
                q: "Ngày nay, ngày càng có nhiều bạn trẻ dành quá nhiều thời gian cho các thiết bị điện tử.",
                a: [
                    "Nowadays, more and more young people spend too much time on electronic devices.",
                    "Nowadays, an increasing number of young people spend too much time on electronic devices.",
                    "Today, more and more youngsters spend too much time on digital devices.",
                    "Nowadays, an increasing number of teenagers spend too much time on electronic gadgets."
                ],
                hints: [
                    { en: "Nowadays / Today", vn: "Ngày nay (trạng từ mở đầu câu)" },
                    { en: "more and more / an increasing number of", vn: "ngày càng nhiều" },
                    { en: "spend time on sth", vn: "dành thời gian vào việc gì" }
                ],
                exp: "• <b>Trạng từ liên kết mở bài:</b> Nowadays, (có dấu phẩy).<br>• <b>Cấu trúc:</b> spend + time + on + Noun.<br>• <b>Cụm danh từ:</b> electronic devices."
            },
            {
                q: "Thứ nhất, việc sử dụng điện thoại thông minh liên tục có thể dẫn đến nhiều vấn đề sức khỏe nghiêm trọng.",
                a: [
                    "Firstly, using smartphones continuously can lead to many serious health problems.",
                    "First of all, using smartphones constantly can lead to various serious health issues.",
                    "Firstly, the continuous use of smartphones can cause many serious health problems.",
                    "First, using smartphones constantly can lead to serious health issues."
                ],
                hints: [
                    { en: "Firstly, / First of all,", vn: "Thứ nhất, (từ nối trình tự luận điểm)" },
                    { en: "lead to + N / V-ing", vn: "dẫn đến kết quả gì" },
                    { en: "serious health problems", vn: "các vấn đề sức khỏe nghiêm trọng" }
                ],
                exp: "• <b>Từ liên kết trình tự:</b> Firstly, (có dấu phẩy).<br>• <b>Chủ ngữ Danh động từ:</b> using smartphones.<br>• <b>Trạng từ bổ nghĩa cho động từ:</b> continuously / constantly."
            },
            {
                q: "Nguyên nhân chính của vấn đề này là sự thiếu hụt các sân chơi an toàn cho trẻ em ở các thành phố lớn.",
                a: [
                    "The main cause of this problem is the lack of safe playgrounds for children in big cities.",
                    "The primary cause of this issue is the shortage of safe playgrounds for children in large cities.",
                    "The major reason for this problem is the lack of safe playgrounds for kids in big cities."
                ],
                exp: "• <b>Cụm danh từ làm chủ ngữ:</b> The main cause of this problem.<br>• <b>Giới từ:</b> cause of, lack of, in big cities.<br>• <b>Danh từ số nhiều bất quy tắc:</b> children (không có 's').",
                hints: [
                    { en: "The main cause / primary reason", vn: "nguyên nhân chính" },
                    { en: "the lack of / shortage of", vn: "sự thiếu hụt" },
                    { en: "playgrounds", vn: "sân chơi" }
                ]
            },
            {
                q: "Hơn nữa, nhiều bậc phụ huynh quá bận rộn với công việc đến mức họ hiếm khi trò chuyện cùng con cái.",
                a: [
                    "Furthermore, many parents are so busy with work that they rarely talk to their children.",
                    "Moreover, many parents are so busy with their jobs that they seldom talk to their kids.",
                    "In addition, many parents are so occupied with work that they rarely communicate with their children."
                ],
                hints: [
                    { en: "Furthermore, / Moreover,", vn: "Hơn nữa (bổ sung ý)" },
                    { en: "so + adj + that ...", vn: "quá... đến mức mà..." },
                    { en: "rarely / seldom", vn: "hiếm khi (trạng từ tần suất đứng trước V thường)" }
                ],
                exp: "• <b>Từ nối bổ sung luận điểm:</b> Furthermore, / Moreover,.<br>• <b>Cấu trúc kết quả:</b> so + adj + that + clause.<br>• <b>Trạng từ tần suất:</b> rarely / seldom."
            },
            {
                q: "Ví dụ, một cuộc khảo sát gần đây cho thấy rằng hơn 60% học sinh tiểu học sử dụng mạng xã hội mỗi ngày.",
                a: [
                    "For example, a recent survey shows that more than 60% of primary students use social media every day.",
                    "For instance, a recent survey reveals that over 60% of primary school students use social media daily.",
                    "For example, a recent study indicates that more than 60% of primary school students use social media every day."
                ],
                hints: [
                    { en: "For example, / For instance,", vn: "Ví dụ (dẫn chứng cho bài luận)" },
                    { en: "recent survey / study", vn: "khảo sát gần đây" },
                    { en: "primary students", vn: "học sinh tiểu học" }
                ],
                exp: "• <b>Từ nối đưa dẫn chứng:</b> For example, / For instance,.<br>• <b>Hòa hợp chủ vị:</b> more than 60% of primary students đi với động từ số nhiều <i>use</i>."
            },
            {
                q: "Do đó, trẻ em dần dần trở nên phụ thuộc vào thế giới ảo và mất đi những kỹ năng sống cần thiết.",
                a: [
                    "As a result, children gradually become dependent on the virtual world and lose essential life skills.",
                    "Therefore, children gradually become reliant on the virtual world and lose necessary life skills.",
                    "Consequently, children gradually become dependent on the virtual world and lose essential life skills."
                ],
                hints: [
                    { en: "As a result, / Therefore,", vn: "Do đó / Kết quả là" },
                    { en: "dependent on / reliant on", vn: "phụ thuộc vào" },
                    { en: "essential life skills", vn: "các kỹ năng sống cần thiết" }
                ],
                exp: "• <b>Từ liên kết hệ quả:</b> As a result, / Therefore, (có dấu phẩy).<br>• <b>Tính từ + Giới từ:</b> dependent on.<br>• <b>Trạng từ:</b> gradually."
            },
            {
                q: "Không thể phủ nhận rằng áp lực học tập tại trường học đang gia tăng một cách đáng kể trong những năm gần đây.",
                a: [
                    "It cannot be denied that academic pressure at schools has been increasing significantly in recent years.",
                    "It is undeniable that study pressure at school has increased significantly in recent years.",
                    "It cannot be denied that academic pressure at school is increasing significantly in recent years."
                ],
                hints: [
                    { en: "It cannot be denied that / It is undeniable that", vn: "Không thể phủ nhận rằng... (câu đệm mở đoạn đắt giá)" },
                    { en: "academic pressure", vn: "áp lực học tập" },
                    { en: "significantly (adv)", vn: "một cách đáng kể" }
                ],
                exp: "• <b>Cấu trúc câu phức mẫu mực:</b> It cannot be denied that + S + V.<br>• <b>Thì Hiện tại hoàn thành tiếp diễn / đơn:</b> has been increasing.<br>• <b>Trạng từ:</b> significantly."
            },
            {
                q: "Mặc dù công nghệ mang lại nhiều lợi ích vượt trội, nó cũng tiềm ẩn vô số rủi ro khó lường.",
                a: [
                    "Although technology brings many outstanding benefits, it also poses countless unpredictable risks.",
                    "While technology provides numerous great benefits, it also carries many unpredictable risks.",
                    "Although technology offers many outstanding advantages, it also involves countless unpredictable risks."
                ],
                hints: [
                    { en: "outstanding benefits / advantages", vn: "những lợi ích vượt trội" },
                    { en: "pose / carry risks", vn: "tiềm ẩn / gây ra rủi ro" },
                    { en: "unpredictable risks", vn: "những rủi ro khó lường" }
                ],
                exp: "• <b>Từ nối tương phản:</b> Although (có dấu phẩy giữa 2 mệnh đề).<br>• <b>Tính từ & Danh từ ghép:</b> outstanding benefits, unpredictable risks."
            },
            {
                q: "Nếu chính phủ và nhà trường không có những biện pháp kịp thời, hậu quả sẽ trở nên vô cùng tồi tệ.",
                a: [
                    "If the government and schools do not take timely measures, the consequences will become extremely bad.",
                    "If the government and schools do not take prompt action, the consequences will be extremely severe.",
                    "Unless the government and schools take timely measures, the consequences will become extremely serious."
                ],
                hints: [
                    { en: "take timely measures / prompt action", vn: "thực hiện các biện pháp kịp thời" },
                    { en: "consequences", vn: "những hậu quả" },
                    { en: "extremely severe / serious", vn: "vô cùng nghiêm trọng / tồi tệ" }
                ],
                exp: "• <b>Câu điều kiện loại 1 trong nghị luận:</b> If S + V, S + will + V.<br>• <b>Collocation:</b> take timely measures.<br>• <b>Động từ liên kết:</b> become + adj."
            },
            {
                q: "Tóm lại, hiện tượng này xuất phát từ nhiều nguyên nhân khác nhau và cần được xem xét một cách nghiêm túc.",
                a: [
                    "In brief, this phenomenon stems from various causes and needs to be considered seriously.",
                    "To sum up, this phenomenon originates from various causes and needs to be taken seriously.",
                    "In short, this phenomenon comes from different causes and needs to be considered seriously."
                ],
                hints: [
                    { en: "In brief, / To sum up,", vn: "Tóm lại, (chuyển ý kết bài/đoạn)" },
                    { en: "phenomenon", vn: "hiện tượng (danh từ số ít)" },
                    { en: "stem from / originate from", vn: "bắt nguồn từ, xuất phát từ" }
                ],
                exp: "• <b>Từ liên kết:</b> In brief, / To sum up,.<br>• <b>Động từ + Giới từ:</b> stem from.<br>• <b>Bị động với need:</b> needs to be considered."
            }
        ]
    },
    {
        id: "test3",
        title: "BÀI TẬP 3 (VIẾT LUẬN - GIẢI PHÁP & KẾT LUẬN)",
        subTitle: "Thân bài 2 (Giải pháp) & Kết luận toàn diện cho bài luận",
        desc: "Rèn luyện các cấu trúc đề xuất giải pháp, hành động thiết thực và viết Kết bài xuất sắc trong Task 2.",
        questions: [
            {
                q: "Để giải quyết vấn đề cấp bách này, cả chính quyền và người dân cần phải cùng nhau chung tay hành động.",
                a: [
                    "To tackle this pressing issue, both authorities and citizens need to join hands to take action together.",
                    "To solve this urgent problem, both the government and citizens must join hands to take action.",
                    "In order to solve this pressing problem, both authorities and people need to cooperate and take action.",
                    "To address this urgent issue, both the government and individuals need to join hands to act."
                ],
                hints: [
                    { en: "To tackle / solve this pressing issue", vn: "Để giải quyết vấn đề cấp bách này" },
                    { en: "both ... and ...", vn: "cả... và... (liên từ tương quan)" },
                    { en: "join hands to take action", vn: "chung tay hành động" }
                ],
                exp: "• <b>Mệnh đề chỉ mục đích đứng đầu câu:</b> To tackle this pressing issue, (có dấu phẩy).<br>• <b>Liên từ tương quan:</b> both ... and ..."
            },
            {
                q: "Trước hết, các nhà hoạch định chính sách nên ban hành các điều luật nghiêm ngặt hơn để bảo vệ môi trường sống.",
                a: [
                    "First of all, policymakers should enact stricter laws to protect the living environment.",
                    "Firstly, policymakers ought to introduce stricter regulations to protect the living environment.",
                    "First and foremost, policymakers should enforce stricter laws to protect the living environment."
                ],
                hints: [
                    { en: "First of all, / First and foremost,", vn: "Trước hết (từ nối mở đầu giải pháp 1)" },
                    { en: "policymakers", vn: "các nhà hoạch định chính sách" },
                    { en: "enact / enforce stricter laws", vn: "ban hành / thực thi luật nghiêm ngặt hơn" }
                ],
                exp: "• <b>Từ nối:</b> First of all, (có dấu phẩy).<br>• <b>Động từ tình thái:</b> should enact.<br>• <b>Tính từ so sánh hơn:</b> stricter laws."
            },
            {
                q: "Đồng thời, các chiến dịch nâng cao nhận thức cộng đồng cần được tổ chức thường xuyên trên các phương tiện truyền thông.",
                a: [
                    "At the same time, public awareness campaigns should be organized regularly on the mass media.",
                    "Simultaneously, public awareness campaigns need to be held regularly across the media.",
                    "Meanwhile, campaigns to raise public awareness should be held frequently in the media."
                ],
                hints: [
                    { en: "At the same time, / Simultaneously,", vn: "Đồng thời (từ liên kết)" },
                    { en: "public awareness campaigns", vn: "các chiến dịch nhận thức cộng đồng" },
                    { en: "mass media", vn: "các phương tiện truyền thông đại chúng" }
                ],
                exp: "• <b>Cấu trúc câu bị động với modal verb:</b> should be organized.<br>• <b>Trạng từ cách thức:</b> regularly.<br>• <b>Giới từ:</b> on the mass media."
            },
            {
                q: "Bên cạnh đó, việc đầu tư vào các nguồn năng lượng tái tạo sẽ mang lại lợi ích to lớn và bền vững.",
                a: [
                    "In addition, investing in renewable energy sources will bring immense and sustainable benefits.",
                    "Besides, investing in renewable energy will bring huge and sustainable benefits.",
                    "Additionally, investment in renewable energy sources will generate huge and long-term benefits."
                ],
                hints: [
                    { en: "In addition, / Additionally,", vn: "Bên cạnh đó" },
                    { en: "invest in renewable energy", vn: "đầu tư vào năng lượng tái tạo" },
                    { en: "sustainable benefits", vn: "lợi ích bền vững" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> Investing in renewable energy sources (động từ theo sau chia tương lai đơn: will bring).<br>• <b>Tính từ:</b> renewable, sustainable."
            },
            {
                q: "Mỗi cá nhân cũng phải tự chịu trách nhiệm về những hành vi hàng ngày của chính mình.",
                a: [
                    "Each individual must also take responsibility for their own daily behaviors.",
                    "Every individual must also be responsible for their own daily actions.",
                    "Each person must also take full responsibility for their own everyday behavior."
                ],
                hints: [
                    { en: "Each / Every individual", vn: "mỗi cá nhân (danh từ số ít)" },
                    { en: "take responsibility for / be responsible for", vn: "chịu trách nhiệm về..." },
                    { en: "their own daily behaviors", vn: "hành vi hàng ngày của chính mình" }
                ],
                exp: "• <b>Từ chỉ số lượng:</b> Each individual đi với động từ số ít.<br>• <b>Tính từ + Giới từ:</b> responsible for / take responsibility for."
            },
            {
                q: "Ví dụ, việc sử dụng phương tiện giao thông công cộng thay vì phương tiện cá nhân giúp cắt giảm lượng khí thải độc hại.",
                a: [
                    "For instance, using public transport instead of private vehicles helps cut down on toxic emissions.",
                    "For example, utilizing public transportation instead of private cars helps reduce harmful emissions.",
                    "For instance, taking public transport rather than personal vehicles helps reduce toxic fumes."
                ],
                hints: [
                    { en: "instead of + N / V-ing", vn: "thay vì..." },
                    { en: "cut down on / reduce", vn: "cắt giảm" },
                    { en: "toxic emissions / fumes", vn: "lượng khí thải độc hại" }
                ],
                exp: "• <b>Từ nối:</b> For instance,.<br>• <b>Chủ ngữ Danh động từ:</b> using public transport (động từ helps chia ngôi thứ 3 số ít).<br>• <b>Cụm động từ:</b> cut down on."
            },
            {
                q: "Nhờ có sự phát triển nhanh chóng của khoa học kỹ thuật, con người có thể phát minh ra nhiều thiết bị tiết kiệm năng lượng.",
                a: [
                    "Thanks to the rapid development of technology, people can invent many energy-saving devices.",
                    "Owing to the rapid advance of science and technology, humans can invent many energy-efficient appliances.",
                    "Thanks to the rapid development of science, humans are able to invent numerous energy-saving gadgets."
                ],
                hints: [
                    { en: "Thanks to / Owing to + N", vn: "Nhờ có... (giới từ chỉ nguyên nhân tích cực)" },
                    { en: "rapid development", vn: "sự phát triển nhanh chóng" },
                    { en: "energy-saving devices", vn: "thiết bị tiết kiệm năng lượng (tính từ ghép)" }
                ],
                exp: "• <b>Cụm giới từ:</b> Thanks to the rapid development of technology, (đứng đầu câu có dấu phẩy).<br>• <b>Tính từ ghép:</b> energy-saving devices."
            },
            {
                q: "Nếu những giải pháp này được thực hiện một cách đồng bộ, chất lượng môi trường chắc chắn sẽ được cải thiện rõ rệt.",
                a: [
                    "If these solutions are implemented synchronously, environmental quality will definitely be improved noticeably.",
                    "If these measures are carried out comprehensively, the quality of the environment will certainly improve significantly.",
                    "If these solutions are executed synchronously, environmental quality will surely be noticeably improved."
                ],
                hints: [
                    { en: "implemented synchronously / comprehensively", vn: "được thực hiện một cách đồng bộ" },
                    { en: "environmental quality", vn: "chất lượng môi trường" },
                    { en: "definitely / noticeably", vn: "chắc chắn / rõ rệt" }
                ],
                exp: "• <b>Câu điều kiện loại 1 dạng bị động:</b> If + S + are V3/ed, S + will be V3/ed.<br>• <b>Trạng từ:</b> synchronously, noticeably."
            },
            {
                q: "Tóm lại, mặc dù thử thách phía trước còn rất lớn, chúng ta hoàn toàn có thể hy vọng vào một tương lai tươi sáng hơn.",
                a: [
                    "In conclusion, although the challenge ahead is still immense, we can totally hope for a brighter future.",
                    "To sum up, even though the challenge ahead remains huge, we can completely hope for a brighter future.",
                    "In summary, although the challenges ahead are very big, we can entirely hope for a brighter future."
                ],
                hints: [
                    { en: "In conclusion, / To sum up,", vn: "Tóm lại (kết bài luận)" },
                    { en: "challenge ahead", vn: "thử thách phía trước" },
                    { en: "hope for a brighter future", vn: "hy vọng vào một tương lai tươi sáng hơn" }
                ],
                exp: "• <b>Từ liên kết kết luận:</b> In conclusion, (bắt buộc có dấu phẩy).<br>• <b>Mệnh đề nhượng bộ:</b> although the challenge ahead is still immense,.<br>• <b>Động từ + Giới từ:</b> hope for."
            },
            {
                q: "Chỉ khi mọi thành viên trong xã hội cùng chung sức, chúng ta mới có thể tạo ra sự thay đổi tích cực và lâu dài.",
                a: [
                    "Only when all members of society join forces can we create positive and long-lasting changes.",
                    "Only when every member in society works together can we make positive and sustainable changes.",
                    "Only when all members in society join hands can we bring about positive and lasting change."
                ],
                hints: [
                    { en: "Only when + S + V + đảo ngữ (can we...)", vn: "Chỉ khi... chúng ta mới có thể... (cấu trúc câu đảo ngữ ghi điểm B2/C1)" },
                    { en: "join forces / join hands", vn: "cùng chung sức" },
                    { en: "long-lasting / sustainable changes", vn: "sự thay đổi tích cực và lâu dài" }
                ],
                exp: "• <b>Cấu trúc đảo ngữ đỉnh cao:</b> Only when S + V + <b>can we + V</b>.<br>• <b>Tính từ ghép:</b> long-lasting changes."
            }
        ]
    },
    {
        id: "test4",
        title: "BÀI TẬP 4 (VIẾT LUẬN & THƯ - TỔNG HỢP NÂNG CAO)",
        subTitle: "Quan điểm cá nhân, So sánh đối chiếu & Lập luận phản biện",
        desc: "Luyện tập các mẫu câu phản biện, so sánh và thể hiện quan điểm sâu sắc để tối ưu hóa điểm số VSTEP.",
        questions: [
            {
                q: "Theo quan điểm của tôi, việc học trực tuyến không thể hoàn toàn thay thế các lớp học truyền thống.",
                a: [
                    "From my perspective, online learning cannot completely replace traditional classrooms.",
                    "In my opinion, online learning cannot entirely replace traditional classes.",
                    "From my point of view, studying online cannot completely substitute traditional classrooms.",
                    "In my view, online education cannot completely replace traditional schooling."
                ],
                hints: [
                    { en: "From my perspective / point of view", vn: "Theo quan điểm của tôi" },
                    { en: "completely replace / substitute", vn: "hoàn toàn thay thế" },
                    { en: "traditional classrooms", vn: "lớp học truyền thống" }
                ],
                exp: "• <b>Cụm từ bày tỏ quan điểm:</b> From my perspective, (có dấu phẩy).<br>• <b>Trạng từ bổ nghĩa cho động từ:</b> completely replace."
            },
            {
                q: "Một mặt, các khóa học trên internet mang lại sự tiện lợi vượt bậc và sự linh hoạt về mặt thời gian.",
                a: [
                    "On the one hand, internet courses offer outstanding convenience and flexibility in terms of time.",
                    "On the one hand, online courses bring great convenience and time flexibility.",
                    "On the one hand, courses on the internet provide remarkable convenience and flexibility of time."
                ],
                hints: [
                    { en: "On the one hand,", vn: "Một mặt, (mẫu câu đối chiếu)" },
                    { en: "outstanding convenience", vn: "sự tiện lợi vượt bậc" },
                    { en: "in terms of time", vn: "về mặt thời gian" }
                ],
                exp: "• <b>Cặp liên từ đối chiếu:</b> On the one hand, (có dấu phẩy).<br>• <b>Cụm giới từ học thuật:</b> in terms of time."
            },
            {
                q: "Mặt khác, sinh viên thường bị phân tâm bởi các thông báo trên điện thoại khi họ học tại nhà.",
                a: [
                    "On the other hand, students are often distracted by notifications on their phones when they study at home.",
                    "On the other hand, students are easily distracted by phone notifications when studying at home.",
                    "On the other hand, learners are often distracted by mobile notifications while learning at home."
                ],
                hints: [
                    { en: "On the other hand,", vn: "Mặt khác," },
                    { en: "distracted by (adj/passive)", vn: "bị phân tâm bởi..." },
                    { en: "notifications", vn: "các thông báo" }
                ],
                exp: "• <b>Từ nối:</b> On the other hand,.<br>• <b>Câu bị động:</b> are distracted by.<br>• <b>Mệnh đề trạng ngữ:</b> when they study at home."
            },
            {
                q: "Nhiều người tin rằng du lịch nước ngoài giúp mở rộng tầm nhìn và tăng cường sự hiểu biết văn hóa.",
                a: [
                    "Many people believe that traveling abroad helps broaden horizons and enhance cultural understanding.",
                    "Many people believe that travelling overseas helps widen horizons and improve cultural knowledge.",
                    "Many people think that traveling to foreign countries helps broaden one's horizon and foster cultural understanding."
                ],
                hints: [
                    { en: "traveling abroad / overseas", vn: "du lịch nước ngoài" },
                    { en: "broaden horizons", vn: "mở rộng tầm nhìn (idiom chuẩn C1)" },
                    { en: "enhance cultural understanding", vn: "tăng cường sự hiểu biết văn hóa" }
                ],
                exp: "• <b>Chủ ngữ Danh động từ:</b> traveling abroad (chia động từ số ít: helps).<br>• <b>Thành ngữ học thuật:</b> broaden horizons."
            },
            {
                q: "Tuy nhiên, chi phí của các chuyến đi quốc tế thường đắt hơn rất nhiều so với du lịch trong nước.",
                a: [
                    "However, the cost of international trips is usually much more expensive than domestic travel.",
                    "However, the cost of international travel is often much higher than domestic tourism.",
                    "Nevertheless, international journeys are usually much more expensive than domestic trips."
                ],
                hints: [
                    { en: "However, / Nevertheless,", vn: "Tuy nhiên (từ nối tương phản đứng đầu câu)" },
                    { en: "international trips", vn: "các chuyến đi quốc tế" },
                    { en: "domestic travel / tourism", vn: "du lịch trong nước (nội địa)" },
                    { en: "much more expensive than", vn: "đắt hơn rất nhiều so với (much nhấn mạnh so sánh hơn)" }
                ],
                exp: "• <b>Từ liên kết:</b> However,.<br>• <b>So sánh hơn có từ nhấn mạnh:</b> much more expensive than."
            },
            {
                q: "Trái ngược với các thế hệ trước, thanh thiếu niên ngày nay thích giao tiếp qua tin nhắn hơn là nói chuyện trực tiếp.",
                a: [
                    "In contrast to previous generations, today's teenagers prefer communicating via messages to talking face to face.",
                    "In contrast with older generations, modern teenagers prefer texting to talking in person.",
                    "Unlike previous generations, teenagers today prefer communicating through text messages rather than speaking directly."
                ],
                hints: [
                    { en: "In contrast to / with + N", vn: "Trái ngược với..." },
                    { en: "prefer V-ing to V-ing", vn: "thích làm việc này hơn việc kia" },
                    { en: "face to face / in person", vn: "trực tiếp" }
                ],
                exp: "• <b>Cụm từ liên kết:</b> In contrast to previous generations,.<br>• <b>Cấu trúc sở thích:</b> prefer V-ing to V-ing."
            },
            {
                q: "Để bài viết trở nên mạch lạc và thuyết phục, tác giả phải sử dụng các từ nối một cách linh hoạt.",
                a: [
                    "In order to make the essay coherent and persuasive, the author must use transitional words flexibly.",
                    "To make the writing coherent and convincing, the writer has to use linking words flexibly.",
                    "To make the essay coherent and persuasive, writers must utilize linking words flexibly."
                ],
                hints: [
                    { en: "coherent and persuasive", vn: "mạch lạc và thuyết phục (tính từ)" },
                    { en: "transitional / linking words", vn: "từ nối / từ liên kết" },
                    { en: "flexibly (adv)", vn: "một cách linh hoạt" }
                ],
                exp: "• <b>Cấu trúc:</b> make + O + adj (make the essay coherent).<br>• <b>Trạng từ:</b> flexibly."
            },
            {
                q: "Nếu bạn không chuẩn bị kỹ lưỡng cho kỳ thi, bạn chắc chắn sẽ cảm thấy lo lắng và mất tự tin.",
                a: [
                    "If you do not prepare thoroughly for the exam, you will definitely feel anxious and lose confidence.",
                    "If you don't prepare thoroughly for the test, you will certainly feel nervous and lose confidence.",
                    "Unless you prepare thoroughly for the exam, you will definitely feel anxious and lose your confidence."
                ],
                hints: [
                    { en: "prepare thoroughly for", vn: "chuẩn bị kỹ lưỡng cho..." },
                    { en: "feel anxious / nervous", vn: "cảm thấy lo lắng" },
                    { en: "lose confidence", vn: "mất tự tin" }
                ],
                exp: "• <b>Trạng từ cách thức:</b> thoroughly.<br>• <b>Động từ chỉ cảm xúc:</b> feel + adj (feel anxious).<br>• <b>Cụm động từ:</b> lose confidence."
            },
            {
                q: "Bất chấp những khó khăn về mặt tài chính, anh ấy vẫn kiên trì theo đuổi ước mơ học lên thạc sĩ.",
                a: [
                    "Despite financial difficulties, he still persevered in pursuing his dream of studying for a master's degree.",
                    "In spite of financial difficulties, he still persistently pursued his dream of studying for a master's degree.",
                    "Despite financial problems, he still persevered in pursuing his dream of doing a master's degree."
                ],
                hints: [
                    { en: "Despite / In spite of + N", vn: "Bất chấp / Mặc dù (đi với cụm danh từ)" },
                    { en: "persevere in V-ing", vn: "kiên trì trong việc gì" },
                    { en: "master's degree", vn: "bằng thạc sĩ" }
                ],
                exp: "• <b>Giới từ chỉ sự nhượng bộ:</b> Despite + Noun phrase (có dấu phẩy khi đứng đầu câu).<br>• <b>Giới từ:</b> pursue one's dream of V-ing."
            },
            {
                q: "Nói tóm lại, sự kiên trì và phương pháp học tập đúng đắn là hai yếu tố then chốt dẫn tới thành công trong kỳ thi VSTEP.",
                a: [
                    "All in all, perseverance and proper learning methods are two key factors leading to success in the VSTEP exam.",
                    "In conclusion, perseverance and correct learning methods are two key factors leading to success in the VSTEP test.",
                    "To sum up, perseverance and proper study methods are two crucial factors leading to success in the VSTEP exam."
                ],
                hints: [
                    { en: "All in all, / In conclusion,", vn: "Nói tóm lại" },
                    { en: "perseverance (n)", vn: "sự kiên trì, bền chí" },
                    { en: "two key / crucial factors", vn: "hai yếu tố then chốt / quyết định" }
                ],
                exp: "• <b>Từ liên kết kết luận:</b> All in all, (có dấu phẩy).<br>• <b>Mệnh đề phân từ rút gọn:</b> leading to success in..."
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
let reviewResults = {}; // Lưu chi tiết lỗi và kết quả từng câu

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
                    Bài thi gồm <b>10 câu dịch chuẩn mực</b>, tổng hợp đầy đủ kiến thức của <b>7 chủ điểm ngữ pháp</b> (Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ, Từ nối).<br>
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
                        <textarea id="review_ans_${curTest.id}_${idx}" rows="2" placeholder="Nhập câu dịch tiếng Anh đầy đủ (nhớ viết hoa đầu câu và có dấu chấm cuối câu)..." style="padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box; resize: vertical; font-family: inherit;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="reviewUserAnswers['${curTest.id}'][${idx}] = this.value; document.getElementById('review-exp-${curTest.id}-${idx}').style.display='none';">${userVal}</textarea>
                        
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
                        <span style="background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 4px 14px; border-radius: 20px; font-size: 0.85rem;">10 CÂU DỊCH VSTEP CHUẨN MỰC</span>
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
                    <span>🎓</span> TỔNG ÔN TẬP BẬC THẦY (VIẾT THƯ & VIẾT LUẬN)
                </h1>
                <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">Bộ 4 đề dịch câu học thuật ứng dụng toàn diện 7 chủ điểm: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Giới từ và Từ nối vào bài thi VSTEP Writing.</p>
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
