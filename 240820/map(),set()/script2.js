//배열 안에 아이엠이 중복되지않게 가져오는 법

const result = document.querySelector("#result")

const member1 = ["Node","React","html","JAVA"]
const member2 = ["css","javascript","React"]
const member3 = ["javascript","React","html"]

const subjects = [...member1,...member2,...member3]


const resultList = new Set()

subjects.forEach((subject)=>{
 resultList.add(subject)
})
console.log(resultList)

result.innerHTML = 
`<ul>
${[...resultList].map((subject)=> `<li>${subject}</li>` ).join("")}
</ul>`


