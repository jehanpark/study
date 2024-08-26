//callback
//window 안에는 기산 관련 내장 함수가 존재
// setInterval
// clearInterval
// setTimeout


//js에서 자주볼 콜백 1번 예제
// let count = 0
// const cbFunc = ()=>{
//  console.log(count)
//  if(++ count> 10) clearInterval(timer)
// }

// const timer = setInterval(cbFunc, 300)


//js에서 자주볼 콜백 2번 예제
//map함수는 배열안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이후 다시 해당 아이템을 모아서 새로운 배열로 생성
// const arr = [10,20,30]
// const newArr = arr.map((item, index)=>item+5
// )

// console.log(newArr)


//js에서 자주볼 콜백 3번 예제
//settimeput=>일정시간 지연시킨후 실행

// setTimeout(function(){
// console.log("click")
// },500)


//this객체
//보통 일반적으로현재 실행되고 있는 함수의 주체or객체 등의 아이템

//일반적인 콜백함수 내에서 주체가되고있는 아이템을 찾아오고 싶을 때에는 직업 해당인자를 언급하거나 경우에 따라서 this객체를 사용한다

//js에서 자주볼 콜백 4번 예제
// const arr2 = [1,2,3,4,5]
// arr2.forEach((item) => {
//  console.log(this)
// });


//js에서 자주볼 콜백 5번 예제

// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener(
//  "click", function(){
//  console.log(this)
//  }
// )

//js에서 자주볼 콜백 6번 예제
// 객체 안에있는 메서드 함수의 경우, this는 function인 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면 window객체를 찾아온다
// const obj = {
//  vals: [1,2,3],
//  logValues: function(){
//   console.log(this)
//  }
// }

// obj.logValues()


//객채안에 메서드 형식으로 정의한 함수는 콜백함수로 별도 존재하는 함수의 콜백함수로 사용할 시, 기존 객체와의 관계성이 제거가된다
// const arr3 =[4,5,6]
// arr3.forEach(obj.logValues)


//객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용시, 해당요소의 부모를 찾아올 수 있도록 하는 방법?!
// const obj1 = {
//  name:"obj1",
//  func: function(){
//   const self = this
//   return function (){
//    console.log(self.name)
//   }
//  }
// }

// const callback = obj1.func()
// setTimeout(callback, 1000);


//위 코드보다 효율적으로 this객체를 사용하는 방법

// const obj1 = {
//  name: "obj1",
//  func: function(){
//  console.log(this.name);
//  }
// }
// setTimeout(obj1.func.bind(obj1), 1000);


// 연속으로 콜백함수 사용시 좋은 방법 1
// (쪼개쓰기)


// let coffeeList = ""

// const addLatte=(name)=>{
//  coffeeList = `,${name}`
//  console.log(coffeeList)
//  setTimeout(addLatte, 500, "카페라떼")
// }

// const addMoca=(name)=>{
//  coffeeList = `,${name}`
//  console.log(coffeeList)
//  setTimeout(addMoca, 500, "카페모카")
// }

// const addEspress=(name)=>{
//  coffeeList = `,${name}`
//  console.log(coffeeList)
//  setTimeout(addAmericano, 500, "아메리카노")
// }
// const addAmericano=(name)=>{
//  coffeeList = `,${name}`
//  console.log(coffeeList)
//  setTimeout(addAmericano, 500, "아메리카노")
// }

// setTimeout(addEspress,500,"에스프레소");



// 연속으로 콜백함수 사용시 좋은 방법 2
// Promise()

new Promise(); //class로 생성된 프로토타입 함수 = 붕어빵 틀

new Promise((resolve)=>{
  setTimeout(()=>{
  const name = "에스프레소"
  console.log(name)
  resolve(name)
  },500)
}).then((prevName)=>{
  return new Promise((resolve)=>{
   setTimeout(()=>{
    const name = `${prevName}카페모카`
    console.log(name)
    resolve(name)
   })
  })
})
.then((prevName)=>{
 return new Promise((resolve)=>{
  setTimeout(()=>{
   const name = `${prevName}카페라떼`
   console.log(name)
   resolve(name)
  })
 })
})



// 연속으로 콜백함수 사용시 좋은 방법 3