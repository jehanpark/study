// const displayHello = () => {
//  console.log("hello")
// }

// displayHello()


// const displayHello = async() => {
//  console.log("hello")
// }

// console.log(displayHello())

// async => (함수형태)
//await => 예약어(*특정요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어)
//awit 예약어는 절대로 혼자서 독립적 사용 x
//async 함수 내부에서만 반드시 사용

const whatyourFAvorite = async ()=>{
const fav = "javascript"
return fav
}

const displaySub = async(subject)=>{
  return `hello, ${subject}`
}

const init = async() =>{
 const response = await whatyourFAvorite()
 const result = await displaySub(response)
 console.log(result)
}

init()

