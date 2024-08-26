const main = window.document.querySelector("main")

// const profile = document.getElementsById("profile")

// const h1 = main.querySelector("h1")

// const profile = main.querySelector("#profile")

// const desc = document.querySelector("#desc")

// const user = document.querySelectorAll(".user")

// const desc = document.querySelector("#desc")
// const name = document.querySelector(".user").innerHTML
// console.log(name)
// console.log(desc.textContent)

const title = document.querySelector("#title")

title.addEventListener("click",()=>{
 title.innerText = "나의 프로필"
 title.style.background = "#f00"
 title.style.color ="#fff"
})

const pfImg = document.querySelector("#profile img")

pfImg.addEventListener("click", function(){
 this.src = "./dom/pf2.png"
})

const firstP = document.querySelector("#desc > p:first-child")

firstP.addEventListener("click", ()=>{
 firstP.innerHTML = "내이름은 <b>박제한</b>"

})

// const secondP = document.querySelector("#desc > p:nth-child(2)")
// secondP.addEventListener("click",function(){
//  if (this.classList.contains("active")) {
//   this.classList.remove("active")
//  }else{
//  this.classList.add("active")
//  }
// })

// 위 내용보다 더욱 편안한 문법,!를 주고 추가엔 추가, 부정엔 부정이 더욱 편안함
const secondP = document.querySelector("#desc > p:nth-child(2)")
secondP.addEventListener("click",function(){
 // if (!this.classList.contains("active")) {
 //  this.classList.add("active")
 // }else{
 //  this.classList.remove("active")
 // }
 this.classList.toggle("active")
})

// 위함수를 this객채로 작성
// title.addEventListener("click",function(){
//  this.innerText = "나의 프로필"
// })



// console.log([user.length-1])

// user.forEach((item)=>{
//  item.addEventListener("cilck",()=>{
//   console.log("click")
//  })
// })

//유사배열
//99%배열이 가직 있는 속성
//유사배열은 배여로가 다른 1%

//쿼리셀렉터는 반드시 앞에 도큐먼트가 있어야함