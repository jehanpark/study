//현재 보고있는 웹 브라우저 문서 내 버튼을 하나 만들어 주세요
//해당버튼을 클릭 할 때 마다 색상이 변경되도록

document.body.innerHTML += `<button>click</button>`

const color=["white","yellow","aqua","purple"]
let btn = document.querySelector("button")

button.addEventListener("click",()=>{
i++
if(i>=color.length) i = 0
const bodyTag = document.querySelector("body")
bodyTag.style.backgroundColor = color[i]
})