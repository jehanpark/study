//함수 선언
//함수의 매개변수는 반드시 필요하지는 않음
// 함수를 호출할 때 매개변수의 자리에 
// 값을 넣고자한다면 , 인수 혹은 인자값을 삽입

// function calcSum() {
//  let sum = 0;
//  for (let i = 1; i <= 10; i++)
//   sum += i;
// }
// console.log(`1부터 10까지 더하면 
//  ${sum}`);

// calcSum();

//익명함수

// const calcSum = function(){
//   let sum = 0;
//  for (let i = 1; i <= 10; i++)
//   sum += i;

// console.log(`1부터 10까지 더하면 
//  ${sum}`);
// }
//  calcSum()




//화살표(=>:화살표 모양이 function키워드를 대체할 수 있도록)함수

// const calcSum = ()=>{
//  let sum = 0;
//  for (let i = 1; i <= 10; i++)
//   sum += i;
// console.log(`1부터 10까지 더하면 
//  ${sum}`);

// }

// function sum(a,b) {
//  const result = a+b
//  alert(`두 수의 합은 ${result}입니다`)
// }

// sum(1,2)

// const num = Number(prompt("숫자를 입력하세요"))

// function calcSum(n){
//  let sum = 0
//  for (let i = 1; i <=n; i++) {
//   sum += i;
//  }
//  return sum
// }



// alert(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다`)




//올리브영 
//회원가입=>
 // 이름,나이,피부타입(피부타입은 옵션)
//마지막 요소에 값을 하나 넣어줌

function muliple(a,b,c="복합성"){
 console.log(a+b+c)
}

muliple(2,4)



// 콜백함수
document.body.innerHTML += `<button id="btn">click !</button>`

const button = document.querySelector("#btn")

function display() {
 alert("클릭했습니다")
}

button.addEventListener("click",display)