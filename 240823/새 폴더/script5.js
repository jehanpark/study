// const step1 =()=>{
// setTimeout(()=>{
// console.log("피자 도우 준비")
// },2000)
// }

// const step2 = (callback)=>{
//  setTimeout(()=>{
//  console.log("토핑완료")
//  },2000)
// }
// const step3 = (callback)=>{
//  setTimeout(()=>{
//  console.log("굽기완료")
//  },2000)
// }

// console.log("피자를 주문합니다")

// step1(()=>{
//  step2(()=>{
//   step3(()=>{
//   console.log("피자가 준비되었습니다!")
//  })
// })
// })

const pizza = ()=>{
 return new Promise((resolve,reject)=>{
 resolve("피자를 주문합니다!")
 })
}

const step1 = (message)=>{
console.log(message)
return new Promise((resolve,reject)=>{
 setTimeout(()=>{
 resolve("피자 도우 준비중")
 },2000)
})
}
const step2 = (message)=>{
 console.log(message)
 return new Promise((resolve,reject)=>{
 resolve("토핑준비중")
 },2000)
}
const step3 = (message)=>{
 console.log(message)
 return new Promise((resolve,reject)=>{
 resolve("굽기 완료")
 },2000)
}



// pizza().
// then((result)=>step1(result)).
// then((result2)=>step2(result2)).
// then((result3)=>step3(result3))
// .then((result)=>console.log(result))
// .then(()=>console.log("피자가 준비되었습니다"))


pizza().
then(step1).
then(step2).
then(step3).
then(console.log).
then(()=>console.log("피자가 준비되었습니다"))

