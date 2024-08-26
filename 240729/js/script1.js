//사용자에게 화씨온도를 받아서 섭씨온도로 변환했을때의 값을 출력해주세요

const fah = parseFloat(prompt ("사용자의 온도를 체크해주세요" ,"ex.37"))

const cel = ((fah - 32) / 1.8).toFixed

// console.log(cel)

prompt(`화씨온도${fah}도는 섭씨온도${cel}도 입니다~`)

