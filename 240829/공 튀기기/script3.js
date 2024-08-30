const canvas = document.querySelector("canvas");
const button = document.querySelector("button")
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle ="pink"
ctx.fillRect(100,100,100,100)

ctx.globalCompositeOperation = "source-in"
ctx.globalCompositeOperation = "source-out"
ctx.globalCompositeOperation = "source-atop"

ctx.fillStyle = "#222"
ctx.beginPath()
ctx.arc(100,120,50,0,Math.PI * 2,false)
ctx.fill()

//destination : 먼저그려진 도형 source : 나중에 그려진 도형
//겹쳐저있는 도형 요소들의 그래픽 작업 : 
//globalCompositeOperation = 속석

//source-in 교집합만 살리기
//source-out 교집합의 반대만 살리기
