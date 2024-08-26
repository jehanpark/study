//기존callback 함수의 단점을 최소화하고자 나온 첫번째 대안 promise

//promise = 약속

//callback 함수 중 가운데 어떤 요소라도 1개만 에러가 발생되는 경우 , 연결되어있는 다른 callback함수 실행에도 영향을 미친다

//그런데 만약 callback 함수가 많이 연결되어있는 경우에는 어떤 callback 함수에서 에러가 발생되었는지 서칭 && 디버깅 하기가 매우 힘들다!

//생성자함수 혹은 클래스를 통해서 탄생된 프로토타입
const likepizza = true

//제작코드영역
const pizza = new Promise((resolve, reject)=>{
if(likepizza) resolve("피자를 주문합니다");
 else reject("주문이 취소되었습니다");
})

pizza.then((result)=>console.log(result)).
catch((err)=>console.log(err)).finally(()=>console.log("완료"))





