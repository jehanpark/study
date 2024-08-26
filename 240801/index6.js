//사용자에게 숫자 1를 받습니다
//단 무조건 1보다 큰 수를 받아야한다
//사용자에게 받은 숫자를 기준으로 1부터 해당숫자까지 수들 가운데 짝수만 찾아서 더한 결과값을 콘솔창에 출력

// const userNum = Number(prompt("숫자를 입력해주세요"))

// let sum = 0

// if (userNum>1 && userNum !== null) {
//  for(let i = 1; i < userNum; i++){
//   if (i % 2 ===1)continue
//   sum += i
//  }
//  console.log(sum)
// }


//사용자로 부터 두개의 숫자를 받습니다 두개이 숫자의 최대 공약수를 찾아서 콘솔창에 출력합니다

//4,12=4

const num1 = Number(prompt("첫번째 숫자를 입력하세요"))
const num2 = Number(prompt("두번째 숫자를 입력하세요"))

function gcdGCD () {
 const max = num1 > num2 ? num1
 :num2
 
 let gcd = 0
 for(let i = 1; i <= max; i++){
  if(num1%i === 0 && num2 % i === 0){
  gcd = i
  } 
 }
 return gcd
}

alert(`${num1}과${num2}의 최대공약수 : ${gcdGCD()}`)
