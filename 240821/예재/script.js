const phoneNumber = document.querySelector(".txtarea")
const warningMessage = document.querySelector("#warningMessage")

phoneNumber.addEventListener("keyup",function(){
const numberValue = this.value
const trimNumber = numberValue.replace(/-/g, "")

const regexp = /^[0][0-9]{9,10}$/.test(trimNumber)

if(regexp === false) warningMessage.innerHTML = "전화번호 형식에 맞춰서 입력해주세요"
else warningMessage.innerHTML = ""
})