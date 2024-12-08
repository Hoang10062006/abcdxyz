// Thay đổi nội dung búc thư ở đây
var letterContent =" M có ny mà, m có thể nói ra chứ cứ đè nén nhiều nó tích lại càng làm mệt thêm thôi. Công nhận những lúc m buồn, m mệt, m cần t thì t lại không có mặt an ủi, thật đáng trách t nghĩ đó là cái cơ bản nhưng m cũng vậy mà lúc t cần m thì lại chả thấy m đâu, à hóa ra là m đang tự mình giải quyết, khi yêu thì phải cùng nhau trải qua chứ không phải kiểu một mình thích làm gì thì làm tự do tự tại được , nó cũng phải thay đổi một chút cho hợp hoàn cảnh chứ. T k được hoàn hảo như những thg bạn trai khác , nhưng cũng đôi lúc le lói t cũng làm tròn trách nhiệm của mình mà đúng không. Nên t nghĩ m cũng phải thay đổi cách nhìn là m không nên kiểu chiếm hữu và mong muốn họ theo hình mẫu của mình , k chỉ riêng t cũng có thể là  người sau tốt hơn t thì mỗi ng đều có một tính cách riêng nên k quy chụp được. Hết òi t chả có suy nghĩ gì nữa kiểu bị rối không biết phải giải quyết như nào cho hợp tình hợp lý nữa, đôi lúc t bị ovt quá cũng khổ.  "

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 25

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})