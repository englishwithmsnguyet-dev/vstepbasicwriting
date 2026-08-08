import re

def replace_tabs():
    with open('script.js', 'r') as f:
        code = f.read()

    # 1. Components
    comp_old = """    let tabsHtml = `
        <div class="tabs" style="display: flex; gap: 8px; margin-bottom: 24px;">
            <button onclick="renderComponentsDetail('theory')" class="btn-tab ${activeTab === 'theory' ? 'active' : ''}">📖 LÝ THUYẾT</button>
            <button onclick="renderComponentsDetail('practice')" class="btn-tab ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    comp_new = """    let tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderComponentsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderComponentsDetail('practice')" class="tab-pill ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    code = code.replace(comp_old, comp_new)

    # 2. Structures
    struct_old = """    let tabsHtml = `
        <div class="tabs" style="display: flex; gap: 8px; margin-bottom: 24px;">
            <button onclick="renderStructuresDetail('theory')" class="btn-tab ${tab === 'theory' ? 'active' : ''}">📖 LÝ THUYẾT</button>
            <button onclick="renderStructuresDetail('practice')" class="btn-tab ${tab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    struct_new = """    let tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderStructuresDetail('theory')" class="tab-pill ${tab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderStructuresDetail('practice')" class="tab-pill ${tab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    code = code.replace(struct_old, struct_new)

    # 3. Nouns
    noun_old = """    let tabsHtml = `
        <div class="custom-tabs" style="display: flex; gap: 16px;">
            <button class="tab-btn ${activeTab === 'theory' ? 'active' : ''}" onclick="renderNounsDetail('theory')" style="padding: 12px 32px; font-size: 1.1rem; font-weight: bold; border-radius: 30px; border: none; cursor: pointer; background: ${activeTab === 'theory' ? 'var(--primary-color)' : 'var(--bg-card)'}; color: ${activeTab === 'theory' ? '#fff' : 'var(--text-main)'}; border: 2px solid ${activeTab === 'theory' ? 'transparent' : 'var(--border-color)'}; transition: all 0.3s;">📚 LÝ THUYẾT</button>
            <button class="tab-btn ${activeTab === 'practice' ? 'active' : ''}" onclick="renderNounsDetail('practice')" style="padding: 12px 32px; font-size: 1.1rem; font-weight: bold; border-radius: 30px; border: none; cursor: pointer; background: ${activeTab === 'practice' ? 'var(--primary-color)' : 'var(--bg-card)'}; color: ${activeTab === 'practice' ? '#fff' : 'var(--text-main)'}; border: 2px solid ${activeTab === 'practice' ? 'transparent' : 'var(--border-color)'}; transition: all 0.3s;">✏️ BÀI TẬP</button>
        </div>
    `;"""
    noun_new = """    let tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderNounsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderNounsDetail('practice')" class="tab-pill ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    code = code.replace(noun_old, noun_new)

    # 4. Pronouns
    pro_old = """    const tabsHtml = `
        <div class="tabs" style="display: flex; gap: 8px; margin-bottom: 24px;">
            <button onclick="renderPronounsDetail('theory')" class="btn-tab ${activeTab === 'theory' ? 'active' : ''}">📖 LÝ THUYẾT</button>
            <button onclick="renderPronounsDetail('practice')" class="btn-tab ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    pro_new = """    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderPronounsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderPronounsDetail('practice')" class="tab-pill ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    code = code.replace(pro_old, pro_new)

    # 5. Verbs - Needs special handling because of the complex 3-tab layout
    v_start = code.find("window.renderVerbsDetail = function")
    tabs_start = code.find("    const tabsHtml = `", v_start)
    tabs_end = code.find("    `;", tabs_start)
    
    new_v_tabs = """    const tabsHtml = `
        <div class="tabs-container">
            <button onclick="renderVerbsDetail('theory')" class="tab-pill ${activeTab === 'theory' ? 'active' : ''}">📚 LÝ THUYẾT</button>
            <button onclick="renderVerbsDetail('practice')" class="tab-pill ${activeTab === 'practice' ? 'active' : ''}">✏️ BÀI TẬP</button>
        </div>
    `;"""
    
    code = code[:tabs_start] + new_v_tabs + code[tabs_end+6:]
    
    # Verbs: revert the practice logic to a single 'practice' tab
    # We replace:
    # `    } else if (activeTab === 'practice_book' || activeTab === 'practice_extra') {`
    # WITH: `    } else {`
    # Wait, in the previous script `update_tabs_logic.py`, I did:
    # `code = code.replace("    } else {\\n        // PRACTICE", new_else + "\\n        // PRACTICE")`
    code = code.replace("    } else if (activeTab === 'practice_book' || activeTab === 'practice_extra') {\n        // PRACTICE", "    } else {\n        // PRACTICE")
    
    # And then we need to replace the contentHtml splitting
    old_content_html = """        if (activeTab === 'practice_book') {
            contentHtml = `
                <div style="margin-top: 24px; animation: fadeIn 0.3s ease-out;">
                    <h1 style="color: #059669; font-size: 1.8rem; margin-bottom: 24px; text-align: center;">📚 BÀI TẬP TRONG SÁCH</h1>

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
            `;
        }"""
        
    new_content_html = """        contentHtml = `
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
    
    code = code.replace(old_content_html, new_content_html)

    with open('script.js', 'w') as f:
        f.write(code)

replace_tabs()
