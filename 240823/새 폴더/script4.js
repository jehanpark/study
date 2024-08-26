const order = new Promise((resolve,reject)=>{
const coffee = prompt("어떤 커피를 주문하겠습니까?","아메리카노")

const result = document.querySelector("#result")

if(coffee !== null && coffee !== ""){
result.innerHTML = `${coffee} 주문이 완료되었습니다`
setTimeout(()=>{
resolve(coffee)
},2000)
}else{
 reject("주문이 취소되었습니다")
}
})

const display = (coffee)=>{
 const end = document.querySelector("#end")
 end.innerHTML = `${coffee} 준비완료`
 end.classList.add("active")
 result.classList.add("done")

}

const showErr = ()=>{
 console.log(err)
}

order.then(display).catch(showErr)

console.log(order)

//promise의 단계

//1.pending : 프로미스를 생성하고 실제 실행을 시키기전, 대기상태
//2.fullfiled : 프로미스를 통해서 어떤 실행값 혹은 실행문을 정상적으로 실행시킨 상태

//3.rejected : 프로미스를 통해서 실행하고자 했던 요소를 정상적으로 싱행시키지 못한 상태