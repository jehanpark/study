//매개변수 기본값
const hello = (name, message = "안녕하세요!") =>{
 console.log(`${name}님 ${message}`)
}

hello("박제한","반갑습니다")
hello("원빈")

//2.전개연산자

//1)함수의 매개변수
const addNum = (...numbers)=>{
 let sum = 0
 
 for(let number of numbers){
  sum += number
 }
 return sum
}

console.log(addNum(1,2,3,4,5,6))
console.log(addNum(1,2,3,4,))
console.log(addNum(1,2))

//2)참조타입 변수값 독립화
const fruits = ["apple","banana","cherry"]
const fav = [...fruits]


console.log(fruits,fav)

//3) 서로다른 2개의 배여릉ㄹ 하나로 병합

const animal = ["dog","cat"]
const fruits01 = ["melon","banana","mango"]
console.log([...animal,...fruits01])

//3.객체 key 접근방법
//대괄호 표기법
const book = {
 title:"Javascript",
 page : 500,
}
book.published="2024-08-19"


//객체 키 생성 방법
const fn = () =>{
 return "result"
}

const add = (a,b) =>{
 return a+b
}

const obj = {
 [fn()]:"함수 키",
 [`add(10,20)key`]: "계산 키",
}

//객체 축약법

let user = {
 name:"슛돌이"
}
user.age =25

console.log(user)

const makeUser=(name,age)=>{
 return{
  name : name,
  age : age,
 }
}

const user1 = makeUser("영심이",20)

console.log(user1)

//객체에 심벌키 사용방법

let id1= Symbol()
let id2= Symbol()

console.log(id1 === id2)

const id = Symbol("id")

const member = {
 name:"jehan",
 age:26,
 [id]: 1234,
 [tel]: ()=>{
  prompt("당신의 전화번호는?")
 }
}

console.log(member)

for(let item in member){
 console.log(`${item}`)
}

//객체 안에 있는 key값을 은폐하고싶을 때 사용가능

console.log(member[id])


const fruits03 = ["사과","복숭아"]


//4)구조분해할당
let [teacher, ...students] = ["kim","lee","park","choi"]
console.log(teacher,students)


const member03 = {
 name:"jehan",
 age:20,
}

const {} = member03

//배열 메서드**
//map //filter //reduce

//map : 배열안에 있는 아이템들에게 특정함수 안에 있는 기능을 동일하게 실행.적용 => 새로운 배열로 다시 생성!
//