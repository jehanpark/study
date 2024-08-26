const birthYear = document.querySelector("#year")
const birthMonth = document.querySelector("#month")
const birthdate = document.querySelector("#date")
const form = document.querySelector("form")

const current = document.querySelector("#current")
const today = new Date()
const currentYear =  today.getFullYear()
const currentMonth = today.getMonth() +1
const currentDate = today.getDate()

current.innerHTML=`오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}입니다 :)`



form.addEventListener("submit",(e)=>{
 e.preventDefault()
 const birthDay = new Date(birthYear.value,birthMonth.value-1,birthdate.value)

const passed = today.getTime() - birthDay.getTime()
const passedDays = Math.floor(passed / (24 * 60* 60* 1000))
const passedHours = Math.floor(passed / (60* 60* 1000))
const passedAges = Math.round(passedDays / 365)

const resultDays = document.querySelector("#days")
const resultHours = document.querySelector("#hours")

resultDays.innerHTML = `현재 나이는 ${passedAges}세`
resultHours.innerHTML = `현재까지 ${passedHours}의 시간이 흘렀습니다!`
})