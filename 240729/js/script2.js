
const name = prompt("이름을 말씀해주세요", "ex.홍길동")
const height = parseFloat(prompt("키를 입력해주세요","ex.182.5"))
const weight = parseFloat(prompt("몸무게를 입력하세요", "ex.73.5"))

const nomalWeight = 
(height - 100) *0.9

let result =
 weight >= nomalWeight -5 && weight <= nomalWeight +5

 result = 
 result ? "적저체중입니다!" :"적정체중이 아닙니다"

 alert(`${name}님은${result}`)

