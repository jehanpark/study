const trigger = document.querySelector(".trigger")
trigger.addEventListener("click",()=>{
 trigger.classList.toggle("active")
 document.querySelector("modal-gnb").classList.toggle("active")
})