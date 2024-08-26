const form = document.querySelector("form")


const number = document.querySelector("#number")
const number02 = document.querySelector("#number02")

const result = document.querySelector("#result")


form.addEventListener("submit",(e)=>{
e.preventDefault()


let winner = ""
let pickedNumbers=[]

for (let i = 0; i < number02.value; i++) {

 do {
  picked= Math.floor(Math.random() * number.value)+1
 } while (pickedNumbers.includes(picked));
 let picked

 pickedNumbers.push(picked)
 winner += `${picked}번`
}

result.innerHTML=`당첨자 : ${winner}`
})


