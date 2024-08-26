
add();

console.log("시마이~");

try{
 console.log("시자꾸");
 console.log("실행중!");
 add();
 console.log("시마이~");
//실행시킬 코드
}catch(err){
 //try문을 실행시켰을 때 , 
 //에러사항이 발생될 경우 실행시킬 명령문
 console.log(`오류발생 : ${err.name}`)
}


