import re

with open('script.js', 'r') as f:
    code = f.read()

old_html = r"""<div style="font-weight: bold; color: #c2410c; font-size: 1.15rem; margin-bottom: 8px;">b) Thay đổi theo Thì (Tenses)</div>
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
                    </div>"""

new_html = r"""<div style="font-weight: bold; color: #c2410c; font-size: 1.15rem; margin-bottom: 12px;">b) 5 Thì (Tenses) cơ bản và hay dùng nhất trong VSTEP Writing</div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #ffedd5; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(234,88,12,0.05);">
                            <div><b style="color: #9a3412; font-size: 1.05rem;">1. Hiện tại đơn:</b> <span style="color: #475569; font-size: 0.95rem; margin-left: 4px;">Sự thật, thói quen</span></div>
                            <div style="font-weight: bold; color: #ea580c; background: #fff7ed; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">V / V(s/es)</div>
                        </div>
                        <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #ffedd5; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(234,88,12,0.05);">
                            <div><b style="color: #9a3412; font-size: 1.05rem;">2. Hiện tại tiếp diễn:</b> <span style="color: #475569; font-size: 0.95rem; margin-left: 4px;">Hành động đang xảy ra</span></div>
                            <div style="font-weight: bold; color: #ea580c; background: #fff7ed; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">am/is/are + V-ing</div>
                        </div>
                        <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #ffedd5; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(234,88,12,0.05);">
                            <div><b style="color: #9a3412; font-size: 1.05rem;">3. Quá khứ đơn:</b> <span style="color: #475569; font-size: 0.95rem; margin-left: 4px;">Sự việc đã kết thúc ở QK</span></div>
                            <div style="font-weight: bold; color: #ea580c; background: #fff7ed; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">V-ed / V2</div>
                        </div>
                        <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #ffedd5; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(234,88,12,0.05);">
                            <div><b style="color: #9a3412; font-size: 1.05rem;">4. Hiện tại hoàn thành:</b> <span style="color: #475569; font-size: 0.95rem; margin-left: 4px;">Bắt đầu ở QK, kéo dài đến HT</span></div>
                            <div style="font-weight: bold; color: #ea580c; background: #fff7ed; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">have/has + V3/ed</div>
                        </div>
                        <div style="background: white; padding: 14px 18px; border-radius: 10px; border: 1px solid #ffedd5; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(234,88,12,0.05);">
                            <div><b style="color: #9a3412; font-size: 1.05rem;">5. Tương lai đơn:</b> <span style="color: #475569; font-size: 0.95rem; margin-left: 4px;">Sự việc sẽ xảy ra</span></div>
                            <div style="font-weight: bold; color: #ea580c; background: #fff7ed; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 1.1rem;">will + V</div>
                        </div>
                    </div>"""

if old_html in code:
    new_code = code.replace(old_html, new_html)
    with open('script.js', 'w') as f:
        f.write(new_code)
    print("Updated successfully")
else:
    print("Could not find the target HTML block")
