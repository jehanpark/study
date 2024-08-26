const anser = prompt("시작일을 입력하세요","1998-01-23")
const result = document.querySelector(".day")

const today = new Date()
const startDay = new Date(anser)

const passedTime = today.getTime() - startDay.getTime()
const passedDate = Math.round(passedTime / (24*60*60*1000))
console.log(passedDate)

result.innerHTML = `${passedDate}일이야🙂`




