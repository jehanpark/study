// const numbers = [1,2,3,4,5,6]

//const  newNumbers = number.map((number)=>number*2)

//console.log(newNumbers)

// const newNumbers01 = numbers.map((number,index)=>index+number*3)
// console.log(newNumbers01)

// const scores = [90,35,64,88,45,92]

// const highScores = scores.filter((score) => score >= 85)
// console.log(highScores)
// console.log(scores)

const numbers01 = [1,2,3,4,5,6,7,8,9]

let result = numbers01.reduce((total, current)=>total + current, 0)

console.log(result)

//total : 연산된 값을 누적하는 변수의 역할
//TS => 고차함수
//명령형 & 선언형 프로그래밍 함수