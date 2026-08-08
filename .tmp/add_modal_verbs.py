import re

def add_modal_verbs():
    with open('script.js', 'r') as f:
        code = f.read()

    new_section = """    },
    {
        title: "🌟 4. Động từ khiếm khuyết (Modal Verbs)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Động từ khiếm khuyết là những động từ đặc biệt dùng để diễn tả <b>khả năng, sự cho phép, sự bắt buộc, hoặc lời khuyên</b>. Chúng <b>không bao giờ đứng một mình</b> mà luôn đi kèm với một động từ thường ở dạng nguyên mẫu (Vo).</p>
            
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin: 16px 0;">
                <div style="background: #fdf2f8; padding: 10px 16px; font-weight: bold; border-bottom: 1px solid #fce7f3; color: #be185d;">📌 Một số Động từ khiếm khuyết thường gặp trong VSTEP</div>
                <div style="padding: 16px; display: grid; gap: 12px;">
                    <div><b style="color: #be185d;">Can / Could:</b> Có thể (Diễn tả khả năng).<br><i style="color: #64748b;">VD: Reading books <b>can help</b> you broaden your knowledge.</i></div>
                    <div><b style="color: #be185d;">Should:</b> Nên (Diễn tả lời khuyên).<br><i style="color: #64748b;">VD: You <b>should study</b> hard.</i></div>
                    <div><b style="color: #be185d;">Must / Have to:</b> Phải (Diễn tả sự bắt buộc).<br><i style="color: #64748b;">VD: Students <b>must submit</b> their assignments on time.</i></div>
                    <div><b style="color: #be185d;">Will / Would:</b> Sẽ (Diễn tả ý định trong tương lai).<br><i style="color: #64748b;">VD: I <b>will go</b> to the library tomorrow.</i></div>
                    <div><b style="color: #be185d;">May / Might:</b> Có lẽ (Diễn tả khả năng có thể xảy ra nhưng không chắc chắn).<br><i style="color: #64748b;">VD: It <b>might rain</b> later.</i></div>
                </div>
            </div>

            <div style="margin-top: 16px; padding: 16px; background: #fffbeb; border: 2px dashed #f59e0b; border-radius: 12px;">
                <div style="color: #b45309; font-weight: bold; margin-bottom: 8px;">⚠️ 3 NGUYÊN TẮC VÀNG</div>
                <ol style="margin: 0; padding-left: 20px; display: grid; gap: 8px; color: #92400e;">
                    <li><b>Không thêm s/es/ed/ing:</b> Động từ khiếm khuyết luôn giữ nguyên mẫu, không phân biệt chủ ngữ số ít hay số nhiều.<br><i style="color: #64748b;">(Đúng: He can swim. | Sai: He cans swim.)</i></li>
                    <li><b>Luôn đi với Động từ nguyên mẫu (Vo):</b> Không có "to" ở giữa (trừ 'have to' / 'ought to').<br><i style="color: #64748b;">(Đúng: She should go. | Sai: She should to go.)</i></li>
                    <li><b>Câu phủ định chỉ cần thêm "not" vào ngay sau nó:</b> cannot (can't), should not (shouldn't), must not (mustn't)...<br><i style="color: #64748b;">(Ngoại trừ: don't/doesn't have to)</i></li>
                </ol>
            </div>
        </div>`
    }
];"""

    # We need to find the end of verbsTheoryData
    
    end_pattern = "            </div>\n        </div>`}\n];"
    
    if end_pattern in code:
        code = code.replace(end_pattern, "            </div>\n        </div>`\n" + new_section)
        with open('script.js', 'w') as f:
            f.write(code)
        print("Successfully added Modal Verbs")
    else:
        print("Could not find end of verbsTheoryData")

add_modal_verbs()
