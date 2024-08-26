//사용자한테 숫자를 받습니다
//사용자한테 받은 숫자가 소수이면 바탕화면에
//"숫자는 소수입니다" 만약 아니라면 "소수가 아닙니다"
//소수=1과 자기 자신만으로 나누어지는 숫자 123571113
const number = Number(prompt("숫자를 입력하세요!~~"))

if (number === 1) {
 document.write ("1은 소수가 아닙니다")
}else if(number === 2){
 document.write ("2는 소수입니다")
}else {
 for(let i = 2; i < number; i++){
  if(nuberm % i === 0){
   document.write(`${number}는 소수가 아닙니다`)
   break
  }else{
   document.write(`${number}는 소수입니다`)
   break
  }
 }
}