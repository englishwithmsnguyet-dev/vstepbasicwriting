import re

def insert_data():
    with open('script.js', 'r') as f:
        code = f.read()

    new_data = """
const verbsPracticeBook1 = [
    { q: "Tôi thường học bài vào buổi tối để chuẩn bị cho bài kiểm tra.", a: ["I usually study in the evening to prepare for the test", "I usually study in the evening to prepare for the exam", "I usually study in the evening to prepare for my test", "I usually study in the evening to prepare for my exam"] },
    { q: "Gia đình tôi đã sống ở thành phố này được hơn 10 năm.", a: ["My family has lived in this city for more than 10 years", "My family have lived in this city for more than 10 years", "My family has lived in this city for over 10 years"] },
    { q: "Tuần trước, tôi tham gia một khóa học kỹ năng mềm rất bổ ích.", a: ["Last week, I joined a very useful soft skills course", "Last week, I attended a very useful soft skills course", "Last week I joined a very useful soft skills course", "Last week I attended a very useful soft skills course"] },
    { q: "Bạn tôi sẽ thi tiếng Anh vào tháng sau, vì vậy cậu ấy học rất chăm chỉ mỗi ngày.", a: ["My friend will take an English exam next month, so he studies very hard every day", "My friend will take an English test next month, so he studies very hard every day", "My friend will take an English exam next month so he studies very hard every day", "My friend will take an English test next month so he studies very hard every day"] },
    { q: "Nhiều học sinh không ngủ đủ giấc vì họ phải làm bài tập về nhà mỗi ngày.", a: ["Many students do not get enough sleep because they have to do homework every day", "Many students don't get enough sleep because they have to do homework every day", "Many students do not get enough sleep because they have to do their homework every day"] }
];

const verbsPracticeBook2 = [
    { q: "Viết luận là phần quan trọng trong bài thi viết VSTEP.", a: ["Writing an essay is an important part of the VSTEP writing exam", "Essay writing is an important part of the VSTEP writing exam", "Writing an essay is an important part in the VSTEP writing exam", "Writing an essay is an important part of the VSTEP writing test"] },
    { q: "Trung tâm Anh ngữ River là nơi mà tôi đã học khoá học VSTEP vào năm ngoái.", a: ["River English Center is the place where I took a VSTEP course last year", "River English Center is where I took a VSTEP course last year", "The River English Center is the place where I took a VSTEP course last year"] },
    { q: "Tôi nghĩ viết một lá thư không quá khó.", a: ["I think writing a letter is not too difficult", "I think that writing a letter is not too difficult", "I think writing a letter is not very difficult"] },
    { q: "Chúng tôi đã là bạn thân kể từ cấp 3.", a: ["We have been close friends since high school", "We've been close friends since high school"] },
    { q: "Tôi sẽ thành công trong kỳ thi VSTEP.", a: ["I will be successful in the VSTEP exam", "I will be successful in the VSTEP test"] }
];

const verbsPracticeBook3 = [
    { q: "Việc đọc sách có thể giúp tôi mở rộng kiến thức của mình.", a: ["Reading books can help me broaden my knowledge", "Reading books can help me expand my knowledge", "Reading can help me broaden my knowledge"] },
    { q: "Bạn nên học từ vựng Tiếng Anh mỗi ngày để cải thiện kỹ năng đọc của bạn.", a: ["You should learn English vocabulary every day to improve your reading skill", "You should learn English vocabulary every day to improve your reading skills", "You should study English vocabulary every day to improve your reading skills"] },
    { q: "Tôi sẽ nộp bài luận của mình vào ngày mai.", a: ["I will submit my essay tomorrow", "I will hand in my essay tomorrow"] },
    { q: "Chúng ta không nên sao chép ý tưởng trên mạng.", a: ["We should not copy ideas from the Internet", "We shouldn't copy ideas from the Internet", "We should not copy ideas on the Internet"] },
    { q: "Bạn có thể luyện viết mỗi ngày nếu bạn muốn giỏi kỹ năng viết.", a: ["You can practice writing every day if you want to be good at writing skills", "You can practice writing every day if you want to be good at writing skill", "You can practice writing every day if you want to be good at writing"] }
];

"""

    code = code.replace("const verbsPractice1Data = [", new_data + "const verbsPractice1Data = [")
    
    with open('script.js', 'w') as f:
        f.write(code)

insert_data()
print("Success data insertion")
