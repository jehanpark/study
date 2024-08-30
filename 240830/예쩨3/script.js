const imageAll = document.querySelector(".imageWrap .parallax")
const subpageImg = document.querySelector(".subPage .parallax")

const totalNum = imageAll.length
let x = 0;
let targetX = 0;
const speed = 0.1;

let scrollNum = 0
window.addEventListener("scroll",()=>{
 scrollNum = window.scrollY

 imageAll.forEach((image, i)=>{
  if(index < 4){
   image.style.transform = `translateY(${(scrollNum / 3)* (10-index)})`
  }
 })
})

window.addEventListener("mousemove",(e)=>{
 x = e.pageX - window.innerWidth / 2;

})

const loop = ()=>{
 targetX += (x - targetX) * speed;

 imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 50}px,
  ${(-scrollNum / 2*(tatalNum - 4))}`;
 imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 100}px)`;
 subpageImg.style.transform = `scale(1.1) translate(${-targetX / 20}px)`;

window.requestAnimationFrame(loop);
};

loop();