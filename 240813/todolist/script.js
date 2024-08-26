//사용자로부터 인풋태그를 통해 입력값을 받는다 
//입력값이 확인되면 ul태그 자식요소로 하나씩 추가해준다
//ul태그 자식요소는 삭제를 눌렀을 때 버튼을 포함하고 있는 부모요소를 확인후 같이 삭제해준다
//사용자가 입력한 값이 영구적으로 보관될 수 있도록 localstorage 를 활용해서 값을 저장시킨다
//사용자가 값을 입력하면 UI로 출력되는 것이 아니라 localstorage안에 저장된 값을 찾아와서 ui화면에 출력시키도록 한다
//삭제를 누르면 ui화면 값을 삭제하는것이 아니라 localstorage 값을 먼저 삭제후 없데이트 된 값을 ui 화면에 출력시킨다

const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
const ul = document.querySelector("ul")

let todos=[]

const save = ()=>{
 localStorage.setItem(`todos`,JSON.stringify(todos))
}

const delItem = (e)=>{
 const target = e.target.parentElement
 target.remove()
 todos = todos.filter((todo)=>todo.id != target.id)
 save()
 target.remove()
}

const additem = (todo)=>{
 if(todo.text !== ""){

  const li = document.createElement("li")
  const span = document.createElement("span")
  const button = document.createElement("button")
  
  
  span.innerHTML = todo.text
  button.innerHTML = `삭제`
  button.addEventListener("click",delItem)

  li.appendChild(span)
  li.appendChild(button)
  ul.appendChild(li)
  li.id = todo.id
 }
 
}

const handler = (e)=>{
 e.preventDefault()

 const todo = {
  id: Date.now(),
  text: input.value,
 }
 
 todos.push(todo)
 additem(todo)
 save()
 input.value = ""
}

const init = ()=>{
 const userTodos = JSON.parse(localStorage.getItem(`todos`))
 userTodos.forEach((todo)=>{
 additem(todo)
 })

 todos =userTodos
}
init()
form.addEventListener("submit",handler)

console.log(todos)

//로컬스토리지

//세션스토리지 : 임시 기억

//로컬 스토리지 데이터를 저장하는 방법
localStorage.setItem("hello","word")
const myData = localStorage.getItem("hello")


//로컬 스토리지 데이터를 가져오는 방법

//로컬 스토리지 데이터를 삭제하는 방법