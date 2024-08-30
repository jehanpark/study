canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext("2d")

//createLinearGradient()
//그라디언트를 적용하는데 있어서 시작점 좌표 x,y 끝나는 지점의 x,y
//그라디언트를 생성할 때 사용할 수 있는 중단점 생성 함수 => addColorStop(어느 비율, 색상)


//createRadialGradient()

// const linGrad = ctx.creatrLinearGradient(0,0,200)
// linGrad.addColorStop(0,"#000")
// linGrad.addColorStop(0.6,"#fff") 
// linGrad.addColorStop(1,"#eee") 
// const linGrad = ctx.creatrLinearGradient(50,60,10,80,90,100)

// linGrad.addColorStop(0,white)
// linGrad.addColorStop(0.4,yellow)
// linGrad.addColorStop(1,orange)
// ctx.beginPath()
// ctx.arc(100,100,80,0,Math.PI * 2,false)
// ctx.fillStyle= "white"
// ctx.fill()

const img = new Image()



img.onload = function(){
 const pattern = ctx.createPattern(img,"repeat")
 ctx.fillStyle = pattern
 ctx.fillRect(0,200,200)
}

img.src = "./canvasAPI/pattern.png"