//로컬스토리지 저장공간
//setItem(key,value) 키를정의하고 키에 매칭되는 밸류값을 정의한 후 저장
//getItem(key)저장된값을 찾아올때
//removeItem(key)
//clear()원본데이터를 날린다,..?쉽지않은 명령어
//localStorage.위에 함수
//json의 형태로가져오기위해서는 문자열로 바구ㅝ줘야한다

let local = ["kim","lee","park"]
localStorage.setItem("local",JSON.stringify(local))
// localStorage.setItem("local",local)

let localdata 

if(localStorage.getItem("local")===null) localdata = []
else localdata = JSON.parse(localStorage.getItem("local"))
localStorage.setItem("local",JSON.stringify(local))

localdata.push("jehan")


console.log(localdata)