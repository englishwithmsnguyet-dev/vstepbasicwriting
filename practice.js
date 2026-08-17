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

const selfPracticeData = {
    "components": [
        {
            "title": "Bài 1: Xác định Chủ ngữ (Subject)",
            "type": "mcq",
            "desc": "Chọn đáp án xác định đúng Chủ ngữ trong câu dưới đây.",
            "questions": [
                {
                    "q": "<b>Taking regular exercise</b> helps improve both physical and mental health.",
                    "options": [
                        "Taking regular exercise",
                        "helps",
                        "improve",
                        "mental health"
                    ],
                    "a": 0,
                    "exp": "Cụm danh động từ 'Taking regular exercise' đóng vai trò là Chủ ngữ (S)."
                },
                {
                    "q": "<b>Online courses provided by the university</b> are very convenient.",
                    "options": [
                        "the university",
                        "Online courses",
                        "convenient",
                        "Online courses provided by the university"
                    ],
                    "a": 3,
                    "exp": "Cụm danh từ hoàn chỉnh kèm mệnh đề rút gọn 'Online courses provided by the university' là Chủ ngữ."
                },
                {
                    "q": "In the morning, <b>my parents</b> usually drink hot tea together.",
                    "options": [
                        "In the morning",
                        "my parents",
                        "drink",
                        "hot tea"
                    ],
                    "a": 1,
                    "exp": "'my parents' là Chủ ngữ thực hiện hành động, 'In the morning' là Trạng ngữ (A)."
                },
                {
                    "q": "<b>To learn a foreign language effectively</b> requires consistent practice.",
                    "options": [
                        "To learn a foreign language effectively",
                        "requires",
                        "consistent practice",
                        "effectively"
                    ],
                    "a": 0,
                    "exp": "Cụm động từ nguyên mẫu 'To learn a foreign language effectively' đóng vai trò là Chủ ngữ."
                },
                {
                    "q": "<b>The development of modern technology</b> has changed the world significantly.",
                    "options": [
                        "The development",
                        "The development of modern technology",
                        "modern technology",
                        "the world"
                    ],
                    "a": 1,
                    "exp": "Cụm danh từ 'The development of modern technology' là Chủ ngữ của câu."
                }
            ]
        },
        {
            "title": "Bài 2: Xác định Tân ngữ (Object)",
            "type": "mcq",
            "desc": "Chọn đáp án xác định đúng Tân ngữ (O) chịu tác động trực tiếp của hành động.",
            "questions": [
                {
                    "q": "Students must submit <b>their final reports</b> before Friday.",
                    "options": [
                        "Students",
                        "must submit",
                        "their final reports",
                        "before Friday"
                    ],
                    "a": 2,
                    "exp": "'their final reports' là Tân ngữ trực tiếp nhận tác động từ hành động 'submit'."
                },
                {
                    "q": "Technology has changed <b>our daily communication</b> dramatically.",
                    "options": [
                        "Technology",
                        "our daily communication",
                        "has changed",
                        "dramatically"
                    ],
                    "a": 1,
                    "exp": "'our daily communication' là Tân ngữ của động từ 'changed'."
                },
                {
                    "q": "The committee will evaluate <b>all the submitted proposals</b> next week.",
                    "options": [
                        "The committee",
                        "will evaluate",
                        "all the submitted proposals",
                        "next week"
                    ],
                    "a": 2,
                    "exp": "'all the submitted proposals' là Tân ngữ trực tiếp của 'evaluate'."
                },
                {
                    "q": "Children should avoid <b>fast food and sugary drinks</b>.",
                    "options": [
                        "Children",
                        "should avoid",
                        "fast food and sugary drinks",
                        "sugary drinks"
                    ],
                    "a": 2,
                    "exp": "'fast food and sugary drinks' là cụm Tân ngữ chịu tác động từ 'avoid'."
                },
                {
                    "q": "My brother built <b>a modern wooden house</b> for his family.",
                    "options": [
                        "My brother",
                        "built",
                        "a modern wooden house",
                        "his family"
                    ],
                    "a": 2,
                    "exp": "'a modern wooden house' là Tân ngữ trực tiếp của 'built'."
                }
            ]
        },
        {
            "title": "Bài 3: Phân biệt Tân ngữ (O) và Bổ ngữ (C)",
            "type": "mcq",
            "desc": "Xác định thành phần in đậm là Tân ngữ (O) hay Bổ ngữ (C).",
            "questions": [
                {
                    "q": "She became <b>a famous doctor</b> after years of study.",
                    "options": [
                        "Tân ngữ (Object)",
                        "Bổ ngữ (Complement)"
                    ],
                    "a": 1,
                    "exp": "Đứng sau động từ liên kết 'became' mô tả trạng thái chủ ngữ nên là Bổ ngữ (C)."
                },
                {
                    "q": "She bought <b>a famous book</b> yesterday.",
                    "options": [
                        "Tân ngữ (Object)",
                        "Bổ ngữ (Complement)"
                    ],
                    "a": 0,
                    "exp": "Đứng sau ngoại động từ 'bought' nhận tác động trực tiếp nên là Tân ngữ (O)."
                },
                {
                    "q": "The weather turned <b>extremely cold</b> last night.",
                    "options": [
                        "Tân ngữ (Object)",
                        "Bổ ngữ (Complement)"
                    ],
                    "a": 1,
                    "exp": "'turned' là động từ liên kết, 'extremely cold' là Bổ ngữ mô tả thời tiết."
                },
                {
                    "q": "The company hired <b>an experienced manager</b>.",
                    "options": [
                        "Tân ngữ (Object)",
                        "Bổ ngữ (Complement)"
                    ],
                    "a": 0,
                    "exp": "'an experienced manager' là Tân ngữ nhận tác động từ 'hired'."
                },
                {
                    "q": "The food in this restaurant tastes <b>delicious</b>.",
                    "options": [
                        "Tân ngữ (Object)",
                        "Bổ ngữ (Complement)"
                    ],
                    "a": 1,
                    "exp": "'delicious' là Bổ ngữ đứng sau động từ cảm giác 'tastes'."
                }
            ]
        },
        {
            "title": "Bài 4: Nhận diện Trạng ngữ (Adverbial)",
            "type": "mcq",
            "desc": "Chọn thành phần đóng vai trò Trạng ngữ (A) chỉ thời gian, nơi chốn hoặc cách thức.",
            "questions": [
                {
                    "q": "We will meet the manager <b>at the main office tomorrow</b>.",
                    "options": [
                        "the manager",
                        "will meet",
                        "at the main office tomorrow",
                        "We"
                    ],
                    "a": 2,
                    "exp": "'at the main office tomorrow' là Cụm trạng ngữ chỉ nơi chốn và thời gian."
                },
                {
                    "q": "The students listened to the lecture <b>attentively</b>.",
                    "options": [
                        "The students",
                        "listened to",
                        "attentively",
                        "the lecture"
                    ],
                    "a": 2,
                    "exp": "'attentively' là Trạng từ chỉ cách thức (Adverbial)."
                },
                {
                    "q": "<b>Due to the heavy rain</b>, the football match was postponed.",
                    "options": [
                        "Due to the heavy rain",
                        "the football match",
                        "was postponed",
                        "the rain"
                    ],
                    "a": 0,
                    "exp": "'Due to the heavy rain' là Trạng ngữ chỉ nguyên nhân."
                },
                {
                    "q": "She usually visits her grandparents <b>on Sunday afternoons</b>.",
                    "options": [
                        "She",
                        "visits",
                        "her grandparents",
                        "on Sunday afternoons"
                    ],
                    "a": 3,
                    "exp": "'on Sunday afternoons' là Trạng ngữ chỉ thời gian."
                },
                {
                    "q": "They worked <b>extremely hard</b> to complete the project on time.",
                    "options": [
                        "They",
                        "worked",
                        "extremely hard",
                        "the project"
                    ],
                    "a": 2,
                    "exp": "'extremely hard' là Trạng từ chỉ cách thức/mức độ."
                }
            ]
        },
        {
            "title": "Bài 5: Phân tích đầy đủ cấu trúc câu S-V-O-C-A",
            "type": "mcq",
            "desc": "Xác định mô hình cấu trúc chuẩn của câu.",
            "questions": [
                {
                    "q": "The committee appointed him chairman yesterday.",
                    "options": [
                        "S - V - O - A",
                        "S - V - O - C - A",
                        "S - V - C - A",
                        "S - V - O - O"
                    ],
                    "a": 1,
                    "exp": "The committee (S) + appointed (V) + him (O) + chairman (C) + yesterday (A)."
                },
                {
                    "q": "My father gave me a new laptop on my birthday.",
                    "options": [
                        "S - V - O - O - A",
                        "S - V - O - C - A",
                        "S - V - O - A",
                        "S - V - C - A"
                    ],
                    "a": 0,
                    "exp": "My father (S) + gave (V) + me (O gián tiếp) + a new laptop (O trực tiếp) + on my birthday (A)."
                },
                {
                    "q": "The little girl is sleeping peacefully in her bedroom.",
                    "options": [
                        "S - V - A - A",
                        "S - V - O - A",
                        "S - V - C - A",
                        "S - V - O - C"
                    ],
                    "a": 0,
                    "exp": "The little girl (S) + is sleeping (V) + peacefully (A) + in her bedroom (A)."
                },
                {
                    "q": "The delicious meal made everyone happy.",
                    "options": [
                        "S - V - O - C",
                        "S - V - O - O",
                        "S - V - O - A",
                        "S - V - C - A"
                    ],
                    "a": 0,
                    "exp": "The delicious meal (S) + made (V) + everyone (O) + happy (C)."
                },
                {
                    "q": "She became a successful businesswoman after five years.",
                    "options": [
                        "S - V - C - A",
                        "S - V - O - A",
                        "S - V - O - C",
                        "S - V - A - A"
                    ],
                    "a": 0,
                    "exp": "She (S) + became (V liên kết) + a successful businesswoman (C) + after five years (A)."
                }
            ]
        }
    ],
    "structures": [
        {
            "title": "Bài 1: Xác định cấu trúc câu S + V",
            "type": "mcq",
            "desc": "Xác định câu nào dưới đây mang cấu trúc S + V (Chủ ngữ + Nội động từ).",
            "questions": [
                {
                    "q": "Câu nào dưới đây có cấu trúc <b>S + V</b>?",
                    "options": [
                        "The sun rises in the east.",
                        "She loves English music.",
                        "They bought a new car.",
                        "He is a doctor."
                    ],
                    "a": 0,
                    "exp": "The sun (S) + rises (V) + in the east (A) là cấu trúc S + V."
                },
                {
                    "q": "Câu 'Many birds migrate in the winter' thuộc cấu trúc nào?",
                    "options": [
                        "S + V",
                        "S + V + O",
                        "S + V + C",
                        "S + V + O + C"
                    ],
                    "a": 0,
                    "exp": "Many birds (S) + migrate (V nội động từ) + in the winter (A)."
                },
                {
                    "q": "Câu nào dưới đây sử dụng <b>Nội động từ</b> (không có tân ngữ theo sau)?",
                    "options": [
                        "The baby is sleeping soundly.",
                        "She ate an apple.",
                        "We visited our teacher.",
                        "He wrote a letter."
                    ],
                    "a": 0,
                    "exp": "is sleeping là nội động từ, soundly là trạng từ chỉ cách thức."
                },
                {
                    "q": "Câu 'The accident happened last night' thuộc cấu trúc nào?",
                    "options": [
                        "S + V",
                        "S + V + O",
                        "S + V + C",
                        "S + V + O + O"
                    ],
                    "a": 0,
                    "exp": "The accident (S) + happened (V) + last night (A)."
                },
                {
                    "q": "Trong câu 'Water boils at 100 degrees Celsius', động từ 'boils' là:",
                    "options": [
                        "Nội động từ trong cấu trúc S + V",
                        "Ngoại động từ trong cấu trúc S + V + O",
                        "Động từ liên kết",
                        "Trợ động từ"
                    ],
                    "a": 0,
                    "exp": "'boils' là nội động từ diễn tả hành động tự thân của chủ ngữ."
                }
            ]
        },
        {
            "title": "Bài 2: Xác định cấu trúc câu S + V + O",
            "type": "mcq",
            "desc": "Xác định các thành phần trong cấu trúc S + V + O (Ngoại động từ + Tân ngữ).",
            "questions": [
                {
                    "q": "Câu nào dưới đây có cấu trúc <b>S + V + O</b>?",
                    "options": [
                        "The government should protect the environment.",
                        "The train arrived late.",
                        "She looks very happy.",
                        "They were sleeping."
                    ],
                    "a": 0,
                    "exp": "The government (S) + should protect (V) + the environment (O)."
                },
                {
                    "q": "Trong câu 'Many young people use social media every day', 'social media' đóng vai trò là:",
                    "options": [
                        "Tân ngữ (O)",
                        "Bổ ngữ (C)",
                        "Chủ ngữ (S)",
                        "Trạng ngữ (A)"
                    ],
                    "a": 0,
                    "exp": "'social media' là tân ngữ trực tiếp chịu tác động của 'use'."
                },
                {
                    "q": "Câu nào dưới đây <b>KHÔNG</b> phải là cấu trúc S + V + O?",
                    "options": [
                        "The students are listening attentively.",
                        "We finished the group assignment.",
                        "She read an interesting book.",
                        "He drives a modern car."
                    ],
                    "a": 0,
                    "exp": "'The students are listening attentively' là cấu trúc S + V (are listening là nội động từ)."
                },
                {
                    "q": "Câu 'Students should read many English books' thuộc cấu trúc nào?",
                    "options": [
                        "S + V + O",
                        "S + V",
                        "S + V + C",
                        "S + V + O + C"
                    ],
                    "a": 0,
                    "exp": "Students (S) + should read (V) + many English books (O)."
                },
                {
                    "q": "Xác định mô hình của câu 'This company produced modern electric cars':",
                    "options": [
                        "S + V + O",
                        "S + V + C",
                        "S + V + A",
                        "S + V + O + C"
                    ],
                    "a": 0,
                    "exp": "This company (S) + produced (V) + modern electric cars (O)."
                }
            ]
        },
        {
            "title": "Bài 3: Xác định cấu trúc câu S + V + C",
            "type": "mcq",
            "desc": "Nhận diện cấu trúc S + V + C với Động từ liên kết (Linking verbs).",
            "questions": [
                {
                    "q": "Câu nào dưới đây có cấu trúc <b>S + V + C</b>?",
                    "options": [
                        "Communication skills are very important for graduates.",
                        "She bought a new dress.",
                        "They painted the wall green.",
                        "We gave him a gift."
                    ],
                    "a": 0,
                    "exp": "Communication skills (S) + are (V liên kết) + very important (C) + for graduates (A)."
                },
                {
                    "q": "Trong câu 'This plan sounds very feasible', 'very feasible' là:",
                    "options": [
                        "Bổ ngữ cho chủ ngữ (Subject Complement)",
                        "Tân ngữ trực tiếp",
                        "Trạng ngữ chỉ thời gian",
                        "Tân ngữ gián tiếp"
                    ],
                    "a": 0,
                    "exp": "'very feasible' là Bổ ngữ đứng sau linking verb 'sounds'."
                },
                {
                    "q": "Câu 'The weather became colder at night' thuộc cấu trúc nào?",
                    "options": [
                        "S + V + C",
                        "S + V + O",
                        "S + V",
                        "S + V + O + C"
                    ],
                    "a": 0,
                    "exp": "The weather (S) + became (V liên kết) + colder (C) + at night (A)."
                },
                {
                    "q": "Câu nào dưới đây sử dụng <b>Động từ liên kết (Linking verb)</b>?",
                    "options": [
                        "She looked very confident in the interview.",
                        "She looked at the picture.",
                        "She bought a picture.",
                        "She painted a picture."
                    ],
                    "a": 0,
                    "exp": "'looked' trong câu A mang nghĩa 'trông có vẻ' (Linking verb)."
                },
                {
                    "q": "Xác định cấu trúc của câu 'This soup tastes delicious':",
                    "options": [
                        "S + V + C",
                        "S + V + O",
                        "S + V",
                        "S + V + O + O"
                    ],
                    "a": 0,
                    "exp": "This soup (S) + tastes (V liên kết) + delicious (C)."
                }
            ]
        },
        {
            "title": "Bài 4: Xác định cấu trúc câu S + V + O + O (2 Tân ngữ)",
            "type": "mcq",
            "desc": "Nhận diện cấu trúc 2 Tân ngữ: Tân ngữ gián tiếp (người) & Tân ngữ trực tiếp (vật).",
            "questions": [
                {
                    "q": "Câu nào dưới đây có cấu trúc <b>S + V + O + O</b>?",
                    "options": [
                        "The teacher sent us the revision materials via email.",
                        "The teacher explained the lesson clearly.",
                        "The teacher became the principal.",
                        "The teacher made the lesson interesting."
                    ],
                    "a": 0,
                    "exp": "The teacher (S) + sent (V) + us (O gián tiếp) + the revision materials (O trực tiếp) + via email (A)."
                },
                {
                    "q": "Trong câu 'My father bought me a new laptop', 'me' và 'a new laptop' lần lượt là:",
                    "options": [
                        "Tân ngữ gián tiếp & Tân ngữ trực tiếp",
                        "Tân ngữ trực tiếp & Bổ ngữ",
                        "Chủ ngữ & Tân ngữ",
                        "Tân ngữ & Trạng ngữ"
                    ],
                    "a": 0,
                    "exp": "'me' là tân ngữ gián tiếp (chỉ người nhận), 'a new laptop' là tân ngữ trực tiếp (vật)."
                },
                {
                    "q": "Câu 'They told us an interesting story' thuộc cấu trúc nào?",
                    "options": [
                        "S + V + O + O",
                        "S + V + O + C",
                        "S + V + O",
                        "S + V + C"
                    ],
                    "a": 0,
                    "exp": "They (S) + told (V) + us (O gián tiếp) + an interesting story (O trực tiếp)."
                },
                {
                    "q": "Câu nào dưới đây có thể viết lại thành cấu trúc có 'to' hoặc 'for'?",
                    "options": [
                        "She teaches students useful lessons.",
                        "She is very kind to students.",
                        "She loves teaching students.",
                        "She makes students happy."
                    ],
                    "a": 0,
                    "exp": "She teaches students useful lessons = She teaches useful lessons to students (S + V + O + O)."
                },
                {
                    "q": "Xác định cấu trúc câu 'My friend lent me his dictionary':",
                    "options": [
                        "S + V + O + O",
                        "S + V + O + C",
                        "S + V + C",
                        "S + V + O"
                    ],
                    "a": 0,
                    "exp": "My friend (S) + lent (V) + me (O1) + his dictionary (O2)."
                }
            ]
        },
        {
            "title": "Bài 5: Xác định cấu trúc câu S + V + O + C (Bổ ngữ cho tân ngữ)",
            "type": "mcq",
            "desc": "Nhận diện cấu trúc S + V + O + C với các động từ make, keep, elect, consider, find...",
            "questions": [
                {
                    "q": "Câu nào dưới đây có cấu trúc <b>S + V + O + C</b>?",
                    "options": [
                        "Regular exercise keeps our body healthy.",
                        "Regular exercise is good for our body.",
                        "We do regular exercise every day.",
                        "Regular exercise gives us many benefits."
                    ],
                    "a": 0,
                    "exp": "Regular exercise (S) + keeps (V) + our body (O) + healthy (C bổ nghĩa cho our body)."
                },
                {
                    "q": "Trong câu 'They elected her team leader', 'team leader' là:",
                    "options": [
                        "Bổ ngữ cho tân ngữ (Object Complement)",
                        "Tân ngữ gián tiếp",
                        "Tân ngữ trực tiếp",
                        "Trạng ngữ"
                    ],
                    "a": 0,
                    "exp": "'team leader' là Bổ ngữ giải thích cho tân ngữ 'her' (bầu cô ấy làm gì)."
                },
                {
                    "q": "Câu 'Music makes me feel relaxed after work' thuộc cấu trúc nào?",
                    "options": [
                        "S + V + O + C",
                        "S + V + O + O",
                        "S + V + C",
                        "S + V + O"
                    ],
                    "a": 0,
                    "exp": "Music (S) + makes (V) + me (O) + feel relaxed (C) + after work (A)."
                },
                {
                    "q": "Trong câu 'I find this course extremely useful', 'extremely useful' là:",
                    "options": [
                        "Bổ ngữ bổ nghĩa cho 'this course'",
                        "Tân ngữ trực tiếp",
                        "Trạng ngữ chỉ nơi chốn",
                        "Chủ ngữ"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc 'find + O + Adj/C' (thấy cái gì như thế nào)."
                },
                {
                    "q": "Xác định cấu trúc của câu 'We should keep our classroom clean':",
                    "options": [
                        "S + V + O + C",
                        "S + V + O + O",
                        "S + V + C",
                        "S + V + O"
                    ],
                    "a": 0,
                    "exp": "We (S) + should keep (V) + our classroom (O) + clean (C)."
                }
            ]
        }
    ],
    "nouns": [
        {
            "title": "Bài 1: Nhận biết Danh từ qua Hậu tố (Suffixes)",
            "type": "mcq",
            "desc": "Chọn từ là Danh từ trong các nhóm từ dưới đây.",
            "questions": [
                {
                    "q": "Từ nào dưới đây là Danh từ?",
                    "options": [
                        "develop",
                        "development",
                        "developing",
                        "developed"
                    ],
                    "a": 1,
                    "exp": "Đuôi -ment là hậu tố tạo danh từ (development = sự phát triển)."
                },
                {
                    "q": "Từ nào dưới đây là Danh từ?",
                    "options": [
                        "significant",
                        "significantly",
                        "significance",
                        "signify"
                    ],
                    "a": 2,
                    "exp": "Đuôi -ance là hậu tố tạo danh từ (significance = tầm quan trọng)."
                },
                {
                    "q": "Từ nào dưới đây là Danh từ?",
                    "options": [
                        "pollution",
                        "pollute",
                        "polluted",
                        "polluting"
                    ],
                    "a": 0,
                    "exp": "Đuôi -tion là hậu tố tạo danh từ (pollution = sự ô nhiễm)."
                },
                {
                    "q": "Từ nào dưới đây là Danh từ?",
                    "options": [
                        "responsible",
                        "responsibility",
                        "responsibly",
                        "respond"
                    ],
                    "a": 1,
                    "exp": "Đuôi -ity là hậu tố tạo danh từ (responsibility = trách nhiệm)."
                },
                {
                    "q": "Từ nào dưới đây là Danh từ?",
                    "options": [
                        "happy",
                        "happily",
                        "happiness",
                        "happening"
                    ],
                    "a": 2,
                    "exp": "Đuôi -ness là hậu tố tạo danh từ (happiness = niềm hạnh phúc)."
                }
            ]
        },
        {
            "title": "Bài 2: Danh từ đếm được và Danh từ không đếm được",
            "type": "mcq",
            "desc": "Chọn câu sử dụng đúng lượng từ cho Danh từ.",
            "questions": [
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "I need many informations about the course.",
                        "I need much information about the course.",
                        "I need an information about the course.",
                        "I need many information about the course."
                    ],
                    "a": 1,
                    "exp": "'information' là danh từ không đếm được, dùng với 'much' và không thêm 's'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "She gave me some useful advice.",
                        "She gave me some useful advices.",
                        "She gave me an advice.",
                        "She gave me many advices."
                    ],
                    "a": 0,
                    "exp": "'advice' là danh từ không đếm được, không thêm 's'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "He does not have many experience in this field.",
                        "He does not have much experience in this field.",
                        "He does not have an experience in this field.",
                        "He does not have experiences in this field."
                    ],
                    "a": 1,
                    "exp": "'experience' (kinh nghiệm) là danh từ không đếm được, dùng với 'much'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "They bought some new furnitures for the house.",
                        "They bought some new furniture for the house.",
                        "They bought a new furniture for the house.",
                        "They bought many furnitures for the house."
                    ],
                    "a": 1,
                    "exp": "'furniture' là danh từ không đếm được, không có dạng số nhiều 'furnitures'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "We need a lot of luggage for the trip.",
                        "We need a lot of luggages for the trip.",
                        "We need many luggages for the trip.",
                        "We need an luggage for the trip."
                    ],
                    "a": 0,
                    "exp": "'luggage' là danh từ không đếm được."
                }
            ]
        },
        {
            "title": "Bài 3: Thành lập Cụm danh từ (Noun Phrases)",
            "type": "trans",
            "desc": "Dịch các Cụm danh từ hoàn chỉnh chuẩn VSTEP.",
            "questions": [
                {
                    "q": "Một nguồn thông tin đáng tin cậy",
                    "a": [
                        "A reliable source of information.",
                        "A trustworthy source of information."
                    ],
                    "hint": "đáng tin cậy (reliable / trustworthy), nguồn thông tin (source of information)."
                },
                {
                    "q": "Các phương tiện giao thông công cộng hiện đại",
                    "a": [
                        "Modern public transport vehicles.",
                        "Modern public transportation systems.",
                        "Modern public means of transport."
                    ],
                    "hint": "hiện đại (modern), giao thông công cộng (public transport / transportation)."
                },
                {
                    "q": "Cơ hội việc làm tốt cho sinh viên tốt nghiệp",
                    "a": [
                        "Good job opportunities for graduates.",
                        "Great employment opportunities for graduates."
                    ],
                    "hint": "cơ hội việc làm (job/employment opportunities), sinh viên tốt nghiệp (graduates)."
                },
                {
                    "q": "Sự ô nhiễm môi trường nghiêm trọng",
                    "a": [
                        "Serious environmental pollution.",
                        "Severe environmental pollution."
                    ],
                    "hint": "nghiêm trọng (serious/severe), ô nhiễm môi trường (environmental pollution)."
                },
                {
                    "q": "Các hoạt động ngoại khóa bổ ích",
                    "a": [
                        "Useful extracurricular activities.",
                        "Beneficial extracurricular activities."
                    ],
                    "hint": "ngoại khóa (extracurricular), hoạt động (activities), bổ ích (useful/beneficial)."
                }
            ]
        },
        {
            "title": "Bài 4: Sửa lỗi sai về Danh từ",
            "type": "mcq",
            "desc": "Tìm từ bị dùng sai trong câu.",
            "questions": [
                {
                    "q": "The <b>pollute</b> (A) of water causes severe <b>damage</b> (B) to marine <b>life</b> (C) in this <b>area</b> (D).",
                    "options": [
                        "pollute",
                        "damage",
                        "life",
                        "area"
                    ],
                    "a": 0,
                    "exp": "Sau 'The' và trước 'of' phải là Danh từ 'pollution' thay vì động từ 'pollute'."
                },
                {
                    "q": "He gave me a lot of useful <b>advices</b> (A) about <b>career</b> (B) <b>orientation</b> (C) last <b>week</b> (D).",
                    "options": [
                        "advices",
                        "career",
                        "orientation",
                        "week"
                    ],
                    "a": 0,
                    "exp": "'advice' là danh từ không đếm được, không thêm 's'."
                },
                {
                    "q": "The <b>important</b> (A) of <b>education</b> (B) cannot be <b>denied</b> (C) in modern <b>society</b> (D).",
                    "options": [
                        "important",
                        "education",
                        "denied",
                        "society"
                    ],
                    "a": 0,
                    "exp": "Làm chủ ngữ phải dùng danh từ 'importance' thay vì tính từ 'important'."
                },
                {
                    "q": "Many <b>child</b> (A) in the village <b>walk</b> (B) to school <b>every</b> (C) <b>morning</b> (D).",
                    "options": [
                        "child",
                        "walk",
                        "every",
                        "morning"
                    ],
                    "a": 0,
                    "exp": "Sau 'Many' phải dùng danh từ số nhiều 'children'."
                },
                {
                    "q": "She bought two <b>loafs</b> (A) of <b>bread</b> (B) and some <b>milk</b> (C) at the <b>supermarket</b> (D).",
                    "options": [
                        "loafs",
                        "bread",
                        "milk",
                        "supermarket"
                    ],
                    "a": 0,
                    "exp": "Dạng số nhiều của 'loaf' là 'loaves'."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu áp dụng Danh từ và Cụm danh từ",
            "type": "trans",
            "desc": "Dịch câu hoàn chỉnh sang tiếng Anh.",
            "questions": [
                {
                    "q": "Sự ô nhiễm không khí ảnh hưởng nghiêm trọng đến sức khỏe con người.",
                    "a": [
                        "Air pollution seriously affects human health.",
                        "Air pollution has a serious impact on human health."
                    ],
                    "hint": "Sự ô nhiễm không khí (Air pollution), ảnh hưởng nghiêm trọng (seriously affects), sức khỏe con người (human health)."
                },
                {
                    "q": "Việc đọc sách mang lại nhiều kiến thức bổ ích cho chúng ta.",
                    "a": [
                        "Reading books brings us a lot of useful knowledge.",
                        "Reading books provides us with much useful knowledge."
                    ],
                    "hint": "Việc đọc sách (Reading books), kiến thức bổ ích (useful knowledge)."
                },
                {
                    "q": "Chính phủ đang tìm kiếm các giải pháp hiệu quả cho vấn đề giao thông.",
                    "a": [
                        "The government is looking for effective solutions to traffic problems.",
                        "The government is searching for effective solutions to traffic issues."
                    ],
                    "hint": "Chính phủ (The government), tìm kiếm giải pháp hiệu quả (looking for effective solutions)."
                },
                {
                    "q": "Các trang mạng xã hội mang lại cả lợi ích và tác hại.",
                    "a": [
                        "Social networking sites bring both benefits and drawbacks.",
                        "Social media platforms bring both advantages and disadvantages."
                    ],
                    "hint": "mạng xã hội (social networking sites / social media), lợi ích và tác hại (benefits and drawbacks / advantages and disadvantages)."
                },
                {
                    "q": "Sự tự tin là chìa khóa dẫn đến thành công trong công việc.",
                    "a": [
                        "Confidence is the key to success at work.",
                        "Self-confidence is the key to success in work."
                    ],
                    "hint": "Sự tự tin (Confidence / Self-confidence), chìa khóa dẫn đến thành công (the key to success)."
                }
            ]
        }
    ],
    "pronouns": [
        {
            "title": "Bài 1: Đại từ nhân xưng & Tân ngữ",
            "type": "mcq",
            "desc": "Chọn đại từ đúng để điền vào chỗ trống.",
            "questions": [
                {
                    "q": "The manager invited my colleagues and _____ to the annual conference.",
                    "options": [
                        "I",
                        "me",
                        "myself",
                        "mine"
                    ],
                    "a": 1,
                    "exp": "Đứng sau ngoại động từ 'invited' làm tân ngữ nên dùng 'me'."
                },
                {
                    "q": "_____ who work hard will achieve great results.",
                    "options": [
                        "Them",
                        "They",
                        "Those",
                        "Their"
                    ],
                    "a": 2,
                    "exp": "'Those who' là cấu trúc chỉ những người mà..."
                },
                {
                    "q": "My parents bought a new laptop and gave _____ to my younger sister.",
                    "options": [
                        "it",
                        "them",
                        "its",
                        "her"
                    ],
                    "a": 0,
                    "exp": "'it' thay thế cho danh từ số ít 'a new laptop'."
                },
                {
                    "q": "Between you and _____, this project requires much more effort.",
                    "options": [
                        "I",
                        "me",
                        "my",
                        "mine"
                    ],
                    "a": 1,
                    "exp": "Sau giới từ 'Between' dùng đại từ tân ngữ 'me'."
                },
                {
                    "q": "The teacher praised John and _____ for our excellent presentation.",
                    "options": [
                        "me",
                        "I",
                        "we",
                        "us"
                    ],
                    "a": 0,
                    "exp": "Đứng sau động từ 'praised' làm tân ngữ dùng 'me'."
                }
            ]
        },
        {
            "title": "Bài 2: Tính từ sở hữu và Đại từ sở hữu",
            "type": "mcq",
            "desc": "Phân biệt Tính từ sở hữu (my, your, their...) và Đại từ sở hữu (mine, yours, theirs...).",
            "questions": [
                {
                    "q": "This essay is well-written, but _____ has more creative ideas.",
                    "options": [
                        "your",
                        "yours",
                        "you",
                        "yourself"
                    ],
                    "a": 1,
                    "exp": "'yours' = your essay (đại từ sở hữu làm chủ ngữ)."
                },
                {
                    "q": "Their school is very large, while _____ is quite small.",
                    "options": [
                        "our",
                        "ours",
                        "we",
                        "us"
                    ],
                    "a": 1,
                    "exp": "'ours' = our school (đại từ sở hữu thay thế)."
                },
                {
                    "q": "She forgot _____ notebook at home this morning.",
                    "options": [
                        "her",
                        "hers",
                        "herself",
                        "she"
                    ],
                    "a": 0,
                    "exp": "Đứng trước danh từ 'notebook' dùng tính từ sở hữu 'her'."
                },
                {
                    "q": "Is this car _____ or does it belong to Mr. David?",
                    "options": [
                        "your",
                        "yours",
                        "you",
                        "yourself"
                    ],
                    "a": 1,
                    "exp": "Dùng đại từ sở hữu 'yours' đứng một mình làm bổ ngữ."
                },
                {
                    "q": "The company has updated _____ privacy policy recently.",
                    "options": [
                        "it's",
                        "its",
                        "their",
                        "theirs"
                    ],
                    "a": 1,
                    "exp": "'its' là tính từ sở hữu của 'The company' (danh từ số ít)."
                }
            ]
        },
        {
            "title": "Bài 3: Đại từ phản thân (Reflexive Pronouns)",
            "type": "mcq",
            "desc": "Chọn đại từ phản thân phù hợp.",
            "questions": [
                {
                    "q": "Students should learn how to solve difficult problems by _____.",
                    "options": [
                        "them",
                        "their",
                        "themselves",
                        "theirs"
                    ],
                    "a": 2,
                    "exp": "'by themselves' = tự mình làm."
                },
                {
                    "q": "She prepared the presentation all by _____.",
                    "options": [
                        "her",
                        "herself",
                        "hers",
                        "she"
                    ],
                    "a": 1,
                    "exp": "'by herself' = tự bản thân cô ấy làm."
                },
                {
                    "q": "We should protect _____ from the cold weather.",
                    "options": [
                        "us",
                        "our",
                        "ourselves",
                        "ours"
                    ],
                    "a": 2,
                    "exp": "Chủ ngữ là 'We', tân ngữ cùng đối tượng nên dùng 'ourselves'."
                },
                {
                    "q": "He looked at _____ in the mirror and smiled.",
                    "options": [
                        "him",
                        "himself",
                        "his",
                        "he"
                    ],
                    "a": 1,
                    "exp": "'himself' phản chiếu chủ ngữ 'He'."
                },
                {
                    "q": "The machine will shut _____ down if it gets too hot.",
                    "options": [
                        "it",
                        "itself",
                        "its",
                        "himself"
                    ],
                    "a": 1,
                    "exp": "'The machine' tương ứng với đại từ phản thân 'itself'."
                }
            ]
        },
        {
            "title": "Bài 4: Đại từ bất định (Indefinite Pronouns)",
            "type": "mcq",
            "desc": "Lựa chọn đại từ bất định đúng ngữ pháp.",
            "questions": [
                {
                    "q": "_____ in the classroom was listening attentively to the teacher.",
                    "options": [
                        "Everyone",
                        "All students",
                        "Many",
                        "Both"
                    ],
                    "a": 0,
                    "exp": "'Everyone' đi với động từ số ít 'was'."
                },
                {
                    "q": "Does _____ know the answer to this question?",
                    "options": [
                        "anyone",
                        "someone",
                        "no one",
                        "everyone"
                    ],
                    "a": 0,
                    "exp": "Trong câu hỏi thường dùng 'anyone'."
                },
                {
                    "q": "There is _____ wrong with my computer; it works perfectly.",
                    "options": [
                        "nothing",
                        "something",
                        "anything",
                        "everything"
                    ],
                    "a": 0,
                    "exp": "'nothing wrong' = không có gì trục trặc cả."
                },
                {
                    "q": "_____ of the two answers is correct.",
                    "options": [
                        "Neither",
                        "None",
                        "Both",
                        "All"
                    ],
                    "a": 0,
                    "exp": "Chỉ 1 trong 2 đối tượng không đúng dùng 'Neither of'."
                },
                {
                    "q": "Would you like _____ to drink?",
                    "options": [
                        "something",
                        "anything",
                        "nothing",
                        "everything"
                    ],
                    "a": 0,
                    "exp": "Trong lời mời lịch sự dùng 'something'."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu sử dụng Đại từ linh hoạt",
            "type": "trans",
            "desc": "Dịch câu sang tiếng Anh, chú ý cách dùng đại từ.",
            "questions": [
                {
                    "q": "Mỗi người nên tự chịu trách nhiệm về hành động của mình.",
                    "a": [
                        "Everyone should take responsibility for their own actions.",
                        "Each person should be responsible for their own actions."
                    ],
                    "hint": "Mỗi người (Everyone / Each person), tự chịu trách nhiệm (take responsibility for their own actions)."
                },
                {
                    "q": "Họ tự nấu bữa tối cho chính mình mỗi ngày.",
                    "a": [
                        "They cook dinner for themselves every day."
                    ],
                    "hint": "tự nấu bữa tối (cook dinner for themselves), mỗi ngày (every day)."
                },
                {
                    "q": "Ý kiến của bạn rất hay, nhưng ý kiến của chúng tôi thực tế hơn.",
                    "a": [
                        "Your idea is great, but ours is more practical.",
                        "Your opinion is very good, but ours is more practical."
                    ],
                    "hint": "ý kiến của chúng tôi (ours), thực tế hơn (more practical)."
                },
                {
                    "q": "Không có ai ở trong phòng họp vào lúc này.",
                    "a": [
                        "There is no one in the meeting room right now.",
                        "Nobody is in the meeting room right now."
                    ],
                    "hint": "Không có ai (There is no one / Nobody), phòng họp (meeting room)."
                },
                {
                    "q": "Cô ấy tự hào về bản thân mình sau khi vượt qua kỳ thi.",
                    "a": [
                        "She is proud of herself after passing the exam.",
                        "She was proud of herself after passing the exam."
                    ],
                    "hint": "tự hào về bản thân (proud of herself), vượt qua kỳ thi (passing the exam)."
                }
            ]
        }
    ],
    "verbs": [
        {
            "title": "Bài 1: Chia thì Hiện tại đơn và Hiện tại hoàn thành",
            "type": "mcq",
            "desc": "Chọn dạng đúng của động từ.",
            "questions": [
                {
                    "q": "The company _____ innovative software solutions since 2020.",
                    "options": [
                        "develops",
                        "developed",
                        "has developed",
                        "is developing"
                    ],
                    "a": 2,
                    "exp": "Dấu hiệu 'since 2020' chia thì Hiện tại hoàn thành (has developed)."
                },
                {
                    "q": "She usually _____ to work by bus every morning.",
                    "options": [
                        "go",
                        "goes",
                        "has gone",
                        "went"
                    ],
                    "a": 1,
                    "exp": "Thói quen hàng ngày với chủ ngữ 'She' chia Hiện tại đơn thêm -es (goes)."
                },
                {
                    "q": "We _____ in this city for more than ten years.",
                    "options": [
                        "live",
                        "lived",
                        "have lived",
                        "are living"
                    ],
                    "a": 2,
                    "exp": "Dấu hiệu 'for more than ten years' chia Hiện tại hoàn thành (have lived)."
                },
                {
                    "q": "The sun _____ in the east and sets in the west.",
                    "options": [
                        "rise",
                        "rises",
                        "has risen",
                        "rose"
                    ],
                    "a": 1,
                    "exp": "Sự thật hiển nhiên chia Hiện tại đơn số ít (rises)."
                },
                {
                    "q": "They _____ their final report yet.",
                    "options": [
                        "did not finish",
                        "have not finished",
                        "do not finish",
                        "had not finished"
                    ],
                    "a": 1,
                    "exp": "Dấu hiệu 'yet' trong câu phủ định chia Hiện tại hoàn thành (have not finished)."
                }
            ]
        },
        {
            "title": "Bài 2: Sự hòa hợp Chủ - Vị (Subject-Verb Agreement)",
            "type": "mcq",
            "desc": "Chọn dạng động từ phù hợp với Chủ ngữ.",
            "questions": [
                {
                    "q": "Neither the teacher nor the students _____ satisfied with the exam results.",
                    "options": [
                        "is",
                        "was",
                        "were",
                        "are being"
                    ],
                    "a": 2,
                    "exp": "Quy tắc 'Neither... nor...' chia theo chủ ngữ gần nhất 'the students' (số nhiều quá khứ -> were)."
                },
                {
                    "q": "The number of students who study abroad _____ significantly each year.",
                    "options": [
                        "increase",
                        "increases",
                        "are increasing",
                        "have increased"
                    ],
                    "a": 1,
                    "exp": "'The number of + N số nhiều' luôn đi với động từ số ít (increases)."
                },
                {
                    "q": "Every member of the team _____ a specific task.",
                    "options": [
                        "have",
                        "has",
                        "are having",
                        "having"
                    ],
                    "a": 1,
                    "exp": "'Every + N số ít' đi với động từ số ít (has)."
                },
                {
                    "q": "Bread and butter _____ his favorite breakfast.",
                    "options": [
                        "is",
                        "are",
                        "were",
                        "being"
                    ],
                    "a": 0,
                    "exp": "'Bread and butter' là một món ăn đơn lẻ (số ít) nên dùng 'is'."
                },
                {
                    "q": "Physics _____ one of the most challenging subjects.",
                    "options": [
                        "are",
                        "is",
                        "were",
                        "have been"
                    ],
                    "a": 1,
                    "exp": "Tên môn học tận cùng bằng 's' vẫn là danh từ số ít, dùng 'is'."
                }
            ]
        },
        {
            "title": "Bài 3: Động từ khiếm khuyết (Modal Verbs)",
            "type": "mcq",
            "desc": "Chọn động từ khiếm khuyết phù hợp ngữ cảnh.",
            "questions": [
                {
                    "q": "Candidates _____ bring mobile phones into the exam room under any circumstances.",
                    "options": [
                        "do not have to",
                        "must not",
                        "might not",
                        "should not"
                    ],
                    "a": 1,
                    "exp": "'must not' diễn tả quy định cấm đoán nghiêm ngặt trong phòng thi."
                },
                {
                    "q": "You _____ carry an umbrella because it is likely to rain this afternoon.",
                    "options": [
                        "should",
                        "must not",
                        "cannot",
                        "might not"
                    ],
                    "a": 0,
                    "exp": "'should' dùng để đưa ra lời khuyên hợp lý."
                },
                {
                    "q": "Students _____ wear uniforms on Mondays according to school regulations.",
                    "options": [
                        "have to",
                        "may",
                        "might",
                        "can"
                    ],
                    "a": 0,
                    "exp": "'have to' diễn tả sự bắt buộc do nội quy quy định."
                },
                {
                    "q": "She _____ speak three foreign languages fluently.",
                    "options": [
                        "can",
                        "may",
                        "must",
                        "should"
                    ],
                    "a": 0,
                    "exp": "'can' diễn tả khả năng, năng lực của bản thân."
                },
                {
                    "q": "You _____ submit the document today; tomorrow is also acceptable.",
                    "options": [
                        "must not",
                        "do not have to",
                        "cannot",
                        "should not"
                    ],
                    "a": 1,
                    "exp": "'do not have to' diễn tả sự không cần thiết (nộp hay không tùy ý)."
                }
            ]
        },
        {
            "title": "Bài 4: Sửa lỗi sai về Động từ trong câu",
            "type": "mcq",
            "desc": "Tìm lỗi sai trong câu.",
            "questions": [
                {
                    "q": "She <b>can speaks</b> (A) three languages <b>fluently</b> (B) and <b>works</b> (C) as an <b>interpreter</b> (D).",
                    "options": [
                        "can speaks",
                        "fluently",
                        "works",
                        "interpreter"
                    ],
                    "a": 0,
                    "exp": "Sau động từ khiếm khuyết 'can' dùng động từ nguyên mẫu 'speak' không chia 'speaks'."
                },
                {
                    "q": "The committee <b>have</b> (A) <b>decided</b> (B) to <b>postpone</b> (C) the annual <b>conference</b> (D).",
                    "options": [
                        "have",
                        "decided",
                        "postpone",
                        "conference"
                    ],
                    "a": 0,
                    "exp": "'The committee' đóng vai trò một tập thể đơn lẻ chia động từ số ít 'has'."
                },
                {
                    "q": "He <b>did not went</b> (A) to <b>school</b> (B) yesterday <b>because</b> (C) he was <b>sick</b> (D).",
                    "options": [
                        "did not went",
                        "school",
                        "because",
                        "sick"
                    ],
                    "a": 0,
                    "exp": "Sau trợ động từ 'did not' dùng động từ nguyên mẫu 'go' thay vì 'went'."
                },
                {
                    "q": "Swimming in the ocean <b>help</b> (A) <b>improve</b> (B) physical <b>strength</b> (C) and <b>endurance</b> (D).",
                    "options": [
                        "help",
                        "improve",
                        "strength",
                        "endurance"
                    ],
                    "a": 0,
                    "exp": "Chủ ngữ là V-ing 'Swimming' là số ít nên động từ phải chia 'helps'."
                },
                {
                    "q": "They <b>must to finish</b> (A) the <b>project</b> (B) <b>before</b> (C) the <b>deadline</b> (D).",
                    "options": [
                        "must to finish",
                        "project",
                        "before",
                        "deadline"
                    ],
                    "a": 0,
                    "exp": "Sau động từ khiếm khuyết 'must' là Vo không có 'to' (must finish)."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu Động từ & Thì chuẩn VSTEP",
            "type": "trans",
            "desc": "Dịch câu sang tiếng Anh.",
            "questions": [
                {
                    "q": "Chúng tôi đã nghiên cứu vấn đề này trong nhiều năm.",
                    "a": [
                        "We have researched this problem for many years.",
                        "We have studied this issue for many years."
                    ],
                    "hint": "nghiên cứu (have researched / have studied), vấn đề này (this problem / this issue), trong nhiều năm (for many years)."
                },
                {
                    "q": "Chính phủ phải ban hành các điều luật nghiêm ngặt hơn.",
                    "a": [
                        "The government must introduce stricter laws.",
                        "The government must enact stricter regulations."
                    ],
                    "hint": "ban hành luật nghiêm ngặt (must introduce/enact stricter laws)."
                },
                {
                    "q": "Cô ấy luôn hoàn thành mọi nhiệm vụ trước thời hạn.",
                    "a": [
                        "She always finishes all tasks before the deadline.",
                        "She always completes all assignments before the deadline."
                    ],
                    "hint": "hoàn thành nhiệm vụ (finishes all tasks / completes all assignments), trước thời hạn (before the deadline)."
                },
                {
                    "q": "Học sinh không được phép gian lận trong các kỳ thi.",
                    "a": [
                        "Students must not cheat in exams.",
                        "Students are not allowed to cheat in examinations."
                    ],
                    "hint": "không được phép gian lận (must not cheat), kỳ thi (in exams)."
                },
                {
                    "q": "Nhiều công ty đã áp dụng công nghệ mới để tăng năng suất.",
                    "a": [
                        "Many companies have applied new technology to increase productivity.",
                        "Many companies have adopted new technology to improve productivity."
                    ],
                    "hint": "áp dụng công nghệ mới (have applied/adopted new technology), tăng năng suất (to increase/improve productivity)."
                }
            ]
        }
    ],
    "adjectives": [
        {
            "title": "Bài 1: Hậu tố tạo Tính từ",
            "type": "mcq",
            "desc": "Chọn từ là Tính từ.",
            "questions": [
                {
                    "q": "Từ nào dưới đây là Tính từ?",
                    "options": [
                        "create",
                        "creation",
                        "creative",
                        "creatively"
                    ],
                    "a": 2,
                    "exp": "Đuôi -ive là hậu tố tạo tính từ (creative = có tính sáng tạo)."
                },
                {
                    "q": "Từ nào dưới đây là Tính từ?",
                    "options": [
                        "success",
                        "succeed",
                        "successful",
                        "successfully"
                    ],
                    "a": 2,
                    "exp": "Đuôi -ful tạo tính từ (successful = thành công)."
                },
                {
                    "q": "Từ nào dưới đây là Tính từ?",
                    "options": [
                        "economic",
                        "economy",
                        "economize",
                        "economically"
                    ],
                    "a": 0,
                    "exp": "Đuôi -ic tạo tính từ (economic = thuộc về kinh tế)."
                },
                {
                    "q": "Từ nào dưới đây là Tính từ?",
                    "options": [
                        "rely",
                        "reliable",
                        "reliance",
                        "reliably"
                    ],
                    "a": 1,
                    "exp": "Đuôi -able tạo tính từ (reliable = đáng tin cậy)."
                },
                {
                    "q": "Từ nào dưới đây là Tính từ?",
                    "options": [
                        "differ",
                        "difference",
                        "different",
                        "differently"
                    ],
                    "a": 2,
                    "exp": "Đuôi -ent tạo tính từ (different = khác biệt)."
                }
            ]
        },
        {
            "title": "Bài 2: Trật tự Tính từ (OSASCOMP)",
            "type": "mcq",
            "desc": "Chọn trật tự tính từ đúng trước danh từ.",
            "questions": [
                {
                    "q": "She bought a _____ bag yesterday.",
                    "options": [
                        "leather beautiful black",
                        "beautiful black leather",
                        "black beautiful leather",
                        "beautiful leather black"
                    ],
                    "a": 1,
                    "exp": "Trật tự OSASCOMP: Opinion (beautiful) -> Color (black) -> Material (leather)."
                },
                {
                    "q": "He lives in a _____ house.",
                    "options": [
                        "modern big wooden",
                        "big modern wooden",
                        "wooden big modern",
                        "big wooden modern"
                    ],
                    "a": 1,
                    "exp": "Size (big) -> Age (modern) -> Material (wooden)."
                },
                {
                    "q": "They adopted a _____ puppy.",
                    "options": [
                        "cute little brown",
                        "brown cute little",
                        "little cute brown",
                        "cute brown little"
                    ],
                    "a": 0,
                    "exp": "Opinion (cute) -> Size (little) -> Color (brown)."
                },
                {
                    "q": "She wore an _____ dress to the party.",
                    "options": [
                        "Italian expensive silk",
                        "expensive Italian silk",
                        "silk expensive Italian",
                        "expensive silk Italian"
                    ],
                    "a": 1,
                    "exp": "Opinion (expensive) -> Origin (Italian) -> Material (silk)."
                },
                {
                    "q": "He gave her a _____ box.",
                    "options": [
                        "small round wooden",
                        "round small wooden",
                        "wooden small round",
                        "small wooden round"
                    ],
                    "a": 0,
                    "exp": "Size (small) -> Shape (round) -> Material (wooden)."
                }
            ]
        },
        {
            "title": "Bài 3: Phân biệt Tính từ đuôi -ING và -ED",
            "type": "mcq",
            "desc": "Chọn tính từ phù hợp chỉ cảm xúc (-ed) hoặc bản chất (-ing).",
            "questions": [
                {
                    "q": "The lecture was so _____ that many students felt _____.",
                    "options": [
                        "boring / bored",
                        "bored / boring",
                        "boring / boring",
                        "bored / bored"
                    ],
                    "a": 0,
                    "exp": "Bài giảng có bản chất gây chán (boring), sinh viên cảm thấy bị chán (bored)."
                },
                {
                    "q": "I was very _____ when I heard the _____ news.",
                    "options": [
                        "surprised / surprising",
                        "surprising / surprised",
                        "surprised / surprised",
                        "surprising / surprising"
                    ],
                    "a": 0,
                    "exp": "Tôi cảm thấy ngạc nhiên (surprised), tin tức mang bản chất gây ngạc nhiên (surprising)."
                },
                {
                    "q": "Traveling around the world is an _____ experience.",
                    "options": [
                        "excited",
                        "exciting",
                        "excitement",
                        "excitedly"
                    ],
                    "a": 1,
                    "exp": "Trải nghiệm mang bản chất hào hứng, thú vị dùng 'exciting'."
                },
                {
                    "q": "She was totally _____ after working for 10 hours continuously.",
                    "options": [
                        "exhausting",
                        "exhausted",
                        "exhaust",
                        "exhaustion"
                    ],
                    "a": 1,
                    "exp": "Chỉ trạng thái kiệt sức của con người dùng 'exhausted'."
                },
                {
                    "q": "The movie was really _____; we were all deeply moved.",
                    "options": [
                        "touching",
                        "touched",
                        "touch",
                        "touches"
                    ],
                    "a": 0,
                    "exp": "Bộ phim gây xúc động dùng 'touching'."
                }
            ]
        },
        {
            "title": "Bài 4: Vị trí của Tính từ trong câu",
            "type": "mcq",
            "desc": "Chọn câu có vị trí tính từ chính xác.",
            "questions": [
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "Online learning is an effective method.",
                        "Online learning is an method effective.",
                        "Online learning is effectively method.",
                        "Online learning is effect method."
                    ],
                    "a": 0,
                    "exp": "Tính từ 'effective' đứng trước danh từ 'method' để bổ nghĩa."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "The students are ready for the examination.",
                        "The students are readily for the examination.",
                        "The students are readiness for the examination.",
                        "The ready students for the examination."
                    ],
                    "a": 0,
                    "exp": "Sau động từ to-be 'are' dùng tính từ 'ready'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "He seems tired after a busy day.",
                        "He seems tiredly after a busy day.",
                        "He seems tiredness after a busy day.",
                        "He seems tiringly after a busy day."
                    ],
                    "a": 0,
                    "exp": "Sau động từ liên kết 'seems' dùng tính từ 'tired'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "We need to find a suitable solution.",
                        "We need to find a solution suitable.",
                        "We need to find a suitably solution.",
                        "We need to find suitably a solution."
                    ],
                    "a": 0,
                    "exp": "Tính từ 'suitable' đứng trước danh từ 'solution'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "The fresh air makes me feel energetic.",
                        "The air fresh makes me feel energetic.",
                        "The freshly air makes me feel energetic.",
                        "The fresh air makes me feel energetically."
                    ],
                    "a": 0,
                    "exp": "'fresh air' (Adj + N) và 'feel energetic' (Linking verb + Adj)."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu áp dụng Tính từ miêu tả",
            "type": "trans",
            "desc": "Dịch câu sang tiếng Anh.",
            "questions": [
                {
                    "q": "Đây là một giải pháp hữu ích và tiết kiệm chi phí.",
                    "a": [
                        "This is a useful and cost-effective solution.",
                        "This is a helpful and cost-effective solution."
                    ],
                    "hint": "hữu ích (useful/helpful), tiết kiệm chi phí (cost-effective), giải pháp (solution)."
                },
                {
                    "q": "Thức ăn nhanh rất tiện lợi nhưng không lành mạnh.",
                    "a": [
                        "Fast food is very convenient but unhealthy.",
                        "Fast food is very convenient but not healthy."
                    ],
                    "hint": "tiện lợi (convenient), không lành mạnh (unhealthy / not healthy)."
                },
                {
                    "q": "Cô ấy là một nhân viên chăm chỉ và đáng tin cậy.",
                    "a": [
                        "She is a hard-working and reliable employee.",
                        "She is a diligent and reliable employee."
                    ],
                    "hint": "chăm chỉ (hard-working / diligent), đáng tin cậy (reliable), nhân viên (employee)."
                },
                {
                    "q": "Phương pháp giảng dạy mới rất sáng tạo và thu hút.",
                    "a": [
                        "The new teaching method is very creative and engaging.",
                        "The new teaching method is very innovative and attractive."
                    ],
                    "hint": "phương pháp giảng dạy mới (The new teaching method), sáng tạo (creative/innovative), thu hút (engaging/attractive)."
                },
                {
                    "q": "Việc học ngoại ngữ mở ra nhiều cơ hội tuyệt vời.",
                    "a": [
                        "Learning foreign languages opens up many wonderful opportunities.",
                        "Learning foreign languages opens many great opportunities."
                    ],
                    "hint": "học ngoại ngữ (Learning foreign languages), cơ hội tuyệt vời (wonderful/great opportunities)."
                }
            ]
        }
    ],
    "adverbs": [
        {
            "title": "Bài 1: Phân loại Trạng từ",
            "type": "mcq",
            "desc": "Xác định loại trạng từ trong câu.",
            "questions": [
                {
                    "q": "Trong câu 'He spoke <b>fluently</b>', từ in đậm là trạng từ gì?",
                    "options": [
                        "Chỉ thời gian",
                        "Chỉ nơi chốn",
                        "Chỉ cách thức (Manner)",
                        "Chỉ tần suất"
                    ],
                    "a": 2,
                    "exp": "'fluently' bổ nghĩa cho động từ 'spoke', chỉ cách thức nói trôi chảy."
                },
                {
                    "q": "Trong câu 'She <b>rarely</b> eats fast food', từ in đậm là trạng từ gì?",
                    "options": [
                        "Chỉ tần suất (Frequency)",
                        "Chỉ mức độ",
                        "Chỉ cách thức",
                        "Chỉ nơi chốn"
                    ],
                    "a": 0,
                    "exp": "'rarely' (hiếm khi) là trạng từ chỉ tần suất."
                },
                {
                    "q": "Trong câu 'The weather is <b>extremely</b> hot', từ in đậm là trạng từ gì?",
                    "options": [
                        "Chỉ mức độ (Degree)",
                        "Chỉ cách thức",
                        "Chỉ thời gian",
                        "Chỉ tần suất"
                    ],
                    "a": 0,
                    "exp": "'extremely' (vô cùng) là trạng từ chỉ mức độ bổ nghĩa cho tính từ 'hot'."
                },
                {
                    "q": "Trong câu 'They will travel <b>abroad</b> next month', từ in đậm là trạng từ gì?",
                    "options": [
                        "Chỉ nơi chốn (Place)",
                        "Chỉ thời gian",
                        "Chỉ cách thức",
                        "Chỉ mức độ"
                    ],
                    "a": 0,
                    "exp": "'abroad' (ở nước ngoài) là trạng từ chỉ nơi chốn."
                },
                {
                    "q": "Trong câu 'We finished the project <b>yesterday</b>', từ in đậm là trạng từ gì?",
                    "options": [
                        "Chỉ thời gian (Time)",
                        "Chỉ tần suất",
                        "Chỉ mức độ",
                        "Chỉ cách thức"
                    ],
                    "a": 0,
                    "exp": "'yesterday' (hôm qua) là trạng từ chỉ thời gian."
                }
            ]
        },
        {
            "title": "Bài 2: Vị trí của Trạng từ tần suất",
            "type": "mcq",
            "desc": "Chọn vị trí đúng của trạng từ tần suất (usually, always, rarely...).",
            "questions": [
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "She finishes always her work on time.",
                        "She always finishes her work on time.",
                        "She finishes her work always on time.",
                        "Always she finishes her work on time."
                    ],
                    "a": 1,
                    "exp": "Trạng từ tần suất đứng trước động từ thường (always finishes)."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "He is usually punctual for meetings.",
                        "He usually is punctual for meetings.",
                        "He is punctual usually for meetings.",
                        "Usually is he punctual for meetings."
                    ],
                    "a": 0,
                    "exp": "Trạng từ tần suất đứng sau động từ to-be (is usually)."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "They have never visited London.",
                        "They never have visited London.",
                        "They have visited never London.",
                        "Never they have visited London."
                    ],
                    "a": 0,
                    "exp": "Trạng từ tần suất đứng giữa trợ động từ và động từ chính (have never visited)."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "I sometimes read books in the evening.",
                        "I read sometimes books in the evening.",
                        "I read books sometimes in the evening.",
                        "Sometimes I read books in the evening."
                    ],
                    "a": 0,
                    "exp": "Vị trí chuẩn: đứng trước động từ thường 'sometimes read'."
                },
                {
                    "q": "Chọn câu đúng:",
                    "options": [
                        "We seldom go out on weekdays.",
                        "We go seldom out on weekdays.",
                        "We go out seldom on weekdays.",
                        "Seldom we go out on weekdays."
                    ],
                    "a": 0,
                    "exp": "'seldom' đứng trước động từ thường 'go'."
                }
            ]
        },
        {
            "title": "Bài 3: Trạng từ bổ nghĩa cho Tính từ và Động từ",
            "type": "mcq",
            "desc": "Chọn trạng từ chỉ mức độ phù hợp.",
            "questions": [
                {
                    "q": "The results of the experiment were _____ successful.",
                    "options": [
                        "extreme",
                        "extremely",
                        "extremeness",
                        "extremity"
                    ],
                    "a": 1,
                    "exp": "Dùng trạng từ 'extremely' để bổ nghĩa cho tính từ 'successful'."
                },
                {
                    "q": "The presentation was _____ well prepared.",
                    "options": [
                        "remarkable",
                        "remarkably",
                        "remark",
                        "remarked"
                    ],
                    "a": 1,
                    "exp": "'remarkably' bổ nghĩa cho tính từ ghép 'well prepared'."
                },
                {
                    "q": "He drove _____ along the narrow mountain road.",
                    "options": [
                        "careful",
                        "carefully",
                        "care",
                        "carefulness"
                    ],
                    "a": 1,
                    "exp": "Bổ nghĩa cho động từ 'drove' dùng trạng từ 'carefully'."
                },
                {
                    "q": "The price of houses in the city is _____ high.",
                    "options": [
                        "unreasonable",
                        "unreasonably",
                        "unreason",
                        "unreasoning"
                    ],
                    "a": 1,
                    "exp": "'unreasonably' bổ nghĩa cho tính từ 'high'."
                },
                {
                    "q": "She answered all the interviewer's questions _____.",
                    "options": [
                        "confident",
                        "confidently",
                        "confidence",
                        "confidential"
                    ],
                    "a": 1,
                    "exp": "Bổ nghĩa cho động từ 'answered' dùng trạng từ 'confidently'."
                }
            ]
        },
        {
            "title": "Bài 4: Sửa lỗi sai Trạng từ / Tính từ",
            "type": "mcq",
            "desc": "Tìm từ bị dùng sai.",
            "questions": [
                {
                    "q": "The students performed <b>good</b> (A) in the final exam because they prepared <b>thoroughly</b> (B).",
                    "options": [
                        "good",
                        "thoroughly"
                    ],
                    "a": 0,
                    "exp": "Bổ nghĩa cho động từ 'performed' phải dùng trạng từ 'well' thay vì tính từ 'good'."
                },
                {
                    "q": "She speaks English very <b>fluent</b> (A) and <b>communicates</b> (B) with foreigners <b>easily</b> (C).",
                    "options": [
                        "fluent",
                        "communicates",
                        "easily"
                    ],
                    "a": 0,
                    "exp": "Bổ nghĩa cho động từ 'speaks' phải dùng trạng từ 'fluently'."
                },
                {
                    "q": "The new policy was <b>quick</b> (A) <b>implemented</b> (B) by the <b>management</b> (C) team.",
                    "options": [
                        "quick",
                        "implemented",
                        "management"
                    ],
                    "a": 0,
                    "exp": "Bổ nghĩa cho động từ bị động 'implemented' phải dùng trạng từ 'quickly'."
                },
                {
                    "q": "He was <b>extreme</b> (A) <b>tired</b> (B) after running the <b>marathon</b> (C).",
                    "options": [
                        "extreme",
                        "tired",
                        "marathon"
                    ],
                    "a": 0,
                    "exp": "Bổ nghĩa cho tính từ 'tired' phải dùng trạng từ 'extremely'."
                },
                {
                    "q": "The train arrived <b>lately</b> (A) due to <b>heavy</b> (B) snow in the <b>region</b> (C).",
                    "options": [
                        "lately",
                        "heavy",
                        "region"
                    ],
                    "a": 0,
                    "exp": "'late' vừa là tính từ vừa là trạng từ chỉ trễ giờ; 'lately' có nghĩa là dạo gần đây. Phải sửa 'lately' thành 'late'."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu sử dụng Trạng từ học thuật",
            "type": "trans",
            "desc": "Dịch câu sang tiếng Anh.",
            "questions": [
                {
                    "q": "Công nghệ mới đã cải thiện đáng kể năng suất làm việc.",
                    "a": [
                        "New technology has significantly improved work productivity.",
                        "New technology has remarkably improved work productivity."
                    ],
                    "hint": "Công nghệ mới (New technology), cải thiện đáng kể (has significantly improved), năng suất làm việc (work productivity)."
                },
                {
                    "q": "Học sinh nên đọc kỹ đề thi trước khi làm bài.",
                    "a": [
                        "Students should read the exam questions carefully before doing the test.",
                        "Students should read the exam questions thoroughly before doing the test."
                    ],
                    "hint": "đọc kỹ (read carefully/thoroughly), đề thi (the exam questions)."
                },
                {
                    "q": "Anh ấy giải thích vấn đề một cách rõ ràng và dễ hiểu.",
                    "a": [
                        "He explained the problem clearly and easily.",
                        "He explained the issue clearly and understandably."
                    ],
                    "hint": "giải thích rõ ràng (explained clearly), dễ hiểu (understandably/easily)."
                },
                {
                    "q": "Tỷ lệ thất nghiệp đã giảm mạnh trong những năm gần đây.",
                    "a": [
                        "The unemployment rate has decreased sharply in recent years.",
                        "The unemployment rate has dropped significantly in recent years."
                    ],
                    "hint": "Tỷ lệ thất nghiệp (The unemployment rate), giảm mạnh (has decreased sharply / dropped significantly)."
                },
                {
                    "q": "Họ đã làm việc chăm chỉ để đạt được mục tiêu của mình.",
                    "a": [
                        "They worked hard to achieve their goals.",
                        "They worked diligently to accomplish their objectives."
                    ],
                    "hint": "làm việc chăm chỉ (worked hard / worked diligently), đạt được mục tiêu (to achieve their goals)."
                }
            ]
        }
    ],
    "prepositions": [
        {
            "title": "Bài 1: Giới từ chỉ thời gian (In, On, At)",
            "type": "mcq",
            "desc": "Chọn giới từ thời gian đúng.",
            "questions": [
                {
                    "q": "The conference will take place _____ Monday morning, _____ 8:30 AM.",
                    "options": [
                        "in / at",
                        "on / at",
                        "at / in",
                        "on / in"
                    ],
                    "a": 1,
                    "exp": "Đi với buổi của một ngày cụ thể dùng 'on' (on Monday morning), đi với giờ cụ thể dùng 'at' (at 8:30 AM)."
                },
                {
                    "q": "Many festivals are celebrated _____ spring.",
                    "options": [
                        "in",
                        "on",
                        "at",
                        "during"
                    ],
                    "a": 0,
                    "exp": "Đi với mùa trong năm dùng giới từ 'in'."
                },
                {
                    "q": "The university was founded _____ the 19th century.",
                    "options": [
                        "in",
                        "on",
                        "at",
                        "for"
                    ],
                    "a": 0,
                    "exp": "Đi với thế kỷ dùng 'in' (in the 19th century)."
                },
                {
                    "q": "We usually have a family gathering _____ Christmas Eve.",
                    "options": [
                        "on",
                        "in",
                        "at",
                        "by"
                    ],
                    "a": 0,
                    "exp": "Đi với ngày/đêm lễ cụ thể 'Christmas Eve' dùng 'on'."
                },
                {
                    "q": "The flight will depart _____ midnight.",
                    "options": [
                        "at",
                        "in",
                        "on",
                        "to"
                    ],
                    "a": 0,
                    "exp": "Đi với 'midnight / noon / night' dùng 'at'."
                }
            ]
        },
        {
            "title": "Bài 2: Giới từ chỉ nơi chốn",
            "type": "mcq",
            "desc": "Chọn giới từ nơi chốn phù hợp.",
            "questions": [
                {
                    "q": "Many international students study _____ universities in Australia.",
                    "options": [
                        "at",
                        "on",
                        "to",
                        "with"
                    ],
                    "a": 0,
                    "exp": "'at universities' chỉ địa điểm học tập."
                },
                {
                    "q": "She lives _____ a small apartment _____ Hanoi.",
                    "options": [
                        "in / in",
                        "on / in",
                        "at / in",
                        "in / at"
                    ],
                    "a": 0,
                    "exp": "Căn hộ và thành phố lớn đều dùng giới từ 'in'."
                },
                {
                    "q": "There is a beautiful painting _____ the wall.",
                    "options": [
                        "on",
                        "in",
                        "at",
                        "over"
                    ],
                    "a": 0,
                    "exp": "Treo trên bề mặt tường dùng 'on the wall'."
                },
                {
                    "q": "We met each other _____ the bus stop yesterday.",
                    "options": [
                        "at",
                        "in",
                        "on",
                        "to"
                    ],
                    "a": 0,
                    "exp": "Điểm dừng xe buýt dùng 'at the bus stop'."
                },
                {
                    "q": "He works _____ a large multinational company.",
                    "options": [
                        "at",
                        "for",
                        "in",
                        "both at and for are correct"
                    ],
                    "a": 3,
                    "exp": "Làm việc tại/cho công ty có thể dùng 'at' hoặc 'for'."
                }
            ]
        },
        {
            "title": "Bài 3: Cụm giới từ cố định (Prepositional Phrases)",
            "type": "mcq",
            "desc": "Chọn giới từ đi kèm tính từ/động từ cố định.",
            "questions": [
                {
                    "q": "Regular exercise is beneficial _____ mental health.",
                    "options": [
                        "for",
                        "to",
                        "with",
                        "about"
                    ],
                    "a": 1,
                    "exp": "Cấu trúc 'beneficial to' = có lợi cho."
                },
                {
                    "q": "She is famous _____ her beautiful voice.",
                    "options": [
                        "for",
                        "with",
                        "about",
                        "at"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc 'famous for' = nổi tiếng vì cái gì."
                },
                {
                    "q": "Parents are responsible _____ raising their children.",
                    "options": [
                        "for",
                        "with",
                        "to",
                        "about"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc 'responsible for' = chịu trách nhiệm về."
                },
                {
                    "q": "The city is crowded _____ tourists during the holiday.",
                    "options": [
                        "with",
                        "of",
                        "about",
                        "for"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc 'crowded with' = đông đúc khách."
                },
                {
                    "q": "He is very interested _____ learning new foreign languages.",
                    "options": [
                        "in",
                        "on",
                        "at",
                        "about"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc 'interested in' = hào hứng/thích thú với."
                }
            ]
        },
        {
            "title": "Bài 4: Sửa lỗi sai về Giới từ",
            "type": "mcq",
            "desc": "Tìm giới từ bị dùng sai.",
            "questions": [
                {
                    "q": "The government should invest <b>on</b> (A) public transport to reduce traffic congestion <b>in</b> (B) cities.",
                    "options": [
                        "on",
                        "in"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc chuẩn là 'invest in something' (đầu tư vào cái gì), sửa 'on' thành 'in'."
                },
                {
                    "q": "She graduated <b>at</b> (A) Harvard University <b>in</b> (B) 2022.",
                    "options": [
                        "at",
                        "in"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc chuẩn là 'graduate from' (tốt nghiệp từ trường nào)."
                },
                {
                    "q": "He was absent <b>from</b> (A) the meeting because he was suffering <b>with</b> (B) a headache.",
                    "options": [
                        "from",
                        "with"
                    ],
                    "a": 1,
                    "exp": "Cấu trúc chuẩn là 'suffer from something' (chịu đựng căn bệnh gì), sửa 'with' thành 'from'."
                },
                {
                    "q": "This decision depends <b>of</b> (A) the final results <b>of</b> (B) the exam.",
                    "options": [
                        "depends of",
                        "results of"
                    ],
                    "a": 0,
                    "exp": "Cấu trúc chuẩn là 'depend on' (phụ thuộc vào)."
                },
                {
                    "q": "They arrived <b>to</b> (A) London <b>on</b> (B) Monday morning.",
                    "options": [
                        "to",
                        "on"
                    ],
                    "a": 0,
                    "exp": "Đến một thành phố/quốc gia dùng 'arrive in London'."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu có Cụm giới từ chỉ thời gian & nơi chốn",
            "type": "trans",
            "desc": "Dịch câu hoàn chỉnh sang tiếng Anh.",
            "questions": [
                {
                    "q": "Vào mùa hè, nhiều gia đình đi du lịch ở các thành phố biển.",
                    "a": [
                        "In the summer, many families travel to coastal cities.",
                        "In summer, many families travel to coastal cities."
                    ],
                    "hint": "Vào mùa hè (In the summer), nhiều gia đình (many families), đi du lịch ở (travel to), thành phố biển (coastal cities)."
                },
                {
                    "q": "Cuộc họp sẽ bắt đầu lúc 9 giờ sáng vào thứ Hai.",
                    "a": [
                        "The meeting will start at 9:00 AM on Monday.",
                        "The meeting will begin at 9 AM on Monday."
                    ],
                    "hint": "Cuộc họp (The meeting), bắt đầu (will start/begin), lúc 9 giờ (at 9 AM), thứ Hai (on Monday)."
                },
                {
                    "q": "Nhiều sinh viên học tập tại thư viện trường vào cuối tuần.",
                    "a": [
                        "Many students study at the school library on the weekend.",
                        "Many students study at the university library on weekends."
                    ],
                    "hint": "sinh viên (Many students), thư viện (at the library), cuối tuần (on weekends / on the weekend)."
                },
                {
                    "q": "Họ đã sống ở thành phố này từ năm 2015.",
                    "a": [
                        "They have lived in this city since 2015."
                    ],
                    "hint": "đã sống ở (have lived in), thành phố này (this city), từ năm 2015 (since 2015)."
                },
                {
                    "q": "Chính phủ nên đầu tư nhiều hơn vào năng lượng tái tạo.",
                    "a": [
                        "The government should invest more in renewable energy."
                    ],
                    "hint": "Chính phủ (The government), đầu tư nhiều hơn vào (invest more in), năng lượng tái tạo (renewable energy)."
                }
            ]
        }
    ],
    "conjunctions": [
        {
            "title": "Bài 1: Liên từ kết hợp (FANBOYS)",
            "type": "mcq",
            "desc": "Chọn liên từ kết hợp đúng trong câu ghép.",
            "questions": [
                {
                    "q": "The weather was cold and rainy, _____ we still enjoyed our trip.",
                    "options": [
                        "so",
                        "yet",
                        "for",
                        "or"
                    ],
                    "a": 1,
                    "exp": "'yet' mang nghĩa nhưng / tuy nhiên chỉ sự đối lập trong câu ghép."
                },
                {
                    "q": "He wanted to buy the book, _____ he did not have enough money.",
                    "options": [
                        "so",
                        "but",
                        "and",
                        "or"
                    ],
                    "a": 1,
                    "exp": "Chỉ sự tương phản giữa mong muốn và thực tế dùng 'but'."
                },
                {
                    "q": "You can travel by coach, _____ you can take a plane.",
                    "options": [
                        "or",
                        "and",
                        "so",
                        "for"
                    ],
                    "a": 0,
                    "exp": "Lựa chọn 1 trong 2 phương án dùng 'or'."
                },
                {
                    "q": "She studied very hard, _____ she passed the exam with high scores.",
                    "options": [
                        "so",
                        "but",
                        "yet",
                        "for"
                    ],
                    "a": 0,
                    "exp": "Vế sau là kết quả tất yếu của vế trước dùng 'so'."
                },
                {
                    "q": "I did not eat breakfast, _____ I am very hungry now.",
                    "options": [
                        "so",
                        "but",
                        "for",
                        "yet"
                    ],
                    "a": 0,
                    "exp": "Vế sau là kết quả của việc không ăn sáng dùng 'so'."
                }
            ]
        },
        {
            "title": "Bài 2: Liên từ phụ thuộc (Because, Although, Since...)",
            "type": "mcq",
            "desc": "Chọn liên từ phụ thuộc mở đầu mệnh đề.",
            "questions": [
                {
                    "q": "_____ the company faced financial difficulties, it continued to support its employees.",
                    "options": [
                        "Because",
                        "Although",
                        "However",
                        "Therefore"
                    ],
                    "a": 1,
                    "exp": "'Although' mở đầu mệnh đề chỉ sự nhượng bộ đứng đầu câu."
                },
                {
                    "q": "We could not go camping _____ the weather was extremely bad.",
                    "options": [
                        "because",
                        "although",
                        "so",
                        "but"
                    ],
                    "a": 0,
                    "exp": "Chỉ nguyên nhân lý do đứng sau mệnh đề chính dùng 'because'."
                },
                {
                    "q": "_____ you work hard, you will certainly achieve your goals.",
                    "options": [
                        "If",
                        "Unless",
                        "Although",
                        "Because"
                    ],
                    "a": 0,
                    "exp": "Mệnh đề điều kiện chỉ kết quả tích cực dùng 'If'."
                },
                {
                    "q": "She has worked for this organization _____ she graduated from university.",
                    "options": [
                        "since",
                        "for",
                        "when",
                        "while"
                    ],
                    "a": 0,
                    "exp": "Mốc thời gian trong quá khứ đi với thì Hiện tại hoàn thành dùng 'since'."
                },
                {
                    "q": "You should check your essay carefully _____ you submit it.",
                    "options": [
                        "before",
                        "after",
                        "while",
                        "since"
                    ],
                    "a": 0,
                    "exp": "Hành động kiểm tra bài trước khi nộp dùng 'before'."
                }
            ]
        },
        {
            "title": "Bài 3: Từ liên kết chuyển đoạn (However, In addition...)",
            "type": "mcq",
            "desc": "Chọn từ liên kết đứng đầu câu có dấu phẩy.",
            "questions": [
                {
                    "q": "Online shopping is fast and convenient. _____, it may lead to impulsive buying.",
                    "options": [
                        "Therefore,",
                        "However,",
                        "Moreover,",
                        "For example,"
                    ],
                    "a": 1,
                    "exp": "Vế sau chỉ mặt trái đối lập với sự tiện lợi nên dùng 'However,'."
                },
                {
                    "q": "Regular exercise helps reduce stress. _____, it improves overall physical health.",
                    "options": [
                        "In addition,",
                        "However,",
                        "Therefore,",
                        "In contrast,"
                    ],
                    "a": 0,
                    "exp": "Bổ sung thêm một lợi ích sức khỏe mới nên dùng 'In addition,'."
                },
                {
                    "q": "He prepared thoroughly for the interview. _____, he was offered the job immediately.",
                    "options": [
                        "As a result,",
                        "However,",
                        "On the other hand,",
                        "Besides,"
                    ],
                    "a": 0,
                    "exp": "Chỉ kết quả tất yếu của sự chuẩn bị kỹ càng dùng 'As a result,'."
                },
                {
                    "q": "Many animals are in danger of extinction. _____, tigers and elephants are illegally hunted.",
                    "options": [
                        "For instance,",
                        "Therefore,",
                        "In conclusion,",
                        "However,"
                    ],
                    "a": 0,
                    "exp": "Đưa ra ví dụ minh họa cho các loài nguy cấp dùng 'For instance,'."
                },
                {
                    "q": "_____ regular physical activity is essential for a healthy lifestyle.",
                    "options": [
                        "In conclusion,",
                        "However,",
                        "For example,",
                        "Furthermore,"
                    ],
                    "a": 0,
                    "exp": "Tổng kết kết luận bài viết dùng 'In conclusion,'."
                }
            ]
        },
        {
            "title": "Bài 4: Liên từ tương quan (Both...and, Not only...but also)",
            "type": "mcq",
            "desc": "Chọn cặp liên từ tương quan phù hợp.",
            "questions": [
                {
                    "q": "The course provides _____ theoretical knowledge _____ practical experience.",
                    "options": [
                        "both / and",
                        "either / nor",
                        "neither / or",
                        "not / but"
                    ],
                    "a": 0,
                    "exp": "Cặp liên từ 'both ... and ...' nối 2 danh từ tương đương."
                },
                {
                    "q": "She is _____ intelligent _____ very diligent.",
                    "options": [
                        "not only / but also",
                        "either / and",
                        "neither / but",
                        "both / or"
                    ],
                    "a": 0,
                    "exp": "Cặp liên từ 'not only ... but also ...' (không những ... mà còn ...)."
                },
                {
                    "q": "You can _____ pay by credit card _____ pay in cash.",
                    "options": [
                        "either / or",
                        "neither / or",
                        "both / nor",
                        "not only / and"
                    ],
                    "a": 0,
                    "exp": "Lựa chọn 1 trong 2 phương thức thanh toán dùng 'either ... or ...'."
                },
                {
                    "q": "He likes _____ coffee _____ tea; he only drinks pure water.",
                    "options": [
                        "neither / nor",
                        "either / or",
                        "both / and",
                        "not only / but also"
                    ],
                    "a": 0,
                    "exp": "Phủ định cả 2 thức uống dùng 'neither ... nor ...'."
                },
                {
                    "q": "_____ the teacher _____ the students were present at the ceremony.",
                    "options": [
                        "Both / and",
                        "Either / and",
                        "Neither / or",
                        "Not only / and"
                    ],
                    "a": 0,
                    "exp": "'Both ... and ...' đi với động từ số nhiều 'were'."
                }
            ]
        },
        {
            "title": "Bài 5: Dịch câu ghép và câu phức với Từ nối",
            "type": "trans",
            "desc": "Dịch câu sang tiếng Anh.",
            "questions": [
                {
                    "q": "Mặc dù chi phí sinh hoạt ở thành phố cao, nhiều người vẫn chọn sống ở đó.",
                    "a": [
                        "Although the cost of living in the city is high, many people still choose to live there.",
                        "Even though the cost of living in the city is high, many people still choose to live there."
                    ],
                    "hint": "Mặc dù (Although / Even though), chi phí sinh hoạt (the cost of living), ở thành phố (in the city), chọn sống ở đó (choose to live there)."
                },
                {
                    "q": "Học sinh nên ngủ đủ giấc để có thể tập trung tốt hơn trong lớp học.",
                    "a": [
                        "Students should get enough sleep so that they can concentrate better in class.",
                        "Students should sleep enough in order to focus better in class."
                    ],
                    "hint": "ngủ đủ giấc (get enough sleep / sleep enough), để (so that + S + can / in order to), tập trung tốt hơn (concentrate/focus better)."
                },
                {
                    "q": "Phương tiện công cộng rất tiện lợi. Hơn nữa, nó giúp giảm thiểu ô nhiễm môi trường.",
                    "a": [
                        "Public transport is very convenient. Moreover, it helps reduce environmental pollution.",
                        "Public transportation is very convenient. Furthermore, it helps reduce environmental pollution."
                    ],
                    "hint": "Hơn nữa (Moreover, / Furthermore,), giảm thiểu ô nhiễm (reduce environmental pollution)."
                },
                {
                    "q": "Nếu bạn muốn cải thiện kỹ năng viết, bạn cần luyện tập hàng ngày.",
                    "a": [
                        "If you want to improve your writing skills, you need to practice every day."
                    ],
                    "hint": "Nếu (If), cải thiện kỹ năng viết (improve your writing skills), luyện tập hàng ngày (practice every day)."
                },
                {
                    "q": "Tóm lại, việc bảo vệ môi trường là trách nhiệm của tất cả chúng ta.",
                    "a": [
                        "In conclusion, protecting the environment is the responsibility of all of us.",
                        "To sum up, protecting the environment is our shared responsibility."
                    ],
                    "hint": "Tóm lại (In conclusion, / To sum up,), bảo vệ môi trường (protecting the environment), trách nhiệm của tất cả chúng ta (responsibility of all of us)."
                }
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
                <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">Kho ngân hàng bài tập tự luyện gồm 9 chủ điểm (Chương 1 & Chương 2), mỗi chủ điểm có 5 bài luyện tập chuẩn VSTEP (mỗi bài đúng 5 câu).</p>
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
