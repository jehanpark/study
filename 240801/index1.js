// 사용자로부터 이름과 나이를 전달 받으세요
// 반스시 콜백함수를 통해서 사용자의 값을 활용해 알림창으로 
// 안녕하세요 ..님 나이가..세입니다

// const name = prompt("이름을 입력해주세요")
// const age = prompt("나이를 입력해주세요")

// function userResult(result) {
//  alert(`안녕하세요 ${name}님 나이가 ${age}이시네요!`)
// }

// userResult(name, age)

// function showdata(name,age) {
//  alert(`안녕하세요${name}님 나이가 ${age}이시네요~!~!`)
// }

// function data(callback){
//  const userName = prompt("이름")
//  const userAge = prompt("나이")
//  callback(userName,userAge)
// }

// getdata(showdata)

// function hello(){
//  return"안녕하세요!"
// }
// function bye(){
//  return"안녕히가세요!"
// }


// function userCheck(name,fn){
//  console.log(`${name}님`,fn())
// }

// userCheck("박제한",hello)
// userCheck("홍길동",bye)

const init = () =>{
 return (a,b)=>{
 return a - b > 0? a - b : b - a;
 }
}

console.log(`${init()(30,20)}`)





