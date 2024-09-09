import { useRef, useReducer, useCallback } from "react";
import "./App.css";
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoItem from "./TodoItem";
import TodoList from "./Todolist";
import TestCopm from "./TestCopm";

  const reducer =(state, action)=>{
    switch(action.type){
      case "create":{
        return [action.newItem, ...state]
      }
      case "update":{
        return state.map((it)=>it.id === action.targetId ? {...it, isDone: !it.isDone} : it)
      }
      case "delete":{
        return state.filter((it)=>it.id !== action.targetId)
      }
      default:
        return state
    }
  }

function App() {

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = useCallback(
   (content)=>{
    dispatch({
      type: "create",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime()
      }
    })
    idRef.current += 1;
  },[]
)
    

  const onUpdate = useCallback(
    (targetId) =>{
    dispatch({
      type:"update",
      targetId,
    })
  },[]
) 

  const onDelete = useCallback(
    (targetId)=>{
    dispatch({
      type:"delete",
      targetId,
    })
  },[]
  )


  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoList todo={todo} onUpdate={onUpdate} onDelet={onDelete}/>
      <TodoEditor />
      <TodoItem />
    </div>
  );
}

export default App;
