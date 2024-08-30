const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.arc(200,150,100,0,Math.PI * 2, true)
ctx.closePath()

ctx.fillStyle = "yellow"
ctx.strokeStyle = "red"
ctx.fill()
ctx.stroke()



