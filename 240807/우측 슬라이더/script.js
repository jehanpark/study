const btn = document.querySelector(".toggle")
const slider = document.querySelector(".slider")

btn.addEventListener("click",function(){
 btn.classList.toggle("active")
 slider.classList.toggle("active")
})
