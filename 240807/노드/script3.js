//js 현시점의 날짜 정보를 생성해주는 함수

const today = new Date()
const hrs = today.getHours()


const container = document.querySelector(".container")
const newImg = document.createElement("img")

newImg.src = (hrs < 12) ? "./img/morning.jpg" : "./img/afternoon.jpg"

container.appendChild(newImg)