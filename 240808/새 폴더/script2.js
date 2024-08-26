const userAnser = prompt("우리 공부한지","2024-06-14")
const accent =document.querySelector(".accent")
const date100 = document.querySelector("#date100")
const date200 = document.querySelector("#date200")
const date365 = document.querySelector("#date365")
const date500 = document.querySelector("#date500")

const now = new Date()
const firstDay = new Date(userAnser)

const toNow = now.getTime(firstDay)
const toFirst = firstDay.getTime()

const passedTime = toNow - toFirst
const passedDate = Math.round(passedTime / (24*60*60*1000))

console.log(accent)

accent.innerText = `${passedDate}일`

// d-100
let future = toFirst + 100*(24*60*60*1000)
let someday = new Date(future)
let year = someday.getFullYear()
let month = someday.getMonth()+1
let date = someday.getDate()
date100.innerHTML = `${year}년 ${month}월 ${date}일`

// d-200
future = toFirst + 200*(24*60*60*1000)
someday = new Date(future)
year = someday.getFullYear()
month = someday.getMonth()+1
date = someday.getDate()
date200.innerHTML = `${year}년 ${month}월 ${date}일`

// d-365
future = toFirst + 365*(24*60*60*1000)
someday = new Date(future)
year = someday.getFullYear()
month = someday.getMonth()+1
date = someday.getDate()
date365.innerHTML = `${year}년 ${month}월 ${date}일`

// d-500
future = toFirst + 500*(24*60*60*1000)
someday = new Date(future)
year = someday.getFullYear()
month = someday.getMonth()+1
date = someday.getDate()
date500.innerHTML = `${year}년 ${month}월 ${date}일`

//function
calcDate(100)
calcDate(200)
calcDate(365)
calcDate(500)

const calcDate = (days) =>{
 future = toFirst + days*(24*60*60*1000)
 someday = new Date(future)
 year = someday.getFullYear()
 month = someday.getMonth()+1
 date = someday.getDate()
 
 document.querySelector(`${date}days`).innerHTML = `${year}년 ${month}월 ${date}일`
}



