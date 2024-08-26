const button = document.querySelector("button")
const result = document.querySelector("#result")

function* train() {
 yield "신당"
 yield "청구"
 yield "약수"
 yield "버티고개"
 yield "한강진"
 yield "이태원"
 yield "녹사평"
 yield "효창공원"
 yield "공덕"
}

const line3 = train()

button.addEventListener("click",()=>{
let current = line3.next()

if(current.done !== true){
 result.innerHTML = current.value
}else{
 result.innerHTML="종점입니다"
 button.setAttribute("disabled","disabled")
}
})