
let time = 60
let timer
let words = ["cat","dog","apple","book","pen","school","teacher","student","airport","hospital",
"doctor","nurse","house","room","door","window","table","chair","water","food",
"bread","rice","meat","fruit","vegetable","car","bus","train","plane","bicycle",
"road","street","city","village","country","river","mountain","sea","lake","tree",
"flower","grass","sun","moon","star","sky","rain","wind","cloud","snow",
"morning","afternoon","evening","night","today","tomorrow","yesterday","week","month","year",
"happy","sad","angry","tired","hungry","thirsty","fast","slow","big","small",
"hot","cold","warm","cool","old","young","new","beautiful","ugly","clean",
"dirty","easy","difficult","important","interesting","boring","friend","family","parent","child",
"brother","sister","game","music","movie","story","language","science","history","computer","abandon","achieve","acquire","adapt","advance","analyze","ancient","approach","assume","attempt",
"benefit","challenge","complex","conclude","conduct","consider","constant","construct","contribute","create",
"culture","decline","define","demonstrate","determine","develop","discover","efficient","emerge","encourage",
"environment","establish","evidence","expand","explore","feature","function","generate","identify","impact",
"improve","increase","indicate","influence","maintain","measure","observe","occur","promote","require"]

let meanings = [
"con mèo","con chó","quả táo","quyển sách","cây bút","trường học","giáo viên","học sinh","sân bay","bệnh viện",
"bác sĩ","y tá","ngôi nhà","căn phòng","cánh cửa","cửa sổ","cái bàn","cái ghế","nước","thức ăn",
"bánh mì","cơm","thịt","trái cây","rau","xe hơi","xe buýt","tàu hỏa","máy bay","xe đạp",
"con đường","đường phố","thành phố","làng","đất nước","con sông","ngọn núi","biển","hồ","cây",
"hoa","cỏ","mặt trời","mặt trăng","ngôi sao","bầu trời","mưa","gió","mây","tuyết",
"buổi sáng","buổi chiều","buổi tối","ban đêm","hôm nay","ngày mai","hôm qua","tuần","tháng","năm",
"vui","buồn","tức giận","mệt","đói","khát","nhanh","chậm","to","nhỏ",
"nóng","lạnh","ấm","mát","già","trẻ","mới","đẹp","xấu","sạch",
"bẩn","dễ","khó","quan trọng","thú vị","nhàm chán","bạn","gia đình","cha mẹ","đứa trẻ",
"anh trai","chị em gái","trò chơi","âm nhạc","phim","câu chuyện","ngôn ngữ","khoa học","lịch sử","máy tính","từ bỏ","đạt được","thu được","thích nghi","tiến bộ","phân tích","cổ xưa","tiếp cận","giả định","cố gắng",
"lợi ích","thử thách","phức tạp","kết luận","tiến hành","xem xét","liên tục","xây dựng","đóng góp","tạo ra",
"văn hóa","suy giảm","định nghĩa","chứng minh","xác định","phát triển","khám phá","hiệu quả","xuất hiện","khuyến khích",
"môi trường","thiết lập","bằng chứng","mở rộng","khám phá","đặc điểm","chức năng","tạo ra","nhận diện","tác động",
"cải thiện","tăng lên","chỉ ra","ảnh hưởng","duy trì","đo lường","quan sát","xảy ra","thúc đẩy","yêu cầu"
]

let score = 0
let correctIndex

function startGame(){

document.getElementById("menu").style.display="none"
document.getElementById("game").style.display="block"
timer = setInterval(countdown,1000)

nextQuestion()

}

function nextQuestion(){

let q = Math.floor(Math.random()*words.length)

document.getElementById("question").innerText = words[q]

let answers = []
answers.push(meanings[q])

while(answers.length < 4){

let r = Math.floor(Math.random()*meanings.length)

if(!answers.includes(meanings[r])){
answers.push(meanings[r])
}

}

answers = shuffle(answers)

let btn = document.getElementsByClassName("ans")

for(let i=0;i<4;i++){

btn[i].innerText = answers[i]

if(answers[i] == meanings[q]){
correctIndex = i
}

}

}

function checkAnswer(i){

if(i == correctIndex){

score++
document.getElementById("score").innerText = "Score: " + score

}

nextQuestion()

}

function shuffle(a){

for(let i=a.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1))

let temp=a[i]
a[i]=a[j]
a[j]=temp

}

return a
}
function countdown(){

time--

document.getElementById("timer").innerText = "Time: " + time

let width = time * 6
document.getElementById("time").style.width = width + "px"

if(time <= 0){

clearInterval(timer)

alert("Game Over! Score: " + score)

location.reload()

}

}