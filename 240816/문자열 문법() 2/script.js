//let pets = ["dog","cat","mouse"]

//pets[0] = "hamster"
//console.log(pets[2])

//배열 => 이터러블 객체
//이터레이터 요소
//제너레이터 // map & set
//반복문

// for // for of // forEach
// 배열 선언 값
// 1)복수형
//  블록변수 값
//const colors = ["red","green","blue","white","black"]

// for(let i = 0; i < colors.length; i++){
// console.log(colors[i])
// }


//초기값 // 범위 //증감
//for(let color of colors){
 
//}

//colors.forEach((color,index)=>{
//console.log(`colors[${index}] : ${color}`)
//}
//const colors = ["red","green","blue","white","black"]
//colors.forEach((color,i,array)=>{
// console.log(`${array}[${i}]`)
//})  

// const vegitable = ["양상추","토마토","피클"]
// const cheese = ["모짜렐라","슈레드"]
// const meat = ["불고기"]

// const meatBurger = vegitable.concat(meat,"빵")

// console.log(meatBurger)

// //전개연산자
// const cheeseBurger = [...vegitable, ...cheese,"빵"]
// console.log(cheeseBurger)

// let number = [6, 9, 3, 21, 18]


// console.log(number)
// console.log(number.reverse())

// let week = ["sun","mon","tue","fri"]
// let values = ["5","20","33"]

//1.배열선언할 때 변수명 복수
//1.일반 for 문 선언,블록변수 0으로 시작
//3.배열을 담는 변수를 선언할 때 const VS let
// => 배열의 특정 메서드 함수들 => 새로운 배열을 생성해주는 메서드 함수
// => 빈배열 생성 => 값을 추가하는 행위 

// console.log(week)
// console.log(week.sort()) 

// console.log(values)
// console.log(values.sort())

// //sort => 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력!!!

// values.sort((a,b)=>{
//  if(a > b) return 1
//  if(a > b) return-1
//   if(a === 0) return 0
// })
// console.log(values)

// values.sort((a,b)=>{
//  return a-b
// })
// console.log(values)

// let animals = ["사자","곰","새","악어"]
// console.log(animals)

// animals.pop()

// console.log(animals)

// animals.push(animals)

// let fruits = ["사과","샤인머스켓","귤","체리"]

// fruits.shift()
// console.log(fruits)

// fruits.unshift("망고")
// console.log(fruits)


let subject = ["html","css","javascript","typescript","react"]

console.log(subject.splice(2))

let week = ["sun","mon","tue","wed","thu","fri","sat"]
console.log(week.splice(1,4,"공휴일"))
console.log(week)

//위 splice는 원본데이터값을 날림

let colors = ["red","green","blue","whiht","black"]

console.log(colors.slice(3))
console.log(colors)