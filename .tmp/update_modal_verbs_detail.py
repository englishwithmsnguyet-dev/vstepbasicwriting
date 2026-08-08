import re

def update_modal_verbs():
    with open('script.js', 'r') as f:
        code = f.read()
        
    old_section = """    {
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
    }"""
    
    new_section = """    {
        title: "🌟 4. Động từ khiếm khuyết (Modal Verbs)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Động từ khiếm khuyết là những động từ đặc biệt dùng để diễn tả <b>khả năng, sự cho phép, sự bắt buộc, hoặc lời khuyên</b>. Chúng <b>không bao giờ đứng một mình</b> mà luôn đi kèm với một động từ thường ở dạng nguyên mẫu (Vo).</p>
            
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin: 16px 0;">
                <div style="background: #fdf2f8; padding: 10px 16px; font-weight: bold; border-bottom: 1px solid #fce7f3; color: #be185d;">📌 Phân biệt các Động từ khiếm khuyết thường gặp</div>
                <div style="padding: 16px; display: grid; gap: 16px;">
                    
                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                        <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 4px; font-size: 1.15rem;">Can vs. Could (Có thể)</div>
                        <ul style="margin: 0; padding-left: 20px; color: #334155; margin-bottom: 8px;">
                            <li><b>Can:</b> Diễn tả khả năng ở <b>hiện tại</b>.</li>
                            <li><b>Could:</b> Diễn tả khả năng ở <b>quá khứ</b> hoặc dùng trong <b>câu yêu cầu lịch sự</b>.</li>
                        </ul>
                        <i style="color: #64748b; font-size: 1.05rem;">VD (Can): I <b>can</b> speak English fluently.<br>VD (Could): When I was young, I <b>could</b> run very fast. / <b>Could</b> you help me, please?</i>
                    </div>

                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #10b981;">
                        <div style="font-weight: bold; color: #064e3b; margin-bottom: 4px; font-size: 1.15rem;">Will vs. Would (Sẽ)</div>
                        <ul style="margin: 0; padding-left: 20px; color: #334155; margin-bottom: 8px;">
                            <li><b>Will:</b> Diễn tả ý định, dự đoán ở <b>tương lai</b>.</li>
                            <li><b>Would:</b> Dạng quá khứ của "will", thường dùng trong <b>câu điều kiện loại 2/3</b>, hoặc <b>lời mời/yêu cầu lịch sự</b>.</li>
                        </ul>
                        <i style="color: #64748b; font-size: 1.05rem;">VD (Will): I <b>will</b> go to the library tomorrow.<br>VD (Would): <b>Would</b> you like a cup of coffee? / If I had money, I <b>would</b> buy that car.</i>
                    </div>

                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                        <div style="font-weight: bold; color: #78350f; margin-bottom: 4px; font-size: 1.15rem;">May vs. Might (Có lẽ / Có thể)</div>
                        <ul style="margin: 0; padding-left: 20px; color: #334155; margin-bottom: 8px;">
                            <li><b>May:</b> Khả năng xảy ra <b>khá cao</b> (khoảng 50%). Dùng xin phép lịch sự.</li>
                            <li><b>Might:</b> Khả năng xảy ra <b>thấp hơn</b> (khoảng 30%).</li>
                        </ul>
                        <i style="color: #64748b; font-size: 1.05rem;">VD (May): It <b>may</b> rain today. (Trời khá âm u)<br>VD (Might): It <b>might</b> rain today. (Trời đang nắng nhưng dự báo có thể mưa)</i>
                    </div>

                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #ef4444;">
                        <div style="font-weight: bold; color: #7f1d1d; margin-bottom: 4px; font-size: 1.15rem;">Must vs. Have to (Phải)</div>
                        <ul style="margin: 0; padding-left: 20px; color: #334155; margin-bottom: 8px;">
                            <li><b>Must:</b> Bắt buộc do <b>ý muốn chủ quan</b> của người nói (cảm xúc cá nhân).</li>
                            <li><b>Have to:</b> Bắt buộc do <b>hoàn cảnh khách quan</b> (nội quy, luật lệ, tình huống).</li>
                        </ul>
                        <i style="color: #64748b; font-size: 1.05rem;">VD (Must): I <b>must</b> study hard to pass the exam. (Tự bản thân tôi thấy cần phải thế)<br>VD (Have to): Students <b>have to</b> wear uniforms at school. (Nội quy nhà trường)</i>
                    </div>

                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                        <div style="font-weight: bold; color: #4c1d95; margin-bottom: 4px; font-size: 1.15rem;">Should / Ought to (Nên)</div>
                        <ul style="margin: 0; padding-left: 20px; color: #334155; margin-bottom: 8px;">
                            <li>Dùng để đưa ra <b>lời khuyên</b>. "Ought to" trang trọng hơn "Should" một chút.</li>
                        </ul>
                        <i style="color: #64748b; font-size: 1.05rem;">VD: You <b>should</b> drink more water. / You <b>ought to</b> see a doctor.</i>
                    </div>

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
    }"""
    
    if old_section in code:
        code = code.replace(old_section, new_section)
        with open('script.js', 'w') as f:
            f.write(code)
        print("Success")
    else:
        print("Could not find the exact old section block.")

update_modal_verbs()
