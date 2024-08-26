const subject = prompt("신청할 과목을 선택하세요", "1-html, 2-css, 3-js")

if (subject !==null) {
 switch (subject) {
  case "1": alert("HTML을 신청하셨습니다")
  break;
  case "2": alert("CSS을 신청하셨습니다")
  break;
  case "3": alert("JS을 신청하셨습니다")
  break;
   
  default: alert("다시 입력 바랍니다~")
  
 }
}