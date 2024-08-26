

const userAnser = prompt("러닝을 처음 시작한 날짜를 입력하세요","2024-08-05")
const result=document.querySelector(".day")

const now = new Date()

const startDay = new Date(userAnser)

const passedTime = now.getTime() -startDay.getTime()

const passedDate = Math.round(passedTime / (24*60*60*1000))

result.innerHTML= passedDate