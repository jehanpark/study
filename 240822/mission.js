// const url = "https://reqres.in/api/products/10"
const xhr = new XMLHttpRequest()
const result = document.querySelector(".result")
console.log(result)

xhr.open("GET","mission.json");
xhr.send();

xhr.onreadystatechange = function(){
 if(xhr.readyState === 4 && xhr.status === 200){
  const mission = JSON.parse(xhr.responseText)
  const infoimg = document.querySelector(".infoimg")

  result.innerHTML = 
` <p>상품명 : ${mission.data.name}</p>
  <p>생산년도 : ${mission.data.year}</p>
  <p>생산년도 : ${mission.data.color}</p>
  `
  infoimg.innerHTML =
  `<div>${mission.support.text}</div>`
 }
}