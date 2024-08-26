const openButton = document.querySelector("#open")
const modalBox = document.querySelector("#modal")

openButton.addEventListener("click",function(){
 openButton.classList.add("btnActive")
 modalBox.classList.add("active")
})

const closeButton = modalBox.querySelector("#profile > button")
console.log()

closeButton.addEventListener("click",function(){
 openButton.classList.remove("btnActive")
 modalBox.classList.remove("active")
})

