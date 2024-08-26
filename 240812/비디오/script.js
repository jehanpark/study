const itmes = document.querySelectorAll("article")
const aside = document.querySelector("aside")
const close = document.querySelector("span")
console.log(aside,close)

itmes.forEach((item)=>{
item.addEventListener("mouseenter",(e)=>{
e.currentTarget.querySelector("video").play()
})

item.addEventListener("mouseleave",(e)=>{
 e.currentTarget.querySelector("video").pause()
})

item.addEventListener("click",(e)=>{
let tit = e.currentTarget.querySelector("h2").innerText
let txt = e.currentTarget.querySelector("p")
let vidSrc = e.currentTarget.querySelector("video").getAttribute("src")

aside.querySelector("h1").innerHTML = tit
aside.querySelector("p").innerHTML = txt
aside.querySelector("video").setAttribute("src",vidSrc)

aside.querySelector("video").play()
aside.classList.add("on")
})
})