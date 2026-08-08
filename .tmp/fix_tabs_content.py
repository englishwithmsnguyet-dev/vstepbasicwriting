import re

def fix_content():
    with open('script.js', 'r') as f:
        code = f.read()

    # The block we need to replace is from `        contentHtml = \`` to `            </div>\n        \`;\n    }`
    # Let's find exactly this block
    
    start_str = "        contentHtml = `\n            <div style=\"margin-top: 24px; animation: fadeIn 0.3s ease-out;\">"
    
    # Actually, it's easier to find the old content using regex or string match.
    
    old_content_html = """        contentHtml = `
            <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                
                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 32px; margin-top: 32px;">
                <h1 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 24px; text-align: center;">📚 BÀI TẬP TRONG SÁCH</h1>

                <!-- BÀI 1 BOOK -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid var(--primary-color);">
                    <h2 style="color: var(--primary-color); margin-bottom: 16px; font-size: 1.4rem;">Bài 1: Động từ thường (Dịch câu)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chuyển những câu sau đây sang tiếng Anh. Chú ý cách dùng thì.</p>
                    <div style="display: grid; gap: 16px;">
                        ${pBook1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbsBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
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
                        <button onclick="window.submitVerbsBook2()" style="padding: 12px 32px; background: #f59e0b; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(245,158,11,0.3);">NỘP BÀI 2</button>
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
                        <button onclick="window.submitVerbsBook3()" style="padding: 12px 32px; background: #10b981; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">NỘP BÀI 3</button>
                    </div>
                </div>

                <hr style="border-top: 2px solid var(--border-color); margin-bottom: 32px; margin-top: 48px;">
                <h1 style="color: #6366f1; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">🚀 BÀI TẬP LUYỆN THÊM</h1>

                <!-- BÀI 4 (OLD 1) -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #6366f1;">
                    <h2 style="color: #4f46e5; margin-bottom: 16px; font-size: 1.4rem;">Bài 4: Sự hòa hợp Chủ - Vị (Trắc nghiệm)</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn dạng động từ đúng nhất để hoàn thành các câu sau.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p1Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs4()" style="padding: 12px 32px; background: #6366f1; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">NỘP BÀI 4</button>
                    </div>
                </div>

                <!-- BÀI 5 (OLD 2) -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #ec4899;">
                    <h2 style="color: #db2777; margin-bottom: 16px; font-size: 1.4rem;">Bài 5: Sửa lỗi sai về Thì / Động từ</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Tìm ra lỗi sai trong cách chia động từ (phần bôi đậm) và viết lại dạng đúng.</p>
                    <div style="display: grid; gap: 16px;">
                        ${p2Html}
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs5()" style="padding: 12px 32px; background: #ec4899; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(236,72,153,0.3);">NỘP BÀI 5</button>
                    </div>
                </div>

                <!-- BÀI 6 (OLD 3) -->
                <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #8b5cf6;">
                    <h2 style="color: #7c3aed; margin-bottom: 16px; font-size: 1.4rem;">Bài 6: Điền từ vào đoạn văn</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chia động từ thích hợp vào các ô trống trong đoạn văn sau (Chú ý chia theo thì và chủ ngữ).</p>
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; font-size: 1.15rem; line-height: 2; color: #334155;">
                        ${paraHtml}
                    </div>
                    <div id="verb_para_explanation" style="display: none; margin-top: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px;">
                    </div>
                    <div style="text-align: center; margin-top: 24px;">
                        <button onclick="window.submitVerbs6()" style="padding: 12px 32px; background: #8b5cf6; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(139,92,246,0.3);">NỘP BÀI 6</button>
                    </div>
                </div>
            </div>
        `;"""
        
    new_content_html = """        if (activeTab === 'practice_book') {
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
                            <button onclick="window.submitVerbsBook1()" style="padding: 12px 32px; background: var(--primary-color); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(87,70,227,0.3);">NỘP BÀI 1</button>
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
                            <button onclick="window.submitVerbsBook2()" style="padding: 12px 32px; background: #f59e0b; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(245,158,11,0.3);">NỘP BÀI 2</button>
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
                            <button onclick="window.submitVerbsBook3()" style="padding: 12px 32px; background: #10b981; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">NỘP BÀI 3</button>
                        </div>
                    </div>
                </div>
            `;
        } else if (activeTab === 'practice_extra') {
            contentHtml = `
                <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                    <h1 style="color: #6366f1; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">🚀 BÀI TẬP THÊM</h1>

                    <!-- BÀI 4 (OLD 1) -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #6366f1;">
                        <h2 style="color: #4f46e5; margin-bottom: 16px; font-size: 1.4rem;">Bài 4: Sự hòa hợp Chủ - Vị (Trắc nghiệm)</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chọn dạng động từ đúng nhất để hoàn thành các câu sau.</p>
                        <div style="display: grid; gap: 16px;">
                            ${p1Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbs4()" style="padding: 12px 32px; background: #6366f1; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">NỘP BÀI 4</button>
                        </div>
                    </div>

                    <!-- BÀI 5 (OLD 2) -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #ec4899;">
                        <h2 style="color: #db2777; margin-bottom: 16px; font-size: 1.4rem;">Bài 5: Sửa lỗi sai về Thì / Động từ</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Tìm ra lỗi sai trong cách chia động từ (phần bôi đậm) và viết lại dạng đúng.</p>
                        <div style="display: grid; gap: 16px;">
                            ${p2Html}
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbs5()" style="padding: 12px 32px; background: #ec4899; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(236,72,153,0.3);">NỘP BÀI 5</button>
                        </div>
                    </div>

                    <!-- BÀI 6 (OLD 3) -->
                    <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 32px; border-top: 6px solid #8b5cf6;">
                        <h2 style="color: #7c3aed; margin-bottom: 16px; font-size: 1.4rem;">Bài 6: Điền từ vào đoạn văn</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 24px; color: var(--text-muted);">Chia động từ thích hợp vào các ô trống trong đoạn văn sau (Chú ý chia theo thì và chủ ngữ).</p>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; font-size: 1.15rem; line-height: 2; color: #334155;">
                            ${paraHtml}
                        </div>
                        <div id="verb_para_explanation" style="display: none; margin-top: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px;">
                        </div>
                        <div style="text-align: center; margin-top: 24px;">
                            <button onclick="window.submitVerbs6()" style="padding: 12px 32px; background: #8b5cf6; color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.2s; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(139,92,246,0.3);">NỘP BÀI 6</button>
                        </div>
                    </div>
                </div>
            `;
        }"""
        
    code = code.replace(old_content_html, new_content_html)

    with open('script.js', 'w') as f:
        f.write(code)

fix_content()
