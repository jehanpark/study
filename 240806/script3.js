const inputTxt = document.querySelector("input[type='text']")

const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
 e.preventDefault()
 const word = inputTxt.value
 const count = word.length
 alert(`입력하신 ${word}의 글자수는 ${count}`)
})