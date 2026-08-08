import re

def update():
    with open('script.js', 'r') as f:
        code = f.read()
    
    start_str = 'title: "🔄 3. Sự thay đổi của Động từ (Verb Transformations)",'
    start_idx = code.find(start_str)
    if start_idx == -1:
        print("Could not find item 3 in verbs theory")
        return
        
    end_idx = code.find('}\n];\n\nconst verbsPractice1Data', start_idx)
    if end_idx == -1:
        print("Could not find end of verbs theory data")
        return

    # Define the exact strings for subject groups to ensure consistency
    group_s = "He / She / It / Danh từ chung số ít / Danh từ không đếm được / Danh từ riêng chỉ có 1 / Đại từ bất định (someone, everyone, no one...)"
    group_p = "You / We / They / Danh từ chung số nhiều / Danh từ riêng từ 2 trở lên"

    new_content = f"""        title: "🔄 3. Sự thay đổi của Động từ (Verb Transformations)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Trong Tiếng Anh, <b>Động từ luôn thay đổi hình thái</b> phụ thuộc vào Thì (Tenses) và Chủ ngữ (Subject). Dưới đây là cách chia động từ chi tiết cho 5 Thì cơ bản nhất trong VSTEP Writing:</p>
            
            <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
                
                <!-- 1. HTĐ -->
                <div style="background: #fff7ed; border-radius: 12px; border: 1px solid #fed7aa; padding: 16px;">
                    <div style="font-weight: bold; color: #c2410c; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>1. Hiện tại đơn <span style="font-size: 0.95rem; font-weight: normal; color: #78350f; margin-left: 8px;">(Sự thật, thói quen)</span></span>
                        <div style="font-weight: bold; color: #ea580c; background: #ffedd5; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">am/is/are & Vo / V(s/es)</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #ffedd5; overflow: hidden;">
                            <div style="background: #ffedd5; padding: 8px 16px; font-weight: bold; color: #9a3412; font-size: 1.05rem;">🔹 Với động từ TO-BE (am / is / are)</div>
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I</b> ➡️ đi với <b style="color: #ea580c;">am</b></div>
                                <div>• <b>{group_s}</b> ➡️ đi với <b style="color: #ea580c;">is</b></div>
                                <div>• <b>{group_p}</b> ➡️ đi với <b style="color: #ea580c;">are</b></div>
                            </div>
                        </div>
                        <div style="background: white; border-radius: 8px; border: 1px solid #ffedd5; overflow: hidden;">
                            <div style="background: #ffedd5; padding: 8px 16px; font-weight: bold; color: #9a3412; font-size: 1.05rem;">🔹 Với động từ THƯỜNG (Vo / V(s/es))</div>
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I / {group_p}</b> ➡️ Động từ <b style="color: #ea580c;">giữ nguyên (Vo)</b></div>
                                <div>• <b>{group_s}</b> ➡️ Động từ <b style="color: #ea580c;">thêm s/es</b></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. HTTD -->
                <div style="background: #f0fdfa; border-radius: 12px; border: 1px solid #ccfbf1; padding: 16px;">
                    <div style="font-weight: bold; color: #0f766e; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>2. Hiện tại tiếp diễn <span style="font-size: 0.95rem; font-weight: normal; color: #134e4a; margin-left: 8px;">(Hành động đang xảy ra)</span></span>
                        <div style="font-weight: bold; color: #0d9488; background: #ccfbf1; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">am/is/are + V-ing</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #ccfbf1; overflow: hidden;">
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I</b> + <b style="color: #0d9488;">am</b> + V-ing</div>
                                <div>• <b>{group_s}</b> + <b style="color: #0d9488;">is</b> + V-ing</div>
                                <div>• <b>{group_p}</b> + <b style="color: #0d9488;">are</b> + V-ing</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. QKĐ -->
                <div style="background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px;">
                    <div style="font-weight: bold; color: #334155; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>3. Quá khứ đơn <span style="font-size: 0.95rem; font-weight: normal; color: #0f172a; margin-left: 8px;">(Sự việc đã kết thúc ở QK)</span></span>
                        <div style="font-weight: bold; color: #475569; background: #e2e8f0; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">was/were & V-ed / V2</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
                            <div style="background: #e2e8f0; padding: 8px 16px; font-weight: bold; color: #334155; font-size: 1.05rem;">🔹 Với động từ TO-BE (was / were)</div>
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I / {group_s}</b> ➡️ đi với <b style="color: #475569;">was</b></div>
                                <div>• <b>{group_p}</b> ➡️ đi với <b style="color: #475569;">were</b></div>
                            </div>
                        </div>
                        <div style="background: white; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
                            <div style="background: #e2e8f0; padding: 8px 16px; font-weight: bold; color: #334155; font-size: 1.05rem;">🔹 Với động từ THƯỜNG (V-ed / V2)</div>
                            <div style="padding: 12px 16px;">
                                • <b style="color: #475569;">Tất cả các ngôi</b> đều dùng chung một dạng <b style="color: #475569;">V-ed / V2</b> (không phân biệt số ít hay số nhiều).
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. HTHT -->
                <div style="background: #fdf4ff; border-radius: 12px; border: 1px solid #fae8ff; padding: 16px;">
                    <div style="font-weight: bold; color: #86198f; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>4. Hiện tại hoàn thành <span style="font-size: 0.95rem; font-weight: normal; color: #4a044e; margin-left: 8px;">(Bắt đầu ở QK, kéo dài đến HT)</span></span>
                        <div style="font-weight: bold; color: #c026d3; background: #fae8ff; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">have/has + V3/ed</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #fae8ff; overflow: hidden;">
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I / {group_p}</b> + <b style="color: #c026d3;">have</b> + V3/ed</div>
                                <div>• <b>{group_s}</b> + <b style="color: #c026d3;">has</b> + V3/ed</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. TLĐ -->
                <div style="background: #eff6ff; border-radius: 12px; border: 1px solid #dbeafe; padding: 16px;">
                    <div style="font-weight: bold; color: #1d4ed8; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>5. Tương lai đơn <span style="font-size: 0.95rem; font-weight: normal; color: #1e3a8a; margin-left: 8px;">(Sự việc sẽ xảy ra)</span></span>
                        <div style="font-weight: bold; color: #2563eb; background: #dbeafe; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">will + Vo</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #dbeafe; overflow: hidden;">
                            <div style="padding: 12px 16px;">
                                • <b style="color: #2563eb;">Tất cả các ngôi</b> đều dùng chung một dạng <b style="color: #2563eb;">will + Vo</b>.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>`"""

    code = code[:start_idx] + new_content + code[end_idx:]
    with open('script.js', 'w') as f:
        f.write(code)

update()
print("Success")
