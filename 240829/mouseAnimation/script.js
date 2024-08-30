const cursorItem = document.querySelector(".cursorItem");
const circle = document.querySelector(".circle");
console.log(circle)
const btnAll = document.querySelectorAll("a")

window.addEventListener("mousemove",(e)=>{
 let x = e.pageX;
 let y = e.pageY;
 

 cursorItem.style.transform = `translate(${x}px, ${y}px)`
})

btnAll.forEach(()=>{
cursorItem.addEventListener("mouseenter",()=>{
 circle.style.transform = "scale(0.3)"
})
cursorItem.addEventListener("mouseleave",()=>{
 circle.style.transform = "scale(1)"
})
})