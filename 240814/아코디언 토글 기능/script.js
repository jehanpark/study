const searchBtn = document.querySelector(".fa-magnifying-glass")

const closeBtn = document.querySelector(".close")


searchBtn.addEventListener("click",()=>{
 document.querySelector(".modal").classList.add("active")
})

document.querySelectorAll(".clode section").forEach((item)=>{
 item.addEventListener("click",()=>{
 document.querySelector(".modal").classList.remove("active")
 })
})

//search bar

const searchBar = document.querySelector(".search input[type='text']")
console.log(searchBar)

searchBar.addEventListener("focus",function(){
this.parentElement.nextElementSibling.style.opacity = 1
})

searchBar.addEventListener("blur",function(){
this.parentElement.nextElementSibling.style.opacity = 0
})

//accordion event

const fristContent = document.querySelectorAll(".accordian .content")
fristContent[0].style.display = "block"

const titles = document.querySelectorAll('.title')

titles.forEach((title)=>{
 title.addEventListener("click",()=>{
 document.querySelectorAll(".content").forEach((item)=>{
 item.style.display = "none"
 })

 titles.forEach((otherTitle)=>{
 if(otherTitle !== title) {
  otherTitle.classList.remove("active")
 }
 })

let content = title.nextElementSibling

 if(title.classList.contains("active")){
  title.classList.remove("active")
 }else{
  title.classList.add("active")
  content.style.display="block"
 }
 })
})
