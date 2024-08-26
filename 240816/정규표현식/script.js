//문자열 & 배열
//1) 둘 다 length
//2) 둘 다 index(0부터시작 // 좌측시작)

// //ES6문법이 적용되기 전
// const str5 = "Hello, everyone"
// const array5 = str5.split(" ")
// const array5_1 = str5.split("")

// const array6 = [...str5]
// const str6 = array6.join("")

// console.log(array5)
// console.log(array5_1)

// console.log(array6)
// console.log(str6)

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.")

// const fristCh = string[0].toUpperCase()
// const remainStr = string.slice(1)
// const result = fristCh + remainStr

// // const result = [string[0].toUppercase(), ...string.slice(1)].join("")

// document.write(result)



// *배열*
// 1.생성자 함수를 통해 만드는방법
let arr = new Array()

arr[0] = "frist"
arr[1] = "second"

console.log(arr)

// let obj = new Object()

//2)변수 // 빈배열 할당 및 선언
let season = []
season[0] = "spring"
season[1] = "summer"
season[2] = "fall"
season[3] = "winter"

console.log(season)

//3) 직접 배열 선언 //할당
const pets = ["dog","cat","lion"]
console.log(pets)