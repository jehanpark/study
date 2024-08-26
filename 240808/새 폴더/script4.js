const name = document.querySelector(".name")
const dep = document.querySelector(".dep")

const output = document.querySelector("output")

const form = document.querySelector(".form")
const btn = document.querySelector(".btn")

form.addEventListener("submit",(e)=>{
e.preventDefault()
if (name.value==="" || dep.value ==="") {
 alert("정사적인 데이터를 입력하세요")
}

const tbody = document.createElement("tbody")
const newtr = document.createElement("tr")
const nameTd = document.createElement("td")
nameTd.innerHTML = name.value
name.value=""



output.appendChild(nameTd)
tbody.appendChild(newtr)
})

