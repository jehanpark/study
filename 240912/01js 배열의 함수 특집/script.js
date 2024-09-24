//병합연산자
// const numA = 10;
// const numB = 20;
// const numC = undefined;

// console.log(numA ?? numB)


//삼항조건 연산자
// const srtA = "안녕하세여!"
// typeof srtA === "string" 
// ? console.log("문자자료형") 
// : console.log("문자자료형 아님")

//switch 문
// const fruit = "apple";

// switch(fruit){
// case "apple" : 
//  console.log("사과")
//  // break
// case "banana" : 
//  console.log("바나나")
//  break
//  default:
//   console.log("해당없음")
// }

//객체안에있는 key값을 배열로 반환하는법
const person = {
 name:"jehan",
 age: 20,
 location : "seoul"
}
const keyArrs = Object.keys(person)
console.log(keyArrs)

keyArrs.forEach((item)=> {
 let value = person[item];
 console.log(value)
})

//객체 대괄호표기법
 // let obA= {}
 // console.log(obA)
 // obA.numA = 1
 // obA["numB"] = 2
 // console.log(obA)

 // let obB = new Object()
 // console.log(obB)

 // //구조분해할당
 // const testO = {
 //  name:"jehan",
 //  age: 20,
 //  skill:"Js",
 // }

 // const{name, age, skill} = testO
 // console.log(testO)

 //단락회로평가

  // const calcA =()=>{
  //  console.log("A")
  //  return false
  // }

  // const calcB =()=>{
  //  console.log("B")
  //  return true
  // }

  // console.log(calcA() && calcB())
  // //리액트는 기본적으로 브라우저를 통해 앱을 여는 순간 컴포넌트가 무조건 마운트 됨 
  // //가상돔=> 영화데이트를 찾아오도록하는 
  // fetch()
  // //정상적으로 fetch()를 통해서 불러오는 영화 API 데이터를 출력하지 못함

  //  //로딩스피너
  // console.log(movieData && DataTransfer.title)

  // //전개연산자
  // const arrA = [1,2,3]
  // const arrB = [4,5,6]

  // const arrC = [arrA,arrB]
  // const arrD = [...arrA,...arrB]
  // const E = [
  //  [1,2,3],[4,5,6]
  // ]
  // console.log(arrC)
  // console.log(arrD)

  //...의 의미
  // const objA = {
  //  a:1,
  //  b:2
  // }

  // const objB = {c:3}

  // const objC = {
  //  ...objA
  // }

  // console.log(objC)



  //배열 매서드 특집


  let food = ["짜장면","피자","치킨","탕수육"]
  const newlength =food.push("쉐이크")
  // console.log(food)
  //배열의 맨 끝에 값을 추가

  const removetiem = food.pop()
  // console.log(food)
  //배열의 맨 끝값을 제거

  const newLength = food.unshift("갈비찜")
  // console.log(food)
  //배열의 맨 앞부분의 값을 추가

  const removedItem = food.shift()
  // console.log(removedItem)
  //배열의 맨 앞부분의 값을 제거

  const sliced = food.slice(0,2)
  // console.log(sliced)
  //배열에서 특정 부분을 잘라서 새로운 배열로 만듬
  //*첫번째 인자값부터 두번쨰 인자값은 개수

  const arrA = [1,2]
  const arrB = [5,6]
  const arrC = arrA.concat(arrB)
  // console.log(arrC)
  //서로다른 배열을 하나로 합쳐주는 함수

  console.log(food.indexOf("치킨"))
  //배열안의 값의 순번을 찾아옴

  console.log(food.includes("제육"))
  //배열안의 값이 있으면 true 없으면 false

  const arr = [{name:"박제한"},{name:"해오름"},{name:"전진우"},{name:"염동훈"}]

  const element = arr.find((item)=> item.name === "해오름")
  // console.log(element)
  //배열에서 값을 찾아 해당값을 가져옴(반환)find는 원본데이터를 안건드림 굿.

  const arrZ = [
   {name:"그리즈만" , team:"AT마드리드"},
   {name:"라이스" , team:"아스날"},
   {name:"뤼디거" , team:"레알마드리드"},
   {name:"외데고르" , team:"아스날"},
   {name:"다비드 실바" , team:"맨시티"},
   {name:"라야" , team:"아스날"},
   {name:"모드리치" , team:"레알마드리드"},
   {name:"홀란드" , team:"맨시티"},
  ]
  const filteredArr = arrZ.filter((item)=>item.team === "아스날" )
  // console.log(filteredArr)
  // console.log(arrZ)
  //배열에서 특정 키워드를 가진 애들을 모아서 배열로 만들어줌 원본데이터안건드림 굿


  const mapArr = arrZ.map((item)=> item.name)
  // console.log(mapArr)
  //배열 안에 아이템들에게 연산처리및 실행문을 처리후 새로운 배열로 만들어줌 원본데이터안건드림 굿

  const Nums = [10,15,12,4,66]
  
  const compare = (a,b)=>{
   b - a
  }
  Nums.sort(compare)

  // console.log(Nums)
  // console.log(arr1)
  //배열안에 값을 정렬해줌

  console.log(food.join("-"))
  //배열의 아이템들을 하나의 문자열로 만들어줌. 반드시 구분자를가짐


  const redu = [10,20,30,40,50,60,70];
  const result = redu.reduce((acc,item)=> acc + item, 0)
  console.log(result)
  //배열의 아이템들을 순회하면서 누적 계산해주는 함수
  //acc는 누산기 초기값 0을 가지게 설정


