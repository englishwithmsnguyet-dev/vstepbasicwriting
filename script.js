
window.checkSentencePunctuation = function(rawVal, isContentCorrect) {
    if (!isContentCorrect) return { valid: false, isNear: false, message: '' };
    const trimmed = (rawVal || '').trim();
    if (!trimmed) return { valid: false, isNear: false, message: 'empty' };
    
    const firstChar = trimmed.charAt(0);
    const isFirstCharLetter = /[a-zA-Z]/.test(firstChar);
    const isCapitalized = isFirstCharLetter ? (firstChar === firstChar.toUpperCase()) : true;
    const hasDot = trimmed.endsWith('.');
    
    if (isCapitalized && hasDot) {
        return { valid: true, isNear: false, message: 'perfect' };
    } else if (!isCapitalized && !hasDot) {
        return { valid: false, isNear: true, message: '⚠️ <b>Gần đúng!</b> Bạn cần viết hoa chữ cái đầu câu và có dấu chấm ở cuối câu nhé!' };
    } else if (!isCapitalized) {
        return { valid: false, isNear: true, message: '⚠️ <b>Gần đúng!</b> Bạn cần viết hoa chữ cái đầu câu nhé!' };
    } else {
        return { valid: false, isNear: true, message: '⚠️ <b>Gần đúng!</b> Cuối câu bắt buộc phải có dấu chấm nhé!' };
    }
};

window.normalizeText = function(text) {
    if (!text) return '';
    // Fix extra spaces before punctuation (e.g. 'word .' -> 'word.')
    let s = text.toString().trim().toLowerCase().replace(/\s+([.,!?;:])/g, '$1').replace(/\s+/g, ' ');
    return s;
};


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
    if (!el) return;
    
    // find nearest zone container
    let container = ev.target;
    while(container && !container.id.startsWith('zone-')) {
        container = container.parentElement;
    }
    if(!container) container = ev.target;
    
    if (container.id === 'zone-countable' || container.id === 'zone-uncountable' || container.id === 'zone-countable-extra' || container.id === 'zone-uncountable-extra') {
        container.appendChild(el);
    }
}
window.dropPool = function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var el = document.getElementById(data);
    if (!el) return;
    
    let container = ev.target;
    while(container && !container.id.startsWith('words-pool')) {
        container = container.parentElement;
    }
    if(!container) container = ev.target;
    container.appendChild(el);
}
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
        desc: 'Đây là cấu trúc cơ bản nhất của câu chủ động. Trong đó, Chủ ngữ (S) thực hiện một hành động tác động trực tiếp lên một đối tượng là Tân ngữ (O).',
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
        desc: 'Đây là cấu trúc dùng để miêu tả tính chất, trạng thái, hoặc định danh lại cho Chủ ngữ. Bổ ngữ (C) đóng vai trò cung cấp thông tin chi tiết cho Chủ ngữ.',
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
        desc: 'Đây là cấu trúc tối giản nhất trong tiếng Anh. Chỉ cần một Chủ ngữ (S) thực hiện hành động (V) là câu đã diễn đạt trọn vẹn ý nghĩa.',
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
        desc: 'Đây là cấu trúc mở rộng của Dạng 1, cung cấp thêm thông tin về bối cảnh (thời gian, địa điểm, cách thức, lý do...) của hành động.',
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
        desc: 'Đây là cấu trúc phức hợp thể hiện việc Chủ ngữ thực hiện hành động khiến cho Tân ngữ thay đổi trạng thái, hoặc để đưa ra đánh giá, nhận xét về Tân ngữ đó.',
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
        desc: 'Đây là cấu trúc mang ý nghĩa "trao chuyển" (cho, tặng, gửi ai cái gì). Đặc trưng bởi việc sử dụng hai Tân ngữ đồng thời để làm rõ đối tượng tiếp nhận.',
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
    { id: 'chapter2', label: 'CHƯƠNG 02: TỪ LOẠI TRONG TIẾNG ANH', icon: '<path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path><path d="M12 22v-6.5"></path><path d="M22 8.5l-10 7-10-7"></path><path d="M2 15.5l10-7 10 7"></path>' },
    { id: 'practice', label: 'TỰ LUYỆN TẬP', icon: '<circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon>' }
];

const topicsData = [
    {
        id: 'components',
        title: 'CHỦ ĐIỂM 01: CÁC THÀNH PHẦN CÂU CƠ BẢN',
        desc: 'Tìm hiểu 5 thành phần cấu tạo nên một câu: chủ ngữ, động từ, tân ngữ, bổ ngữ, trạng ngữ.',
        status: 'locked'
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

window.toggleMobileSidebar = function(show) {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar || !backdrop) return;
    
    if (show) {
        sidebar.classList.add('mobile-open');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.remove('mobile-open');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
    }
};

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
            if (window.innerWidth <= 768) {
                window.toggleMobileSidebar(false);
            }
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
                    <div style="margin-bottom: 24px; text-align: center;">Chào mừng bạn đến với hệ thống học tập của <strong>MISS NGUYET</strong>.</div>
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
    else if (viewId === 'practice') {
        if (typeof renderSelfPracticeView === 'function') {
            renderSelfPracticeView();
        } else {
            renderPracticeDetail();
        }
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
        title: "🚀 1. Động từ chỉ hành động (Action Verbs)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Là những động từ diễn tả một <b>hành động vật lý</b> hoặc <b>nhận thức</b> của Chủ ngữ.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                <div style="background: #eff6ff; padding: 16px; border-radius: 12px; border: 1px solid #bfdbfe;">
                    <div style="font-weight: bold; color: #1d4ed8; margin-bottom: 8px;">🏃‍♂️ Hành động vật lý</div>
                    <ul style="margin: 0; padding-left: 20px; color: #1e3a8a;">
                        <li>run, eat, write</li>
                        <li>buy, build, work</li>
                    </ul>
                </div>
                <div style="background: #fdf4ff; padding: 16px; border-radius: 12px; border: 1px solid #fbcfe8;">
                    <div style="font-weight: bold; color: #a21caf; margin-bottom: 8px;">🧠 Nhận thức / Suy nghĩ</div>
                    <ul style="margin: 0; padding-left: 20px; color: #701a75;">
                        <li>think, know</li>
                        <li>believe, understand</li>
                    </ul>
                </div>
            </div>
            <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #94a3b8; border-radius: 4px;">
                <b>Ví dụ minh họa:</b><br>
                • The company <b style="color: #2563eb;">builds</b> a new office.<br>
                • I <b style="color: #9333ea;">believe</b> this is the best solution.
            </div>
        </div>`
    },
    {
        title: "🔗 2. Động từ liên kết (Linking Verbs)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Không diễn tả hành động, mà dùng để <b>nối Chủ ngữ với Đặc điểm/Trạng thái</b> của nó (thường là Tính từ hoặc Danh từ).</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 24px 0;">
                <div style="background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 12px 16px; border-bottom: 1px solid #bfdbfe;">
                        <h4 style="color: #1e40af; font-size: 1.1rem; font-weight: 800; margin: 0; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                            Nhóm TO BE
                        </h4>
                    </div>
                    <div style="padding: 16px;">
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">is</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">am</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">are</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">was</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">were</span>
                        </div>
                        <div style="background: #f8fafc; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #e2e8f0; margin-top: 12px;">
                            <i style="color: #64748b; font-size: 0.95rem;">VD: She is a teacher. / They are happy.</i>
                        </div>
                    </div>
                </div>

                <div style="background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="background: linear-gradient(135deg, #fdf4ff, #fae8ff); padding: 12px 16px; border-bottom: 1px solid #f5d0fe;">
                        <h4 style="color: #86198f; font-size: 1.1rem; font-weight: 800; margin: 0; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                            Chỉ sự biến đổi
                        </h4>
                    </div>
                    <div style="padding: 16px;">
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">become</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">get</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">turn</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">grow</span>
                        </div>
                        <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; font-size: 0.95rem; color: #64748b; font-style: italic; border-left: 3px solid #cbd5e1;">
                            VD: The weather <b style="color: #475569;">gets</b> cold.
                        </div>
                    </div>
                </div>

                <div style="background: white; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 12px 16px; border-bottom: 1px solid #bbf7d0;">
                        <h4 style="color: #15803d; font-size: 1.1rem; font-weight: 800; margin: 0; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            Chỉ cảm giác/nhận thức
                        </h4>
                    </div>
                    <div style="padding: 16px;">
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">feel</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">look</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">sound</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">seem</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">smell</span>
                            <span style="background: #f1f5f9; color: #475569; padding: 4px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #e2e8f0;">taste</span>
                        </div>
                        <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; font-size: 0.95rem; color: #64748b; font-style: italic; border-left: 3px solid #cbd5e1;">
                            VD: She <b style="color: #475569;">looks</b> tired.
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 16px; padding: 24px; background: linear-gradient(135deg, #fff1f2, #fef2f2); border-left: 6px solid #ef4444; border-radius: 12px; box-shadow: 0 4px 12px rgba(220,38,38,0.08);">
                <div style="color: #b91c1c; font-size: 1.25rem; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                    LƯU Ý CỰC KỲ QUAN TRỌNG
                </div>
                <p style="color: #7f1d1d; margin-bottom: 20px; font-size: 1.05rem;">
                    Sau động từ liên kết, chúng ta cộng với <b>TÍNH TỪ (Adjective)</b> hoặc <b>DANH TỪ (Noun)</b>, 
                    <span style="background: #fecaca; padding: 2px 6px; border-radius: 4px; font-weight: 700;">KHÔNG</span> dùng Trạng từ (Adverb).
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; display: flex; align-items: center; flex-wrap: wrap; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                        <div style="color: #ef4444; font-weight: 500; text-decoration: line-through; opacity: 0.8;">She looks beautifully.</div>
                        <div style="color: #cbd5e1;">&rarr;</div>
                        <div style="color: #059669; font-weight: 700; background: #ecfdf5; padding: 4px 12px; border-radius: 20px; display: flex; align-items: center; gap: 6px;">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            She looks beautiful.
                        </div>
                        <i style="color: #64748b; font-size: 0.95rem;">(Tính từ)</i>
                    </div>
                    
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; display: flex; align-items: center; flex-wrap: wrap; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                        <div style="color: #059669; font-weight: 700; background: #ecfdf5; padding: 4px 12px; border-radius: 20px; display: flex; align-items: center; gap: 6px;">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            She became a teacher.
                        </div>
                        <i style="color: #64748b; font-size: 0.95rem;">(Danh từ)</i>
                    </div>
                </div>
            </div>
        </div>`
    },
    {
                        title: "🔄 3. Sự thay đổi của Động từ (Verb Transformations)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p style="margin-bottom: 24px; font-size: 1.15rem; color: #475569;">
                Trong Tiếng Anh, <b style="color: var(--primary-color);">Động từ luôn thay đổi hình thái</b> phụ thuộc vào Thì (Tenses) và Chủ ngữ (Subject). Dưới đây là cách chia động từ chi tiết cho 5 Thì cơ bản nhất trong VSTEP Writing:
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 24px;">
                
                <!-- 1. HTĐ -->
                <div style="background: white; border-radius: 16px; border: 1px solid #fed7aa; padding: 24px; box-shadow: 0 4px 12px rgba(234,88,12,0.05); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #ea580c;"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; border-bottom: 2px dashed #ffedd5; padding-bottom: 16px;">
                        <div>
                            <h4 style="color: #c2410c; font-size: 1.35rem; font-weight: 800; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                                <span style="background: #ea580c; color: white; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1.1rem;">1</span>
                                Hiện tại đơn
                            </h4>
                            <div style="color: #9a3412; font-size: 1rem; font-style: italic;">Sự thật, thói quen</div>
                        </div>
                        <div style="background: #fff7ed; border: 1px solid #fdba74; padding: 6px 16px; border-radius: 30px; color: #ea580c; font-weight: bold; font-family: monospace; font-size: 1.15rem; box-shadow: inset 0 2px 4px rgba(234,88,12,0.05);">am/is/are &nbsp;|&nbsp; Vo / V(s/es)</div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
                        <!-- TO-BE -->
                        <div style="background: #fff7ed; border-radius: 12px; padding: 16px; border: 1px solid #ffedd5;">
                            <div style="font-weight: 800; color: #9a3412; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                                Động từ TO-BE (am / is / are)
                            </div>
                            
                            <div style="display: grid; gap: 12px;">
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">I</span>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #ea580c; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">am</div>
                                    </div>
                                </div>
                                
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">He</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">She</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">It</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số ít</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ không đếm được</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng chỉ có 1</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Đại từ bất định (someone, everyone, no one...)</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #ea580c; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">is</div>
                                    </div>
                                </div>

                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">You</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">We</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">They</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số nhiều</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng từ 2 trở lên</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #ea580c; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">are</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- THƯỜNG -->
                        <div style="background: #fff7ed; border-radius: 12px; padding: 16px; border: 1px solid #ffedd5;">
                            <div style="font-weight: 800; color: #9a3412; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                                Động từ THƯỜNG (Vo / V(s/es))
                            </div>
                            
                            <div style="display: grid; gap: 12px;">
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">I</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">You</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">We</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">They</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số nhiều</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng từ 2 trở lên</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ Động từ</div>
                                        <div style="background: #ea580c; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">giữ nguyên (Vo)</div>
                                    </div>
                                </div>
                                
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">He</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">She</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">It</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số ít</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ không đếm được</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng chỉ có 1</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Đại từ bất định (someone, everyone, no one...)</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ Động từ</div>
                                        <div style="background: #ea580c; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">thêm s/es</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. HTTD -->
                <div style="background: white; border-radius: 16px; border: 1px solid #99f6e4; padding: 24px; box-shadow: 0 4px 12px rgba(13,148,136,0.05); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #0d9488;"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; border-bottom: 2px dashed #ccfbf1; padding-bottom: 16px;">
                        <div>
                            <h4 style="color: #0f766e; font-size: 1.35rem; font-weight: 800; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                                <span style="background: #0d9488; color: white; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1.1rem;">2</span>
                                Hiện tại tiếp diễn
                            </h4>
                            <div style="color: #115e59; font-size: 1rem; font-style: italic;">Hành động đang xảy ra</div>
                        </div>
                        <div style="background: #f0fdfa; border: 1px solid #5eead4; padding: 6px 16px; border-radius: 30px; color: #0d9488; font-weight: bold; font-family: monospace; font-size: 1.15rem; box-shadow: inset 0 2px 4px rgba(13,148,136,0.05);">am/is/are + V-ing</div>
                    </div>
                    
                    <div style="background: #f0fdfa; border-radius: 12px; padding: 16px; border: 1px solid #ccfbf1;">
                        <div style="display: grid; gap: 12px;">
                            <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                    <div style="display: flex; gap: 6px;">
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">I</span>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                    <div style="color: #64748b; font-weight: bold;">+</div>
                                    <div style="color: #0d9488; font-weight: bold; font-size: 1.1rem;"><span style="background: #0d9488; color: white; padding: 4px 14px; border-radius: 20px;">am</span> &nbsp;+ V-ing</div>
                                </div>
                            </div>
                            
                            <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                    <div style="display: flex; gap: 6px;">
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">He</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">She</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">It</span>
                                    </div>
                                    <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số ít</span>
                                    <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ không đếm được</span>
                                    <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng chỉ có 1</span>
                                    <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Đại từ bất định (someone, everyone, no one...)</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                    <div style="color: #64748b; font-weight: bold;">+</div>
                                    <div style="color: #0d9488; font-weight: bold; font-size: 1.1rem;"><span style="background: #0d9488; color: white; padding: 4px 14px; border-radius: 20px;">is</span> &nbsp;+ V-ing</div>
                                </div>
                            </div>

                            <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                    <div style="display: flex; gap: 6px;">
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">You</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">We</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">They</span>
                                    </div>
                                    <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số nhiều</span>
                                    <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng từ 2 trở lên</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                    <div style="color: #64748b; font-weight: bold;">+</div>
                                    <div style="color: #0d9488; font-weight: bold; font-size: 1.1rem;"><span style="background: #0d9488; color: white; padding: 4px 14px; border-radius: 20px;">are</span> &nbsp;+ V-ing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. QKĐ -->
                <div style="background: white; border-radius: 16px; border: 1px solid #cbd5e1; padding: 24px; box-shadow: 0 4px 12px rgba(71,85,105,0.05); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #475569;"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; border-bottom: 2px dashed #e2e8f0; padding-bottom: 16px;">
                        <div>
                            <h4 style="color: #334155; font-size: 1.35rem; font-weight: 800; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                                <span style="background: #475569; color: white; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1.1rem;">3</span>
                                Quá khứ đơn
                            </h4>
                            <div style="color: #475569; font-size: 1rem; font-style: italic;">Sự việc đã kết thúc ở QK</div>
                        </div>
                        <div style="background: #f8fafc; border: 1px solid #94a3b8; padding: 6px 16px; border-radius: 30px; color: #475569; font-weight: bold; font-family: monospace; font-size: 1.15rem; box-shadow: inset 0 2px 4px rgba(71,85,105,0.05);">was/were &nbsp;|&nbsp; V-ed / V2</div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
                        <!-- TO-BE -->
                        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0;">
                            <div style="font-weight: 800; color: #334155; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                                Động từ TO-BE (was / were)
                            </div>
                            
                            <div style="display: grid; gap: 12px;">
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">I</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">He</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">She</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">It</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số ít</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ không đếm được</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng chỉ có 1</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Đại từ bất định (someone, everyone, no one...)</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #475569; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">was</div>
                                    </div>
                                </div>

                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">You</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">We</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">They</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số nhiều</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng từ 2 trở lên</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #475569; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 50px; text-align: center;">were</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- THƯỜNG -->
                        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0;">
                            <div style="font-weight: 800; color: #334155; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                                Động từ THƯỜNG (V-ed / V2)
                            </div>
                            
                            <div style="background: white; border-radius: 8px; padding: 24px 16px; text-align: center; border: 2px dashed #cbd5e1; box-shadow: 0 1px 3px rgba(0,0,0,0.04); height: calc(100% - 46px); display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                <div style="color: #475569; font-size: 1.05rem; line-height: 1.6; font-weight: 500; margin-bottom: 16px;">
                                    <b>Tất cả các ngôi</b> đều dùng chung một dạng (không phân biệt số ít hay số nhiều):
                                </div>
                                <div style="display: inline-block; background: #475569; color: white; padding: 8px 24px; border-radius: 30px; font-weight: bold; font-size: 1.2rem; box-shadow: 0 2px 4px rgba(71,85,105,0.2);">V-ed / V2</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. HTHT -->
                <div style="background: white; border-radius: 16px; border: 1px solid #fbcfe8; padding: 24px; box-shadow: 0 4px 12px rgba(192,38,211,0.05); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #c026d3;"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; border-bottom: 2px dashed #fce7f3; padding-bottom: 16px;">
                        <div>
                            <h4 style="color: #86198f; font-size: 1.35rem; font-weight: 800; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                                <span style="background: #c026d3; color: white; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1.1rem;">4</span>
                                Hiện tại hoàn thành
                            </h4>
                            <div style="color: #701a75; font-size: 1rem; font-style: italic;">Bắt đầu ở QK, kéo dài đến HT</div>
                        </div>
                        <div style="background: #fdf4ff; border: 1px solid #f3a8a8; padding: 6px 16px; border-radius: 30px; color: #c026d3; font-weight: bold; font-family: monospace; font-size: 1.15rem; box-shadow: inset 0 2px 4px rgba(192,38,211,0.05);">have/has been &nbsp;|&nbsp; have/has + V3/ed</div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
                        <!-- TO-BE -->
                        <div style="background: #fdf4ff; border-radius: 12px; padding: 16px; border: 1px solid #fae8ff;">
                            <div style="font-weight: 800; color: #86198f; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                                Động từ TO-BE (have/has been)
                            </div>
                            
                            <div style="display: grid; gap: 12px;">
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">I</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">You</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">We</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">They</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số nhiều</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng từ 2 trở lên</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #c026d3; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 90px; text-align: center;">have been</div>
                                    </div>
                                </div>

                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">He</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">She</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">It</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số ít</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ không đếm được</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng chỉ có 1</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Đại từ bất định (someone, everyone, no one...)</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="background: #c026d3; color: white; padding: 4px 14px; border-radius: 20px; font-weight: bold; min-width: 90px; text-align: center;">has been</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- THƯỜNG -->
                        <div style="background: #fdf4ff; border-radius: 12px; padding: 16px; border: 1px solid #fae8ff;">
                            <div style="font-weight: 800; color: #86198f; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                                Động từ THƯỜNG (have/has + V3/ed)
                            </div>
                            
                            <div style="display: grid; gap: 12px;">
                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">I</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">You</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">We</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">They</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số nhiều</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng từ 2 trở lên</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="color: #c026d3; font-weight: bold; font-size: 1.1rem;"><span style="background: #c026d3; color: white; padding: 4px 12px; border-radius: 20px;">have</span> &nbsp;+ V3/ed</div>
                                    </div>
                                </div>

                                <div style="background: white; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
                                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px;">
                                        <div style="display: flex; gap: 6px;">
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">He</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">She</span>
                                            <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">It</span>
                                        </div>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ chung số ít</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ không đếm được</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Danh từ riêng chỉ có 1</span>
                                        <span style="background: #f1f5f9; color: #475569; padding: 2px 10px; border-radius: 6px; font-weight: bold; border: 1px solid #e2e8f0;">Đại từ bất định (someone, everyone, no one...)</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 12px; border-top: 1px dashed #f1f5f9; padding-top: 12px;">
                                        <div style="color: #64748b; font-weight: bold;">➡️ đi với</div>
                                        <div style="color: #c026d3; font-weight: bold; font-size: 1.1rem;"><span style="background: #c026d3; color: white; padding: 4px 12px; border-radius: 20px;">has</span> &nbsp;+ V3/ed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. TLĐ -->
                <div style="background: white; border-radius: 16px; border: 1px solid #bfdbfe; padding: 24px; box-shadow: 0 4px 12px rgba(37,99,235,0.05); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #2563eb;"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; border-bottom: 2px dashed #dbeafe; padding-bottom: 16px;">
                        <div>
                            <h4 style="color: #1d4ed8; font-size: 1.35rem; font-weight: 800; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px;">
                                <span style="background: #2563eb; color: white; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1.1rem;">5</span>
                                Tương lai đơn
                            </h4>
                            <div style="color: #1e3a8a; font-size: 1rem; font-style: italic;">Sự việc sẽ xảy ra</div>
                        </div>
                        <div style="background: #eff6ff; border: 1px solid #93c5fd; padding: 6px 16px; border-radius: 30px; color: #2563eb; font-weight: bold; font-family: monospace; font-size: 1.15rem; box-shadow: inset 0 2px 4px rgba(37,99,235,0.05);">will be &nbsp;|&nbsp; will + Vo</div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
                        <!-- TO-BE -->
                        <div style="background: #eff6ff; border-radius: 12px; padding: 16px; border: 1px solid #dbeafe;">
                            <div style="font-weight: 800; color: #1e3a8a; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                                Động từ TO-BE (will be)
                            </div>
                            <div style="background: white; border-radius: 8px; padding: 24px 16px; text-align: center; border: 2px dashed #93c5fd; box-shadow: 0 1px 3px rgba(0,0,0,0.04); height: calc(100% - 46px); display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                <div style="color: #475569; font-size: 1.05rem; line-height: 1.6; font-weight: 500; margin-bottom: 16px;">
                                    <b>Tất cả các ngôi</b> đều dùng chung một dạng:
                                </div>
                                <div style="display: inline-block; background: #2563eb; color: white; padding: 8px 24px; border-radius: 30px; font-weight: bold; font-size: 1.2rem; box-shadow: 0 2px 4px rgba(37,99,235,0.2);">will be</div>
                            </div>
                        </div>

                        <!-- THƯỜNG -->
                        <div style="background: #eff6ff; border-radius: 12px; padding: 16px; border: 1px solid #dbeafe;">
                            <div style="font-weight: 800; color: #1e3a8a; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.1rem;">
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                                Động từ THƯỜNG (will + Vo)
                            </div>
                            <div style="background: white; border-radius: 8px; padding: 24px 16px; text-align: center; border: 2px dashed #93c5fd; box-shadow: 0 1px 3px rgba(0,0,0,0.04); height: calc(100% - 46px); display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                <div style="color: #475569; font-size: 1.05rem; line-height: 1.6; font-weight: 500; margin-bottom: 16px;">
                                    <b>Tất cả các ngôi</b> đều dùng chung một dạng:
                                </div>
                                <div style="display: inline-flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: bold; color: #2563eb;">
                                    <span style="background: #2563eb; color: white; padding: 8px 24px; border-radius: 30px; box-shadow: 0 2px 4px rgba(37,99,235,0.2);">will</span>
                                    <span style="margin-left: 12px;">+ Vo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    },
    {
        title: "🌟 4. Động từ khiếm khuyết (Modal Verbs)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p style="margin-bottom: 16px;">
                Động từ khiếm khuyết là những động từ đặc biệt dùng để bổ nghĩa cho động từ chính, diễn tả <b>khả năng, sự bắt buộc, lời khuyên, sự cho phép hoặc dự đoán</b>. 
                Chúng <b>không bao giờ đứng một mình</b> mà luôn đi kèm với một động từ nguyên mẫu không "to" <b>(Vo)</b>.
            </p>

            <!-- CẤU TRÚC CHUNG -->
            <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); border: 2px solid #cbd5e1; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
                <div style="font-weight: 800; color: #1e293b; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <span style="background: #3b82f6; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.95rem;">📋</span>
                    CẤU TRÚC NGỮ PHÁP CHUNG
                </div>
                <div style="display: grid; gap: 10px; font-family: monospace; font-size: 1.05rem;">
                    <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <b style="color: #16a34a;">(+) Khẳng định:</b> <span style="color: #2563eb; font-weight: bold;">S + Modal Verb + Vo</span>
                        <span style="color: #64748b; font-family: sans-serif; font-size: 0.95rem; margin-left: 10px;">(VD: She <b style="color: #2563eb;">can speak</b> three languages.)</span>
                    </div>
                    <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <b style="color: #dc2626;">(-) Phủ định:</b> <span style="color: #2563eb; font-weight: bold;">S + Modal Verb + not + Vo</span>
                        <span style="color: #64748b; font-family: sans-serif; font-size: 0.95rem; margin-left: 10px;">(VD: We <b style="color: #2563eb;">should not waste</b> time.)</span>
                    </div>
                    <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <b style="color: #d97706;">(?) Nghi vấn:</b> <span style="color: #2563eb; font-weight: bold;">Modal Verb + S + Vo?</span>
                        <span style="color: #64748b; font-family: sans-serif; font-size: 0.95rem; margin-left: 10px;">(VD: <b style="color: #2563eb;">May I ask</b> a question?)</span>
                    </div>
                </div>
                <div style="font-size: 0.95rem; color: #475569; margin-top: 10px; font-style: italic;">
                    * Lưu ý: Tất cả các ngôi (I, you, he, she, they, we, danh từ số ít/số nhiều) đều dùng chung một dạng Modal Verb, <b>không thêm -s/-es</b>.
                </div>
            </div>

            <!-- BẢNG PHÂN LOẠI CHI TIẾT -->
            <div style="margin-bottom: 24px;">
                <h4 style="color: #0f172a; font-size: 1.2rem; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <span style="color: #ec4899;">📌</span> CÁC ĐỘNG TỪ KHIẾM KHUYẾT PHỔ BIẾN TRONG BÀI THI VSTEP
                </h4>
                
                <div style="display: grid; gap: 16px;">
                    
                    <!-- 1. CAN / COULD / BE ABLE TO -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; border-left: 6px solid #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                            <div style="font-weight: 800; color: #1d4ed8; font-size: 1.15rem;">1. Can / Could / Be able to</div>
                            <span style="background: #eff6ff; color: #1d4ed8; font-size: 0.9rem; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Khả năng, năng lực</span>
                        </div>
                        <ul style="margin: 0; padding-left: 20px; display: grid; gap: 8px; color: #334155;">
                            <li><b>Can + Vo:</b> Có thể làm gì ở hiện tại / tương lai.<br><i style="color: #64748b;">VD: Reading books <b>can help</b> you broaden your knowledge. (Đọc sách có thể giúp bạn mở rộng kiến thức.)</i></li>
                            <li><b>Could + Vo:</b> Có thể làm gì trong quá khứ / Lời yêu cầu lịch sự.<br><i style="color: #64748b;">VD: In the past, people <b>could not communicate</b> as easily as today.</i></li>
                            <li><b>Be able to + Vo:</b> Có khả năng (sau nỗ lực, dùng được cho tất cả các thì như *will be able to*).<br><i style="color: #64748b;">VD: Students <b>will be able to improve</b> their writing skills after this course.</i></li>
                        </ul>
                    </div>

                    <!-- 2. SHOULD / OUGHT TO / HAD BETTER -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; border-left: 6px solid #10b981; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                            <div style="font-weight: 800; color: #047857; font-size: 1.15rem;">2. Should / Ought to / Had better</div>
                            <span style="background: #ecfdf5; color: #047857; font-size: 0.9rem; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Lời khuyên, đề xuất giải pháp (Rất phổ biến trong Viết luận)</span>
                        </div>
                        <ul style="margin: 0; padding-left: 20px; display: grid; gap: 8px; color: #334155;">
                            <li><b>Should / Ought to + Vo:</b> Nên làm gì (đưa ra lời khuyên hoặc giải pháp).<br><i style="color: #64748b;">VD: The government <b>should invest</b> more money in public transport. (Chính phủ nên đầu tư nhiều tiền hơn vào giao thông công cộng.)</i></li>
                            <li><b>Should not (Shouldn't) + Vo:</b> Không nên làm gì.<br><i style="color: #64748b;">VD: Young people <b>should not spend</b> too much time on social media.</i></li>
                            <li><b>Had better + Vo:</b> Tốt hơn hết nên làm gì (mang tính cảnh báo hậu quả).<br><i style="color: #64748b;">VD: You <b>had better submit</b> the assignment before the deadline.</i></li>
                        </ul>
                    </div>

                    <!-- 3. MUST / HAVE TO -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; border-left: 6px solid #f59e0b; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                            <div style="font-weight: 800; color: #b45309; font-size: 1.15rem;">3. Must / Have to</div>
                            <span style="background: #fffbeb; color: #b45309; font-size: 0.9rem; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Sự bắt buộc, sự cần thiết</span>
                        </div>
                        <ul style="margin: 0; padding-left: 20px; display: grid; gap: 8px; color: #334155;">
                            <li><b>Must + Vo:</b> Phải làm gì (bắt buộc xuất phát từ ý thức chủ quan của người nói).<br><i style="color: #64748b;">VD: I <b>must study</b> harder to pass the VSTEP exam.</i></li>
                            <li><b>Have to + Vo:</b> Phải làm gì (bắt buộc do luật lệ, nội quy hoặc hoàn cảnh khách quan).<br><i style="color: #64748b;">VD: Students <b>have to wear</b> uniforms on Mondays. (Học sinh phải mặc đồng phục vào thứ Hai.)</i></li>
                        </ul>
                        
                        <!-- PHÂN BIỆT PHỦ ĐỊNH CỰC KỲ QUAN TRỌNG -->
                        <div style="margin-top: 12px; background: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; padding: 12px;">
                            <b style="color: #be123c;">⚠️ PHÂN BIỆT CỰC KỲ QUAN TRỌNG KHI PHỦ ĐỊNH:</b>
                            <div style="display: grid; gap: 6px; margin-top: 6px; font-size: 0.98rem;">
                                <div>• <b style="color: #e11d48;">Must not (Mustn't):</b> <b>CẤM</b>, tuyệt đối không được làm.<br><i style="color: #64748b;">VD: Candidates <b>must not use</b> smartphones in the exam room.</i></div>
                                <div>• <b style="color: #0284c7;">Don't / Doesn't have to:</b> <b>KHÔNG CẦN PHẢI</b> làm (vẫn có thể làm nếu thích).<br><i style="color: #64748b;">VD: You <b>don't have to pay</b> for this service because it is free.</i></div>
                            </div>
                        </div>
                    </div>

                    <!-- 4. MAY / MIGHT -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; border-left: 6px solid #8b5cf6; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                            <div style="font-weight: 800; color: #6d28d9; font-size: 1.15rem;">4. May / Might</div>
                            <span style="background: #f5f3ff; color: #6d28d9; font-size: 0.9rem; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Dự đoán khả năng xảy ra (Không chắc chắn)</span>
                        </div>
                        <ul style="margin: 0; padding-left: 20px; display: grid; gap: 8px; color: #334155;">
                            <li><b>May / Might + Vo:</b> Có thể / Có lẽ sẽ xảy ra.<br><i style="color: #64748b;">VD: Air pollution <b>may cause</b> severe respiratory diseases. (Ô nhiễm không khí có thể gây ra các bệnh hô hấp nghiêm trọng.)</i></li>
                            <li><i>* Lưu ý: "May" diễn tả khả năng xảy ra cao hơn (khoảng 50%), còn "Might" diễn tả khả năng thấp hơn (khoảng 30%).</i></li>
                        </ul>
                    </div>

                    <!-- 5. WILL / WOULD -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; border-left: 6px solid #0284c7; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
                            <div style="font-weight: 800; color: #0369a1; font-size: 1.15rem;">5. Will / Would</div>
                            <span style="background: #f0f9ff; color: #0369a1; font-size: 0.9rem; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Ý định tương lai, lời hứa & Đề xuất lịch sự</span>
                        </div>
                        <ul style="margin: 0; padding-left: 20px; display: grid; gap: 8px; color: #334155;">
                            <li><b>Will + Vo:</b> Sẽ (ý định quyết định ngay lúc nói hoặc dự đoán tương lai).<br><i style="color: #64748b;">VD: Technology <b>will continue</b> to change our lives in the future.</i></li>
                            <li><b>Would + Vo:</b> Dùng trong câu điều kiện loại 2, 3 hoặc đề xuất, kiến nghị lịch sự trong viết thư/luận.<br><i style="color: #64748b;">VD: I <b>would recommend</b> that the manager improve the service quality.</i></li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- 5 QUY TẮC SỬ DỤNG TRONG VSTEP -->
            <div style="background: #fffbeb; border: 2px dashed #f59e0b; border-radius: 12px; padding: 22px; margin-bottom: 24px;">
                <div style="color: #b45309; font-weight: 800; font-size: 1.25rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 1.4rem;">⚡</span> 5 QUY TẮC SỬ DỤNG BẮT BUỘC NHỚ KHI VIẾT CÂU
                </div>
                
                <div style="display: grid; gap: 16px; color: #92400e; font-size: 1.05rem; line-height: 1.6;">
                    
                    <!-- QUY TẮC 1 -->
                    <div style="background: white; border-radius: 10px; padding: 14px 16px; border-left: 5px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                        <b style="color: #b45309; font-size: 1.1rem;">1. Không chia theo thì (Không biến đổi theo thời gian):</b>
                        <div style="margin-top: 6px; color: #334155;">
                            Phần lớn ĐTKK (<i>should, must, ought to, had better...</i>) <b>không có dạng quá khứ hay tương lai</b>, luôn giữ nguyên hình thức.
                        </div>
                        <div style="margin-top: 8px; background: #fefce8; padding: 10px; border-radius: 6px; border: 1px solid #fef08a; font-size: 0.98rem;">
                            <b style="color: #854d0e;">📌 Các trường hợp ngoại lệ khi lùi thì / diễn tả quá khứ:</b>
                            <ul style="margin: 4px 0 0 0; padding-left: 20px; display: grid; gap: 4px; color: #713f12;">
                                <li><b>can ➔ could:</b> Diễn tả khả năng trong quá khứ hoặc câu điều kiện/yêu cầu lịch sự. <br><i style="color: #64748b;">(VD: In the past, people <b>could not</b> communicate instantly.)</i></li>
                                <li><b>have to ➔ had to:</b> Diễn tả sự bắt buộc trong quá khứ. <br><i style="color: #64748b;">(VD: Yesterday, I <b>had to</b> finish my report before 5 PM.)</i></li>
                                <li><b>will ➔ would:</b> Diễn tả ý định trong quá khứ, câu gián tiếp hoặc câu điều kiện loại 2. <br><i style="color: #64748b;">(VD: She said she <b>would</b> help me.)</i></li>
                                <li><b>may ➔ might:</b> Diễn tả khả năng trong quá khứ hoặc trong câu gián tiếp.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- QUY TẮC 2 -->
                    <div style="background: white; border-radius: 10px; padding: 14px 16px; border-left: 5px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                        <b style="color: #b45309; font-size: 1.1rem;">2. Không chia theo chủ từ (Không phụ thuộc vào ngôi/số lượng):</b>
                        <div style="margin-top: 6px; color: #334155;">
                            Dù chủ ngữ là số ít (<i>He, She, It, Danh từ số ít, Danh từ không đếm được</i>) hay số nhiều (<i>They, We, Danh từ số nhiều</i>), ĐTKK vẫn <b>giữ nguyên và tuyệt đối không thêm s/es</b>.
                        </div>
                        <div style="margin-top: 6px; font-size: 0.98rem;">
                            <span style="color: #16a34a; font-weight: bold;">✅ Đúng:</span> He <b>can</b> swim. / She <b>must</b> go. / Water <b>can</b> boil at 100°C.<br>
                            <span style="color: #dc2626; font-weight: bold;">❌ Sai:</span> He <del>cans</del> swim. / She <del>musts</del> go.
                        </div>
                        <div style="margin-top: 8px; background: #fefce8; padding: 8px 12px; border-radius: 6px; border: 1px solid #fef08a; font-size: 0.98rem;">
                            <b style="color: #854d0e;">📌 Ngoại lệ duy nhất:</b> <b>have to ➔ has to</b> khi chủ từ là ngôi thứ 3 số ít (<i>He, She, It, danh từ số ít</i>) ở Hiện tại đơn.<br>
                            <i style="color: #64748b;">(VD: She <b>has to</b> wake up early every day. | We <b>have to</b> wake up early.)</i>
                        </div>
                    </div>

                    <!-- QUY TẮC 3 -->
                    <div style="background: white; border-radius: 10px; padding: 14px 16px; border-left: 5px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                        <b style="color: #b45309; font-size: 1.1rem;">3. Sau Động từ khiếm khuyết LUÔN LUÔN là Động từ nguyên mẫu (Vo):</b>
                        <div style="margin-top: 6px; color: #334155;">
                            Động từ chính đi ngay sau ĐTKK luôn ở dạng nguyên mẫu không "to" (<b>Vo</b>). Tuyệt đối <b>không chia thì, không thêm s/es/ed/ing</b>, và <b>không có "to"</b> ở giữa.
                        </div>
                        <div style="margin-top: 6px; font-size: 0.98rem;">
                            <span style="color: #16a34a; font-weight: bold;">✅ Đúng:</span> You should <b>study</b> hard.<br>
                            <span style="color: #dc2626; font-weight: bold;">❌ Sai:</span> You should <del>studies</del> / <del>to study</del> / <del>studying</del> hard.<br>
                            <i style="color: #64748b; font-size: 0.93rem;">* Lưu ý: Chỉ các từ vốn dĩ đã có sẵn "to" như <b>have to, ought to</b> mới có "to".</i>
                        </div>
                    </div>

                    <!-- QUY TẮC 4 -->
                    <div style="background: white; border-radius: 10px; padding: 14px 16px; border-left: 5px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                        <b style="color: #b45309; font-size: 1.1rem;">4. Quy tắc thêm "NOT" khi phủ định:</b>
                        <div style="margin-top: 6px; color: #334155;">
                            <b>• Với các ĐTKK thông thường:</b> Thêm trực tiếp <b>"not"</b> vào ngay sau ĐTKK.<br>
                            <span style="display: inline-block; margin-top: 4px; font-family: monospace; font-size: 1rem; color: #2563eb; background: #eff6ff; padding: 4px 10px; border-radius: 6px;">
                                cannot (viết liền) &nbsp;|&nbsp; should not (shouldn't) &nbsp;|&nbsp; must not (mustn't) &nbsp;|&nbsp; will not (won't) &nbsp;|&nbsp; could not (couldn't)
                            </span>
                        </div>
                        <div style="margin-top: 10px; background: #fff1f2; padding: 10px 12px; border-radius: 6px; border: 1px solid #fecdd3; font-size: 0.98rem;">
                            <b style="color: #be123c;">📌 Ngoại lệ với have to:</b> Vì là bán khiếm khuyết, bắt buộc phải <b>mượn trợ động từ do/does/did</b> để phủ định:<br>
                            • Hiện tại: <b style="color: #e11d48;">don't have to / doesn't have to + Vo</b> <i>(Ý nghĩa: KHÔNG CẦN PHẢI làm, khác với must not = CẤM)</i><br>
                            • Quá khứ: <b style="color: #e11d48;">didn't have to + Vo</b><br>
                            • Tương lai: <b style="color: #e11d48;">won't have to + Vo</b>
                        </div>
                    </div>

                    <!-- QUY TẮC 5 -->
                    <div style="background: white; border-radius: 10px; padding: 14px 16px; border-left: 5px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                        <b style="color: #b45309; font-size: 1.1rem;">5. Không bao giờ dùng 2 Động từ khiếm khuyết đứng liền nhau:</b>
                        <div style="margin-top: 6px; font-size: 0.98rem;">
                            <span style="color: #dc2626; font-weight: bold;">❌ Sai:</span> We <del>will can</del> finish the project soon. / You <del>should must</del> try.<br>
                            <span style="color: #16a34a; font-weight: bold;">✅ Đúng (dùng cụm tương đương):</span> We <b>will be able to</b> finish the project soon. / You <b>should have to</b> try.
                        </div>
                    </div>

                </div>
            </div>

            <!-- BẢNG BẪY LỖI SAI THƯỜNG GẶP -->
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <div style="background: #f8fafc; padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 800; color: #334155; display: flex; align-items: center; gap: 8px;">
                    <span>🔍</span> BẢNG TỔNG HỢP CÁC LỖI SAI PHỔ BIẾN CỦA THÍ SINH
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 1rem; text-align: left;">
                        <thead>
                            <tr style="background: #f1f5f9; color: #475569;">
                                <th style="padding: 12px; border-bottom: 1px solid #e2e8f0; width: 45%;">❌ Câu Sai Ngữ Pháp</th>
                                <th style="padding: 12px; border-bottom: 1px solid #e2e8f0; width: 55%;">✅ Câu Sửa Đúng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px; color: #dc2626;">He <b>can plays</b> football very well.</td>
                                <td style="padding: 12px; color: #16a34a;">He <b>can play</b> football very well. <i>(Sau can dùng Vo)</i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                                <td style="padding: 12px; color: #dc2626;">You <b>should to practice</b> writing daily.</td>
                                <td style="padding: 12px; color: #16a34a;">You <b>should practice</b> writing daily. <i>(Không có "to" sau should)</i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px; color: #dc2626;">She <b>musts do</b> her homework.</td>
                                <td style="padding: 12px; color: #16a34a;">She <b>must do</b> her homework. <i>(Không thêm "s" vào must)</i></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; color: #dc2626;">They <b>will can</b> travel abroad.</td>
                                <td style="padding: 12px; color: #16a34a;">They <b>will be able to</b> travel abroad. <i>(Dùng be able to thay vì can)</i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>`
    }
];


const verbsPracticeBook1 = [
    { 
        q: "Tôi thường học bài vào buổi tối để chuẩn bị cho bài kiểm tra.", 
        a: ["I usually study in the evening to prepare for the test.", "I usually study in the evening to prepare for the exam.", "I usually study in the evening to prepare for my test.", "I usually study in the evening to prepare for my exam.", "I often study in the evening to prepare for the test.", "I often study in the evening to prepare for the exam.", "I often study in the evening to prepare for my test.", "I often study in the evening to prepare for my exam."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại đơn (Dấu hiệu: thường)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>study</b>: <i style='color: #1e293b; font-weight: 600;'>học bài</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>prepare for</b>: <i style='color: #1e293b; font-weight: 600;'>chuẩn bị cho</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>test / exam</b>: <i style='color: #1e293b; font-weight: 600;'>bài kiểm tra</i></div>" 
    },
    { 
        q: "Gia đình tôi đã sống ở thành phố này được hơn 10 năm.", 
        a: ["My family has lived in this city for more than 10 years.", "My family have lived in this city for more than 10 years.", "My family has lived in this city for over 10 years."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại hoàn thành (Dấu hiệu: được hơn 10 năm - for more than 10 years)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>family</b>: <i style='color: #1e293b; font-weight: 600;'>gia đình</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>live</b>: <i style='color: #1e293b; font-weight: 600;'>sống</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>city</b>: <i style='color: #1e293b; font-weight: 600;'>thành phố</i></div>" 
    },
    { 
        q: "Tuần trước, tôi tham gia một khóa học kỹ năng mềm rất bổ ích.", 
        a: ["Last week, I joined a very useful soft skills course.", "Last week, I attended a very useful soft skills course.", "Last week I joined a very useful soft skills course.", "Last week I attended a very useful soft skills course.", "Last week, I took a very useful soft skills course.", "Last week I took a very useful soft skills course."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Quá khứ đơn (Dấu hiệu: tuần trước - last week)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>join / attend / take</b>: <i style='color: #1e293b; font-weight: 600;'>tham gia / học</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>course</b>: <i style='color: #1e293b; font-weight: 600;'>khóa học</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>soft skills</b>: <i style='color: #1e293b; font-weight: 600;'>kỹ năng mềm</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>useful</b>: <i style='color: #1e293b; font-weight: 600;'>bổ ích</i></div>" 
    },
    { 
        q: "Bạn tôi sẽ thi tiếng Anh vào tháng sau, vì vậy cậu ấy học rất chăm chỉ mỗi ngày.", 
        a: ["My friend will take an English exam next month, so he studies very hard every day.", "My friend will take an English test next month, so he studies very hard every day.", "My friend will take an English exam next month so he studies very hard every day.", "My friend will take an English test next month so he studies very hard every day."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Tương lai đơn (vế trước) & Hiện tại đơn (vế sau)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>take an exam / take a test</b>: <i style='color: #1e293b; font-weight: 600;'>thi</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>hard</b>: <i style='color: #1e293b; font-weight: 600;'>chăm chỉ</i></div>" 
    },
    { 
        q: "Nhiều học sinh không ngủ đủ giấc vì họ phải làm bài tập về nhà mỗi ngày.", 
        a: ["Many students do not get enough sleep because they have to do homework every day.", "Many students do not get enough sleep because they have to do their homework every day.", "Many students do not have enough sleep because they need to do homework every day.", "Many students do not have enough sleep because they need to do their homework every day.", "Many students do not have enough sleep because they have to do homework every day.", "Many students do not get enough sleep because they need to do homework every day."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại đơn</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>student</b>: <i style='color: #1e293b; font-weight: 600;'>học sinh</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>get / have enough sleep</b>: <i style='color: #1e293b; font-weight: 600;'>ngủ đủ giấc</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>have to / need to</b>: <i style='color: #1e293b; font-weight: 600;'>phải</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>homework</b>: <i style='color: #1e293b; font-weight: 600;'>bài tập về nhà</i></div>" 
    }
];

const verbsPracticeBook2 = [
    { 
        q: "Viết luận là phần quan trọng trong bài thi viết VSTEP.", 
        a: ["Writing an essay is an important part of the VSTEP writing exam.", "Essay writing is an important part of the VSTEP writing exam.", "Writing an essay is an important part in the VSTEP writing exam.", "Writing an essay is an important part of the VSTEP writing test.", "Writing essays is an important part of the VSTEP writing exam.", "Writing essays is an important part in the VSTEP writing exam.", "Writing essays is an important part of the VSTEP writing test."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại đơn (Động từ To-be)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>writing an essay / essay writing</b>: <i style='color: #1e293b; font-weight: 600;'>viết luận</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>important</b>: <i style='color: #1e293b; font-weight: 600;'>quan trọng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>part</b>: <i style='color: #1e293b; font-weight: 600;'>phần</i></div>" 
    },
    { 
        q: "Trung tâm Anh ngữ River là nơi mà tôi đã học khoá học VSTEP vào năm ngoái.", 
        a: ["River English Center is the place where I took a VSTEP course last year.", "River English Center is where I took a VSTEP course last year.", "The River English Center is the place where I took a VSTEP course last year."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại đơn (vế trước) & Quá khứ đơn (vế sau)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>place / where</b>: <i style='color: #1e293b; font-weight: 600;'>nơi</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>course</b>: <i style='color: #1e293b; font-weight: 600;'>khóa học</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>take</b>: <i style='color: #1e293b; font-weight: 600;'>học / tham gia</i></div>" 
    },
    { 
        q: "Tôi nghĩ viết một lá thư không quá khó.", 
        a: ["I think writing a letter is not too difficult.", "I think that writing a letter is not too difficult.", "I think writing a letter is not very difficult.", "I think writing letters is not too difficult.", "I think that writing letters is not too difficult.", "I think writing letters is not very difficult."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại đơn (Cả 2 vế)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>think</b>: <i style='color: #1e293b; font-weight: 600;'>nghĩ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>a letter / letters</b>: <i style='color: #1e293b; font-weight: 600;'>lá thư</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>difficult / hard</b>: <i style='color: #1e293b; font-weight: 600;'>khó</i></div>" 
    },
    { 
        q: "Chúng tôi đã là bạn thân kể từ cấp 3.", 
        a: ["We have been close friends since high school.", "We have been best friends since high school."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại hoàn thành (Động từ To-be: have been)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>close friends / best friends</b>: <i style='color: #1e293b; font-weight: 600;'>bạn thân</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>high school</b>: <i style='color: #1e293b; font-weight: 600;'>trường cấp 3</i></div>" 
    },
    { 
        q: "Tôi sẽ thành công trong kỳ thi VSTEP.", 
        a: ["I will be successful in the VSTEP exam.", "I will be successful in the VSTEP test."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Tương lai đơn (Động từ To-be: will be)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>successful</b>: <i style='color: #1e293b; font-weight: 600;'>thành công</i></div>" 
    }
];

const verbsPracticeBook3 = [
    { 
        q: "Việc đọc sách có thể giúp tôi mở rộng kiến thức của mình.", 
        a: ["Reading books can help me broaden my knowledge.", "Reading books can help me expand my knowledge.", "Reading books can help me widen my knowledge.", "Reading can help me broaden my knowledge.", "Reading can help me expand my knowledge.", "Reading can help me widen my knowledge."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Động từ khiếm khuyết: có thể (can / could)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>reading books / reading</b>: <i style='color: #1e293b; font-weight: 600;'>việc đọc sách</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>help</b>: <i style='color: #1e293b; font-weight: 600;'>giúp đỡ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>broaden / expand / widen</b>: <i style='color: #1e293b; font-weight: 600;'>mở rộng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>knowledge</b>: <i style='color: #1e293b; font-weight: 600;'>kiến thức</i></div>" 
    },
    { 
        q: "Bạn nên học từ vựng Tiếng Anh mỗi ngày để cải thiện kỹ năng đọc của bạn.", 
        a: ["You should learn English vocabulary every day to improve your reading skills.", "You should study English vocabulary every day to improve your reading skills.", "You should learn English vocabulary every day to improve your reading skill.", "You should study English vocabulary every day to improve your reading skill."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Động từ khiếm khuyết: nên (should)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>vocabulary</b>: <i style='color: #1e293b; font-weight: 600;'>từ vựng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>improve</b>: <i style='color: #1e293b; font-weight: 600;'>cải thiện</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>reading skills</b>: <i style='color: #1e293b; font-weight: 600;'>kỹ năng đọc</i></div>" 
    },
    { 
        q: "Tôi sẽ nộp bài luận của mình vào ngày mai.", 
        a: ["I will submit my essay tomorrow.", "I will hand in my essay tomorrow."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Động từ khiếm khuyết: sẽ (will)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>submit / hand in</b>: <i style='color: #1e293b; font-weight: 600;'>nộp</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>essay</b>: <i style='color: #1e293b; font-weight: 600;'>bài luận</i></div>" 
    },
    { 
        q: "Chúng ta không nên sao chép ý tưởng trên mạng.", 
        a: ["We should not copy ideas from the Internet.", "We should not copy ideas on the Internet."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Động từ khiếm khuyết: không nên (should not)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>copy</b>: <i style='color: #1e293b; font-weight: 600;'>sao chép</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>ideas</b>: <i style='color: #1e293b; font-weight: 600;'>ý tưởng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>from the Internet / on the Internet</b>: <i style='color: #1e293b; font-weight: 600;'>trên mạng</i></div>" 
    },
    { 
        q: "Bạn có thể luyện viết mỗi ngày nếu bạn muốn giỏi kỹ năng viết.", 
        a: ["You can practice writing every day if you want to be good at writing skills.", "You can practice writing every day if you want to be good at writing.", "You can practice writing every day if you want to be good at writing skill."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Động từ khiếm khuyết: có thể (can)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>practice</b>: <i style='color: #1e293b; font-weight: 600;'>luyện tập</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>good at</b>: <i style='color: #1e293b; font-weight: 600;'>giỏi về</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>writing skills</b>: <i style='color: #1e293b; font-weight: 600;'>kỹ năng viết</i></div>" 
    }
];


const verbsPracticeExtra3Data = [
    { 
        q: "Học sinh phải mặc đồng phục khi đến trường.", 
        a: ["Students must wear uniforms when going to school.", "Students have to wear uniforms when going to school.", "Students must wear a uniform when going to school.", "Students have to wear a uniform when going to school."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>must / have to</b>: <i style='color: #1e293b; font-weight: 600;'>phải</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>wear uniforms</b>: <i style='color: #1e293b; font-weight: 600;'>mặc đồng phục</i></div>" 
    },
    { 
        q: "Bạn nên ăn nhiều rau củ để giữ gìn sức khỏe.", 
        a: ["You should eat more vegetables to keep healthy.", "You should eat a lot of vegetables to keep healthy.", "You should eat more vegetables to stay healthy.", "You should eat a lot of vegetables to stay healthy."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>should</b>: <i style='color: #1e293b; font-weight: 600;'>nên</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>more vegetables / a lot of vegetables</b>: <i style='color: #1e293b; font-weight: 600;'>nhiều rau củ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>keep healthy / stay healthy</b>: <i style='color: #1e293b; font-weight: 600;'>giữ gìn sức khỏe</i></div>" 
    },
    { 
        q: "Tôi có thể nói được ba ngôn ngữ.", 
        a: ["I can speak three languages."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>can</b>: <i style='color: #1e293b; font-weight: 600;'>có thể</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>speak</b>: <i style='color: #1e293b; font-weight: 600;'>nói</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>three languages</b>: <i style='color: #1e293b; font-weight: 600;'>ba ngôn ngữ</i></div>" 
    },
    { 
        q: "Chúng ta không được phép đỗ xe ở đây.", 
        a: ["We must not park here.", "We mustn't park here.", "We are not allowed to park here."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>must not / not allowed to</b>: <i style='color: #1e293b; font-weight: 600;'>không được phép</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>park</b>: <i style='color: #1e293b; font-weight: 600;'>đỗ xe</i></div>" 
    },
    { 
        q: "Có lẽ ngày mai trời sẽ mưa.", 
        a: ["It may rain tomorrow.", "It might rain tomorrow.", "It will probably rain tomorrow."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>may / might / probably</b>: <i style='color: #1e293b; font-weight: 600;'>có lẽ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>rain</b>: <i style='color: #1e293b; font-weight: 600;'>trời mưa</i></div>" 
    },
    { 
        q: "Anh ấy sẽ đi du học vào năm tới.", 
        a: ["He will study abroad next year."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>will</b>: <i style='color: #1e293b; font-weight: 600;'>sẽ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>study abroad</b>: <i style='color: #1e293b; font-weight: 600;'>đi du học</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>next year</b>: <i style='color: #1e293b; font-weight: 600;'>năm tới</i></div>" 
    },
    { 
        q: "Bạn không cần phải thức dậy sớm vào Chủ nhật.", 
        a: ["You do not have to wake up early on Sunday.", "You don't have to wake up early on Sunday.", "You don't need to wake up early on Sunday.", "You do not need to wake up early on Sunday."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>do not have to / do not need to</b>: <i style='color: #1e293b; font-weight: 600;'>không cần phải</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>wake up early</b>: <i style='color: #1e293b; font-weight: 600;'>thức dậy sớm</i></div>" 
    },
    { 
        q: "Trẻ em nên nghe lời cha mẹ.", 
        a: ["Children should listen to their parents.", "Kids should listen to their parents.", "Children ought to listen to their parents."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>should / ought to</b>: <i style='color: #1e293b; font-weight: 600;'>nên</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>listen to</b>: <i style='color: #1e293b; font-weight: 600;'>nghe lời</i></div>" 
    },
    { 
        q: "Cô ấy có thể bơi rất giỏi.", 
        a: ["She can swim very well.", "She can swim very good."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>can</b>: <i style='color: #1e293b; font-weight: 600;'>có thể</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>swim</b>: <i style='color: #1e293b; font-weight: 600;'>bơi</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>very well</b>: <i style='color: #1e293b; font-weight: 600;'>rất giỏi</i></div>" 
    },
    { 
        q: "Tôi phải hoàn thành bài tập này trước 10 giờ.", 
        a: ["I must finish this assignment before 10 o'clock.", "I have to finish this assignment before 10 o'clock.", "I must finish this homework before 10 o'clock.", "I have to finish this homework before 10 o'clock."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>must / have to</b>: <i style='color: #1e293b; font-weight: 600;'>phải</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>finish</b>: <i style='color: #1e293b; font-weight: 600;'>hoàn thành</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>this assignment / this homework</b>: <i style='color: #1e293b; font-weight: 600;'>bài tập này</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>before</b>: <i style='color: #1e293b; font-weight: 600;'>trước</i></div>" 
    }
];


const verbsPracticeBook4 = [
    { 
        q: "Những bài luận này rất hữu ích cho kỳ thi viết VSTEP.", 
        a: ["These essays are very useful for the VSTEP writing test.", "These essays are very useful for the VSTEP writing exam.", "These essays are very helpful for the VSTEP writing test.", "These essays are very helpful for the VSTEP writing exam."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>these essays</b>: <i style='color: #1e293b; font-weight: 600;'>những bài luận này</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>useful / helpful</b>: <i style='color: #1e293b; font-weight: 600;'>hữu ích</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>VSTEP writing test / VSTEP writing exam</b>: <i style='color: #1e293b; font-weight: 600;'>kỳ thi viết VSTEP</i></div>" 
    },
    { 
        q: "Tôi hi vọng bạn sẽ đạt điểm cao trong kỳ thi này.", 
        a: ["I hope you will get a high score in this exam.", "I hope you will get a high score in this test.", "I hope you will achieve a high score in this exam.", "I hope you will achieve a high score in this test."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>hope</b>: <i style='color: #1e293b; font-weight: 600;'>hi vọng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>get a high score / achieve a high score</b>: <i style='color: #1e293b; font-weight: 600;'>đạt điểm cao</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>in this exam / in this test</b>: <i style='color: #1e293b; font-weight: 600;'>trong kỳ thi này</i></div>" 
    },
    { 
        q: "Chúng tôi đã cố gắng hết sức để hoàn thành bài thuyết trình đúng hạn.", 
        a: ["We tried our best to finish the presentation on time.", "We tried our best to complete the presentation on time.", "We have tried our best to finish the presentation on time.", "We have tried our best to complete the presentation on time."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>try our best</b>: <i style='color: #1e293b; font-weight: 600;'>cố gắng hết sức</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>finish / complete</b>: <i style='color: #1e293b; font-weight: 600;'>hoàn thành</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>presentation</b>: <i style='color: #1e293b; font-weight: 600;'>bài thuyết trình</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>on time</b>: <i style='color: #1e293b; font-weight: 600;'>đúng hạn</i></div>" 
    },
    { 
        q: "Chúng tôi vừa mới hoàn thành bản kế hoạch cho dự án của nhóm.", 
        a: ["We have just finished the plan for our group's project.", "We have just completed the plan for our group's project.", "We have just finished the plan for our group project.", "We have just completed the plan for our group project."], 
        hint: "<div style='color: #1e40af; font-weight: 700; margin-bottom: 8px;'>📌 Thì: Hiện tại hoàn thành (Dấu hiệu: vừa mới - just)</div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>finish / complete</b>: <i style='color: #1e293b; font-weight: 600;'>hoàn thành</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>the plan</b>: <i style='color: #1e293b; font-weight: 600;'>bản kế hoạch</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>our group's project</b>: <i style='color: #1e293b; font-weight: 600;'>dự án của nhóm</i></div>" 
    },
    { 
        q: "Tôi thường luyện nói tiếng Anh với bạn cùng lớp sau giờ học.", 
        a: ["I usually practice speaking English with my classmates after school.", "I usually practice speaking English with my classmates after class.", "I often practice speaking English with my classmates after school.", "I often practice speaking English with my classmates after class."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>usually / often</b>: <i style='color: #1e293b; font-weight: 600;'>thường</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>practice speaking</b>: <i style='color: #1e293b; font-weight: 600;'>luyện nói</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>classmates</b>: <i style='color: #1e293b; font-weight: 600;'>bạn cùng lớp</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>after school / after class</b>: <i style='color: #1e293b; font-weight: 600;'>sau giờ học</i></div>" 
    },
    { 
        q: "Tôi không thể tham gia buổi học vì tôi bị ốm hôm qua.", 
        a: ["I could not join the class because I was sick yesterday.", "I couldn't join the class because I was sick yesterday.", "I could not attend the class because I was sick yesterday.", "I couldn't attend the class because I was sick yesterday."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>could not</b>: <i style='color: #1e293b; font-weight: 600;'>không thể (quá khứ)</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>join the class / attend the class</b>: <i style='color: #1e293b; font-weight: 600;'>tham gia buổi học</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>because</b>: <i style='color: #1e293b; font-weight: 600;'>vì</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>sick / ill</b>: <i style='color: #1e293b; font-weight: 600;'>bị ốm</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>yesterday</b>: <i style='color: #1e293b; font-weight: 600;'>hôm qua</i></div>" 
    },
    { 
        q: "Tôi thích đọc sách tiếng Anh và viết nhật ký bằng tiếng Anh trong thời gian rảnh.", 
        a: ["I like reading English books and writing diaries in English in my free time.", "I like reading English books and writing a diary in English in my free time.", "I enjoy reading English books and writing diaries in English in my free time.", "I enjoy reading English books and writing a diary in English in my free time.", "I like to read English books and write diaries in English in my free time.", "I like to read English books and write a diary in English in my free time."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>like / enjoy</b>: <i style='color: #1e293b; font-weight: 600;'>thích</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>reading English books / to read English books</b>: <i style='color: #1e293b; font-weight: 600;'>đọc sách tiếng Anh</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>writing diaries / to write diaries</b>: <i style='color: #1e293b; font-weight: 600;'>viết nhật ký</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>in English</b>: <i style='color: #1e293b; font-weight: 600;'>bằng tiếng Anh</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>in my free time</b>: <i style='color: #1e293b; font-weight: 600;'>trong thời gian rảnh</i></div>" 
    },
    { 
        q: "Nghe nhạc tiếng Anh có thể giúp tôi học thêm từ vựng.", 
        a: ["Listening to English music can help me learn more vocabulary.", "Listening to English music can help me learn new vocabulary."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>listening to English music</b>: <i style='color: #1e293b; font-weight: 600;'>nghe nhạc tiếng Anh</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>can / could</b>: <i style='color: #1e293b; font-weight: 600;'>có thể</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>help</b>: <i style='color: #1e293b; font-weight: 600;'>giúp</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>learn more vocabulary / learn new vocabulary</b>: <i style='color: #1e293b; font-weight: 600;'>học thêm từ vựng</i></div>" 
    },
    { 
        q: "Vào Tết Trung Thu, người Việt thường ăn tối và trò chuyện cùng gia đình.", 
        a: ["On Mid-Autumn Festival, Vietnamese people usually have dinner and chat with their family.", "On Mid-Autumn Festival, Vietnamese people often have dinner and chat with their family.", "On Mid-Autumn Festival, Vietnamese people usually eat dinner and chat with their families.", "On Mid-Autumn Festival, Vietnamese people often eat dinner and chat with their families."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>On Mid-Autumn Festival</b>: <i style='color: #1e293b; font-weight: 600;'>vào Tết Trung Thu</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>Vietnamese people</b>: <i style='color: #1e293b; font-weight: 600;'>người Việt</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>usually / often</b>: <i style='color: #1e293b; font-weight: 600;'>thường</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>have dinner / eat dinner</b>: <i style='color: #1e293b; font-weight: 600;'>ăn tối</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>chat</b>: <i style='color: #1e293b; font-weight: 600;'>trò chuyện</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>with their family / with their families</b>: <i style='color: #1e293b; font-weight: 600;'>cùng gia đình</i></div>" 
    },
    { 
        q: "Tham gia các câu lạc bộ giúp sinh viên phát triển kỹ năng mềm.", 
        a: ["Joining clubs helps students develop soft skills.", "Participating in clubs helps students develop soft skills.", "Joining clubs helps students to develop soft skills.", "Participating in clubs helps students to develop soft skills."], 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>joining / participating in</b>: <i style='color: #1e293b; font-weight: 600;'>tham gia</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>clubs</b>: <i style='color: #1e293b; font-weight: 600;'>các câu lạc bộ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>helps</b>: <i style='color: #1e293b; font-weight: 600;'>giúp</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>students</b>: <i style='color: #1e293b; font-weight: 600;'>sinh viên</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>develop</b>: <i style='color: #1e293b; font-weight: 600;'>phát triển</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>soft skills</b>: <i style='color: #1e293b; font-weight: 600;'>kỹ năng mềm</i></div>" 
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
    },
    {
        q: "Neither the teacher nor the students _____ aware of the new policy.",
        options: ["is", "are", "has", "have"],
        answer: 1,
        exp: "Cấu trúc 'Neither N1 nor N2' thì động từ chia theo N2. Ở đây N2 là 'the students' (số nhiều) nên dùng 'are'."
    },
    {
        q: "A number of applicants _____ already been interviewed for the job.",
        options: ["has", "have", "is", "are"],
        answer: 1,
        exp: "Cấu trúc 'A number of + danh từ số nhiều' đi với động từ số nhiều. Câu ở thì hoàn thành nên dùng 'have'."
    },
    {
        q: "The number of employees in this company _____ increasing every year.",
        options: ["is", "are", "have", "has"],
        answer: 0,
        exp: "Cấu trúc 'The number of + danh từ số nhiều' đi với động từ số ít. Dấu hiệu tiếp diễn 'increasing' cần to-be nên dùng 'is'."
    },
    {
        q: "Physics _____ my favorite subject when I was in high school.",
        options: ["are", "were", "is", "was"],
        answer: 3,
        exp: "'Physics' (môn Vật lý) là danh từ không đếm được (số ít), hơn nữa ngữ cảnh trong quá khứ 'when I was...' nên dùng 'was'."
    },
    {
        q: "Everyone in the office _____ very hard to meet the deadlines every day.",
        options: ["working", "work", "works", "have worked"],
        answer: 2,
        exp: "Đại từ bất định 'Everyone' luôn đi với động từ chia số ít (works)."
    }
];

const verbsPractice2Data = [
    {
        q: "Every student in my class <b style='font-weight: 800;'>have</b> a different hobby.",
        answer: ["has"],
        exp: "Các từ bắt đầu bằng Every- luôn kết hợp với danh từ số ít và đi với động từ số ít."
    },
    {
        q: "She <b style='font-weight: 800;'>work</b> for a marketing agency at the moment.",
        answer: ["is working"],
        exp: "Dấu hiệu 'at the moment' yêu cầu dùng thì Hiện tại tiếp diễn."
    },
    {
        q: "They <b style='font-weight: 800;'>don't went</b> to the meeting yesterday because they were busy.",
        answer: ["didn't go", "did not go"],
        exp: "Trong thì Quá khứ đơn, dạng phủ định phải dùng 'didn't' + V nguyên mẫu."
    },
    {
        q: "The news about the accident <b style='font-weight: 800;'>were</b> shocking to everyone.",
        answer: ["was"],
        exp: "'News' tuy có chữ 's' nhưng là Danh từ không đếm được (số ít), nên to-be là 'was'."
    },
    {
        q: "I promise I <b style='font-weight: 800;'>helps</b> you with your homework tonight.",
        answer: ["will help"],
        exp: "Câu hứa hẹn (promise) và việc xảy ra tối nay (tonight) cần dùng thì Tương lai đơn."
    }
];

const verbsPracticeParaData = {
    segments: [
        { text: "Dear Mary,<br><br>I " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(write)</strong> this email to tell you some great news. Last month, I " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(apply)</strong> for a new job in London, and yesterday they " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(call)</strong> me to offer the position! I " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(be)</strong> so happy right now.<br><br>The company " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(specialize)</strong> in software development. Next week, I " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(travel)</strong> to London to sign the contract. I " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(already / start)</strong> packing my bags. My parents " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(feel)</strong> very proud of me.<br><br>We haven't seen each other for a long time. I hope we " },
        { text: " <strong style='font-weight: 900; color: #0f172a;'>(meet)</strong> up soon when I arrive in London.<br><br>Best wishes,<br>John" }
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
        const allPasses = ['missnguyet2026', 'cb206', 'cb210', 'cb211', 'cb213', 'onb103', 'b212'];
        const fullPasses = ['missnguyet2026', 'cb206', 'cb210', 'cb211'];
        const topicPasswords = {
            'components': allPasses,
            'structures': allPasses,
            'nouns': [...fullPasses, 'onb103', 'cb213', 'b212'],
            'pronouns': [...fullPasses, 'onb103', 'cb213', 'b212'],
            'verbs': [...fullPasses, 'onb103', 'cb213', 'b212'],
            'adjectives': [...fullPasses, 'onb103', 'cb213'],
            'adverbs': [...fullPasses, 'onb103'],
            'prepositions': fullPasses,
            'conjunctions': fullPasses
        };
        const enteredPass = pass ? pass.trim().toLowerCase() : '';
        const validPasses = topicPasswords[topicId] || fullPasses;
        
        // Mật khẩu đặc biệt mở khóa tất cả các chủ điểm
        const masterPasses = ['cb206', 'cb211', 'cb210', 'missnguyet2026'];
        
        if (enteredPass && (validPasses.includes(enteredPass) || masterPasses.includes(enteredPass))) {
            const topic1 = topicsData.find(t => t.id === topicId);
            if (topic1) topic1.status = 'unlocked';
            
            const topic2 = typeof chapter2TopicsData !== 'undefined' ? chapter2TopicsData.find(t => t.id === topicId) : null;
            if (topic2) topic2.status = 'unlocked';
            
            topicsData.forEach(t => {
                const passes = topicPasswords[t.id] || fullPasses;
                if (passes.includes(enteredPass) || masterPasses.includes(enteredPass)) {
                    t.status = 'unlocked';
                }
            });
            if (typeof chapter2TopicsData !== 'undefined') {
                chapter2TopicsData.forEach(t => {
                    const passes = topicPasswords[t.id] || fullPasses;
                    if (passes.includes(enteredPass) || masterPasses.includes(enteredPass)) {
                        t.status = 'unlocked';
                    }
                });
            }
            
            if (typeof window.saveProgress === 'function') window.saveProgress(true);
            
            alert('Mở khóa thành công!');
            
            if (topic1) renderTopicsGrid(); // re-render chapter 1 grid
            if (topic2 && typeof renderChapter2TopicsGrid === 'function') renderChapter2TopicsGrid(); // re-render chapter 2 grid
            
            if (topicId === 'components') renderComponentsDetail();
            else if (topicId === 'structures') renderStructuresDetail();
            else if (topicId === 'practice') renderPracticeDetail();
            else if (topicId === 'nouns' && typeof renderNounsDetail === 'function') renderNounsDetail();
            else if (topicId === 'pronouns' && typeof renderPronounsDetail === 'function') renderPronounsDetail();
            else if (topicId === 'verbs' && typeof renderVerbsDetail === 'function') renderVerbsDetail();
            else if (topicId === 'prepositions' && typeof renderPrepositionsDetail === 'function') renderPrepositionsDetail();
            else if (topicId === 'adjectives' && typeof renderAdjectivesDetail === 'function') renderAdjectivesDetail();
            else if (topicId === 'adverbs' && typeof renderAdverbsDetail === 'function') renderAdverbsDetail();
            else if (topicId === 'conjunctions' && typeof renderConjunctionsDetail === 'function') renderConjunctionsDetail();
            else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
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
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'pronouns') {
        if(typeof renderPronounsDetail === 'function') renderPronounsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'verbs') {
        if(typeof renderVerbsDetail === 'function') renderVerbsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'prepositions') {
        if(typeof renderPrepositionsDetail === 'function') renderPrepositionsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'adjectives') {
        if(typeof renderAdjectivesDetail === 'function') renderAdjectivesDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'adverbs') {
        if(typeof renderAdverbsDetail === 'function') renderAdverbsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'conjunctions') {
        if(typeof renderConjunctionsDetail === 'function') renderConjunctionsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else {
        alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
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
                <button class="btn-primary" onclick="submitAllAnswers()" style="font-size: 1.2rem; padding: 16px 48px; border-radius: 30px;">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
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
                    <select id="sq-select-${idx}" style="padding: 12px 16px; border-radius: 8px; border: 2px solid var(--border-color); font-size: 1.1rem; flex: 1; background: var(--bg-card); color: var(--text-main); cursor: pointer; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='var(--border-color)'" oninput="window.adverbsAnswersBook1[${idx}] = this.value; window.saveProgress(true);">
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
                <button class="btn-primary" onclick="submitStructurePractice()" style="font-size: 1.2rem; padding: 16px 48px; border-radius: 30px;">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
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
            feedbackEl.innerHTML = `<div style="padding: 16px; background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--success); border-radius: 4px; color: var(--success); margin-top: 16px;"><strong style="font-size: 1.2rem;">🎉 Chính xác!</strong><br><span style="color: var(--text-main); display: inline-block; margin-top: 8px;">Giải thích: <strong>${q.explanation}</strong></span></div>`;
        } else {
            document.getElementById(`sq-card-${qIdx}`).style.borderColor = 'var(--danger)';
            const correctName = structuresData[q.answer].name;
            feedbackEl.innerHTML = `<div style="padding: 16px; background: rgba(239, 68, 68, 0.1); border-left: 4px solid var(--danger); border-radius: 4px; color: var(--danger); margin-top: 16px;"><strong style="font-size: 1.2rem;">❌ Sai rồi! (Đáp án đúng: ${correctName})</strong><br><span style="color: var(--text-main); display: inline-block; margin-top: 8px;">Giải thích: <strong>${q.explanation}</strong></span></div>`;
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
                    <strong style="font-size: 2.5rem; color: ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'};">${totalCorrect}/10</strong>
                </div>
                <div style="margin-bottom: 32px; padding: 16px; background: rgba(87,70,227,0.1); border-radius: 12px; display: inline-block; border: 1px dashed var(--primary-color);">
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Học viên:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentName}</strong><br>
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Lớp:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentClass}</strong>
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
        <div style="margin-bottom: 32px; display: flex; justify-content: space-between; align-items: center;">
            <button class="btn-primary" style="padding: 10px 24px; background: white; color: var(--text-main); border: 2px solid #e2e8f0; border-radius: 30px; font-weight: bold; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" onclick="renderStructuresDetail()" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)'; this.style.transform='translateX(-4px)';" onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='var(--text-main)'; this.style.transform='translateX(0)';">
                &larr; Quay lại danh sách
            </button>
        </div>

        <div style="background: white; border-top: 0; border-radius: 32px; padding: 56px 40px; color: var(--text-main); text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.05); margin-bottom: 48px; position: relative; overflow: hidden; border: 1px solid rgba(0,0,0,0.03);">
            <!-- Decorative Background blob -->
            <div style="position: absolute; top: -100px; left: -100px; width: 300px; height: 300px; background: radial-gradient(circle, ${color}30 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -100px; right: -100px; width: 300px; height: 300px; background: radial-gradient(circle, ${color}20 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
            
            <div style="display: inline-block; padding: 6px 16px; background: ${color}15; color: ${color}; font-weight: 800; border-radius: 20px; font-size: 1.1rem; letter-spacing: 1px; margin-bottom: 24px; border: 1px solid ${color}40;">CẤU TRÚC ${idx + 1}</div>
            
            <div style="font-size: 5rem; font-weight: 900; font-family: 'Inter', system-ui, sans-serif; letter-spacing: 6px; margin-bottom: 32px; background: #f8fafc; padding: 24px 72px; border-radius: 100px; display: inline-block; box-shadow: 0 10px 25px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,1); border: 2px solid #e2e8f0; position: relative; z-index: 1;">${s.formula}</div>
            
            <p style="font-size: 1.35rem; line-height: 1.8; max-width: 750px; margin: 0 auto; color: #475569; font-weight: 500; margin-bottom: 40px;">${s.desc}</p>
            
            ${s.note ? `<div style="background: ${color}10; color: #334155; font-size: 1.15rem; line-height: 1.8; padding: 32px 40px; border-radius: 24px; text-align: left; max-width: 800px; margin: 0 auto; border: 2px solid ${color}30; box-shadow: 0 10px 30px rgba(0,0,0,0.02); position: relative;">
                ${s.note.replace('💡 <strong>LƯU Ý:</strong>', `<div style="color: ${color}; font-size: 1.25rem; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> LƯU Ý</div><div style="opacity: 0.95;">`).replace('💡 <strong>LƯU Ý QUAN TRỌNG:</strong>', `<div style="color: ${color}; font-size: 1.25rem; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> LƯU Ý QUAN TRỌNG</div><div style="opacity: 0.95;">`)}</div>
            </div>` : ''}
        </div>

        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 32px; gap: 16px;">
            <div style="height: 2px; background: #e2e8f0; flex: 1;"></div>
            <h2 style="font-size: 1.8rem; color: #1e293b; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; margin: 0;">📚 VÍ DỤ PHÂN TÍCH</h2>
            <div style="height: 2px; background: #e2e8f0; flex: 1;"></div>
        </div>
        <p style="text-align: center; color: var(--text-muted); font-size: 1.1rem; margin-top: -16px; margin-bottom: 32px;">(Nhấn vào từng ô để xem phân tích chi tiết)</p>

        <div style="display: flex; flex-direction: column; gap: 20px; max-width: 900px; margin: 0 auto;">
    `;

    s.examples.forEach((exObj, exIdx) => {
        html += `
            <div class="example-reveal-card" data-state="0" style="background: white; border: 2px solid #e2e8f0; border-radius: 20px; padding: 24px 32px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.02);" onmouseover="if(this.dataset.state === '0') { this.style.borderColor='${color}'; this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.05)'; }" onmouseout="if(this.dataset.state === '0') { this.style.borderColor='#e2e8f0'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'; }" onclick="if(this.dataset.state === '0') { this.dataset.state = '1'; this.querySelector('.ex-state-0').style.display = 'none'; this.querySelector('.ex-state-1').style.display = 'block'; this.style.borderColor = '${color}'; this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'; } else if(this.dataset.state === '1') { this.dataset.state = '2'; this.querySelector('.ex-hint').style.display = 'none'; this.querySelector('.ex-vi').style.display = 'block'; this.style.cursor = 'default'; }">
                <!-- Hint State 0 -->
                <div class="ex-state-0" style="font-size: 1.25rem; color: #64748b; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 0;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; color: #94a3b8; display: flex; align-items: center; justify-content: center; font-size: 1rem;">${exIdx + 1}</div>
                    <span>Nhấn để xem Ví dụ phân tích số ${exIdx + 1}</span>
                </div>
                
                <!-- Expanded State -->
                <div class="ex-state-1" style="display: none;">
                    <div style="display: flex; gap: 24px; align-items: flex-start;">
                        <div style="background: ${color}20; color: ${color}; width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; font-size: 1.5rem; box-shadow: inset 0 2px 4px rgba(255,255,255,0.5);">${exIdx + 1}</div>
                        <div style="flex: 1; padding-top: 4px;">
                            <div style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); line-height: 1.6; letter-spacing: 0.5px;">${exObj.en}</div>
                            
                            <div class="ex-hint" style="font-size: 1.1rem; color: #94a3b8; margin-top: 16px; font-weight: 500; display: flex; align-items: center; gap: 8px;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                Nhấn thêm lần nữa để xem nghĩa tiếng Việt
                            </div>
                            
                            <div class="ex-vi" style="display: none; font-size: 1.25rem; color: #475569; margin-top: 16px; font-weight: 500; border-left: 4px solid ${color}; padding-left: 20px; background: #f8fafc; padding-top: 16px; padding-bottom: 16px; border-radius: 0 12px 12px 0;">
                                ${exObj.vi}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
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
                    <strong style="font-size: 2.5rem; color: ${totalCorrect >= 8 ? 'var(--success)' : 'var(--danger)'};">${totalCorrect}/10</strong>
                </div>
                <div style="margin-bottom: 32px; padding: 16px; background: rgba(87,70,227,0.1); border-radius: 12px; display: inline-block; border: 1px dashed var(--primary-color);">
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Học viên:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentName}</strong><br>
                    <span style="font-size: 1.1rem; color: var(--text-muted);">Lớp:</span> 
                    <strong style="font-size: 1.3rem; color: var(--primary-color);">${studentClass}</strong>
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
        content: `<p style="margin-bottom: 16px; color: var(--text-main);">Trong tiếng Anh có rất nhiều cách phân loại danh từ (Danh từ chung/riêng, cụ thể/trừu tượng, tập hợp...). Tuy nhiên, <b style="color: var(--primary-color);">trong văn viết (Writing)</b>, sự phân loại quan trọng nhất ảnh hưởng trực tiếp đến ngữ pháp chính là <b>Danh từ Đếm được (Countable) & Không đếm được (Uncountable)</b>. Sự khác biệt cốt lõi giữa hai loại danh từ này quyết định việc bạn chia động từ và sử dụng lượng từ có chính xác hay không:</p>
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
                    <div style="background: #fff1f2; border-left: 4px solid #f43f5e; padding: 12px; margin-top: 12px; margin-bottom: 16px; border-radius: 0 8px 8px 0; font-size: 0.95rem; color: #881337;">
                        <b style="color: #e11d48;">⚠️ Lưu ý VSTEP:</b> Nên hạn chế dùng cấu trúc này cho đồ vật vô tri vô giác (VD: <span style="text-decoration: line-through; opacity: 0.8;">the house's door</span>). Để diễn đạt sự sở hữu của đồ vật một cách tự nhiên và trang trọng trong bài thi Writing, hãy ưu tiên dùng cấu trúc <b>N of N</b> (VD: <i>the door of the house</i>).
                    </div>
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

const nounsPracticeBook1Data = [
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

const nounsPracticeBook2Data = [
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

const nounsPracticeBook3Data = [
    { q: "một môi trường học tập tích cực", a: ["a positive learning environment"] },
    { q: "những lợi ích của việc học trực tuyến", a: ["the benefits of online learning", "the advantages of online learning", "benefits of online learning", "advantages of online learning"] },
    { q: "các kỹ năng mềm quan trọng", a: ["important soft skills"] },
    { q: "những nguyên nhân của ô nhiễm không khí", a: ["the causes of air pollution", "causes of air pollution"] },
    { q: "một bài kiểm tra cuối kỳ", a: ["a final exam"] },
    { q: "một tách cà phê nóng", a: ["a cup of hot coffee", "a glass of hot coffee", "a mug of hot coffee"] },
    { q: "nhiều thông tin quan trọng", a: ["a lot of important information", "lots of important information"] },
    { q: "những học sinh của lớp này", a: ["the students of this class"] },
    { q: "các kỹ năng mềm thiết yếu", a: ["essential soft skills"] },
    { q: "kết nối Internet không ổn định", a: ["an unstable Internet connection"] },
    { q: "những thiết bị công nghệ hiện đại", a: ["modern technological devices", "modern technology devices"] },
    { q: "ngày tốt nghiệp của tôi", a: ["my graduation day"] },
    { q: "sức khoẻ tinh thần của chúng ta", a: ["our mental health"] },
    { q: "những thói quen ăn uống lành mạnh", a: ["healthy eating habits", "healthy diet habits"] },
    { q: "một lối sống lành mạnh", a: ["a healthy lifestyle", "a healthy life style"] },
    { q: "các vấn đề kỹ thuật", a: ["technical issues", "technical problems"] },
    { q: "chất lượng âm thanh kém", a: ["poor sound quality", "bad sound quality"] },
    { q: "một môi trường tốt hơn", a: ["a better environment"] },
    { q: "một khoá học tiếng Anh ngắn hạn", a: ["a short-term English course"] },
    { q: "một mùi khó chịu", a: ["an unpleasant smell", "a bad smell"] }
];



const nounsPracticeExtra1Data = [
    { word: 'computer', type: 'countable' },
    { word: 'teacher', type: 'countable' },
    { word: 'decision', type: 'countable' },
    { word: 'problem', type: 'countable' },
    { word: 'idea', type: 'countable' },
    { word: 'building', type: 'countable' },
    { word: 'vehicle', type: 'countable' },
    { word: 'country', type: 'countable' },
    { word: 'machine', type: 'countable' },
    { word: 'language', type: 'countable' },
    { word: 'advice', type: 'uncountable' },
    { word: 'furniture', type: 'uncountable' },
    { word: 'equipment', type: 'uncountable' },
    { word: 'knowledge', type: 'uncountable' },
    { word: 'homework', type: 'uncountable' },
    { word: 'traffic', type: 'uncountable' },
    { word: 'progress', type: 'uncountable' },
    { word: 'luggage', type: 'uncountable' },
    { word: 'research', type: 'uncountable' },
    { word: 'vocabulary', type: 'uncountable' }
];

const nounsPracticeExtra2Data = [
    { q: "một khóa học trực tuyến miễn phí", a: ["a free online course"] },
    { q: "những cơ hội nghề nghiệp tốt hơn", a: ["better career opportunities", "better job opportunities"] },
    { q: "một kế hoạch học tập rõ ràng", a: ["a clear study plan", "a clear learning plan"] },
    { q: "một quyết định quan trọng", a: ["an important decision"] },
    { q: "những phương pháp giảng dạy hiện đại", a: ["modern teaching methods"] },
    { q: "một hệ thống giao thông công cộng", a: ["a public transportation system", "a public transport system"] },
    { q: "các nguồn năng lượng tái tạo", a: ["renewable energy sources"] },
    { q: "một vấn đề xã hội nghiêm trọng", a: ["a serious social problem", "a serious social issue"] },
    { q: "những dịch vụ chăm sóc sức khỏe", a: ["healthcare services", "health care services"] },
    { q: "một chương trình trao đổi sinh viên", a: ["a student exchange program"] },
    { q: "các thành viên câu lạc bộ", a: ["club members", "the club members"] },
    { q: "những lợi ích của việc tập thể dục thường xuyên", a: ["the benefits of regular exercise", "benefits of regular exercise"] },
    { q: "một thói quen học tập tốt", a: ["a good study habit", "a good learning habit"] },
    { q: "các phương tiện giao thông công cộng", a: ["public transportation", "means of public transportation", "public transport"] },
    { q: "một mục tiêu nghề nghiệp dài hạn", a: ["a long-term career goal", "a long-term job goal"] },
    { q: "những hoạt động xây dựng đội nhóm", a: ["team-building activities", "teambuilding activities"] },
    { q: "chất lượng giáo dục đại học", a: ["the quality of higher education", "higher education quality", "quality of higher education"] },
    { q: "một cơ hội học tập quý giá", a: ["a valuable learning opportunity", "a valuable study opportunity"] },
    { q: "những giải pháp cho biến đổi khí hậu", a: ["solutions for climate change", "solutions to climate change"] },
    { q: "các hoạt động ngoại khóa bổ ích", a: ["beneficial extracurricular activities", "useful extracurricular activities"] }
];
const nounsPracticeExtra3Data = [
    { 
        q: "Bảo vệ môi trường là một vấn đề quan trọng.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>environment</b> (n): <i style='color: #1e293b; font-weight: 600;'>môi trường</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>protection</b> (n): <i style='color: #1e293b; font-weight: 600;'>sự bảo vệ</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>important</b> (adj): <i style='color: #1e293b; font-weight: 600;'>quan trọng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>issue / problem</b> (n): <i style='color: #1e293b; font-weight: 600;'>vấn đề</i></div>", 
        a: ["Environmental protection is an important issue.", "Protecting the environment is an important issue.", "Environmental protection is an important problem."] 
    },
    { 
        q: "Ông ấy là một giáo viên tiếng Anh rất giỏi.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>teacher</b> (n): <i style='color: #1e293b; font-weight: 600;'>giáo viên</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>English</b> (n/adj): <i style='color: #1e293b; font-weight: 600;'>tiếng Anh</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>good</b> (adj): <i style='color: #1e293b; font-weight: 600;'>giỏi / tốt</i></div>", 
        a: ["He is a very good English teacher.", "He is a great English teacher."] 
    },
    { 
        q: "Việc học tiếng Anh mang lại nhiều lợi ích tuyệt vời.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>learning</b> (n): <i style='color: #1e293b; font-weight: 600;'>việc học</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>English</b> (n): <i style='color: #1e293b; font-weight: 600;'>tiếng Anh</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>benefit</b> (n): <i style='color: #1e293b; font-weight: 600;'>lợi ích</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>great</b> (adj): <i style='color: #1e293b; font-weight: 600;'>tuyệt vời</i></div>", 
        a: ["Learning English brings many great benefits.", "Learning English brings a lot of great benefits."] 
    },
    { 
        q: "Thành phố này có một hệ thống giao thông công cộng hiện đại.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>city</b> (n): <i style='color: #1e293b; font-weight: 600;'>thành phố</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>system</b> (n): <i style='color: #1e293b; font-weight: 600;'>hệ thống</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>transportation / transport</b> (n): <i style='color: #1e293b; font-weight: 600;'>giao thông</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>public</b> (adj): <i style='color: #1e293b; font-weight: 600;'>công cộng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>modern</b> (adj): <i style='color: #1e293b; font-weight: 600;'>hiện đại</i></div>", 
        a: ["This city has a modern public transportation system.", "This city has a modern public transport system."] 
    },
    { 
        q: "Ô nhiễm không khí là một vấn đề xã hội nghiêm trọng.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>air</b> (n): <i style='color: #1e293b; font-weight: 600;'>không khí</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>pollution</b> (n): <i style='color: #1e293b; font-weight: 600;'>sự ô nhiễm</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>problem / issue</b> (n): <i style='color: #1e293b; font-weight: 600;'>vấn đề</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>social</b> (adj): <i style='color: #1e293b; font-weight: 600;'>xã hội</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>serious</b> (adj): <i style='color: #1e293b; font-weight: 600;'>nghiêm trọng</i></div>", 
        a: ["Air pollution is a serious social problem.", "Air pollution is a serious social issue."] 
    },
    { 
        q: "Họ đang xây dựng một trung tâm thương mại mới.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>shopping</b> (n): <i style='color: #1e293b; font-weight: 600;'>việc mua sắm</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>mall / center</b> (n): <i style='color: #1e293b; font-weight: 600;'>trung tâm thương mại</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>new</b> (adj): <i style='color: #1e293b; font-weight: 600;'>mới</i></div>", 
        a: ["They are building a new shopping mall.", "They are building a new shopping center."] 
    },
    { 
        q: "Cô ấy cần một vài lời khuyên hữu ích về việc học.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>advice</b> (n): <i style='color: #1e293b; font-weight: 600;'>lời khuyên (danh từ không đếm được)</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>useful</b> (adj): <i style='color: #1e293b; font-weight: 600;'>hữu ích</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>study / studying</b> (n): <i style='color: #1e293b; font-weight: 600;'>việc học</i></div>", 
        a: ["She needs some useful advice on studying.", "She needs some useful advice about studying."] 
    },
    { 
        q: "Sự phát triển kinh tế nhanh chóng tạo ra nhiều cơ hội việc làm mới.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>development / growth</b> (n): <i style='color: #1e293b; font-weight: 600;'>sự phát triển</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>economic</b> (adj): <i style='color: #1e293b; font-weight: 600;'>kinh tế</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>rapid</b> (adj): <i style='color: #1e293b; font-weight: 600;'>nhanh chóng</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>opportunity</b> (n): <i style='color: #1e293b; font-weight: 600;'>cơ hội</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>job</b> (n): <i style='color: #1e293b; font-weight: 600;'>việc làm</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>new</b> (adj): <i style='color: #1e293b; font-weight: 600;'>mới</i></div>", 
        a: ["Rapid economic development creates many new job opportunities.", "Rapid economic growth creates many new job opportunities."] 
    },
    { 
        q: "Chúng ta cần những phương pháp giảng dạy hiệu quả.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>method</b> (n): <i style='color: #1e293b; font-weight: 600;'>phương pháp</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>teaching</b> (n): <i style='color: #1e293b; font-weight: 600;'>việc giảng dạy</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>effective</b> (adj): <i style='color: #1e293b; font-weight: 600;'>hiệu quả</i></div>", 
        a: ["We need effective teaching methods."] 
    },
    { 
        q: "Việc tham gia các hoạt động ngoại khóa là một trải nghiệm tuyệt vời.", 
        hint: "<div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>activity</b> (n): <i style='color: #1e293b; font-weight: 600;'>hoạt động</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>extracurricular</b> (adj): <i style='color: #1e293b; font-weight: 600;'>ngoại khóa</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>experience</b> (n): <i style='color: #1e293b; font-weight: 600;'>trải nghiệm</i></div><div style='color: #334155;'>• <b style='color: var(--primary-color); font-weight: 800;'>wonderful / great</b> (adj): <i style='color: #1e293b; font-weight: 600;'>tuyệt vời</i></div>", 
        a: ["Joining extracurricular activities is a wonderful experience.", "Participating in extracurricular activities is a wonderful experience.", "Joining extracurricular activities is a great experience."] 
    }
];





window.renderNounsDetail = function(activeTab = 'theory') {
    // init global vars for nouns quiz if not exist
    if (!window.nounsAnswersBook2) window.nounsAnswersBook2 = new Array(nounsPracticeBook2Data.length).fill(null).map(() => ({ tf: null, correction: null }));
    if (!window.nounsAnswersBook3) window.nounsAnswersBook3 = new Array(nounsPracticeBook3Data.length).fill('');
    if (!window.nounsAnswersExtra2) window.nounsAnswersExtra2 = new Array(nounsPracticeExtra2Data.length).fill('');
    if (!window.nounsAnswersExtra3) window.nounsAnswersExtra3 = new Array(nounsPracticeExtra3Data.length).fill('');
    if (!window.nounsAnswersExtra2) window.nounsAnswersExtra2 = new Array(nounsPracticeExtra2Data.length).fill('');

    let tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderNounsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderNounsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderNounsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';

    if (activeTab === 'theory') {
        const theoryCards = nounsTheoryData.map((item, idx) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem; font-weight: 800;">${item.title}</h3>
                <div style="color: var(--text-main); font-size: 1.1rem; line-height: 1.6;">${item.content}</div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 24px;">Hãy ôn tập kỹ lý thuyết trước khi làm bài tập thực hành nhé!</p>
                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    ${theoryCards}
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_book') {
        // Bài 1: Phân loại từ
        const wordsList = nounsPracticeBook1Data.map((item, idx) => `
            <div class="drag-word" draggable="true" data-type="${item.type}" ondragstart="drag(event)" id="word-${idx}" style="display: inline-block; padding: 8px 16px; background: #fff; border: 2px solid var(--border-color); border-radius: 20px; font-weight: bold; margin: 4px; cursor: grab;">
                ${item.word}
            </div>
        `).join('');
        
        // Bài 2: Sửa lỗi sai
        const errorCorrectionList = nounsPracticeBook2Data.map((q, idx) => {
            return `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 24px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
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
                            <input type="text" id="correction_input_${idx}" placeholder="Nhập đáp án của bạn..." style="padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.nounsAnswersBook2[${idx}].correction = this.value; document.getElementById('nounsexp_${idx}').style.display='none'; window.saveProgress(true);">
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
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 1: PHÂN LOẠI DANH TỪ</h2>
                    <p style="color: var(--text-muted); margin-bottom: 16px;">Kéo thả các từ vựng sau vào đúng giỏ Đếm được (Countable) hoặc Không đếm được (Uncountable).</p>
                    
                    <div id="words-pool" style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 2px dashed var(--border-color); margin-bottom: 24px; min-height: 80px;" ondrop="dropPool(event)" ondragover="allowDrop(event)">
                        ${wordsList}
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div style="background: var(--bg-card); border-radius: 12px; border: 2px solid #3b82f6; overflow: hidden;">
                            <div style="background: #eff6ff; padding: 12px; text-align: center; font-weight: bold; color: #1e3a8a; border-bottom: 2px solid #3b82f6;">
                                DANH TỪ ĐẾM ĐƯỢC
                            </div>
                            <div id="zone-countable" style="min-height: 200px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; align-content: flex-start;" ondrop="drop(event, 'countable')" ondragover="allowDrop(event)">
                            </div>
                        </div>

                        <div style="background: var(--bg-card); border-radius: 12px; border: 2px solid #ef4444; overflow: hidden;">
                            <div style="background: #fef2f2; padding: 12px; text-align: center; font-weight: bold; color: #7f1d1d; border-bottom: 2px solid #ef4444;">
                                DANH TỪ KHÔNG ĐẾM ĐƯỢC
                            </div>
                            <div id="zone-uncountable" style="min-height: 200px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; align-content: flex-start;" ondrop="drop(event, 'uncountable')" ondragover="allowDrop(event)">
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="checkNounsDragDrop()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 2: XÁC ĐỊNH & SỬA LỖI</h2>
                    ${errorCorrectionList}
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitNouns2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
                
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 3: DỊCH CỤM DANH TỪ</h2>

                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                        <h3 style="margin-top: 0; margin-bottom: 24px; color: #475569; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            GỢI Ý TỪ VỰNG CỐT LÕI (TỪ ĐƠN)
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 10px; font-size: 0.95rem;">
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">positive</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">tích cực</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">learning</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">việc học</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">environment</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">môi trường</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">benefit</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">lợi ích</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">online</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj/adv)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">trực tuyến</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">important</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">quan trọng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">soft</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">mềm</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">skill</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">kỹ năng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">cause</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">nguyên nhân</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">pollution</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sự ô nhiễm</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">air</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">không khí</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">final</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">cuối kỳ</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">exam</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">bài kiểm tra</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">hot</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">nóng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">cup</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">tách, ly</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">coffee</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">cà phê</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">information</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">thông tin</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">student</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">học sinh</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">class</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">lớp học</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">essential</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">thiết yếu</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">unstable</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">không ổn định</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">connection</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sự kết nối</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">modern</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">hiện đại</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">technological</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">công nghệ</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">device</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">thiết bị</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">graduation</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sự tốt nghiệp</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">mental</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">tinh thần</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">health</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sức khoẻ</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">healthy</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">lành mạnh</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">eating</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">việc ăn uống</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">habit</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">thói quen</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">lifestyle</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">lối sống</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">technical</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">kỹ thuật</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">issue / problem</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">vấn đề</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">poor</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">kém</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">sound</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">âm thanh</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">quality</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">chất lượng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">better</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">tốt hơn</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">short-term</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">ngắn hạn</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">unpleasant</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">khó chịu</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">smell</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">mùi</span>
    </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 16px;">
                        ${nounsPracticeBook3Data.map((q, idx) => `
                            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                                    <input type="text" id="noun_trans_book3_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.nounsAnswersBook3[${idx}] = this.value; document.getElementById('transexp_book3_${idx}').style.display='none'; window.saveProgress(true);" value="${window.nounsAnswersBook3[idx] || ''}">
                                    <button onclick="checkNounsTranslation('book3', ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                                </div>
                                <div style="padding-left: 44px;">
                                    <div id="transexp_book3_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitNounsBook3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_extra') {
        const extraWordsList = nounsPracticeExtra1Data.map((item, idx) => `
            <div class="drag-word" draggable="true" data-type="${item.type}" ondragstart="drag(event)" id="word-extra-${idx}" style="display: inline-block; padding: 8px 16px; background: #fff; border: 2px solid var(--border-color); border-radius: 20px; font-weight: bold; margin: 4px; cursor: grab;">
                ${item.word}
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 1: PHÂN LOẠI DANH TỪ</h2>
                    <p style="color: var(--text-muted); margin-bottom: 16px;">Kéo thả các từ vựng sau vào đúng giỏ Đếm được (Countable) hoặc Không đếm được (Uncountable).</p>
                    
                    <div id="words-pool-extra" style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 2px dashed var(--border-color); margin-bottom: 24px; min-height: 80px;" ondrop="dropPool(event)" ondragover="allowDrop(event)">
                        ${extraWordsList}
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div style="background: var(--bg-card); border-radius: 12px; border: 2px solid #3b82f6; overflow: hidden;">
                            <div style="background: #eff6ff; padding: 12px; text-align: center; font-weight: bold; color: #1e3a8a; border-bottom: 2px solid #3b82f6;">
                                DANH TỪ ĐẾM ĐƯỢC
                            </div>
                            <div id="zone-countable-extra" style="min-height: 200px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; align-content: flex-start;" ondrop="drop(event, 'countable-extra')" ondragover="allowDrop(event)">
                            </div>
                        </div>

                        <div style="background: var(--bg-card); border-radius: 12px; border: 2px solid #ef4444; overflow: hidden;">
                            <div style="background: #fef2f2; padding: 12px; text-align: center; font-weight: bold; color: #7f1d1d; border-bottom: 2px solid #ef4444;">
                                DANH TỪ KHÔNG ĐẾM ĐƯỢC
                            </div>
                            <div id="zone-uncountable-extra" style="min-height: 200px; padding: 16px; display: flex; flex-wrap: wrap; gap: 8px; align-content: flex-start;" ondrop="drop(event, 'uncountable-extra')" ondragover="allowDrop(event)">
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitNounsExtra1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 2: DỊCH CỤM DANH TỪ</h2>

                                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
                        <h3 style="margin-top: 0; margin-bottom: 24px; color: #475569; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            GỢI Ý TỪ VỰNG CỐT LÕI
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 10px; font-size: 0.95rem;">
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">course</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">khóa học</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">online</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">trực tuyến</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">free</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">miễn phí</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">opportunity</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">cơ hội</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">career</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">nghề nghiệp</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">plan</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">kế hoạch</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">clear</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">rõ ràng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">activity</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">hoạt động</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">extracurricular</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">ngoại khóa</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">beneficial</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">bổ ích</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">decision</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">quyết định</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">important</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">quan trọng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">method</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">phương pháp</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">teaching</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">việc giảng dạy</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">modern</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">hiện đại</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">system</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">hệ thống</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">public</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">công cộng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">transportation</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">giao thông công cộng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">renewable</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">tái tạo</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">energy</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">năng lượng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">source</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">nguồn</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">problem</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">vấn đề</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">social</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">xã hội</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">serious</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">nghiêm trọng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">service</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">dịch vụ</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">health / healthcare</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sức khỏe / y tế</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">care</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sự chăm sóc</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">program</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">chương trình</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">exchange</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">trao đổi</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">student</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sinh viên</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">member</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">thành viên</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">club</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">câu lạc bộ</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">benefit</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">lợi ích</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">exercise</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">việc tập thể dục</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">habit</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">thói quen</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">goal</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">mục tiêu</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">long-term</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">dài hạn</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">team-building</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">xây dựng đội nhóm</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">quality</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">chất lượng</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">higher</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">cao hơn / đại học</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">education</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">giáo dục</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">valuable</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(adj)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">quý giá</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">solution</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">giải pháp</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">climate</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">khí hậu</span>
    </div>
                            <div style="background: white; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
        <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.05rem; font-weight: 800;">change</b> <span style="color: #64748b; font-size: 0.9rem; font-weight: 600;">(n)</span>:</span>
        <span style="color: #1e293b; font-weight: 600; font-style: italic; white-space: nowrap; text-align: right;">sự thay đổi / biến đổi</span>
    </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 16px;">
                        ${nounsPracticeExtra2Data.map((q, idx) => `
                            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                                    <input type="text" id="noun_trans_extra2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.nounsAnswersExtra2[${idx}] = this.value; document.getElementById('transexp_extra2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.nounsAnswersExtra2[idx] || ''}">
                                    <button onclick="checkNounsTranslation('extra2', ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                                </div>
                                <div style="padding-left: 44px;">
                                    <div id="transexp_extra2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitNounsExtra2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 3: DỊCH CÂU (CHỨA CỤM DANH TỪ)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Dịch các câu sau sang tiếng Anh. Chú ý sử dụng đúng cụm danh từ.</p>
                    <div style="display: grid; gap: 16px;">
                        ${nounsPracticeExtra3Data.map((q, idx) => `
                            <div class="quiz-item" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm);">
                                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                                </div>
                                ${q.hint ? `
                                    <div style="margin-bottom: 12px;">
                                        <button onclick="const h = document.getElementById('noun_extra3_hint_${idx}'); h.style.display = (h.style.display === 'none' || !h.style.display) ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; display: flex; align-items: center; gap: 4px; font-weight: 600;">
                                            <span style="font-size: 1.1rem">💡</span> Xem gợi ý từ vựng
                                        </button>
                                        <div id="noun_extra3_hint_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-top: 8px; font-size: 1rem; line-height: 1.6;">
                                            ${q.hint}
                                        </div>
                                    </div>
                                ` : ''}
                                <input type="text" 
                                    value="${window.nounsAnswersExtra3[idx] || ''}"
                                    oninput="window.nounsAnswersExtra3[${idx}] = this.value; window.saveProgress(true); document.getElementById('transexp_extra3_${idx}').style.display = 'none';"
                                    placeholder="Nhập câu trả lời bằng tiếng Anh (nhớ có dấu chấm ở cuối câu)..."
                                    style="width: 100%; padding: 12px 16px; border: 2px solid #cbd5e1; border-radius: 8px; font-size: 1.1rem; outline: none; transition: all 0.2s;"
                                    onfocus="this.style.borderColor='var(--primary-color)'; this.style.boxShadow='0 0 0 3px var(--primary-light)'"
                                    onblur="this.style.borderColor='#cbd5e1'; this.style.boxShadow='none'">
                                <div id="transexp_extra3_${idx}" style="display: none; margin-top: 12px; padding: 12px; border-radius: 8px; font-size: 1.05rem;"></div>
                                <div style="text-align: right; margin-top: 12px;">
                                    <button onclick="window.checkNounsTranslation('extra3', ${idx})" style="padding: 8px 24px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitNounsExtra3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
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
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 01: DANH TỪ</h1>
            ${tabsHtml}
        </div>
        ${contentHtml}
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle restoring state after render
    if (activeTab === 'practice_book') {
        setTimeout(() => {
            if (window.nounsDragDropState) {
                const { countable, uncountable, pool } = window.nounsDragDropState;
                const restoreZone = (zone, container) => {
                    if (container && window.nounsDragDropState[zone]) {
                        window.nounsDragDropState[zone].forEach(id => {
                            const el = document.getElementById(id);
                            if (el) container.appendChild(el);
                        });
                    }
                };
                restoreZone('countable', document.getElementById('zone-countable'));
                restoreZone('uncountable', document.getElementById('zone-uncountable'));
                restoreZone('pool', document.getElementById('words-pool'));
            }

            if (window.nounsAnswersBook2) {
                window.nounsAnswersBook2.forEach((ans, idx) => {
                    if (ans.tf === true) {
                        document.getElementById(`btn_true_${idx}`).style.background = 'var(--primary-color)';
                        document.getElementById(`btn_true_${idx}`).style.color = 'white';
                        document.getElementById(`btn_true_${idx}`).style.borderColor = 'var(--primary-color)';
                        document.getElementById(`correction_step_${idx}`).style.display = 'none';
                    } else if (ans.tf === false) {
                        document.getElementById(`btn_false_${idx}`).style.background = '#ef4444';
                        document.getElementById(`btn_false_${idx}`).style.color = 'white';
                        document.getElementById(`btn_false_${idx}`).style.borderColor = '#ef4444';
                        document.getElementById(`correction_step_${idx}`).style.display = 'flex';
                        if (ans.correction) {
                            document.getElementById(`correction_input_${idx}`).value = ans.correction;
                        }
                    }
                });
            }
        }, 50);
    }
}


window.selectTrueFalseNouns = function(idx, isTrue) {
    if (!window.nounsAnswersBook2[idx]) {
        window.nounsAnswersBook2[idx] = { tf: null, correction: null };
    }
    window.nounsAnswersBook2[idx].tf = isTrue;
    window.saveProgress(true);

    const btnTrue = document.getElementById(`btn_true_${idx}`);
    const btnFalse = document.getElementById(`btn_false_${idx}`);
    const corrStep = document.getElementById(`correction_step_${idx}`);
    const expDiv = document.getElementById(`nounsexp_${idx}`);
    if (expDiv) expDiv.style.display = 'none';

    if (isTrue) {
        if (btnTrue) {
            btnTrue.style.background = 'var(--primary-color)';
            btnTrue.style.color = 'white';
            btnTrue.style.borderColor = 'var(--primary-color)';
        }
        if (btnFalse) {
            btnFalse.style.background = 'white';
            btnFalse.style.color = '#64748b';
            btnFalse.style.borderColor = '#e2e8f0';
        }
        if (corrStep) corrStep.style.display = 'none';
    } else {
        if (btnFalse) {
            btnFalse.style.background = '#ef4444';
            btnFalse.style.color = 'white';
            btnFalse.style.borderColor = '#ef4444';
        }
        if (btnTrue) {
            btnTrue.style.background = 'white';
            btnTrue.style.color = '#64748b';
            btnTrue.style.borderColor = '#e2e8f0';
        }
        if (corrStep) {
            corrStep.style.display = 'flex';
            const input = document.getElementById(`correction_input_${idx}`);
            if (input) {
                input.value = window.nounsAnswersBook2[idx].correction || '';
                input.focus();
            }
        }
    }
};

window.checkNounsTranslation = function(type, idx) {
    let dataArr, ansArr, prefix;
    if (type === 'book3') {
        dataArr = nounsPracticeBook3Data;
        ansArr = window.nounsAnswersBook3;
        prefix = 'transexp_book3_';
    } else if (type === 'extra2') {
        dataArr = nounsPracticeExtra2Data;
        ansArr = window.nounsAnswersExtra2;
        prefix = 'transexp_extra2_';
    } else if (type === 'extra3') {
        dataArr = nounsPracticeExtra3Data;
        ansArr = window.nounsAnswersExtra3;
        prefix = 'transexp_extra3_';
    }
    
    const userInput = ansArr[idx];
    const expDiv = document.getElementById(prefix + idx);
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = `<b>⚠️ Bạn chưa nhập bản dịch!</b> Vui lòng nhập đáp án của bạn.`;
        return;
    }

    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = dataArr[idx].a;
    let isCorrect = false;
    for (let ans of validAnswers) {
        let cleanAns = ans.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
        if (cleanUser === cleanAns) {
            isCorrect = true;
            break;
        }
    }
    
    expDiv.style.display = 'block';
    
    // Nếu là bài dịch câu hoàn chỉnh (extra3) thì mới kiểm tra viết hoa và dấu chấm câu
    if (type === 'extra3') {
        const formCheck = window.checkSentencePunctuation(userInput, isCorrect);
        if (formCheck.valid) {
            expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
            expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>` + (dataArr[idx].exp ? ` ${dataArr[idx].exp}` : '');
        } else if (formCheck.isNear) {
            expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
            expDiv.innerHTML = formCheck.message + (dataArr[idx].exp ? `<br><div style="margin-top: 8px; font-size: 0.95rem; color: #b45309;">📝 <b>Giải thích:</b> ${dataArr[idx].exp}</div>` : '');
        } else {
            const smartFeedback = window.generateFeedback ? window.generateFeedback(cleanUser, validAnswers) : '';
            expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
            expDiv.innerHTML = `<b>❌ CHƯA CHÍNH XÁC.</b> ${smartFeedback} <br><div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">💡 <b>Gợi ý đáp án:</b> ${validAnswers[0]}</div>` + (dataArr[idx].exp ? `<div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">📝 <b>Giải thích:</b> ${dataArr[idx].exp}</div>` : '');
        }
    } else {
        // Dịch cụm danh từ (book3, extra2): chỉ cần đúng từ và đúng ngữ pháp cụm
        if (isCorrect) {
            expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
            expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>` + (dataArr[idx].exp ? ` ${dataArr[idx].exp}` : '');
        } else {
            const smartFeedback = window.generateFeedback ? window.generateFeedback(cleanUser, validAnswers) : '';
            expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
            expDiv.innerHTML = `<b>❌ CHƯA CHÍNH XÁC.</b> ${smartFeedback} <br><div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">💡 <b>Gợi ý đáp án:</b> ${validAnswers[0]}</div>` + (dataArr[idx].exp ? `<div style="margin-top: 8px; font-size: 0.95rem; color: #b91c1c;">📝 <b>Giải thích:</b> ${dataArr[idx].exp}</div>` : '');
        }
    }
}


window.checkNounsSingleAnswer = function(idx) {
    const ans = window.nounsAnswersBook2[idx];
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
    
    const correctIdx = nounsPracticeBook2Data[idx].answer;
    const isActuallyCorrect = nounsPracticeBook2Data[idx].options[correctIdx].includes("Giữ nguyên");
    
    expDiv.style.display = 'block';
    
    if (isActuallyCorrect) {
        if (ans.tf === true) {
            expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
            expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${nounsPracticeBook2Data[idx].explanation}`;
        } else {
            expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
            expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Từ này vốn dĩ đã đúng. ${nounsPracticeBook2Data[idx].explanation}`;
        }
    } else {
        if (ans.tf === true) {
            expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
            expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Từ in đậm bị sai ngữ pháp. Đáp án đúng là <b>${nounsPracticeBook2Data[idx].options[correctIdx]}</b>. ${nounsPracticeBook2Data[idx].explanation}`;
        } else {
            const userCorrection = ans.correction.trim().toLowerCase();
            const correctStr = nounsPracticeBook2Data[idx].options[correctIdx].toLowerCase();
            const validAnswers = correctStr.split('/').map(s => s.trim());
            const isCorrect = validAnswers.includes(userCorrection);

            if (isCorrect) {
                expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
                expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> Bạn đã tìm và sửa lỗi rất chuẩn. ${nounsPracticeBook2Data[idx].explanation}`;
            } else {
                expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
                expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Bạn đã phát hiện lỗi đúng nhưng sửa chưa đúng. Đáp án sửa đúng phải là <b>${nounsPracticeBook2Data[idx].options[correctIdx]}</b>. ${nounsPracticeBook2Data[idx].explanation}`;
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
    window.showExerciseResult(p1Correct, 10, "KẾT QUẢ BÀI 1 (TRONG TÀI LIỆU)");
};

window.submitNouns2 = function() {
    let p2Correct = 0;
    let completed = true;
    nounsPracticeBook2Data.forEach((q, idx) => {
        const ans = window.nounsAnswersBook2[idx];
        if (ans.tf === null || (ans.tf === false && (!ans.correction || ans.correction.trim() === ''))) {
            completed = false;
        } else {
            const correctIdx = nounsPracticeBook2Data[idx].answer;
            const isActuallyCorrect = nounsPracticeBook2Data[idx].options[correctIdx].includes("Giữ nguyên");
            if (isActuallyCorrect && ans.tf === true) {
                p2Correct++;
            } else if (!isActuallyCorrect && ans.tf === false) {
                const userCorrection = ans.correction.trim().toLowerCase();
                const correctStr = nounsPracticeBook2Data[idx].options[correctIdx].toLowerCase();
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
    window.showExerciseResult(p2Correct, nounsPracticeBook2Data.length, "KẾT QUẢ BÀI 2 (TRONG TÀI LIỆU)");
};

window.submitNounsBook3 = function() {
    let correctCount = 0;
    let completed = true;
    nounsPracticeBook3Data.forEach((q, idx) => {
        const userInput = (window.nounsAnswersBook3[idx] || "").trim();
        if (!userInput) {
            completed = false;
        } else {
            const cleanUser = window.normalizeText(userInput);
            const validAnswers = q.a;
            if (validAnswers.some(ans => window.normalizeText(ans) === cleanUser)) {
                correctCount++;
            }
        }
        window.checkNounsTranslation('book3', idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, nounsPracticeBook3Data.length, "KẾT QUẢ BÀI 3 (TRONG TÀI LIỆU)");
};

window.submitNounsExtra1 = function() {
    let p1Correct = 0;
    const countableZone = document.getElementById('zone-countable-extra');
    const uncountableZone = document.getElementById('zone-uncountable-extra');
    const pool = document.getElementById('words-pool-extra');
    
    if (pool && pool.querySelectorAll('.drag-word').length > 0) {
        alert("Vui lòng kéo hết các từ vào 2 cột trước khi nộp bài!");
        return;
    }
    
    if (countableZone) {
        countableZone.querySelectorAll('.drag-word').forEach(el => {
            if(el.getAttribute('data-type') === 'countable') p1Correct++;
        });
    }
    if (uncountableZone) {
        uncountableZone.querySelectorAll('.drag-word').forEach(el => {
            if(el.getAttribute('data-type') === 'uncountable') p1Correct++;
        });
    }
    window.checkNounsDragDropExtra();
    window.showExerciseResult(p1Correct, 10, "KẾT QUẢ BÀI TẬP THÊM 1 (DANH TỪ)");
};

window.submitNounsExtra2 = function() {
    let correctCount = 0;
    let completed = true;
    nounsPracticeExtra2Data.forEach((q, idx) => {
        const userInput = (window.nounsAnswersExtra2[idx] || "").trim();
        if (!userInput) {
            completed = false;
        } else {
            const cleanUser = window.normalizeText(userInput);
            const validAnswers = q.a;
            if (validAnswers.some(ans => window.normalizeText(ans) === cleanUser)) {
                correctCount++;
            }
        }
        window.checkNounsTranslation('extra2', idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, nounsPracticeExtra2Data.length, "KẾT QUẢ BÀI TẬP THÊM 2 (DANH TỪ)");
};

window.submitNounsExtra3 = function() {
    let correctCount = 0;
    let completed = true;
    nounsPracticeExtra3Data.forEach((q, idx) => {
        const userInput = (window.nounsAnswersExtra3[idx] || "").trim();
        if (!userInput) {
            completed = false;
        } else {
            const cleanUser = window.normalizeText(userInput);
            const validAnswers = q.a;
            const formCheck = window.checkSentencePunctuation(userInput, validAnswers.some(ans => window.normalizeText(ans) === cleanUser));
            if (formCheck.valid) {
                correctCount++;
            }
        }
        window.checkNounsTranslation('extra3', idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, nounsPracticeExtra3Data.length, "KẾT QUẢ BÀI TẬP THÊM 3 (DANH TỪ)");
};

// ==================== PRONOUNS LOGIC ====================
const pronounsTheoryData = [
    {
        title: '1. Đại từ Nhân xưng (Personal Pronouns)',
        content: `
        <div class="form-rich-content">
            <div class="form-note" style="margin-bottom: 20px;">
                Đại từ nhân xưng thay thế cho danh từ chỉ người hoặc vật. Tùy vào vị trí trong câu mà chia làm 2 loại: <b>Chủ ngữ (Subject)</b> và <b>Tân ngữ (Object)</b>.
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center; font-size: 1.05rem;">
                <tr style="background: var(--primary-light); color: var(--primary-color);">
                    <th style="padding: 12px; border: 1px solid var(--border-color);">Ngôi</th>
                    <th style="padding: 12px; border: 1px solid var(--border-color);">Làm Chủ Ngữ (S)</th>
                    <th style="padding: 12px; border: 1px solid var(--border-color);">Làm Tân Ngữ (O)</th>
                </tr>
                <tr><td style="padding: 10px; border: 1px solid var(--border-color); font-weight: bold;">Ngôi 1 số ít</td><td style="padding: 10px; border: 1px solid var(--border-color);">I</td><td style="padding: 10px; border: 1px solid var(--border-color);">me</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 10px; border: 1px solid var(--border-color); font-weight: bold;">Ngôi 1 số nhiều</td><td style="padding: 10px; border: 1px solid var(--border-color);">We</td><td style="padding: 10px; border: 1px solid var(--border-color);">us</td></tr>
                <tr><td style="padding: 10px; border: 1px solid var(--border-color); font-weight: bold;">Ngôi 2</td><td style="padding: 10px; border: 1px solid var(--border-color);">You</td><td style="padding: 10px; border: 1px solid var(--border-color);">you</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 10px; border: 1px solid var(--border-color); font-weight: bold;">Ngôi 3 số ít</td><td style="padding: 10px; border: 1px solid var(--border-color);">He / She / It</td><td style="padding: 10px; border: 1px solid var(--border-color);">him / her / it</td></tr>
                <tr><td style="padding: 10px; border: 1px solid var(--border-color); font-weight: bold;">Ngôi 3 số nhiều</td><td style="padding: 10px; border: 1px solid var(--border-color);">They</td><td style="padding: 10px; border: 1px solid var(--border-color);">them</td></tr>
            </table>
            
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
                <b style="color: #1d4ed8;">📍 Vị trí trong câu:</b>
                <ul style="margin-top: 8px; margin-bottom: 0; padding-left: 20px;">
                    <li><b>Đại từ Chủ ngữ:</b> Đứng <b>TRƯỚC</b> động từ chính.</li>
                    <li><b>Đại từ Tân ngữ:</b> Đứng <b>SAU</b> động từ hoặc <b>SAU</b> giới từ (in, on, at, with, about...).</li>
                </ul>
            </div>
            
            <div class="form-example">
                <div class="en"><span style="color:var(--primary-color); font-weight:bold;">She</span> likes <span style="color:#10b981; font-weight:bold;">him</span>, but <span style="color:var(--primary-color); font-weight:bold;">he</span> doesn't like <span style="color:#10b981; font-weight:bold;">her</span>.</div>
                <div class="vn">(Cô ấy thích anh ấy, nhưng anh ấy không thích cô ấy)</div>
            </div>
        </div>
        `
    },
    {
        title: '2. Sở hữu (Possessives)',
        content: `
        <div class="form-rich-content">
            <div class="form-note" style="margin-bottom: 20px;">
                Dùng để chỉ sự sở hữu. Có 2 dạng dễ nhầm lẫn là <b>Tính từ sở hữu (Possessive Adjectives)</b> và <b>Đại từ sở hữu (Possessive Pronouns)</b>.
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center; font-size: 1.05rem;">
                <tr style="background: var(--primary-light); color: var(--primary-color);">
                    <th style="padding: 12px; border: 1px solid var(--border-color);">Tính từ sở hữu (+ Danh từ)</th>
                    <th style="padding: 12px; border: 1px solid var(--border-color);">Đại từ sở hữu (Không cần Danh từ)</th>
                </tr>
                <tr><td style="padding: 10px; border: 1px solid var(--border-color);">my (của tôi)</td><td style="padding: 10px; border: 1px solid var(--border-color);">mine</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 10px; border: 1px solid var(--border-color);">our (của chúng tôi)</td><td style="padding: 10px; border: 1px solid var(--border-color);">ours</td></tr>
                <tr><td style="padding: 10px; border: 1px solid var(--border-color);">your (của bạn)</td><td style="padding: 10px; border: 1px solid var(--border-color);">yours</td></tr>
                <tr style="background: #f8fafc;"><td style="padding: 10px; border: 1px solid var(--border-color);">his / her / its</td><td style="padding: 10px; border: 1px solid var(--border-color);">his / hers / its</td></tr>
                <tr><td style="padding: 10px; border: 1px solid var(--border-color);">their (của họ)</td><td style="padding: 10px; border: 1px solid var(--border-color);">theirs</td></tr>
            </table>
            
            <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
                <b style="color: #b45309;">Công thức:</b> Đại từ sở hữu = Tính từ sở hữu + Danh từ (đã nhắc đến trước đó)
            </div>
            
            <div class="form-example">
                <div class="en">My car is old. <span style="color:var(--primary-color); font-weight:bold;">Yours</span> is new. <i>(= Your car is new)</i></div>
                <div class="vn">(Xe của tôi thì cũ. Xe của bạn thì mới.)</div>
            </div>
        </div>
        `
    },
    {
        title: '3. Đại từ Phản thân (Reflexive Pronouns)',
        content: `
        <div class="form-rich-content">
            <div class="form-note" style="margin-bottom: 20px;">
                Dùng khi Chủ ngữ và Tân ngữ cùng là một người/vật (tự làm gì đó). Hoặc dùng để nhấn mạnh chính người đó làm chứ không ai khác.
            </div>
            
            <ul style="list-style: none; padding: 0; line-height: 1.8; margin-bottom: 16px;">
                <li>🔹 <b>myself:</b> chính tôi</li>
                <li>🔹 <b>yourself:</b> chính bạn (số ít) / <b>yourselves:</b> chính các bạn (số nhiều)</li>
                <li>🔹 <b>ourselves:</b> chính chúng tôi</li>
                <li>🔹 <b>himself / herself / itself:</b> chính anh ấy / cô ấy / nó</li>
                <li>🔹 <b>themselves:</b> chính họ</li>
            </ul>
            
            <div class="form-example" style="margin-bottom: 16px;">
                <div class="en">She cut <span style="color:var(--primary-color); font-weight:bold;">herself</span> while cooking.</div>
                <div class="vn">(Cô ấy vô tình cắt vào tay chính mình khi đang nấu ăn)</div>
            </div>
            <div class="form-example">
                <div class="en">I will do it <span style="color:var(--primary-color); font-weight:bold;">myself</span>.</div>
                <div class="vn">(Tôi sẽ tự tay làm việc đó - Nhấn mạnh)</div>
            </div>
        </div>
        `
    },
    {
        title: '4. Đại từ Chỉ định (Demonstrative Pronouns)',
        content: `
        <div class="form-rich-content">
            <div class="form-note" style="margin-bottom: 20px;">
                Chỉ định người hoặc vật cụ thể dựa trên khoảng cách. Cực kỳ hữu ích trong thi Viết (Writing) để <b>nối câu (cohesion)</b> thay vì lặp lại ý.
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; text-align: center;">
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
                    <div style="font-weight: bold; color: var(--primary-color); margin-bottom: 8px;">GẦN</div>
                    <div style="font-size: 1.1rem;"><b>This</b> (Cái này - số ít)</div>
                    <div style="font-size: 1.1rem;"><b>These</b> (Những cái này - số nhiều)</div>
                </div>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
                    <div style="font-weight: bold; color: #ef4444; margin-bottom: 8px;">XA</div>
                    <div style="font-size: 1.1rem;"><b>That</b> (Cái kia - số ít)</div>
                    <div style="font-size: 1.1rem;"><b>Those</b> (Những cái kia - số nhiều)</div>
                </div>
            </div>
            
            <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
                <b style="color: #166534;">🔥 Ứng dụng B1 Writing (Nối câu):</b> "This + Danh từ" dùng để thay thế cho cả một cụm hoặc một câu phía trước.
            </div>
            
            <div class="form-example">
                <div class="en">Many students play games all day. <span style="color:var(--primary-color); font-weight:bold;">This bad habit</span> affects their grades.</div>
                <div class="vn">(Nhiều học sinh chơi game cả ngày. <b>Thói quen xấu này</b> ảnh hưởng đến điểm số của họ.)</div>
            </div>
        </div>
        `
    }
];

// Dữ liệu Bài tập trong tài liệu
const pronounsParagraphData = {
    segments: [
        { text: "<span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(1 - tôi)</span> ", placeholder: "1. tôi" },
        { text: " am working on a group presentation with my friends. <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(2 - của chúng tôi)</span> ", placeholder: "2. của chúng tôi" },
        { text: " group includes Khoa, Mai, and me. Last week, our teacher gave <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(3 - chúng tôi)</span> ", placeholder: "3. chúng tôi" },
        { text: " the topic \"air pollution in big cities.\" Khoa is very responsible. <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(4 - anh ấy)</span> ", placeholder: "4. anh ấy" },
        { text: " found many useful statistics and shared them with us. We really appreciate <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(5 - của anh ấy)</span> ", placeholder: "5. của anh ấy" },
        { text: " hard work and dedication. Mai also did a great job. <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(6 - cô ấy)</span> ", placeholder: "6. cô ấy" },
        { text: " designed a colorful poster for the presentation. Everyone liked <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(7 - của cô ấy)</span> ", placeholder: "7. của cô ấy" },
        { text: " idea because it was creative and eye-catching. <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(8 - chúng tôi)</span> ", placeholder: "8. chúng tôi" },
        { text: " practiced together every afternoon after class. Sometimes, our teacher stayed to give <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(9 - chúng tôi)</span> ", placeholder: "9. chúng tôi" },
        { text: " feedback. She said, \"<span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(10 - các em)</span> ", placeholder: "10. các em" },
        { text: " are making good progress, but don't forget to check your sources.\" I replied, \"Yes, thank you for helping <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(11 - chúng em)</span> ", placeholder: "11. chúng em" },
        { text: " improve.\" During the process, I also used a learning app. <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(12 - nó)</span> ", placeholder: "12. nó" },
        { text: " sends daily tips and reminds me to review. I like <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(13 - của nó)</span> ", placeholder: "13. của nó" },
        { text: " design because it's simple and user-friendly. Tomorrow is our presentation day. <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(14 - chúng tôi)</span> ", placeholder: "14. chúng tôi" },
        { text: " hope everything will go well. Khoa is a bit nervous, but I told <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(15 - anh ấy)</span> ", placeholder: "15. anh ấy" },
        { text: " to just do his best. Our teacher believes in <span style='color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 8px; border-radius: 6px; font-size: 0.95rem; border: 1px solid #fde68a; margin-right: 4px;'>(16 - chúng tôi)</span> ", placeholder: "16. chúng tôi" },
        { text: ", and that gives us confidence." }
    ],
    answers: ["I", "Our", "us", "He", "his", "She", "her", "We", "us", "You", "us", "It", "its", "We", "him", "us"],
    explanations: [
        "Đứng trước động từ 'am' và đóng vai trò làm chủ ngữ ngôi số ít -> dùng đại từ nhân xưng 'I'.",
        "Đứng trước danh từ 'group' bổ nghĩa sở hữu -> dùng tính từ sở hữu 'Our' (viết hoa đầu câu).",
        "Đứng sau động từ 'gave' (tặng cho ai cái gì) đóng vai trò tân ngữ -> dùng đại từ tân ngữ 'us'.",
        "Đứng trước động từ 'found' làm chủ ngữ cho câu mới -> dùng đại từ nhân xưng 'He' (viết hoa).",
        "Đứng trước danh từ 'hard work' bổ nghĩa sở hữu -> dùng tính từ sở hữu 'his'.",
        "Đứng trước động từ 'designed' làm chủ ngữ chỉ Mai (cô ấy) -> dùng đại từ nhân xưng 'She' (viết hoa).",
        "Đứng trước danh từ 'idea' để sở hữu -> dùng tính từ sở hữu 'her'.",
        "Đứng trước động từ 'practiced' làm chủ ngữ đại diện cho cả nhóm (chúng tôi) -> dùng đại từ nhân xưng 'We' (viết hoa).",
        "Đứng sau cụm động từ 'give' đóng vai trò tân ngữ -> dùng đại từ tân ngữ 'us'.",
        "Đứng trước động từ 'are' làm chủ ngữ khi giáo viên đối thoại trực tiếp (các em) -> dùng đại từ nhân xưng 'You' (viết hoa).",
        "Đứng sau cụm giới từ 'helping' làm tân ngữ -> dùng đại từ tân ngữ 'us' (chúng em).",
        "Đứng trước động từ 'sends' làm chủ ngữ thay thế cho 'app' (nó) -> dùng đại từ nhân xưng 'It' (viết hoa).",
        "Đứng trước danh từ 'design' bổ nghĩa sở hữu cho ứng dụng (của nó) -> dùng tính từ sở hữu 'its'.",
        "Đứng trước động từ 'hope' làm chủ ngữ chỉ cả nhóm (chúng tôi) -> dùng đại từ nhân xưng 'We' (viết hoa).",
        "Đứng sau động từ 'told' làm tân ngữ chỉ Khoa (anh ấy) -> dùng đại từ tân ngữ 'him'.",
        "Đứng sau giới từ 'believes in' đóng vai trò tân ngữ -> dùng đại từ tân ngữ 'us'."
    ]
};

// Dữ liệu Bài tập thêm 1: Trắc nghiệm (10 câu)
const pronounsPracticeExtra1Data = [
    { 
        q: "Peter loves sports. ___ plays football every weekend.", 
        options: ["He", "His", "Him", "Himself"], 
        a: 0, 
        exp: "Vị trí cần điền đứng trước động từ 'plays' -> cần Đại từ nhân xưng làm Chủ ngữ (He)." 
    },
    { 
        q: "This book is not mine. Is it ___?", 
        options: ["your", "yours", "you", "yourself"], 
        a: 1, 
        exp: "Cuối câu không có danh từ -> cần dùng Đại từ sở hữu (yours = your book)." 
    },
    { 
        q: "The cat licked ___ paws after eating.", 
        options: ["it", "it's", "its", "itself"], 
        a: 2, 
        exp: "Trước danh từ 'paws' cần Tính từ sở hữu (its). Lưu ý 'it\'s' = it is." 
    },
    { 
        q: "They built the house all by ___.", 
        options: ["them", "theirs", "themselves", "their"], 
        a: 2, 
        exp: "Cụm 'by oneself' nghĩa là tự mình làm. Ở đây chủ ngữ là They -> themselves." 
    },
    { 
        q: "My parents are angry. I need to talk to ___.", 
        options: ["they", "them", "their", "theirs"], 
        a: 1, 
        exp: "Đứng sau giới từ 'to' và động từ 'talk' -> cần Đại từ nhân xưng làm Tân ngữ (them)." 
    },
    { 
        q: "___ are the shoes I bought yesterday.", 
        options: ["This", "That", "These", "Those"], 
        a: 2, 
        exp: "Động từ là 'are' (số nhiều) và 'shoes' (số nhiều) -> cần Đại từ chỉ định số nhiều gần (These)." 
    },
    { 
        q: "Sarah and I are going to the cinema. Do you want to come with ___?", 
        options: ["us", "we", "me", "ourselves"], 
        a: 0, 
        exp: "'Sarah and I' = We. Tân ngữ đứng sau giới từ with là us." 
    },
    { 
        q: "Everyone is responsible for ___ own actions.", 
        options: ["his", "their", "there", "themselves"], 
        a: 1, 
        exp: "Với các đại từ bất định chỉ người như everyone/everybody, ta thường dùng tính từ sở hữu 'their' thay thế." 
    },
    { 
        q: "Look at ___ bird in the sky! It's so beautiful.", 
        options: ["this", "that", "these", "those"], 
        a: 1, 
        exp: "'in the sky' chỉ khoảng cách xa, 'bird' là số ít -> dùng that." 
    },
    { 
        q: "We enjoyed ___ very much at the party.", 
        options: ["ourselves", "us", "our", "ours"], 
        a: 0, 
        exp: "Cụm 'enjoy oneself' = có khoảng thời gian vui vẻ. Chủ ngữ We -> ourselves." 
    }
];

// Dữ liệu Bài tập thêm 2: Dùng This/These để nối câu (5 câu)
const pronounsPracticeExtra2Data = [
    { 
        q: "People are using too much plastic. ___ causes environmental problems. (sử dụng This/These)", 
        a: ["This", "This problem", "This habit", "This action"],
        exp: "Thay thế cho toàn bộ sự việc 'sử dụng quá nhiều nhựa' -> Dùng 'This' hoặc 'This + Danh từ khái quát'." 
    },
    { 
        q: "Some students don't sleep enough. ___ leads to poor health.", 
        a: ["This", "This problem", "This habit"],
        exp: "Thay thế cho sự việc 'thiếu ngủ' -> Dùng 'This'." 
    },
    { 
        q: "Smartphones and laptops are expensive. However, ___ devices are necessary for study.", 
        a: ["these", "those"],
        exp: "Smartphones and laptops là số nhiều -> dùng 'These' (hoặc 'Those')." 
    },
    { 
        q: "I forgot to do my homework. ___ made the teacher angry.", 
        a: ["This", "This mistake", "This action"],
        exp: "Thay thế cho việc 'quên làm bài tập' (sự việc) -> dùng 'This'." 
    },
    { 
        q: "Fresh air, trees, and clean water. ___ are things we need to protect.", 
        a: ["These", "Those"],
        exp: "Liệt kê nhiều thứ (fresh air, trees, clean water) -> dùng 'These' (số nhiều)." 
    }
];

// Dữ liệu Bài tập thêm 3: Điền Đại từ vào Lá thư (10 chỗ trống - Không có gợi ý tiếng Việt)
const pronounsLetterData = {
    segments: [
        { text: "Dear Alex,<br><br>How are you? " },
        { text: " am writing to tell you about my new job in Da Nang. " },
        { text: " is an exciting position at an international school. The campus is very modern, and " },
        { text: " facilities are wonderful. My new colleagues are friendly and helpful. Whenever I have a question, " },
        { text: " always support " },
        { text: ". My manager is also very kind; " },
        { text: " gave " },
        { text: " some great advice on my first day.<br><br>At weekends, my roommate and I often explore the city together. " },
        { text: " really enjoy delicious local food and take photos by " },
        { text: ". How about you and your new course? Please write back to " },
        { text: " soon!<br><br>Best wishes,<br>Lan" }
    ],
    answers: ["I", "It", "its", "they", "me", "she", "me", "We", "ourselves", "me"],
    explanations: [
        "Đứng trước động từ 'am writing' làm chủ ngữ người viết thư -> điền <b>I</b> (viết hoa).",
        "Đứng trước 'is' làm chủ ngữ thay thế cho 'my new job' (công việc) -> điền <b>It</b> (viết hoa).",
        "Đứng trước danh từ 'facilities' bổ nghĩa sở hữu cho trường học -> điền tính từ sở hữu <b>its</b>.",
        "Đứng trước động từ 'always support' làm chủ ngữ thay thế cho 'colleagues' (số nhiều) -> điền <b>they</b>.",
        "Đứng sau động từ 'support' đóng vai trò tân ngữ (hỗ trợ tôi) -> điền <b>me</b>.",
        "Đứng trước động từ 'gave' làm chủ ngữ chỉ 'My manager' -> điền <b>she</b> (hoặc <b>he</b>).",
        "Đứng sau động từ 'gave' làm tân ngữ chỉ người nhận -> điền <b>me</b>.",
        "Đứng trước động từ 'really enjoy' làm chủ ngữ thay thế cho 'my roommate and I' -> điền <b>We</b> (viết hoa).",
        "Cụm từ 'by ourselves' mang nghĩa tự chúng tôi chụp ảnh/tự mình làm -> điền đại từ phản thân <b>ourselves</b>.",
        "Đứng sau giới từ 'to' đóng vai trò tân ngữ (hồi âm cho tôi) -> điền <b>me</b>."
    ]
};

window.renderPronounsDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('content-wrapper');

    // Init tracking arrays if not exists
    if (!window.pronounsAnswersPara) window.pronounsAnswersPara = new Array(pronounsParagraphData.answers.length).fill('');
    if (!window.pronounsAnswersExtra1) window.pronounsAnswersExtra1 = new Array(pronounsPracticeExtra1Data.length).fill(null);
    if (!window.pronounsAnswersExtra2) window.pronounsAnswersExtra2 = new Array(pronounsPracticeExtra2Data.length).fill('');
    if (!window.pronounsAnswersExtra3 || window.pronounsAnswersExtra3.length < 10) window.pronounsAnswersExtra3 = new Array(10).fill('');

    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderPronounsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderPronounsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderPronounsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';

    if (activeTab === 'theory') {
        const theoryCards = pronounsTheoryData.map((item, idx) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem; font-weight: 800;">${item.title}</h3>
                <div style="color: var(--text-main); font-size: 1.1rem; line-height: 1.6;">${item.content}</div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 24px;">Đại từ là công cụ tuyệt vời giúp bài viết của bạn tránh lặp từ và tăng tính mạch lạc (Cohesion).</p>
                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    ${theoryCards}
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_book') {
        let paraHtml = '';
        pronounsParagraphData.segments.forEach((seg, idx) => {
            paraHtml += seg.text;
            if (idx < pronounsParagraphData.answers.length) {
                paraHtml += `<input type="text" id="pro_para_${idx}" class="para-input" placeholder="(${idx + 1})" value="${window.pronounsAnswersPara[idx] || ''}" oninput="window.pronounsAnswersPara[idx] = this.value; document.getElementById('pro_para_explanation').style.display='none'; window.saveProgress(true);" style="width: 80px; padding: 4px 8px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 1.05rem; text-align: center; font-weight: 700; color: var(--primary-color); outline: none; margin: 0 4px; transition: all 0.2s; background: white;">`;
            }
        });

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 1 (TRONG TÀI LIỆU): ĐIỀN ĐẠI TỪ VÀO ĐOẠN VĂN</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Đọc đoạn văn kể về công việc thuyết trình nhóm dưới đây và điền Đại từ nhân xưng, Đại từ tân ngữ, Tính từ sở hữu thích hợp vào chỗ trống.</p>
                    <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); line-height: 2.2;">
                        <p style="font-size: 1.15rem; color: var(--text-main); font-weight: 500; text-align: justify; margin: 0;">
                            ${paraHtml}
                        </p>
                        <div style="margin-top: 28px; text-align: center;">
                            <button onclick="window.checkPronounsParagraph()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                        <div id="pro_para_explanation" style="display: none; margin-top: 28px; padding: 20px; border-radius: 12px; background: #f8fafc; border: 1px solid var(--border-color);">
                            <h3 style="color: var(--primary-color); font-size: 1.2rem; margin-bottom: 16px;">Giải thích chi tiết:</h3>
                            <div id="pro_para_exp_list" style="margin: 0; font-size: 1rem; line-height: 1.8; color: var(--text-main);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_extra') {
        const extra1Html = pronounsPracticeExtra1Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-left: 44px;">
                    ${q.options.map((opt, oIdx) => `
                        <button class="option-btn" id="pro_extra1_opt_${idx}_${oIdx}" onclick="window.selectPronounsExtra1(${idx}, ${oIdx})" style="padding: 12px 16px; border: 2px solid ${window.pronounsAnswersExtra1[idx] === oIdx ? 'var(--primary-color)' : '#e2e8f0'}; border-radius: 8px; background: ${window.pronounsAnswersExtra1[idx] === oIdx ? '#eff6ff' : 'white'}; text-align: left; font-size: 1.05rem; cursor: pointer; transition: all 0.2s; font-weight: 500; color: #334155;">
                            <b>${String.fromCharCode(65 + oIdx)}.</b> ${opt}
                        </button>
                    `).join('')}
                </div>
                <div style="padding-left: 44px;">
                    <div id="proexp_extra1_${idx}" style="display: none; margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-size: 1.05rem;"></div>
                </div>
            </div>
        `).join('');

        const extra2Html = pronounsPracticeExtra2Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.1rem; font-weight: 500; color: var(--text-main); margin-top: 4px; line-height: 1.6;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="pro_extra2_input_${idx}" placeholder="Nhập từ chỉ định..." value="${window.pronounsAnswersExtra2[idx] || ''}" style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; width: 100%; box-sizing: border-box;" oninput="window.pronounsAnswersExtra2[${idx}] = this.value; document.getElementById('proexp_extra2_${idx}').style.display='none'; window.saveProgress(true);">
                    <button onclick="window.checkPronounsExtra2(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; align-self: flex-start;">Kiểm tra</button>
                </div>
                <div id="proexp_extra2_${idx}" style="display: none; margin-top: 12px; margin-left: 44px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        let letterHtml = '';
        pronounsLetterData.segments.forEach((seg, idx) => {
            letterHtml += seg.text;
            if (idx < pronounsLetterData.answers.length) {
                letterHtml += `<input type="text" id="pro_letter_${idx}" class="para-input" placeholder="(${idx + 1})" value="${window.pronounsAnswersExtra3[idx] || ''}" oninput="window.pronounsAnswersExtra3[idx] = this.value; document.getElementById('pro_letter_explanation').style.display='none'; window.saveProgress(true);" style="width: 80px; padding: 4px 8px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 1.05rem; text-align: center; font-weight: 700; color: var(--primary-color); outline: none; margin: 0 4px; transition: all 0.2s; background: white;">`;
            }
        });

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 1: TRẮC NGHIỆM ĐẠI TỪ & SỞ HỮU</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Lựa chọn đại từ hoặc tính từ sở hữu đúng ngữ pháp để hoàn thành câu.</p>
                    <div>${extra1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPronounsExtra1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px;">

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 2: DÙNG THIS / THESE ĐỂ NỐI CÂU</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Sử dụng Đại từ chỉ định (This/These/That/Those) để thay thế và liên kết ý của câu trước đó. Kỹ năng này rất hữu ích trong Writing.</p>
                    <div>${extra2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPronounsExtra2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 40px;">

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 3: ĐIỀN ĐẠI TỪ VÀO LÁ THƯ (10 CHỖ TRỐNG)</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Đọc lá thư gửi bạn dưới đây và điền Đại từ nhân xưng, Đại từ tân ngữ, Tính từ sở hữu hoặc Đại từ phản thân thích hợp vào chỗ trống.</p>
                    <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); line-height: 2.2;">
                        <div style="font-size: 1.15rem; color: var(--text-main); font-weight: 500; text-align: justify; margin: 0; background: #fafafa; padding: 20px; border-radius: 8px; border-left: 4px solid var(--primary-color);">
                            ${letterHtml}
                        </div>
                        <div style="margin-top: 28px; text-align: center;">
                            <button onclick="window.checkPronounsLetter()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                        <div id="pro_letter_explanation" style="display: none; margin-top: 28px; padding: 20px; border-radius: 12px; background: #f8fafc; border: 1px solid var(--border-color);">
                            <h3 style="color: var(--primary-color); font-size: 1.2rem; margin-bottom: 16px;">Giải thích chi tiết:</h3>
                            <div id="pro_letter_exp_list" style="margin: 0; font-size: 1rem; line-height: 1.8; color: var(--text-main);">
                            </div>
                        </div>
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
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 02: ĐẠI TỪ (PRONOUNS)</h1>
            ${tabsHtml}
        </div>
        ${contentHtml}
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(window.restoreAnswers, 100);
};

window.selectPronounsExtra1 = function(qIdx, optIdx) {
    window.pronounsAnswersExtra1[qIdx] = optIdx;
    window.saveProgress(true);
    for (let i = 0; i < pronounsPracticeExtra1Data[qIdx].options.length; i++) {
        const btn = document.getElementById(`pro_extra1_opt_${qIdx}_${i}`);
        if (btn) {
            if (i === optIdx) {
                btn.style.border = '2px solid var(--primary-color)';
                btn.style.background = '#eff6ff';
            } else {
                btn.style.border = '2px solid #e2e8f0';
                btn.style.background = 'white';
            }
        }
    }
    const exp = document.getElementById(`proexp_extra1_${qIdx}`);
    if (exp) exp.style.display = 'none';
};

window.checkPronounsExtra1 = function(idx) {
    const ans = window.pronounsAnswersExtra1[idx];
    const expDiv = document.getElementById(`proexp_extra1_${idx}`);
    if (!expDiv) return;
    
    if (ans === null) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa chọn!</b> Vui lòng chọn một đáp án.';
        return;
    }
    
    const correctIdx = pronounsPracticeExtra1Data[idx].a;
    expDiv.style.display = 'block';
    
    if (ans === correctIdx) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${pronounsPracticeExtra1Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Đáp án đúng là <b>${pronounsPracticeExtra1Data[idx].options[correctIdx]}</b>. ${pronounsPracticeExtra1Data[idx].exp}`;
    }
};

window.submitPronounsExtra1 = function() {
    let score = 0;
    pronounsPracticeExtra1Data.forEach((q, idx) => {
        window.checkPronounsExtra1(idx);
        if (window.pronounsAnswersExtra1[idx] === q.a) score++;
    });
    window.showExerciseResult(score, pronounsPracticeExtra1Data.length, "KẾT QUẢ BÀI TẬP THÊM 1 (ĐẠI TỪ)");
};

window.checkPronounsExtra2 = function(idx) {
    const userInput = window.pronounsAnswersExtra2[idx];
    const expDiv = document.getElementById(`proexp_extra2_${idx}`);
    if (!expDiv) return;
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa nhập!</b> Vui lòng nhập đáp án của bạn.';
        return;
    }
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = pronounsPracticeExtra2Data[idx].a;
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
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${pronounsPracticeExtra2Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA ĐÚNG.</b> Tham khảo: <b>${validAnswers[0]}</b>. ${pronounsPracticeExtra2Data[idx].exp}`;
    }
};

window.submitPronounsExtra2 = function() {
    let score = 0;
    pronounsPracticeExtra2Data.forEach((q, idx) => {
        const userInput = window.pronounsAnswersExtra2[idx];
        if (userInput) {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            if (q.a.some(ans => cleanUser === ans.toLowerCase())) score++;
        }
        window.checkPronounsExtra2(idx);
    });
    window.showExerciseResult(score, pronounsPracticeExtra2Data.length, "KẾT QUẢ BÀI TẬP THÊM 2 (ĐẠI TỪ)");
};

window.checkPronounsLetter = function() {
    const data = pronounsLetterData;
    const expDiv = document.getElementById('pro_letter_explanation');
    const expList = document.getElementById('pro_letter_exp_list');
    if (!expDiv || !expList) return;
    
    let html = '';
    let correctCount = 0;
    
    data.answers.forEach((correctAnswer, idx) => {
        const input = document.getElementById(`pro_letter_${idx}`);
        if (!input) return;
        
        const val = input.value.trim();
        let isCorrect = val.toLowerCase() === correctAnswer.toLowerCase();
        // Cho phép 'he' hoặc 'she' ở câu số 6
        if (idx === 5 && (val.toLowerCase() === 'she' || val.toLowerCase() === 'he')) {
            isCorrect = true;
        }
        
        if (isCorrect) {
            input.style.borderColor = '#22c55e';
            input.style.background = '#f0fdf4';
            input.style.color = '#15803d';
            correctCount++;
            html += `<li style="margin-bottom: 8px;"><span style="color:#15803d; font-weight:bold;">Chỗ trống (${idx + 1}) [Đúng]:</span> Đáp án: <b>${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        } else {
            input.style.borderColor = '#ef4444';
            input.style.background = '#fef2f2';
            input.style.color = '#b91c1c';
            html += `<li style="margin-bottom: 8px;"><span style="color:#b91c1c; font-weight:bold;">Chỗ trống (${idx + 1}) [Sai]:</span> Bạn điền "${val || 'trống'}", đáp án đúng là <b style="color:#15803d;">${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
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

    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI TẬP THÊM 3 (ĐIỀN LÁ THƯ)");
};

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

    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI TẬP ÁP DỤNG (TRONG TÀI LIỆU)");
};


// ==================== VERBS LOGIC ====================
window.renderVerbsDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('content-wrapper');
    
    // Init global vars if not exist
    if (!window.verbsAnswersBook1) window.verbsAnswersBook1 = new Array(verbsPracticeBook1.length).fill('');
    if (!window.verbsAnswersBook2) window.verbsAnswersBook2 = new Array(verbsPracticeBook2.length).fill('');
    if (!window.verbsAnswersBook3) window.verbsAnswersBook3 = new Array(verbsPracticeBook3.length).fill('');
    if (!window.verbsAnswersBook4) window.verbsAnswersBook4 = new Array(verbsPracticeBook4.length).fill('');
    if (!window.verbsAnswers1) window.verbsAnswers1 = new Array(verbsPractice1Data.length).fill(null);
    if (!window.verbsAnswers2) window.verbsAnswers2 = new Array(verbsPractice2Data.length).fill('');
    if (!window.verbsAnswersPara) window.verbsAnswersPara = new Array(verbsPracticeParaData.answers.length).fill('');
    if (!window.verbsAnswersExtra3) window.verbsAnswersExtra3 = new Array(verbsPracticeExtra3Data.length).fill('');

    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderVerbsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderVerbsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderVerbsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';
    
    if (activeTab === 'theory') {
        const theoryCards = verbsTheoryData.map((item, idx) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem; font-weight: 800;">${item.title}</h3>
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
    } else if (activeTab === 'practice_book' || activeTab === 'practice_extra') {
        // PRACTICE

        // BÀI 4: Luyện tập chung BOOK
        const pBook4Html = verbsPracticeBook4.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('verb_hint_book4_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="verb_hint_book4_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="verb_trans_book4_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook4[${idx}] = this.value; document.getElementById('verbexp_book4_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook4[idx] || ''}">
                    <button onclick="checkVerbsBook(4, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp_book4_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 1: Dịch (Động từ thường)
        const pBook1Html = verbsPracticeBook1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('verb_hint_1_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="verb_hint_1_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="verb_trans1_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook1[${idx}] = this.value; document.getElementById('verbexp_book1_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook1[idx] || ''}">
                    <button onclick="checkVerbsBook(1, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp_book1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 2: Dịch (To-be)
        const pBook2Html = verbsPracticeBook2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('verb_hint_2_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="verb_hint_2_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="verb_trans2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook2[${idx}] = this.value; document.getElementById('verbexp_book2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook2[idx] || ''}">
                    <button onclick="checkVerbsBook(2, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp_book2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 3: Dịch (Khiếm khuyết)
        const pBook3Html = verbsPracticeBook3.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('verb_hint_3_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="verb_hint_3_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="verb_trans3_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersBook3[${idx}] = this.value; document.getElementById('verbexp_book3_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersBook3[idx] || ''}">
                    <button onclick="checkVerbsBook(3, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp_book3_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // BÀI 4: Trắc nghiệm (cũ là Bài 1)
        const p1Html = verbsPractice1Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
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

        // BÀI 5: Sửa lỗi sai (cũ là Bài 2)
        
        // BÀI 3: Dịch (Khiếm khuyết) EXTRA
        const pExtra3Html = verbsPracticeExtra3Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('verb_hint_extra3_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="verb_hint_extra3_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="verb_trans_extra3_${idx}" placeholder="Nhập bản dịch tiếng Anh (nhớ có dấu chấm ở cuối câu)..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.verbsAnswersExtra3[${idx}] = this.value; document.getElementById('verbexp_extra3_${idx}').style.display='none'; window.saveProgress(true);" value="${window.verbsAnswersExtra3[idx] || ''}">
                    <button onclick="checkVerbsExtra3(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="verbexp_extra3_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        const p2Html = verbsPractice2Data.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
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

        // BÀI 6: Chia động từ trong đoạn văn (cũ là Bài 3)
        let paraHtml = '';
        verbsPracticeParaData.segments.forEach((seg, idx) => {
            paraHtml += seg.text;
            if (idx < verbsPracticeParaData.answers.length) {
                paraHtml += `<input type="text" id="verb_para_${idx}" class="para-input" placeholder="(${idx + 1})" value="${window.verbsAnswersPara[idx] || ''}" oninput="window.verbsAnswersPara[${idx}] = this.value; document.getElementById('verb_para_explanation').style.display='none'; window.saveProgress(true);" style="width: 120px; padding: 4px 8px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 1.05rem; text-align: center; font-weight: 700; color: var(--primary-color); outline: none; margin: 0 4px; transition: all 0.2s; background: white;">`;
            }
        });

        if (activeTab === 'practice_book') {
            contentHtml = `
                <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                    <h1 style="color: #059669; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">📖 BÀI TẬP TRONG TÀI LIỆU</h1>

                    <!-- BÀI 1 BOOK -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid var(--primary-color);">
                        <h2 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Động từ thường (Dịch câu)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh. Chú ý cách dùng thì.</p>
                        <div style="display: grid; gap: 16px;">
                            ${pBook1Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbsBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>

                    <!-- BÀI 2 BOOK -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #f59e0b;">
                        <h2 style="color: #d97706; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Động từ To-be (Dịch câu)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh. Chú ý cách dùng thì.</p>
                        <div style="display: grid; gap: 16px;">
                            ${pBook2Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbsBook2()" style="padding: 12px 32px; background: #f59e0b; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(245,158,11,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>

                    <!-- BÀI 3 BOOK -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #10b981;">
                        <h2 style="color: #059669; margin-bottom: 16px; font-size: 1.4rem;">Bài 3: Động từ khiếm khuyết (Dịch câu)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh.</p>
                        <div style="display: grid; gap: 16px;">
                            ${pBook3Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbsBook3()" style="padding: 12px 32px; background: #10b981; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>

                    <!-- BÀI 4 BOOK -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #8b5cf6;">
                        <h2 style="color: #7c3aed; margin-bottom: 16px; font-size: 1.4rem;">Bài 4: Luyện tập chung (Dịch câu)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Áp dụng các kiến thức đã học, chuyển các câu sau đây sang tiếng Anh.</p>
                        <div style="display: grid; gap: 16px;">
                            ${pBook4Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbsBook4()" style="padding: 12px 32px; background: #8b5cf6; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(139,92,246,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>
                </div>
            `;
        } else if (activeTab === 'practice_extra') {
            contentHtml = `
                <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                    <h1 style="color: #6366f1; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">🚀 BÀI TẬP THÊM</h1>

                    <!-- BÀI 1 (OLD 4) -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #6366f1;">
                        <h2 style="color: #4f46e5; margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Sự hòa hợp Chủ - Vị (Trắc nghiệm)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn dạng động từ đúng nhất để hoàn thành các câu sau.</p>
                        <div style="display: grid; gap: 16px;">
                            ${p1Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbs4()" style="padding: 12px 32px; background: #6366f1; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>

                    <!-- BÀI 2 (OLD 5) -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #ec4899;">
                        <h2 style="color: #db2777; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Sửa lỗi sai về Thì / Động từ</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Tìm ra lỗi sai trong cách chia động từ (phần bôi đậm) và viết lại dạng đúng.</p>
                        <div style="display: grid; gap: 16px;">
                            ${p2Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbs5()" style="padding: 12px 32px; background: #ec4899; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(236,72,153,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>

                    



                    <!-- BÀI 3 EXTRA -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #14b8a6;">
                        <h2 style="color: #0d9488; margin-bottom: 16px; font-size: 1.4rem;">Bài 3: Động từ khiếm khuyết (Dịch câu)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Dịch các câu sau sang tiếng Anh. Chú ý sử dụng Động từ khiếm khuyết.</p>
                        <div style="display: grid; gap: 16px;">
                            ${pExtra3Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbsExtra3()" style="padding: 12px 32px; background: #14b8a6; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(20,184,166,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>

                    <!-- BÀI 4 (OLD 6) -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #8b5cf6;">
                        <h2 style="color: #7c3aed; margin-bottom: 16px; font-size: 1.4rem;">Bài 4: Điền từ vào đoạn văn</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chia động từ thích hợp vào các ô trống trong đoạn văn sau (Chú ý chia theo thì và chủ ngữ).</p>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; font-size: 1.15rem; line-height: 2; color: #334155;">
                            ${paraHtml}
                        </div>
                        <div id="verb_para_explanation" style="display: none; margin-top: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px;">
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbs6()" style="padding: 12px 32px; background: #8b5cf6; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(139,92,246,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    contentWrapper.innerHTML = tabsHtml + contentHtml;
}


// ==================== VERBS BOOK LOGIC ====================
window.checkVerbsBook = function(bookId, idx) {
    const dataArray = bookId === 1 ? verbsPracticeBook1 : bookId === 2 ? verbsPracticeBook2 : bookId === 3 ? verbsPracticeBook3 : verbsPracticeBook4;
    const ansArray = bookId === 1 ? window.verbsAnswersBook1 : bookId === 2 ? window.verbsAnswersBook2 : bookId === 3 ? window.verbsAnswersBook3 : window.verbsAnswersBook4;
    const q = dataArray[idx];
    const rawVal = ansArray[idx] || "";
    const val = rawVal.trim();
    const expDiv = document.getElementById(`verbexp_book${bookId}_${idx}`);
    
    if (!val) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = "❌ Bạn chưa nhập câu trả lời!";
        return;
    }

    const isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val));
    const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
    
    expDiv.style.display = 'block';
    if (formCheck.valid) {
        expDiv.style.background = '#f0fdf4';
        expDiv.style.color = '#166534';
        expDiv.style.border = '1px solid #bbf7d0';
        expDiv.innerHTML = "✅ Chính xác!";
    } else if (formCheck.isNear) {
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = formCheck.message;
    } else {
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = `❌ Chưa chính xác. <br><br><b>💡 Gợi ý đáp án đúng:</b><br>- ${q.a.join('<br>- ')}`;
    }
}

window.submitVerbsBook1 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook1.forEach((q, idx) => {
        const val = (window.verbsAnswersBook1[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val))) {
            correctCount++;
        }
        window.checkVerbsBook(1, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook1.length, "KẾT QUẢ BÀI 1 (ĐỘNG TỪ TRONG SÁCH)");
}

window.submitVerbsBook2 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook2.forEach((q, idx) => {
        const val = (window.verbsAnswersBook2[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val))) {
            correctCount++;
        }
        window.checkVerbsBook(2, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook2.length, "KẾT QUẢ BÀI 2 (ĐỘNG TỪ TRONG SÁCH)");
}


window.submitVerbsBook4 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook4.forEach((q, idx) => {
        const val = (window.verbsAnswersBook4[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val))) {
            correctCount++;
        }
        window.checkVerbsBook(4, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook4.length, "KẾT QUẢ BÀI 4 (LUYỆN TẬP CHUNG)");
}

window.submitVerbsBook3 = function() {
    let correctCount = 0;
    let completed = true;
    verbsPracticeBook3.forEach((q, idx) => {
        const val = (window.verbsAnswersBook3[idx] || "").trim().toLowerCase();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val))) {
            correctCount++;
        }
        window.checkVerbsBook(3, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, verbsPracticeBook3.length, "KẾT QUẢ BÀI 3 (ĐỘNG TỪ TRONG SÁCH)");
}

window.submitVerbs4 = function() {
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
    window.showExerciseResult(correctCount, verbsPractice1Data.length, "KẾT QUẢ BÀI 4 (ĐỘNG TỪ)");
}

window.submitVerbs5 = function() {
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
    window.showExerciseResult(correctCount, verbsPractice2Data.length, "KẾT QUẢ BÀI 5 (ĐỘNG TỪ)");
}


window.checkVerbsExtra3 = function(idx) {
    const userInput = window.verbsAnswersExtra3[idx];
    const expDiv = document.getElementById(`verbexp_extra3_${idx}`);
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa nhập!</b> Vui lòng nhập bản dịch của bạn.';
        return;
    }
    
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const validAnswers = verbsPracticeExtra3Data[idx].a;
    let isCorrect = false;
    
    for (let ans of validAnswers) {
        let cleanAns = ans.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
        if (cleanUser === cleanAns) {
            isCorrect = true;
            break;
        }
    }
    
    const formCheck = window.checkSentencePunctuation(userInput, isCorrect);
    
    expDiv.style.display = 'block';
    if (formCheck.valid) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b>`;
    } else if (formCheck.isNear) {
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = formCheck.message;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ CHƯA ĐÚNG.</b> Tham khảo: <b>${validAnswers[0]}</b>`;
    }
}

window.submitVerbsExtra3 = function() {
    let correctCount = 0;
    verbsPracticeExtra3Data.forEach((q, idx) => {
        window.checkVerbsExtra3(idx);
        const userInput = window.verbsAnswersExtra3[idx];
        if (userInput) {
            const cleanUser = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
            const hasDot = userInput.trim().endsWith('.');
            for (let ans of q.a) {
                if (cleanUser === ans.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ') && hasDot) {
                    correctCount++;
                    break;
                }
            }
        }
    });
    window.showExerciseResult(correctCount, verbsPracticeExtra3Data.length, "KẾT QUẢ BÀI 3 (ĐỘNG TỪ KHIẾM KHUYẾT)");
}

window.submitVerbs6 = function() {
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
    window.showExerciseResult(correctCount, data.answers.length, "KẾT QUẢ BÀI 6 (ĐỘNG TỪ)");
}



window.selectVerbs1Option = function(el, idx, oIdx) {
    window.verbsAnswers1[idx] = oIdx;
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
    window.saveProgress(true);
};

window.checkVerbs1 = function(idx) {
    const ans = window.verbsAnswers1[idx];
    const expDiv = document.getElementById(`verbexp1_${idx}`);
    
    if (ans === null) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa chọn!</b> Vui lòng chọn một đáp án.';
        return;
    }
    
    const correctIdx = verbsPractice1Data[idx].answer;
    expDiv.style.display = 'block';
    
    if (ans === correctIdx) {
        expDiv.style.background = '#f0fdf4'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ CHÍNH XÁC!</b> ${verbsPractice1Data[idx].exp}`;
    } else {
        expDiv.style.background = '#fef2f2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Đáp án đúng là <b>${verbsPractice1Data[idx].options[correctIdx]}</b>. ${verbsPractice1Data[idx].exp}`;
    }
};

window.checkVerbs2 = function(idx) {
    const userInput = window.verbsAnswers2[idx];
    const expDiv = document.getElementById(`verbexp2_${idx}`);
    
    if (!userInput || userInput.trim() === '') {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = '<b>⚠️ Bạn chưa điền!</b> Vui lòng điền câu trả lời.';
        return;
    }
    
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
        expDiv.innerHTML = `<b>❌ SAI RỒI!</b> Đáp án đúng là: <b>${validAnswers.join(' / ')}</b>.<br>${verbsPractice2Data[idx].exp}`;
    }
};

window.checkVerbsParagraph = function() {
    const data = verbsPracticeParaData;
    const expDiv = document.getElementById('verb_para_explanation');
    
    let html = '<h3 style="color: var(--primary-color); font-size: 1.2rem; margin-bottom: 12px; margin-top: 0; font-weight: 800;">Giải thích chi tiết:</h3><ul style="margin:0; padding-left:20px; line-height: 1.8; font-size: 1.05rem; color: #334155;" id="verb_para_exp_list">';
    
    data.answers.forEach((correctAnswer, idx) => {
        const input = document.getElementById(`verb_para_${idx}`);
        if (!input) return;
        
        const val = input.value.trim();
        const isCorrect = val.toLowerCase() === correctAnswer.toLowerCase();
        
        if (isCorrect) {
            input.style.borderColor = '#22c55e';
            input.style.background = '#f0fdf4';
            input.style.color = '#15803d';
            html += `<li style="margin-bottom: 8px;"><span style="color:#15803d; font-weight:bold;">Câu ${idx + 1} (Đúng):</span> Đáp án là <b>${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        } else {
            input.style.borderColor = '#ef4444';
            input.style.background = '#fef2f2';
            input.style.color = '#b91c1c';
            html += `<li style="margin-bottom: 8px;"><span style="color:#ef4444; font-weight:bold;">Câu ${idx + 1} (Sai):</span> Đáp án đúng là <b>${correctAnswer}</b>. ${data.explanations[idx]}</li>`;
        }
    });
    
    html += '</ul>';
    
    expDiv.style.display = 'block';
    expDiv.innerHTML = html;
};


// --- ADVERBS DATA ---
const adverbsTheoryData = [
    {
        title: "1. ĐỊNH NGHĨA VÀ CHỨC NĂNG",
        content: `
            <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main); margin-bottom: 20px;">
                <b>Trạng từ (Adverbs)</b> là những từ dùng để bổ nghĩa cho <span style="color: var(--primary-color); font-weight: 600;">động từ</span>, <span style="color: var(--primary-color); font-weight: 600;">tính từ</span>, một <span style="color: var(--primary-color); font-weight: 600;">trạng từ khác</span>, hoặc cho <span style="color: var(--primary-color); font-weight: 600;">cả câu</span>. Nó thường trả lời cho các câu hỏi <span style="background: #f1f5f9; padding: 2px 8px; border-radius: 6px; font-weight: 600; color: #334155; border: 1px solid #cbd5e1;">How? When? Where? How often?</span>
            </p>
            <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 20px; border-radius: 12px; border-left: 5px solid var(--primary-color); box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                <p style="font-size: 1.15rem; font-weight: bold; color: var(--primary-color); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg> 
                    Các chức năng chính:
                </p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                        <span style="font-weight: 600; color: #334155;">1. Bổ nghĩa cho động từ thường:</span>
                        <span style="color: #475569;">Jenny plays basketball <span style="color: var(--primary-color); font-weight: 600; background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">well</span>. <i style="color: #64748b; font-size: 0.95em;">(Cô ấy chơi bóng rổ như thế nào? &rarr; Giỏi)</i></span>
                    </div>
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                        <span style="font-weight: 600; color: #334155;">2. Bổ nghĩa cho tính từ:</span>
                        <span style="color: #475569;">She is <span style="color: var(--primary-color); font-weight: 600; background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">extremely</span> intelligent. <i style="color: #64748b; font-size: 0.95em;">(Thông minh đến mức nào? &rarr; Cực kỳ)</i></span>
                    </div>
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                        <span style="font-weight: 600; color: #334155;">3. Bổ nghĩa cho một trạng từ khác (nhằm mục đích nhấn mạnh):</span>
                        <span style="color: #475569;">Jenny plays basketball <span style="color: var(--primary-color); font-weight: 600; background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">very</span> well. <i style="color: #64748b; font-size: 0.95em;">(Giỏi đến mức nào? &rarr; 'Very' bổ nghĩa và nhấn mạnh cho trạng từ 'well')</i></span>
                    </div>
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                        <span style="font-weight: 600; color: #334155;">4. Bổ nghĩa cho cả câu:</span>
                        <span style="color: #475569;"><span style="color: var(--primary-color); font-weight: 600; background: #e0e7ff; padding: 2px 6px; border-radius: 4px;">Recently</span>, I have taken part in an English course. <i style="color: #64748b; font-size: 0.95em;">(Vào lúc nào? &rarr; Gần đây)</i></span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "2. PHÂN LOẠI TRẠNG TỪ THƯỜNG GẶP",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 16px;">
                <div style="background: #fdf4ff; border: 1px solid #fae8ff; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <h4 style="color: #a21caf; font-size: 1.15rem; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">⏱️ Thời gian (Time)</h4>
                    <p style="color: #701a75; font-size: 0.95rem; margin-bottom: 12px;">Cho biết hành động xảy ra khi nào.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
                        <span style="background: white; color: #86198f; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #f5d0fe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">recently</span>
                        <span style="background: white; color: #86198f; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #f5d0fe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">lately</span>
                        <span style="background: white; color: #86198f; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #f5d0fe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">soon</span>
                        <span style="background: white; color: #86198f; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #f5d0fe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">yesterday</span>
                        <span style="background: white; color: #86198f; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #f5d0fe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">now</span>
                        <span style="padding: 4px; font-size: 1rem; color: #a21caf; font-weight: 700; letter-spacing: 2px;">...</span>
                    </div>
                </div>

                <div style="background: #f0fdf4; border: 1px solid #dcfce7; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <h4 style="color: #15803d; font-size: 1.15rem; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">📍 Nơi chốn (Place)</h4>
                    <p style="color: #14532d; font-size: 0.95rem; margin-bottom: 12px;">Cho biết hành động xảy ra ở đâu.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
                        <span style="background: white; color: #166534; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">here</span>
                        <span style="background: white; color: #166534; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">there</span>
                        <span style="background: white; color: #166534; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">everywhere</span>
                        <span style="background: white; color: #166534; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">outside</span>
                        <span style="background: white; color: #166534; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">inside</span>
                        <span style="padding: 4px; font-size: 1rem; color: #15803d; font-weight: 700; letter-spacing: 2px;">...</span>
                    </div>
                </div>

                <div style="background: #eff6ff; border: 1px solid #dbeafe; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <h4 style="color: #1d4ed8; font-size: 1.15rem; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">🎭 Cách thức (Manner)</h4>
                    <p style="color: #1e3a8a; font-size: 0.95rem; margin-bottom: 12px;">Cho biết hành động diễn ra như thế nào.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
                        <span style="background: white; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">fluently</span>
                        <span style="background: white; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">carefully</span>
                        <span style="background: white; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">reluctantly</span>
                        <span style="background: white; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">quickly</span>
                        <span style="background: white; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">slowly</span>
                        <span style="padding: 4px; font-size: 1rem; color: #1d4ed8; font-weight: 700; letter-spacing: 2px;">...</span>
                    </div>
                </div>

                <div style="background: #fffbeb; border: 1px solid #fef3c7; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <h4 style="color: #b45309; font-size: 1.15rem; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">🔄 Tần suất (Frequency)</h4>
                    <p style="color: #78350f; font-size: 0.95rem; margin-bottom: 12px;">Cho biết mức độ thường xuyên.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
                        <span style="background: white; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fde68a; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">always</span>
                        <span style="background: white; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fde68a; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">usually</span>
                        <span style="background: white; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fde68a; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">occasionally</span>
                        <span style="background: white; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fde68a; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">rarely</span>
                        <span style="background: white; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fde68a; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">never</span>
                        <span style="padding: 4px; font-size: 1rem; color: #b45309; font-weight: 700; letter-spacing: 2px;">...</span>
                    </div>
                </div>

                <div style="background: #fef2f2; border: 1px solid #fee2e2; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <h4 style="color: #b91c1c; font-size: 1.15rem; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">📈 Mức độ (Degree)</h4>
                    <p style="color: #7f1d1d; font-size: 0.95rem; margin-bottom: 12px;">Cho biết cường độ của tính/trạng từ khác.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
                        <span style="background: white; color: #991b1b; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">extremely</span>
                        <span style="background: white; color: #991b1b; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">completely</span>
                        <span style="background: white; color: #991b1b; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">quite</span>
                        <span style="background: white; color: #991b1b; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">slightly</span>
                        <span style="background: white; color: #991b1b; padding: 4px 10px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">very</span>
                        <span style="padding: 4px; font-size: 1rem; color: #b91c1c; font-weight: 700; letter-spacing: 2px;">...</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "3. VỊ TRÍ CỦA TRẠNG TỪ TRONG CÂU",
        content: `
            <div style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">
                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 1.15rem; font-weight: 800; color: #475569; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                        <span style="background: var(--primary-color); color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.9rem;">a</span>
                        Bổ nghĩa cho Động từ
                    </h4>
                    <p style="margin-bottom: 12px; margin-left: 32px; color: #475569;">Đứng <span style="font-weight: 800; color: #1e40af; background: #dbeafe; padding: 2px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">TRƯỚC</span> hoặc <span style="font-weight: 800; color: #1e40af; background: #dbeafe; padding: 2px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">SAU</span> động từ chính. <span style="color: #ef4444; font-weight: 700; background: #fef2f2; padding: 2px 8px; border-radius: 6px; border: 1px solid #fecaca;">(KHÔNG chen vào giữa Động từ và Tân ngữ)</span></p>
                    <div style="background: #f0fdf4; padding: 12px 16px; border-radius: 8px; margin-left: 32px; border-left: 4px solid #22c55e;">
                        <p style="color: #166534; margin-bottom: 6px;">✔ He drives <b style="color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 4px; font-weight: 800;">carefully</b>.</p>
                        <p style="color: #166534; margin-bottom: 6px;">✔ She <b style="color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 4px; font-weight: 800;">completely</b> focuses on reading.</p>
                        <p style="color: #991b1b; font-style: italic; margin-bottom: 0;">✘ She reads <b style="color: #dc2626; background: #fee2e2; padding: 2px 8px; border-radius: 4px; font-weight: 800; text-decoration: line-through;">completely</b> the book. (Sai vị trí)</p>
                    </div>
                </div>

                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 1.15rem; font-weight: 800; color: #475569; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                        <span style="background: var(--primary-color); color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.9rem;">b</span>
                        Bổ nghĩa cho Tính từ / Trạng từ khác
                    </h4>
                    <p style="margin-bottom: 12px; margin-left: 32px; color: #475569;">Luôn đứng <span style="font-weight: 800; color: #1e40af; background: #dbeafe; padding: 2px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">TRƯỚC</span> từ mà nó bổ nghĩa.</p>
                    <div style="background: #f0fdf4; padding: 12px 16px; border-radius: 8px; margin-left: 32px; border-left: 4px solid #22c55e;">
                        <p style="color: #166534; margin-bottom: 6px;">✔ She is <b style="color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 4px; font-weight: 800;">very</b> intelligent. <i>(<b style="color: #7c3aed;">very</b> bổ nghĩa cho tính từ intelligent)</i></p>
                        <p style="color: #166534; margin-bottom: 0;">✔ He speaks <b style="color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 4px; font-weight: 800;">quite</b> fluently. <i>(<b style="color: #7c3aed;">quite</b> bổ nghĩa cho trạng từ fluently)</i></p>
                    </div>
                </div>

                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 1.15rem; font-weight: 800; color: #475569; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                        <span style="background: var(--primary-color); color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.9rem;">c</span>
                        Bổ nghĩa cho Cả câu
                    </h4>
                    <p style="margin-bottom: 12px; margin-left: 32px; color: #475569;">Thường đứng <span style="font-weight: 800; color: #1e40af; background: #dbeafe; padding: 2px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">ĐẦU CÂU</span> hoặc <span style="font-weight: 800; color: #1e40af; background: #dbeafe; padding: 2px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">CUỐI CÂU</span>, ngăn cách với mệnh đề chính bằng dấu phẩy (,).</p>
                    <div style="background: #f0fdf4; padding: 12px 16px; border-radius: 8px; margin-left: 32px; border-left: 4px solid #22c55e;">
                        <p style="color: #166534; margin-bottom: 6px;">✔ <b style="color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 4px; font-weight: 800;">Fortunately</b>, nobody was hurt.</p>
                        <p style="color: #166534; margin-bottom: 0;">✔ We missed the last bus, <b style="color: #7c3aed; background: #ede9fe; padding: 2px 8px; border-radius: 4px; font-weight: 800;">unfortunately</b>.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "4. CÁCH THÀNH LẬP TRẠNG TỪ (TỪ TÍNH TỪ)",
        content: `
            <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
                <p style="margin-bottom: 24px; font-size: 1.15rem; color: #475569;">Để tạo ra một trạng từ chỉ cách thức, ta thường thêm đuôi <b style="color: var(--primary-color); background: #e0e7ff; padding: 2px 8px; border-radius: 4px; border: 1px solid #c7d2fe;">-ly</b> vào sau Tính từ.</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
                    <!-- Quy tắc chung -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 16px; border-bottom: 1px solid #bfdbfe;">
                            <h4 style="color: #1e40af; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px; margin: 0;">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                                Quy tắc chung
                            </h4>
                            <p style="color: #3b82f6; font-size: 0.95rem; margin-top: 4px; margin-bottom: 0;">Thêm trực tiếp -ly vào tính từ</p>
                        </div>
                        <div style="padding: 16px;">
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                                    <span style="color: #475569; font-weight: 500;">careful</span>
                                    <span style="color: #94a3b8;">&rarr;</span>
                                    <span style="color: #1d4ed8; background: #eff6ff; padding: 4px 12px; border-radius: 20px;">careful<b style="font-weight: 800;">ly</b></span>
                                </div>
                                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                                    <span style="color: #475569; font-weight: 500;">quick</span>
                                    <span style="color: #94a3b8;">&rarr;</span>
                                    <span style="color: #1d4ed8; background: #eff6ff; padding: 4px 12px; border-radius: 20px;">quick<b style="font-weight: 800;">ly</b></span>
                                </div>
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <span style="color: #475569; font-weight: 500;">extreme</span>
                                    <span style="color: #94a3b8;">&rarr;</span>
                                    <span style="color: #1d4ed8; background: #eff6ff; padding: 4px 12px; border-radius: 20px;">extreme<b style="font-weight: 800;">ly</b></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Quy tắc đổi đuôi -->
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div style="background: linear-gradient(135deg, #fdf4ff, #fae8ff); padding: 16px; border-bottom: 1px solid #f5d0fe;">
                            <h4 style="color: #86198f; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px; margin: 0;">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
                                Quy tắc đổi đuôi
                            </h4>
                            <p style="color: #a21caf; font-size: 0.95rem; margin-top: 4px; margin-bottom: 0;">Biến đổi chữ cái cuối trước khi thêm -ly</p>
                        </div>
                        <div style="padding: 16px;">
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                                    <span style="color: #475569; font-weight: 500;">happ<b style="color: #d946ef">y</b></span>
                                    <span style="color: #94a3b8;">&rarr;</span>
                                    <span style="color: #701a75; background: #fdf4ff; padding: 4px 12px; border-radius: 20px;">happ<b style="color: #d946ef; font-weight: 800;">ily</b></span>
                                </div>
                                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                                    <span style="color: #475569; font-weight: 500;">terrib<b style="color: #d946ef">le</b></span>
                                    <span style="color: #94a3b8;">&rarr;</span>
                                    <span style="color: #701a75; background: #fdf4ff; padding: 4px 12px; border-radius: 20px;">terrib<b style="color: #d946ef; font-weight: 800;">ly</b></span>
                                </div>
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <span style="color: #475569; font-weight: 500;">bas<b style="color: #d946ef">ic</b></span>
                                    <span style="color: #94a3b8;">&rarr;</span>
                                    <span style="color: #701a75; background: #fdf4ff; padding: 4px 12px; border-radius: 20px;">bas<b style="color: #d946ef; font-weight: 800;">ically</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: linear-gradient(135deg, #fff1f2, #fef2f2); border: 2px solid #fecaca; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(220,38,38,0.08);">
                    <h4 style="color: #b91c1c; font-size: 1.25rem; font-weight: 800; margin-bottom: 24px; display: flex; align-items: center; gap: 10px;">
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        CÁC TRƯỜNG HỢP BẤT QUY TẮC HAY THI
                    </h4>
                    
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <!-- good -> well -->
                        <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; box-shadow: 0 1px 3px rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 1.2rem; font-weight: 700; color: #334155; width: 60px;">good</span>
                                <span style="color: #94a3b8; font-style: italic;">(Tốt)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <svg width="24" height="24" fill="#cbd5e1" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                                <span style="font-size: 1.2rem; font-weight: 800; color: #b91c1c; background: #fef2f2; padding: 4px 16px; border-radius: 8px; border: 1px solid #fecaca;">well</span>
                            </div>
                        </div>

                        <!-- fast -> fast -->
                        <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <span style="font-size: 1.2rem; font-weight: 700; color: #334155; width: 60px;">fast</span>
                                    <span style="color: #94a3b8; font-style: italic;">(Nhanh)</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 16px;">
                                    <svg width="24" height="24" fill="#cbd5e1" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                                    <span style="font-size: 1.2rem; font-weight: 800; color: #b91c1c; background: #fef2f2; padding: 4px 16px; border-radius: 8px; border: 1px solid #fecaca;">fast</span>
                                </div>
                            </div>
                            <div style="background: #fff7ed; color: #c2410c; padding: 8px 12px; border-radius: 6px; font-size: 0.95rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                                <span>⚠️</span> Tuyệt đối KHÔNG có từ "fastly"
                            </div>
                        </div>

                        <!-- hard -> hard -->
                        <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <span style="font-size: 1.2rem; font-weight: 700; color: #334155; width: 60px;">hard</span>
                                    <span style="color: #94a3b8; font-style: italic;">(Khó/Chăm chỉ)</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 16px;">
                                    <svg width="24" height="24" fill="#cbd5e1" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                                    <span style="font-size: 1.2rem; font-weight: 800; color: #b91c1c; background: #fef2f2; padding: 4px 16px; border-radius: 8px; border: 1px solid #fecaca;">hard</span>
                                </div>
                            </div>
                            <div style="background: #fff7ed; color: #c2410c; padding: 8px 12px; border-radius: 6px; font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 6px;">
                                <span>⚠️</span> "hardly" mang nghĩa là "hầu như không" (trạng từ chỉ tần suất)
                            </div>
                        </div>

                        <!-- late -> late -->
                        <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <span style="font-size: 1.2rem; font-weight: 700; color: #334155; width: 60px;">late</span>
                                    <span style="color: #94a3b8; font-style: italic;">(Muộn)</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 16px;">
                                    <svg width="24" height="24" fill="#cbd5e1" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                                    <span style="font-size: 1.2rem; font-weight: 800; color: #b91c1c; background: #fef2f2; padding: 4px 16px; border-radius: 8px; border: 1px solid #fecaca;">late</span>
                                </div>
                            </div>
                            <div style="background: #fff7ed; color: #c2410c; padding: 8px 12px; border-radius: 6px; font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 6px;">
                                <span>⚠️</span> "lately" mang nghĩa là "dạo gần đây" (= recently)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
];

const adverbsPracticeBook1 = [
    {
        q: "Tôi thường chơi thể thao sau giờ học để thư giãn đầu óc.",
        a: ["I often play sports after school to relax my mind.", "I usually play sports after school to relax my mind."]
    },
    {
        q: "Hôm qua tôi đã dậy rất sớm để ôn bài thi.",
        a: ["Yesterday I got up very early to review for the exam.", "I got up very early yesterday to review for the exam.", "Yesterday, I woke up very early to review for the exam.", "I woke up very early yesterday to review for the exam."]
    },
    {
        q: "Tôi luôn làm bài tập một cách cẩn thận để tránh sai sót.",
        a: ["I always do my homework carefully to avoid mistakes."]
    },
    {
        q: "Tôi thường đọc báo tiếng Anh vì nó giúp tôi học từ vựng một cách hiệu quả.",
        a: ["I often read English newspapers because it helps me learn vocabulary effectively.", "I usually read English newspapers because it helps me learn vocabulary effectively."]
    },
    {
        q: "Tôi thường dành 30 phút bơi lội mỗi ngày vì nó là một cách hay để giảm cân một cách nhanh chóng.",
        a: ["I often spend 30 minutes swimming every day because it is a good way to lose weight quickly.", "I usually spend 30 minutes swimming every day because it is a good way to lose weight quickly."]
    }
];

const adverbsPracticeBook2 = [
    {
        q: "I __________ review my writing before submitting it.",
        options: ["rarely", "carefully", "easily"],
        a: "carefully"
    },
    {
        q: "He spoke English __________ in the interview.",
        options: ["well", "usually", "quickly"],
        a: "well"
    },
    {
        q: "We have __________ improved our communication skills after attending the course.",
        options: ["always", "recently", "never"],
        a: "recently"
    },
    {
        q: "The manager agreed to the proposal __________, surprising everyone in the meeting.",
        options: ["reluctantly", "eventually", "slowly"],
        a: "eventually"
    },
    {
        q: "My friend goes to the library __________ to prepare for the writing test.",
        options: ["well", "regularly", "seriously"],
        a: "regularly"
    }
];

const adverbsPracticeBook3 = [
    {
        q: "Anh ấy là một người chăm chỉ, vì vậy anh ấy làm việc rất chăm chỉ mỗi ngày.",
        a: ["He is a hard-working person, so he works very hard every day.", "He is a hard-working person, therefore he works very hard every day."]
    },
    {
        q: "Nhiều người cho rằng đọc sách thì chán, nhưng tôi lại không bao giờ cảm thấy chán khi đọc sách.",
        a: ["Many people think reading books is boring, but I never feel bored when reading books.", "Many people think that reading books is boring, but I never feel bored when reading books."]
    },
    {
        q: "Cô ấy là một người cẩn thận, vậy nên cô ấy luôn lái xe cẩn thận.",
        a: ["She is a careful person, so she always drives carefully."]
    },
    {
        q: "Bạn tôi là một người hài hước, và anh ấy kể chuyện rất hài hước.",
        a: ["My friend is a funny person, and he tells stories very funnily.", "My friend is a funny person, and he tells stories in a funny way.", "My friend is a humorous person, and he tells stories very funnily."]
    },
    {
        q: "Tôi là một người kiên nhẫn, nên tôi luôn đối xử với học sinh một cách kiên nhẫn.",
        a: ["I am a patient person, so I always treat students patiently.", "I am a patient person, therefore I always treat students patiently."]
    }
];

const adverbsPracticeBook4 = [
    {
        q: "Chúng ta nên đọc sách ở những nơi yên tĩnh để tập trung tốt hơn.",
        a: ["We should read books in quiet places to concentrate better.", "We should read books in quiet places to focus better."]
    },
    {
        q: "Tôi đã sống ở thành phố Cần Thơ từ năm 2020.",
        a: ["I have lived in Can Tho city since 2020.", "I have been living in Can Tho city since 2020."]
    },
    {
        q: "Vào kỳ nghỉ Tết, người Việt Nam thường đi chùa và đi thăm họ hàng.",
        a: ["During Tet holiday, Vietnamese people often go to pagodas and visit relatives.", "On Tet holiday, Vietnamese people often go to pagodas and visit relatives."]
    },
    {
        q: "Trường của tôi rất rộng lớn và đẹp với nhiều cây và hoa đầy màu sắc.",
        a: ["My school is very large and beautiful with many trees and colorful flowers.", "My school is very big and beautiful with many trees and colorful flowers."]
    },
    {
        q: "Tôi cực kỳ thích đi dạo vào thời gian rảnh.",
        a: ["I extremely like taking a walk in my free time.", "I really like taking a walk in my free time.", "I extremely enjoy taking a walk in my free time."]
    },
    {
        q: "Tôi đã học tiếng Anh trong 10 năm.",
        a: ["I have learned English for 10 years.", "I have studied English for 10 years.", "I have been learning English for 10 years."]
    },
    {
        q: "Lớp tôi sẽ tổ chức một buổi tiệc chia tay với giáo viên của chúng tôi vào tuần sau.",
        a: ["My class will organize a farewell party with our teacher next week.", "My class will hold a farewell party with our teacher next week."]
    },
    {
        q: "Giáo viên của tôi luôn đưa ra nhận xét hữu ích.",
        a: ["My teacher always gives useful feedback.", "My teacher always gives useful comments."]
    },
    {
        q: "Tôi đã hoàn thành tất cả bài tập về nhà vào hôm qua.",
        a: ["I completed all my homework yesterday.", "I finished all my homework yesterday."]
    },
    {
        q: "Tôi thường trở về quê vào cuối tuần.",
        a: ["I often return to my hometown on the weekend.", "I often go back to my hometown on weekends.", "I often return to my hometown on weekends."]
    }
];


// --- PROGRESS SAVE & LOAD ---
window.saveProgress = function(silent = false) {
    const state = {
        chapter1Topics: typeof topicsData !== 'undefined' ? topicsData.map(t => ({ id: t.id, status: t.status })) : [],
        chapter2Topics: typeof chapter2TopicsData !== 'undefined' ? chapter2TopicsData.map(t => ({ id: t.id, status: t.status })) : [],
        nounsAnswers: window.nounsAnswers,
        nounsAnswers4: window.nounsAnswers4,
        nounsDragDropState: window.nounsDragDropState,
        pronounsAnswers1: window.pronounsAnswers1,
        pronounsAnswers2: window.pronounsAnswers2,
        pronounsAnswersPara: window.pronounsAnswersPara,
        verbsAnswers1: window.verbsAnswers1,
        verbsAnswers2: window.verbsAnswers2,
        verbsAnswersPara: window.verbsAnswersPara,
        prepositionsAnswers1: window.prepositionsAnswers1,
        prepositionsAnswers2: window.prepositionsAnswers2,
        prepositionsAnswersExtra1: window.prepositionsAnswersExtra1,
        prepositionsAnswersExtraPara: window.prepositionsAnswersExtraPara
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
        if (state.nounsAnswers4) window.nounsAnswers4 = state.nounsAnswers4;
        if (state.pronounsAnswers1) window.pronounsAnswers1 = state.pronounsAnswers1;
        if (state.pronounsAnswers2) window.pronounsAnswers2 = state.pronounsAnswers2;
        if (state.pronounsAnswersPara) window.pronounsAnswersPara = state.pronounsAnswersPara;
        if (state.verbsAnswers1) window.verbsAnswers1 = state.verbsAnswers1;
        if (state.verbsAnswers2) window.verbsAnswers2 = state.verbsAnswers2;
        if (state.verbsAnswersPara) window.verbsAnswersPara = state.verbsAnswersPara;
        if (state.prepositionsAnswers1) window.prepositionsAnswers1 = state.prepositionsAnswers1;
        if (state.prepositionsAnswers2) window.prepositionsAnswers2 = state.prepositionsAnswers2;
        if (state.prepositionsAnswersExtra1) window.prepositionsAnswersExtra1 = state.prepositionsAnswersExtra1;
        if (state.prepositionsAnswersExtraPara) window.prepositionsAnswersExtraPara = state.prepositionsAnswersExtraPara;
    } catch(e) {
        console.error('Error loading progress', e);
    }
}
window.checkNounsDragDropExtra = function() {
    let p1Correct = 0;
    const countableZone = document.getElementById('zone-countable-extra');
    const uncountableZone = document.getElementById('zone-uncountable-extra');
    
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

    if (p1Correct === 20) {
        alert("🎉 Chúc mừng! Bạn đã phân loại đúng tất cả 20 danh từ.");
    } else {
        alert("Bạn đã phân loại đúng " + p1Correct + "/20 danh từ. Những từ màu đỏ là bị sai, hãy xếp lại nhé!");
    }
}

// ==================== PREPOSITIONS LOGIC ====================

// ---------------- ADJECTIVES ----------------


const adjectivesTheoryData = [
    {
        title: "1. TÍNH TỪ LÀ GÌ?",
        content: `
            <div style="font-size: 1.15rem; color: #1e293b; line-height: 1.85; margin-bottom: 20px; background: #ffffff; padding: 22px 24px; border-radius: 14px; border-left: 6px solid var(--primary-color); border-right: 1.5px solid #e2e8f0; border-top: 1.5px solid #e2e8f0; border-bottom: 1.5px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
                <p style="margin: 0;">
                    👉 <span style="background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 1.15rem;">Tính từ (Adjectives)</span> là những từ dùng để chỉ <span style="background: #fef08a; color: #854d0e; font-weight: 800; padding: 2px 8px; border-radius: 6px;">tính chất, đặc điểm</span> của người, sự vật hoặc hiện tượng.
                </p>
                <p style="margin: 12px 0 0 0; padding-top: 12px; border-top: 1px dashed #cbd5e1;">
                    🎯 <b style="color: #0f172a;">Chức năng cốt lõi:</b> Tính từ đóng vai trò chính trong việc <span style="background: #e0e7ff; color: #3730a3; font-weight: 800; padding: 2px 8px; border-radius: 6px;">miêu tả</span> và <span style="background: #dcfce7; color: #166534; font-weight: 800; padding: 2px 8px; border-radius: 6px;">bổ sung ý nghĩa</span> rõ nét cho <b style="color: var(--primary-color);">Danh từ</b> hoặc <b style="color: var(--primary-color);">Đại từ</b>.
                </p>
            </div>
            
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%); border: 1.5px solid #dbeafe; border-radius: 14px; padding: 20px 24px; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.06);">
                <div style="display: flex; align-items: center; gap: 8px; font-weight: 800; color: var(--primary-color); font-size: 1.15rem; margin-bottom: 14px;">
                    <span style="font-size: 1.3rem;">💡</span> VÍ DỤ MINH HỌA:
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
                    <div style="background: white; padding: 12px 18px; border-radius: 10px; border: 1.5px solid #e2e8f0; box-shadow: 0 2px 5px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 4px;">
                        <div style="font-size: 1.1rem; color: #1e293b;">• a <b style="color: var(--primary-color); font-size: 1.15rem; text-decoration: underline;">beautiful</b> girl</div>
                        <div style="font-size: 0.95rem; color: #64748b; font-style: italic;">(một cô gái đẹp)</div>
                    </div>
                    <div style="background: white; padding: 12px 18px; border-radius: 10px; border: 1.5px solid #e2e8f0; box-shadow: 0 2px 5px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 4px;">
                        <div style="font-size: 1.1rem; color: #1e293b;">• <b style="color: var(--primary-color); font-size: 1.15rem; text-decoration: underline;">long</b> trips</div>
                        <div style="font-size: 0.95rem; color: #64748b; font-style: italic;">(những chuyến đi dài)</div>
                    </div>
                    <div style="background: white; padding: 12px 18px; border-radius: 10px; border: 1.5px solid #e2e8f0; box-shadow: 0 2px 5px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 4px;">
                        <div style="font-size: 1.1rem; color: #1e293b;">• <b style="color: var(--primary-color); font-size: 1.15rem; text-decoration: underline;">useful</b> information</div>
                        <div style="font-size: 0.95rem; color: #64748b; font-style: italic;">(thông tin hữu ích)</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "2. VỊ TRÍ CỦA TÍNH TỪ",
        content: `
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                        <div style="width: 40px; height: 40px; background: #e0e7ff; color: #4f46e5; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.25rem;">
                            1
                        </div>
                        <h3 style="margin: 0; color: #1e293b; font-size: 1.25rem; font-weight: 800;">
                            <span style="background: #e0e7ff; color: #3730a3; padding: 2px 10px; border-radius: 6px;">Tính từ</span> + <span style="background: #fef08a; color: #854d0e; padding: 2px 10px; border-radius: 6px;">Danh từ</span> <span style="color: #64748b; font-size: 1rem; font-weight: 600;">(Adj + Noun)</span>
                        </h3>
                    </div>
                    <p style="color: #334155; margin-bottom: 14px; font-size: 1.1rem; line-height: 1.7;">
                        👉 Tính từ đứng <span style="background: #fef08a; color: #854d0e; font-weight: 800; padding: 2px 8px; border-radius: 6px;">TRƯỚC</span> danh từ để <b>miêu tả</b> và <b>xác định đặc điểm</b> cho danh từ đó.
                    </p>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <span style="background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 8px 14px; border-radius: 10px; color: #1e293b; font-size: 1.05rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);"><b style="color: var(--primary-color); text-decoration: underline;">comfortable</b> rooms (phòng tiện nghi)</span>
                        <span style="background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 8px 14px; border-radius: 10px; color: #1e293b; font-size: 1.05rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">a <b style="color: var(--primary-color); text-decoration: underline;">friendly</b> friend (người bạn thân thiện)</span>
                        <span style="background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 8px 14px; border-radius: 10px; color: #1e293b; font-size: 1.05rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);"><b style="color: var(--primary-color); text-decoration: underline;">private</b> information (thông tin riêng tư)</span>
                    </div>
                </div>

                <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 22px 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                        <div style="width: 40px; height: 40px; background: #dcfce7; color: #16a34a; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.25rem;">
                            2
                        </div>
                        <h3 style="margin: 0; color: #1e293b; font-size: 1.25rem; font-weight: 800;">
                            Chủ ngữ + <span style="background: #dcfce7; color: #166534; padding: 2px 10px; border-radius: 6px;">Động từ liên kết (Linking Verbs)</span> + <span style="background: #e0e7ff; color: #3730a3; padding: 2px 10px; border-radius: 6px;">Tính từ</span>
                        </h3>
                    </div>
                    <p style="color: #334155; margin-bottom: 16px; font-size: 1.1rem; line-height: 1.8;">
                        👉 Tính từ đứng <span style="background: #fef08a; color: #854d0e; font-weight: 800; padding: 2px 8px; border-radius: 6px;">SAU</span> các <b>động từ liên kết</b> (phổ biến nhất là <span style="background: #f3e8ff; color: var(--primary-color); font-weight: 800; padding: 2px 8px; border-radius: 6px;">To Be: am/is/are/was/were</span> và các động từ chỉ cảm giác, trạng thái như <i>seem, feel, look, become, sound, taste, smell...</i>) để miêu tả cho chủ ngữ.
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
                        <div style="background: #f8fafc; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.05rem;">
                            • These rooms <b>are</b> <b style="color: var(--primary-color); text-decoration: underline;">comfortable</b>.<br>
                            <span style="font-size: 0.95rem; color: #64748b; font-style: italic;">(Những căn phòng này rất thoải mái.)</span>
                        </div>
                        <div style="background: #f8fafc; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.05rem;">
                            • My school <b>is</b> <b style="color: var(--primary-color); text-decoration: underline;">spacious</b> and <b style="color: var(--primary-color); text-decoration: underline;">beautiful</b>.<br>
                            <span style="font-size: 0.95rem; color: #64748b; font-style: italic;">(Trường học của tôi rất rộng rãi và đẹp.)</span>
                        </div>
                        <div style="background: #f8fafc; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.05rem;">
                            • My new friend <b>is</b> very <b style="color: var(--primary-color); text-decoration: underline;">sociable</b> and <b style="color: var(--primary-color); text-decoration: underline;">humorous</b>.<br>
                            <span style="font-size: 0.95rem; color: #64748b; font-style: italic;">(Bạn mới của tôi rất hòa đồng và hài hước.)</span>
                        </div>
                        <div style="background: #f8fafc; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.05rem;">
                            • She <b>looks</b> <b style="color: var(--primary-color); text-decoration: underline;">tired</b> after work.<br>
                            <span style="font-size: 0.95rem; color: #64748b; font-style: italic;">(Cô ấy trông có vẻ mệt mỏi sau giờ làm.)</span>
                        </div>
                        <div style="background: #f8fafc; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.05rem;">
                            • This food <b>tastes</b> <b style="color: var(--primary-color); text-decoration: underline;">delicious</b>.<br>
                            <span style="font-size: 0.95rem; color: #64748b; font-style: italic;">(Món ăn này có vị rất ngon.)</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
,
    {
        title: '3. NHẬN DIỆN QUA HẬU TỐ',
        content: `<p style="margin-bottom: 16px; color: var(--text-main);">Một số đuôi (hậu tố) gần như mặc định là tính từ. Dưới đây là <b>29 hậu tố phổ biến nhất</b> được chia thành 6 nhóm lớn. Bấm vào từng nhóm để xem chi tiết các từ vựng thường gặp trong VSTEP:</p>

<div style="margin-bottom: 24px;">
    <a href="HẬU TỐ TÍNH TỪ - CHỦ ĐIỂM 02 - WRITING.pdf" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: var(--primary-color); color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Tải xuống bản gốc PDF
    </a>
</div>

<div class="suffix-accordions">

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #ef4444;">
            I. HẬU TỐ TÍNH TỪ CHỈ TÍNH CHẤT – ĐẶC ĐIỂM <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">1. -ful (đầy, có nhiều)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>useful</b> – <span style="color: #64748b;">hữu ích</span></li>
                    <li>• <b>careful</b> – <span style="color: #64748b;">cẩn thận</span></li>
                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">2. -less (không có, thiếu)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>useless</b> – <span style="color: #64748b;">vô dụng</span></li>
                    <li>• <b>careless</b> – <span style="color: #64748b;">bất cẩn</span></li>
                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">3. -ous (có tính chất)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>dangerous</b> – <span style="color: #64748b;">nguy hiểm</span></li>
                    <li>• <b>famous</b> – <span style="color: #64748b;">nổi tiếng</span></li>
                </ul>
            </div>
            
            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">4. -y (có đặc điểm)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>healthy</b> – <span style="color: #64748b;">khỏe mạnh</span></li>
                    <li>• <b>rainy</b> – <span style="color: #64748b;">nhiều mưa</span></li>
                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">5. -ly (mang đặc điểm)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>friendly</b> – <span style="color: #64748b;">thân thiện</span></li>
                    <li>• <b>costly</b> – <span style="color: #64748b;">đắt đỏ</span></li>
                </ul>
            </div>

            <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #ef4444; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fecaca;">6. -some (gây cảm giác)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>troublesome</b> – <span style="color: #64748b;">phiền phức</span></li>
                    <li>• <b>awesome</b> – <span style="color: #64748b;">tuyệt vời</span></li>
                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #3b82f6;">
            II. HẬU TỐ TÍNH TỪ CHỈ KHẢ NĂNG – SỰ ĐÁNG GIÁ <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">7. -able (có thể)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>manageable</b> – <span style="color: #64748b;">có thể quản lý được</span></li>
                    <li>• <b>affordable</b> – <span style="color: #64748b;">có thể chi trả</span></li>
                </ul>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">8. -ible (có thể)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>possible</b> – <span style="color: #64748b;">có thể xảy ra</span></li>
                    <li>• <b>responsible</b> – <span style="color: #64748b;">có trách nhiệm</span></li>
                </ul>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #3b82f6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #bfdbfe;">9. -worthy (đáng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>trustworthy</b> – <span style="color: #64748b;">đáng tin cậy</span></li>
                    <li>• <b>noteworthy</b> – <span style="color: #64748b;">đáng chú ý</span></li>
                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #8b5cf6;">
            III. HẬU TỐ TÍNH TỪ CHỈ SỰ LIÊN QUAN – LĨNH VỰC <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">10. -al (thuộc về)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>cultural</b> – <span style="color: #64748b;">thuộc văn hóa</span></li>
                    <li>• <b>national</b> – <span style="color: #64748b;">thuộc quốc gia</span></li>
                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">11. -ial (liên quan đến)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>official</b> – <span style="color: #64748b;">chính thức</span></li>
                    <li>• <b>industrial</b> – <span style="color: #64748b;">thuộc công nghiệp</span></li>
                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">12. -ical (mang tính)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>political</b> – <span style="color: #64748b;">mang tính chính trị</span></li>
                    <li>• <b>historical</b> – <span style="color: #64748b;">thuộc lịch sử</span></li>
                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">13. -ary (liên quan)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>primary</b> – <span style="color: #64748b;">chính, chủ yếu</span></li>
                    <li>• <b>temporary</b> – <span style="color: #64748b;">tạm thời</span></li>
                </ul>
            </div>

            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">14. -ory (có chức năng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>compulsory</b> – <span style="color: #64748b;">bắt buộc</span></li>
                    <li>• <b>satisfactory</b> – <span style="color: #64748b;">đạt yêu cầu</span></li>
                </ul>
            </div>
            
            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">15. -ic (mang tính)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>economic</b> – <span style="color: #64748b;">thuộc kinh tế</span></li>
                    <li>• <b>scientific</b> – <span style="color: #64748b;">thuộc khoa học</span></li>
                </ul>
            </div>
            
            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">16. -atic (có hệ thống)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>automatic</b> – <span style="color: #64748b;">tự động</span></li>
                    <li>• <b>problematic</b> – <span style="color: #64748b;">có vấn đề</span></li>
                </ul>
            </div>
            
            <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd6fe;">17. -etic (thuộc lĩnh vực)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>genetic</b> – <span style="color: #64748b;">thuộc di truyền</span></li>
                    <li>• <b>poetic</b> – <span style="color: #64748b;">mang tính thơ ca</span></li>
                </ul>
            </div>

        </div>
    </details>

    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #10b981;">
            IV. HẬU TỐ TÍNH TỪ CHỈ TÁC ĐỘNG – TRẠNG THÁI <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">18. -ive (có xu hướng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>active</b> – <span style="color: #64748b;">năng động</span></li>
                    <li>• <b>effective</b> – <span style="color: #64748b;">hiệu quả</span></li>
                </ul>
            </div>

            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">19. -ative (có chức năng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>creative</b> – <span style="color: #64748b;">sáng tạo</span></li>
                    <li>• <b>informative</b> – <span style="color: #64748b;">mang tính cung cấp thông tin</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">20. -ent / -ant (ở trạng thái)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>confident</b> – <span style="color: #64748b;">tự tin</span></li>
                    <li>• <b>important</b> – <span style="color: #64748b;">quan trọng</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">23. -en (chất liệu/trạng thái)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>broken</b> – <span style="color: #64748b;">bị vỡ</span></li>
                    <li>• <b>wooden</b> – <span style="color: #64748b;">bằng gỗ</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #10b981; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a7f3d0;">24. -ish (hơi / mang tính)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>childish</b> – <span style="color: #64748b;">trẻ con</span></li>
                    <li>• <b>selfish</b> – <span style="color: #64748b;">ích kỷ</span></li>
                </ul>
            </div>

        </div>
    </details>
    
    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #f59e0b;">
            V. HẬU TỐ TÍNH TỪ CHỈ CẢM XÚC (V-ED / V-ING) <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #f59e0b; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fde68a;">21. -ed (bị tác động/người)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>bored</b> – <span style="color: #64748b;">chán</span></li>
                    <li>• <b>tired</b> – <span style="color: #64748b;">mệt</span></li>
                </ul>
            </div>

            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #f59e0b; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #fde68a;">22. -ing (gây ra cảm xúc/vật)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>boring</b> – <span style="color: #64748b;">gây chán</span></li>
                    <li>• <b>tiring</b> – <span style="color: #64748b;">gây mệt</span></li>
                </ul>
            </div>

        </div>
    </details>
    
    <details class="suffix-group" style="margin-bottom: 12px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <summary style="background: #f8fafc; padding: 16px 20px; font-weight: 800; color: #1e293b; font-size: 1.15rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #06b6d4;">
            VI. HẬU TỐ TÍNH TỪ CHỈ QUỐC TỊCH – PHƯƠNG HƯỚNG – PHẠM VI <span style="font-size: 0.9rem; color: #64748b;">▼</span>
        </summary>
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; border-top: 1px solid #cbd5e1; background: #fafafa;">

            <div style="background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #06b6d4; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a5f3fc;">25. -ese (quốc tịch / ngôn ngữ)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>Vietnamese</b> – <span style="color: #64748b;">người/tiếng Việt</span></li>
                    <li>• <b>Chinese</b> – <span style="color: #64748b;">người/tiếng Trung</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #06b6d4; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a5f3fc;">26. -ian / -an (thuộc khu vực)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>Asian</b> – <span style="color: #64748b;">thuộc châu Á</span></li>
                    <li>• <b>European</b> – <span style="color: #64748b;">thuộc châu Âu</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #06b6d4; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a5f3fc;">27. -ern (thuộc vùng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>modern</b> – <span style="color: #64748b;">hiện đại</span></li>
                    <li>• <b>western</b> – <span style="color: #64748b;">thuộc phương Tây</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #06b6d4; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a5f3fc;">28. -proof (chống, không ảnh hưởng)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>waterproof</b> – <span style="color: #64748b;">chống nước</span></li>
                    <li>• <b>soundproof</b> – <span style="color: #64748b;">cách âm</span></li>
                </ul>
            </div>
            
            <div style="background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 8px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #06b6d4; font-size: 1.1rem; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #a5f3fc;">29. -wide / -long (phạm vi / thời gian)</div>
                <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; color: #334155; font-size: 1.05rem;">
                    <li>• <b>worldwide</b> – <span style="color: #64748b;">toàn cầu</span></li>
                    <li>• <b>lifelong</b> – <span style="color: #64748b;">suốt đời</span></li>
                </ul>
            </div>

        </div>
    </details>

</div>`
    }
];

const adjectivesPracticeBook1 = [
    { q: "một vấn đề nghiêm trọng", a: ["a serious problem", "a severe problem"] },
    { q: "các bài học hữu ích", a: ["useful lessons", "helpful lessons"] },
    { q: "kết quả học tập tốt", a: ["good academic results", "good study results"] },
    { q: "môt hệ thống giáo dục chất lượng", a: ["a quality education system", "a high-quality education system"] },
    { q: "những giải pháp hiệu quả", a: ["effective solutions", "efficient solutions"] },
    { q: "giá cả phải chăng", a: ["affordable prices", "reasonable prices"] },
    { q: "một tác động tiêu cực", a: ["a negative impact", "a negative effect"] },
    { q: "các địa điểm du lịch nổi tiếng", a: ["famous tourist attractions", "popular tourist destinations", "famous tourist destinations"] },
    { q: "một kỳ thi quan trọng", a: ["an important exam", "an important examination"] },
    { q: "một bầu không khí ấm cúng", a: ["a cozy atmosphere", "a warm atmosphere"] }
];

const adjectivesPracticeBook2 = [
    { q: "Thầy cô ở đó rất thân thiện và nhiệt tình, và họ luôn giúp đỡ học sinh yếu.", a: ["Teachers there are very friendly and enthusiastic, and they always help weak students.", "The teachers there are very friendly and enthusiastic, and they always help weak students."] },
    { q: "Chi phí học tiếng Anh tại trung tâm này khá hợp lý.", a: ["The cost of learning English at this center is quite reasonable.", "The cost to learn English at this center is quite reasonable.", "The English tuition fee at this center is quite reasonable."] },
    { q: "Ăn uống lành mạnh rất quan trọng để giữ gìn sức khỏe.", a: ["Healthy eating is very important to keep fit.", "Eating healthily is very important to stay healthy.", "Healthy eating is very important to maintain good health.", "A healthy diet is very important to keep fit."] },
    { q: "Việc thức khuya có hại cho sức khỏe thể chất và tinh thần.", a: ["Staying up late is harmful to physical and mental health.", "Staying up late is bad for physical and mental health."] },
    { q: "Bạn có thể thấy nhiều phong cảnh đẹp ở các vùng nông thôn Việt Nam.", a: ["You can see many beautiful landscapes in the rural areas of Vietnam.", "You can see a lot of beautiful scenery in the Vietnamese countryside.", "You can see many beautiful landscapes in rural areas of Vietnam."] }
];

const adjectivesPracticeExtra1 = [
    { before: "She bought a ", after: " dress for the party.", options: ["beautiful", "beautifully", "beauty"], ans: "beautiful" },
    { before: "The test was extremely ", after: ", so many students failed.", options: ["difficult", "difficulty", "difficultly"], ans: "difficult" },
    { before: "They are looking for a ", after: " apartment in the city center.", options: ["spacious", "space", "spaciously"], ans: "spacious" },
    { before: "My grandmother is a very ", after: " woman.", options: ["careful", "carefully", "care"], ans: "careful" },
    { before: "The weather today is so ", after: "!", options: ["lovely", "love", "lovingly"], ans: "lovely" },
    { before: "He gave a ", after: " presentation yesterday.", options: ["successful", "success", "successfully"], ans: "successful" },
    { before: "Eating vegetables is ", after: " for your health.", options: ["good", "well", "goodness"], ans: "good" },
    { before: "This is an ", after: " book about history.", options: ["interesting", "interestingly", "interest"], ans: "interesting" },
    { before: "We had a ", after: " meal at the new restaurant.", options: ["delicious", "deliciously", "deliciousness"], ans: "delicious" },
    { before: "The children felt very ", after: " when they heard the news.", options: ["happy", "happily", "happiness"], ans: "happy" }
];

const adjectivesPracticeExtra2 = [
    { q: "Chiếc áo này quá đắt đối với tôi.", a: ["This shirt is too expensive for me.", "This T-shirt is too expensive for me."] },
    { q: "Cô ấy có một nụ cười quyến rũ.", a: ["She has a charming smile.", "She has an attractive smile."] },
    { q: "Học ngôn ngữ mới là một trải nghiệm thú vị.", a: ["Learning a new language is an interesting experience.", "Learning new languages is an exciting experience."] },
    { q: "Bố mẹ tôi rất tự hào về tôi.", a: ["My parents are very proud of me.", "My parents are proud of me."] },
    { q: "Căn phòng này rất sạch sẽ và ngăn nắp.", a: ["This room is very clean and tidy.", "This room is clean and neat."] }
];

// Logic functions for Adjectives
window.checkAdjectivesBook1 = function(idx) {
    const inputId = `adj_book1_${idx}`;
    const expId = `adjexp_book1_${idx}`;
    const inputEl = document.getElementById(inputId);
    const expEl = document.getElementById(expId);
    
    if (!inputEl || !expEl) return;
    
    const val = (inputEl.value || '').trim();
    if (!val) {
        expEl.style.display = 'block';
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = 'Vui lòng nhập câu trả lời!';
        return;
    }
    
    const correctAnswers = adjectivesPracticeBook1[idx].a;
    const isCorrect = correctAnswers.some(ans => window.normalizeText(val) === window.normalizeText(ans));
    
    expEl.style.display = 'block';
    if (isCorrect) {
        expEl.style.background = '#dcfce7';
        expEl.style.color = '#16a34a';
        expEl.innerHTML = '<b>Chính xác!</b>';
        inputEl.style.borderColor = '#16a34a';
    } else {
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = `<b>Chưa chính xác.</b><br>Đáp án tham khảo: <b>${correctAnswers[0]}</b>`;
        inputEl.style.borderColor = '#ef4444';
    }
};

window.checkAdjectivesBook2 = function(idx) {
    const inputId = `adj_book2_${idx}`;
    const expId = `adjexp_book2_${idx}`;
    const inputEl = document.getElementById(inputId);
    const expEl = document.getElementById(expId);
    
    if (!inputEl || !expEl) return;
    
    const rawVal = inputEl.value || '';
    const val = rawVal.trim();
    if (!val) {
        expEl.style.display = 'block';
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = 'Vui lòng nhập câu trả lời!';
        return;
    }
    
    const correctAnswers = adjectivesPracticeBook2[idx].a;
    const isCorrect = correctAnswers.some(ans => window.normalizeText(val) === window.normalizeText(ans));
    const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
    
    expEl.style.display = 'block';
    if (formCheck.valid) {
        expEl.style.background = '#dcfce7';
        expEl.style.color = '#16a34a';
        expEl.innerHTML = '<b>Chính xác!</b>';
        inputEl.style.borderColor = '#16a34a';
    } else if (formCheck.isNear) {
        expEl.style.background = '#fffbeb';
        expEl.style.color = '#b45309';
        expEl.style.border = '1px solid #fde68a';
        expEl.innerHTML = formCheck.message;
        inputEl.style.borderColor = '#f59e0b';
    } else {
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = `<b>Chưa chính xác.</b><br>Đáp án tham khảo: <b>${correctAnswers[0]}</b>`;
        inputEl.style.borderColor = '#ef4444';
    }
};

window.submitAdjectivesBook1 = function() {
    let score = 0;
    adjectivesPracticeBook1.forEach((q, i) => {
        window.checkAdjectivesBook1(i);
        const val = (window.adjectivesAnswersBook1[i] || '').trim();
        if (val && q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans))) {
            score++;
        }
    });
    window.showExerciseResult(score, adjectivesPracticeBook1.length, "KẾT QUẢ BÀI 1 (TÍNH TỪ TRONG TÀI LIỆU)");
};

window.submitAdjectivesBook2 = function() {
    let score = 0;
    adjectivesPracticeBook2.forEach((q, i) => {
        window.checkAdjectivesBook2(i);
        const rawVal = window.adjectivesAnswersBook2[i] || '';
        const val = rawVal.trim();
        if (val) {
            const isCorrect = q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans));
            const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
            if (formCheck.valid) {
                score++;
            }
        }
    });
    window.showExerciseResult(score, adjectivesPracticeBook2.length, "KẾT QUẢ BÀI 2 (TÍNH TỪ TRONG TÀI LIỆU)");
};

window.submitAdjectivesExtra1 = function() {
    let score = 0;
    adjectivesPracticeExtra1.forEach((q, idx) => {
        const val = window.adjectivesAnswersExtra1[idx];
        const expEl = document.getElementById(`adjexp_extra1_${idx}`);
        const selectEl = document.getElementById(`adj_extra1_${idx}`);
        if (!expEl || !selectEl) return;
        
        expEl.style.display = 'block';
        if (!val) {
            expEl.style.background = '#fef2f2';
            expEl.style.color = '#ef4444';
            expEl.innerHTML = 'Vui lòng chọn đáp án!';
            selectEl.style.borderColor = '#ef4444';
            return;
        }
        
        if (val === q.ans) {
            score++;
            expEl.style.background = '#dcfce7';
            expEl.style.color = '#16a34a';
            expEl.innerHTML = '<b>Chính xác!</b>';
            selectEl.style.borderColor = '#16a34a';
        } else {
            expEl.style.background = '#fef2f2';
            expEl.style.color = '#ef4444';
            expEl.innerHTML = `<b>Chưa chính xác.</b> Đáp án đúng: <b>${q.ans}</b>`;
            selectEl.style.borderColor = '#ef4444';
        }
    });
    window.showExerciseResult(score, adjectivesPracticeExtra1.length, "KẾT QUẢ BÀI TẬP THÊM 1 (TÍNH TỪ)");
};

window.checkAdjectivesExtra2 = function(idx) {
    const inputId = `adj_extra2_${idx}`;
    const expId = `adjexp_extra2_${idx}`;
    const inputEl = document.getElementById(inputId);
    const expEl = document.getElementById(expId);
    
    if (!inputEl || !expEl) return;
    
    const rawVal = inputEl.value || '';
    const val = rawVal.trim();
    if (!val) {
        expEl.style.display = 'block';
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = 'Vui lòng nhập câu trả lời!';
        return;
    }
    
    const correctAnswers = adjectivesPracticeExtra2[idx].a;
    const isCorrect = correctAnswers.some(ans => window.normalizeText(val) === window.normalizeText(ans));
    const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
    
    expEl.style.display = 'block';
    if (formCheck.valid) {
        expEl.style.background = '#dcfce7';
        expEl.style.color = '#16a34a';
        expEl.innerHTML = '<b>Chính xác!</b>';
        inputEl.style.borderColor = '#16a34a';
    } else if (formCheck.isNear) {
        expEl.style.background = '#fffbeb';
        expEl.style.color = '#b45309';
        expEl.style.border = '1px solid #fde68a';
        expEl.innerHTML = formCheck.message;
        inputEl.style.borderColor = '#f59e0b';
    } else {
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = `<b>Chưa chính xác.</b><br>Đáp án tham khảo: <b>${correctAnswers[0]}</b>`;
        inputEl.style.borderColor = '#ef4444';
    }
};

window.submitAdjectivesExtra2 = function() {
    let score = 0;
    adjectivesPracticeExtra2.forEach((q, i) => {
        window.checkAdjectivesExtra2(i);
        const rawVal = window.adjectivesAnswersExtra2[i] || '';
        const val = rawVal.trim();
        if (val) {
            const isCorrect = q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans));
            const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
            if (formCheck.valid) {
                score++;
            }
        }
    });
    window.showExerciseResult(score, adjectivesPracticeExtra2.length, "KẾT QUẢ BÀI TẬP THÊM 2 (TÍNH TỪ)");
};

window.renderAdjectivesDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('content-wrapper');
    if (!contentWrapper) return;
    
    window.currentTopic = 'adjectives';
    window.currentTab = activeTab;

    if (!window.adjectivesAnswersBook1) window.adjectivesAnswersBook1 = new Array(adjectivesPracticeBook1.length).fill('');
    if (!window.adjectivesAnswersBook2) window.adjectivesAnswersBook2 = new Array(adjectivesPracticeBook2.length).fill('');
    if (!window.adjectivesAnswersExtra1) window.adjectivesAnswersExtra1 = new Array(adjectivesPracticeExtra1.length).fill('');
    if (!window.adjectivesAnswersExtra2) window.adjectivesAnswersExtra2 = new Array(adjectivesPracticeExtra2.length).fill('');

    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderAdjectivesDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderAdjectivesDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderAdjectivesDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';
    
    if (activeTab === 'theory') {
        const theoryCards = adjectivesTheoryData.map((item) => `
            <div class="theory-card" style="background: white; border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 24px; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-sm)'">
                <h3 style="color: var(--primary-color); font-size: 1.3rem; margin-top: 0; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-weight: 800;">
                    <span style="display: inline-block; width: 6px; height: 24px; background: var(--secondary-color); border-radius: 3px;"></span>
                    ${item.title}
                </h3>
                <div style="font-size: 1.05rem; color: var(--text-main); line-height: 1.7;">
                    ${item.content}
                </div>
            </div>
        `).join('');
        
        contentHtml = `
            <div style="margin-top: 24px;">
                ${theoryCards}
            </div>
        `;
    } else if (activeTab === 'practice_book') {
        const book1Html = adjectivesPracticeBook1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="adj_book1_${idx}" placeholder="Nhập cụm danh từ tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.adjectivesAnswersBook1[${idx}] = this.value; document.getElementById('adjexp_book1_${idx}').style.display='none'; window.saveProgress(true);" value="${window.adjectivesAnswersBook1[idx] || ''}">
                    <button onclick="window.checkAdjectivesBook1(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="adjexp_book1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        const book2Html = adjectivesPracticeBook2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="adj_book2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.adjectivesAnswersBook2[${idx}] = this.value; document.getElementById('adjexp_book2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.adjectivesAnswersBook2[idx] || ''}">
                    <button onclick="window.checkAdjectivesBook2(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="adjexp_book2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">Bài tập áp dụng 1: Chuyển các cụm từ sau thành các “cụm danh từ tiếng Anh”</h2>
                    
                    <!-- HỘP GỢI Ý TỪ VỰNG -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TỪ VỰNG TÍNH TỪ (ADJECTIVES):
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 12px; font-size: 1.05rem;">
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">serious = severe</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">nghiêm trọng</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">useful = helpful</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">hữu ích</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">good</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">tốt</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">quality</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">chất lượng</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">effective = efficient</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">hiệu quả</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">reasonable = affordable</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">phải chăng</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">negative</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">tiêu cực</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">famous = well-known</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">nổi tiếng</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">important</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">quan trọng</span>
                            </div>
                            <div style="background: white; padding: 10px 16px; border-radius: 8px; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
                                <span style="white-space: nowrap;">• <b style="color: var(--primary-color); font-size: 1.1rem; font-weight: 800;">cozy</b> <span style="color: #64748b; font-size: 0.95rem; font-weight: 600;">(adj)</span>:</span>
                                <span style="color: #1e293b; font-weight: 700; font-style: italic; white-space: nowrap;">ấm cúng</span>
                            </div>
                        </div>
                    </div>

                    <div>${book1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdjectivesBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">Bài tập áp dụng 2: Chuyển các câu sau sang tiếng Anh.</h2>
                    
                    <!-- HỘP GỢI Ý TỪ VỰNG BÀI 2 -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TỪ VỰNG & CẤU TRÚC THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">friendly</b> (adj): <i style="color: #1e293b; font-weight: 600;">thân thiện</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">enthusiastic</b> (adj): <i style="color: #1e293b; font-weight: 600;">nhiệt tình</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">weak students</b>: <i style="color: #1e293b; font-weight: 600;">học sinh yếu</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">the cost of learning</b>: <i style="color: #1e293b; font-weight: 600;">chi phí học</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">quite reasonable</b> (adj): <i style="color: #1e293b; font-weight: 600;">khá hợp lý</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">healthy eating</b>: <i style="color: #1e293b; font-weight: 600;">ăn uống lành mạnh</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">important</b> (adj): <i style="color: #1e293b; font-weight: 600;">quan trọng</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">keep fit / stay healthy</b>: <i style="color: #1e293b; font-weight: 600;">giữ gìn sức khỏe</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">staying up late</b>: <i style="color: #1e293b; font-weight: 600;">việc thức khuya</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">harmful to / bad for</b>: <i style="color: #1e293b; font-weight: 600;">có hại cho</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">physical and mental health</b>: <i style="color: #1e293b; font-weight: 600;">sức khỏe thể chất và tinh thần</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">beautiful landscapes / scenery</b>: <i style="color: #1e293b; font-weight: 600;">phong cảnh đẹp</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">rural areas / countryside</b>: <i style="color: #1e293b; font-weight: 600;">vùng nông thôn</i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>${book2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdjectivesBook2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_extra') {
        const extra1Html = adjectivesPracticeExtra1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <span style="font-size: 1.15rem; font-weight: 500; color: var(--text-main);">${q.before}</span>
                    <select id="adj_extra1_${idx}" style="padding: 6px 12px; font-size: 1.1rem; border: 2px solid #cbd5e1; border-radius: 8px; outline: none; cursor: pointer;" onchange="window.adjectivesAnswersExtra1[${idx}] = this.value; this.style.borderColor='#cbd5e1'; window.saveProgress(true);">
                        <option value="">-- Chọn --</option>
                        ${q.options.map(opt => `<option value="${opt}" ${window.adjectivesAnswersExtra1[idx] === opt ? 'selected' : ''}>${opt}</option>`).join('')}
                    </select>
                    <span style="font-size: 1.15rem; font-weight: 500; color: var(--text-main);">${q.after}</span>
                </div>
                <div id="adjexp_extra1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        const extra2Html = adjectivesPracticeExtra2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="adj_extra2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.adjectivesAnswersExtra2[${idx}] = this.value; document.getElementById('adjexp_extra2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.adjectivesAnswersExtra2[idx] || ''}">
                    <button onclick="window.checkAdjectivesExtra2(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="adjexp_extra2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 1 (CHỌN TỪ ĐÚNG)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chọn từ loại thích hợp điền vào chỗ trống (Luyện phân biệt Tính từ).</i></p>
                    <div>${extra1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdjectivesExtra1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 2 (DỊCH CÂU)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Sử dụng cấu trúc "Adj + Noun" hoặc "To Be + Adj" để dịch các câu sau sang tiếng Anh.</i></p>
                    
                    <!-- HỘP GỢI Ý TÍNH TỪ & TRẠNG TỪ (BÀI THÊM 2) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TÍNH TỪ & TRẠNG TỪ THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">recent</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">recently / lately</b> (adv): <i style="color: #1e293b; font-weight: 600;">gần đây / dạo gần đây</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">busy</b> (adj): <i style="color: #1e293b; font-weight: 600;">bận rộn (rất bận: very busy)</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">always</b> (adv): <i style="color: #1e293b; font-weight: 600;">luôn luôn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">early</b> (adv): <i style="color: #1e293b; font-weight: 600;">sớm</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">complete / total</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">completely / totally</b> (adv): <i style="color: #1e293b; font-weight: 600;">hoàn toàn</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">fortunate / lucky</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">Fortunately / Luckily</b> (adv): <i style="color: #1e293b; font-weight: 600;">thật may mắn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">hurt</b> (adj): <i style="color: #1e293b; font-weight: 600;">bị thương</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">easy</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">easily</b> (adv): <i style="color: #1e293b; font-weight: 600;">dễ dàng / một cách dễ dàng</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${extra2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdjectivesExtra2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 04: TÍNH TỪ (ADJECTIVES)</h1>
            ${tabsHtml}
            ${contentHtml}
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(window.restoreAnswers, 100);
};

const prepositionsTheoryData = [
    {
        title: '1. Giới từ chỉ Thời gian (Prepositions of Time)',
        content: `
        <div class="theory-rich-content">
            <p style="margin-bottom: 24px; color: var(--text-main);">Ba giới từ cơ bản nhất chỉ thời gian là <b style="color:#2563eb;">IN</b>, <b style="color:#16a34a;">ON</b>, và <b style="color:#dc2626;">AT</b>. Quy tắc hình phễu (từ rộng đến hẹp):</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 32px;">
                <!-- Card IN -->
                <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 20px; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(37,99,235,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 12px; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">IN</div>
                        <h4 style="color: #1e3a8a; font-size: 1.2rem; margin: 0;">Khoảng Rộng</h4>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Năm</span>
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Tháng</span>
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Mùa</span>
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Buổi</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; border-left: 3px solid #2563eb; font-style: italic; color: #475569; font-size: 0.95rem;">
                        in 2024, in July, in spring, in the morning...
                    </div>
                </div>

                <!-- Card ON -->
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(22,163,74,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 12px; background: #16a34a; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">ON</div>
                        <h4 style="color: #14532d; font-size: 1.2rem; margin: 0;">Cụ thể hơn</h4>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                        <span style="background: white; color: #16a34a; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0;">Ngày</span>
                        <span style="background: white; color: #16a34a; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0;">Thứ</span>
                        <span style="background: white; color: #16a34a; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0;">Dịp Lễ</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; border-left: 3px solid #16a34a; font-style: italic; color: #475569; font-size: 0.95rem;">
                        on Tuesday, on July 5th, on Tet holiday...
                    </div>
                </div>

                <!-- Card AT -->
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 20px; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(220,38,38,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 12px; background: #dc2626; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">AT</div>
                        <h4 style="color: #7f1d1d; font-size: 1.2rem; margin: 0;">Chi tiết nhất</h4>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                        <span style="background: white; color: #dc2626; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca;">Giờ giấc</span>
                        <span style="background: white; color: #dc2626; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca;">Thời điểm nhất định</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; border-left: 3px solid #dc2626; font-style: italic; color: #475569; font-size: 0.95rem;">
                        at 5:30 p.m., at midnight, at noon...
                    </div>
                </div>
            </div>

            <h4 style="color: var(--primary-color); font-size: 1.15rem; margin-bottom: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Các giới từ chỉ thời gian khác:</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 16px; transition: all 0.2s;" onmouseover="this.style.background='#f3e8ff'" onmouseout="this.style.background='#faf5ff'">
                    <b style="color: #9333ea; font-size: 1.1rem; display: block; margin-bottom: 4px;">FOR</b>
                    <div style="color: #475569; font-size: 0.95rem;">Khoảng thời gian (for 3 years)</div>
                </div>
                <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 16px; transition: all 0.2s;" onmouseover="this.style.background='#f3e8ff'" onmouseout="this.style.background='#faf5ff'">
                    <b style="color: #9333ea; font-size: 1.1rem; display: block; margin-bottom: 4px;">SINCE</b>
                    <div style="color: #475569; font-size: 0.95rem;">Mốc thời gian (since 2023)</div>
                </div>
                <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 16px; transition: all 0.2s;" onmouseover="this.style.background='#f3e8ff'" onmouseout="this.style.background='#faf5ff'">
                    <b style="color: #9333ea; font-size: 1.1rem; display: block; margin-bottom: 4px;">DURING</b>
                    <div style="color: #475569; font-size: 0.95rem;">Trong suốt sự kiện (during class)</div>
                </div>
                <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 16px; transition: all 0.2s;" onmouseover="this.style.background='#f3e8ff'" onmouseout="this.style.background='#faf5ff'">
                    <b style="color: #9333ea; font-size: 1.1rem; display: block; margin-bottom: 4px;">UNTIL / BEFORE</b>
                    <div style="color: #475569; font-size: 0.95rem;">Cho đến khi / Trước khi</div>
                </div>
            </div>
        </div>
        `
    },
    {
        title: '2. Giới từ chỉ Nơi chốn (Prepositions of Place)',
        content: `
        <div class="theory-rich-content">
            <p style="margin-bottom: 24px; color: var(--text-main);">Tương tự như thời gian, ta cũng dùng <b style="color:#2563eb;">IN</b>, <b style="color:#16a34a;">ON</b>, <b style="color:#dc2626;">AT</b> cho Nơi chốn với quy tắc "Từ rộng đến hẹp":</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 32px;">
                <!-- Card IN -->
                <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 20px; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(37,99,235,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 12px; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">IN</div>
                        <h4 style="color: #1e3a8a; font-size: 1.2rem; margin: 0;">Khu vực rộng / Bên trong</h4>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Quốc gia</span>
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Thành phố</span>
                        <span style="background: white; color: #2563eb; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bfdbfe;">Tài liệu in ấn</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; border-left: 3px solid #2563eb; font-style: italic; color: #475569; font-size: 0.95rem;">
                        in Viet Nam, in Can Tho city, in a book, in a picture...
                    </div>
                </div>

                <!-- Card ON -->
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(22,163,74,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 12px; background: #16a34a; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">ON</div>
                        <h4 style="color: #14532d; font-size: 1.2rem; margin: 0;">Bề mặt / Mạng lưới</h4>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                        <span style="background: white; color: #16a34a; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0;">Tên đường</span>
                        <span style="background: white; color: #16a34a; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0;">Tầng lầu</span>
                        <span style="background: white; color: #16a34a; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #bbf7d0;">Mạng Xã Hội</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; border-left: 3px solid #16a34a; font-style: italic; color: #475569; font-size: 0.95rem;">
                        on 3/2 street, on the first floor, on Facebook...
                    </div>
                </div>

                <!-- Card AT -->
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 20px; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(220,38,38,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 12px; background: #dc2626; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">AT</div>
                        <h4 style="color: #7f1d1d; font-size: 1.2rem; margin: 0;">Điểm cụ thể</h4>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
                        <span style="background: white; color: #dc2626; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca;">Địa chỉ nhà</span>
                        <span style="background: white; color: #dc2626; padding: 4px 10px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; border: 1px solid #fecaca;">Địa điểm công cộng</span>
                    </div>
                    <div style="background: white; padding: 12px; border-radius: 8px; border-left: 3px solid #dc2626; font-style: italic; color: #475569; font-size: 0.95rem;">
                        at 132 3/2 street, at the hospital...
                    </div>
                </div>
            </div>

            <div style="background: #fff7ed; border: 1px solid #ffedd5; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.background='#ffedd5'" onmouseout="this.style.background='#fff7ed'">
                <div style="font-size: 2rem;">📍</div>
                <div>
                    <b style="color: #c2410c; font-size: 1.15rem; display: block; margin-bottom: 4px;">By / Near / Close to</b>
                    <div style="color: #475569; font-size: 1rem;">Nghĩa là "gần với" một vị trí nào đó (by the lake, near the cinema...).</div>
                </div>
            </div>
        </div>
        `
    },
    {
        title: '3. Các cụm Giới từ đi với Động từ / Tính từ (Collocations)',
        content: `
        <div class="theory-rich-content">
            <p style="margin-bottom: 24px; color: var(--text-main);">Nhiều động từ và tính từ luôn đi kèm với một <strong>giới từ cố định</strong>. Đây là phần bạn cần học thuộc lòng vì không có quy tắc tuyệt đối.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
                <!-- Động từ -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.05)'">
                    <div style="background: #0ea5e9; color: white; padding: 16px; font-weight: bold; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                        ĐỘNG TỪ + GIỚI TỪ
                    </div>
                    <div style="padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 1.05rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">depend</span> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">on</span></div>
                            <div style="color: #64748b; font-style: italic;">phụ thuộc vào</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">wait</span> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">for</span></div>
                            <div style="color: #64748b; font-style: italic;">chờ đợi</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">listen</span> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">to</span></div>
                            <div style="color: #64748b; font-style: italic;">lắng nghe</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">look forward</span> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">to</span></div>
                            <div style="color: #64748b; font-style: italic;">mong đợi</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div><span style="font-weight: 600; color: #0f172a;">apologize</span> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">for</span></div>
                            <div style="color: #64748b; font-style: italic;">xin lỗi vì</div>
                        </div>
                    </div>
                </div>

                <!-- Tính từ -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 15px -3px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.05)'">
                    <div style="background: #10b981; color: white; padding: 16px; font-weight: bold; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        TÍNH TỪ + GIỚI TỪ
                    </div>
                    <div style="padding: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 1.05rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">good / bad</span> <span style="background: #d1fae5; color: #047857; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">at</span></div>
                            <div style="color: #64748b; font-style: italic;">giỏi / tệ về</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">interested</span> <span style="background: #d1fae5; color: #047857; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">in</span></div>
                            <div style="color: #64748b; font-style: italic;">thích thú với</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">famous</span> <span style="background: #d1fae5; color: #047857; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">for</span></div>
                            <div style="color: #64748b; font-style: italic;">nổi tiếng vì</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                            <div><span style="font-weight: 600; color: #0f172a;">afraid</span> <span style="background: #d1fae5; color: #047857; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">of</span></div>
                            <div style="color: #64748b; font-style: italic;">sợ hãi</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div><span style="font-weight: 600; color: #0f172a;">responsible</span> <span style="background: #d1fae5; color: #047857; padding: 2px 8px; border-radius: 4px; font-size: 0.95rem; font-weight: bold;">for</span></div>
                            <div style="color: #64748b; font-style: italic;">chịu trách nhiệm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
];
const prepositionsPracticeBook1 = [
    { q: "trong suốt kỳ nghỉ hè", a: ["during the summer holiday", "during the summer vacation", "during summer holiday", "during summer vacation"] },
    { q: "vào cuối tuần", a: ["on the weekend", "at the weekend", "on weekends", "at weekends"] },
    { q: "vào sáng thứ Hai tuần tới", a: ["on Monday morning next week", "next Monday morning", "on the morning of next Monday"] },
    { q: "vào buổi chiều", a: ["in the afternoon", "in the afternoons"] },
    { q: "vào dịp Tết Nguyên Đán", a: ["on Lunar New Year", "on Tet holiday", "at Tet", "on Tet"] },
    { q: "vào ngày 15 tháng 8 Âm Lịch", a: ["on the 15th of August on the Lunar calendar", "on August 15th on the Lunar calendar", "on the 15th of August (lunar)", "on August 15th (lunar)"] },
    { q: "trước kỳ thi VSTEP", a: ["before the VSTEP exam", "prior to the VSTEP exam"] },
    { q: "trong vòng hai năm", a: ["for two years", "within two years", "in two years"] },
    { q: "kể từ năm ngoái", a: ["since last year"] },
    { q: "sau giờ làm việc", a: ["after working hours", "after work"] }
];

const prepositionsPracticeBook2 = [
    { q: "tại một nhà sách gần trường đại học", a: ["at a bookstore near the university", "at a bookshop near the university", "at a bookstore near the college"] },
    { q: "trên Facebook", a: ["on Facebook"] },
    { q: "trên một con đường đông đúc", a: ["on a busy street", "on a crowded street"] },
    { q: "trong nhà tôi", a: ["in my house", "in my home", "at my house"] },
    { q: "ở đất nước của tôi", a: ["in my country"] },
    { q: "tại một siêu thị lớn trong trung tâm thành phố", a: ["at a big supermarket in the city center", "at a large supermarket in the city center", "at a big supermarket in the centre of the city"] },
    { q: "tại thành phố Cần Thơ", a: ["in Can Tho city", "in Can Tho"] },
    { q: "gần thư viện trường", a: ["near the school library", "near the university library", "close to the school library"] },
    { q: "trên màn hình điện thoại", a: ["on the phone screen", "on the smartphone screen", "on my phone screen"] },
    { q: "trong khuôn viên trường", a: ["on campus", "on the school campus", "on the university campus"] }
];

const prepositionsPracticeExtra1 = [
    { before: "We are going to have a meeting ", after: " Friday morning.", options: ["in", "on", "at"], ans: "on" },
    { before: "My father usually reads the newspaper ", after: " the evening.", options: ["in", "on", "at"], ans: "in" },
    { before: "She is really good ", after: " playing the piano.", options: ["in", "at", "for"], ans: "at" },
    { before: "I have been learning English ", after: " five years.", options: ["for", "since", "during"], ans: "for" },
    { before: "He apologized to his boss ", after: " being late.", options: ["to", "for", "with"], ans: "for" },
    { before: "The train will arrive ", after: " exactly 9:00 AM.", options: ["in", "on", "at"], ans: "at" },
    { before: "Are you interested ", after: " reading science fiction books?", options: ["in", "on", "about"], ans: "in" },
    { before: "They often go skiing ", after: " winter.", options: ["in", "on", "at"], ans: "in" },
    { before: "We had a lot of fun ", after: " the summer holiday.", options: ["while", "during", "for"], ans: "during" },
    { before: "The children are afraid ", after: " the dark.", options: ["of", "from", "with"], ans: "of" }
];

const prepositionsPracticeExtra2 = [
    { q: "Tôi thường thức dậy lúc 6 giờ sáng vào các ngày trong tuần.", a: ["I usually wake up at 6 a.m. on weekdays.", "I usually get up at 6 a.m. on weekdays.", "I often wake up at 6 a.m. on weekdays."] },
    { q: "Chị gái tôi có hứng thú với việc học nhiếp ảnh.", a: ["My sister is very interested in learning photography.", "My sister is interested in learning photography."] },
    { q: "Chúng tôi đã làm việc tại công ty này từ năm 2018.", a: ["We have worked at this company since 2018.", "We have been working at this company since 2018.", "We have worked in this company since 2018."] },
    { q: "Thành phố này nổi tiếng với những bãi biển đẹp.", a: ["This city is famous for its beautiful beaches.", "This city is famous for beautiful beaches."] },
    { q: "Tôi không thể tập trung vào bài tập về nhà vì tiếng ồn.", a: ["I cannot focus on my homework because of the noise.", "I cannot concentrate on my homework because of the noise."] }
];

const prepositionsPracticeExtra3 = [
    { q: "Bố mẹ tôi đang chờ tôi ở nhà ga xe lửa.", a: ["My parents are waiting for me at the train station.", "My parents are waiting for me at the railway station."] },
    { q: "Bạn nên chịu trách nhiệm cho hành động của mình.", a: ["You should be responsible for your actions.", "You should take responsibility for your actions."] },
    { q: "Cô ấy sinh ra ở Hà Nội vào tháng 10 năm 1999.", a: ["She was born in Hanoi in October 1999.", "She was born in Hanoi in October, 1999."] },
    { q: "Mọi người phụ thuộc rất nhiều vào công nghệ ngày nay.", a: ["People depend heavily on technology today.", "People depend a lot on technology nowadays.", "Everyone depends a lot on technology today."] },
    { q: "Đừng quên nộp báo cáo trước thứ Sáu tuần này.", a: ["Do not forget to submit the report before this Friday."] }
];

window.renderPrepositionsDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('content-wrapper');
    
    // Init state
    if (!window.prepositionsAnswers1) window.prepositionsAnswers1 = new Array(prepositionsPracticeBook1.length).fill('');
    if (!window.prepositionsAnswers2) window.prepositionsAnswers2 = new Array(prepositionsPracticeBook2.length).fill('');
    if (!window.prepositionsAnswersExtra1) window.prepositionsAnswersExtra1 = new Array(prepositionsPracticeExtra1.length).fill('');
    if (!window.prepositionsAnswersExtra2) window.prepositionsAnswersExtra2 = new Array(prepositionsPracticeExtra2.length).fill('');
    if (!window.prepositionsAnswersExtra3) window.prepositionsAnswersExtra3 = new Array(prepositionsPracticeExtra3.length).fill('');

    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderPrepositionsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderPrepositionsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderPrepositionsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';
    
    if (activeTab === 'theory') {
        const theoryCards = prepositionsTheoryData.map((item) => `
            <div class="theory-card" style="background: var(--bg-card); border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border-left: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 12px; font-size: 1.3rem; font-weight: 800;">${item.title}</h3>
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
    } else if (activeTab === 'practice_book') {
        const pBook1Html = prepositionsPracticeBook1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="prep_book1_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.prepositionsAnswers1[${idx}] = this.value; document.getElementById('prepexp1_${idx}').style.display='none'; window.saveProgress(true);" value="${window.prepositionsAnswers1[idx] || ''}">
                    <button onclick="window.checkPrepositions1(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="prepexp1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        const pBook2Html = prepositionsPracticeBook2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="prep_book2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.prepositionsAnswers2[${idx}] = this.value; document.getElementById('prepexp2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.prepositionsAnswers2[idx] || ''}">
                    <button onclick="window.checkPrepositions2(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="prepexp2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 1 (GIỚI TỪ CHỈ THỜI GIAN)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chuyển các "cụm chỉ thời gian" sau thành tiếng Anh.</i></p>
                    <!-- HỘP GỢI Ý TỪ VỰNG & CẤU TRÚC (BÀI ÁP DỤNG 1) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TỪ VỰNG & GIỚI TỪ THỜI GIAN:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1 - 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">during the summer holiday / vacation</b>: <i style="color: #1e293b; font-weight: 600;">trong suốt kỳ nghỉ hè</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on the weekend / on weekends</b>: <i style="color: #1e293b; font-weight: 600;">vào cuối tuần</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on Monday morning next week / next Monday morning</b>: <i style="color: #1e293b; font-weight: 600;">vào sáng thứ Hai tuần tới</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">in the afternoon</b>: <i style="color: #1e293b; font-weight: 600;">vào buổi chiều</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on Tet holiday / on Lunar New Year</b>: <i style="color: #1e293b; font-weight: 600;">vào dịp Tết Nguyên Đán</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 6 - 10</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on the 15th of August on the Lunar calendar / (lunar)</b>: <i style="color: #1e293b; font-weight: 600;">vào ngày 15 tháng 8 Âm Lịch</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">before / prior to the VSTEP exam</b>: <i style="color: #1e293b; font-weight: 600;">trước kỳ thi VSTEP</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">for two years / within two years</b>: <i style="color: #1e293b; font-weight: 600;">trong vòng hai năm</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">since last year</b>: <i style="color: #1e293b; font-weight: 600;">kể từ năm ngoái</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">after work / after working hours</b>: <i style="color: #1e293b; font-weight: 600;">sau giờ làm việc</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; gap: 16px;">${pBook1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPrepositions1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 2 (GIỚI TỪ CHỈ NƠI CHỐN)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chuyển các "cụm chỉ nơi chốn" sau thành tiếng Anh.</i></p>
                    <!-- HỘP GỢI Ý TỪ VỰNG & CẤU TRÚC (BÀI ÁP DỤNG 2) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TỪ VỰNG & GIỚI TỪ NƠI CHỐN:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1 - 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">at a bookstore / bookshop near the university</b>: <i style="color: #1e293b; font-weight: 600;">tại một nhà sách gần trường đại học</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on Facebook</b>: <i style="color: #1e293b; font-weight: 600;">trên Facebook</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on a busy / crowded street</b>: <i style="color: #1e293b; font-weight: 600;">trên một con đường đông đúc</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">in my house / in my home / at my house</b>: <i style="color: #1e293b; font-weight: 600;">trong nhà tôi</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">in my country</b>: <i style="color: #1e293b; font-weight: 600;">ở đất nước của tôi</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 6 - 10</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">at a big / large supermarket in the city center</b>: <i style="color: #1e293b; font-weight: 600;">tại một siêu thị lớn trong trung tâm thành phố</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">in Can Tho city / in Can Tho</b>: <i style="color: #1e293b; font-weight: 600;">tại thành phố Cần Thơ</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">near / close to the school library</b>: <i style="color: #1e293b; font-weight: 600;">gần thư viện trường</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on the phone / smartphone screen</b>: <i style="color: #1e293b; font-weight: 600;">trên màn hình điện thoại</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on campus / on the school campus</b>: <i style="color: #1e293b; font-weight: 600;">trong khuôn viên trường</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; gap: 16px;">${pBook2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPrepositions2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_extra') {
        const extra1Html = prepositionsPracticeExtra1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <span style="font-size: 1.15rem; font-weight: 500; color: var(--text-main);">${q.before}</span>
                    <select id="prep_extra1_${idx}" style="padding: 6px 12px; font-size: 1.1rem; border: 2px solid #cbd5e1; border-radius: 8px; outline: none; cursor: pointer;" onchange="window.prepositionsAnswersExtra1[${idx}] = this.value; this.style.borderColor='#cbd5e1'; window.saveProgress(true);">
                        <option value="">-- Chọn --</option>
                        ${q.options.map(opt => `<option value="${opt}" ${window.prepositionsAnswersExtra1[idx] === opt ? 'selected' : ''}>${opt}</option>`).join('')}
                    </select>
                    <span style="font-size: 1.15rem; font-weight: 500; color: var(--text-main);">${q.after}</span>
                </div>
                <div id="prepexp_extra1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        const extra2Html = prepositionsPracticeExtra2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <input type="text" id="prep_extra2_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.prepositionsAnswersExtra2[${idx}] = this.value; document.getElementById('prepexp_extra2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.prepositionsAnswersExtra2[idx] || ''}">
                    <button onclick="window.checkPrepositionsExtra2(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="prepexp_extra2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        const extra3Html = prepositionsPracticeExtra3.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 16px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <input type="text" id="prep_extra3_${idx}" placeholder="Nhập bản dịch tiếng Anh..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.prepositionsAnswersExtra3[${idx}] = this.value; document.getElementById('prepexp_extra3_${idx}').style.display='none'; window.saveProgress(true);" value="${window.prepositionsAnswersExtra3[idx] || ''}">
                    <button onclick="window.checkPrepositionsExtra3(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div id="prepexp_extra3_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 1 (CHỌN TỪ ĐÚNG)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chọn từ trong ngoặc để điền vào chỗ trống sao cho phù hợp.</i></p>
                    <div>${extra1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPrepositionsExtra1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 2 (LUYỆN TẬP CHUNG 1)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Dịch các câu sau sang tiếng Anh, chú ý sử dụng đúng giới từ và thì của động từ.</i></p>
                    <!-- HỘP GỢI Ý TỪ VỰNG & CẤU TRÚC (BÀI THÊM 2) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TỪ VỰNG & CẤU TRÚC THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">wake up / get up</b>: <i style="color: #1e293b; font-weight: 600;">thức dậy</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">at 6 a.m.</b>: <i style="color: #1e293b; font-weight: 600;">lúc 6 giờ sáng</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">on weekdays</b>: <i style="color: #1e293b; font-weight: 600;">vào các ngày trong tuần</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">be interested in + V-ing</b>: <i style="color: #1e293b; font-weight: 600;">có hứng thú với / thích thú</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">learning photography</b>: <i style="color: #1e293b; font-weight: 600;">việc học nhiếp ảnh</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">work at / in this company</b>: <i style="color: #1e293b; font-weight: 600;">làm việc tại công ty này</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">since 2018</b>: <i style="color: #1e293b; font-weight: 600;">từ năm 2018 (dùng thì Hiện tại hoàn thành: have worked / have been working)</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">be famous for</b>: <i style="color: #1e293b; font-weight: 600;">nổi tiếng với / vì cái gì</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">beautiful beaches</b>: <i style="color: #1e293b; font-weight: 600;">những bãi biển đẹp</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">focus on / concentrate on</b>: <i style="color: #1e293b; font-weight: 600;">tập trung vào</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">because of the noise</b>: <i style="color: #1e293b; font-weight: 600;">vì tiếng ồn</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${extra2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPrepositionsExtra2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 3 (LUYỆN TẬP CHUNG 2)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Dịch các câu sau sang tiếng Anh, chú ý các cụm động từ/tính từ đi kèm giới từ.</i></p>
                    <!-- HỘP GỢI Ý TỪ VỰNG & CẤU TRÚC (BÀI THÊM 3) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TỪ VỰNG & CẤU TRÚC THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">wait for sb at...</b>: <i style="color: #1e293b; font-weight: 600;">đang chờ ai ở đâu (are waiting for me)</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">at the train station / railway station</b>: <i style="color: #1e293b; font-weight: 600;">ở nhà ga xe lửa</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">should be responsible for / take responsibility for</b>: <i style="color: #1e293b; font-weight: 600;">nên chịu trách nhiệm cho</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">your actions</b>: <i style="color: #1e293b; font-weight: 600;">hành động của mình</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">was born in + địa điểm</b>: <i style="color: #1e293b; font-weight: 600;">sinh ra ở (in Hanoi)</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">in + tháng + năm</b>: <i style="color: #1e293b; font-weight: 600;">vào tháng ... năm ... (in October 1999)</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">depend heavily / a lot on</b>: <i style="color: #1e293b; font-weight: 600;">phụ thuộc rất nhiều vào</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">technology today / nowadays</b>: <i style="color: #1e293b; font-weight: 600;">công nghệ ngày nay</i></div>
                                </div>
                            </div>

                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">Do not forget to submit the report</b>: <i style="color: #1e293b; font-weight: 600;">Đừng quên nộp báo cáo</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">before this Friday</b>: <i style="color: #1e293b; font-weight: 600;">trước thứ Sáu tuần này</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${extra3Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitPrepositionsExtra3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 06: GIỚI TỪ (PREPOSITIONS)</h1>
            ${tabsHtml}
            ${contentHtml}
        </div>
    `;
}

// Checker functions
window.checkPrepositions1 = function(idx) {
    const q = prepositionsPracticeBook1[idx];
    const rawVal = window.prepositionsAnswers1[idx] || '';
    const userAns = rawVal.trim();
    const expDiv = document.getElementById('prepexp1_' + idx);
    
    if (!userAns) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = `<b>⚠️ Bạn chưa nhập câu trả lời!</b>`;
        return;
    }

    let isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns));
    
    expDiv.style.display = 'block';
    if (isCorrect) {
        expDiv.style.background = '#dcfce7'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ Chính xác!</b><br>Đáp án: ${q.a[0]}`;
    } else {
        expDiv.style.background = '#fee2e2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ Chưa đúng.</b><br>Đáp án tham khảo: <b>${q.a.join(' / ')}</b>`;
    }
}

window.checkPrepositions2 = function(idx) {
    const q = prepositionsPracticeBook2[idx];
    const rawVal = window.prepositionsAnswers2[idx] || '';
    const userAns = rawVal.trim();
    const expDiv = document.getElementById('prepexp2_' + idx);
    
    if (!userAns) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = `<b>⚠️ Bạn chưa nhập câu trả lời!</b>`;
        return;
    }

    let isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns));
    
    expDiv.style.display = 'block';
    if (isCorrect) {
        expDiv.style.background = '#dcfce7'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ Chính xác!</b><br>Đáp án: ${q.a[0]}`;
    } else {
        expDiv.style.background = '#fee2e2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ Chưa đúng.</b><br>Đáp án tham khảo: <b>${q.a.join(' / ')}</b>`;
    }
}

window.checkPrepositionsExtra2 = function(idx) {
    const q = prepositionsPracticeExtra2[idx];
    const rawVal = window.prepositionsAnswersExtra2[idx] || '';
    const userAns = rawVal.trim();
    const expDiv = document.getElementById('prepexp_extra2_' + idx);
    
    if (!userAns) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = `<b>⚠️ Bạn chưa nhập câu trả lời!</b>`;
        return;
    }

    let isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns));
    const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
    
    expDiv.style.display = 'block';
    if (formCheck.valid) {
        expDiv.style.background = '#dcfce7'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ Chính xác!</b><br>Đáp án: ${q.a[0]}`;
    } else if (formCheck.isNear) {
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = formCheck.message;
    } else {
        expDiv.style.background = '#fee2e2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ Chưa đúng.</b><br>Đáp án tham khảo: <b>${q.a.join(' / ')}</b>`;
    }
}

window.checkPrepositionsExtra3 = function(idx) {
    const q = prepositionsPracticeExtra3[idx];
    const rawVal = window.prepositionsAnswersExtra3[idx] || '';
    const userAns = rawVal.trim();
    const expDiv = document.getElementById('prepexp_extra3_' + idx);
    
    if (!userAns) {
        expDiv.style.display = 'block';
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = `<b>⚠️ Bạn chưa nhập câu trả lời!</b>`;
        return;
    }

    let isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns));
    const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
    
    expDiv.style.display = 'block';
    if (formCheck.valid) {
        expDiv.style.background = '#dcfce7'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
        expDiv.innerHTML = `<b>✅ Chính xác!</b><br>Đáp án: ${q.a[0]}`;
    } else if (formCheck.isNear) {
        expDiv.style.background = '#fffbeb'; expDiv.style.color = '#b45309'; expDiv.style.borderLeft = '4px solid #f59e0b';
        expDiv.innerHTML = formCheck.message;
    } else {
        expDiv.style.background = '#fee2e2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
        expDiv.innerHTML = `<b>❌ Chưa đúng.</b><br>Đáp án tham khảo: <b>${q.a.join(' / ')}</b>`;
    }
}


window.submitPrepositions1 = function() {
    let correct = 0, completed = true;
    prepositionsPracticeBook1.forEach((q, idx) => {
        const userAns = (window.prepositionsAnswers1[idx] || '').trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
        if (!userAns) completed = false;
        else {
            if (q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns))) correct++;
            window.checkPrepositions1(idx);
        }
    });
    if (!completed) return alert("Vui lòng trả lời hết các câu hỏi!");
    window.showExerciseResult(correct, prepositionsPracticeBook1.length, "KẾT QUẢ BÀI ÁP DỤNG 1 (GIỚI TỪ)");
}

window.submitPrepositions2 = function() {
    let correct = 0, completed = true;
    prepositionsPracticeBook2.forEach((q, idx) => {
        const userAns = (window.prepositionsAnswers2[idx] || '').trim().toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
        if (!userAns) completed = false;
        else {
            if (q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns))) correct++;
            window.checkPrepositions2(idx);
        }
    });
    if (!completed) return alert("Vui lòng trả lời hết các câu hỏi!");
    window.showExerciseResult(correct, prepositionsPracticeBook2.length, "KẾT QUẢ BÀI ÁP DỤNG 2 (GIỚI TỪ)");
}

window.submitPrepositionsExtra1 = function() {
    let correct = 0, completed = true;
    prepositionsPracticeExtra1.forEach((q, idx) => {
        const userAns = window.prepositionsAnswersExtra1[idx];
        const selectEl = document.getElementById('prep_extra1_' + idx);
        const expDiv = document.getElementById('prepexp_extra1_' + idx);
        
        if (!userAns) {
            completed = false;
            selectEl.style.borderColor = '#ef4444';
            expDiv.style.display = 'none';
        } else {
            if (userAns === q.ans) {
                correct++;
                selectEl.style.borderColor = '#22c55e';
                expDiv.style.display = 'block';
                expDiv.style.background = '#dcfce7'; expDiv.style.color = '#166534'; expDiv.style.borderLeft = '4px solid #22c55e';
                expDiv.innerHTML = `<b>✅ Chính xác!</b>`;
            } else {
                selectEl.style.borderColor = '#ef4444';
                expDiv.style.display = 'block';
                expDiv.style.background = '#fee2e2'; expDiv.style.color = '#991b1b'; expDiv.style.borderLeft = '4px solid #ef4444';
                expDiv.innerHTML = `<b>❌ Chưa đúng.</b><br>Đáp án: <b>${q.ans}</b>`;
            }
        }
    });
    if (!completed) return alert("Vui lòng chọn đáp án cho tất cả các câu!");
    window.showExerciseResult(correct, prepositionsPracticeExtra1.length, "KẾT QUẢ BÀI THÊM 1 (CHỌN TỪ)");
}

window.submitPrepositionsExtra2 = function() {
    let correct = 0, completed = true;
    prepositionsPracticeExtra2.forEach((q, idx) => {
        const rawVal = window.prepositionsAnswersExtra2[idx] || '';
        const userAns = rawVal.trim();
        if (!userAns) completed = false;
        else {
            const isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns));
            const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
            if (formCheck.valid) correct++;
            window.checkPrepositionsExtra2(idx);
        }
    });
    if (!completed) return alert("Vui lòng trả lời hết các câu hỏi!");
    window.showExerciseResult(correct, prepositionsPracticeExtra2.length, "KẾT QUẢ LUYỆN TẬP CHUNG 1");
}

window.submitPrepositionsExtra3 = function() {
    let correct = 0, completed = true;
    prepositionsPracticeExtra3.forEach((q, idx) => {
        const rawVal = window.prepositionsAnswersExtra3[idx] || '';
        const userAns = rawVal.trim();
        if (!userAns) completed = false;
        else {
            const isCorrect = q.a.some(ans => window.normalizeText(ans) === window.normalizeText(userAns));
            const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);
            if (formCheck.valid) correct++;
            window.checkPrepositionsExtra3(idx);
        }
    });
    if (!completed) return alert("Vui lòng trả lời hết các câu hỏi!");
    window.showExerciseResult(correct, prepositionsPracticeExtra3.length, "KẾT QUẢ LUYỆN TẬP CHUNG 2");
}


// ---------------- ADVERBS ----------------
const adverbsPracticeExtra1 = [
    {
        q: "He speaks English very _______.",
        options: ["fluent", "fluently", "fluency"],
        a: "fluently"
    },
    {
        q: "She is a _______ driver.",
        options: ["careful", "carefully"],
        a: "careful"
    },
    {
        q: "They worked very _______ to pass the final exam.",
        options: ["hard", "hardly"],
        a: "hard"
    },
    {
        q: "I have been feeling very tired _______.",
        options: ["late", "lately"],
        a: "lately"
    },
    {
        q: "The children are playing _______ in the garden.",
        options: ["happy", "happily"],
        a: "happily"
    }
];

const adverbsPracticeExtra2 = [
    {
        q: "Gần đây, tôi rất bận rộn với công việc.",
        a: ["Recently, I have been very busy with work.", "I have been very busy with work recently.", "Recently, I am very busy with work.", "I am very busy with work recently."]
    },
    {
        q: "Cô ấy luôn luôn thức dậy sớm vào buổi sáng.",
        a: ["She always wakes up early in the morning.", "She always gets up early in the morning."]
    },
    {
        q: "Bọn họ hoàn toàn đồng ý với kế hoạch của bạn.",
        a: ["They completely agree with your plan.", "They totally agree with your plan."]
    },
    {
        q: "Thật may mắn, không ai bị thương trong vụ tai nạn.",
        a: ["Fortunately, nobody was hurt in the accident.", "Luckily, nobody was hurt in the accident.", "Fortunately, no one was hurt in the accident.", "Luckily, no one was hurt in the accident."]
    },
    {
        q: "Họ đã hoàn thành bài kiểm tra một cách dễ dàng.",
        a: ["They finished the test easily.", "They completed the test easily.", "They finished the exam easily.", "They completed the exam easily."]
    }
];
const adverbsPracticeExtra3 = [
    {
        q: "The students performed <u>good</u> in the final exam because they prepared thoroughly.",
        options: ["performed", "good", "exam", "thoroughly"],
        a: "good",
        exp: "Bổ nghĩa cho động từ 'performed' phải dùng trạng từ 'well' thay vì tính từ 'good'."
    },
    {
        q: "She speaks English very <u>fluent</u> and communicates with foreigners easily.",
        options: ["speaks", "fluent", "communicates", "easily"],
        a: "fluent",
        exp: "Bổ nghĩa cho động từ 'speaks' phải dùng trạng từ 'fluently'."
    },
    {
        q: "The new policy was <u>quick</u> implemented by the management team.",
        options: ["policy", "quick", "implemented", "management"],
        a: "quick",
        exp: "Bổ nghĩa cho động từ bị động 'implemented' phải dùng trạng từ 'quickly'."
    },
    {
        q: "He was <u>extreme</u> tired after running the marathon.",
        options: ["extreme", "tired", "running", "marathon"],
        a: "extreme",
        exp: "Bổ nghĩa cho tính từ 'tired' phải dùng trạng từ 'extremely'."
    },
    {
        q: "The train arrived <u>lately</u> due to heavy snow in the region.",
        options: ["arrived", "lately", "heavy", "region"],
        a: "lately",
        exp: "'late' vừa là tính từ vừa là trạng từ chỉ trễ giờ; 'lately' có nghĩa là dạo gần đây. Phải sửa 'lately' thành 'late'."
    }
];

window.checkAdverbsExtra1 = function(idx, optIdx, ans) {
    window.adverbsAnswersExtra1[idx] = ans;
    const q = adverbsPracticeExtra1[idx];
    const expDiv = document.getElementById('advexp_extra1_' + idx);
    if (!expDiv) return;
    
    document.querySelectorAll(`.adv-extra1-btn-${idx}`).forEach(btn => {
        btn.classList.remove('selected');
        btn.style.background = 'white';
        btn.style.color = 'var(--text-main)';
        btn.style.borderColor = 'var(--border-color)';
    });
    
    const selectedBtn = document.getElementById(`adv_extra1_btn_${idx}_${optIdx}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
        selectedBtn.style.background = 'var(--primary-color)';
        selectedBtn.style.color = 'white';
        selectedBtn.style.borderColor = 'var(--primary-color)';
    }

    if (ans === q.a) {
        expDiv.innerHTML = `<span style="color: #16a34a;">✅ Chính xác! Đáp án: <b>${q.a}</b></span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#f0fdf4';
        expDiv.style.border = '1px solid #bbf7d0';
    } else {
        expDiv.innerHTML = `<span style="color: #dc2626;">❌ Sai rồi. Đáp án đúng là: <b>${q.a}</b></span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.border = '1px solid #fecaca';
    }
    window.saveProgress(true);
};

window.checkAdverbsExtra2 = function(idx) {
    const input = document.getElementById('adv_extra2_' + idx);
    const expDiv = document.getElementById('advexp_extra2_' + idx);
    if (!input || !expDiv) return;
    
    const val = input.value.trim();
    if (!val) {
        expDiv.innerHTML = `<span style="color: #ea580c;">⚠️ Vui lòng nhập câu trả lời!</span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#fff7ed';
        expDiv.style.border = '1px solid #fdba74';
        return;
    }
    
    window.adverbsAnswersExtra2[idx] = val;
    const q = adverbsPracticeExtra2[idx];
    const isCorrect = q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans));
    
    if (isCorrect) {
        expDiv.innerHTML = `<span style="color: #16a34a;">✅ Tuyệt vời! Câu dịch hoàn toàn chính xác.</span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#f0fdf4';
        expDiv.style.border = '1px solid #bbf7d0';
        input.style.borderColor = '#16a34a';
    } else {
        expDiv.innerHTML = `<span style="color: #dc2626;">❌ Chưa chính xác.</span><br><div style="margin-top: 6px;"><b>💡 Đáp án gợi ý:</b><br>- ${q.a.join('<br>- ')}</div>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.border = '1px solid #fecaca';
        input.style.borderColor = '#ef4444';
    }
    window.saveProgress(true);
};

window.checkAdverbsExtra3 = function(idx, optIdx, ans) {
    window.adverbsAnswersExtra3[idx] = ans;
    const q = adverbsPracticeExtra3[idx];
    const expDiv = document.getElementById('advexp_extra3_' + idx);
    if (!expDiv) return;
    
    document.querySelectorAll(`.adv-extra3-btn-${idx}`).forEach(btn => {
        btn.classList.remove('selected');
        btn.style.background = 'white';
        btn.style.color = 'var(--text-main)';
        btn.style.borderColor = 'var(--border-color)';
    });
    
    const selectedBtn = document.getElementById(`adv_extra3_btn_${idx}_${optIdx}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
        selectedBtn.style.background = 'var(--primary-color)';
        selectedBtn.style.color = 'white';
        selectedBtn.style.borderColor = 'var(--primary-color)';
    }

    if (ans === q.a) {
        expDiv.innerHTML = `<span style="color: #16a34a;">✅ Chính xác! ${q.exp}</span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#f0fdf4';
        expDiv.style.border = '1px solid #bbf7d0';
    } else {
        expDiv.innerHTML = `<span style="color: #dc2626;">❌ Sai rồi. Đáp án đúng là <b>${q.a}</b>. ${q.exp}</span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.border = '1px solid #fecaca';
    }
    window.saveProgress(true);
};

window.checkAdverbsBook2 = function(idx, optIdx, ans) {
    window.adverbsAnswersBook2[idx] = ans;
    const q = adverbsPracticeBook2[idx];
    const expDiv = document.getElementById('advexp_book2_' + idx);
    if (!expDiv) return;
    
    document.querySelectorAll(`.adv2-btn-${idx}`).forEach(btn => {
        btn.classList.remove('selected');
        btn.style.background = 'white';
        btn.style.color = 'var(--text-main)';
        btn.style.borderColor = 'var(--border-color)';
    });
    
    const selectedBtn = document.getElementById(`adv2_btn_${idx}_${optIdx}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
        selectedBtn.style.background = 'var(--primary-color)';
        selectedBtn.style.color = 'white';
        selectedBtn.style.borderColor = 'var(--primary-color)';
    }

    if (ans === q.a) {
        expDiv.innerHTML = `<span style="color: #16a34a;">✅ Chính xác! Đáp án: <b>${q.a}</b></span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#f0fdf4';
        expDiv.style.border = '1px solid #bbf7d0';
    } else {
        expDiv.innerHTML = `<span style="color: #dc2626;">❌ Sai rồi. Đáp án đúng là: <b>${q.a}</b></span>`;
        expDiv.style.display = 'block';
        expDiv.style.background = '#fef2f2';
        expDiv.style.border = '1px solid #fecaca';
    }
    window.saveProgress(true);
};

window.submitAdverbsBook2 = function() {
    let score = 0;
    let completed = true;
    adverbsPracticeBook2.forEach((q, idx) => {
        const expDiv = document.getElementById('advexp_book2_' + idx);
        const userAnswer = window.adverbsAnswersBook2[idx];
        
        if (!userAnswer) {
            completed = false;
            if (expDiv) {
                expDiv.innerHTML = `<span style="color: #ea580c;">⚠️ Bạn chưa chọn đáp án cho câu này.</span>`;
                expDiv.style.display = 'block';
                expDiv.style.background = '#fff7ed';
                expDiv.style.border = '1px solid #fdba74';
            }
        } else {
            if (userAnswer === q.a) {
                score++;
                if (expDiv) {
                    expDiv.innerHTML = `<span style="color: #16a34a;">✅ Chính xác! Đáp án: <b>${q.a}</b></span>`;
                    expDiv.style.display = 'block';
                    expDiv.style.background = '#f0fdf4';
                    expDiv.style.border = '1px solid #bbf7d0';
                }
            } else {
                if (expDiv) {
                    expDiv.innerHTML = `<span style="color: #dc2626;">❌ Sai rồi. Đáp án đúng là: <b>${q.a}</b></span>`;
                    expDiv.style.display = 'block';
                    expDiv.style.background = '#fef2f2';
                    expDiv.style.border = '1px solid #fecaca';
                }
            }
        }
    });

    if (!completed) {
        alert("Vui lòng chọn đáp án cho tất cả các câu trước khi nộp bài!");
        return;
    }

    window.saveProgress(true);
    window.showExerciseResult(score, adverbsPracticeBook2.length, "KẾT QUẢ BÀI TẬP ÁP DỤNG 2 (CHỌN TRẠNG TỪ)");
};

window.checkAdverbsBook1 = function(idx) {
    const inputId = `adv_book1_${idx}`;
    const expId = `advexp_book1_${idx}`;
    const inputEl = document.getElementById(inputId);
    const expEl = document.getElementById(expId);
    
    if (!inputEl || !expEl) return;
    
    const val = (inputEl.value || '').trim();
    if (!val) {
        expEl.style.display = 'block';
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = 'Vui lòng nhập câu trả lời!';
        return;
    }
    
    const correctAnswers = adverbsPracticeBook1[idx].a;
    const isCorrect = correctAnswers.some(ans => window.normalizeText(val) === window.normalizeText(ans));
    
    expEl.style.display = 'block';
    if (isCorrect) {
        expEl.style.background = '#dcfce7';
        expEl.style.color = '#16a34a';
        expEl.innerHTML = '<b>Chính xác!</b>';
        inputEl.style.borderColor = '#16a34a';
    } else {
        expEl.style.background = '#fef2f2';
        expEl.style.color = '#ef4444';
        expEl.innerHTML = `<b>Chưa chính xác!</b><br>Đáp án gợi ý: <b>${correctAnswers[0]}</b>`;
        inputEl.style.borderColor = '#ef4444';
    }
    
    window.adverbsAnswersBook1[idx] = val;
    window.saveProgress(true);
};

window.submitAdverbsBook1 = function() {
    let score = 0;
    adverbsPracticeBook1.forEach((q, i) => {
        window.checkAdverbsBook1(i);
        const val = (window.adverbsAnswersBook1[i] || '').trim();
        if (val && q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans))) {
            score++;
        }
    });
    window.showExerciseResult(score, adverbsPracticeBook1.length, "KẾT QUẢ BÀI 1 (TRẠNG TỪ TRONG TÀI LIỆU)");
};

window.submitAdverbsBook3 = function() {
    let score = 0;
    adverbsPracticeBook3.forEach((q, i) => {
        window.checkAdverbsBook3(i);
        const val = (window.adverbsAnswersBook3[i] || '').trim();
        if (val && q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans))) {
            score++;
        }
    });
    window.showExerciseResult(score, adverbsPracticeBook3.length, "KẾT QUẢ EXERCISE 1 (TRẠNG TỪ)");
};

window.submitAdverbsBook4 = function() {
    let score = 0;
    adverbsPracticeBook4.forEach((q, i) => {
        window.checkAdverbsBook4(i);
        const val = (window.adverbsAnswersBook4[i] || '').trim();
        if (val && q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans))) {
            score++;
        }
    });
    window.showExerciseResult(score, adverbsPracticeBook4.length, "KẾT QUẢ EXERCISE 2 (TRẠNG TỪ)");
};

window.submitAdverbsExtra1 = function() {
    let score = 0;
    adverbsPracticeExtra1.forEach((q, idx) => {
        const expDiv = document.getElementById('advexp_extra1_' + idx);
        const userAnswer = window.adverbsAnswersExtra1[idx];
        
        if (!userAnswer) {
            expDiv.innerHTML = `<span style="color: #ea580c;">⚠️ Bạn chưa chọn đáp án cho câu này.</span>`;
            expDiv.style.display = 'block';
            expDiv.style.background = '#fff7ed';
            expDiv.style.border = '1px solid #fdba74';
            return;
        }

        if (userAnswer === q.a) {
            score++;
            expDiv.innerHTML = `<span style="color: #16a34a;">✅ Chính xác! Đáp án: <b>${q.a}</b></span>`;
            expDiv.style.background = '#f0fdf4';
            expDiv.style.border = '1px solid #bbf7d0';
        } else {
            expDiv.innerHTML = `<span style="color: #dc2626;">❌ Sai rồi. Đáp án đúng là: <b>${q.a}</b></span>`;
            expDiv.style.background = '#fef2f2';
            expDiv.style.border = '1px solid #fecaca';
        }
        expDiv.style.display = 'block';
    });
    window.saveProgress();
    window.showExerciseResult(score, adverbsPracticeExtra1.length, "KẾT QUẢ BÀI TẬP THÊM 1 (TRẠNG TỪ)");
};

window.submitAdverbsExtra2 = function() {
    let score = 0;
    let completed = true;
    adverbsPracticeExtra2.forEach((q, idx) => {
        const val = (window.adverbsAnswersExtra2[idx] || '').trim();
        if (!val) {
            completed = false;
        } else {
            if (q.a.some(ans => window.normalizeText(val) === window.normalizeText(ans))) {
                score++;
            }
        }
        window.checkAdverbsExtra2(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(score, adverbsPracticeExtra2.length, "KẾT QUẢ BÀI TẬP THÊM 2 (TRẠNG TỪ)");
};

window.submitAdverbsExtra3 = function() {
    let score = 0;
    adverbsPracticeExtra3.forEach((q, idx) => {
        const expDiv = document.getElementById('advexp_extra3_' + idx);
        const userAnswer = window.adverbsAnswersExtra3[idx];
        
        if (!userAnswer) {
            expDiv.innerHTML = `<span style="color: #ea580c;">⚠️ Bạn chưa chọn đáp án cho câu này.</span>`;
            expDiv.style.display = 'block';
            expDiv.style.background = '#fff7ed';
            expDiv.style.border = '1px solid #fdba74';
            return;
        }

        if (userAnswer === q.a) {
            score++;
            expDiv.innerHTML = `<span style="color: #16a34a;">✅ Chính xác! ${q.exp}</span>`;
            expDiv.style.background = '#f0fdf4';
            expDiv.style.border = '1px solid #bbf7d0';
        } else {
            expDiv.innerHTML = `<span style="color: #dc2626;">❌ Sai rồi. Đáp án đúng là <b>${q.a}</b>. ${q.exp}</span>`;
            expDiv.style.background = '#fef2f2';
            expDiv.style.border = '1px solid #fecaca';
        }
        expDiv.style.display = 'block';
    });
    window.saveProgress();
    window.showExerciseResult(score, adverbsPracticeExtra3.length, "KẾT QUẢ BÀI TẬP THÊM 3 (TRẠNG TỪ)");
};

window.renderAdverbsDetail = function(activeTab = 'theory') {
    const contentWrapper = document.getElementById('content-wrapper');
    if (!contentWrapper) return;
    
    window.currentTopic = 'adverbs';
    window.currentTab = activeTab;
    if (!window.adverbsAnswersExtra1) window.adverbsAnswersExtra1 = new Array(adverbsPracticeExtra1.length).fill('');
    if (!window.adverbsAnswersExtra2) window.adverbsAnswersExtra2 = new Array(adverbsPracticeExtra2.length).fill('');
    if (!window.adverbsAnswersExtra3) window.adverbsAnswersExtra3 = new Array(adverbsPracticeExtra3.length).fill('');

    if (!window.adverbsAnswersBook1) window.adverbsAnswersBook1 = new Array(adverbsPracticeBook1.length).fill('');
    if (!window.adverbsAnswersBook2) window.adverbsAnswersBook2 = new Array(adverbsPracticeBook2.length).fill('');
    if (!window.adverbsAnswersBook3) window.adverbsAnswersBook3 = new Array(adverbsPracticeBook3.length).fill('');
    if (!window.adverbsAnswersBook4) window.adverbsAnswersBook4 = new Array(adverbsPracticeBook4.length).fill('');

    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderAdverbsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderAdverbsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderAdverbsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';
    
    if (activeTab === 'theory') {
        const theoryCards = adverbsTheoryData.map((item) => `
            <div class="theory-card" style="background: white; border-radius: 12px; padding: 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 24px; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-sm)'">
                <h2 style="color: var(--primary-color); font-size: 1.4rem; font-weight: 800; margin-bottom: 16px;">${item.title}</h2>
                ${item.content}
            </div>
        `).join('');
        
        contentHtml = `
            <div style="margin-top: 24px;">
                ${theoryCards}
            </div>
        `;
    } else if (activeTab === 'practice_book') {
        const book1Html = adverbsPracticeBook1.map((q, idx) => `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="text" id="adv_book1_${idx}" 
                           value="${(window.adverbsAnswersBook1[idx] || '').replace(/"/g, '&quot;')}"
                           placeholder="Nhập bản dịch tiếng Anh..." 
                           style="width: 100%; padding: 12px 16px; font-size: 1.1rem; border: 2px solid var(--border-color); border-radius: 8px; outline: none; transition: border-color 0.2s;"
                           onfocus="this.style.borderColor='var(--primary-color)'"
                           onblur="this.style.borderColor='var(--border-color)'" oninput="window.adverbsAnswersBook1[${idx}] = this.value; window.saveProgress(true);"
                           onkeypress="if(event.key === 'Enter') window.checkAdverbsBook1(${idx})">
                    <button onclick="window.checkAdverbsBook1(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                    <div id="advexp_book1_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px;"></div>
                </div>
            </div>
        `).join('');

        const book2Html = adverbsPracticeBook2.map((q, idx) => {
            const optionsHtml = q.options.map((opt, optIdx) => {
                const isSelected = window.adverbsAnswersBook2[idx] === opt;
                let btnStyle = "padding: 10px 20px; background: white; border: 2px solid var(--border-color); border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;";
                if (isSelected) {
                    btnStyle = "padding: 10px 20px; background: var(--primary-color); color: white; border: 2px solid var(--primary-color); border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;";
                }
                return `
                    <button id="adv2_btn_${idx}_${optIdx}" class="adv2-btn-${idx} ${isSelected ? 'selected' : ''}" onclick="window.checkAdverbsBook2(${idx}, ${optIdx}, '${opt.replace(/'/g, "\'")}')" style="${btnStyle}" onmouseover="if(!this.classList.contains('selected')){this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';}" onmouseout="if(!this.classList.contains('selected')){this.style.borderColor='var(--border-color)'; this.style.color='var(--text-main)';}">
                        ${opt}
                    </button>
                `;
            }).join('');
            
            return `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
                    ${optionsHtml}
                </div>
                <div id="advexp_book2_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px;"></div>
            </div>
            `;
        }).join('');

        const book3Html = adverbsPracticeBook3.map((q, idx) => `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="text" id="adv_book3_${idx}" 
                           value="${(window.adverbsAnswersBook3[idx] || '').replace(/"/g, '&quot;')}"
                           placeholder="Nhập bản dịch tiếng Anh..." 
                           style="width: 100%; padding: 12px 16px; font-size: 1.1rem; border: 2px solid var(--border-color); border-radius: 8px; outline: none; transition: border-color 0.2s;"
                           onfocus="this.style.borderColor='var(--primary-color)'"
                           onblur="this.style.borderColor='var(--border-color)'" oninput="window.adverbsAnswersBook3[${idx}] = this.value; window.saveProgress(true);"
                           onkeypress="if(event.key === 'Enter') window.checkAdverbsBook3(${idx})">
                    <button onclick="window.checkAdverbsBook3(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                    <div id="advexp_book3_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px;"></div>
                </div>
            </div>
        `).join('');

        const book4Html = adverbsPracticeBook4.map((q, idx) => `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="text" id="adv_book4_${idx}" 
                           value="${(window.adverbsAnswersBook4[idx] || '').replace(/"/g, '&quot;')}"
                           placeholder="Nhập bản dịch tiếng Anh..." 
                           style="width: 100%; padding: 12px 16px; font-size: 1.1rem; border: 2px solid var(--border-color); border-radius: 8px; outline: none; transition: border-color 0.2s;"
                           onfocus="this.style.borderColor='var(--primary-color)'"
                           onblur="this.style.borderColor='var(--border-color)'" oninput="window.adverbsAnswersBook4[${idx}] = this.value; window.saveProgress(true);"
                           onkeypress="if(event.key === 'Enter') window.checkAdverbsBook4(${idx})">
                    <button onclick="window.checkAdverbsBook4(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                    <div id="advexp_book4_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px;"></div>
                </div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 1 (DỊCH CÂU)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chuyển các câu sau đây sang tiếng Anh.</i></p>

                    <!-- HỘP GỢI Ý TÍNH TỪ & TRẠNG TỪ (BÀI ÁP DỤNG 1) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TÍNH TỪ & TRẠNG TỪ THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">often / usually</b> (adv): <i style="color: #1e293b; font-weight: 600;">thường</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">early</b> (adv): <i style="color: #1e293b; font-weight: 600;">sớm (rất sớm: very early)</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">yesterday</b> (adv): <i style="color: #1e293b; font-weight: 600;">hôm qua</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">always</b> (adv): <i style="color: #1e293b; font-weight: 600;">luôn luôn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">careful</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">carefully</b> (adv): <i style="color: #1e293b; font-weight: 600;">cẩn thận / một cách cẩn thận</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">often / usually</b> (adv): <i style="color: #1e293b; font-weight: 600;">thường</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">effective</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">effectively</b> (adv): <i style="color: #1e293b; font-weight: 600;">hiệu quả / một cách hiệu quả</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">often / usually</b> (adv): <i style="color: #1e293b; font-weight: 600;">thường</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">good</b> (adj): <i style="color: #1e293b; font-weight: 600;">hay / tốt</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">quick</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">quickly</b> (adv): <i style="color: #1e293b; font-weight: 600;">nhanh / một cách nhanh chóng</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${book1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP ÁP DỤNG 2 (CHỌN TRẠNG TỪ)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chọn một trạng từ phù hợp trong ngoặc để hoàn thành mỗi câu sau.</i></p>
                    <div>${book2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsBook2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">LUYỆN TẬP CHUNG - EXERCISE 1</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chuyển các câu sau đây sang tiếng Anh. Chú ý phân biệt cách dùng "tính từ" và "trạng từ".</i></p>

                    <!-- HỘP GỢI Ý TÍNH TỪ & TRẠNG TỪ (EXERCISE 1) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TÍNH TỪ & TRẠNG TỪ THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">hard-working</b> (adj): <i style="color: #1e293b; font-weight: 600;">chăm chỉ</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">hard</b> (adv): <i style="color: #1e293b; font-weight: 600;">chăm chỉ (rất chăm chỉ: very hard)</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">boring</b> (adj): <i style="color: #1e293b; font-weight: 600;">nhàm chán (chỉ bản chất sự việc)</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">bored</b> (adj): <i style="color: #1e293b; font-weight: 600;">cảm thấy chán (chỉ cảm xúc con người)</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">never</b> (adv): <i style="color: #1e293b; font-weight: 600;">không bao giờ</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">careful</b> (adj): <i style="color: #1e293b; font-weight: 600;">cẩn thận</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">always</b> (adv): <i style="color: #1e293b; font-weight: 600;">luôn luôn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">carefully</b> (adv): <i style="color: #1e293b; font-weight: 600;">cẩn thận / một cách cẩn thận</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">funny / humorous</b> (adj): <i style="color: #1e293b; font-weight: 600;">hài hước</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">funnily</b> (adv): <i style="color: #1e293b; font-weight: 600;">hài hước / một cách hài hước</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">patient</b> (adj): <i style="color: #1e293b; font-weight: 600;">kiên nhẫn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">always</b> (adv): <i style="color: #1e293b; font-weight: 600;">luôn luôn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">patiently</b> (adv): <i style="color: #1e293b; font-weight: 600;">kiên nhẫn / một cách kiên nhẫn</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${book3Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsBook3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">LUYỆN TẬP CHUNG - EXERCISE 2</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Áp dụng các kiến thức đã học, chuyển các câu sau đây sang Tiếng Anh.</i></p>

                    <!-- HỘP GỢI Ý TÍNH TỪ & TRẠNG TỪ (EXERCISE 2) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TÍNH TỪ & TRẠNG TỪ THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">quiet</b> (adj): <i style="color: #1e293b; font-weight: 600;">yên tĩnh</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">well</b> (adv) ➔ <b style="color: var(--primary-color); font-weight: 800;">better</b> (adv): <i style="color: #1e293b; font-weight: 600;">tốt hơn</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">since 2020</b> (prep + time): <i style="color: #1e293b; font-weight: 600;">từ năm 2020</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">often</b> (adv): <i style="color: #1e293b; font-weight: 600;">thường</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">Vietnamese</b> (adj): <i style="color: #1e293b; font-weight: 600;">thuộc về Việt Nam</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">large / big</b> (adj): <i style="color: #1e293b; font-weight: 600;">rộng lớn / to lớn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">beautiful</b> (adj): <i style="color: #1e293b; font-weight: 600;">đẹp</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">colorful</b> (adj): <i style="color: #1e293b; font-weight: 600;">đầy màu sắc</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">extreme</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">extremely / really</b> (adv): <i style="color: #1e293b; font-weight: 600;">cực kỳ / rất</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">free</b> (adj): <i style="color: #1e293b; font-weight: 600;">rảnh rỗi (free time)</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 6</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">for 10 years</b> (prep + duration): <i style="color: #1e293b; font-weight: 600;">trong 10 năm</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 7</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">farewell</b> (adj/n): <i style="color: #1e293b; font-weight: 600;">chia tay (farewell party)</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">next</b> (adj): <i style="color: #1e293b; font-weight: 600;">tới / sau (next week)</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 8</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">always</b> (adv): <i style="color: #1e293b; font-weight: 600;">luôn luôn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">useful</b> (adj): <i style="color: #1e293b; font-weight: 600;">hữu ích</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 9</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">yesterday</b> (adv): <i style="color: #1e293b; font-weight: 600;">hôm qua</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 10</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">often / usually</b> (adv): <i style="color: #1e293b; font-weight: 600;">thường</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${book4Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsBook4()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_extra') {
        const extra1Html = adverbsPracticeExtra1.map((q, idx) => {
            const optionsHtml = q.options.map((opt, optIdx) => {
                const isSelected = window.adverbsAnswersExtra1[idx] === opt;
                let btnStyle = "padding: 10px 20px; background: white; border: 2px solid var(--border-color); border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;";
                if (isSelected) {
                    btnStyle = "padding: 10px 20px; background: var(--primary-color); color: white; border: 2px solid var(--primary-color); border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;";
                }
                return `
                    <button id="adv_extra1_btn_${idx}_${optIdx}" class="adv-extra1-btn-${idx} ${isSelected ? 'selected' : ''}" onclick="window.checkAdverbsExtra1(${idx}, ${optIdx}, '${opt.replace(/'/g, "\'")}')" style="${btnStyle}" onmouseover="if(!this.classList.contains('selected')){this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';}" onmouseout="if(!this.classList.contains('selected')){this.style.borderColor='var(--border-color)'; this.style.color='var(--text-main)';}">
                        ${opt}
                    </button>
                `;
            }).join('');
            
            return `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
                    ${optionsHtml}
                </div>
                <div id="advexp_extra1_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px;"></div>
            </div>
            `;
        }).join('');

        const extra2Html = adverbsPracticeExtra2.map((q, idx) => `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="text" id="adv_extra2_${idx}" 
                           value="${(window.adverbsAnswersExtra2[idx] || '').replace(/"/g, '&quot;')}"
                           placeholder="Nhập bản dịch tiếng Anh..." 
                           style="width: 100%; padding: 12px 16px; font-size: 1.1rem; border: 2px solid var(--border-color); border-radius: 8px; outline: none; transition: border-color 0.2s;"
                           onfocus="this.style.borderColor='var(--primary-color)'"
                           onblur="this.style.borderColor='var(--border-color)'" oninput="window.adverbsAnswersExtra2[${idx}] = this.value; window.saveProgress(true);"
                           onkeypress="if(event.key === 'Enter') window.checkAdverbsExtra2(${idx})">
                    <button onclick="window.checkAdverbsExtra2(${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                    <div id="advexp_extra2_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px;"></div>
                </div>
            </div>
        `).join('');


        const extra3Html = adverbsPracticeExtra3.map((q, idx) => {
            const optionsHtml = q.options.map((opt, optIdx) => {
                const isSelected = window.adverbsAnswersExtra3[idx] === opt;
                let btnStyle = "padding: 10px 20px; background: white; border: 2px solid var(--border-color); border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;";
                if (isSelected) {
                    btnStyle = "padding: 10px 20px; background: var(--primary-color); color: white; border: 2px solid var(--primary-color); border-radius: 8px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;";
                }
                return `
                    <button id="adv_extra3_btn_${idx}_${optIdx}" class="adv-extra3-btn-${idx} ${isSelected ? 'selected' : ''}" onclick="window.checkAdverbsExtra3(${idx}, ${optIdx}, '${opt.replace(/'/g, "\'")}')" style="${btnStyle}" onmouseover="if(!this.classList.contains('selected')){this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';}" onmouseout="if(!this.classList.contains('selected')){this.style.borderColor='var(--border-color)'; this.style.color='var(--text-main)';}">
                        ${opt}
                    </button>
                `;
            }).join('');
            
            return `
            <div class="quiz-item" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-top: 4px; margin-bottom: 0; line-height: 1.6;">${q.q}</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
                    ${optionsHtml}
                </div>
                <div id="advexp_extra3_${idx}" style="display: none; padding: 12px; border-radius: 8px; font-size: 1.05rem; margin-top: 8px; line-height: 1.6;"></div>
            </div>
            `;
        }).join('');

        contentHtml = `
            <div style="margin-top: 24px;">
                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 1 (TRẮC NGHIỆM)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chọn đáp án đúng (Chú ý phân biệt tính từ và trạng từ).</i></p>
                    <div>${extra1Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsExtra1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 2 (DỊCH CÂU)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Vận dụng trạng từ để dịch các câu sau sang Tiếng Anh.</i></p>

                    <!-- HỘP GỢI Ý TÍNH TỪ & TRẠNG TỪ (BÀI THÊM 2) -->
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                        <h3 style="margin-top: 0; margin-bottom: 18px; color: var(--primary-color); font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.3rem;">💡</span> GỢI Ý TÍNH TỪ & TRẠNG TỪ THEO TỪNG CÂU:
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 1rem;">
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 1</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">recent</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">recently / lately</b> (adv): <i style="color: #1e293b; font-weight: 600;">gần đây / dạo gần đây</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">busy</b> (adj): <i style="color: #1e293b; font-weight: 600;">bận rộn (rất bận: very busy)</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 2</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">always</b> (adv): <i style="color: #1e293b; font-weight: 600;">luôn luôn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">early</b> (adv): <i style="color: #1e293b; font-weight: 600;">sớm</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 3</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">complete / total</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">completely / totally</b> (adv): <i style="color: #1e293b; font-weight: 600;">hoàn toàn</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 4</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">fortunate / lucky</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">Fortunately / Luckily</b> (adv): <i style="color: #1e293b; font-weight: 600;">thật may mắn</i></div>
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">hurt</b> (adj): <i style="color: #1e293b; font-weight: 600;">bị thương</i></div>
                                </div>
                            </div>
                            <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                                <div style="display: inline-block; background: var(--primary-light); color: var(--primary-color); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-size: 0.9rem; margin-bottom: 8px;">CÂU 5</div>
                                <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 4px;">
                                    <div style="color: #334155;">• <b style="color: var(--primary-color); font-weight: 800;">easy</b> (adj) ➔ <b style="color: var(--primary-color); font-weight: 800;">easily</b> (adv): <i style="color: #1e293b; font-weight: 600;">dễ dàng / một cách dễ dàng</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>${extra2Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsExtra2()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h2 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 16px;">BÀI TẬP THÊM 3 (TÌM LỖI SAI)</h2>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 24px;"><i>Chọn từ bị sai ngữ pháp trong các câu sau.</i></p>
                    <div>${extra3Html}</div>
                    <div style="margin-top: 24px; text-align: center;">
                        <button onclick="window.submitAdverbsExtra3()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
            <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 05: TRẠNG TỪ (ADVERBS)</h1>
            ${tabsHtml}
            ${contentHtml}
        </div>
    `;
    
    if (activeTab === 'practice_book' && window.adverbsAnswersBook2) {
        window.adverbsAnswersBook2.forEach((ans, idx) => {
            if (ans) {
                const optIdx = adverbsPracticeBook2[idx].options.indexOf(ans);
                if (optIdx !== -1) {
                    window.checkAdverbsBook2(idx, optIdx, ans);
                }
            }
        });
    }
};


// =========================================================================
// ==================== CHỦ ĐIỂM 07: TỪ NỐI (CONJUNCTIONS) ===================

const conjunctionsTheoryData = [
    {
        title: "🔍 1. Định nghĩa & Tầm quan trọng của Từ nối trong VSTEP Writing",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p><b>Từ nối (Connectors / Linking words)</b> là những từ hoặc cụm từ giúp kết nối các câu, các đoạn văn hoặc các ý tưởng lại với nhau một cách logic, giúp bài viết mạch lạc, trôi chảy và dễ hiểu hơn.</p>
            
            <div style="background: #f0fdf4; border-left: 5px solid #22c55e; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <b style="color: #166534; font-size: 1.15rem;">🎯 Tại sao cần dùng từ nối trong kỹ năng WRITING VSTEP?</b>
                <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #15803d; display: grid; gap: 6px;">
                    <li>Từ nối giúp bài viết không bị rời rạc, chắp vá; giúp người đọc/người chấm nắm rõ mối quan hệ giữa các ý (thêm ý, đối lập, nguyên nhân – kết quả, trình tự...).</li>
                    <li>Giúp tăng trực tiếp điểm tiêu chí <b>"Coherence and Cohesion"</b> (Tính mạch lạc và liên kết) trong thang chấm điểm bài thi Writing Task 1 & Task 2.</li>
                </ul>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 16px;">
                    <div style="font-weight: 800; color: #dc2626; margin-bottom: 8px; font-size: 1.05rem;">❌ Không có từ nối (Rời rạc)</div>
                    <div style="color: #475569; font-style: italic;">"I like playing badminton. It helps me keep fit. It is fun."</div>
                    <div style="font-size: 0.95rem; color: #991b1b; margin-top: 8px;">👉 Câu ngắn, nghe rời rạc giống như liệt kê đơn thuần.</div>
                </div>
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 16px;">
                    <div style="font-weight: 800; color: #16a34a; margin-bottom: 8px; font-size: 1.05rem;">✅ Có từ nối (Mạch lạc, tự nhiên)</div>
                    <div style="color: #1e293b; font-style: italic;">"I like playing badminton <b style="color: #2563eb;">because</b> it helps me keep fit. <b style="color: #2563eb;">Moreover</b>, it is fun."</div>
                    <div style="font-size: 0.95rem; color: #166534; margin-top: 8px;">👉 Câu tự nhiên, giàu liên kết, thể hiện tư duy ngữ pháp tốt.</div>
                </div>
            </div>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 16px;">
                <b style="color: #1e40af;">📌 Phân loại Tổng quát:</b>
                <div style="color: #1e3a8a; margin-top: 4px;">
                    Từ nối được chia thành 2 nhóm lớn phổ biến nhất:
                    <ol style="margin: 6px 0 0 0; padding-left: 20px;">
                        <li><b>LIÊN TỪ (Conjunctions):</b> Dùng để nối từ, cụm từ hoặc mệnh đề trong cùng một câu.</li>
                        <li><b>TỪ/CỤM TỪ LIÊN KẾT (Linking Adverbs / Transitional Words):</b> Dùng để nối 2 câu độc lập hoặc các đoạn văn với nhau.</li>
                    </ol>
                </div>
            </div>
        </div>`
    },
    {
        title: "🔗 2. Nhóm 1: LIÊN TỪ (Conjunctions) trong câu",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Liên từ dùng để kết nối các từ, cụm từ hoặc mệnh đề lại với nhau <b>trong cùng một câu</b>. Có 3 loại liên từ chính:</p>

            <!-- 1. LIÊN TỪ KẾT HỢP -->
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 6px solid #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                <div style="font-weight: 800; color: #1d4ed8; font-size: 1.2rem; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <span>2.1. Liên từ kết hợp (Coordinating Conjunctions)</span>
                    <span style="background: #dbeafe; color: #1e40af; font-size: 0.9rem; padding: 3px 12px; border-radius: 20px;">7 từ FANBOYS</span>
                </div>
                <p style="color: #334155; margin-bottom: 12px;">Dùng để nối 2 hoặc nhiều thành phần ngang hàng về mặt ngữ pháp (từ + từ, cụm + cụm, mệnh đề + mệnh đề).</p>
                
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 12px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-around;">
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">F</b> - For <span style="font-size: 0.9rem; color: #64748b;">(vì)</span></div>
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">A</b> - And <span style="font-size: 0.9rem; color: #64748b;">(và)</span></div>
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">N</b> - Nor <span style="font-size: 0.9rem; color: #64748b;">(cũng không)</span></div>
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">B</b> - But <span style="font-size: 0.9rem; color: #64748b;">(nhưng)</span></div>
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">O</b> - Or <span style="font-size: 0.9rem; color: #64748b;">(hoặc)</span></div>
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">Y</b> - Yet <span style="font-size: 0.9rem; color: #64748b;">(nhưng/tuy nhiên)</span></div>
                    <div style="text-align: center;"><b style="color: #2563eb; font-size: 1.15rem;">S</b> - So <span style="font-size: 0.9rem; color: #64748b;">(vì vậy)</span></div>
                </div>

                <div style="background: #fffbeb; border: 1px solid #fef08a; padding: 12px 16px; border-radius: 8px; font-size: 1rem; color: #854d0e;">
                    <b>⚡ Quy tắc dấu phẩy với FANBOYS:</b>
                    <ul style="margin: 6px 0 0 0; padding-left: 20px; display: grid; gap: 4px;">
                        <li>Khi nối 2 <b>mệnh đề độc lập</b> (S + V , FANBOYS + S + V) ➔ <b>BẮT BUỘC có dấu phẩy trước FANBOYS</b>.<br><i>(VD: I was hungry<b style="color: #dc2626;">,</b> so I made a sandwich.)</i></li>
                        <li>Khi liệt kê từ 3 thành phần trở lên ➔ đặt dấu phẩy trước <i>and / or</i>: <i>"You can choose tea, coffee, or juice."</i></li>
                    </ul>
                </div>
            </div>

            <!-- 2. LIÊN TỪ PHỤ THUỘC -->
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 6px solid #10b981; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                <div style="font-weight: 800; color: #047857; font-size: 1.2rem; margin-bottom: 8px;">2.2. Liên từ phụ thuộc (Subordinating Conjunctions)</div>
                <p style="color: #334155; margin-bottom: 12px;">Dùng để mở đầu mệnh đề phụ, gắn kết mệnh đề phụ với mệnh đề chính để tạo thành <b>câu phức (Complex Sentence)</b>.</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 14px;">
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 8px;">
                        <b style="color: #166534;">🌱 Nguyên nhân:</b><br>
                        <span style="font-family: monospace; color: #047857;">because, since, as</span>
                    </div>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 8px;">
                        <b style="color: #166534;">🌓 Tương phản / Nhượng bộ:</b><br>
                        <span style="font-family: monospace; color: #047857;">although, even though, though, while</span>
                    </div>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 8px;">
                        <b style="color: #166534;">⏰ Thời gian:</b><br>
                        <span style="font-family: monospace; color: #047857;">when, while, as soon as, before, after, until</span>
                    </div>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 8px;">
                        <b style="color: #166534;">🎯 Mục đích / Điều kiện:</b><br>
                        <span style="font-family: monospace; color: #047857;">so that, in order that, if, unless</span>
                    </div>
                </div>

                <div style="background: #f0fdf4; border: 1px solid #86efac; padding: 12px 16px; border-radius: 8px; font-size: 1rem; color: #14532d;">
                    <b>⚡ Quy tắc vị trí và Dấu phẩy:</b>
                    <ul style="margin: 6px 0 0 0; padding-left: 20px; display: grid; gap: 4px;">
                        <li><b>Mệnh đề phụ đứng ĐẦU câu</b> ➔ <b>PHẢI CÓ DẤU PHẨY</b> ngăn cách với mệnh đề chính.<br><i>(VD: <b style="color: #047857;">Although</b> she was tired<b style="color: #dc2626;">,</b> she kept smiling.)</i></li>
                        <li><b>Mệnh đề phụ đứng SAU mệnh đề chính</b> ➔ <b>KHÔNG CẦN DẤU PHẨY</b>.<br><i>(VD: She kept smiling <b style="color: #047857;">although</b> she was tired.)</i></li>
                    </ul>
                </div>
            </div>

            <!-- 3. LIÊN TỪ TƯƠNG QUAN -->
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; border-left: 6px solid #8b5cf6; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
                <div style="font-weight: 800; color: #6d28d9; font-size: 1.2rem; margin-bottom: 8px;">2.3. Liên từ tương quan (Correlative Conjunctions)</div>
                <p style="color: #334155; margin-bottom: 12px;">Luôn đi thành cặp để nhấn mạnh, đối chiếu, lựa chọn giữa hai thành phần tương đương nhau trong câu.</p>
                <div style="display: grid; gap: 8px; font-family: monospace; color: #581c87; background: #faf5ff; padding: 12px; border-radius: 8px; border: 1px solid #f3e8ff;">
                    <div>• <b>both ... and ...</b> <i>(cả ... và ...)</i> ➔ VD: She is <b>both</b> intelligent <b>and</b> hard-working.</div>
                    <div>• <b>not only ... but also ...</b> <i>(không những ... mà còn ...)</i> ➔ VD: It is <b>not only</b> cheap <b>but also</b> effective.</div>
                    <div>• <b>either ... or ...</b> <i>(hoặc ... hoặc ...)</i> ➔ VD: You can <b>either</b> call <b>or</b> email me.</div>
                    <div>• <b>neither ... nor ...</b> <i>(không ... cũng không ...)</i> ➔ VD: He likes <b>neither</b> tea <b>nor</b> coffee.</div>
                </div>
            </div>
        </div>`
    },
    {
        title: "🚀 3. Nhóm 2: TỪ/CỤM TỪ LIÊN KẾT (Transitional Words) trong VSTEP Writing",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Từ/Cụm từ liên kết dùng để <b>kết nối 2 câu độc lập</b> hoặc kết nối các đoạn văn trong bài viết, giúp bài văn mạch lạc và logic.</p>
            
            <div style="background: #fffbeb; border-left: 5px solid #f59e0b; padding: 14px 16px; border-radius: 8px; margin-bottom: 20px; color: #78350f;">
                <b>🔍 ĐẶC ĐIỂM NGỮ PHÁP QUAN TRỌNG:</b><br>
                Từ/Cụm từ liên kết thường đứng ở <b>ĐẦU CÂU và SAU NÓ BẮT BUỘC CÓ DẤU PHẨY (,)</b> trước khi vào mệnh đề chính.<br>
                <span style="font-family: monospace; color: #b45309; font-weight: bold;">[Câu 1]. [Từ liên kết], [Câu 2].</span>
            </div>

            <!-- BẢNG TỪ LIÊN KẾT PHÂN THEO MỤC ĐÍCH -->
            <div style="display: grid; gap: 16px;">
                
                <!-- 1. THÊM Ý -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; border-left: 5px solid #3b82f6;">
                    <div style="font-weight: 800; color: #1d4ed8; font-size: 1.1rem; margin-bottom: 6px;">1. THÊM Ý / BỔ SUNG THÔNG TIN</div>
                    <div style="color: #2563eb; font-weight: bold; margin-bottom: 6px;">Moreover, In addition, Additionally, Furthermore, Also, Besides, ...</div>
                    <div style="color: #475569; font-style: italic; font-size: 0.98rem;">📍 VD: The app is easy to use. <b>Furthermore,</b> it is completely free.</div>
                </div>

                <!-- 2. KẾT QUẢ -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; border-left: 5px solid #10b981;">
                    <div style="font-weight: 800; color: #047857; font-size: 1.1rem; margin-bottom: 6px;">2. KẾT QUẢ / HỆ QUẢ</div>
                    <div style="color: #059669; font-weight: bold; margin-bottom: 6px;">Therefore, As a result, Consequently, Thus, Hence, ...</div>
                    <div style="color: #475569; font-style: italic; font-size: 0.98rem;">📍 VD: He studied hard. <b>As a result,</b> he passed the test with high scores.</div>
                </div>

                <!-- 3. TƯƠNG PHẢN -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; border-left: 5px solid #ef4444;">
                    <div style="font-weight: 800; color: #b91c1c; font-size: 1.1rem; margin-bottom: 6px;">3. TƯƠNG PHẢN / ĐỐI LẬP</div>
                    <div style="color: #dc2626; font-weight: bold; margin-bottom: 6px;">However, Nevertheless, On the other hand, In contrast, ...</div>
                    <div style="color: #475569; font-style: italic; font-size: 0.98rem;">📍 VD: Online learning is convenient. <b>However,</b> it requires strong self-discipline.</div>
                </div>

                <!-- 4. LIỆT KÊ / TRÌNH TỰ -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; border-left: 5px solid #8b5cf6;">
                    <div style="font-weight: 800; color: #6d28d9; font-size: 1.1rem; margin-bottom: 6px;">4. LIỆT KÊ / TRÌNH TỰ Ý TƯỞNG (Mở đoạn / Thân bài)</div>
                    <div style="color: #7c3aed; font-weight: bold; margin-bottom: 6px;">Firstly, First of all, To begin with, Secondly, Next, Finally, ...</div>
                    <div style="color: #475569; font-style: italic; font-size: 0.98rem;">📍 VD: <b>Firstly,</b> we need to understand the problem. <b>Secondly,</b> we should discuss possible solutions.</div>
                </div>

                <!-- 5. VÍ DỤ -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; border-left: 5px solid #f59e0b;">
                    <div style="font-weight: 800; color: #b45309; font-size: 1.1rem; margin-bottom: 6px;">5. ĐƯA RA VÍ DỤ MINH HỌA</div>
                    <div style="color: #d97706; font-weight: bold; margin-bottom: 6px;">For example, For instance, To illustrate, ...</div>
                    <div style="color: #475569; font-style: italic; font-size: 0.98rem;">📍 VD: We all should protect the environment. <b>For instance,</b> we can plant more trees and recycle waste.</div>
                </div>

                <!-- 6. KẾT LUẬN -->
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; border-left: 5px solid #06b6d4;">
                    <div style="font-weight: 800; color: #0e7490; font-size: 1.1rem; margin-bottom: 6px;">6. TỔNG KẾT / KẾT BÀI</div>
                    <div style="color: #0891b2; font-weight: bold; margin-bottom: 6px;">In conclusion, To sum up, In summary, Overall, ...</div>
                    <div style="color: #475569; font-style: italic; font-size: 0.98rem;">📍 VD: <b>In conclusion,</b> regular practice is the key to improving English writing skills.</div>
                </div>

            </div>
        </div>`
    },
    {
        title: "⚡ 4. Các Bẫy & Lỗi Sai Thường Gặp Cần Tránh trong VSTEP",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                <div style="background: #f8fafc; padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 800; color: #334155;">
                    ⚠️ BẢNG TỔNG HỢP CÁC LỖI DÙNG TỪ NỐI PHỔ BIẾN
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 1rem; text-align: left;">
                        <thead>
                            <tr style="background: #f1f5f9; color: #475569;">
                                <th style="padding: 12px; border-bottom: 1px solid #e2e8f0; width: 45%;">❌ Lỗi Sai Thường Gặp</th>
                                <th style="padding: 12px; border-bottom: 1px solid #e2e8f0; width: 55%;">✅ Cách Dùng Đúng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px; color: #dc2626;"><b>Although ..., but ...</b><br><i>(Although it was raining, but we went out.)</i></td>
                                <td style="padding: 12px; color: #16a34a;"><b>Chỉ dùng 1 trong 2 từ:</b><br><i>Although it was raining, we went out.</i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                                <td style="padding: 12px; color: #dc2626;"><b>Because ..., so ...</b><br><i>(Because I was sick, so I stayed home.)</i></td>
                                <td style="padding: 12px; color: #16a34a;"><b>Chỉ dùng 1 trong 2 từ:</b><br><i>Because I was sick, I stayed home.</i></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px; color: #dc2626;"><b>Dùng However nối 2 câu mà không có dấu chấm phẩy / dấu phẩy:</b><br><i>(He studied hard however he failed.)</i></td>
                                <td style="padding: 12px; color: #16a34a;"><b>Tách câu hoặc dùng dấu ; và ,:</b><br><i>He studied hard. However, he failed.</i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`
    }
];

// ==================== BÀI TẬP TRONG TÀI LIỆU (BOOK) ====================
// BÀI 1 BOOK: Dịch câu dùng liên từ (EXERCISE 01 trong tài liệu)
const conjunctionsPracticeBook1 = [
    {
        q: "Tôi thường sử dụng phương tiện công cộng bởi vì tôi muốn tiết kiệm tiền.",
        a: [
            "I often use public transportation because I want to save money.",
            "I usually use public transportation because I want to save money.",
            "I often use public transport because I want to save money.",
            "I usually use public transport because I want to save money.",
            "Because I want to save money, I often use public transportation.",
            "Because I want to save money, I usually use public transportation.",
            "Because I want to save money, I often use public transport.",
            "Because I want to save money, I usually use public transport."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ:</b> bởi vì (because)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> phương tiện công cộng (public transportation / public transport), tiết kiệm tiền (save money).</div>"
    },
    {
        q: "Khi bạn đến Cần Thơ, bạn có thể ghé thăm Bến Ninh Kiều, Chợ nổi Cái Răng và Làng du lịch Mỹ Khánh.",
        a: [
            "When you come to Can Tho, you can visit Ninh Kieu Quay, Cai Rang Floating Market, and My Khanh Tourist Village.",
            "When you visit Can Tho, you can visit Ninh Kieu Quay, Cai Rang Floating Market, and My Khanh Tourist Village.",
            "When you come to Can Tho, you can visit Ninh Kieu Wharf, Cai Rang Floating Market, and My Khanh Tourist Village.",
            "When you visit Can Tho, you can visit Ninh Kieu Wharf, Cai Rang Floating Market, and My Khanh Tourist Village.",
            "You can visit Ninh Kieu Quay, Cai Rang Floating Market, and My Khanh Tourist Village when you come to Can Tho.",
            "You can visit Ninh Kieu Wharf, Cai Rang Floating Market, and My Khanh Tourist Village when you come to Can Tho."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ:</b> khi (when), và (and)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> Bến Ninh Kiều (Ninh Kieu Quay / Ninh Kieu Wharf), Chợ nổi Cái Răng (Cai Rang Floating Market), Làng du lịch Mỹ Khánh (My Khanh Tourist Village).</div>"
    },
    {
        q: "Việc xem phim có thể giúp chúng ta giải toả căng thẳng, nhưng xem phim quá nhiều có ảnh hưởng tiêu cực lên mắt của chúng ta.",
        a: [
            "Watching movies can help us reduce stress, but watching too much has negative effects on our eyes.",
            "Watching films can help us reduce stress, but watching too much has negative effects on our eyes.",
            "Watching movies can help us relieve stress, but watching too much has negative effects on our eyes.",
            "Watching films can help us relieve stress, but watching too much has negative effects on our eyes.",
            "Watching movies can help us relieve stress, but watching too much has a negative impact on our eyes.",
            "Watching films can help us relieve stress, but watching too much has a negative impact on our eyes.",
            "Watching movies can help us reduce stress, but watching too many movies has negative effects on our eyes."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ:</b> nhưng (but)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> giải tỏa căng thẳng (reduce stress / relieve stress), có ảnh hưởng tiêu cực lên (has negative effects on / has a negative impact on), mắt (our eyes).</div>"
    },
    {
        q: "Mặc dù việc học tiếng Anh rất khó, nhưng tôi vẫn luôn cố gắng hết sức mình.",
        a: [
            "Although learning English is very difficult, I always try my best.",
            "Although studying English is very difficult, I always try my best.",
            "Although learning English is very hard, I always try my best.",
            "Although studying English is very hard, I always try my best.",
            "I always try my best although learning English is very difficult.",
            "I always try my best although studying English is very difficult.",
            "Even though learning English is very difficult, I always try my best.",
            "Even though studying English is very difficult, I always try my best."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ:</b> mặc dù (although / even though) - <i>Lưu ý: trong tiếng Anh khi dùng Although thì KHÔNG dùng but!</i></div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> việc học tiếng Anh (learning/studying English), rất khó (very difficult/hard), cố gắng hết sức (try my best).</div>"
    },
    {
        q: "Thư viện thì rất gần nhà tôi, vì vậy tôi có thể đi bộ đến đó.",
        a: [
            "The library is very close to my house, so I can walk there.",
            "The library is very near my house, so I can walk there.",
            "The library is close to my house, so I can walk there.",
            "The library is near my house, so I can walk there."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ:</b> vì vậy (so - nhớ có dấu phẩy phía trước)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> gần nhà tôi (very close to / very near my house), đi bộ đến đó (walk there).</div>"
    }
];

// BÀI 2 BOOK: Hoàn thành vế câu còn lại (EXERCISE 02 trong tài liệu)
const conjunctionsPracticeBook2 = [
    {
        prompt: "We should eat more vegetables and drink enough water because",
        hint: "<b>Gợi ý các hướng phát triển:</b> Nêu lý do về sức khỏe, duy trì vóc dáng, hoặc ngăn ngừa bệnh tật.",
        references: [
            "they are good for our health.",
            "these things help us stay healthy.",
            "we can maintain good health.",
            "they provide essential vitamins and minerals for our body.",
            "these habits allow us to stay healthy and prevent some health problems."
        ],
        acceptable: [
            "they are good for our health",
            "these things help us stay healthy",
            "we can maintain good health",
            "they provide essential vitamins and minerals for our body",
            "these habits allow us to stay healthy and prevent some health problems",
            "they help us stay healthy",
            "it is good for our health",
            "they are very good for our health",
            "they keep us healthy"
        ]
    },
    {
        prompt: "They do exercise regularly, so",
        hint: "<b>Gợi ý các hướng phát triển:</b> Nêu kết quả về vóc dáng, sức bền, ít bị ốm hoặc cảm thấy tràn đầy năng lượng.",
        references: [
            "they can stay in shape.",
            "they become stronger and healthier.",
            "they rarely get sick easily.",
            "they feel more energetic every day.",
            "they can keep fit and reduce daily stress."
        ],
        acceptable: [
            "they can stay in shape",
            "they become stronger and healthier",
            "they rarely get sick easily",
            "they feel more energetic every day",
            "they can keep fit and reduce daily stress",
            "they can keep fit",
            "they stay healthy",
            "they can maintain a good health"
        ]
    },
    {
        prompt: "Reading books can help us widen our knowledge, and",
        hint: "<b>Gợi ý các hướng phát triển:</b> Bổ sung thêm lợi ích về tư duy, sáng tạo, bài học cuộc sống hoặc làm giàu vốn từ vựng.",
        references: [
            "it also improves our thinking skills.",
            "it allows us to become more creative.",
            "it gives us valuable lessons about life.",
            "we can enrich our vocabulary.",
            "it helps us relax after long hours of work."
        ],
        acceptable: [
            "it also improves our thinking skills",
            "it allows us to become more creative",
            "it gives us valuable lessons about life",
            "we can enrich our vocabulary",
            "it helps us relax after long hours of work",
            "it improves our vocabulary",
            "it helps us relax",
            "it also enriches our vocabulary"
        ]
    },
    {
        prompt: "I still try to spend time doing homework every day although",
        hint: "<b>Gợi ý các hướng phát triển:</b> Nêu hoàn cảnh khó khăn đối lập như bận rộn nhiều việc, mệt mỏi sau giờ học, hoặc ít thời gian rảnh.",
        references: [
            "I have a lot of other things to do.",
            "I feel tired after school.",
            "I do not have a lot of free time.",
            "my schedule is always busy.",
            "I have to work a part-time job."
        ],
        acceptable: [
            "I have a lot of other things to do",
            "I feel tired after school",
            "I do not have a lot of free time",
            "my schedule is always busy",
            "I have to work a part-time job",
            "I am very busy",
            "I don't have much free time",
            "I am tired"
        ]
    },
    {
        prompt: "You can go to Ho Chi Minh City by coach, or",
        hint: "<b>Gợi ý các hướng phát triển:</b> Đưa ra phương án di chuyển thay thế như máy bay, tàu hỏa, xe máy hoặc tự lái xe.",
        references: [
            "you can travel there by plane if you want to save time.",
            "you can take a train for a more comfortable trip.",
            "you can ride a motorbike if you like adventure.",
            "you can drive there if you have a driving license.",
            "you can book a flight for convenience."
        ],
        acceptable: [
            "you can travel there by plane if you want to save time",
            "you can take a train for a more comfortable trip",
            "you can ride a motorbike if you like adventure",
            "you can drive there if you have a driving license",
            "you can book a flight for convenience",
            "you can go by plane",
            "you can take a train",
            "you can travel by plane",
            "you can travel by train"
        ]
    }
];

// BÀI 3 BOOK: Nối 2 câu bằng từ/cụm từ liên kết phù hợp (BÀI TẬP ÁP DỤNG mục 2 trong tài liệu)
const conjunctionsPracticeBook3 = [
    {
        q: "Tôi thích đi tản bộ vào thời gian rảnh để cải thiện sức khoẻ. Tôi cũng đọc sách để thư giãn đầu óc.",
        a: [
            "I enjoy going for a walk in my free time to improve my health. In addition, I also read books to clear my mind.",
            "I like going for a walk in my free time to improve my health. In addition, I also read books to clear my mind.",
            "I enjoy going for a walk in my free time to improve my health. Moreover, I also read books to clear my mind.",
            "I like going for a walk in my free time to improve my health. Moreover, I also read books to clear my mind.",
            "I enjoy going for a walk in my free time to improve my health. Furthermore, I also read books to relax my mind.",
            "I like walking in my free time to improve my health. In addition, I also read books to clear my mind.",
            "I enjoy walking in my free time to improve my health. In addition, I also read books to clear my mind."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết (Thêm ý):</b> In addition, / Moreover, / Furthermore,</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> đi tản bộ (going for a walk / walking), cải thiện sức khỏe (improve my health), thư giãn đầu óc (clear my mind / relax my mind).</div>"
    },
    {
        q: "Việc du học có thể mang lại nhiều lợi ích. Học sinh có thể mở rộng kiến thức và có nhiều trải nghiệm mới.",
        a: [
            "Studying abroad can bring many benefits. For example, students can widen their knowledge and gain many new experiences.",
            "Studying abroad can bring many benefits. For instance, students can widen their knowledge and gain many new experiences.",
            "Studying abroad can bring a lot of benefits. For example, students can widen their knowledge and gain many new experiences.",
            "Studying abroad can bring many benefits. For example, students can broaden their knowledge and gain many new experiences.",
            "Studying abroad can bring many benefits. For instance, students can broaden their knowledge and gain many new experiences.",
            "Studying abroad can bring a lot of benefits. For instance, students can widen their knowledge and gain many new experiences."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết (Ví dụ):</b> For example, / For instance,</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> du học (studying abroad), mang lại nhiều lợi ích (bring many benefits), mở rộng kiến thức (widen/broaden their knowledge), có trải nghiệm mới (gain/have new experiences).</div>"
    },
    {
        q: "Ô nhiễm môi trường là một vấn đề nghiêm trọng. Chúng ta cần có giải pháp phù hợp để giải quyết vấn đề này.",
        a: [
            "Environmental pollution is a serious problem. Therefore, we need to have suitable solutions to solve this issue.",
            "Environmental pollution is a serious problem. As a result, we need to have suitable solutions to solve this issue.",
            "Environmental pollution is a serious issue. Therefore, we need to have suitable solutions to solve this problem.",
            "Environmental pollution is a serious problem. Therefore, we need suitable solutions to solve this issue.",
            "Environmental pollution is a serious problem. Consequently, we need to have suitable solutions to solve this issue."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết (Kết quả):</b> Therefore, / As a result, / Consequently,</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> ô nhiễm môi trường (environmental pollution), vấn đề nghiêm trọng (serious problem/issue), giải pháp phù hợp (suitable solutions), giải quyết (solve/address).</div>"
    },
    {
        q: "Việc sử dụng phương tiện cá nhân thì rất tiện lợi. Phương tiện cá nhân có thể gây ô nhiễm môi trường.",
        a: [
            "Using private transportation is very convenient. However, private vehicles can cause environmental pollution.",
            "Using private transportation is very convenient. However, it can cause environmental pollution.",
            "Using private vehicles is very convenient. However, they can cause environmental pollution.",
            "Using private transport is very convenient. However, it can cause environmental pollution.",
            "Using private transportation is very convenient. Nevertheless, private vehicles can cause environmental pollution."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết (Tương phản):</b> However, / Nevertheless, / On the other hand,</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> phương tiện cá nhân (private transportation / private vehicles), tiện lợi (convenient), gây ô nhiễm (cause environmental pollution).</div>"
    },
    {
        q: "Chơi thể thao là một cách hiệu quả để giảm cân và giữ dáng. Nó có thể giúp chúng ta kết bạn mới.",
        a: [
            "Playing sports is an effective way to lose weight and keep fit. Moreover, it can help us make new friends.",
            "Playing sports is an effective way to lose weight and keep fit. In addition, it can help us make new friends.",
            "Playing sports is an effective way to lose weight and stay in shape. Moreover, it can help us make new friends.",
            "Playing sports is an effective way to lose weight and keep fit. Furthermore, it can help us make new friends.",
            "Playing sports is an effective way to lose weight and stay in shape. In addition, it can help us make new friends."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết (Thêm ý):</b> Moreover, / In addition, / Furthermore,</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> cách hiệu quả (an effective way), giảm cân (lose weight), giữ dáng (keep fit / stay in shape), kết bạn mới (make new friends).</div>"
    },
    {
        q: "Việc sử dụng các thiết bị điện tử quá nhiều có một vài tác hại. Trẻ em sử dụng điện thoại quá nhiều có thể bị những vấn đề về mắt.",
        a: [
            "Using electronic devices too much can have several negative effects. For instance, children who use phones excessively can experience eye problems.",
            "Using electronic devices too much has several negative effects. For instance, children who use phones excessively can experience eye problems.",
            "Using electronic devices too much can have several negative effects. For example, children who use phones excessively can experience eye problems.",
            "Using electronic devices too much can have some negative effects. For example, children who use phones excessively can experience eye problems.",
            "Using electronic devices too much can have several harmful effects. For instance, children who use phones excessively can experience eye problems."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết (Ví dụ):</b> For instance, / For example,</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> thiết bị điện tử (electronic devices), tác hại (negative effects / harmful effects), quá mức (excessively / too much), vấn đề về mắt (eye problems).</div>"
    }
];

// ==================== BÀI TẬP THÊM (EXTRA - SOẠN MỚI HOÀN TOÀN) ====================
// BÀI 1 EXTRA: Trắc nghiệm Liên từ & Từ nối VSTEP (8 câu)
const conjunctionsPracticeExtra1 = [
    {
        q: "I wanted to go for a run, _____ it started raining heavily.",
        options: ["so", "but", "and", "because"],
        answer: 1,
        explanation: "Hai vế mang ý nghĩa tương phản (muốn đi chạy bộ nhưng trời lại mưa to) nên dùng liên từ 'but'."
    },
    {
        q: "The weather was terrible. _____, we decided to delay our camping trip.",
        options: ["However", "Therefore", "Although", "Because"],
        answer: 1,
        explanation: "Vế sau là kết quả tất yếu của câu trước (thời tiết xấu -> hoãn chuyến đi), đứng đầu câu và có dấu phẩy theo sau nên dùng trạng từ liên kết 'Therefore,'."
    },
    {
        q: "_____ studying online offers great flexibility, it requires a high level of self-discipline.",
        options: ["Because", "Although", "However", "In addition"],
        answer: 1,
        explanation: "Mở đầu mệnh đề phụ chỉ sự nhượng bộ / tương phản giữa 'linh hoạt' và 'cần kỷ luật cao' nên dùng 'Although'."
    },
    {
        q: "Public transportation helps reduce traffic jams. _____, it significantly lowers carbon emissions.",
        options: ["However", "Therefore", "Moreover", "Because"],
        answer: 2,
        explanation: "Câu thứ hai bổ sung thêm một lợi ích mới (giảm ùn tắc + giảm khí thải) nên dùng từ liên kết thêm ý 'Moreover,'."
    },
    {
        q: "He did not study for the exam, _____ he failed the test.",
        options: ["so", "but", "because", "although"],
        answer: 0,
        explanation: "Vế sau là kết quả của vế trước trong cùng một câu (có dấu phẩy) nên dùng liên từ kết hợp 'so'."
    },
    {
        q: "She can speak _____ English and French fluently.",
        options: ["either", "neither", "both", "not only"],
        answer: 2,
        explanation: "Cặp liên từ tương quan 'both ... and ...' dùng để chỉ cả hai thứ."
    },
    {
        q: "You should leave early. _____, you might get stuck in heavy traffic.",
        options: ["Otherwise", "Therefore", "Furthermore", "Although"],
        answer: 0,
        explanation: "'Otherwise' mang nghĩa 'Nếu không thì' (cảnh báo kết quả tiêu cực nếu không làm điều ở câu trước)."
    },
    {
        q: "_____ the high tuition fees, many students still apply for this university.",
        options: ["Although", "Despite", "Because", "However"],
        answer: 1,
        explanation: "Theo sau là một cụm danh từ 'the high tuition fees' nên phải dùng giới từ chỉ sự nhượng bộ 'Despite' (hoặc In spite of)."
    }
];

// BÀI 2 EXTRA: Dịch câu nâng cao với Từ nối (Chuẩn VSTEP Task 2 - 5 câu)
const conjunctionsPracticeExtra2 = [
    {
        q: "Học trực tuyến rất linh hoạt. Tuy nhiên, nó đòi hỏi học sinh phải có tính tự giác cao.",
        a: [
            "Online learning is very flexible. However, it requires students to have high self-discipline.",
            "Studying online is very flexible. However, it requires students to have high self-discipline.",
            "Online learning is flexible. However, it requires high self-discipline from students.",
            "Online learning is very flexible. However, it requires students to be highly self-disciplined.",
            "Studying online is flexible. However, it requires students to have high self-discipline."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết:</b> Tuy nhiên (However, - đứng đầu câu thứ 2)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> linh hoạt (flexible), đòi hỏi (require), tính tự giác cao (high self-discipline).</div>"
    },
    {
        q: "Không những anh ấy thông minh mà anh ấy còn rất chăm chỉ.",
        a: [
            "He is not only intelligent but also very hard-working.",
            "He is not only smart but also very hard-working.",
            "He is not only intelligent but also very diligent.",
            "He is not only smart but also very diligent."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ tương quan:</b> not only ... but also ...</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> thông minh (intelligent / smart), chăm chỉ (hard-working / diligent).</div>"
    },
    {
        q: "Chúng ta nên trồng nhiều cây xanh để bảo vệ môi trường sống.",
        a: [
            "We should plant more trees in order to protect our living environment.",
            "We should plant more trees so as to protect our living environment.",
            "We should plant more trees so that we can protect our living environment.",
            "We should plant more green trees in order to protect the living environment.",
            "We should plant more trees to protect our living environment."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ chỉ mục đích:</b> để (so that + mệnh đề / in order to + Vo / so as to + Vo)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> trồng nhiều cây xanh (plant more trees), bảo vệ môi trường sống (protect our living environment).</div>"
    },
    {
        q: "Nhiều người trẻ thích sống ở thành phố lớn vì có nhiều cơ hội việc làm hơn.",
        a: [
            "Many young people like living in big cities because there are more job opportunities.",
            "Many young people prefer living in big cities because there are more job opportunities.",
            "Many young people like to live in big cities because there are more job opportunities.",
            "Many young people like living in big cities since there are more job opportunities.",
            "Many young people like living in big cities as there are more job opportunities."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Liên từ chỉ nguyên nhân:</b> bởi vì (because / since / as)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> người trẻ (young people), thành phố lớn (big cities), cơ hội việc làm (job opportunities).</div>"
    },
    {
        q: "Tóm lại, việc duy trì lối sống lành mạnh là vô cùng quan trọng đối với mọi người.",
        a: [
            "In conclusion, maintaining a healthy lifestyle is extremely important for everyone.",
            "To sum up, maintaining a healthy lifestyle is extremely important for everyone.",
            "In conclusion, keeping a healthy lifestyle is extremely important for everyone.",
            "Overall, maintaining a healthy lifestyle is extremely important for everyone.",
            "In summary, maintaining a healthy lifestyle is extremely important for everyone."
        ],
        hint: "<div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ liên kết kết luận:</b> Tóm lại (In conclusion, / To sum up,)</div><div style='margin-bottom: 6px; line-height: 1.6;'>• <b>Từ vựng:</b> duy trì lối sống lành mạnh (maintaining a healthy lifestyle), vô cùng quan trọng (extremely important / crucial), đối với mọi người (for everyone).</div>"
    }
];

// ==================== RENDER DETAIL ====================
window.renderConjunctionsDetail = function(activeTab = 'theory') {
    if (!window.conjunctionsAnswersBook1) window.conjunctionsAnswersBook1 = new Array(conjunctionsPracticeBook1.length).fill('');
    if (!window.conjunctionsAnswersBook2) window.conjunctionsAnswersBook2 = new Array(conjunctionsPracticeBook2.length).fill('');
    if (!window.conjunctionsAnswersBook3) window.conjunctionsAnswersBook3 = new Array(conjunctionsPracticeBook3.length).fill('');
    if (!window.conjunctionsAnswersExtra1) window.conjunctionsAnswersExtra1 = new Array(conjunctionsPracticeExtra1.length).fill(null);
    if (!window.conjunctionsAnswersExtra2) window.conjunctionsAnswersExtra2 = new Array(conjunctionsPracticeExtra2.length).fill('');

    let tabsHtml = `
        <div class="tabs-container" style="margin-bottom: 24px;">
            <button onclick="renderConjunctionsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderConjunctionsDetail('practice_book')" class="tab-pill ${activeTab === 'practice_book' ? 'active' : ''}">📖 BÀI TẬP TRONG TÀI LIỆU</button>
            <button onclick="renderConjunctionsDetail('practice_extra')" class="tab-pill ${activeTab === 'practice_extra' ? 'active' : ''}">🚀 BÀI TẬP THÊM</button>
        </div>
    `;

    let contentHtml = '';

    if (activeTab === 'theory') {
        const theoryCards = conjunctionsTheoryData.map((item, idx) => `
            <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 24px; border-top: 5px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.35rem; font-weight: 800;">${item.title}</h3>
                ${item.content}
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                ${theoryCards}
            </div>
        `;
    } else if (activeTab === 'practice_book') {
        // BOOK 1 HTML: Dịch câu liên từ
        const pBook1Html = conjunctionsPracticeBook1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('conj_hint_book1_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="conj_hint_book1_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="conj_trans_book1_${idx}" placeholder="Nhập bản dịch tiếng Anh (nhớ có dấu chấm ở cuối câu)..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='var(--primary-color)'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.conjunctionsAnswersBook1[${idx}] = this.value; document.getElementById('conjexp_book1_${idx}').style.display='none'; window.saveProgress(true);" value="${window.conjunctionsAnswersBook1[idx] || ''}">
                    <button onclick="checkConjunctionsBook(1, ${idx})" style="padding: 8px 16px; background: white; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='var(--primary-color)'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="conjexp_book1_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // BOOK 2 HTML: Hoàn thành vế câu (Có 5 đáp án tham khảo)
        const pBook2Html = conjunctionsPracticeBook2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 600; color: #1e293b; margin-top: 4px; margin-bottom: 10px;">
                            ${q.prompt} <span style="color: #db2777; font-weight: bold;">_____</span>
                        </p>
                        <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 12px;">
                            ${q.hint ? `<button onclick="const h = document.getElementById('conj_hint_book2_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>` : ''}
                            <button onclick="const refDiv = document.getElementById('conj_ref_book2_${idx}'); refDiv.style.display = refDiv.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #16a34a; font-size: 0.95rem; cursor: pointer; padding: 0; display: flex; align-items: center; gap: 4px; font-weight: 600;">
                                <span style="font-size: 1.1rem">📖</span> Xem 5 đáp án tham khảo
                            </button>
                        </div>
                        ${q.hint ? `<div id="conj_hint_book2_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                        <div id="conj_ref_book2_${idx}" style="display: none; background: #f0fdf4; border-left: 4px solid #22c55e; padding: 12px 16px; border-radius: 6px; margin-bottom: 14px; font-size: 0.98rem; color: #166534; line-height: 1.6;">
                            <b>📌 5 Đáp án tham khảo chuẩn:</b>
                            <ol style="margin: 6px 0 0 0; padding-left: 20px; display: grid; gap: 4px;">
                                ${q.references.map(ref => `<li><i>${q.prompt} <b>${ref}</b></i></li>`).join('')}
                            </ol>
                        </div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="conj_trans_book2_${idx}" placeholder="Nhập vế câu còn lại bằng tiếng Anh (hoặc cả câu)..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='#db2777'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.conjunctionsAnswersBook2[${idx}] = this.value; document.getElementById('conjexp_book2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.conjunctionsAnswersBook2[idx] || ''}">
                    <button onclick="checkConjunctionsBook(2, ${idx})" style="padding: 8px 16px; background: white; color: #db2777; border: 2px solid #db2777; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='#db2777'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='#db2777'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="conjexp_book2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // BOOK 3 HTML: Nối 2 câu bằng từ liên kết
        const pBook3Html = conjunctionsPracticeBook3.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('conj_hint_book3_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="conj_hint_book3_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <textarea id="conj_trans_book3_${idx}" rows="2" placeholder="Nối 2 câu bằng từ/cụm từ liên kết phù hợp (ví dụ: In addition, / However, / Therefore,)..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box; font-family: inherit;" onfocus="this.style.borderColor='#4f46e5'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.conjunctionsAnswersBook3[${idx}] = this.value; document.getElementById('conjexp_book3_${idx}').style.display='none'; window.saveProgress(true);">${window.conjunctionsAnswersBook3[idx] || ''}</textarea>
                    <button onclick="checkConjunctionsBook(3, ${idx})" style="padding: 8px 16px; background: white; color: #4f46e5; border: 2px solid #4f46e5; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='#4f46e5'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='#4f46e5'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="conjexp_book3_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                <h1 style="color: #059669; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">📖 BÀI TẬP TRONG TÀI LIỆU</h1>

                <!-- BÀI 1 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid var(--primary-color);">
                    <h2 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Dịch câu sử dụng Liên từ phù hợp (Exercise 01)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Dịch các câu sau sang tiếng Anh, lưu ý sử dụng các liên từ phù hợp (because, when, but, although, so...).</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitConjunctionsBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <!-- BÀI 2 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #db2777;">
                    <h2 style="color: #be185d; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Hoàn thành vế còn lại của câu (Exercise 02)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Hoàn thành vế còn lại của câu để tạo thành một câu hoàn chỉnh.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitConjunctionsBook2()" style="padding: 12px 32px; background: #db2777; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(219,39,119,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <!-- BÀI 3 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #4f46e5;">
                    <h2 style="color: #4338ca; margin-bottom: 16px; font-size: 1.4rem;">Bài 3: Nối câu bằng Từ/Cụm từ liên kết phù hợp</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Nối 2 câu lại bằng một từ/cụm từ liên kết phù hợp (In addition, For example, Therefore, However, Moreover, For instance...).</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook3Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitConjunctionsBook3()" style="padding: 12px 32px; background: #4f46e5; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(79,70,229,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (activeTab === 'practice_extra') {
        // EXTRA 1 HTML: Trắc nghiệm (8 câu soạn mới)
        const pExtra1Html = conjunctionsPracticeExtra1.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 0;">${q.q}</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-left: 44px;">
                    ${q.options.map((opt, optIdx) => `
                        <button class="option-btn" id="conj_extra1_opt_${idx}_${optIdx}" onclick="window.selectConjunctionsExtra1(${idx}, ${optIdx})" style="padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; background: white; text-align: left; font-size: 1.05rem; cursor: pointer; transition: all 0.2s; font-weight: 500; color: #334155;">
                            <b>${String.fromCharCode(65 + optIdx)}.</b> ${opt}
                        </button>
                    `).join('')}
                </div>
                <div style="padding-left: 44px;">
                    <div id="conjexp_extra1_${idx}" style="display: none; margin-top: 16px; padding: 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        // EXTRA 2 HTML: Dịch câu nâng cao với Từ nối (5 câu soạn mới)
        const pExtra2Html = conjunctionsPracticeExtra2.map((q, idx) => `
            <div class="quiz-item" style="background: var(--bg-card); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                <div style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px;">
                    <div style="background: var(--primary-light); color: var(--primary-color); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">${idx + 1}</div>
                    <div style="flex-grow: 1;">
                        <p style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-top: 4px; margin-bottom: 8px;">${q.q}</p>
                        ${q.hint ? `<button onclick="const h = document.getElementById('conj_hint_extra2_${idx}'); h.style.display = h.style.display === 'none' ? 'block' : 'none';" style="background: none; border: none; color: #0284c7; font-size: 0.95rem; cursor: pointer; padding: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500;"><span style="font-size: 1.1rem">💡</span> Xem gợi ý</button>
                        <div id="conj_hint_extra2_${idx}" style="display: none; background: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid var(--primary-color); padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 1rem; color: #1e3a8a; font-weight: 500; line-height: 1.6;">${q.hint}</div>` : ''}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px; padding-left: 44px;">
                    <input type="text" id="conj_trans_extra2_${idx}" placeholder="Nhập câu tiếng Anh hoàn chỉnh (nhớ có dấu chấm ở cuối câu)..." style="padding: 10px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1.05rem; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;" onfocus="this.style.borderColor='#166534'" onblur="this.style.borderColor='#e2e8f0'" oninput="window.conjunctionsAnswersExtra2[${idx}] = this.value; document.getElementById('conjexp_extra2_${idx}').style.display='none'; window.saveProgress(true);" value="${window.conjunctionsAnswersExtra2[idx] || ''}">
                    <button onclick="checkConjunctionsExtra2(${idx})" style="padding: 8px 16px; background: white; color: #166534; border: 2px solid #166534; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; align-self: flex-start;" onmouseover="this.style.background='#166534'; this.style.color='white'" onmouseout="this.style.background='white'; this.style.color='#166534'">Kiểm tra</button>
                </div>
                <div style="padding-left: 44px;">
                    <div id="conjexp_extra2_${idx}" style="display: none; margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 1rem;"></div>
                </div>
            </div>
        `).join('');

        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                <h1 style="color: #6366f1; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">🚀 BÀI TẬP THÊM (LUYỆN TẬP NÂNG CAO)</h1>

                <!-- BÀI 1 EXTRA -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #2563eb;">
                    <h2 style="color: #1d4ed8; margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Trắc nghiệm Liên từ & Từ liên kết</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn từ nối phù hợp nhất để hoàn thành các câu sau.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pExtra1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitConjunctionsExtra1()" style="padding: 12px 32px; background: #2563eb; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(37,99,235,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>

                <!-- BÀI 2 EXTRA -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #166534;">
                    <h2 style="color: #166534; margin-bottom: 16px; font-size: 1.4rem;">Bài 2: Dịch câu nâng cao với Từ nối (VSTEP Writing)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Vận dụng các từ nối đã học để dịch các câu hoàn chỉnh sang tiếng Anh.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pExtra2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitConjunctionsExtra2()" style="padding: 12px 32px; background: #166534; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(22,101,52,0.3);">NỘP BÀI & KIỂM TRA KẾT QUẢ</button>
                    </div>
                </div>
            </div>
        `;
    }

    contentWrapper.innerHTML = `
        <div class="content-fade-in" style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
            <div class="topic-detail-header" style="margin-bottom: 32px;">
                <button class="btn-back" onclick="renderView('chapter2')" style="margin-bottom: 16px; background: none; border: none; color: var(--primary-color); font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.05rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    QUAY LẠI CHƯƠNG 02
                </button>
                <h1 class="page-title" style="text-align: left; margin-bottom: 24px;">CHỦ ĐIỂM 07: TỪ NỐI (CONJUNCTIONS & TRANSITIONS)</h1>
                ${tabsHtml}
            </div>
            ${contentHtml}
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==================== CHECK & SUBMIT LOGIC ====================
window.checkConjunctionsBook = function(bookId, idx) {
    if (bookId === 1 || bookId === 3) {
        const dataArray = bookId === 1 ? conjunctionsPracticeBook1 : conjunctionsPracticeBook3;
        const ansArray = bookId === 1 ? window.conjunctionsAnswersBook1 : window.conjunctionsAnswersBook3;
        const q = dataArray[idx];
        const val = (ansArray[idx] || "").trim();
        const expDiv = document.getElementById(`conjexp_book${bookId}_${idx}`);
        
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
        const formCheck = window.checkSentencePunctuation(val, isCorrect);

        expDiv.style.display = 'block';

        if (formCheck.valid) {
            expDiv.style.background = '#f0fdf4';
            expDiv.style.color = '#166534';
            expDiv.style.border = '1px solid #bbf7d0';
            expDiv.innerHTML = "✅ <b>Chính xác!</b> Bạn đã dùng từ nối rất chuẩn.";
        } else if (formCheck.isNear) {
            expDiv.style.background = '#fffbeb';
            expDiv.style.color = '#b45309';
            expDiv.style.border = '1px solid #fde68a';
            expDiv.innerHTML = formCheck.message;
        } else {
            expDiv.style.background = '#fef2f2';
            expDiv.style.color = '#991b1b';
            expDiv.style.border = '1px solid #fecaca';
            expDiv.innerHTML = `❌ <b>Chưa chính xác.</b><br><br><b>💡 Gợi ý đáp án chuẩn:</b><br>- ${q.a.slice(0, 3).join('<br>- ')}`;
        }
    } else if (bookId === 2) {
        // Hoàn thành câu Book 2
        const q = conjunctionsPracticeBook2[idx];
        const val = (window.conjunctionsAnswersBook2[idx] || "").trim();
        const expDiv = document.getElementById(`conjexp_book2_${idx}`);
        
        if (!val) {
            expDiv.style.display = 'block';
            expDiv.style.background = '#fffbeb';
            expDiv.style.color = '#b45309';
            expDiv.style.border = '1px solid #fde68a';
            expDiv.innerHTML = "⚠️ Bạn chưa nhập câu trả lời!";
            return;
        }

        const cleanUser = window.normalizeText(val);
        const isCorrect = q.acceptable.some(ans => {
            const cleanAns = window.normalizeText(ans);
            return cleanUser === cleanAns || cleanUser.endsWith(cleanAns);
        });

        expDiv.style.display = 'block';

        if (isCorrect) {
            expDiv.style.background = '#f0fdf4';
            expDiv.style.color = '#166534';
            expDiv.style.border = '1px solid #bbf7d0';
            expDiv.innerHTML = `✅ <b>Chính xác!</b> Vế câu của bạn hoàn toàn hợp lý và đúng ngữ pháp.<br><br><b>💡 5 Đáp án tham khảo thêm:</b><br>${q.references.map((r, i) => `<b>${i+1}.</b> ${q.prompt} <i>${r}</i>`).join('<br>')}`;
        } else {
            expDiv.style.background = '#fef2f2';
            expDiv.style.color = '#991b1b';
            expDiv.style.border = '1px solid #fecaca';
            expDiv.innerHTML = `❌ <b>Chưa phù hợp hoặc chưa đúng cấu trúc.</b><br><br><b>💡 5 Đáp án tham khảo mẫu:</b><br>${q.references.map((r, i) => `<b>${i+1}.</b> ${q.prompt} <i>${r}</i>`).join('<br>')}`;
        }
    }
};

window.submitConjunctionsBook1 = function() {
    let correctCount = 0;
    let completed = true;
    conjunctionsPracticeBook1.forEach((q, idx) => {
        const val = (window.conjunctionsAnswersBook1[idx] || "").trim();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val)) && val.endsWith('.')) {
            correctCount++;
        }
        window.checkConjunctionsBook(1, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, conjunctionsPracticeBook1.length, "KẾT QUẢ BÀI 1 (LIÊN TỪ)");
};

window.submitConjunctionsBook2 = function() {
    let correctCount = 0;
    let completed = true;
    conjunctionsPracticeBook2.forEach((q, idx) => {
        const val = (window.conjunctionsAnswersBook2[idx] || "").trim();
        if (!val) completed = false;
        if (val) {
            const cleanUser = window.normalizeText(val);
            if (q.acceptable.some(ans => cleanUser === window.normalizeText(ans) || cleanUser.endsWith(window.normalizeText(ans)))) {
                correctCount++;
            }
        }
        window.checkConjunctionsBook(2, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, conjunctionsPracticeBook2.length, "KẾT QUẢ BÀI 2 (HOÀN THÀNH CÂU)");
};

window.submitConjunctionsBook3 = function() {
    let correctCount = 0;
    let completed = true;
    conjunctionsPracticeBook3.forEach((q, idx) => {
        const val = (window.conjunctionsAnswersBook3[idx] || "").trim();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val))) {
            correctCount++;
        }
        window.checkConjunctionsBook(3, idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, conjunctionsPracticeBook3.length, "KẾT QUẢ BÀI 3 (TỪ LIÊN KẾT)");
};

window.selectConjunctionsExtra1 = function(qIdx, optIdx) {
    window.conjunctionsAnswersExtra1[qIdx] = optIdx;
    window.saveProgress(true);
    
    for (let i = 0; i < conjunctionsPracticeExtra1[qIdx].options.length; i++) {
        const btn = document.getElementById(`conj_extra1_opt_${qIdx}_${i}`);
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
    document.getElementById(`conjexp_extra1_${qIdx}`).style.display = 'none';
};

window.submitConjunctionsExtra1 = function() {
    let correctCount = 0;
    let completed = true;

    conjunctionsPracticeExtra1.forEach((q, idx) => {
        const userChoice = window.conjunctionsAnswersExtra1[idx];
        const expDiv = document.getElementById(`conjexp_extra1_${idx}`);
        
        if (userChoice === null || userChoice === undefined) {
            completed = false;
        }

        if (userChoice === q.answer) {
            correctCount++;
            expDiv.style.display = 'block';
            expDiv.style.background = '#f0fdf4';
            expDiv.style.color = '#166534';
            expDiv.style.border = '1px solid #bbf7d0';
            expDiv.innerHTML = `✅ <b>Chính xác!</b> ${q.explanation}`;
        } else if (userChoice !== null && userChoice !== undefined) {
            expDiv.style.display = 'block';
            expDiv.style.background = '#fef2f2';
            expDiv.style.color = '#991b1b';
            expDiv.style.border = '1px solid #fecaca';
            expDiv.innerHTML = `❌ <b>Sai rồi!</b> Đáp án đúng là <b>${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</b>.<br>${q.explanation}`;
        }
    });

    if (!completed) {
        alert("Vui lòng chọn đáp án cho tất cả các câu trước khi nộp bài!");
        return;
    }

    window.showExerciseResult(correctCount, conjunctionsPracticeExtra1.length, "KẾT QUẢ BÀI 1 (TRẮC NGHIỆM TỪ NỐI)");
};

window.checkConjunctionsExtra2 = function(idx) {
    const q = conjunctionsPracticeExtra2[idx];
    const rawVal = window.conjunctionsAnswersExtra2[idx] || "";
    const val = rawVal.trim();
    const expDiv = document.getElementById(`conjexp_extra2_${idx}`);
    
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
    const formCheck = window.checkSentencePunctuation(rawVal, isCorrect);

    expDiv.style.display = 'block';

    if (formCheck.valid) {
        expDiv.style.background = '#f0fdf4';
        expDiv.style.color = '#166534';
        expDiv.style.border = '1px solid #bbf7d0';
        expDiv.innerHTML = "✅ <b>Chính xác!</b> Bạn dịch câu rất chuẩn xác.";
    } else if (formCheck.isNear) {
        expDiv.style.background = '#fffbeb';
        expDiv.style.color = '#b45309';
        expDiv.style.border = '1px solid #fde68a';
        expDiv.innerHTML = formCheck.message;
    } else {
        expDiv.style.background = '#fef2f2';
        expDiv.style.color = '#991b1b';
        expDiv.style.border = '1px solid #fecaca';
        expDiv.innerHTML = `❌ <b>Chưa chính xác.</b><br><br><b>💡 Gợi ý đáp án chuẩn:</b><br>- ${q.a.slice(0, 3).join('<br>- ')}`;
    }
};

window.submitConjunctionsExtra2 = function() {
    let correctCount = 0;
    let completed = true;
    conjunctionsPracticeExtra2.forEach((q, idx) => {
        const val = (window.conjunctionsAnswersExtra2[idx] || "").trim();
        if (!val) completed = false;
        if (val && q.a.some(ans => window.normalizeText(ans) === window.normalizeText(val)) && val.endsWith('.')) {
            correctCount++;
        }
        window.checkConjunctionsExtra2(idx);
    });
    if (!completed) {
        alert("Vui lòng điền hết tất cả các câu trước khi nộp bài!");
        return;
    }
    window.showExerciseResult(correctCount, conjunctionsPracticeExtra2.length, "KẾT QUẢ BÀI 2 (DỊCH CÂU NÂNG CAO)");
};
