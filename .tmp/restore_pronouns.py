import re

with open('.tmp/old_script.js', 'r') as f:
    old_lines = f.readlines()

# Pronouns block from old_script.js (lines 2606 to 3144, 0-indexed is 2605 to 3144)
pronouns_block = "".join(old_lines[2605:3144]) + "\n\n"

with open('script.js', 'r') as f:
    current_code = f.read()

# Insert before // ==================== VERBS LOGIC ====================
insert_pattern = r'// ==================== VERBS LOGIC ===================='

if insert_pattern in current_code:
    new_code = current_code.replace(insert_pattern, "// ==================== PRONOUNS LOGIC ====================\n" + pronouns_block + insert_pattern)
    with open('script.js', 'w') as f:
        f.write(new_code)
    print("Pronouns block restored successfully!")
else:
    print("Could not find VERBS LOGIC marker.")
