const canvas = document.querySelector("canvas")

canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext("2d")
console.log(ctx)

ctx.font = "60px arial"
ctx.fillText("hello",50,70)
ctx.strokeText("hello",50,150)

ctx.font="italic 60px serif"
ctx.fillText("박제한",300,300)

ctx.font = "blod 60px sans-serif"
ctx.fillText("박제한",300,360)

// const img = new Image()
// // img.addEventListener("load",()=>{
// //  ctx.drawImage(img,0,0)
// // })
// img.onload = function(){
//  ctx.drawImage(img,100,50,280,350,160,100,140,175)
// }
// img.src = "./canvasAPI/cat.jpg"

const img = new Image()
img.onload = function(){
ctx.drawImage(img,0,0,canvas.width,canvas.height)
}
img.src = "./canvasAPI/bird.jpg"

ctx.beginPath()
ctx.arc(360,320,200,0,Math.PI * 2,false)
ctx.clip()
