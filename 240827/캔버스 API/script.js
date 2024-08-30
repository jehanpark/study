const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

// ctx.fillStyle = "rgb(200, 0, 0)"
// ctx.fillRect(10, 10, 50, 100)
// ctx.strokeStyle = "rgb(0,0,0)"
// console.log(ctx)

//canvas 는 호도법을쓴다

// 3.14는 180도 = 파이

//fillRext(x,y,width,height) : 사각형 요소의 색상을 채워줄 수 있도록 하는 함수

//strokeReact(x,y,width,height) : 사각혁 아웃라인 선을 그려주도록하는 함수

//clearRect(x,y,width,height) : 사각형 형태의 특정 요소만큼을 지우고자할 때 사용하는 함수

// 사각형을 만들고자할 때 사용할 수 있는 속성

// fillStyle = "색상" : 해당도형의 색상을 채울 때 사용할 수 있는 속성

// strokeStyle = "색상" : 해당 도형의 외곽선의 색상을 지정하고자할 때 사용할 수 있는 속성

// 삼각형을 만들 때에는
// 도형 드로인 선언
// beginPath()
// 경로정의
// 직선경로 : lineTo(x,y)
// 실제 경로가 그려지도록하는 함수 stroke()
// 해당 경로사이에 채색 함수 fill()
// closePath()=> 어떤 도형을 그릴 것인가에 대한 경로 드로잉 종료 선언
// 외곽선 페인팅 & 내부 도형 채색

// 위치 좌표값을 세팅하거나 이동하고자 할때 : moveTo(x,y)

// ctx.beginPath()
// ctx.moveTo(50,50)
// ctx.lineTo(200,200)
// ctx.stroke()


ctx.beginPath
ctx.moveTo(50,50)