import re

def add_css():
    with open('styles.css', 'r') as f:
        code = f.read()

    new_css = """
/* Beautiful Pill Tabs */
.tabs-container {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    justify-content: center;
    flex-wrap: wrap;
}

.tab-pill {
    padding: 12px 40px;
    font-size: 1.25rem;
    font-family: 'Lora', 'Georgia', serif;
    font-weight: 700;
    border-radius: 9999px;
    border: 2px solid #e2e8f0;
    background-color: white;
    color: #1e293b;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.tab-pill:hover {
    background-color: #f8fafc;
    border-color: #cbd5e1;
}

.tab-pill.active {
    background-color: #8b5cf6;
    color: white;
    border-color: transparent;
    box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
    transform: translateY(-2px);
}
.tab-pill.active:hover {
    background-color: #7c3aed;
}

"""
    if "/* Beautiful Pill Tabs */" not in code:
        with open('styles.css', 'a') as f:
            f.write(new_css)
        print("CSS added")
    else:
        print("CSS already exists")

add_css()
