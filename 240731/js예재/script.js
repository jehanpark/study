// let bd = prompt("출생년도를 입력하세요","ex.2022")

// let userBd = bd

// result = 2024 - userBd
// console.log(result)

const button = document.querySelector("button")

const calc = ()=>{
 const birthYear = Number(prompt("태어난 년도를 입력하세요~!","2002"))
 const currentYear = 2024

 const age = currentYear - birthYear + 1

 const result = document.querySelector(".result")

 result.innerText = `당신의 나이는 ${age}입니다`
}

button.addEventListener("cilck", calc)

