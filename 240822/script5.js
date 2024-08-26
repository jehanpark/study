const form = document.querySelector("form")
const input = document.querySelector("#usernumber")

form.addEventListener("submit",(e)=>{
e.preventDefault()

const value = input.value

try{
if(value === "" || isNaN(value)) throw "숫자를 입력하세요!"
value = Number(value)

if(value <= 10)document.querySelector("#result").innerHTML = value

if(value > 10) throw "10보다 작은 수를 입력하세요"

}catch(err){
alert(err)

}finally{
 input.value=""
}

})