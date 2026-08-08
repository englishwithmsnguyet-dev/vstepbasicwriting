import re

with open('script.js', 'r') as f:
    code = f.read()

new_open_topic = r"""window.openTopic = function(topicId, status) {
    if (status === 'locked') {
        const pass = prompt('Vui lòng nhập mật khẩu để mở khóa chủ điểm này:');
        if (pass === 'missnguyet2026' || pass === 'ONB103' || pass === 'CB211' || pass === 'CB213') {
            const topic1 = topicsData.find(t => t.id === topicId);
            if (topic1) topic1.status = 'unlocked';
            
            const topic2 = typeof chapter2TopicsData !== 'undefined' ? chapter2TopicsData.find(t => t.id === topicId) : null;
            if (topic2) topic2.status = 'unlocked';
            
            alert('Mở khóa thành công!');
            
            if (topic1) renderTopicsGrid(); // re-render chapter 1 grid
            if (topic2 && typeof renderChapter2TopicsGrid === 'function') renderChapter2TopicsGrid(); // re-render chapter 2 grid
            
            if (topicId === 'components') renderComponentsDetail();
            else if (topicId === 'structures') renderStructuresDetail();
            else if (topicId === 'practice') renderPracticeDetail();
            else if (topicId === 'nouns' && typeof renderNounsDetail === 'function') renderNounsDetail();
            else if (topicId === 'pronouns' && typeof renderPronounsDetail === 'function') renderPronounsDetail();
            else if (topicId === 'verbs' && typeof renderVerbsDetail === 'function') renderVerbsDetail();
            else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
        } else if (pass !== null) {
            alert('Mật khẩu không đúng!');
        }
        return;
    }

    if (topicId === 'components') {
        renderComponentsDetail();
    } else if (topicId === 'structures') {
        renderStructuresDetail();
    } else if (topicId === 'practice') {
        renderPracticeDetail();
    } else if (topicId === 'nouns') {
        if(typeof renderNounsDetail === 'function') renderNounsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'pronouns') {
        if(typeof renderPronounsDetail === 'function') renderPronounsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else if (topicId === 'verbs') {
        if(typeof renderVerbsDetail === 'function') renderVerbsDetail();
        else alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    } else {
        alert('Chủ điểm này đang được cập nhật nội dung. Bạn vui lòng quay lại sau nhé!');
    }
}"""

start_idx = code.find('window.openTopic = function(topicId, status) {')
end_idx = code.find('window.renderComponentsDetail = function(activeTab = \'theory\') {')

if start_idx != -1 and end_idx != -1:
    code = code[:start_idx] + new_open_topic + '\n\n\n' + code[end_idx:]
    with open('script.js', 'w') as f:
        f.write(code)
    print("Replaced openTopic function.")
else:
    print("Could not find boundaries.")
