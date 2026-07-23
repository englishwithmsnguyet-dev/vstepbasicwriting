// --- DATA ---
const componentsData = [
    {
        id: 'subject',
        name: 'Chủ Ngữ (Subject)',
        icon: '👤',
        faqs: [
            { q: "❓ Chủ ngữ là gì?", a: "Chủ ngữ là <span class=\"highlight-blue\">chủ thể chính</span> của câu.<br><br>Về mặt ý nghĩa, chủ ngữ có thể là người, con vật hoặc sự vật:<br><ul style=\"margin-top: 8px; margin-bottom: 0; padding-left: 24px; line-height: 1.8;\"><li><span class=\"highlight-blue\">Thực hiện hành động</span> (trong câu chủ động)</li><li><span class=\"highlight-blue\">Chịu tác động</span> (trong câu bị động)</li><li>Hoặc <span class=\"highlight-blue\">được miêu tả trạng thái</span> (khi đi với động từ liên kết)</li></ul>" },
            { q: "📍 Chủ ngữ đứng ở vị trí nào trong câu?", a: "Chủ ngữ thường <span class=\"highlight-blue\">đứng trước động từ</span>.<br><br><div style=\"color: var(--danger); font-size: 0.95em;\"><b>*LƯU Ý:</b> Chủ ngữ không nhất thiết phải là từ đứng đầu tiên của câu.</div>" },
            { q: "🎯 Chức năng của chủ ngữ là gì?", a: "Chủ ngữ <span class=\"highlight-blue\">quyết định dạng chia của động từ</span> (trong một số thì và cấu trúc nhất định)." }
        ],
        formsHeading: '🧩 Chủ ngữ có thể là từ loại nào?',
        forms: [
            {
                title: '📌 Danh từ (Noun)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: Peter, people, the hospital, water...</div>
                    <div class="form-example">
                        <div class="en"><u><b>My friend</b></u> lives near my house.</div>
                        <div class="vn">(Bạn tôi sống gần nhà tôi)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Đại từ (Pronoun)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: I, you, we, they, he, she, it</div>
                    <div class="form-example">
                        <div class="en"><u><b>She</b></u> reads books every day.</div>
                        <div class="vn">(Cô ấy đọc sách mỗi ngày)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Cụm danh từ (Noun Phrase)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: the small park, a beautiful girl, my old car...</div>
                    <div class="form-example">
                        <div class="en"><u><b>The small park near my house</b></u> is very large.</div>
                        <div class="vn">(Công viên nhỏ gần nhà tôi thì rất rộng)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Danh động từ (V-ing)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: reading, swimming, learning...</div>
                    <div class="form-example">
                        <div class="en"><u><b>Reading</b></u> is my hobby.</div>
                        <div class="vn">(Đọc sách là sở thích của tôi)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Động từ nguyên thể (to-V)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: to learn, to go, to help...</div>
                    <div class="form-note">
                        *Lưu ý:<br>• Dạng này khá trang trọng và ít dùng trong thực tế.<br>• Người ta thường dùng V-ing hoặc cấu trúc "It is + adj + to-V" hơn.<br>• Ví dụ: It is important to learn English.
                    </div>
                    <div class="form-example">
                        <div class="en"><u><b>To learn</b></u> English is important.</div>
                        <div class="vn">(Học tiếng Anh thì rất quan trọng)</div>
                    </div>
                </div>
                `
            }
        ]
    },
    {
        id: 'verb',
        name: 'Động Từ (Verb)',
        icon: '⚡',
        faqs: [
            { q: "❓ Động từ là gì?", a: "Động từ diễn tả <span class=\"highlight-blue\">hành động</span> hoặc <span class=\"highlight-blue\">trạng thái</span> của chủ ngữ. Trả lời cho câu hỏi <span class=\"highlight-blue\">\"Chủ ngữ đang làm gì?\"</span> hoặc <span class=\"highlight-blue\">\"Chủ ngữ ở trạng thái như thế nào?\"</span>." },
            { q: "🎯 Động từ có vai trò gì trong câu?", a: "Động từ quyết định ý nghĩa chính của câu và thường phải <span class=\"highlight-blue\">thay đổi hình thái (chia thì)</span> phụ thuộc vào chủ ngữ và thời điểm xảy ra." }
        ],
        formsHeading: '🧩 Động từ được chia làm những nhóm nào?',
        forms: [
            {
                title: '1. Động từ hành động (Action Verbs)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-item">
                        <div class="form-sub-title">🏃 Hành động vật lý (thể chất):</div>
                        
                        <div class="verb-detail-list">
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>run</b> (chạy) 🏃</div>
                                <div class="form-example"><div class="en">He <u><b>runs</b></u> every morning.</div><div class="vn">(Anh ấy chạy mỗi sáng)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>eat</b> (ăn) 🍔</div>
                                <div class="form-example"><div class="en">They <u><b>eat</b></u> pizza on weekends.</div><div class="vn">(Họ ăn pizza vào cuối tuần)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>jump</b> (nhảy) 🦘</div>
                                <div class="form-example"><div class="en">The frog <u><b>jumps</b></u> very high.</div><div class="vn">(Con ếch nhảy rất cao)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>write</b> (viết) ✍️</div>
                                <div class="form-example"><div class="en">She <u><b>wrote</b></u> a long letter.</div><div class="vn">(Cô ấy đã viết một bức thư dài)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>sing</b> (hát) 🎤</div>
                                <div class="form-example"><div class="en">We <u><b>sing</b></u> our favorite songs.</div><div class="vn">(Chúng tôi hát những bài hát yêu thích)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>dance</b> (nhảy múa) 💃</div>
                                <div class="form-example"><div class="en">The children <u><b>dance</b></u> beautifully.</div><div class="vn">(Những đứa trẻ nhảy múa tuyệt đẹp)</div></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-sub-item" style="margin-top: 24px;">
                        <div class="form-sub-title">🧠 Hành động nhận thức (tâm trí):</div>
                        <div class="verb-detail-list">
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>think</b> (nghĩ) 💭</div>
                                <div class="form-example"><div class="en">I <u><b>think</b></u> it is a good idea.</div><div class="vn">(Tôi nghĩ đó là một ý kiến hay)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>know</b> (biết) 💡</div>
                                <div class="form-example"><div class="en">She <u><b>knows</b></u> the answer.</div><div class="vn">(Cô ấy biết câu trả lời)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>understand</b> (hiểu) 🧠</div>
                                <div class="form-example"><div class="en">I <u><b>understand</b></u> the lesson completely.</div><div class="vn">(Tôi hoàn toàn hiểu bài học)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>believe</b> (tin) ✨</div>
                                <div class="form-example"><div class="en">They <u><b>believe</b></u> in hard work.</div><div class="vn">(Họ tin vào sự chăm chỉ)</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            },
            {
                title: '2. Động từ liên kết (Linking Verbs)',
                content: `
                <div class="form-rich-content">
                    <div class="form-note" style="margin-bottom: 20px;">
                        <b>*Đặc biệt lưu ý:</b> Nhóm này KHÔNG mang ý nghĩa hành động. Chúng đóng vai trò như một "cây cầu" nối chủ ngữ với từ chỉ tính chất/trạng thái ở phía sau.
                    </div>
                    
                    <div class="form-sub-item">
                        <div class="form-sub-title">🔗 Nhóm "To be":</div>
                        <div class="verb-detail-list">
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>am/is/are/was/were</b> (thì, là, ở) 🤝</div>
                                <div class="form-example"><div class="en">My father <u><b>is</b></u> a doctor.</div><div class="vn">(Bố tôi là bác sĩ)</div></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-sub-item" style="margin-top: 24px;">
                        <div class="form-sub-title">👁️ Nhóm Giác quan:</div>
                        <div class="verb-detail-list">
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>look</b> (trông có vẻ) 👀</div>
                                <div class="form-example"><div class="en">He <u><b>looks</b></u> very tired today.</div><div class="vn">(Anh ấy trông rất mệt mỏi hôm nay)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>sound</b> (nghe có vẻ) 👂</div>
                                <div class="form-example"><div class="en">That idea <u><b>sounds</b></u> great!</div><div class="vn">(Ý tưởng đó nghe có vẻ tuyệt đấy!)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>smell</b> (có mùi) 👃</div>
                                <div class="form-example"><div class="en">This soup <u><b>smells</b></u> delicious.</div><div class="vn">(Món súp này có mùi rất ngon)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>taste</b> (có vị) 👅</div>
                                <div class="form-example"><div class="en">The cake <u><b>tastes</b></u> sweet.</div><div class="vn">(Chiếc bánh có vị ngọt)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>feel</b> (cảm thấy) ❤️</div>
                                <div class="form-example"><div class="en">She <u><b>feels</b></u> happy now.</div><div class="vn">(Cô ấy cảm thấy hạnh phúc bây giờ)</div></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-sub-item" style="margin-top: 24px;">
                        <div class="form-sub-title">🔄 Nhóm Sự biến đổi/Trạng thái:</div>
                        <div class="verb-detail-list">
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>become</b> (trở nên) 🦋</div>
                                <div class="form-example"><div class="en">He <u><b>became</b></u> a successful writer.</div><div class="vn">(Anh ấy đã trở thành một nhà văn thành công)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>seem</b> (dường như) 🌫️</div>
                                <div class="form-example"><div class="en">They <u><b>seem</b></u> very busy.</div><div class="vn">(Họ dường như rất bận rộn)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>get</b> (dần trở nên) 📈</div>
                                <div class="form-example"><div class="en">The weather <u><b>gets</b></u> colder in winter.</div><div class="vn">(Thời tiết dần trở nên lạnh hơn vào mùa đông)</div></div>
                            </div>
                            <div class="verb-detail-item">
                                <div class="verb-word"><b>turn</b> (chuyển sang) 🔄</div>
                                <div class="form-example"><div class="en">The leaves <u><b>turn</b></u> yellow in autumn.</div><div class="vn">(Lá cây chuyển sang màu vàng vào mùa thu)</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        ]
    },
    {
        id: 'object',
        name: 'Tân Ngữ (Object)',
        icon: '🎯',
        faqs: [
            { q: "❓ Tân ngữ là gì?", a: "Tân ngữ là thành phần bổ sung ý nghĩa cho động từ, chỉ đối tượng (người, con vật, sự vật) <span class=\"highlight-blue\">chịu tác động trực tiếp hoặc gián tiếp</span> của một động từ hành động.<br><br><div style=\"color: var(--danger); font-size: 0.95em;\"><b>*LƯU Ý:</b> Động từ liên kết không đi kèm tân ngữ.</div>" },
            { q: "📍 Tân ngữ đứng ở vị trí nào trong câu?", a: "Tân ngữ thường <span class=\"highlight-blue\">đứng ngay sau động từ hành động</span>." }
        ],
        formsHeading: '🧩 Tân ngữ có thể là từ loại nào?',
        forms: [
            {
                title: '📌 Danh từ (Noun)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: a car, money, water, an apple...</div>
                    <div class="form-example">
                        <div class="en">I bought <u><b>a car</b></u>.</div>
                        <div class="vn">(Tôi đã mua một chiếc xe hơi)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Đại từ tân ngữ (Object Pronoun)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: me, you, us, them, him, her, it</div>
                    <div class="form-example">
                        <div class="en">She gave <u><b>me</b></u> a gift.</div>
                        <div class="vn">(Cô ấy đã tặng tôi một món quà)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Cụm danh từ (Noun Phrase)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: his little brother, a beautiful dress...</div>
                    <div class="form-example">
                        <div class="en">He loves <u><b>his little brother</b></u>.</div>
                        <div class="vn">(Anh ấy rất yêu thương em trai mình)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Danh động từ (V-ing)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: playing football, reading books...</div>
                    <div class="form-example">
                        <div class="en">He likes <u><b>playing football</b></u>.</div>
                        <div class="vn">(Anh ấy thích chơi bóng đá)</div>
                    </div>
                </div>
                `
            }
        ]
    },
    {
        id: 'complement',
        name: 'Bổ Ngữ (Complement)',
        icon: '✨',
        faqs: [
            { q: "❓ Bổ ngữ là gì?", a: "Bổ ngữ là thành phần đi kèm để <span class=\"highlight-blue\">hoàn thiện ý nghĩa</span> cho chủ ngữ hoặc tân ngữ. Nó cung cấp thêm thông tin mô tả chi tiết." },
            { q: "📍 Bổ ngữ đứng ở vị trí nào trong câu?", a: "Tùy thuộc vào loại bổ ngữ: <span class=\"highlight-blue\">Bổ ngữ cho chủ ngữ</span> thường đứng sau Động từ liên kết. <span class=\"highlight-blue\">Bổ ngữ cho tân ngữ</span> thường đứng ngay sau Tân ngữ." }
        ],
        formsHeading: '🧩 Bổ ngữ gồm những dạng nào?',
        forms: [
            {
                title: '1. Bổ ngữ cho chủ ngữ (Subject complement)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words" style="margin-bottom: 12px; font-style: italic;">Đứng sau động từ liên kết (thường là danh từ hoặc tính từ như: a student, happy, tired...)</div>
                    <div class="form-example">
                        <div class="en">She is <u><b>a student</b></u>.</div>
                        <div class="vn">(Cô ấy là một học sinh)</div>
                    </div>
                </div>
                `
            },
            {
                title: '2. Bổ ngữ cho tân ngữ (Object complement)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words" style="margin-bottom: 12px; font-style: italic;">Đứng sau tân ngữ để mô tả tân ngữ đó (thường là danh từ hoặc tính từ như: sad, president, angry...)</div>
                    <div class="form-example">
                        <div class="en">The news made me <u><b>sad</b></u>.</div>
                        <div class="vn">(Tin tức đó làm tôi buồn)</div>
                    </div>
                </div>
                `
            }
        ]
    },
    {
        id: 'adverb',
        name: 'Trạng Ngữ (Adverb)',
        icon: '⏱️',
        faqs: [
            { q: "❓ Trạng ngữ là gì?", a: "Trạng ngữ là thành phần <span class=\"highlight-blue\">bổ sung thông tin</span> về cách thức, thời gian, nơi chốn, lý do, mức độ, tần suất." },
            { q: "📍 Trạng ngữ đứng ở vị trí nào trong câu?", a: "Trạng ngữ có <span class=\"highlight-blue\">vị trí rất linh hoạt</span> (có thể đứng đầu, giữa, hoặc cuối câu). Đặc biệt, trạng ngữ có thể bỏ đi mà câu vẫn đúng ngữ pháp." }
        ],
        formsHeading: '🧩 Trạng ngữ cung cấp những loại thông tin nào?',
        forms: [
            {
                title: '📌 Cách thức (How)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: slowly, carefully, well, fast, hard...</div>
                    <div class="form-example">
                        <div class="en">She speaks <u><b>slowly</b></u>.</div>
                        <div class="vn">(Cô ấy nói chuyện một cách chậm rãi)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Thời gian (When)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: yesterday, now, last night, tomorrow...</div>
                    <div class="form-example">
                        <div class="en">I studied <u><b>last night</b></u>.</div>
                        <div class="vn">(Tôi đã học bài vào tối qua)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Địa điểm (Where)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: in the park, at home, everywhere, there...</div>
                    <div class="form-example">
                        <div class="en">They play football <u><b>in the park</b></u>.</div>
                        <div class="vn">(Họ chơi bóng đá trong công viên)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Tần suất (How often)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: always, sometimes, never, usually...</div>
                    <div class="form-example">
                        <div class="en">He <u><b>always</b></u> gets up early.</div>
                        <div class="vn">(Anh ấy luôn luôn thức dậy sớm)</div>
                    </div>
                </div>
                `
            },
            {
                title: '📌 Mục đích (Why)',
                content: `
                <div class="form-rich-content">
                    <div class="form-sub-words">Ví dụ: to buy a new phone, for learning...</div>
                    <div class="form-example">
                        <div class="en">She saves money <u><b>to buy a new phone</b></u>.</div>
                        <div class="vn">(Cô ấy tiết kiệm tiền để mua điện thoại mới)</div>
                    </div>
                </div>
                `
            }
        ]
    }

];

const structuresData = [
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ef4444;">O</span>',
        name: 'Dạng 01: S + V + O',
        desc: 'Hành động tác động lên đối tượng. Chủ ngữ thực hiện một hành động trực tiếp lên một tân ngữ.',
        note: '💡 <b style='color: var(--primary-color);'>LƯU Ý:</b> <strong style="color: #f59e0b;">Động từ (V)</b> ở đây là <b style='color: var(--primary-color);'>ĐỘNG TỪ HÀNH ĐỘNG (Action Verb)</b>. Cụ thể là Ngoại động từ, bắt buộc phải có đối tượng tiếp nhận hành động theo sau. Nếu không có <strong style="color: #ef4444;">Tân ngữ (O)</b>, câu sẽ bị lửng lơ và vô nghĩa (Ví dụ: Bạn không thể chỉ nói "She loves...").',
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
        desc: 'Miêu tả tính chất, trạng thái hoặc nhận dạng của chủ ngữ.',
        note: '💡 <b style='color: var(--primary-color);'>LƯU Ý QUAN TRỌNG:</b> <strong style="color: #f59e0b;">Động từ (V)</b> ở đây là <b style='color: var(--primary-color);'>ĐỘNG TỪ LIÊN KẾT (Linking Verb)</b> (is, am, are, look, feel, become, seem...). Nó <b style='color: var(--primary-color);'>không diễn tả hành động</b>, mà chỉ giống như một "dấu bằng (=)" để nối <strong style="color: #3b82f6;">Chủ ngữ (S)</b> với phần <strong style="color: #a855f7;">Bổ ngữ (C)</b>.',
        examples: [
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">is</span> <span style="color: #a855f7;">beautiful</span>.', vi: 'Cô ấy thì xinh đẹp.' },
            { en: '<span style="color: #3b82f6;">My brother</span> <span style="color: #f59e0b;">is</span> <span style="color: #a855f7;">a student</span>.', vi: 'Anh trai tôi là một học sinh.' },
            { en: '<span style="color: #3b82f6;">The food</span> <span style="color: #f59e0b;">smells</span> <span style="color: #a855f7;">delicious</span>.', vi: 'Món ăn này ngửi có vẻ ngon.' },
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">looks</span> <span style="color: #a855f7;">tired</span>.', vi: 'Anh ấy trông có vẻ mệt mỏi.' },
            { en: '<span style="color: #3b82f6;">The weather</span> <span style="color: #f59e0b;">became</span> <span style="color: #a855f7;">cold</span>.', vi: 'Thời tiết đã trở nên lạnh lẽo.' },
            { en: '<span style="color: #3b82f6;">This idea</span> <span style="color: #f59e0b;">sounds</span> <span style="color: #a855f7;">great</span>.', vi: 'Ý tưởng này nghe có vẻ tuyệt vời.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #10b981;">Adv</span>',
        name: 'Dạng 03: S + V + Adv',
        desc: 'Diễn tả hành động của chủ ngữ kèm theo thông tin phụ (như cách thức, thời gian, địa điểm).',
        note: '💡 <b style='color: var(--primary-color);'>LƯU Ý:</b> <strong style="color: #f59e0b;">Động từ (V)</b> ở đây là <b style='color: var(--primary-color);'>ĐỘNG TỪ HÀNH ĐỘNG (Action Verb)</b>. Cụ thể là Nội động từ, tự bản thân nó đã trọn vẹn ý nghĩa. Hành động không tác động lên ai/cái gì cả, do đó tuyệt đối không có <strong style="color: #ef4444;">Tân ngữ (O)</b> theo sau.',
        examples: [
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">smiled</span> <span style="color: #10b981;">happily</span>.', vi: 'Cô ấy đã mỉm cười một cách hạnh phúc.' },
            { en: '<span style="color: #3b82f6;">The baby</span> <span style="color: #f59e0b;">cried</span> <span style="color: #10b981;">loudly</span>.', vi: 'Em bé đã khóc rất lớn.' },
            { en: '<span style="color: #3b82f6;">I</span> <span style="color: #f59e0b;">got up</span> <span style="color: #10b981;">early</span>.', vi: 'Tôi đã thức dậy sớm.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">arrived</span> <span style="color: #10b981;">late</span>.', vi: 'Họ đã đến muộn.' },
            { en: '<span style="color: #3b82f6;">The dog</span> <span style="color: #f59e0b;">ran</span> <span style="color: #10b981;">fast</span>.', vi: 'Con chó đã chạy nhanh.' },
            { en: '<span style="color: #3b82f6;">We</span> <span style="color: #f59e0b;">slept</span> <span style="color: #10b981;">well</span>.', vi: 'Chúng tôi đã ngủ rất ngon.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ef4444;">O</span> + <span style="color: #10b981;">Adv</span>',
        name: 'Dạng 04: S + V + O + Adv',
        desc: 'Hành động có đối tượng tiếp nhận (O) và được bổ sung thêm hoàn cảnh, thời gian hoặc cách thức xảy ra (Adv).',
        note: '💡 <b style='color: var(--primary-color);'>LƯU Ý:</b> Giống như Dạng 1, <strong style="color: #f59e0b;">Động từ (V)</b> vẫn là <b style='color: var(--primary-color);'>ĐỘNG TỪ HÀNH ĐỘNG (Action Verb)</b>, nhưng câu được gắn thêm phần <strong style="color: #10b981;">Trạng ngữ (Adv) ở đuôi</b> để câu văn chi tiết hơn (như làm việc đó ở đâu, khi nào, như thế nào...).',
        examples: [
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">finished</span> <span style="color: #ef4444;">her homework</span> <span style="color: #10b981;">quickly</span>.', vi: 'Cô ấy đã hoàn thành bài tập về nhà một cách nhanh chóng.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">decorated</span> <span style="color: #ef4444;">the room</span> <span style="color: #10b981;">beautifully</span>.', vi: 'Họ đã trang trí căn phòng thật đẹp.' },
            { en: '<span style="color: #3b82f6;">I</span> <span style="color: #f59e0b;">met</span> <span style="color: #ef4444;">my friends</span> <span style="color: #10b981;">at the park</span>.', vi: 'Tôi đã gặp bạn bè của mình ở công viên.' },
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">goes</span> <span style="color: #ef4444;">to the gym</span> <span style="color: #10b981;">every day</span>.', vi: 'Anh ấy đi đến phòng tập thể hình mỗi ngày.' },
            { en: '<span style="color: #3b82f6;">My mom</span> <span style="color: #f59e0b;">cooked</span> <span style="color: #ef4444;">dinner</span> <span style="color: #10b981;">yesterday</span>.', vi: 'Mẹ tôi đã nấu bữa tối vào hôm qua.' },
            { en: '<span style="color: #3b82f6;">The students</span> <span style="color: #f59e0b;">read</span> <span style="color: #ef4444;">books</span> <span style="color: #10b981;">quietly</span>.', vi: 'Các học sinh đã đọc sách một cách yên lặng.' }
        ]
    },
    {
        formula: '<span style="color: #3b82f6;">S</span> + <span style="color: #f59e0b;">V</span> + <span style="color: #ef4444;">O</span> + <span style="color: #a855f7;">C</span>',
        name: 'Dạng 05: S + V + O + C',
        desc: 'Chủ ngữ thực hiện hành động làm cho Tân ngữ thay đổi trạng thái, hoặc để đánh giá về Tân ngữ đó.',
        note: '💡 <b style='color: var(--primary-color);'>LƯU Ý:</b> <strong style="color: #f59e0b;">Động từ (V)</b> ở đây là <b style='color: var(--primary-color);'>ĐỘNG TỪ HÀNH ĐỘNG (Action Verb)</b> mang ý nghĩa tác động làm biến đổi (make, paint) hoặc nhận xét, đánh giá (find, consider...). <strong style="color: #a855f7;">Bổ ngữ (C)</b> đứng ngay sau để làm rõ <strong style="color: #ef4444;">Tân ngữ (O)</b> đó ra sao.',
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
        desc: 'Cấu trúc "cho/tặng/gửi ai cái gì". Có hai tân ngữ: O1 là Người nhận, O2 là Vật được cho/tặng.',
        note: '💡 <b style='color: var(--primary-color);'>LƯU Ý:</b> <strong style="color: #f59e0b;">Động từ (V)</b> ở đây là <b style='color: var(--primary-color);'>ĐỘNG TỪ HÀNH ĐỘNG (Action Verb)</b>. Tuy nhiên nó đặc biệt ở chỗ <b style='color: var(--primary-color);'>cần đến tận 2 đối tượng tiếp nhận hành động cùng lúc</b> (như give, send, tell, buy...). Gồm <strong style="color: #ec4899;">người nhận (O1)</b> và <strong style="color: #ef4444;">vật được cho (O2)</b>.',
        examples: [
            { en: '<span style="color: #3b82f6;">He</span> <span style="color: #f59e0b;">told</span> <span style="color: #ec4899;">me</span> <span style="color: #ef4444;">a story</span>.', vi: 'Anh ấy đã kể cho tôi một câu chuyện.' },
            { en: '<span style="color: #3b82f6;">She</span> <span style="color: #f59e0b;">gave</span> <span style="color: #ec4899;">me</span> <span style="color: #ef4444;">a gift</span>.', vi: 'Cô ấy đã tặng tôi một món quà.' },
            { en: '<span style="color: #3b82f6;">My mom</span> <span style="color: #f59e0b;">bought</span> <span style="color: #ec4899;">me</span> <span style="color: #ef4444;">a new bag</span>.', vi: 'Mẹ tôi đã mua cho tôi một chiếc túi mới.' },
            { en: '<span style="color: #3b82f6;">The teacher</span> <span style="color: #f59e0b;">showed</span> <span style="color: #ec4899;">us</span> <span style="color: #ef4444;">a video</span>.', vi: 'Giáo viên đã cho chúng tôi xem một đoạn video.' },
            { en: '<span style="color: #3b82f6;">I</span> <span style="color: #f59e0b;">sent</span> <span style="color: #ec4899;">my friend</span> <span style="color: #ef4444;">an email</span>.', vi: 'Tôi đã gửi cho bạn tôi một bức thư điện tử.' },
            { en: '<span style="color: #3b82f6;">They</span> <span style="color: #f59e0b;">offered</span> <span style="color: #ec4899;">him</span> <span style="color: #ef4444;">a job</span>.', vi: 'Họ đã đề nghị cho anh ấy một công việc.' }
        ]
    }
];

const structurePracticeData = [
    { text: "The workers repaired the broken computer.", answer: 0, explanation: "repaired (V ngoại động từ) + the broken computer (Tân ngữ O)" },
    { text: "The river remains clean.", answer: 1, explanation: "remains (Động từ liên kết) + clean (Bổ ngữ C)" },
    { text: "The guests left early.", answer: 2, explanation: "left (V nội động từ) + early (Trạng ngữ Adv)" },
    { text: "The boys played football outside.", answer: 3, explanation: "played (V) + football (O) + outside (Trạng ngữ Adv chỉ nơi chốn)" },
    { text: "The loud noise drives him crazy.", answer: 4, explanation: "drives (V) + him (O) + crazy (Bổ ngữ C)" },
    { text: "The hotel offers visitors free breakfast.", answer: 5, explanation: "offers (V) + visitors (Người nhận O1) + free breakfast (Vật O2)" },
    { text: "The new plan seems great.", answer: 1, explanation: "seems (Động từ liên kết) + great (Bổ ngữ C)" },
    { text: "The school organized a small party.", answer: 0, explanation: "organized (V ngoại động từ) + a small party (Tân ngữ O)" },
    { text: "The hot weather makes everyone tired.", answer: 4, explanation: "makes (V) + everyone (O) + tired (Bổ ngữ C)" },
    { text: "The manager promised the staff a bonus.", answer: 5, explanation: "promised (V) + the staff (Người nhận O1) + a bonus (Vật O2)" }
];

const componentPracticeData = [
    {
        chunks: [
            { text: "A tiny bird", label: "S" },
            { text: "is singing", label: "V" },
            { text: "beautifully", label: "Adv" }
        ]
    },
    {
        chunks: [
            { text: "The small cat", label: "S" },
            { text: "chased", label: "V" },
            { text: "the mouse", label: "O" },
            { text: "yesterday", label: "Adv" }
        ]
    },
    {
        chunks: [
            { text: "She", label: "S" },
            { text: "is", label: "V" },
            { text: "a student", label: "C" },
            { text: "at a university", label: "Adv" }
        ]
    },
    {
        chunks: [
            { text: "The talented chef", label: "S" },
            { text: "prepared", label: "V" },
            { text: "a delicious meal", label: "O" },
            { text: "in the kitchen", label: "Adv" }
        ]
    },
    {
        chunks: [
            { text: "The weather", label: "S" },
            { text: "gets", label: "V" },
            { text: "colder", label: "C" },
            { text: "in winter", label: "Adv" }
        ]
    },
    {
        chunks: [
            { text: "He", label: "S" },
            { text: "told", label: "V" },
            { text: "me", label: "O" },
            { text: "a story", label: "O" }
        ]
    },
    {
        chunks: [
            { text: "My father", label: "S" },
            { text: "painted", label: "V" },
            { text: "the old wall", label: "O" },
            { text: "green", label: "C" }
        ]
    },
    {
        chunks: [
            { text: "The smart students", label: "S" },
            { text: "solved", label: "V" },
            { text: "the math problem", label: "O" },
            { text: "easily", label: "Adv" }
        ]
    },
    {
        chunks: [
            { text: "This cake", label: "S" },
            { text: "tastes", label: "V" },
            { text: "incredibly sweet", label: "C" }
        ]
    },
    {
        chunks: [
            { text: "The baby", label: "S" },
            { text: "cried", label: "V" },
            { text: "loudly", label: "Adv" }
        ]
    }
];

// --- NAVIGATION & VIEWS ---
const navItems = [
    { id: 'home', label: 'TRANG CHỦ', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>' },
    { id: 'chapter1', label: 'CHƯƠNG 01: THÀNH PHẦN VÀ CẤU TRÚC CÂU', icon: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>' },
    { id: 'chapter2', label: 'CHƯƠNG 02: TỪ LOẠI TRONG TIẾNG ANH', icon: '<path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path><path d="M12 22v-6.5"></path><path d="M22 8.5l-10 7-10-7"></path><path d="M2 15.5l10-7 10 7"></path>' }
];

const topicsData = [
    {
        id: 'components',
        title: 'CHỦ ĐIỂM 01: CÁC THÀNH PHẦN CÂU CƠ BẢN',
        desc: 'Tìm hiểu 5 thành phần cấu tạo nên một câu: chủ ngữ, động từ, tân ngữ, bổ ngữ, trạng ngữ.',
        status: 'unlocked'
    },
    {
        id: 'structures',
        title: 'CHỦ ĐIỂM 02: CÁC CẤU TRÚC CÂU CƠ BẢN',
        desc: 'Nắm vững 6 cấu trúc câu Tiếng Anh phổ biến nhất để có thể tự viết câu chính xác.',
        status: 'locked'
    }
];


const chapter2TopicsData = [
    {
        id: 'nouns',
        title: 'CHỦ ĐIỂM 01: DANH TỪ',
        desc: 'Hiểu rõ vị trí, cách nhận biết và phân loại Danh từ để thiết lập thành phần Chủ ngữ và Tân ngữ chính xác.',
        status: 'locked'
    },
    {
        id: 'pronouns',
        title: 'CHỦ ĐIỂM 02: ĐẠI TỪ',
        desc: 'Sử dụng Đại từ để thay thế Danh từ, giúp tránh lặp từ và tạo sự liên kết chặt chẽ cho câu văn.',
        status: 'locked'
    },
    {
        id: 'verbs',
        title: 'CHỦ ĐIỂM 03: ĐỘNG TỪ',
        desc: 'Nắm vững các thì Động từ cơ bản và sự hòa hợp Chủ - Vị trong câu.',
        status: 'locked'
    },
    {
        id: 'adjectives',
        title: 'CHỦ ĐIỂM 04: TÍNH TỪ',
        desc: 'Cách dùng Tính từ để miêu tả đặc điểm và bổ sung ý nghĩa cho Danh từ.',
        status: 'locked'
    },
    {
        id: 'adverbs',
        title: 'CHỦ ĐIỂM 05: TRẠNG TỪ',
        desc: 'Cách dùng Trạng từ để bổ nghĩa cho Động từ, Tính từ hoặc cả câu.',
        status: 'locked'
    },
    {
        id: 'prepositions',
        title: 'CHỦ ĐIỂM 06: GIỚI TỪ',
        desc: 'Sử dụng Giới từ chỉ thời gian, nơi chốn để tạo các Cụm trạng ngữ chính xác.',
        status: 'locked'
    },
    {
        id: 'conjunctions',
        title: 'CHỦ ĐIỂM 07: TỪ NỐI',
        desc: 'Các từ nối phổ biến (FANBOYS, Because, Although...) để tạo câu ghép, câu phức.',
        status: 'locked'
    }
];

const sidebarNav = document.getElementById('sidebar-nav');
const contentWrapper = document.getElementById('content-wrapper');

let currentQuizIndex = 0;
let quizScore = 0;

function renderNav() {
    sidebarNav.innerHTML = navItems.map(item => `
        <a class="nav-item ${item.id === 'home' ? 'active' : ''}" data-target="${item.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>
            ${item.label}
        </a>
    `).join('');

    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            renderView(target.getAttribute('data-target'));
        });
    });
}
function renderView(viewId) {
    let html = '';
    
    if (viewId === 'home') {
        html = `
            <div class="home-container" style="margin-top: 40px; text-align: center;">
                <div class="home-image" style="margin-bottom: 24px;">
                    <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" alt="Cat studying" style="width: 180px; height: 180px; object-fit: cover; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 4px solid #fff;">
                </div>
                <h2 style="font-size: 2rem; margin-bottom: 16px; color: var(--primary-color);">HƯỚNG DẪN HỌC</h2>
                <div style="font-size: 1.1rem; color: var(--text-main); max-width: 600px; margin: 0 auto; text-align: left; background: var(--bg-card); padding: 32px 24px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                    <div style="margin-bottom: 24px; text-align: center;">Chào mừng bạn đến với hệ thống học tập của <b style='color: var(--primary-color);'>MISS NGUYET</b>.</div>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 24px;">
                        <li style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: var(--primary-light); color: var(--primary-color); padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; min-width: 90px; text-align: center;">BƯỚC 01</span> 
                                <b style="font-size: 1.15rem;">Học lại nội dung lý thuyết.</b>
                            </div>
                            <div style="padding-left: 102px; font-size: 1rem; color: var(--text-muted); line-height: 1.5;">Ôn tập kỹ lưỡng các kiến thức trọng tâm, khái niệm và cấu trúc trong từng chủ điểm trước khi thực hành.</div>
                        </li>
                        <li style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: var(--primary-light); color: var(--primary-color); padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; min-width: 90px; text-align: center;">BƯỚC 02</span> 
                                <b style="font-size: 1.15rem;">Làm bài tập áp dụng.</b>
                            </div>
                            <div style="padding-left: 102px; font-size: 1rem; color: var(--text-muted); line-height: 1.5;">Vận dụng kiến thức vừa học để tư duy và hoàn thành trọn vẹn 10 câu hỏi xác định thành phần.</div>
                        </li>
                        <li style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="background: var(--primary-light); color: var(--primary-color); padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; min-width: 90px; text-align: center;">BƯỚC 03</span> 
                                <b style="font-size: 1.15rem;">Báo cáo kết quả.</b>
                            </div>
                            <div style="padding-left: 102px; font-size: 1rem; color: var(--text-muted); line-height: 1.5;">Nhấn "NỘP BÀI" để hệ thống chấm điểm và tự động gửi bảng điểm về cho giáo viên đánh giá.</div>
                        </li>
                    </ul>
                </div>
            
            <div style="text-align: center; margin-top: 24px; margin-bottom: 40px;">
                <button onclick="window.submitNouns3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 3</button>
            </div>
</div>
        `;
        contentWrapper.innerHTML = html;
    }
    else if (viewId === 'chapter1') {
        renderTopicsGrid();
    }
    else if (viewId === 'chapter2') {
        renderChapter2TopicsGrid();
    }
}


function renderChapter2TopicsGrid() {
    const styling = [
        { bg: 'linear-gradient(135deg, rgba(87,70,227,0.08) 0%, rgba(87,70,227,0.01) 100%)', border: '#5746e3', icon: '✨', shadow: 'rgba(87,70,227,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.01) 100%)', border: '#ef4444', icon: '🚀', shadow: 'rgba(239,68,68,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.01) 100%)', border: '#10b981', icon: '🎯', shadow: 'rgba(16,185,129,0.2)' }
    ];

    let cardsHtml = chapter2TopicsData.map((topic, idx) => {
        const style = styling[idx % styling.length];
        return `
        <div class="module-card ${topic.status}" onclick="openTopic('${topic.id}', '${topic.status}')" style="background: ${style.bg}; border-left: 6px solid ${style.border}; padding: 0; display: flex; align-items: stretch; position: relative;">
            <div class="status-badge ${topic.status}" style="position: absolute; top: 24px; right: 24px; z-index: 10;">${topic.status === 'unlocked' ? 'Đã Mở' : 'Khóa'}</div>
            <div class="module-header" style="display: flex; align-items: center; gap: 24px; padding: 32px;">
                <div style="font-size: 3.5rem; background: #fff; width: 90px; height: 90px; border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px ${style.shadow}; border: 2px solid ${style.border}; flex-shrink: 0; transform: rotate(-5deg); transition: transform 0.3s;" onmouseover="this.style.transform='rotate(0deg) scale(1.1)'" onmouseout="this.style.transform='rotate(-5deg) scale(1)'">
                    ${style.icon}
                </div>
                <div style="flex: 1;">
                    <h3 class="module-title" style="color: ${style.border}; font-weight: 900; font-size: 1.5rem; text-transform: uppercase; margin-bottom: 8px;">${topic.title}</h3>
                    <p class="module-desc" style="-webkit-line-clamp: unset; font-size: 1.1rem; color: var(--text-main); margin: 0; line-height: 1.6;">${topic.desc}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');

    contentWrapper.innerHTML = `
        <h1 class="page-title">CHƯƠNG 02: TỪ LOẠI TRONG TIẾNG ANH</h1>
        <p class="page-subtitle">Chọn chủ điểm bên dưới để bắt đầu học. Các phần chưa học sẽ bị khóa.</p>
        <div class="card-grid" style="grid-template-columns: 1fr;">
            ${cardsHtml}
        </div>
    `;
}

function renderTopicsGrid() {
    const styling = [
        { bg: 'linear-gradient(135deg, rgba(87,70,227,0.08) 0%, rgba(87,70,227,0.01) 100%)', border: '#5746e3', icon: '✨', shadow: 'rgba(87,70,227,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.01) 100%)', border: '#ef4444', icon: '🚀', shadow: 'rgba(239,68,68,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.01) 100%)', border: '#10b981', icon: '🎯', shadow: 'rgba(16,185,129,0.2)' }
    ];

    let cardsHtml = topicsData.map((topic, idx) => {
        const style = styling[idx % styling.length];
        return `
        <div class="module-card ${topic.status}" onclick="openTopic('${topic.id}', '${topic.status}')" style="background: ${style.bg}; border-left: 6px solid ${style.border}; padding: 0; display: flex; align-items: stretch; position: relative;">
            <div class="status-badge ${topic.status}" style="position: absolute; top: 24px; right: 24px; z-index: 10;">${topic.status === 'unlocked' ? 'Đã Mở' : 'Khóa'}</div>
            <div class="module-header" style="display: flex; align-items: center; gap: 24px; padding: 32px;">
                <div style="font-size: 3.5rem; background: #fff; width: 90px; height: 90px; border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px ${style.shadow}; border: 2px solid ${style.border}; flex-shrink: 0; transform: rotate(-5deg); transition: transform 0.3s;" onmouseover="this.style.transform='rotate(0deg) scale(1.1)'" onmouseout="this.style.transform='rotate(-5deg) scale(1)'">
                    ${style.icon}
                </div>
                <div style="flex: 1;">
                    <h3 class="module-title" style="color: ${style.border}; font-weight: 900; font-size: 1.5rem; text-transform: uppercase; margin-bottom: 8px;">${topic.title}</h3>
                    <p class="module-desc" style="-webkit-line-clamp: unset; font-size: 1.1rem; color: var(--text-main); margin: 0; line-height: 1.6;">${topic.desc}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');

    contentWrapper.innerHTML = `
        <h1 class="page-title">CHƯƠNG 01: THÀNH PHẦN VÀ CẤU TRÚC CÂU</h1>
        <p class="page-subtitle">Chọn chủ điểm bên dưới để bắt đầu học. Các phần chưa học sẽ bị khóa.</p>
        <div class="card-grid" style="grid-template-columns: 1fr;">
            ${cardsHtml}
        </div>
    `;
}

let lockToastTimeout;
function showLockToast() {
    const toast = document.getElementById('lock-toast');
    toast.classList.add('show');
    clearTimeout(lockToastTimeout);
    lockToastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


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

window.openTopic = function(topicId, status) {
    if (status === 'locked') {
        const pass = prompt('Vui lòng nhập mật khẩu để mở khóa chủ điểm này:');
        if (pass === 'missnguyet2026' || pass === 'ONB103' || pass === 'CB211' || pass === 'CB213') {
            const topic1 = topicsData.find(t => t.id === topicId);
            if (topic1) topic1.status = 'unlocked';
            
            const topic2 = typeof chapter2TopicsData !== 'undefined' ? chapter2TopicsData.find(t => t.id === topicId) : null;
            if (topic2) topic2.status = 'unlocked';
            
            alert('Mở khóa thành công!');
            
            if (topic1) renderTopicsGrid(); // re-render chapter 1 grid
            if (topic2 && typeof renderChapter2 === 'function') renderChapter2(); // re-render chapter 2 grid
            
            if (topicId === 'components') renderComponentsDetail();
            else if (topicId === 'structures') renderStructuresDetail();
            else if (topicId === 'practice') renderPracticeDetail();
            else if (topicId === 'nouns' && typeof renderNounsDetail === 'function') renderNounsDetail();
            else if (topicId === 'pronouns' && typeof renderPronounsDetail === 'function') renderPronounsDetail();
            else if (topicId === 'verbs' && typeof renderVerbsDetail === 'function') renderVerbsDetail();
        } else if (pass !== null) {
            alert('Mật khẩu không đúng!');
        }
        return;
    }

    if (topicId === 'components') {
        renderComponentsDetail();
    } else if (topicId === 'structures') {
        renderStructuresDetail();
    } else if (topicId === 'practice') {
        renderPracticeDetail();
    } else if (topicId === 'nouns') {
        if(typeof renderNounsDetail === 'function') renderNounsDetail();
    } else if (topicId === 'pronouns') {
        if(typeof renderPronounsDetail === 'function') renderPronounsDetail();
    } else if (topicId === 'verbs') {
        if(typeof renderVerbsDetail === 'function') renderVerbsDetail();
    }
}


window.renderComponentsDetail = function(activeTab = 'theory') {
    let tabsHtml = `
        <div class="custom-tabs" style="display: flex; gap: 16px;">
            <button class="tab-btn ${activeTab === 'theory' ? 'active' : ''}" onclick="renderComponentsDetail('theory')" style="padding: 12px 32px; font-size: 1.1rem; font-weight: bold; border-radius: 30px; border: none; cursor: pointer; background: ${activeTab === 'theory' ? 'var(--primary-color)' : 'var(--bg-card)'}; color: ${activeTab === 'theory' ? '#fff' : 'var(--text-main)'}; border: 2px solid ${activeTab === 'theory' ? 'transparent' : 'var(--border-color)'}; transition: all 0.3s;">📚 LÝ THUYẾT</button>
            <button class="tab-btn ${activeTab === 'practice' ? 'active' : ''}" onclick="renderComponentsDetail('practice')" style="padding: 12px 32px; font-size: 1.1rem; font-weight: bold; border-radius: 30px; border: none; cursor: pointer; background: ${activeTab === 'practice' ? 'var(--primary-color)' : 'var(--bg-card)'}; color: ${activeTab === 'practice' ? '#fff' : 'var(--text-main)'}; border: 2px solid ${activeTab === 'practice' ? 'transparent' : 'var(--border-color)'}; transition: all 0.3s;">✏️ BÀI TẬP</button>
        </div>
    `;

    // ... (componentsHtml mapping remains the same, I should preserve it)


    const componentStyles = [
        { bg: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.01) 100%)', border: '#3b82f6', shadow: 'rgba(59,130,246,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.01) 100%)', border: '#f59e0b', shadow: 'rgba(245,158,11,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.01) 100%)', border: '#ef4444', shadow: 'rgba(239,68,68,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(168,85,247,0.01) 100%)', border: '#a855f7', shadow: 'rgba(168,85,247,0.2)' },
        { bg: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.01) 100%)', border: '#10b981', shadow: 'rgba(16,185,129,0.2)' }
    ];

    let componentsHtml = componentsData.map((comp, idx) => {
        const style = componentStyles[idx % componentStyles.length];
        let nameParts = comp.name.split(' (');
        let nameHtml = nameParts.length === 2 
            ? `${nameParts[0]} <span style="color: ${style.border};">(${nameParts[1]}</span>`
            : comp.name;
            
        return `
        <div class="vivid-card" onclick="renderSingleComponent(${idx})" style="animation-delay: ${idx * 0.15}s; background: ${style.bg}; border-bottom: 4px solid ${style.border};" onmouseover="this.querySelector('.vivid-icon-inner').style.transform='rotate(10deg) scale(1.1)'" onmouseout="this.querySelector('.vivid-icon-inner').style.transform='rotate(0deg) scale(1)'">
            <div class="vivid-icon" style="background: transparent; border: none; box-shadow: none;">
                <div class="vivid-icon-inner" style="background: #fff; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px ${style.shadow}; border: 2px solid ${style.border}; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">${comp.icon}</div>
            </div>
            <h3 class="vivid-title" style="text-transform: uppercase; font-weight: 900; margin-top: -12px;">${nameHtml}</h3>
        </div>
        `;
    }).join('');

    let contentHtml = '';
    if (activeTab === 'theory') {
        contentHtml = `
            <p class="page-subtitle">Nhấp vào từng khối dưới đây để bắt đầu học chi tiết.</p>
            <div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                ${componentsHtml}
            </div>
        `;
    } else {
        // Render Practice Directly here
        let practiceHtml = componentPracticeData.map((item, idx) => {
            let chunksHtml = item.chunks.map((chunk, chunkIdx) => `
                <div class="sentence-chunk" id="chunk-${idx}-${chunkIdx}">
                    <div class="chunk-word">${chunk.text}</div>
                    <select class="chunk-select" onchange="resetChunkStyles(${idx}, ${chunkIdx})">
                        <option value="">-- Chọn --</option>
                        <option value="S">Chủ ngữ (S)</option>
                        <option value="V">Động từ (V)</option>
                        <option value="O">Tân ngữ (O)</option>
                        <option value="C">Bổ ngữ (C)</option>
                        <option value="Adv">Trạng ngữ (Adv)</option>
                    </select>
                    <div class="chunk-feedback"></div>
                </div>
            `).join('');

            return `
                <div class="practice-card" id="practice-q-${idx}">
                    <div class="practice-header">📝 CÂU ${idx + 1}</div>
                    <div class="sentence-container">
                        ${chunksHtml}
                    </div>
                    <div class="practice-actions">
                        
                        <div class="q-feedback" id="q-feedback-${idx}"></div>
                    </div>
                </div>
            `;
        }).join('');

        contentHtml = `
            <p class="page-subtitle" style="margin-bottom: 32px;">Hãy xác định từng thành phần trong các câu dưới đây. Bạn cần chọn đúng nhãn cho TẤT CẢ các cụm từ trong câu để hoàn thành.</p>

            <div class="practice-list">
                ${practiceHtml}
            </div>
            <div id="practice-submit-container" style="text-align: center; margin-top: 32px;">
                <button class="btn-primary" onclick="submitAllAnswers()" style="font-size: 1.2rem; padding: 16px 48px; border-radius: 30px;">NỘP BÀI 📝</button>
                <div id="global-feedback" style="margin-top: 16px; font-size: 1.1rem; color: var(--danger); font-weight: bold;"></div>
            </div>

            <div id="practice-result-container" style="display: none; margin-top: 40px; margin-bottom: 40px; animation: slideUp 0.5s ease;"></div>
        `;
        window.practiceProgress = new Array(componentPracticeData.length).fill(false);
    }

    contentWrapper.innerHTML = `
        <div style="margin-bottom: 32px;">
            <button class="btn-primary" style="padding: 10px 20px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); border-radius: 30px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onclick="renderTopicsGrid()" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='var(--border-color)'">
                &larr; Quay lại danh sách
            </button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; margin-bottom: 36px; border-bottom: 2px solid var(--border-color); padding-bottom: 24px;">
            <h1 class="page-title" style="margin: 0; font-size: 2.2rem; color: var(--text-main); font-weight: 900;">CHỦ ĐIỂM 01: CÁC THÀNH PHẦN CÂU CƠ BẢN</h1>
            ${tabsHtml}
        </div>
        <div style="margin-top: 36px;">
            ${contentHtml}
        </div>
    `;
}

window.renderStructuresDetail = function(tab = 'theory') {
    const tabsHtml = `
        <div class="tabs">
            <button class="tab-btn ${tab === 'theory' ? 'active' : ''}" onclick="renderStructuresDetail('theory')">📚 LÝ THUYẾT</button>
            <button class="tab-btn ${tab === 'practice' ? 'active' : ''}" onclick="renderStructuresDetail('practice')">✏️ LUYỆN TẬP</button>
        </div>
    `;

    let contentHtml = '';

    if (tab === 'theory') {
        contentHtml = `
            <p class="page-subtitle" style="margin-bottom: 32px; font-size: 1.15rem; color: var(--text-main);">Chọn một cấu trúc bên dưới để bắt đầu bài giảng chi tiết.</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
        `;
        const colors = ['#3b82f6', '#f59e0b', '#ef4444', '#a855f7', '#10b981', '#ec4899'];
        const bgColors = ['rgba(59, 130, 246, 0.1)', 'rgba(245, 158, 11, 0.1)', 'rgba(239, 68, 68, 0.1)', 'rgba(168, 85, 247, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(236, 72, 153, 0.1)'];
        structuresData.forEach((s, idx) => {
            const color = colors[idx % colors.length];
            const bgColor = bgColors[idx % bgColors.length];
            contentHtml += `
            <div onclick="renderSingleStructure(${idx})" style="background: ${bgColor}; border: 2px solid ${color}; border-radius: 20px; padding: 40px 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; text-align: center; color: var(--text-main); position: relative; overflow: hidden;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 20px 40px ${bgColor}'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)'">
                <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 16px; color: ${color};">CẤU TRÚC ${idx + 1}</div>
                <div style="font-size: 2.5rem; font-weight: 900; font-family: monospace; letter-spacing: 2px;">${s.formula}</div>
                <div style="position: absolute; bottom: -20px; right: -10px; font-size: 8rem; opacity: 0.1; font-weight: 900; line-height: 1; color: ${color};">${idx + 1}</div>
            </div>
            `;
        });
        contentHtml += `
            </div>
        `;
    } else {
        const optionsHtml = structuresData.map((s, i) => `<option value="${i}">${s.name.replace('Dạng 0', 'Dạng ')}</option>`).join('');
        
        const practiceHtml = structurePracticeData.map((q, idx) => `
            <div class="practice-card" style="background: var(--bg-card); border-radius: 16px; padding: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 24px; border: 1px solid var(--border-color);" id="sq-card-${idx}">
                <div class="practice-header" style="font-weight: bold; color: var(--primary-color); margin-bottom: 12px; font-size: 1.2rem;">📝 CÂU ${idx + 1}</div>
                <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; color: var(--text-main);">"${q.text}"</div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <select id="sq-select-${idx}" style="padding: 12px 16px; border-radius: 8px; border: 2px solid var(--border-color); font-size: 1.1rem; flex: 1; background: var(--bg-card); color: var(--text-main); cursor: pointer; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='var(--border-color)'">
                        <option value="">-- Chọn cấu trúc chính xác --</option>
                        ${optionsHtml}
                    </select>
                </div>
                <div class="q-feedback" id="sq-feedback-${idx}" style="margin-top: 16px;"></div>
            </div>
        `).join('');

        contentHtml = `
            <p class="page-subtitle" style="margin-bottom: 32px; font-size: 1.15rem; color: var(--text-main);">Hãy chọn cấu trúc câu chính xác cho từng câu dưới đây.</p>
            <div class="practice-list">
                ${practiceHtml}
            </div>
            <div id="structure-practice-submit-container" style="text-align: center; margin-top: 32px;">
                <button class="btn-primary" onclick="submitStructurePractice()" style="font-size: 1.2rem; padding: 16px 48px; border-radius: 30px;">NỘP BÀI 📝</button>
                <div id="structure-global-feedback" style="margin-top: 16px; font-size: 1.1rem; color: var(--danger); font-weight: bold;"></div>
            </div>
            <div id="structure-practice-result-container" style="display: none; margin-top: 40px; margin-bottom: 40px; animation: slideUp 0.5s ease;"></div>
        `;
    }

    let html = `
        <div style="margin-bottom: 32px;">
            <button class="btn-primary" style="padding: 10px 20px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); border-radius: 30px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onclick="renderTopicsGrid()" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='var(--border-color)'">
                &larr; Quay lại danh sách
            </button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; margin-bottom: 36px; border-bottom: 2px solid var(--border-color); padding-bottom: 24px;">
            <h1 class="page-title" style="margin: 0; font-size: 2.2rem; color: var(--text-main); font-weight: 900;">CHỦ ĐIỂM 02: CÁC CẤU TRÚC CÂU CƠ BẢN</h1>
            ${tabsHtml}
        </div>
        <div style="margin-top: 36px;">
            ${contentHtml}
        
            <div style="text-align: center; margin-top: 24px; margin-bottom: 40px;">
                <button onclick="window.submitNouns3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 3</button>
            </div>
</div>
    `;

    contentWrapper.innerHTML = html;
}

window.submitStructurePractice = function() {
    let allAnswered = true;
    for (let i = 0; i < structurePracticeData.length; i++) {
        const val = document.getElementById(`sq-select-${i}`).value;
        if (val === '') {
            allAnswered = false;
            break;
        }
    }

    const globalFeedback = document.getElementById('structure-global-feedback');
    if (!allAnswered) {
        globalFeedback.innerHTML = '⚠️ Vui lòng chọn đáp án cho tất cả các câu trước khi nộp bài!';
        return;
    }
    
    globalFeedback.innerHTML = '';
    
    let totalCorrect = 0;
    structurePracticeData.forEach((q, qIdx) => {
        const selectEl = document.getElementById(`sq-select-${qIdx}`);
        const userVal = parseInt(selectEl.value);
        selectEl.disabled = true;
        selectEl.style.opacity = '0.7';

        const feedbackEl = document.getElementById(`sq-feedback-${qIdx}`);
        if (userVal === q.answer) {
            totalCorrect++;
            document.getElementById(`sq-card-${qIdx}`).style.borderColor = 'var(--success)';
            feedbackEl.innerHTML = `<div style="padding: 16px; background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--success); border-radius: 4px; color: var(--success); margin-top: 16px;"><strong style="font-size: 1.2rem;">🎉 Chính xác!</b><br><span style="color: var(--text-main); display: inline-block; margin-top: 8px;">Giải thích: <b style='color: var(--primary-color);'>${q.explanation}</b></span></div>`;
        } else {
            document.getElementById(`sq-card-${qIdx}`).style.borderColor = 'var(--danger)';
            const correctName = structuresData[q.answer].name;
            feedbackEl.innerHTML = `<div style="padding: 16px; background: rgba(239, 68, 68, 0.1); border-left: 4px solid var(--danger); border-radius: 4px; color: var(--danger); margin-top: 16px;"><strong style="font-size: 1.2rem;">❌ Sai rồi! (Đáp án đúng: ${correctName})</b><br><span style="color: var(--text-main); display: inline-block; margin-top: 8px;">Giải thích: <b style='color: var(--primary-color);'>${q.explanation}</b></span></div>`;
        }
    });

    document.getElementById('structure-practice-submit-container').style.display = 'none';

    const studentName = localStorage.getItem('studentName') || 'Khách';
    const studentClass = localStorage.getItem('studentClass') || 'N/A';
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScY0_ztBzodV_N-vTLXVtUO62FSVjBkMRZ54Si69FZN8NS70g/formResponse';
    const entryData = `${studentName} - Lớp: ${studentClass} - Kết quả Cấu Trúc: ${totalCorrect}/10`;
    const formData = new URLSearchParams();
    formData.append('entry.388968236', entryData);
    fetch(formUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: formData.toString() }).catch(e => console.error('Form submission error:', e));

    const resultContainer = document.getElementById('structure-practice-result-container');
    if (resultContainer) {
        resultContainer.innerHTML = `
            <div class="result-card" style="background: var(--bg-card); border: 3px solid ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'}; border-radius: 20px; padding: 40px 24px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); max-width: 500px; margin: 0 auto;">
                <div style="font-size: 5rem; margin-bottom: 16px; line-height: 1;">${totalCorrect >= 8 ? '🎓' : '💪'}</div>
                <h2 style="color: ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'}; font-size: 2rem; margin-bottom: 12px; font-weight: 800; text-transform: uppercase;">${totalCorrect >= 8 ? 'Hoàn Thành Xuất Sắc!' : 'Cố gắng lên nhé!'}</h2>
                <div style="background: rgba(0,0,0,0.05); padding: 16px; border-radius: 12px; margin-bottom: 24px; display: inline-block;">
                    <span style="font-size: 1.2rem; color: var(--text-main);">KẾT QUẢ TỔNG KẾT</span><br>
                    <strong style="font-size: 2.5rem; color: ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'};">${totalCorrect}/10</b>
                </div>
                <div style="margin-bottom: 32px; padding: 16px; background: rgba(87,70,227,0.1); border-radius: 12px; display: inline-block; border: 1px dashed var(--primary-color);">
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Học viên:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentName}</b><br>
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Lớp:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentClass}</b>
                </div>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn-primary" onclick="renderStructuresDetail('practice')" style="background: var(--text-main); font-size: 1.15rem; padding: 12px 24px; border-radius: 30px; border: none; cursor: pointer;">LÀM LẠI LẦN NỮA 🔄</button>
                    <button class="btn-primary" onclick="renderStructuresDetail('theory')" style="background: var(--success); font-size: 1.15rem; padding: 12px 24px; border-radius: 30px; border: none; cursor: pointer;">TRỞ LẠI LÝ THUYẾT 📚</button>
                </div>
            </div>
        `;
        resultContainer.style.display = 'block';
        setTimeout(() => {
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

window.renderSingleStructure = function(idx) {
    const s = structuresData[idx];
    const colors = ['#3b82f6', '#f59e0b', '#ef4444', '#a855f7', '#10b981', '#ec4899'];
    const color = colors[idx % colors.length];

    let html = `
        <div style="margin-bottom: 32px;">
            <button class="btn-primary" style="padding: 10px 20px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); border-radius: 30px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onclick="renderStructuresDetail()" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='var(--border-color)'">
                &larr; Quay lại danh sách cấu trúc
            </button>
        </div>
        <div style="background: var(--bg-card); border-top: 12px solid ${color}; border-radius: 24px; padding: 48px; color: var(--text-main); text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.08); margin-bottom: 40px; position: relative; overflow: hidden;">
            <div style="font-size: 1.5rem; font-weight: 900; margin-bottom: 16px; color: ${color}; text-transform: uppercase;">Cấu Trúc ${idx + 1}</div>
            <div style="font-size: 4.5rem; font-weight: 900; font-family: monospace; letter-spacing: 4px; text-shadow: 2px 2px 8px rgba(0,0,0,0.05); margin-bottom: 24px; background: rgba(0,0,0,0.03); padding: 20px; border-radius: 16px; display: inline-block;">${s.formula}</div>
            <p style="font-size: 1.4rem; line-height: 1.6; max-width: 800px; margin: 0 auto; opacity: 0.95; margin-bottom: 24px;">${s.desc}</p>
            ${s.note ? `<div style="background: var(--bg-card); color: var(--text-main); font-size: 1.2rem; line-height: 1.6; padding: 24px 32px; border-radius: 8px 24px 24px 8px; text-align: left; max-width: 800px; margin: 0 auto; border-left: 8px solid ${color}; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                ${s.note.replace('💡 <b style='color: var(--primary-color);'>LƯU Ý:</b>', `<div style="color: ${color}; font-size: 1.2rem; font-weight: 900; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">💡</span> LƯU Ý</div><div style="opacity: 0.95;">`).replace('💡 <b style='color: var(--primary-color);'>LƯU Ý QUAN TRỌNG:</b>', `<div style="color: ${color}; font-size: 1.2rem; font-weight: 900; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.5rem;">💡</span> LƯU Ý QUAN TRỌNG</div><div style="opacity: 0.95;">`)}</div>
            </div>` : ''}
        </div>

        <h2 style="font-size: 2rem; color: var(--text-main); font-weight: 900; margin-bottom: 24px; border-bottom: 2px solid var(--border-color); padding-bottom: 16px;">📚 VÍ DỤ PHÂN TÍCH (Nhấn để mở)</h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
    `;

    s.examples.forEach((exObj, exIdx) => {
        html += `
            <div class="example-reveal-card" data-state="0" style="background: var(--bg-card); border: 2px solid var(--border-color); border-radius: 16px; padding: 24px; cursor: pointer; transition: all 0.3s; position: relative;" onclick="if(this.dataset.state === '0') { this.dataset.state = '1'; this.querySelector('.ex-state-0').style.display = 'none'; this.querySelector('.ex-state-1').style.display = 'block'; this.style.borderColor = '${color}'; this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; } else if(this.dataset.state === '1') { this.dataset.state = '2'; this.querySelector('.ex-hint').style.display = 'none'; this.querySelector('.ex-vi').style.display = 'block'; this.style.cursor = 'default'; }">
                <div class="ex-state-0" style="font-size: 1.3rem; color: var(--text-muted); font-weight: bold; display: block; text-align: center;">
                    👉 Nhấn vào đây để xem Ví Dụ ${exIdx + 1}
                </div>
                <div class="ex-state-1" style="display: none; font-size: 1.8rem; font-weight: bold; color: var(--text-main); line-height: 1.8;">
                    <div style="display: flex; gap: 20px; align-items: center;">
                        <span style="background: ${color}; color: #fff; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; font-size: 1.2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">${exIdx + 1}</span>
                        <span>${exObj.en}</span>
                    </div>
                    <div class="ex-hint" style="margin-left: 68px; font-size: 1.1rem; color: var(--text-muted); margin-top: 8px; font-weight: normal; opacity: 0.8;">
                        👁️ Nhấn thêm lần nữa để xem nghĩa tiếng Việt
                    </div>
                    <div class="ex-vi" style="display: none; margin-left: 68px; font-size: 1.3rem; color: var(--text-main); margin-top: 12px; font-weight: normal; font-style: italic; border-left: 4px solid ${color}; padding-left: 16px; background: rgba(0,0,0,0.02); padding-top: 8px; padding-bottom: 8px; border-radius: 0 8px 8px 0;">
                        ${exObj.vi}
                    </div>
                </div>
            </div>
        `;
    });

    html += `
        
            <div style="text-align: center; margin-top: 24px; margin-bottom: 40px;">
                <button onclick="window.submitNouns3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 3</button>
            </div>
</div>
    `;

    contentWrapper.innerHTML = html;
}

window.renderSingleComponent = function(idx) {
    const comp = componentsData[idx];
    
    let html = `
        <button class="btn-primary" style="margin-bottom: 24px; padding: 8px 16px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color);" onclick="renderComponentsDetail('theory')">
            &larr; Quay lại
        </button>
        <div class="vivid-card" style="cursor: default; transform: none; display: flex; align-items: center; gap: 16px; margin-bottom: 32px; box-shadow: none; border-bottom: 2px solid var(--border-color); border-radius: 0; padding-bottom: 24px;">
            <div class="vivid-icon" style="font-size: 3rem; background: rgba(87, 70, 227, 0.1); padding: 16px; border-radius: 20px;">${comp.icon}</div>
            <h1 style="color: #ef4444; font-size: 2.2rem; font-weight: 900; text-transform: uppercase;">${comp.name}</h1>
        </div>
    `;

    // FAQs
    if (comp.faqs) {
        html += `<div class="comp-layout">`;
        html += `<div class="comp-section">
            <h2 class="comp-section-title">Khái niệm & Vị trí</h2>
            <div class="faq-container">
                ${comp.faqs.map(faq => `
                    <div class="faq-item" onclick="this.classList.toggle('expanded')">
                        <div class="faq-question">
                            ${faq.q}
                            <span class="faq-icon">▼</span>
                        </div>
                        <div class="faq-answer">${faq.a}</div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    // Forms
    if (comp.forms) {
        html += `<div class="comp-section">
            <h2 class="comp-section-title">${comp.formsHeading || 'Các hình thức'}</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
                ${comp.forms.map(form => `
                    <div class="form-card">
                        <div class="form-title">${form.title}</div>
                        ${form.content}
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    html += `</div>`; // end comp-layout
    contentWrapper.innerHTML = html;
}

window.resetChunkStyles = function(qIdx, chunkIdx) {
    const chunkEl = document.getElementById(`chunk-${qIdx}-${chunkIdx}`);
    chunkEl.classList.remove('correct', 'incorrect');
    chunkEl.querySelector('.chunk-feedback').innerHTML = '';
}

window.submitAllAnswers = function() {
    let allSelected = true;
    
    // First pass: check if all are filled
    componentPracticeData.forEach((item, qIdx) => {
        item.chunks.forEach((chunk, chunkIdx) => {
            const selectEl = document.querySelector(`#chunk-${qIdx}-${chunkIdx} select`);
            if (!selectEl.value) {
                allSelected = false;
            }
        });
    });

    const globalFeedback = document.getElementById('global-feedback');
    if (!allSelected) {
        globalFeedback.innerHTML = '⚠️ Vui lòng điền đáp án cho TẤT CẢ các từ trong cả 10 câu trước khi nộp bài!';
        return;
    }
    
    globalFeedback.innerHTML = '';
    
    // Second pass: grade
    let totalCorrect = 0;
    componentPracticeData.forEach((item, qIdx) => {
        let sentenceCorrect = true;
        item.chunks.forEach((chunk, chunkIdx) => {
            const chunkEl = document.getElementById(`chunk-${qIdx}-${chunkIdx}`);
            const selectEl = chunkEl.querySelector('select');
            const userVal = selectEl.value;
            
            // disable select
            selectEl.disabled = true;

            if (userVal === chunk.label) {
                chunkEl.classList.add('correct');
                chunkEl.querySelector('.chunk-feedback').innerHTML = '✅ Đúng';
            } else {
                chunkEl.classList.add('incorrect');
                chunkEl.querySelector('.chunk-feedback').innerHTML = `❌ Sai (Đúng: ${chunk.label})`;
                sentenceCorrect = false;
            }
        });
        
        const feedbackEl = document.getElementById(`q-feedback-${qIdx}`);
        if (sentenceCorrect) {
            totalCorrect++;
            feedbackEl.innerHTML = '<span style="color: var(--success); font-weight: bold;">🎉 Câu này bạn làm rất tốt!</span>';
        } else {
            feedbackEl.innerHTML = '<span style="color: var(--danger); font-weight: bold;">⚠️ Câu này có lỗi sai, hãy kiểm tra lại nhé.</span>';
        }
    });

    // Hide submit button
    document.getElementById('practice-submit-container').style.display = 'none';

    // Show result card
    const studentName = localStorage.getItem('studentName') || 'Khách';
    const studentClass = localStorage.getItem('studentClass') || 'N/A';
    
    // Auto-submit to Google Form
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScY0_ztBzodV_N-vTLXVtUO62FSVjBkMRZ54Si69FZN8NS70g/formResponse';
    const entryData = `${studentName} - Lớp: ${studentClass} - Kết quả: ${totalCorrect}/10`;
    
    const formData = new URLSearchParams();
    formData.append('entry.388968236', entryData);
    
    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
    }).catch(e => console.error('Form submission error:', e));

    const resultContainer = document.getElementById('practice-result-container');
    if (resultContainer) {
        resultContainer.innerHTML = `
            <div class="result-card" style="background: var(--bg-card); border: 3px solid ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'}; border-radius: 20px; padding: 40px 24px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); max-width: 500px; margin: 0 auto;">
                <div style="font-size: 5rem; margin-bottom: 16px; line-height: 1;">${totalCorrect >= 8 ? '🎓' : '💪'}</div>
                <h2 style="color: ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'}; font-size: 2rem; margin-bottom: 12px; font-weight: 800; text-transform: uppercase;">${totalCorrect >= 8 ? 'Hoàn Thành Xuất Sắc!' : 'Cố gắng lên nhé!'}</h2>
                <div style="background: rgba(0,0,0,0.05); padding: 16px; border-radius: 12px; margin-bottom: 24px; display: inline-block;">
                    <span style="font-size: 1.2rem; color: var(--text-main);">KẾT QUẢ TỔNG KẾT</span><br>
                    <strong style="font-size: 2.5rem; color: ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'};">${totalCorrect}/10</b>
                </div>
                <div style="margin-bottom: 32px; padding: 16px; background: rgba(87,70,227,0.1); border-radius: 12px; display: inline-block; border: 1px dashed var(--primary-color);">
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Học viên:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentName}</b><br>
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Lớp:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentClass}</b>
                </div>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn-primary" onclick="renderComponentsDetail('practice')" style="background: var(--text-main); font-size: 1.15rem; padding: 12px 24px; border-radius: 30px; border: none; cursor: pointer;">LÀM LẠI LẦN NỮA 🔄</button>
                    <button class="btn-primary" onclick="renderComponentsDetail('theory')" style="background: var(--success); font-size: 1.15rem; padding: 12px 24px; border-radius: 30px; border: none; cursor: pointer;">TRỞ LẠI LÝ THUYẾT 📚</button>
                </div>
            </div>
        `;
        resultContainer.style.display = 'block';
        setTimeout(() => {
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}



// Login logic
window.saveStudentInfo = function() {
    const name = document.getElementById('student-name').value.trim();
    const className = document.getElementById('student-class').value.trim();
    if (!name || !className) {
        alert("Vui lòng điền đầy đủ Họ Tên và Lớp!");
        return;
    }
    localStorage.setItem('studentName', name);
    localStorage.setItem('studentClass', className);
    document.getElementById('login-modal').style.display = 'none';
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Always show login modal on every visit
    const modal = document.getElementById('login-modal');
    if (modal) {
        // Prefill previous info if any to save time
        const prevName = localStorage.getItem('studentName');
        const prevClass = localStorage.getItem('studentClass');
        if (prevName) document.getElementById('student-name').value = prevName;
        if (prevClass) document.getElementById('student-class').value = prevClass;
        
        modal.style.display = 'flex';
    }

    // Init theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (typeof window.loadProgress === 'function') window.loadProgress();

    renderNav();
    const chapter1Nav = document.querySelector('.nav-item[data-target="chapter1"]');
    if(chapter1Nav) chapter1Nav.click();
});

// Theme Toggle
window.toggleTheme = function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

const nounsTheoryData = [
    {
        title: '1. VỊ TRÍ CỦA DANH TỪ',
        content: `Danh từ đóng 3 vai trò cốt lõi trong cấu trúc câu. Hãy tương tác với sơ đồ dưới đây:
        <div class="sentence-structure-map" style="background: var(--bg-card); padding: 24px; border-radius: 12px; border: 1px solid var(--border-color); text-align: center; margin-top: 16px;">
            <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 32px; flex-wrap: wrap;">
                <!-- Subject -->
                <div class="map-node noun-node" onclick="showNounExample('subject', this)" style="background: rgba(87,70,227,0.1); border: 2px solid var(--primary-color); border-radius: 16px; padding: 12px 24px; cursor: pointer; position: relative; transition: all 0.3s; min-width: 120px;">
                    <div style="font-weight: 800; font-size: 1.5rem; color: var(--primary-color);">S</div>
                    <div style="font-size: 0.95rem; font-weight: bold; color: var(--primary-color);">Chủ ngữ</div>
                    <div class="noun-badge" style="position: absolute; top: -12px; right: -12px; background: var(--primary-color); color: white; font-size: 0.75rem; font-weight: bold; padding: 4px 8px; border-radius: 12px; box-shadow: 0 2px 4px rgba(87,70,227,0.3);">DANH TỪ</div>
                </div>
                
                <div style="color: var(--text-muted); font-weight: bold; font-size: 1.5rem;">+</div>
                
                <!-- Verb -->
                <div class="map-node verb-node" style="background: rgba(100,116,139,0.1); border: 2px dashed #94a3b8; border-radius: 16px; padding: 12px 24px; opacity: 0.8; min-width: 120px;">
                    <div style="font-weight: 800; font-size: 1.5rem; color: #64748b;">V</div>
                    <div style="font-size: 0.95rem; font-weight: bold; color: #64748b;">Động từ</div>
                </div>

                <div style="color: var(--text-muted); font-weight: bold; font-size: 1.5rem;">+</div>
                
                <!-- Object / Complement Container -->
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <!-- Object -->
                    <div class="map-node noun-node" onclick="showNounExample('object', this)" style="background: rgba(16,185,129,0.1); border: 2px solid #10b981; border-radius: 16px; padding: 8px 24px; cursor: pointer; position: relative; transition: all 0.3s; min-width: 120px;">
                        <div style="font-weight: 800; font-size: 1.2rem; color: #10b981;">O</div>
                        <div style="font-size: 0.85rem; font-weight: bold; color: #10b981;">Tân ngữ</div>
                        <div class="noun-badge" style="position: absolute; top: -10px; right: -10px; background: #10b981; color: white; font-size: 0.7rem; font-weight: bold; padding: 4px 8px; border-radius: 12px; box-shadow: 0 2px 4px rgba(16,185,129,0.3);">DANH TỪ</div>
                    </div>
                    <!-- Complement -->
                    <div class="map-node noun-node" onclick="showNounExample('complement', this)" style="background: rgba(239,68,68,0.1); border: 2px solid #ef4444; border-radius: 16px; padding: 8px 24px; cursor: pointer; position: relative; transition: all 0.3s; min-width: 120px;">
                        <div style="font-weight: 800; font-size: 1.2rem; color: #ef4444;">C</div>
                        <div style="font-size: 0.85rem; font-weight: bold; color: #ef4444;">Bổ ngữ</div>
                        <div class="noun-badge" style="position: absolute; top: -10px; right: -10px; background: #ef4444; color: white; font-size: 0.7rem; font-weight: bold; padding: 4px 8px; border-radius: 12px; box-shadow: 0 2px 4px rgba(239,68,68,0.3);">DANH TỪ</div>
                    </div>
                </div>
            </div>
            
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px;"><i>* Hãy nhấp vào các ô Danh từ (S, O, C) phía trên để xem ví dụ minh họa</i></p>

            <!-- Example Display Area -->
            <div id="noun-example-display" style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 24px; text-align: left; min-height: 120px; display: flex; align-items: center; justify-content: center; transition: all 0.3s;">
                <span style="color: #94a3b8; font-style: italic; font-size: 1.1rem;">Ví dụ sẽ hiển thị ở đây...</span>
            </div>
        </div>
        <style>
            .example-reveal.revealed .vie { display: block !important; }
            .map-node:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
        </style>`
    },
    {
        title: '2. NHẬN DIỆN QUA HẬU TỐ',
        content: `<p style="margin-bottom: 16px; color: var(--text-main);">Một số đuôi (hậu tố) gần như mặc định là danh từ. Dưới đây là <b>20 hậu tố phổ biến nhất</b> được chia thành 6 nhóm lớn. Bấm vào từng nhóm để xem chi tiết các từ vựng thường gặp trong VSTEP:</p>

<div style="margin-bottom: 24px;">
    <a href="HẬU TỐ DANH TỪ - CHỦ ĐIỂM 01 - WRITING.pdf" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: var(--primary-color); color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Tải xuống bản gốc PDF
    </a>
</div>

<div class="suffix-accordions">

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #ef4444;">
            I. HẬU TỐ DANH TỪ CHỈ NGƯỜI <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">1. -er / -or (người thực hiện hành động)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>teacher</b> – <span style="color: #64748b;">giáo viên</span></li>
                    <li>• <b>dancer</b> – <span style="color: #64748b;">vũ công</span></li>
                    <li>• <b>worker</b> – <span style="color: #64748b;">công nhân</span></li>
                    <li>• <b>actor</b> – <span style="color: #64748b;">diễn viên</span></li>
                    <li>• <b>driver</b> – <span style="color: #64748b;">tài xế</span></li>
                    <li>• <b>director</b> – <span style="color: #64748b;">đạo diễn</span></li>
                    <li>• <b>writer</b> – <span style="color: #64748b;">nhà văn</span></li>
                    <li>• <b>visitor</b> – <span style="color: #64748b;">khách tham quan</span></li>
                    <li>• <b>singer</b> – <span style="color: #64748b;">ca sĩ</span></li>
                    <li>• <b>manager</b> – <span style="color: #64748b;">quản lý</span></li>

                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">2. -ist (nghề nghiệp / người theo học thuyết)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>artist</b> – <span style="color: #64748b;">nghệ sĩ</span></li>
                    <li>• <b>tourist</b> – <span style="color: #64748b;">khách du lịch</span></li>
                    <li>• <b>scientist</b> – <span style="color: #64748b;">nhà khoa học</span></li>
                    <li>• <b>economist</b> – <span style="color: #64748b;">nhà kinh tế học</span></li>
                    <li>• <b>dentist</b> – <span style="color: #64748b;">nha sĩ</span></li>
                    <li>• <b>novelist</b> – <span style="color: #64748b;">tiểu thuyết gia</span></li>
                    <li>• <b>journalist</b> – <span style="color: #64748b;">nhà báo</span></li>
                    <li>• <b>psychologist</b> – <span style="color: #64748b;">nhà tâm lý học</span></li>
                    <li>• <b>pianist</b> – <span style="color: #64748b;">nghệ sĩ piano</span></li>
                    <li>• <b>realist</b> – <span style="color: #64748b;">người theo chủ nghĩa hiện thực</span></li>

                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">3. -ian / -an (nghề nghiệp, quốc tịch)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>musician</b> – <span style="color: #64748b;">nhạc sĩ</span></li>
                    <li>• <b>American</b> – <span style="color: #64748b;">người Mỹ</span></li>
                    <li>• <b>electrician</b> – <span style="color: #64748b;">thợ điện</span></li>
                    <li>• <b>Italian</b> – <span style="color: #64748b;">người Ý</span></li>
                    <li>• <b>politician</b> – <span style="color: #64748b;">chính trị gia</span></li>
                    <li>• <b>Asian</b> – <span style="color: #64748b;">người châu Á</span></li>
                    <li>• <b>historian</b> – <span style="color: #64748b;">sử gia</span></li>
                    <li>• <b>Canadian</b> – <span style="color: #64748b;">người Canada</span></li>
                    <li>• <b>librarian</b> – <span style="color: #64748b;">thủ thư</span></li>
                    <li>• <b>Mexican</b> – <span style="color: #64748b;">người Mexico</span></li>

                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">4. -ee (người nhận hành động)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>employee</b> – <span style="color: #64748b;">nhân viên</span></li>
                    <li>• <b>attendee</b> – <span style="color: #64748b;">người tham dự</span></li>
                    <li>• <b>interviewee</b> – <span style="color: #64748b;">người được phỏng vấn</span></li>
                    <li>• <b>payee</b> – <span style="color: #64748b;">người nhận tiền</span></li>
                    <li>• <b>trainee</b> – <span style="color: #64748b;">thực tập sinh</span></li>
                    <li>• <b>nominee</b> – <span style="color: #64748b;">người được đề cử</span></li>
                    <li>• <b>examinee</b> – <span style="color: #64748b;">thí sinh</span></li>
                    <li>• <b>retiree</b> – <span style="color: #64748b;">người đã nghỉ hưu</span></li>
                    <li>• <b>refugee</b> – <span style="color: #64748b;">người tị nạn</span></li>
                    <li>• <b>addressee</b> – <span style="color: #64748b;">người nhận thư</span></li>

                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">5. -ant / -ent (người thực hiện vai trò)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>assistant</b> – <span style="color: #64748b;">trợ lý</span></li>
                    <li>• <b>resident</b> – <span style="color: #64748b;">cư dân</span></li>
                    <li>• <b>applicant</b> – <span style="color: #64748b;">người nộp đơn</span></li>
                    <li>• <b>student</b> – <span style="color: #64748b;">học sinh</span></li>
                    <li>• <b>participant</b> – <span style="color: #64748b;">người tham gia</span></li>
                    <li>• <b>consultant</b> – <span style="color: #64748b;">cố vấn</span></li>
                    <li>• <b>accountant</b> – <span style="color: #64748b;">kế toán</span></li>
                    <li>• <b>immigrant</b> – <span style="color: #64748b;">người nhập cư</span></li>
                    <li>• <b>servant</b> – <span style="color: #64748b;">người hầu</span></li>
                    <li>• <b>defendant</b> – <span style="color: #64748b;">bị đơn</span></li>

                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">6. -arian / -arian (người theo nghề / tư tưởng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>librarian</b> – <span style="color: #64748b;">thủ thư</span></li>
                    <li>• <b>humanitarian</b> – <span style="color: #64748b;">nhà nhân đạo</span></li>
                    <li>• <b>vegetarian</b> – <span style="color: #64748b;">người ăn chay</span></li>
                    <li>• <b>disciplinarian</b> – <span style="color: #64748b;">người nghiêm khắc</span></li>

                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #3b82f6;">
            II. HẬU TỐ DANH TỪ CHỈ HÀNH ĐỘNG – QUÁ TRÌNH – KẾT QUẢ <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">7. -tion / -sion / -ation</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>education</b> – <span style="color: #64748b;">giáo dục</span></li>
                    <li>• <b>communication</b> – <span style="color: #64748b;">sự giao tiếp</span></li>
                    <li>• <b>information</b> – <span style="color: #64748b;">thông tin</span></li>
                    <li>• <b>translation</b> – <span style="color: #64748b;">sự dịch</span></li>
                    <li>• <b>pollution</b> – <span style="color: #64748b;">ô nhiễm</span></li>
                    <li>• <b>population</b> – <span style="color: #64748b;">dân số</span></li>
                    <li>• <b>decision</b> – <span style="color: #64748b;">quyết định</span></li>
                    <li>• <b>organization</b> – <span style="color: #64748b;">tổ chức</span></li>
                    <li>• <b>discussion</b> – <span style="color: #64748b;">cuộc thảo luận</span></li>
                    <li>• <b>situation</b> – <span style="color: #64748b;">tình huống</span></li>

                </ul>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">8. -ment</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>development</b> – <span style="color: #64748b;">sự phát triển</span></li>
                    <li>• <b>government</b> – <span style="color: #64748b;">chính phủ</span></li>
                    <li>• <b>improvement</b> – <span style="color: #64748b;">sự cải thiện</span></li>
                    <li>• <b>environment</b> – <span style="color: #64748b;">môi trường</span></li>
                    <li>• <b>agreement</b> – <span style="color: #64748b;">sự đồng ý</span></li>
                    <li>• <b>punishment</b> – <span style="color: #64748b;">sự trừng phạt</span></li>
                    <li>• <b>achievement</b> – <span style="color: #64748b;">thành tựu</span></li>
                    <li>• <b>entertainment</b> – <span style="color: #64748b;">sự giải trí</span></li>
                    <li>• <b>management</b> – <span style="color: #64748b;">sự quản lý</span></li>
                    <li>• <b>movement</b> – <span style="color: #64748b;">sự di chuyển</span></li>

                </ul>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">9. -ance / -ence</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>importance</b> – <span style="color: #64748b;">tầm quan trọng</span></li>
                    <li>• <b>patience</b> – <span style="color: #64748b;">sự kiên nhẫn</span></li>
                    <li>• <b>difference</b> – <span style="color: #64748b;">sự khác biệt</span></li>
                    <li>• <b>independence</b> – <span style="color: #64748b;">sự độc lập</span></li>
                    <li>• <b>confidence</b> – <span style="color: #64748b;">sự tự tin</span></li>
                    <li>• <b>existence</b> – <span style="color: #64748b;">sự tồn tại</span></li>
                    <li>• <b>appearance</b> – <span style="color: #64748b;">vẻ ngoài</span></li>
                    <li>• <b>violence</b> – <span style="color: #64748b;">bạo lực</span></li>
                    <li>• <b>performance</b> – <span style="color: #64748b;">sự biểu diễn / hiệu suất</span></li>
                    <li>• <b>distance</b> – <span style="color: #64748b;">khoảng cách</span></li>

                </ul>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">10. -al (sự việc / kết quả)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>arrival</b> – <span style="color: #64748b;">sự đến nơi</span></li>
                    <li>• <b>dismissal</b> – <span style="color: #64748b;">sự sa thải</span></li>
                    <li>• <b>refusal</b> – <span style="color: #64748b;">sự từ chối</span></li>
                    <li>• <b>removal</b> – <span style="color: #64748b;">sự loại bỏ</span></li>
                    <li>• <b>approval</b> – <span style="color: #64748b;">sự chấp thuận</span></li>
                    <li>• <b>revival</b> – <span style="color: #64748b;">sự hồi sinh</span></li>
                    <li>• <b>survival</b> – <span style="color: #64748b;">sự sống sót</span></li>
                    <li>• <b>withdrawal</b> – <span style="color: #64748b;">sự rút lui</span></li>
                    <li>• <b>proposal</b> – <span style="color: #64748b;">đề xuất</span></li>
                    <li>• <b>denial</b> – <span style="color: #64748b;">sự phủ nhận</span></li>

                </ul>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">11. -ure</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>pressure</b> – <span style="color: #64748b;">áp lực</span></li>
                    <li>• <b>exposure</b> – <span style="color: #64748b;">sự phơi bày</span></li>
                    <li>• <b>pleasure</b> – <span style="color: #64748b;">niềm vui</span></li>
                    <li>• <b>departure</b> – <span style="color: #64748b;">sự khởi hành</span></li>
                    <li>• <b>failure</b> – <span style="color: #64748b;">sự thất bại</span></li>
                    <li>• <b>closure</b> – <span style="color: #64748b;">sự đóng cửa</span></li>

                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #8b5cf6;">
            III. HẬU TỐ DANH TỪ CHỈ KHÁI NIỆM – TRẠNG THÁI <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">12. -ness</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>happiness</b> – <span style="color: #64748b;">hạnh phúc</span></li>
                    <li>• <b>darkness</b> – <span style="color: #64748b;">bóng tối</span></li>
                    <li>• <b>sadness</b> – <span style="color: #64748b;">nỗi buồn</span></li>
                    <li>• <b>loneliness</b> – <span style="color: #64748b;">sự cô đơn</span></li>
                    <li>• <b>kindness</b> – <span style="color: #64748b;">lòng tốt</span></li>
                    <li>• <b>seriousness</b> – <span style="color: #64748b;">sự nghiêm túc</span></li>
                    <li>• <b>illness</b> – <span style="color: #64748b;">bệnh tật</span></li>
                    <li>• <b>awareness</b> – <span style="color: #64748b;">nhận thức</span></li>
                    <li>• <b>weakness</b> – <span style="color: #64748b;">sự yếu đuối</span></li>
                    <li>• <b>nervousness</b> – <span style="color: #64748b;">sự lo lắng</span></li>

                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">13. -ity</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>ability</b> – <span style="color: #64748b;">khả năng</span></li>
                    <li>• <b>equality</b> – <span style="color: #64748b;">sự bình đẳng</span></li>
                    <li>• <b>responsibility</b> – <span style="color: #64748b;">trách nhiệm</span></li>
                    <li>• <b>stability</b> – <span style="color: #64748b;">sự ổn định</span></li>
                    <li>• <b>reality</b> – <span style="color: #64748b;">thực tế</span></li>
                    <li>• <b>security</b> – <span style="color: #64748b;">an ninh</span></li>
                    <li>• <b>personality</b> – <span style="color: #64748b;">tính cách</span></li>
                    <li>• <b>nationality</b> – <span style="color: #64748b;">quốc tịch</span></li>
                    <li>• <b>creativity</b> – <span style="color: #64748b;">sự sáng tạo</span></li>
                    <li>• <b>possibility</b> – <span style="color: #64748b;">khả năng xảy ra</span></li>

                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">14. -ship</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>friendship</b> – <span style="color: #64748b;">tình bạn</span></li>
                    <li>• <b>citizenship</b> – <span style="color: #64748b;">quyền công dân</span></li>
                    <li>• <b>leadership</b> – <span style="color: #64748b;">khả năng lãnh đạo</span></li>
                    <li>• <b>partnership</b> – <span style="color: #64748b;">quan hệ đối tác</span></li>
                    <li>• <b>relationship</b> – <span style="color: #64748b;">mối quan hệ</span></li>
                    <li>• <b>ownership</b> – <span style="color: #64748b;">quyền sở hữu</span></li>
                    <li>• <b>membership</b> – <span style="color: #64748b;">tư cách thành viên</span></li>
                    <li>• <b>internship</b> – <span style="color: #64748b;">kỳ thực tập</span></li>
                    <li>• <b>scholarship</b> – <span style="color: #64748b;">học bổng</span></li>
                    <li>• <b>hardship</b> – <span style="color: #64748b;">sự khó khăn</span></li>

                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">15. -ism</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>capitalism</b> – <span style="color: #64748b;">chủ nghĩa tư bản</span></li>
                    <li>• <b>racism</b> – <span style="color: #64748b;">phân biệt chủng tộc</span></li>
                    <li>• <b>socialism</b> – <span style="color: #64748b;">chủ nghĩa xã hội</span></li>
                    <li>• <b>optimism</b> – <span style="color: #64748b;">sự lạc quan</span></li>
                    <li>• <b>tourism</b> – <span style="color: #64748b;">du lịch</span></li>
                    <li>• <b>pessimism</b> – <span style="color: #64748b;">sự bi quan</span></li>
                    <li>• <b>realism</b> – <span style="color: #64748b;">chủ nghĩa hiện thực</span></li>
                    <li>• <b>nationalism</b> – <span style="color: #64748b;">chủ nghĩa dân tộc</span></li>
                    <li>• <b>feminism</b> – <span style="color: #64748b;">chủ nghĩa nữ quyền</span></li>
                    <li>• <b>idealism</b> – <span style="color: #64748b;">chủ nghĩa lý tưởng</span></li>

                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #10b981;">
            IV. HẬU TỐ DANH TỪ CHỈ LĨNH VỰC – MÔN HỌC <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">16. -logy</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>biology</b> – <span style="color: #64748b;">sinh học</span></li>
                    <li>• <b>technology</b> – <span style="color: #64748b;">công nghệ</span></li>
                    <li>• <b>psychology</b> – <span style="color: #64748b;">tâm lý học</span></li>
                    <li>• <b>archaeology</b> – <span style="color: #64748b;">khảo cổ học</span></li>
                    <li>• <b>sociology</b> – <span style="color: #64748b;">xã hội học</span></li>
                    <li>• <b>anthropology</b> – <span style="color: #64748b;">nhân chủng học</span></li>
                    <li>• <b>geology</b> – <span style="color: #64748b;">địa chất học</span></li>
                    <li>• <b>meteorology</b> – <span style="color: #64748b;">khí tượng học</span></li>
                    <li>• <b>ecology</b> – <span style="color: #64748b;">sinh thái học</span></li>
                    <li>• <b>criminology</b> – <span style="color: #64748b;">tội phạm học</span></li>

                </ul>
            </div>

            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">17. -ics</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>mathematics</b> – <span style="color: #64748b;">toán học</span></li>
                    <li>• <b>linguistics</b> – <span style="color: #64748b;">ngôn ngữ học</span></li>
                    <li>• <b>physics</b> – <span style="color: #64748b;">vật lý</span></li>
                    <li>• <b>athletics</b> – <span style="color: #64748b;">điền kinh</span></li>
                    <li>• <b>economics</b> – <span style="color: #64748b;">kinh tế học</span></li>
                    <li>• <b>electronics</b> – <span style="color: #64748b;">điện tử học</span></li>
                    <li>• <b>politics</b> – <span style="color: #64748b;">chính trị</span></li>
                    <li>• <b>mechanics</b> – <span style="color: #64748b;">cơ học</span></li>
                    <li>• <b>statistics</b> – <span style="color: #64748b;">thống kê</span></li>
                    <li>• <b>ethics</b> – <span style="color: #64748b;">đạo đức học</span></li>

                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #f59e0b;">
            V. HẬU TỐ DANH TỪ CHỈ ĐỊA ĐIỂM – TẬP HỢP – VẬT CHỨA <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #f59e0b; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fde68a;">18. -age</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>village</b> – <span style="color: #64748b;">làng</span></li>
                    <li>• <b>shortage</b> – <span style="color: #64748b;">sự thiếu hụt</span></li>
                    <li>• <b>luggage</b> – <span style="color: #64748b;">hành lý</span></li>
                    <li>• <b>advantage</b> – <span style="color: #64748b;">lợi thế</span></li>
                    <li>• <b>marriage</b> – <span style="color: #64748b;">hôn nhân</span></li>
                    <li>• <b>disadvantage</b> – <span style="color: #64748b;">bất lợi</span></li>
                    <li>• <b>damage</b> – <span style="color: #64748b;">thiệt hại</span></li>
                    <li>• <b>usage</b> – <span style="color: #64748b;">cách dùng</span></li>
                    <li>• <b>package</b> – <span style="color: #64748b;">gói hàng</span></li>
                    <li>• <b>percentage</b> – <span style="color: #64748b;">phần trăm</span></li>

                </ul>
            </div>

            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #f59e0b; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fde68a;">19. -ery / -ry</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>bakery</b> – <span style="color: #64748b;">tiệm bánh</span></li>
                    <li>• <b>machinery</b> – <span style="color: #64748b;">máy móc</span></li>
                    <li>• <b>library</b> – <span style="color: #64748b;">thư viện</span></li>
                    <li>• <b>jewelry</b> – <span style="color: #64748b;">trang sức</span></li>
                    <li>• <b>factory</b> – <span style="color: #64748b;">nhà máy</span></li>
                    <li>• <b>scenery</b> – <span style="color: #64748b;">phong cảnh</span></li>
                    <li>• <b>gallery</b> – <span style="color: #64748b;">phòng trưng bày</span></li>
                    <li>• <b>slavery</b> – <span style="color: #64748b;">chế độ nô lệ</span></li>
                    <li>• <b>nursery</b> – <span style="color: #64748b;">vườn ươm</span></li>
                    <li>• <b>discovery</b> – <span style="color: #64748b;">sự khám phá</span></li>

                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #06b6d4;">
            VI. HẬU TỐ DANH TỪ CHỈ HOẠT ĐỘNG <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #06b6d4; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a5f3fc;">20. -ing (danh động từ)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>reading</b> – <span style="color: #64748b;">việc đọc</span></li>
                    <li>• <b>cooking</b> – <span style="color: #64748b;">việc nấu ăn</span></li>
                    <li>• <b>writing</b> – <span style="color: #64748b;">việc viết</span></li>
                    <li>• <b>swimming</b> – <span style="color: #64748b;">việc bơi</span></li>
                    <li>• <b>learning</b> – <span style="color: #64748b;">việc học</span></li>
                    <li>• <b>training</b> – <span style="color: #64748b;">việc đào tạo</span></li>
                    <li>• <b>teaching</b> – <span style="color: #64748b;">việc dạy</span></li>
                    <li>• <b>meeting</b> – <span style="color: #64748b;">cuộc họp</span></li>
                    <li>• <b>shopping</b> – <span style="color: #64748b;">việc mua sắm</span></li>
                    <li>• <b>working</b> – <span style="color: #64748b;">công việc</span></li>

                </ul>
            </div>

        </div>
    </details>
</div>`
    },
    {
        title: '3. PHÂN LOẠI DANH TỪ',
        content: `<p style="margin-bottom: 16px; color: var(--text-main);">Trong tiếng Anh có rất nhiều cách phân loại danh từ (Danh từ chung/riêng, cụ thể/trừu tượng, tập hợp...). Tuy nhiên, <b style='color: var(--primary-color);'>trong văn viết (Writing)</b>, sự phân loại quan trọng nhất ảnh hưởng trực tiếp đến ngữ pháp chính là <b>Danh từ Đếm được (Countable) & Không đếm được (Uncountable)</b>. Sự khác biệt cốt lõi giữa hai loại danh từ này quyết định việc bạn chia động từ và sử dụng lượng từ có chính xác hay không:</p>
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <thead>
                    <tr style="background: var(--primary-color); color: white;">
                        <th style="padding: 16px; text-align: left; width: 20%;">Tiêu chí</th>
                        <th style="padding: 16px; text-align: left; width: 40%; background: #10b981;">Đếm được (Countable)</th>
                        <th style="padding: 16px; text-align: left; width: 40%; background: #ef4444;">Không đếm được (Uncountable)</th>
                    </tr>
                </thead>
                <tbody style="background: white;">
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 16px; font-weight: bold; color: #475569;">Đặc điểm</td>
                        <td style="padding: 16px; line-height: 1.7;">
                            <div style="display: flex; gap: 8px;"><span style="color: #10b981;">•</span> <span>Có dạng <b>số ít</b> (a book) & <b>số nhiều</b> (books).</span></div>
                            <div style="display: flex; gap: 8px; margin-top: 4px;"><span style="color: #10b981;">•</span> <span>Đếm trực tiếp bằng số đếm (1, 2, 3...).</span></div>
                        </td>
                        <td style="padding: 16px; line-height: 1.7;">
                            <div style="display: flex; gap: 8px;"><span style="color: #ef4444;">•</span> <span>Luôn ở dạng <b>số ít</b>.</span></div>
                            <div style="display: flex; gap: 8px; margin-top: 4px;"><span style="color: #ef4444;">•</span> <span>Chỉ khối lượng/khái niệm không thể đếm.</span></div>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 16px; font-weight: bold; color: #475569;">Quy tắc s/es</td>
                        <td style="padding: 16px; color: #10b981; font-weight: 500;">✅ CÓ THỂ THÊM S/ES</td>
                        <td style="padding: 16px; color: #ef4444; font-weight: 500;">❌ KHÔNG BAO GIỜ THÊM S/ES<br><span style="font-size:0.9rem; color:#64748b; font-weight:normal;">(Ví dụ: information, money, advice, water)</span></td>
                    </tr>
                    <tr>
                        <td style="padding: 16px; font-weight: bold; color: #475569;">Lượng từ đi kèm</td>
                        <td style="padding: 16px; background: rgba(16,185,129,0.05); font-weight:500;">many, a few, a number of</td>
                        <td style="padding: 16px; background: rgba(239,68,68,0.05); font-weight:500;">much, a little, an amount of</td>
                    </tr>
                    <tr>
                        <td style="padding: 16px; font-weight: bold; color: #475569;">Dùng chung</td>
                        <td colspan="2" style="padding: 16px; background: rgba(59,130,246,0.08); text-align: center; border-top: 1px dashed #cbd5e1;">
                            <div style="font-weight: bold; color: #3b82f6; font-size: 1.1rem; margin-bottom: 4px;">some, any, a lot of, lots of, plenty of, most, all</div>
                            <div style="font-size: 0.95rem; color: #475569;">(Đi kèm được với cả Danh từ Đếm được số nhiều & Không đếm được)</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`
    },
    {
        title: '4. CÁCH LẬP CỤM DANH TỪ (NOUN PHRASE)',
        content: `<p style="margin-bottom: 16px; color: var(--text-main);">Cụm danh từ đóng vai trò như một danh từ độc lập trong câu. Dưới đây là 8 công thức vàng để tạo ra Cụm danh từ chuẩn VSTEP. <b>Nhấn vào từng thẻ để xem chi tiết cách dùng:</b></p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;" class="noun-phrase-grid">
            <!-- Card 1 -->
            <details class="np-card" style="--card-color: #3b82f6;">
                <summary class="np-summary">
                    <span>1. Mạo từ + N</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Mạo từ (<i>a/an/the</i>) đứng trước danh từ để cho biết danh từ đó đã được xác định hay chưa.</p>
                    <ul>
                        <li><span style="color: #3b82f6; font-weight: bold;">a/an</span>: (<i>một</i>) Dành cho danh từ đếm được số ít, chưa xác định. <b>an</b> đứng trước nguyên âm (<i>u, e, o, a, i</i>).</li>
                        <li><span style="color: #3b82f6; font-weight: bold;">the</span>: Dành cho danh từ đã được xác định cụ thể (<i>người nghe và người nói đều biết đó là cái gì</i>).</li>
                    </ul>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • <span style="color: #3b82f6; font-weight: bold;">a</span> workshop<br>
                        • <span style="color: #3b82f6; font-weight: bold;">an</span> opportunity<br>
                        • <span style="color: #3b82f6; font-weight: bold;">the</span> environment
                    </div>
                </div>
            </details>

            <!-- Card 2 -->
            <details class="np-card" style="--card-color: #8b5cf6;">
                <summary class="np-summary">
                    <span>2. Lượng từ + N</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Các từ chỉ số lượng đứng trước danh từ.</p>
                    <div style="background: rgba(239,68,68,0.05); padding: 8px; border-left: 2px solid #ef4444; margin-bottom: 12px; font-size: 0.95rem;">
                        <b>Lưu ý:</b> Phải chọn đúng lượng từ cho Danh từ Đếm được (<i>many, a few, ...</i>) và Không đếm được (<i>much, a little, ...</i>).
                    </div>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • <span style="color: #8b5cf6; font-weight: bold;">many</span> tasks<br>
                        • <span style="color: #8b5cf6; font-weight: bold;">some</span> money<br>
                        • <span style="color: #8b5cf6; font-weight: bold;">a lot of</span> time
                    </div>
                </div>
            </details>

            <!-- Card 3 -->
            <details class="np-card" style="--card-color: #ec4899;">
                <summary class="np-summary">
                    <span>3. Từ chỉ định + N</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Dùng để chỉ định cụ thể sự vật/người đang được nhắc tới (<i>này, kia</i>).</p>
                    <ul>
                        <li><span style="color: #ec4899; font-weight: bold;">this / that</span> + N số ít hoặc không đếm được.</li>
                        <li><span style="color: #ec4899; font-weight: bold;">these / those</span> + N số nhiều.</li>
                    </ul>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • <span style="color: #ec4899; font-weight: bold;">this</span> method<br>
                        • <span style="color: #ec4899; font-weight: bold;">that</span> problem<br>
                        • <span style="color: #ec4899; font-weight: bold;">those</span> computers
                    </div>
                </div>
            </details>

            <!-- Card 4 -->
            <details class="np-card" style="--card-color: #f59e0b;">
                <summary class="np-summary">
                    <span>4. Tính từ sở hữu + N</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Tính từ sở hữu (<i>my, your, his, her, its, our, their</i>) chỉ quyền sở hữu đối với danh từ.</p>
                    <p>Khác với đại từ sở hữu, tính từ sở hữu <b>bắt buộc</b> phải có danh từ đi kèm theo sau.</p>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • <span style="color: #f59e0b; font-weight: bold;">my</span> classmates<br>
                        • <span style="color: #f59e0b; font-weight: bold;">their</span> decision<br>
                        • <span style="color: #f59e0b; font-weight: bold;">our</span> country
                    </div>
                </div>
            </details>

            <!-- Card 5 -->
            <details class="np-card" style="--card-color: #10b981;">
                <summary class="np-summary">
                    <span>5. Danh từ + Danh từ</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm (<i>Danh từ ghép</i>):</b> Hai danh từ đứng cạnh nhau. Danh từ đứng trước làm chức năng bổ nghĩa, phân loại cho danh từ đứng sau.</p>
                    <div style="background: rgba(239,68,68,0.05); padding: 8px; border-left: 2px solid #ef4444; margin-bottom: 12px; font-size: 0.95rem;">
                        <b>Lưu ý vàng:</b> Danh từ đứng trước (bổ nghĩa) phần lớn ở dạng <b>số ít</b> (<i>Ví dụ: shoe store, book shop</i>). Tuy nhiên vẫn có một số ít ngoại lệ luôn dùng số nhiều như: <i>sports center, clothes shop, sales manager...</i>
                    </div>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • <span style="color: #10b981; font-weight: bold;">university</span> student<br>
                        • <span style="color: #10b981; font-weight: bold;">city</span> center<br>
                        • <span style="color: #10b981; font-weight: bold;">computer</span> screen
                    </div>
                </div>
            </details>

            <!-- Card 6 -->
            <details class="np-card" style="--card-color: #f43f5e;">
                <summary class="np-summary">
                    <span>6. Sở hữu cách (N's + N)</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Thể hiện sự sở hữu. Thường ưu tiên dùng cho người, động vật sống hoặc các tổ chức, quốc gia, thời gian.</p>
                    <ul>
                        <li>Thêm <b>'s</b> vào sau danh từ số ít (<i>VD: Peter's</i>).</li>
                        <li>Chỉ thêm dấu phẩy <b>'</b> vào sau danh từ số nhiều tận cùng bằng s (<i>VD: The students'</i>).</li>
                    </ul>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • <span style="color: #f43f5e; font-weight: bold;">society's</span> expectations<br>
                        • <span style="color: #f43f5e; font-weight: bold;">Peter's</span> book<br>
                        • <span style="color: #f43f5e; font-weight: bold;">today's</span> meeting
                    </div>
                </div>
            </details>

            <!-- Card 7 -->
            <details class="np-card" style="--card-color: #06b6d4;">
                <summary class="np-summary">
                    <span>7. N of N</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Thể hiện sự sở hữu hoặc mối quan hệ giữa 2 danh từ mang nghĩa "của".</p>
                    <p>Cấu trúc này chủ yếu dùng cho đồ vật, sự vật vô tri vô giác, hoặc các khái niệm trừu tượng (thay vì dùng Sở hữu cách 's).</p>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • the <span style="color: #06b6d4; font-weight: bold;">impact of technology</span><br>
                        • the <span style="color: #06b6d4; font-weight: bold;">role of education</span><br>
                        • the <span style="color: #06b6d4; font-weight: bold;">quality of life</span>
                    </div>
                </div>
            </details>

            <!-- Card 8 -->
            <details class="np-card" style="--card-color: #14b8a6;">
                <summary class="np-summary">
                    <span>8. Tính từ + Danh từ</span>
                    <span class="np-icon">▼</span>
                </summary>
                <div class="np-content">
                    <p><b>Khái niệm:</b> Tính từ đứng ngay trước danh từ để miêu tả tính chất, đặc điểm cho danh từ đó.</p>
                    <p>Đây là cấu trúc phổ biến nhất để nâng cấp (upgrade) từ vựng trong bài thi Writing.</p>
                    <div class="np-examples">
                        <b>Ví dụ:</b><br>
                        • an <span style="color: #14b8a6; font-weight: bold;">effective</span> method<br>
                        • <span style="color: #14b8a6; font-weight: bold;">beautiful</span> flowers<br>
                        • a <span style="color: #14b8a6; font-weight: bold;">difficult</span> exam
                    </div>
                </div>
            </details>
        </div>`
    }
];

const nounsPractice1Data = [
    { word: 'book', type: 'countable' },
    { word: 'information', type: 'uncountable' },
    { word: 'place', type: 'countable' },
    { word: 'money', type: 'uncountable' },
    { word: 'news', type: 'uncountable' },
    { word: 'friend', type: 'countable' },
    { word: 'student', type: 'countable' },
    { word: 'class', type: 'countable' },
    { word: 'water', type: 'uncountable' },
    { word: 'air', type: 'uncountable' }
];

const nounsPractice2Data = [
    { 
      question: "Reading books can help me gain a lot of <b style='color: var(--primary-color);'>knowledges</b>.", 
      options: ["knowledge", "knowings", "Giữ nguyên vì đã đúng"], 
      answer: 0, 
      explanation: "knowledge là danh từ không đếm được -> không thêm '-s'" 
    },
    { 
      question: "You should take part in many <b style='color: var(--primary-color);'>activity</b> at school.", 
      options: ["activitys", "activities", "Giữ nguyên vì đã đúng"], 
      answer: 1, 
      explanation: "sau 'many' phải dùng danh từ đếm được số nhiều 'activities'" 
    },
    { 
      question: "We need to order additional <b style='color: var(--primary-color);'>furniture</b> for the meeting room.", 
      options: ["furnitures", "a furniture", "Giữ nguyên vì đã đúng"], 
      answer: 2, 
      explanation: "furniture là danh từ không đếm được -> không thêm 's' và câu này đã sử dụng đúng." 
    },
    { 
      question: "A cleaner came to my office to clean up my <b style='color: var(--primary-color);'>kitchen</b>.", 
      options: ["kitchens", "kitchening", "Giữ nguyên vì đã đúng"], 
      answer: 2, 
      explanation: "kitchen là danh từ đếm được số ít, dùng đúng ngữ cảnh." 
    },
    { 
      question: "I purchased some <b style='color: var(--primary-color);'>furnitures</b> at your store last week.", 
      options: ["furniture", "pieces of furnitures", "Giữ nguyên vì đã đúng"], 
      answer: 0, 
      explanation: "furniture là danh từ không đếm được -> không thêm 's'" 
    },
    { 
      question: "The staff took a lot of <b style='color: var(--primary-color);'>times</b> to complete the task.", 
      options: ["time", "timing", "Giữ nguyên vì đã đúng"], 
      answer: 0, 
      explanation: "time (thời gian) là danh từ không đếm được -> không thêm 's'" 
    },
    { 
      question: "Can you give me some <b style='color: var(--primary-color);'>advice</b>?", 
      options: ["advices", "advicing", "Giữ nguyên vì đã đúng"], 
      answer: 2, 
      explanation: "advice là danh từ không đếm được -> đi với 'some' là chính xác." 
    },
    { 
      question: "They sell a lot of <b style='color: var(--primary-color);'>products</b> in Cai Rang floating market.", 
      options: ["product", "product's", "Giữ nguyên vì đã đúng"], 
      answer: 2, 
      explanation: "products là danh từ đếm được -> đi với a lot of thêm 's' là chính xác." 
    },
    { 
      question: "I think you should make friends with <b style='color: var(--primary-color);'>native speaker</b>.", 
      options: ["a native speaker / native speakers", "native speaking", "Giữ nguyên vì đã đúng"], 
      answer: 0, 
      explanation: "Danh từ đếm được 'native speaker' không được đứng trơ trọi một mình. Bạn phải thêm mạo từ 'a' (a native speaker) hoặc chuyển sang số nhiều (native speakers)." 
    },
    { 
      question: "You should take an English <b style='color: var(--primary-color);'>courses</b> at River English Center.", 
      options: ["course", "coursing", "Giữ nguyên vì đã đúng"], 
      answer: 0, 
      explanation: "course là danh từ đếm được -> nếu dùng mạo từ 'an' thì phải là số ít 'course'" 
    }
];

const nounsPractice3Data = [
    { q: "một môi trường học tập tích cực", a: ["a positive learning environment"] },
    { q: "những lợi ích của việc học trực tuyến", a: ["the benefits of online learning", "benefits of online learning"], exp: "Nên có mạo từ 'the' vì cụm 'N1 of N2' chỉ những lợi ích xác định của một việc cụ thể." },
    { q: "các kỹ năng mềm quan trọng", a: ["important soft skills"] },
    { q: "những nguyên nhân của ô nhiễm không khí", a: ["the causes of air pollution", "causes of air pollution"], exp: "Nên có mạo từ 'the' vì cụm 'N1 of N2' chỉ những nguyên nhân xác định." },
    { q: "một bài kiểm tra cuối kỳ", a: ["a final exam", "a final test"] },
    { q: "một tách cà phê nóng", a: ["a hot cup of coffee", "a cup of hot coffee"] },
    { q: "nhiều thông tin quan trọng", a: ["a lot of important information", "much important information", "lots of important information"] },
    { q: "những học sinh của lớp này", a: ["the students of this class", "the students in this class", "this class's students"], exp: "Bắt buộc có mạo từ 'the' (the students) vì đây là những học sinh xác định thuộc về một lớp học cụ thể, không phải học sinh nói chung." },
    { q: "các kỹ năng mềm thiết yếu", a: ["essential soft skills", "crucial soft skills", "necessary soft skills"] },
    { q: "kết nối Internet không ổn định", a: ["unstable internet connection", "an unstable internet connection"] },
    { q: "những thiết bị công nghệ hiện đại", a: ["modern technological devices", "modern technology devices"] },
    { q: "ngày tốt nghiệp của tôi", a: ["my graduation day"] },
    { q: "sức khoẻ tinh thần của chúng ta", a: ["our mental health"] },
    { q: "những thói quen ăn uống lành mạnh", a: ["healthy eating habits"] },
    { q: "một lối sống lành mạnh", a: ["a healthy lifestyle"] },
    { q: "các vấn đề kỹ thuật", a: ["technical problems", "technical issues"] },
    { q: "chất lượng âm thanh kém", a: ["poor sound quality", "bad sound quality"] },
    { q: "một môi trường tốt hơn", a: ["a better environment"] },
    { q: "một khoá học tiếng Anh ngắn hạn", a: ["a short-term english course", "a short english course"] },
    { q: "một mùi khó chịu", a: ["an unpleasant smell", "a bad smell"] }
];




window.renderNounsDetail = function(activeTab = 'theory') {
    let tabsHtml = `
        <div class="custom-tabs" style="display: flex; gap: 16px;">
            <button class="tab-btn ${activeTab === 'theory' ? 'active' : ''}" onclick="renderNounsDetail('theory')" style="padding: 12px 32px; font-size: 1.1rem; font-weight: bold; border-radius: 30px; border: none; cursor: pointer; background: ${activeTab === 'theory' ? 'var(--primary-color)' : 'var(--bg-card)'}; color: ${activeTab === 'theory' ? '#fff' : 'var(--text-main)'}; border: 2px solid ${activeTab === 'theory' ? 'transparent' : 'var(--border-color)'}; transition: all 0.3s;">📚 LÝ THUYẾT</button>
            <button class="tab-btn ${activeTab === 'practice' ? 'active' : ''}" onclick="renderNounsDetail('practice')" style="padding: 12px 32px; font-size: 1.1rem; font-weight: bold; border-radius: 30px; border: none; cursor: pointer; background: ${activeTab === 'practice' ? 'var(--primary-color)' : 'var(--bg-card)'}; color: ${activeTab === 'practice' ? '#fff' : 'var(--text-main)'}; border: 2px solid ${activeTab === 'practice' ? 'transparent' : 'var(--border-color)'}; transition: all 0.3s;">✏️ BÀI TẬP</button>
        </div>
    `;

    let contentHtml = '';

    if (activeTab === 'theory') {
        const theoryCards = nounsTheoryData.map((item, idx) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem;">${item.title}</h3>
                <div style="color: var(--text-main); font-size: 1.1rem; line-height: 1.6;">${item.content}</div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 24px;">Hãy ôn tập kỹ 4 phần lý thuyết quan trọng dưới đây trước khi làm bài tập thực hành nhé!</p>
                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    ${theoryCards}
                </div>
            </div>
        `;
    } else {
        // Practice UI
        
        // Bài 1: Phân loại từ
        const wordsList = nounsPractice1Data.map((item, idx) => `
            <div class="drag-word" draggable="true" data-type="${item.type}" ondragstart="drag(event)" id="word-${idx}" style="display: inline-block; padding: 8px 16px; background: #fff; border: 2px solid var(--border-color); border-radius: 20px; font-weight: bold; margin: 4px; cursor: grab;">
                ${item.word}
            </div>
        `).join('');
        
        // Bài 2: Sửa lỗi sai
        const errorCorrectionList = nounsPractice2Data.map((q, idx) => {
            return `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 24px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; font-size: 1.2rem;">
                        ${idx + 1}
                    </div>
                    <div style="flex: 1;">
                        <p style="font-size: 1.15rem; font-weight: 500; margin-bottom: 16px; color: var(--text-main);">${q.question}</p>
                        
                        <div style="margin-bottom: 16px;">
                            <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 8px;">Câu này đúng hay sai?</p>
                            <div style="display: flex; gap: 12px;">
                                <button id="btn_true_${idx}" onclick="selectTrueFalseNouns(${idx}, true)" style="flex: 1; padding: 10px; border: 2px solid #e2e8f0; background: white; color: #64748b; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.2s;">ĐÚNG</button>
                                <button id="btn_false_${idx}" onclick="selectTrueFalseNouns(${idx}, false)" style="flex: 1; padding: 10px; border: 2px solid #e2e8f0; background: white; color: #64748b; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.2s;">SAI</button>
                            </div>
                        </div>

                        <div id="correction_step_${idx}" style="display: none; flex-direction: column; gap: 12px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1; margin-bottom: 16px;">
                            <p style="font-size: 1rem; color: var(--text-main); font-weight: 500;">Nhập từ/cụm từ sửa lại cho đúng:</p>
                            <input type="text" id="correction_input_${idx}" placeholder="Nhập đáp án của bạn..." style="padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.nounsAnswers[${idx}].correction = this.value; document.getElementById('nounsexp_${idx}').style.display='none'; window.saveProgress(true);">
                        </div>

                        <div id="nounsexp_${idx}" style="display: none; margin-top: 16px; padding: 12px 16px; border-radius: 8px; font-size: 1.05rem;"></div>
                        <div style="margin-top: 16px;">
                            <button onclick="checkNounsSingleAnswer(${idx})" style="padding: 8px 20px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 1: PHÂN LOẠI DANH TỪ</h2>
                    <p style="color: var(--text-muted); margin-bottom: 16px;">Kéo thả các từ vựng sau vào đúng giỏ Đếm được (Countable) hoặc Không đếm được (Uncountable).</p>
                    
                    <div id="words-pool" style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 2px dashed var(--border-color); margin-bottom: 24px; min-height: 80px;" ondrop="dropPool(event)" ondragover="allowDrop(event)">
                        ${wordsList}
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div id="zone-countable" style="background: rgba(16, 185, 129, 0.05); border: 2px solid #10b981; border-radius: 12px; padding: 20px; min-height: 150px;" ondrop="drop(event, 'countable')" ondragover="allowDrop(event)">
                            <h3 style="color: #10b981; text-align: center; margin-bottom: 16px;">Đếm được (Countable)</h3>
                        </div>
                        <div id="zone-uncountable" style="background: rgba(239, 68, 68, 0.05); border: 2px solid #ef4444; border-radius: 12px; padding: 20px; min-height: 150px;" ondrop="drop(event, 'uncountable')" ondragover="allowDrop(event)">
                            <h3 style="color: #ef4444; text-align: center; margin-bottom: 16px;">Không đếm được (Uncountable)</h3>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="checkNounsDragDrop()" style="padding: 10px 24px; background: white; color: #10b981; border: 2px solid #10b981; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#10b981'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='#10b981'">Kiểm tra Bài 1</button>
                    </div>
                    <div id="drag-result" style="margin-top: 16px; font-weight: bold; text-align: center;"></div>
                </div>

                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px;">

                <div style="margin-bottom: 32px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 2: SỬA LỖI SAI</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Chọn phương án đúng nhất để sửa lỗi (hoặc giữ nguyên) cho phần in đậm trong câu.</p>
                    ${errorCorrectionList}
                </div>
            </div>
                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px; margin-top: 40px;">
                <div style="margin-bottom: 32px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI 3: DỊCH CỤM DANH TỪ</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Hãy dịch các cụm danh từ sau sang tiếng Anh.</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        ${nounsPractice3Data.map((q, idx) => `
                            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">
                                        ${idx + 1}
                                    </div>
                                    <p style="font-size: 1.1rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 8px;">
                                    <input type="text" id="trans_input_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.nounsTransAnswers[${idx}] = this.value; document.getElementById('transexp_${idx}').style.display='none'; window.saveProgress(true);">
                                    <button onclick="checkNounsTranslation(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                                </div>
                                <div id="transexp_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                
                
        `;
    }

    contentWrapper.innerHTML = `
        <div class="topic-detail-header" style="margin-bottom: 32px;">
            <button class="btn-back" onclick="renderView('chapter2')" style="margin-bottom: 16px; background: none; border: none; color: var(--primary-color); font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.05rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                QUAY LẠI CHƯƠNG 02
            </button>
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 01: DANH TỪ</h1>
            ${tabsHtml}
        </div>
        ${contentHtml}
    `;
    
    // init global vars for nouns quiz if not exist
    if (!window.nounsAnswers) window.nounsAnswers = new Array(nounsPractice2Data.length).fill(null).map(() => ({ tf: null, correction: null }));
    if (!window.nounsTransAnswers) window.nounsTransAnswers = new Array(nounsPractice3Data.length).fill('');
    
    // pre-fill saved answers
    setTimeout(() => {
        if (activeTab === 'practice') {
            
            if (window.nounsDragDropState) {
                ['countable', 'uncountable', 'pool'].forEach(zone => {
                    const container = document.getElementById(zone === 'pool' ? 'words-pool' : `zone-${zone}`);
                    if (container && window.nounsDragDropState[zone]) {
                        window.nounsDragDropState[zone].forEach(id => {
                            const el = document.getElementById(id);
                            if (el) container.appendChild(el);
                        });
                    }
                });
            }

            if (window.nounsAnswers) {
                window.nounsAnswers.forEach((ans, idx) => {
                    if (ans.tf !== null) {
                        window.selectTrueFalseNouns(idx, ans.tf);
                        if (ans.tf === false && ans.correction) {
                            const input = document.getElementById(`correction_input_${idx}`);
                            if (input) input.value = ans.correction;
                        }
                    }
                });
            }
            if (window.nounsTransAnswers) {
                window.nounsTransAnswers.forEach((val, idx) => {
                    if (val) {
                        const input = document.getElementById(`trans_input_${idx}`);
                        if (input) input.value = val;
                    }
                });
            }
        }
    }, 50);

}


window.saveDragDropState = function() {
    const cZone = document.getElementById('zone-countable');
    const uZone = document.getElementById('zone-uncountable');
    const pZone = document.getElementById('words-pool');
    if (cZone && uZone && pZone) {
        const countable = Array.from(cZone.children).filter(el => el.classList.contains('drag-word')).map(el => el.id);
        const uncountable = Array.from(uZone.children).filter(el => el.classList.contains('drag-word')).map(el => el.id);
        const pool = Array.from(pZone.children).filter(el => el.classList.contains('drag-word')).map(el => el.id);
        window.nounsDragDropState = { countable, uncountable, pool };
        window.saveProgress(true);
    }
}

// DRAG AND DROP LOGIC
window.allowDrop = function(ev) {
    ev.preventDefault();
}

window.drag = function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

window.drop = function(ev, targetType) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var el = document.getElementById(data);
    var elType = el.getAttribute('data-type');
    
    // find nearest zone container
    let container = ev.target;
    while(container && !container.id.startsWith('zone-')) {
        container = container.parentElement;
    }
    if(!container) container = ev.target;
    
    if (container.id === 'zone-countable' || container.id === 'zone-uncountable') {
        container.appendChild(el);
        window.saveDragDropState();
    }
}
window.dropPool = function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var el = document.getElementById(data);
    let container = ev.target;
    if(container.id !== 'words-pool') container = document.getElementById('words-pool');
    container.appendChild(el);
    window.saveDragDropState();
}

window.selectTrueFalseNouns = function(qIdx, isTrue) {
    const btnTrue = document.getElementById(`btn_true_${qIdx}`);
    const btnFalse = document.getElementById(`btn_false_${qIdx}`);
    const correctionStep = document.getElementById(`correction_step_${qIdx}`);
    
    // Reset buttons
    btnTrue.style.background = 'white'; btnTrue.style.color = '#64748b'; btnTrue.style.borderColor = '#e2e8f0';
    btnFalse.style.background = 'white'; btnFalse.style.color = '#64748b'; btnFalse.style.borderColor = '#e2e8f0';
    
    if (isTrue) {
        btnTrue.style.background = '#e0e7ff'; btnTrue.style.color = '#4338ca'; btnTrue.style.borderColor = '#4338ca';
        correctionStep.style.display = 'none';
    } else {
        btnFalse.style.background = '#e0e7ff'; btnFalse.style.color = '#4338ca'; btnFalse.style.borderColor = '#4338ca';
        correctionStep.style.display = 'flex';
    }
    window.nounsAnswers[qIdx].tf = isTrue;
    window.saveProgress(true);
    
    // hide explanation if showing
    document.getElementById(`nounsexp_${qIdx}`).style.display = 'none';
}



window.checkNounsTranslation = function(idx) {
    const userInput = window.nounsTransAnswers[idx];
    const expDiv = document.getElementById(`transexp_${idx}`);
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa nhập bản dịch!</b> Vui lòng nhập đáp án của bạn.';
        return;
    }
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = nounsPractice3Data[idx].a;
    let isCorrect = false;
    
    for (let ans of validAnswers) {
        if (cleanUser === ans.toLowerCase()) {
            isCorrect = true;
            break;
        }
    }
    
    expDiv.style.display = 'block';
    if (isCorrect) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>` + (nounsPractice3Data[idx].exp ? ` ${nounsPractice3Data[idx].exp}` : '');
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA CHÍNH XÁC.</b> Tham khảo: <b>${validAnswers[0]}</b>` + (nounsPractice3Data[idx].exp ? `<div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">💡 <b>Giải thích:</b> ${nounsPractice3Data[idx].exp}</div>` : '');
    }
}

window.checkNounsSingleAnswer = function(idx) {
    const ans = window.nounsAnswers[idx];
    const expDiv = document.getElementById(`nounsexp_${idx}`);
    
    if (ans.tf === null) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa chọn!</b> Vui lòng xác định từ in đậm là ĐÚNG hay SAI trước khi kiểm tra.';
        return;
    }
    if (ans.tf === false && (!ans.correction || ans.correction.trim() === '')) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa nhập phương án sửa!</b> Vui lòng nhập từ bạn muốn sửa.';
        return;
    }
    
    const correctIdx = nounsPractice2Data[idx].answer;
    const isActuallyCorrect = nounsPractice2Data[idx].options[correctIdx].includes("Giữ nguyên");
    
    expDiv.style.display = 'block';
    
    if (isActuallyCorrect) {
        if (ans.tf === true) {
            expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
            expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${nounsPractice2Data[idx].explanation}`;
        } else {
            expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
            expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Từ này vốn dĩ đã đúng. ${nounsPractice2Data[idx].explanation}`;
        }
    } else {
        if (ans.tf === true) {
            expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
            expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Từ in đậm bị sai ngữ pháp. Đáp án đúng là <b>${nounsPractice2Data[idx].options[correctIdx]}</b>. ${nounsPractice2Data[idx].explanation}`;
        } else {
            const userCorrection = ans.correction.trim().toLowerCase();
            const correctStr = nounsPractice2Data[idx].options[correctIdx].toLowerCase();
            const validAnswers = correctStr.split('/').map(s => s.trim());
            const isCorrect = validAnswers.includes(userCorrection);

            if (isCorrect) {
                expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
                expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> Bạn đã tìm và sửa lỗi rất chuẩn. ${nounsPractice2Data[idx].explanation}`;
            } else {
                expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
                expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Bạn đã phát hiện lỗi đúng nhưng sửa chưa đúng. Đáp án sửa đúng phải là <b>${nounsPractice2Data[idx].options[correctIdx]}</b>. ${nounsPractice2Data[idx].explanation}`;
            }
        }
    }
}


window.checkNounsDragDrop = function() {
    let p1Correct = 0;
    const countableZone = document.getElementById('zone-countable');
    const uncountableZone = document.getElementById('zone-uncountable');
    
    countableZone.querySelectorAll('.drag-word').forEach(el => {
        if(el.getAttribute('data-type') === 'countable') {
            el.style.background = '#dcfce7';
            el.style.borderColor = '#22c55e';
            el.style.color = '#166534';
            p1Correct++;
        } else {
            el.style.background = '#fee2e2';
            el.style.borderColor = '#ef4444';
            el.style.color = '#991b1b';
        }
    });
    
    uncountableZone.querySelectorAll('.drag-word').forEach(el => {
        if(el.getAttribute('data-type') === 'uncountable') {
            el.style.background = '#dcfce7';
            el.style.borderColor = '#22c55e';
            el.style.color = '#166534';
            p1Correct++;
        } else {
            el.style.background = '#fee2e2';
            el.style.borderColor = '#ef4444';
            el.style.color = '#991b1b';
        }
    });

    const res = document.getElementById('drag-result');
    res.innerHTML = `Bạn đã kéo đúng ${p1Correct}/10 từ.`;
    if(p1Correct === 10) {
        res.style.color = '#10b981';
    } else {
        res.style.color = '#f59e0b';
    }
}


window.showExerciseResult = function(score, total, title) {
    const studentName = localStorage.getItem('studentName') || 'Học viên';
    let resultModal = document.getElementById('exercise-result-modal');
    if (!resultModal) {
        resultModal = document.createElement('div');
        resultModal.id = 'exercise-result-modal';
        resultModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(5px); opacity: 0; transition: opacity 0.3s;';
        document.body.appendChild(resultModal);
    }
    
    const percentage = score / total;
    let message = '';
    let color = '';
    if (percentage >= 0.8) {
        message = '🎉 Xuất sắc! Bạn làm rất tốt!';
        color = '#10b981';
    } else if (percentage >= 0.5) {
        message = '👍 Khá tốt! Hãy cố gắng hơn nhé!';
        color = '#f59e0b';
    } else {
        message = '💪 Cố lên! Bạn cần ôn tập lại kỹ hơn.';
        color = '#ef4444';
    }

    resultModal.innerHTML = `
        <div style="background: white; padding: 32px; border-radius: 20px; width: 90%; max-width: 450px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transform: scale(0.9); transition: transform 0.3s; border-top: 8px solid ${color};">
            <h2 style="color: var(--primary-color); margin-bottom: 8px; font-size: 1.8rem;">${title}</h2>
            <div style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 24px; font-weight: 500;">
                🎓 Học viên: <span style="color: var(--primary-color);">${studentName}</span>
            </div>
            
            <div style="font-size: 3rem; font-weight: 800; color: ${color}; margin-bottom: 8px;">
                ${score} <span style="font-size: 1.5rem; color: var(--text-muted);">/ ${total}</span>
            </div>
            <p style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 24px;">${message}</p>
            
            <button onclick="document.getElementById('exercise-result-modal').style.opacity = '0'; setTimeout(() => document.getElementById('exercise-result-modal').style.display = 'none', 300);" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 12px rgba(87,70,227,0.3);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Đóng lại</button>
        </div>
    `;
    
    resultModal.style.display = 'flex';
    setTimeout(() => {
        resultModal.style.opacity = '1';
        resultModal.firstElementChild.style.transform = 'scale(1)';
        if (percentage >= 0.8) {
            try { party.confetti(resultModal.firstElementChild, { count: party.variation.range(50, 80) }); } catch(e) {}
        }
    }, 10);
}

window.submitNouns1 = function() {
    let p1Correct = 0;
    const countableZone = document.getElementById('zone-countable');
    const uncountableZone = document.getElementById('zone-uncountable');
    const pool = document.getElementById('words-pool');
    
    if (pool && pool.querySelectorAll('.drag-word').length > 0) {
        alert("Vui lòng kéo hết các từ vào 2 cột trước khi nộp bài!");
        return;
    }
    
    countableZone.querySelectorAll('.drag-word').forEach(el => {
        if(el.getAttribute('data-type') === 'countable') p1Correct++;
    });
    uncountableZone.querySelectorAll('.drag-word').forEach(el => {
        if(el.getAttribute('data-type') === 'uncountable') p1Correct++;
    });
    window.checkNounsDragDrop();
    window.showExerciseResult(p1Correct, 10, "KẾT QUẢ BÀI 1 (DANH TỪ)");
}

window.submitNouns2 = function() {
    let p2Correct = 0;
    let completed = true;
    nounsPractice2Data.forEach((q, idx) => {
        const ans = window.nounsAnswers[idx];
        if (ans.tf === null || (ans.tf === false && (!ans.correction || ans.correction.trim() === ''))) {
            completed = false;
        } else {
            const correctIdx = nounsPractice2Data[idx].answer;
            const isActuallyCorrect = nounsPractice2Data[idx].options[correctIdx].includes("Giữ nguyên");
            if (isActuallyCorrect && ans.tf === true) {
                p2Correct++;
            } else if (!isActuallyCorrect && ans.tf === false) {
                const userCorrection = ans.correction.trim().toLowerCase();
                const correctStr = nounsPractice2Data[idx].options[correctIdx].toLowerCase();
                const validAnswers = correctStr.split('/').map(s => s.trim());
                if (validAnswers.includes(userCorrection)) {
                    p2Correct++;
                }
            }
        }
        window.checkNounsSingleAnswer(idx);
    });
    if (!completed) {
        alert("Vui lòng trả lời hết các câu hỏi trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(p2Correct, nounsPractice2Data.length, "KẾT QUẢ BÀI 2 (DANH TỪ)");
}

window.submitNouns3 = function() {
    let p3Correct = 0;
    let completed = true;
    nounsPractice3Data.forEach((q, idx) => {
        const userInput = window.nounsTransAnswers[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            const validAnswers = q.a;
            let isCorrect = false;
            for (let ans of validAnswers) {
                if (cleanUser === ans.toLowerCase()) {
                    isCorrect = true;
                    break;
                }
            }
            if (isCorrect) p3Correct++;
        }
        window.checkNounsTranslation(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(p3Correct, nounsPractice3Data.length, "KẾT QUẢ BÀI 3 (DANH TỪ)");
}

window.selectPronouns1Option = function(el, idx, oIdx) {
    window.pronounsAnswers1[idx] = oIdx;
    const exp = document.getElementById(`proexp1_${idx}`);
    if (exp) exp.style.display = 'none';
    const container = el.parentElement;
    const labels = container.querySelectorAll('label');
    labels.forEach((label, lIdx) => {
        const radioCircle = label.querySelector('.radio-custom');
        const radioInput = label.querySelector('input[type="radio"]');
        if (lIdx === oIdx) {
            label.style.background = '#eff6ff';
            label.style.borderColor = 'var(--primary-color)';
            if (radioCircle) radioCircle.style.background = 'var(--primary-color)';
            if (radioInput) radioInput.checked = true;
        } else {
            label.style.background = '#f8fafc';
            label.style.borderColor = '#e2e8f0';
            if (radioCircle) radioCircle.style.background = 'transparent';
            if (radioInput) radioInput.checked = false;
        }
    });
};


window.submitPronouns1 = function() {
    let correctCount = 0;
    let completed = true;
    pronounsPractice1Data.forEach((q, idx) => {
        if (window.pronounsAnswers1[idx] === null) {
            completed = false;
        } else {
            if (window.pronounsAnswers1[idx] === q.a) correctCount++;
        }
        window.checkPronouns1(idx); // update UI
    });
    if (!completed) {
        alert("Vui lòng trả lời hết các câu hỏi trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, pronounsPractice1Data.length, "KẾT QUẢ BÀI 1 (ĐẠI TỪ)");
}

window.submitPronouns2 = function() {
    let correctCount = 0;
    let completed = true;
    pronounsPractice2Data.forEach((q, idx) => {
        const userInput = window.pronounsAnswers2[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            const validAnswers = q.a;
            let isCorrect = false;
            for (let ans of validAnswers) {
                if (cleanUser === ans.toLowerCase()) {
                    isCorrect = true;
                    break;
                }
            }
            if (isCorrect) correctCount++;
        }
        window.checkPronouns2(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, pronounsPractice2Data.length, "KẾT QUẢ BÀI 2 (ĐẠI TỪ)");
}

window.submitPronouns3 = function() {
    const data = pronounsParagraphData;
    let correctCount = 0;
    let completed = true;
    data.answers.forEach((ans, idx) => {
        const userInput = window.pronounsAnswersPara[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase();
            if (cleanUser === ans.toLowerCase()) {
                correctCount++;
            }
        }
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các ô trống trước khi nộp bài!");
        return;
    }
    window.checkPronounsParagraph(); // update UI (color and explanation)
    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI 3 (ĐẠI TỪ)");
}

window.checkPronouns1 = function(idx) {
    const ans = window.pronounsAnswers1[idx];
    const expDiv = document.getElementById(`proexp1_${idx}`);
    
    if (ans === null) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa chọn!</b> Vui lòng chọn một đáp án.';
        return;
    }
    
    const correctIdx = pronounsPractice1Data[idx].a;
    expDiv.style.display = 'block';
    
    if (ans === correctIdx) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${pronounsPractice1Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Đáp án đúng là <b>${pronounsPractice1Data[idx].options[correctIdx]}</b>. ${pronounsPractice1Data[idx].exp}`;
    }
}

window.checkPronouns2 = function(idx) {
    const userInput = window.pronounsAnswers2[idx];
    const expDiv = document.getElementById(`proexp2_${idx}`);
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa nhập!</b> Vui lòng nhập đáp án của bạn.';
        return;
    }
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = pronounsPractice2Data[idx].a;
    let isCorrect = false;
    
    for (let ans of validAnswers) {
        if (cleanUser === ans.toLowerCase()) {
            isCorrect = true;
            break;
        }
    }
    
    expDiv.style.display = 'block';
    if (isCorrect) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${pronounsPractice2Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA ĐÚNG.</b> Tham khảo: <b>${validAnswers[0]}</b>. ${pronounsPractice2Data[idx].exp}`;
    }
}

window.checkPronounsParagraph = function() {
    const data = pronounsParagraphData;
    const expDiv = document.getElementById('pro_para_explanation');
    const expList = document.getElementById('pro_para_exp_list');
    
    let html = '';
    let correctCount = 0;
    
    data.answers.forEach((correctAnswer, idx) => {
        const input = document.getElementById(`pro_para_${idx}`);
        if (!input) return;
        
        const val = input.value.trim();
        const isCorrect = val.toLowerCase() === correctAnswer.toLowerCase();
        
        if (isCorrect) {
            input.style.borderColor = '#22c55e';
            input.style.background = '#f0fdf4';
            input.style.color = '#15803d';
            correctCount++;
            html += `<li style="margin-bottom: 8px;"><span style="color:#15803d; font-weight:bold;">Câu ${idx + 1} (Đúng):</span> Đáp án là <b>${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        } else {
            input.style.borderColor = '#ef4444';
            input.style.background = '#fef2f2';
            input.style.color = '#b91c1c';
            html += `<li style="margin-bottom: 8px;"><span style="color:#b91c1c; font-weight:bold;">Câu ${idx + 1} (Sai):</span> Bạn điền "${val || 'trống'}", đáp án đúng là <b style="color:#15803d;">${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        }
    });
    
    const summaryHtml = `<div style="background: ${correctCount === data.answers.length ? '#f0fdf4' : '#fffbeb'}; border-left: 4px solid ${correctCount === data.answers.length ? '#22c55e' : '#f59e0b'}; padding: 12px; margin-bottom: 16px; border-radius: 4px; font-weight: bold; color: ${correctCount === data.answers.length ? '#166534' : '#b45309'}; font-size: 1.1rem;">
        📊 Kết quả: Bạn làm đúng ${correctCount} / ${data.answers.length} câu.
    </div>`;
    
    expList.innerHTML = summaryHtml + '<ol style="padding-left: 20px; margin: 0;">' + html + '</ol>';
    expDiv.style.display = 'block';
    
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const playTone = (freq, duration, type) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.type = type;
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        };
        if (correctCount === data.answers.length) {
            playTone(523.25, 0.15, 'sine'); // C5
            setTimeout(() => playTone(659.25, 0.15, 'sine'), 150); // E5
            setTimeout(() => playTone(783.99, 0.3, 'sine'), 300); // G5
        } else if (correctCount > 0) {
            playTone(523.25, 0.15, 'sine');
            setTimeout(() => playTone(659.25, 0.2, 'sine'), 150);
        } else {
            playTone(220, 0.3, 'sawtooth'); // A3
        }
    } catch(e) {}
}


// ==================== VERBS LOGIC ====================
window.renderVerbsDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('content-wrapper');
    
    // Init global vars if not exist
    if (!window.verbsAnswers1) window.verbsAnswers1 = new Array(verbsPractice1Data.length).fill(null);
    if (!window.verbsAnswers2) window.verbsAnswers2 = new Array(verbsPractice2Data.length).fill('');
    if (!window.verbsAnswersPara) window.verbsAnswersPara = new Array(verbsPracticeParaData.answers.length).fill('');

    const tabsHtml = `
        <div class="tabs" style="display: flex; gap: 8px; margin-bottom: 24px;">
            <button onclick="renderVerbsDetail('theory')" class="btn-tab ${activeTab === 'theory' ? 'active' : ''}">📖 LÝ THUYẾT</button>
            <button onclick="renderVerbsDetail('practice')" class="btn-tab ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;

    let contentHtml = '';
    
    if (activeTab === 'theory') {
        const theoryCards = verbsTheoryData.map((item, idx) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem;">${item.title}</h3>
                <div style="color: var(--text-main); font-size: 1.1rem; line-height: 1.6;">${item.content}</div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    ${theoryCards}
                </div>
            </div>
        `;
    } else {
        // PRACTICE
        // BÀI 1: Trắc nghiệm
        const p1Html = verbsPractice1Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-top: 4px;">${q.q}</p>
                </div>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; padding-left: 44px;">
                    ${q.options.map((opt, oIdx) => `
                        <label style="display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: ${window.verbsAnswers1[idx] === oIdx ? '#eff6ff' : '#f8fafc'}; border: 2px solid ${window.verbsAnswers1[idx] === oIdx ? 'var(--primary-color)' : '#e2e8f0'}; border-radius: 8px; cursor: pointer; transition: all 0.2s;" onclick="window.selectVerbs1Option(this, ${idx}, ${oIdx})">
                            <input type="radio" name="verb_q1_${idx}" value="${oIdx}" style="display:none;" ${window.verbsAnswers1[idx] === oIdx ? 'checked' : ''}>
                            <div class="radio-custom" style="width: 18px; height: 18px; border-radius: 50%; border: 2px solid #cbd5e1; background: ${window.verbsAnswers1[idx] === oIdx ? 'var(--primary-color)' : 'transparent'};"></div>
                            <span style="font-weight: 500;">${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp1_${idx}" style="display: none; margin-top: 16px; padding: 12px 16px; border-radius: 8px; font-size: 1.05rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 2: Sửa lỗi sai
        const p2Html = verbsPractice2Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); margin-bottom: 12px; margin-top: 4px;">${q.q}</p>
                        <input type="text" id="verb_input2_${idx}" placeholder="Sửa phần bôi đậm thành..." value="${window.verbsAnswers2[idx] || ''}" style="width: 100%; max-width: 400px; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswers2[${idx}] = this.value; document.getElementById('verbexp2_${idx}').style.display='none'; window.saveProgress(true);">
                    </div>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp2_${idx}" style="display: none; margin-top: 16px; padding: 12px 16px; border-radius: 8px; font-size: 1.05rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 3: Chia động từ trong đoạn văn
        let paraHtml = '';
        verbsPracticeParaData.segments.forEach((seg, idx) => {
            paraHtml += seg.text;
            if (idx < verbsPracticeParaData.answers.length) {
                paraHtml += `<input type="text" id="verb_para_${idx}" class="para-input" placeholder="(${idx + 1})" value="${window.verbsAnswersPara[idx] || ''}" oninput="window.verbsAnswersPara[${idx}] = this.value; document.getElementById('verb_para_explanation').style.display='none'; window.saveProgress(true);" style="width: 120px; padding: 4px 8px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 1.05rem; text-align: center; font-weight: 700; color: var(--primary-color); outline: none; margin: 0 4px; transition: all 0.2s; background: white;">`;
            }
        });

        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                <!-- BÀI 1 -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid var(--primary-color);">
                    <h2 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Sự hòa hợp Chủ - Vị</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn dạng động từ đúng nhất để hoàn thành các câu sau.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
                    </div>
                </div>

                <!-- BÀI 2 -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #f59e0b;">
                    <h2 style="color: #d97706; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Sửa lỗi sai về Thì / Động từ</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Tìm ra lỗi sai trong cách chia động từ (phần bôi đậm) và viết lại dạng đúng.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 2</button>
                    </div>
                </div>

                <!-- BÀI 3 -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #10b981;">
                    <h2 style="color: #059669; margin-bottom: 16px; font-size: 1.4rem;">Bài 3: Chia động từ trong đoạn văn</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chia động từ trong ngoặc theo đúng thì để hoàn thành bức thư sau.</p>
                    <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 1.15rem; line-height: 2.2; color: var(--text-main); font-family: 'Georgia', serif;">
                        ${paraHtml}
                    </div>
                    <div id="verb_para_explanation" style="display: none; margin-top: 24px; padding: 20px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <h3 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.2rem;">GIẢI THÍCH ĐÁP ÁN:</h3>
                        <div id="verb_para_exp_list" style="font-size: 1.1rem; color: var(--text-main); line-height: 1.6;"></div>
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button class="btn-primary" onclick="window.submitVerbs3()" style="padding: 16px 40px; font-size: 1.3rem; border-radius: 30px; box-shadow: 0 4px 15px rgba(16,185,129,0.4); border: none; background: #10b981; color: white; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16,185,129,0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16,185,129,0.4)'">NỘP BÀI 3</button>
                    </div>
                </div>
            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="topic-detail-header" style="margin-bottom: 32px;">
            <button class="btn-back" onclick="renderView('chapter2')" style="margin-bottom: 16px; background: none; border: none; color: var(--primary-color); font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.05rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                QUAY LẠI CHƯƠNG 02
            </button>
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 03: ĐỘNG TỪ (VERBS)</h1>
            ${tabsHtml}
        </div>
        ${contentHtml}
    `;
}

window.selectVerbs1Option = function(el, idx, oIdx) {
    window.verbsAnswers1[idx] = oIdx;
    window.saveProgress(true);
    const exp = document.getElementById(`verbexp1_${idx}`);
    if (exp) exp.style.display = 'none';
    const container = el.parentElement;
    const labels = container.querySelectorAll('label');
    labels.forEach((label, lIdx) => {
        const radioCircle = label.querySelector('.radio-custom');
        const radioInput = label.querySelector('input[type="radio"]');
        if (lIdx === oIdx) {
            label.style.background = '#eff6ff';
            label.style.borderColor = 'var(--primary-color)';
            if (radioCircle) radioCircle.style.background = 'var(--primary-color)';
            if (radioInput) radioInput.checked = true;
        } else {
            label.style.background = '#f8fafc';
            label.style.borderColor = '#e2e8f0';
            if (radioCircle) radioCircle.style.background = 'transparent';
            if (radioInput) radioInput.checked = false;
        }
    });
};

window.checkVerbs1 = function(idx) {
    const ans = window.verbsAnswers1[idx];
    const expDiv = document.getElementById(`verbexp1_${idx}`);
    
    const correctIdx = verbsPractice1Data[idx].answer;
    expDiv.style.display = 'block';
    
    if (ans === correctIdx) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${verbsPractice1Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Đáp án đúng là <b>${verbsPractice1Data[idx].options[correctIdx]}</b>. ${verbsPractice1Data[idx].exp}`;
    }
}

window.checkVerbs2 = function(idx) {
    const userInput = window.verbsAnswers2[idx];
    const expDiv = document.getElementById(`verbexp2_${idx}`);
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = verbsPractice2Data[idx].answer;
    let isCorrect = false;
    
    for (let ans of validAnswers) {
        if (cleanUser === ans.toLowerCase()) {
            isCorrect = true;
            break;
        }
    }
    
    expDiv.style.display = 'block';
    if (isCorrect) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${verbsPractice2Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA ĐÚNG.</b> Tham khảo: <b>${validAnswers[0]}</b>. ${verbsPractice2Data[idx].exp}`;
    }
}

window.checkVerbsParagraph = function() {
    const data = verbsPracticeParaData;
    const expDiv = document.getElementById('verb_para_explanation');
    const expList = document.getElementById('verb_para_exp_list');
    
    let html = '';
    let correctCount = 0;
    
    data.answers.forEach((correctAnswer, idx) => {
        const input = document.getElementById(`verb_para_${idx}`);
        if (!input) return;
        
        const val = input.value.trim();
        const isCorrect = val.toLowerCase() === correctAnswer.toLowerCase();
        
        if (isCorrect) {
            input.style.borderColor = '#22c55e';
            input.style.background = '#f0fdf4';
            input.style.color = '#15803d';
            correctCount++;
            html += `<li style="margin-bottom: 8px;"><span style="color:#15803d; font-weight:bold;">Câu ${idx + 1} (Đúng):</span> Đáp án là <b>${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        } else {
            input.style.borderColor = '#ef4444';
            input.style.background = '#fef2f2';
            input.style.color = '#b91c1c';
            html += `<li style="margin-bottom: 8px;"><span style="color:#b91c1c; font-weight:bold;">Câu ${idx + 1} (Sai):</span> Bạn điền "${val || 'trống'}", đáp án đúng là <b style="color:#15803d;">${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        }
    });
    
    const summaryHtml = `<div style="background: ${correctCount === data.answers.length ? '#f0fdf4' : '#fffbeb'}; border-left: 4px solid ${correctCount === data.answers.length ? '#22c55e' : '#f59e0b'}; padding: 12px; margin-bottom: 16px; border-radius: 4px; font-weight: bold; color: ${correctCount === data.answers.length ? '#166534' : '#b45309'}; font-size: 1.1rem;">
        📊 Kết quả: Bạn làm đúng ${correctCount} / ${data.answers.length} câu.
    </div>`;
    
    expList.innerHTML = summaryHtml + '<ol style="padding-left: 20px; margin: 0;">' + html + '</ol>';
    expDiv.style.display = 'block';
}

window.submitVerbs1 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPractice1Data.forEach((q, idx) => {
        if (window.verbsAnswers1[idx] === null) {
            completed = false;
        } else {
            if (window.verbsAnswers1[idx] === q.answer) correctCount++;
        }
        window.checkVerbs1(idx);
    });
    if (!completed) {
        alert("Vui lòng trả lời hết các câu hỏi trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPractice1Data.length, "KẾT QUẢ BÀI 1 (ĐỘNG TỪ)");
}

window.submitVerbs2 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPractice2Data.forEach((q, idx) => {
        const userInput = window.verbsAnswers2[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            const validAnswers = q.answer;
            let isCorrect = false;
            for (let ans of validAnswers) {
                if (cleanUser === ans.toLowerCase()) {
                    isCorrect = true;
                    break;
                }
            }
            if (isCorrect) correctCount++;
        }
        window.checkVerbs2(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPractice2Data.length, "KẾT QUẢ BÀI 2 (ĐỘNG TỪ)");
}

window.submitVerbs3 = function() {
    const data = verbsPracticeParaData;
    let correctCount = 0;
    let completed = true;
    data.answers.forEach((ans, idx) => {
        const userInput = window.verbsAnswersPara[idx];
        if (!userInput || userInput.trim() === '') {
            completed = false;
        } else {
            const cleanUser = userInput.trim().toLowerCase();
            if (cleanUser === ans.toLowerCase()) {
                correctCount++;
            }
        }
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các ô trống trước khi nộp bài!");
        return;
    }
    window.checkVerbsParagraph();
    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI 3 (ĐỘNG TỪ)");
}

// --- PROGRESS SAVE & LOAD ---
window.saveProgress = function(silent = false) {
    const state = {
        chapter1Topics: typeof topicsData !== 'undefined' ? topicsData.map(t => ({ id: t.id, status: t.status })) : [],
        chapter2Topics: typeof chapter2TopicsData !== 'undefined' ? chapter2TopicsData.map(t => ({ id: t.id, status: t.status })) : [],
        nounsAnswers: window.nounsAnswers,
        nounsTransAnswers: window.nounsTransAnswers,
        nounsDragDropState: window.nounsDragDropState,
        pronounsAnswers1: window.pronounsAnswers1,
        pronounsAnswers2: window.pronounsAnswers2,
        pronounsAnswersPara: window.pronounsAnswersPara,
        verbsAnswers1: window.verbsAnswers1,
        verbsAnswers2: window.verbsAnswers2,
        verbsAnswersPara: window.verbsAnswersPara
    };
    localStorage.setItem('studentProgress', JSON.stringify(state));
    if(!silent) alert('✅ Tiến độ học tập của bạn đã được lưu lại!');
}

window.clearProgress = function() {
    if (confirm('⚠️ CẢNH BÁO: Bạn có chắc chắn muốn xóa toàn bộ lịch sử học tập và làm bài không? Hành động này không thể hoàn tác!')) {
        localStorage.removeItem('studentProgress');
        alert('🗑 Đã xóa toàn bộ lịch sử!');
        location.reload();
    }
}

window.loadProgress = function() {
    const saved = localStorage.getItem('studentProgress');
    if (!saved) return;
    try {
        const state = JSON.parse(saved);
        if (state.chapter1Topics && typeof topicsData !== 'undefined') {
            state.chapter1Topics.forEach(st => {
                const t = topicsData.find(x => x.id === st.id);
                if (t) t.status = st.status;
            });
        }
        if (state.chapter2Topics && typeof chapter2TopicsData !== 'undefined') {
            state.chapter2Topics.forEach(st => {
                const t = chapter2TopicsData.find(x => x.id === st.id);
                if (t) t.status = st.status;
            });
        }
        if (state.nounsDragDropState) window.nounsDragDropState = state.nounsDragDropState;
        if (state.nounsAnswers) window.nounsAnswers = state.nounsAnswers;
        if (state.nounsTransAnswers) window.nounsTransAnswers = state.nounsTransAnswers;
        if (state.pronounsAnswers1) window.pronounsAnswers1 = state.pronounsAnswers1;
        if (state.pronounsAnswers2) window.pronounsAnswers2 = state.pronounsAnswers2;
        if (state.pronounsAnswersPara) window.pronounsAnswersPara = state.pronounsAnswersPara;
        if (state.verbsAnswers1) window.verbsAnswers1 = state.verbsAnswers1;
        if (state.verbsAnswers2) window.verbsAnswers2 = state.verbsAnswers2;
        if (state.verbsAnswersPara) window.verbsAnswersPara = state.verbsAnswersPara;
    } catch(e) {
        console.error('Error loading progress', e);
    }
}
