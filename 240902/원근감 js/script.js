const imgAll = document.querySelectorAll(".parallax")

const totalNum = imgAll.length;

window.addEventListener("scroll", ()=>{
 let scrollNum = window. scrollY;
 if(scrollNum < 2500) {
  imgAll.forEach((item, index)=>{
   item. style.transform = `translate3d(0, 0, ${scrollNum / (5 * (totalNum- index))}px)`;
  })
 }
})