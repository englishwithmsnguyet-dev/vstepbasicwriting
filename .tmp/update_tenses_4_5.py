import re

def update():
    with open('script.js', 'r') as f:
        code = f.read()

    # Find the HTHT and TLĐ blocks
    start_str_4 = '<!-- 4. HTHT -->'
    start_idx = code.find(start_str_4)
    if start_idx == -1:
        print("Could not find HTHT")
        return
        
    end_idx = code.find('            </div>\n        </div>`', start_idx)
    if end_idx == -1:
        print("Could not find end of HTHT and TLĐ")
        return

    new_blocks = """<!-- 4. HTHT -->
                <div style="background: #fdf4ff; border-radius: 12px; border: 1px solid #fae8ff; padding: 16px;">
                    <div style="font-weight: bold; color: #86198f; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>4. Hiện tại hoàn thành <span style="font-size: 0.95rem; font-weight: normal; color: #4a044e; margin-left: 8px;">(Bắt đầu ở QK, kéo dài đến HT)</span></span>
                        <div style="font-weight: bold; color: #c026d3; background: #fae8ff; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">have/has been & have/has + V3/ed</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #fae8ff; overflow: hidden;">
                            <div style="background: #fae8ff; padding: 8px 16px; font-weight: bold; color: #86198f; font-size: 1.05rem;">🔹 Với động từ TO-BE (have/has been)</div>
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I / You / We / They / Danh từ chung số nhiều / Danh từ riêng từ 2 trở lên</b> ➡️ đi với <b style="color: #c026d3;">have been</b></div>
                                <div>• <b>He / She / It / Danh từ chung số ít / Danh từ không đếm được / Danh từ riêng chỉ có 1 / Đại từ bất định (someone, everyone, no one...)</b> ➡️ đi với <b style="color: #c026d3;">has been</b></div>
                            </div>
                        </div>
                        <div style="background: white; border-radius: 8px; border: 1px solid #fae8ff; overflow: hidden;">
                            <div style="background: #fae8ff; padding: 8px 16px; font-weight: bold; color: #86198f; font-size: 1.05rem;">🔹 Với động từ THƯỜNG (have/has + V3/ed)</div>
                            <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
                                <div>• <b>I / You / We / They / Danh từ chung số nhiều / Danh từ riêng từ 2 trở lên</b> ➡️ đi với <b style="color: #c026d3;">have + V3/ed</b></div>
                                <div>• <b>He / She / It / Danh từ chung số ít / Danh từ không đếm được / Danh từ riêng chỉ có 1 / Đại từ bất định (someone, everyone, no one...)</b> ➡️ đi với <b style="color: #c026d3;">has + V3/ed</b></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. TLĐ -->
                <div style="background: #eff6ff; border-radius: 12px; border: 1px solid #dbeafe; padding: 16px;">
                    <div style="font-weight: bold; color: #1d4ed8; font-size: 1.15rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <span>5. Tương lai đơn <span style="font-size: 0.95rem; font-weight: normal; color: #1e3a8a; margin-left: 8px;">(Sự việc sẽ xảy ra)</span></span>
                        <div style="font-weight: bold; color: #2563eb; background: #dbeafe; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">will be & will + Vo</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; border-radius: 8px; border: 1px solid #dbeafe; overflow: hidden;">
                            <div style="background: #dbeafe; padding: 8px 16px; font-weight: bold; color: #1d4ed8; font-size: 1.05rem;">🔹 Với động từ TO-BE (will be)</div>
                            <div style="padding: 12px 16px;">
                                • <b style="color: #2563eb;">Tất cả các ngôi</b> đều dùng chung một dạng <b style="color: #2563eb;">will be</b>.
                            </div>
                        </div>
                        <div style="background: white; border-radius: 8px; border: 1px solid #dbeafe; overflow: hidden;">
                            <div style="background: #dbeafe; padding: 8px 16px; font-weight: bold; color: #1d4ed8; font-size: 1.05rem;">🔹 Với động từ THƯỜNG (will + Vo)</div>
                            <div style="padding: 12px 16px;">
                                • <b style="color: #2563eb;">Tất cả các ngôi</b> đều dùng chung một dạng <b style="color: #2563eb;">will + Vo</b>.
                            </div>
                        </div>
                    </div>
                </div>
"""

    code = code[:start_idx] + new_blocks + code[end_idx:]
    with open('script.js', 'w') as f:
        f.write(code)

update()
print("Success")
