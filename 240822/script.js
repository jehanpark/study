const xhr = new XMLHttpRequest()
const result = document.querySelector("#result")

xhr.open("GET","student.json")
xhr.send()

xhr.onreadystatechange = function() {
 if(xhr.readyState === 4 && xhr.status === 200) {
  const students = JSON.parse(xhr.responseText)
  result.innerHTML=`${students.name}은${students.major}학과의${students.grade}학년입니다`
 }
}