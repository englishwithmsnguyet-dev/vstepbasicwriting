// =========================================================================
// ==================== HỆ THỐNG TỰ LUYỆN TẬP (SELF PRACTICE) ====================
// =========================================================================

const selfPracticeTopics = [
    { id: 'components', chapter: 'Chương 1', title: '1. Thành phần câu cơ bản', icon: '🧱', desc: 'Luyện tập nhận diện Chủ ngữ (S), Động từ (V), Tân ngữ (O), Bổ ngữ (C), Trạng ngữ (A).' },
    { id: 'structures', chapter: 'Chương 1', title: '2. Cấu trúc câu cơ bản', icon: '📐', desc: 'Luyện tập 6 cấu trúc câu chuẩn VSTEP: S+V, S+V+O, S+V+C, S+V+O+O, S+V+O+C, There + be...' },
    { id: 'nouns', chapter: 'Chương 2', title: '3. Danh từ (Nouns)', icon: '📦', desc: 'Nhận biết đuôi danh từ, danh từ số ít/số nhiều, đếm được/không đếm được, cụm danh từ.' },
    { id: 'pronouns', chapter: 'Chương 2', title: '4. Đại từ (Pronouns)', icon: '👥', desc: 'Đại từ nhân xưng, tân ngữ, tính từ sở hữu, đại từ sở hữu, đại từ phản thân.' },
    { id: 'verbs', chapter: 'Chương 2', title: '5. Động từ (Verbs)', icon: '⚡', desc: 'Chia thì hiện tại, quá khứ, tương lai, to-be, động từ thường và động từ khiếm khuyết.' },
    { id: 'adjectives', chapter: 'Chương 2', title: '6. Tính từ (Adjectives)', icon: '🎨', desc: 'Vị trí tính từ, hậu tố tính từ, trật tự tính từ OSASCOMP, tính từ -ing/-ed.' },
    { id: 'adverbs', chapter: 'Chương 2', title: '7. Trạng từ (Adverbs)', icon: '🚀', desc: 'Trạng từ chỉ cách thức, tần suất, mức độ, nơi chốn, thời gian và vị trí trong câu.' },
    { id: 'prepositions', chapter: 'Chương 2', title: '8. Giới từ (Prepositions)', icon: '📍', desc: 'Giới từ chỉ thời gian (in, on, at), nơi chốn, phương hướng và cụm giới từ đi kèm.' },
    { id: 'conjunctions', chapter: 'Chương 2', title: '9. Từ nối (Conjunctions)', icon: '🔗', desc: 'Liên từ kết hợp (FANBOYS), liên từ phụ thuộc (Because, Although...), từ liên kết (However, Therefore...).' }
];

// Dữ liệu 5 bài luyện tập cho từng chủ điểm (45 bài tập phong phú, chuẩn VSTEP)
const selfPracticeData = {
    components: [
        {
            title: "Bài 1: Xác định Chủ ngữ (Subject)",
            type: "mcq",
            desc: "Chọn đáp án xác định đúng Chủ ngữ trong câu dưới đây.",
            questions: [
                { q: "<b>Taking regular exercise</b> helps improve both physical and mental health.", options: ["Taking regular exercise", "helps", "improve", "mental health"], a: 0, exp: "Cụm danh động từ 'Taking regular exercise' đóng vai trò là Chủ ngữ (S)." },
                { q: "<b>Online courses</b> provided by the university are very convenient.", options: ["the university", "Online courses", "convenient", "Online courses provided by the university"], a: 3, exp: "Cụm danh từ hoàn chỉnh kèm mệnh đề rút gọn 'Online courses provided by the university' là Chủ ngữ." },
                { q: "In the morning, <b>my parents</b> usually drink hot tea together.", options: ["In the morning", "my parents", "drink", "hot tea"], a: 1, exp: "'my parents' là Chủ ngữ thực hiện hành động, 'In the morning' là Trạng ngữ (A)." }
            ]
        },
        {
            title: "Bài 2: Xác định Tân ngữ (Object)",
            type: "mcq",
            desc: "Chọn đáp án xác định đúng Tân ngữ (O) chịu tác động trực tiếp của hành động.",
            questions: [
                { q: "Students must submit <b>their final reports</b> before Friday.", options: ["Students", "must submit", "their final reports", "before Friday"], a: 2, exp: "'their final reports' là Tân ngữ trực tiếp nhận tác động từ hành động 'submit'." },
                { q: "Technology has changed <b>our daily communication</b> dramatically.", options: ["Technology", "our daily communication", "has changed", "dramatically"], a: 1, exp: "'our daily communication' là Tân ngữ của động từ 'changed'." }
            ]
        },
        {
            title: "Bài 3: Phân biệt Tân ngữ (O) và Bổ ngữ (C)",
            type: "mcq",
            desc: "Xác định thành phần in đậm là Tân ngữ (O) hay Bổ ngữ (C).",
            questions: [
                { q: "She became <b>a famous doctor</b> after years of study.", options: ["Tân ngữ (Object)", "Bổ ngữ (Complement)"], a: 1, exp: "Đứng sau động từ liên kết 'became' mô tả trạng thái chủ ngữ nên là Bổ ngữ (C)." },
                { q: "She bought <b>a famous book</b> yesterday.", options: ["Tân ngữ (Object)", "Bổ ngữ (Complement)"], a: 0, exp: "Đứng sau ngoại động từ 'bought' nhận tác động trực tiếp nên là Tân ngữ (O)." }
            ]
        },
        {
            title: "Bài 4: Nhận diện Trạng ngữ (Adverbial)",
            type: "mcq",
            desc: "Chọn thành phần đóng vai trò Trạng ngữ (A) chỉ thời gian, nơi chốn hoặc cách thức.",
            questions: [
                { q: "We will meet the manager <b>at the main office tomorrow</b>.", options: ["the manager", "will meet", "at the main office tomorrow", "We"], a: 2, exp: "'at the main office tomorrow' là Cụm trạng ngữ chỉ nơi chốn và thời gian." },
                { q: "The students listened to the lecture <b>attentively</b>.", options: ["The students", "listened to", "attentively", "the lecture"], a: 2, exp: "'attentively' là Trạng từ chỉ cách thức (Adverbial)." }
            ]
        },
        {
            title: "Bài 5: Phân tích đầy đủ cấu trúc câu S-V-O-C-A",
            type: "mcq",
            desc: "Xác định mô hình cấu trúc chuẩn của câu.",
            questions: [
                { q: "The committee appointed him chairman yesterday.", options: ["S - V - O - A", "S - V - O - C - A", "S - V - C - A", "S - V - O - O"], a: 1, exp: "The committee (S) + appointed (V) + him (O) + chairman (C) + yesterday (A)." },
                { q: "My father gave me a new laptop on my birthday.", options: ["S - V - O - O - A", "S - V - O - C - A", "S - V - O - A", "S - V - C - A"], a: 0, exp: "My father (S) + gave (V) + me (O gián tiếp) + a new laptop (O trực tiếp) + on my birthday (A)." }
            ]
        }
    ],
    structures: [
        {
            title: "Bài 1: Cấu trúc S + V (Nội động từ)",
            type: "trans",
            desc: "Dịch câu sử dụng cấu trúc S + V (không có tân ngữ theo sau).",
            questions: [
                { q: "Mặt trời mọc ở hướng đông.", a: ["The sun rises in the east."], hint: "Mặt trời (The sun), mọc (rises), ở hướng đông (in the east)." },
                { q: "Nhiều loài chim di cư vào mùa đông.", a: ["Many birds migrate in the winter.", "Many birds migrate in winter."], hint: "Nhiều loài chim (Many birds), di cư (migrate), vào mùa đông (in winter)." }
            ]
        },
        {
            title: "Bài 2: Cấu trúc S + V + O (Ngoại động từ)",
            type: "trans",
            desc: "Dịch câu sử dụng cấu trúc S + V + O.",
            questions: [
                { q: "Chính phủ nên bảo vệ môi trường.", a: ["The government should protect the environment."], hint: "Chính phủ (The government), nên bảo vệ (should protect), môi trường (the environment)." },
                { q: "Chúng tôi đã hoàn thành bài tập nhóm vào tối qua.", a: ["We finished the group assignment last night.", "We completed the group assignment last night."], hint: "hoàn thành (finished/completed), bài tập nhóm (the group assignment), tối qua (last night)." }
            ]
        },
        {
            title: "Bài 3: Cấu trúc S + V + C (Động từ liên kết)",
            type: "trans",
            desc: "Dịch câu sử dụng Động từ liên kết (is/am/are/look/feel/seem...).",
            questions: [
                { q: "Kỹ năng giao tiếp rất quan trọng đối với sinh viên tốt nghiệp.", a: ["Communication skills are very important for graduates.", "Communication skills are extremely important for graduates."], hint: "Kỹ năng giao tiếp (Communication skills), rất quan trọng (are very important), sinh viên tốt nghiệp (graduates)." },
                { q: "Kế hoạch này nghe có vẻ rất khả thi.", a: ["This plan sounds very feasible.", "This plan seems very feasible.", "This plan sounds very practical."], hint: "Kế hoạch này (This plan), nghe có vẻ (sounds), khả thi (feasible / practical)." }
            ]
        },
        {
            title: "Bài 4: Cấu trúc S + V + O + O (2 Tân ngữ)",
            type: "trans",
            desc: "Dịch câu có 2 tân ngữ (Tân ngữ gián tiếp & Tân ngữ trực tiếp).",
            questions: [
                { q: "Giáo viên gửi cho chúng tôi tài liệu ôn tập qua email.", a: ["The teacher sent us the revision materials via email.", "The teacher sent us the review materials by email."], hint: "gửi cho chúng tôi (sent us), tài liệu ôn tập (revision materials / review materials), qua email (via email / by email)." }
            ]
        },
        {
            title: "Bài 5: Cấu trúc S + V + O + C (Bổ ngữ cho tân ngữ)",
            type: "trans",
            desc: "Dịch câu sử dụng Bổ ngữ cho tân ngữ (make / keep / consider / find...).",
            questions: [
                { q: "Tập thể dục thường xuyên giữ cho cơ thể chúng ta khỏe mạnh.", a: ["Regular exercise keeps our body healthy.", "Exercising regularly keeps our body healthy."], hint: "Tập thể dục thường xuyên (Regular exercise), giữ cho cơ thể (keeps our body), khỏe mạnh (healthy)." },
                { q: "Họ bầu cô ấy làm trưởng nhóm.", a: ["They elected her team leader.", "They chose her as team leader.", "They appointed her team leader."], hint: "bầu (elected/appointed), cô ấy (her), trưởng nhóm (team leader)." }
            ]
        }
    ],
    nouns: [
        {
            title: "Bài 1: Nhận biết Danh từ qua Hậu tố (Suffixes)",
            type: "mcq",
            desc: "Chọn từ là Danh từ trong các nhóm từ dưới đây.",
            questions: [
                { q: "Từ nào dưới đây là Danh từ?", options: ["develop", "development", "developing", "developed"], a: 1, exp: "Đuôi -ment là hậu tố tạo danh từ (development = sự phát triển)." },
                { q: "Từ nào dưới đây là Danh từ?", options: ["significant", "significantly", "significance", "signify"], a: 2, exp: "Đuôi -ance là hậu tố tạo danh từ (significance = tầm quan trọng)." },
                { q: "Từ nào dưới đây là Danh từ?", options: ["pollution", "pollute", "polluted", "polluting"], a: 0, exp: "Đuôi -tion là hậu tố tạo danh từ (pollution = sự ô nhiễm)." }
            ]
        },
        {
            title: "Bài 2: Danh từ đếm được và Danh từ không đếm được",
            type: "mcq",
            desc: "Chọn câu sử dụng đúng lượng từ cho Danh từ.",
            questions: [
                { q: "Chọn câu đúng:", options: ["I need many informations about the course.", "I need much information about the course.", "I need an information about the course.", "I need many information about the course."], a: 1, exp: "'information' là danh từ không đếm được, dùng với 'much' và không thêm 's'." },
                { q: "Chọn câu đúng:", options: ["She gave me some useful advice.", "She gave me some useful advices.", "She gave me an advice.", "She gave me many advices."], a: 0, exp: "'advice' là danh từ không đếm được, không thêm 's'." }
            ]
        },
        {
            title: "Bài 3: Thành lập Cụm danh từ (Noun Phrases)",
            type: "trans",
            desc: "Dịch các Cụm danh từ hoàn chỉnh chuẩn VSTEP.",
            questions: [
                { q: "Một nguồn thông tin đáng tin cậy", a: ["A reliable source of information.", "A trustworthy source of information."], hint: "đáng tin cậy (reliable / trustworthy), nguồn thông tin (source of information)." },
                { q: "Các phương tiện giao thông công cộng hiện đại", a: ["Modern public transport vehicles.", "Modern public transportation systems.", "Modern public means of transport."], hint: "hiện đại (modern), giao thông công cộng (public transport / transportation)." }
            ]
        },
        {
            title: "Bài 4: Sửa lỗi sai về Danh từ",
            type: "mcq",
            desc: "Tìm từ bị dùng sai trong câu.",
            questions: [
                { q: "The <b>pollute</b> (A) of water causes severe <b>damage</b> (B) to marine <b>life</b> (C) in this <b>area</b> (D).", options: ["pollute", "damage", "life", "area"], a: 0, exp: "Sau 'The' và trước 'of' phải là Danh từ 'pollution' thay vì động từ 'pollute'." }
            ]
        },
        {
            title: "Bài 5: Dịch câu áp dụng Danh từ và Cụm danh từ",
            type: "trans",
            desc: "Dịch câu hoàn chỉnh sang tiếng Anh.",
            questions: [
                { q: "Sự ô nhiễm không khí ảnh hưởng nghiêm trọng đến sức khỏe con người.", a: ["Air pollution seriously affects human health.", "Air pollution has a serious impact on human health."], hint: "Sự ô nhiễm không khí (Air pollution), ảnh hưởng nghiêm trọng (seriously affects), sức khỏe con người (human health)." }
            ]
        }
    ],
    pronouns: [
        {
            title: "Bài 1: Đại từ nhân xưng & Tân ngữ",
            type: "mcq",
            desc: "Chọn đại từ đúng để điền vào chỗ trống.",
            questions: [
                { q: "The manager invited my colleagues and _____ to the annual conference.", options: ["I", "me", "myself", "mine"], a: 1, exp: "Đứng sau ngoại động từ 'invited' làm tân ngữ nên dùng 'me'." },
                { q: "_____ who work hard will achieve great results.", options: ["Them", "They", "Those", "Their"], a: 2, exp: "'Those who' là cấu trúc chỉ những người mà..." }
            ]
        },
        {
            title: "Bài 2: Tính từ sở hữu và Đại từ sở hữu",
            type: "mcq",
            desc: "Phân biệt Tính từ sở hữu (my, your, their...) và Đại từ sở hữu (mine, yours, theirs...).",
            questions: [
                { q: "This essay is well-written, but _____ has more creative ideas.", options: ["your", "yours", "you", "yourself"], a: 1, exp: "'yours' = your essay (đại từ sở hữu làm chủ ngữ)." }
            ]
        },
        {
            title: "Bài 3: Đại từ phản thân (Reflexive Pronouns)",
            type: "mcq",
            desc: "Chọn đại từ phản thân phù hợp.",
            questions: [
                { q: "Students should learn how to solve difficult problems by _____.", options: ["them", "their", "themselves", "theirs"], a: 2, exp: "'by themselves' = tự mình làm." }
            ]
        },
        {
            title: "Bài 4: Đại từ bất định (Indefinite Pronouns)",
            type: "mcq",
            desc: "Lựa chọn đại từ bất định đúng ngữ pháp.",
            questions: [
                { q: "_____ in the classroom was listening attentively to the teacher.", options: ["Everyone", "All students", "Many", "Both"], a: 0, exp: "'Everyone' đi với động từ số ít 'was'." }
            ]
        },
        {
            title: "Bài 5: Dịch câu sử dụng Đại từ linh hoạt",
            type: "trans",
            desc: "Dịch câu sang tiếng Anh, chú ý cách dùng đại từ.",
            questions: [
                { q: "Mỗi người nên tự chịu trách nhiệm về hành động của mình.", a: ["Everyone should take responsibility for their own actions.", "Each person should be responsible for their own actions."], hint: "Mỗi người (Everyone / Each person), tự chịu trách nhiệm (take responsibility for their own actions)." }
            ]
        }
    ],
    verbs: [
        {
            title: "Bài 1: Chia thì Hiện tại đơn và Hiện tại hoàn thành",
            type: "mcq",
            desc: "Chọn dạng đúng của động từ.",
            questions: [
                { q: "The company _____ innovative software solutions since 2020.", options: ["develops", "developed", "has developed", "is developing"], a: 2, exp: "Dấu hiệu 'since 2020' chia thì Hiện tại hoàn thành (has developed)." }
            ]
        },
        {
            title: "Bài 2: Sự hòa hợp Chủ - Vị (Subject-Verb Agreement)",
            type: "mcq",
            desc: "Chọn dạng động từ phù hợp với Chủ ngữ.",
            questions: [
                { q: "Neither the teacher nor the students _____ satisfied with the exam results.", options: ["is", "was", "were", "are being"], a: 2, exp: "Quy tắc 'Neither... nor...' chia theo chủ ngữ gần nhất 'the students' (số nhiều quá khứ -> were)." }
            ]
        },
        {
            title: "Bài 3: Động từ khiếm khuyết (Modal Verbs)",
            type: "mcq",
            desc: "Chọn động từ khiếm khuyết phù hợp ngữ cảnh.",
            questions: [
                { q: "Candidates _____ bring mobile phones into the exam room under any circumstances.", options: ["do not have to", "must not", "might not", "should not"], a: 1, exp: "'must not' diễn tả quy định cấm đoán nghiêm ngặt trong phòng thi." }
            ]
        },
        {
            title: "Bài 4: Sửa lỗi sai về Động từ trong câu",
            type: "mcq",
            desc: "Tìm lỗi sai trong câu.",
            questions: [
                { q: "She <b>can speaks</b> (A) three languages <b>fluently</b> (B) and <b>works</b> (C) as an <b>interpreter</b> (D).", options: ["can speaks", "fluently", "works", "interpreter"], a: 0, exp: "Sau động từ khiếm khuyết 'can' dùng động từ nguyên mẫu 'speak' không chia 'speaks'." }
            ]
        },
        {
            title: "Bài 5: Dịch câu Động từ & Thì chuẩn VSTEP",
            type: "trans",
            desc: "Dịch câu sang tiếng Anh.",
            questions: [
                { q: "Chúng tôi đã nghiên cứu vấn đề này trong nhiều năm.", a: ["We have researched this problem for many years.", "We have studied this issue for many years."], hint: "nghiên cứu (have researched / have studied), vấn đề này (this problem / this issue), trong nhiều năm (for many years)." }
            ]
        }
    ],
    adjectives: [
        {
            title: "Bài 1: Hậu tố tạo Tính từ",
            type: "mcq",
            desc: "Chọn từ là Tính từ.",
            questions: [
                { q: "Từ nào dưới đây là Tính từ?", options: ["create", "creation", "creative", "creatively"], a: 2, exp: "Đuôi -ive là hậu tố tạo tính từ (creative = có tính sáng tạo)." }
            ]
        },
        {
            title: "Bài 2: Trật tự Tính từ (OSASCOMP)",
            type: "mcq",
            desc: "Chọn trật tự tính từ đúng trước danh từ.",
            questions: [
                { q: "She bought a _____ bag yesterday.", options: ["leather beautiful black", "beautiful black leather", "black beautiful leather", "beautiful leather black"], a: 1, exp: "Trật tự OSASCOMP: Opinion (beautiful) -> Color (black) -> Material (leather)." }
            ]
        },
        {
            title: "Bài 3: Phân biệt Tính từ đuôi -ING và -ED",
            type: "mcq",
            desc: "Chọn tính từ phù hợp chỉ cảm xúc (-ed) hoặc bản chất (-ing).",
            questions: [
                { q: "The lecture was so _____ that many students felt _____.", options: ["boring / bored", "bored / boring", "boring / boring", "bored / bored"], a: 0, exp: "Bài giảng có bản chất gây chán (boring), sinh viên cảm thấy bị chán (bored)." }
            ]
        },
        {
            title: "Bài 4: Vị trí của Tính từ trong câu",
            type: "mcq",
            desc: "Chọn câu có vị trí tính từ chính xác.",
            questions: [
                { q: "Chọn câu đúng:", options: ["Online learning is an effective method.", "Online learning is an method effective.", "Online learning is effectively method.", "Online learning is effect method."], a: 0, exp: "Tính từ 'effective' đứng trước danh từ 'method' để bổ nghĩa." }
            ]
        },
        {
            title: "Bài 5: Dịch câu áp dụng Tính từ miêu tả",
            type: "trans",
            desc: "Dịch câu sang tiếng Anh.",
            questions: [
                { q: "Đây là một giải pháp hữu ích và tiết kiệm chi phí.", a: ["This is a useful and cost-effective solution.", "This is a helpful and cost-effective solution."], hint: "hữu ích (useful/helpful), tiết kiệm chi phí (cost-effective), giải pháp (solution)." }
            ]
        }
    ],
    adverbs: [
        {
            title: "Bài 1: Phân loại Trạng từ",
            type: "mcq",
            desc: "Xác định loại trạng từ trong câu.",
            questions: [
                { q: "Trong câu 'He spoke <b>fluently</b>', từ in đậm là trạng từ gì?", options: ["Chỉ thời gian", "Chỉ nơi chốn", "Chỉ cách thức (Manner)", "Chỉ tần suất"], a: 2, exp: "'fluently' bổ nghĩa cho động từ 'spoke', chỉ cách thức nói trôi chảy." }
            ]
        },
        {
            title: "Bài 2: Vị trí của Trạng từ tần suất",
            type: "mcq",
            desc: "Chọn vị trí đúng của trạng từ tần suất (usually, always, rarely...).",
            questions: [
                { q: "Chọn câu đúng:", options: ["She finishes always her work on time.", "She always finishes her work on time.", "She finishes her work always on time.", "Always she finishes her work on time."], a: 1, exp: "Trạng từ tần suất đứng trước động từ thường (always finishes)." }
            ]
        },
        {
            title: "Bài 3: Trạng từ bổ nghĩa cho Tính từ và Động từ",
            type: "mcq",
            desc: "Chọn trạng từ chỉ mức độ phù hợp.",
            questions: [
                { q: "The results of the experiment were _____ successful.", options: ["extreme", "extremely", "extremeness", "extremity"], a: 1, exp: "Dùng trạng từ 'extremely' để bổ nghĩa cho tính từ 'successful'." }
            ]
        },
        {
            title: "Bài 4: Sửa lỗi sai Trạng từ / Tính từ",
            type: "mcq",
            desc: "Tìm từ bị dùng sai.",
            questions: [
                { q: "The students performed <b>good</b> (A) in the final exam because they prepared <b>thoroughly</b> (B).", options: ["good", "thoroughly"], a: 0, exp: "Bổ nghĩa cho động từ 'performed' phải dùng trạng từ 'well' thay vì tính từ 'good'." }
            ]
        },
        {
            title: "Bài 5: Dịch câu sử dụng Trạng từ học thuật",
            type: "trans",
            desc: "Dịch câu sang tiếng Anh.",
            questions: [
                { q: "Công nghệ mới đã cải thiện đáng kể năng suất làm việc.", a: ["New technology has significantly improved work productivity.", "New technology has remarkably improved work productivity."], hint: "Công nghệ mới (New technology), cải thiện đáng kể (has significantly improved), năng suất làm việc (work productivity)." }
            ]
        }
    ],
    prepositions: [
        {
            title: "Bài 1: Giới từ chỉ thời gian (In, On, At)",
            type: "mcq",
            desc: "Chọn giới từ thời gian đúng.",
            questions: [
                { q: "The conference will take place _____ Monday morning, _____ 8:30 AM.", options: ["in / at", "on / at", "at / in", "on / in"], a: 1, exp: "Đi với buổi của một ngày cụ thể dùng 'on' (on Monday morning), đi với giờ cụ thể dùng 'at' (at 8:30 AM)." }
            ]
        },
        {
            title: "Bài 2: Giới từ chỉ nơi chốn",
            type: "mcq",
            desc: "Chọn giới từ nơi chốn phù hợp.",
            questions: [
                { q: "Many international students study _____ universities in Australia.", options: ["at", "on", "to", "with"], a: 0, exp: "'at universities' chỉ địa điểm học tập." }
            ]
        },
        {
            title: "Bài 3: Cụm giới từ cố định (Prepositional Phrases)",
            type: "mcq",
            desc: "Chọn giới từ đi kèm tính từ/động từ cố định.",
            questions: [
                { q: "Regular exercise is beneficial _____ mental health.", options: ["for", "to", "with", "about"], a: 1, exp: "Cấu trúc 'beneficial to' = có lợi cho." }
            ]
        },
        {
            title: "Bài 4: Sửa lỗi sai về Giới từ",
            type: "mcq",
            desc: "Tìm giới từ bị dùng sai.",
            questions: [
                { q: "The government should invest <b>on</b> (A) public transport to reduce traffic congestion <b>in</b> (B) cities.", options: ["on", "in"], a: 0, exp: "Cấu trúc chuẩn là 'invest in something' (đầu tư vào cái gì), sửa 'on' thành 'in'." }
            ]
        },
        {
            title: "Bài 5: Dịch câu có Cụm giới từ chỉ thời gian & nơi chốn",
            type: "trans",
            desc: "Dịch câu hoàn chỉnh sang tiếng Anh.",
            questions: [
                { q: "Vào mùa hè, nhiều gia đình đi du lịch ở các thành phố biển.", a: ["In the summer, many families travel to coastal cities.", "In summer, many families travel to coastal cities."], hint: "Vào mùa hè (In the summer), nhiều gia đình (many families), đi du lịch ở (travel to), thành phố biển (coastal cities)." }
            ]
        }
    ],
    conjunctions: [
        {
            title: "Bài 1: Liên từ kết hợp (FANBOYS)",
            type: "mcq",
            desc: "Chọn liên từ kết hợp đúng trong câu ghép.",
            questions: [
                { q: "The weather was cold and rainy, _____ we still enjoyed our trip.", options: ["so", "yet", "for", "or"], a: 1, exp: "'yet' mang nghĩa nhưng / tuy nhiên chỉ sự đối lập trong câu ghép." }
            ]
        },
        {
            title: "Bài 2: Liên từ phụ thuộc (Because, Although, Since...)",
            type: "mcq",
            desc: "Chọn liên từ phụ thuộc mở đầu mệnh đề.",
            questions: [
                { q: "_____ the company faced financial difficulties, it continued to support its employees.", options: ["Because", "Although", "However", "Therefore"], a: 1, exp: "'Although' mở đầu mệnh đề chỉ sự nhượng bộ đứng đầu câu." }
            ]
        },
        {
            title: "Bài 3: Từ liên kết chuyển đoạn (However, In addition...)",
            type: "mcq",
            desc: "Chọn từ liên kết đứng đầu câu có dấu phẩy.",
            questions: [
                { q: "Online shopping is fast and convenient. _____, it may lead to impulsive buying.", options: ["Therefore,", "However,", "Moreover,", "For example,"], a: 1, exp: "Vế sau chỉ mặt trái đối lập với sự tiện lợi nên dùng 'However,'." }
            ]
        },
        {
            title: "Bài 4: Liên từ tương quan (Both...and, Not only...but also)",
            type: "mcq",
            desc: "Chọn cặp liên từ tương quan phù hợp.",
            questions: [
                { q: "The course provides _____ theoretical knowledge _____ practical experience.", options: ["both / and", "either / nor", "neither / or", "not / but"], a: 0, exp: "Cặp liên từ 'both ... and ...' nối 2 danh từ tương đương." }
            ]
        },
        {
            title: "Bài 5: Dịch câu ghép và câu phức với Từ nối",
            type: "trans",
            desc: "Dịch câu sang tiếng Anh.",
            questions: [
                { q: "Mặc dù chi phí sinh hoạt ở thành phố cao, nhiều người vẫn chọn sống ở đó.", a: ["Although the cost of living in the city is high, many people still choose to live there.", "Even though the cost of living in the city is high, many people still choose to live there."], hint: "Mặc dù (Although / Even though), chi phí sinh hoạt (the cost of living), ở thành phố (in the city), chọn sống ở đó (choose to live there)." }
            ]
        }
    ]
};

// ==================== RENDER GIAO DIỆN TỰ LUYỆN TẬP ====================
let currentSelfTopicId = 'components';
let currentSelfExerciseIdx = 0;
let selfPracticeUserAnswers = {}; // key: `${topicId}_${exIdx}_${qIdx}`

window.renderSelfPracticeView = function() {
    let topicNavHtml = selfPracticeTopics.map(t => `
        <button onclick="window.switchSelfTopic('${t.id}')" class="tab-pill ${currentSelfTopicId === t.id ? 'active' : ''}" style="white-space: nowrap; font-size: 0.95rem; padding: 8px 16px; display: flex; align-items: center; gap: 6px;">
            <span>${t.icon}</span> <span>${t.title}</span>
        </button>
    `).join('');

    const curTopic = selfPracticeTopics.find(t => t.id === currentSelfTopicId) || selfPracticeTopics[0];
    const exercises = selfPracticeData[currentSelfTopicId] || [];

    let exTabsHtml = exercises.map((ex, idx) => `
        <button onclick="window.switchSelfExercise(${idx})" style="padding: 10px 18px; border-radius: 10px; border: 2px solid ${currentSelfExerciseIdx === idx ? 'var(--primary-color)' : '#e2e8f0'}; background: ${currentSelfExerciseIdx === idx ? 'var(--primary-light)' : 'white'}; color: ${currentSelfExerciseIdx === idx ? 'var(--primary-color)' : '#475569'}; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1rem;">
            Bài ${idx + 1}
        </button>
    `).join('');

    const curEx = exercises[currentSelfExerciseIdx] || exercises[0];

    let questionsHtml = '';
    if (curEx.type === 'mcq') {
        questionsHtml = curEx.questions.map((q, qIdx) => {
            const ansKey = `${currentSelfTopicId}_${currentSelfExerciseIdx}_${qIdx}`;
            const userChoice = selfPracticeUserAnswers[ansKey];
            return `
                <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                    <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px;">
                        <div style="background: #eff6ff; color: #2563eb; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${qIdx + 1}</div>
                        <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin: 4px 0 0 0;">${q.q}</p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; padding-left: 44px;">
                        ${q.options.map((opt, optIdx) => `
                            <button id="self_opt_${qIdx}_${optIdx}" onclick="window.selectSelfOption('${currentSelfTopicId}', ${currentSelfExerciseIdx}, ${qIdx}, ${optIdx})" style="padding: 10px 14px; border: 2px solid ${userChoice === optIdx ? 'var(--primary-color)' : '#e2e8f0'}; border-radius: 8px; background: ${userChoice === optIdx ? 'var(--primary-light)' : 'white'}; color: ${userChoice === optIdx ? 'var(--primary-color)' : '#334155'}; text-align: left; font-size: 1rem; cursor: pointer; transition: all 0.2s; font-weight: 500;">
                                <b>${String.fromCharCode(65 + optIdx)}.</b> ${opt}
                            </button>
                        `).join('')}
                    </div>
                    <div style="padding-left: 44px;">
                        <div id="self_exp_${qIdx}" style="display: none; margin-top: 14px; padding: 10px 14px; border-radius: 8px; font-size: 1rem;"></div>
                    </div>
                </div>
            `;
        }).join('');
    } else if (curEx.type === 'trans') {
        questionsHtml = curEx.questions.map((q, qIdx) => {
            const ansKey = `${currentSelfTopicId}_${currentSelfExerciseIdx}_${qIdx}`;
            const userVal = selfPracticeUserAnswers[ansKey] || '';
            return `
                <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                    <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                        <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${qIdx + 1}</div>
                        <div style="flex-grow: 1;">
                            <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin: 4px 0 8px 0;">${q.q}</p>
                            ${q.hint ? `
                                <button onclick="const h = document.getElementById('self_hint_${qIdx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;">
                                    <span style="font-size: 1.1rem">💡</span> Xem gợi ý
                                </button>
                                <div id="self_hint_${qIdx}" style="display: none; background: #f0f9ff; border-left: 4px solid #38bdf8; padding: 12px; border-radius: 4px; margin-bottom: 14px; font-size: 0.95rem; color: #0c4a6e; line-height: 1.6;">${q.hint}</div>
                            ` : ''}
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                        <input type="text" id="self_trans_input_${qIdx}" placeholder="Nhập bản dịch tiếng Anh (nhớ có dấu chấm cuối câu)..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.saveSelfTransInput('${currentSelfTopicId}', ${currentSelfExerciseIdx}, ${qIdx}, this.value)" value="${userVal}">
                        <button onclick="window.checkSelfTransSingle(${qIdx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                    </div>
                    <div style="padding-left: 44px;">
                        <div id="self_exp_${qIdx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 960px; margin: 0 auto; padding-bottom: 50px;">
            <div style="margin-bottom: 24px;">
                <h1 class="page-title" style="text-align: left; margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                    <span>🎯</span> TỰ LUYỆN TẬP TỔNG HỢP
                </h1>
                <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">Kho ngân hàng bài tập tự luyện gồm 9 chủ điểm (Chương 1 & Chương 2), mỗi chủ điểm có 5 bài luyện tập đa dạng.</p>
            </div>

            <!-- MENU CHỌN CHỦ ĐIỂM -->
            <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 24px; border-bottom: 1px solid #e2e8f0;">
                ${topicNavHtml}
            </div>

            <!-- HEADER CHỦ ĐIỂM ĐANG CHỌN -->
            <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 24px; border-top: 6px solid var(--primary-color);">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
                    <div>
                        <span style="background: var(--primary-light); color: var(--primary-color); font-weight: bold; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem;">${curTopic.chapter}</span>
                        <h2 style="color: var(--primary-color); font-size: 1.45rem; font-weight: 800; margin: 8px 0 4px 0;">${curTopic.title}</h2>
                        <p style="color: var(--text-muted); margin: 0; font-size: 1.05rem;">${curTopic.desc}</p>
                    </div>
                </div>

                <!-- TABS 5 BÀI TẬP -->
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px; border-top: 1px dashed #e2e8f0; padding-top: 16px;">
                    ${exTabsHtml}
                </div>
            </div>

            <!-- KHU VỰC BÀI TẬP -->
            <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 24px;">
                <h3 style="color: #1e293b; font-size: 1.3rem; font-weight: 800; margin-bottom: 6px;">${curEx.title}</h3>
                <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 20px;">${curEx.desc}</p>
                
                <div>
                    ${questionsHtml}
                </div>

                <div style="text-align: center; margin-top: 24px;">
                    <button onclick="window.submitCurrentSelfExercise()" style="padding: 12px 36px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">
                        NỘP BÀI ${currentSelfExerciseIdx + 1}
                    </button>
                </div>
            </div>
        </div>
    `;
};

window.switchSelfTopic = function(topicId) {
    currentSelfTopicId = topicId;
    currentSelfExerciseIdx = 0;
    renderSelfPracticeView();
};

window.switchSelfExercise = function(exIdx) {
    currentSelfExerciseIdx = exIdx;
    renderSelfPracticeView();
};

window.selectSelfOption = function(topicId, exIdx, qIdx, optIdx) {
    const ansKey = `${topicId}_${exIdx}_${qIdx}`;
    selfPracticeUserAnswers[ansKey] = optIdx;
    
    const curEx = selfPracticeData[topicId][exIdx];
    for (let i = 0; i < curEx.questions[qIdx].options.length; i++) {
        const btn = document.getElementById(`self_opt_${qIdx}_${i}`);
        if (btn) {
            if (i === optIdx) {
                btn.style.borderColor = 'var(--primary-color)';
                btn.style.background = 'var(--primary-light)';
                btn.style.color = 'var(--primary-color)';
            } else {
                btn.style.borderColor = '#e2e8f0';
                btn.style.background = 'white';
                btn.style.color = '#334155';
            }
        }
    }
    const expDiv = document.getElementById(`self_exp_${qIdx}`);
    if (expDiv) expDiv.style.display = 'none';
};

window.saveSelfTransInput = function(topicId, exIdx, qIdx, val) {
    const ansKey = `${topicId}_${exIdx}_${qIdx}`;
    selfPracticeUserAnswers[ansKey] = val;
    const expDiv = document.getElementById(`self_exp_${qIdx}`);
    if (expDiv) expDiv.style.display = 'none';
};

window.checkSelfTransSingle = function(qIdx) {
    const curEx = selfPracticeData[currentSelfTopicId][currentSelfExerciseIdx];
    const q = curEx.questions[qIdx];
    const ansKey = `${currentSelfTopicId}_${currentSelfExerciseIdx}_${qIdx}`;
    const val = (selfPracticeUserAnswers[ansKey] || "").trim();
    const expDiv = document.getElementById(`self_exp_${qIdx}`);

    if (!val) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = "⚠️ Bạn chưa nhập câu trả lời!";
        return;
    }

    const cleanUser = window.normalizeText(val);
    const isCorrect = q.a.some(ans => window.normalizeText(ans) === cleanUser);
    const hasDot = val.endsWith('.');

    expDiv.style.display = 'block';

    if (isCorrect && hasDot) {
        expDiv.style.background = '#f0fdf4';
        expDiv.style.color = '#166534';
        expDiv.style.border = '1px solid #bbf7d0';
        expDiv.innerHTML = "✅ <b>Chính xác!</b> Bạn dịch câu rất chuẩn xác.";
    } else if (isCorrect && !hasDot) {
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = "⚠️ <b>Gần đúng!</b> Cuối câu bắt buộc phải có dấu chấm nhé!";
    } else {
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = `❌ <b>Chưa chính xác.</b><br><br><b>💡 Gợi ý đáp án chuẩn:</b><br>- ${q.a.join('<br>- ')}`;
    }
};

window.submitCurrentSelfExercise = function() {
    const curEx = selfPracticeData[currentSelfTopicId][currentSelfExerciseIdx];
    let correctCount = 0;
    let completed = true;

    if (curEx.type === 'mcq') {
        curEx.questions.forEach((q, qIdx) => {
            const ansKey = `${currentSelfTopicId}_${currentSelfExerciseIdx}_${qIdx}`;
            const userChoice = selfPracticeUserAnswers[ansKey];
            const expDiv = document.getElementById(`self_exp_${qIdx}`);
            
            if (userChoice === null || userChoice === undefined) {
                completed = false;
            }

            if (userChoice === q.a) {
                correctCount++;
                expDiv.style.display = 'block';
                expDiv.style.background = '#f0fdf4';
                expDiv.style.color = '#166534';
                expDiv.style.border = '1px solid #bbf7d0';
                expDiv.innerHTML = `✅ <b>Chính xác!</b> ${q.exp}`;
            } else if (userChoice !== null && userChoice !== undefined) {
                expDiv.style.display = 'block';
                expDiv.style.background = '#fef2f2';
                expDiv.style.color = '#991b1b';
                expDiv.style.border = '1px solid #fecaca';
                expDiv.innerHTML = `❌ <b>Sai rồi!</b> Đáp án đúng là <b>${String.fromCharCode(65 + q.a)}. ${q.options[q.a]}</b>.<br>${q.exp}`;
            }
        });
    } else if (curEx.type === 'trans') {
        curEx.questions.forEach((q, qIdx) => {
            const ansKey = `${currentSelfTopicId}_${currentSelfExerciseIdx}_${qIdx}`;
            const val = (selfPracticeUserAnswers[ansKey] || "").trim();
            if (!val) completed = false;
            if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val)) && val.endsWith('.')) {
                correctCount++;
            }
            window.checkSelfTransSingle(qIdx);
        });
    }

    if (!completed) {
        alert("Vui lòng hoàn thành tất cả các câu trước khi nộp bài!");
        return;
    }

    window.showExerciseResult(correctCount, curEx.questions.length, `KẾT QUẢ: ${curEx.title.toUpperCase()}`);
};
