const btn = document.querySelector(".toggle")
const slider = document.querySelector(".slider")


btn.addEventListener("click",()=>{
btn.classList.toggle("active")
slider.classList.toggle("active")
})
