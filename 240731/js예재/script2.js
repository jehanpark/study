//아래 id 및 pw 는 a사용자의 id & pw입니다

const id = "ezen"
const pw = 1234

const userId = prompt("아이디를 입력하세요")


if (userId == id) {
 const userPw =Number(prompt("비밀번호를 입력하세요"))
 if (pw == userPw) {
  alert(`${id}님 로그인되었습니다😊`)
 }else{
  alert("비밀번호가 일치하지 않습니다")
  // 처음으로 돌아가는 함수
location.reload()
 }
 }
else{
 alert("아이디가 일치하지 않습니다😢")
}