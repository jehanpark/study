const btn = document.querySelector(".btn")
console.log(btn)

const info = document.querySelector
(".product_info")

btn.addEventListener("click", ()=>{
 console.log("click");
 info.classList.toggle("active");
// info.classList.remove("active")
})