// const students = ["jehan","minmin", "peter"]

// for(초기값 범위 증감문){
 
// }

// for문
// for(let i = 0; i < students.length; i++){
//  // console.log(students[i])
// }

// forEach문

// students.forEach((student,index)=>{
// console.log(`${index+1}번째 학생 :${student} in [${arr}]`)
// })

// for of문
// for(let student of student){
//  console.log(student)
// }

// for in문
// const thebook = {
//  title: Javascrip,
//  page:250,
//  published:"2024-07-31"
// }

// for(let key in thebook){
// console.log(`${key} : ${thebook[key]}`)
// }

// while문

// let stars = Number(prompt("별의개사수 입력"))

// while (stars > 0) {
//  document.write("*")
//  stars--
// }

// do{
//  document.write("*")
//  stars--;
// }while (stars > 0)

const calcSum = (n)=>{
let sum = 0
for(let i = 1; i <= 10; i++){
 sum += 1
}
console.log(`1부터 ${n}까지 더하면 ${sum}
 입니다`)
}

calcSum(10)