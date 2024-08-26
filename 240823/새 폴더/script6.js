// const xhr = new XMLHttpRequest()
// xhr.open("GET","student6.json")
// xhr.send()

// const renderHTML = (students)=>{
//  let output = "";
//  for(let student of students){
//   output += `
//   <h2>${student.name}</h2>
//   <ul>
//   <li>전공: ${student.major}</li>
//   <li>학년: ${student.grade}</li>
//   </ul>
//   `
//  }
//  document.querySelector("#result").innerHTML = output;
// }

// xhr.onreadystatechange=()=>{
//  if(xhr.readyState === 4 && xhr.status ===200){
//   const students = JSON.parse(xhr.responseText)
//   renderHTML(students)
//  }
// }

//json 패치함수 사용방법

fetch("student6.json")
.then(response => response.json())
.then(json=>{
 let output = ""
 json.forEach(item => {
  output += `
  <h2>${item.name}</h2>
 <ul>
 <li>전공: ${item.major}</li>
 <li>학년: ${item.grade}</li>
 </ul>
  `
 });
 document.querySelector("#result").innerHTML = output
}).catch((err) => console.log(err))