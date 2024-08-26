const container = document.querySelector(".container")
const newP = document.createElement("p")
const textNode = document.createTextNode("Typrscript")


const newP02 = document.createElement("p")
const textNode02 = document.createTextNode("React.js")

newP02.appendChild(textNode02)
newP.appendChild(textNode)

const basesNode = document.querySelectorAll("p")[1]

container.insertBefore(newP02,basesNode)

// const target = document.querySelectorAll("p")[0]

// target.addEventListener("click",function(){
//  this.remove()
// })

const items = document.querySelectorAll("p")
items.forEach((item)=>{
 item.addEventListener("click",function(){
  this.parentNode.removeChild(this)
 })
})