const userDataList = [
 {name: "곰", age:18},
 {name: "오랑이", age:27},
 {name: "사자", age:23},
 {name: "얼룩말", age:41},
 {name: "기린", age:56},
]

const buttons = document.querySelectorAll(".button")
console.log(buttons)

const onclickBtn=(e)=>{
 const targetAge = e.target.dataset.age
 const filteredList = userDataList.filter((data)=>data.age >= targetAge)
 up
}

buttons.forEach((button)=>{
 button.addEventListener("click",(e)=>{
  onclickBtn(e)
 })
})
