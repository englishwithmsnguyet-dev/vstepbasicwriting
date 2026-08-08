import re

with open('script.js', 'r') as f:
    code = f.read()

new_theory = r"""const verbsTheoryData = [
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
            
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin: 16px 0;">
                <div style="background: #f1f5f9; padding: 10px 16px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">📌 Các nhóm động từ liên kết phổ biến</div>
                <div style="padding: 16px;">
                    <ul style="margin: 0; padding-left: 20px; display: grid; gap: 10px;">
                        <li><b>Nhóm TO BE:</b> is, am, are, was, were...</li>
                        <li><b>Chỉ sự biến đổi:</b> become, get, turn, grow... <br><i style="color: #64748b;">(VD: The weather <b>gets</b> cold.)</i></li>
                        <li><b>Chỉ cảm giác/nhận thức:</b> feel, look, sound, smell, taste, seem, appear... <br><i style="color: #64748b;">(VD: She <b>looks</b> tired.)</i></li>
                    </ul>
                </div>
            </div>

            <div style="margin-top: 16px; padding: 16px; background: #fef2f2; border: 2px dashed #ef4444; border-radius: 12px;">
                <div style="color: #b91c1c; font-weight: bold; margin-bottom: 8px;">⚠️ LƯU Ý CỰC KỲ QUAN TRỌNG</div>
                Sau động từ liên kết, chúng ta cộng với <b>TÍNH TỪ (Adjective)</b>, KHÔNG dùng Trạng từ (Adverb).<br>
                <div style="margin-top: 8px; font-family: monospace; font-size: 1.05rem;">
                    <span style="color: #ef4444; text-decoration: line-through;">She looks beautifully.</span> ➡️ <b style="color: #10b981;">She looks beautiful.</b>
                </div>
            </div>
        </div>`
    },
    {
        title: "🔄 3. Sự thay đổi của Động từ (Verb Transformations)",
        content: `
        <div style="font-size: 1.1rem; line-height: 1.7; color: var(--text-main);">
            <p>Động từ trong Tiếng Anh <b>luôn luôn thay đổi hình thái</b> tùy thuộc vào 2 yếu tố chính:</p>
            
            <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
                <div style="background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; padding: 16px;">
                    <div style="font-weight: bold; color: #15803d; font-size: 1.15rem; margin-bottom: 8px;">a) Thay đổi theo Chủ ngữ (Sự hòa hợp Chủ - Vị)</div>
                    <ul style="margin: 0; padding-left: 20px; color: #166534;">
                        <li style="margin-bottom: 8px;"><b>Chủ ngữ số ít</b> (He, she, it, danh từ số ít) ➡️ Động từ phải thêm <b style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">s/es</b><br>
                        <i>VD: He works. (To-be là is/was)</i></li>
                        <li><b>Chủ ngữ số nhiều</b> (They, danh từ số nhiều) ➡️ Động từ <b style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">giữ nguyên</b><br>
                        <i>VD: They work. (To-be là are/were)</i></li>
                    </ul>
                </div>

                <div style="background: #fff7ed; border-radius: 12px; border: 1px solid #fed7aa; padding: 16px;">
                    <div style="font-weight: bold; color: #c2410c; font-size: 1.15rem; margin-bottom: 8px;">b) Thay đổi theo Thì (Tenses)</div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 12px;">
                        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #ffedd5; text-align: center;">
                            <div style="font-size: 0.9rem; color: #9a3412;">Hiện tại</div>
                            <div style="font-weight: bold; color: #c2410c;">work / works</div>
                        </div>
                        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #ffedd5; text-align: center;">
                            <div style="font-size: 0.9rem; color: #9a3412;">Quá khứ</div>
                            <div style="font-weight: bold; color: #c2410c;">worked</div>
                        </div>
                        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #ffedd5; text-align: center;">
                            <div style="font-size: 0.9rem; color: #9a3412;">Tiếp diễn</div>
                            <div style="font-weight: bold; color: #c2410c;">is working</div>
                        </div>
                        <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #ffedd5; text-align: center;">
                            <div style="font-size: 0.9rem; color: #9a3412;">Hoàn thành</div>
                            <div style="font-weight: bold; color: #c2410c;">has worked</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
];"""

start_idx = code.find('const verbsTheoryData = [')
end_idx = code.find('];', start_idx) + 2

if start_idx != -1 and end_idx != -1:
    new_code = code[:start_idx] + new_theory + code[end_idx:]
    with open('script.js', 'w') as f:
        f.write(new_code)
    print("Updated successfully")
else:
    print("Could not find verbsTheoryData")
