import React from 'react'
import { useReducer } from 'react'


 const reducer = (state, action)=>{
  switch(action.type) {
   case "increase":
    return state + action.data;
   case "decrease":
    return state - action.data;
   case "init":
    return 0;
    default:
     return state;
  }
 }

 const TestCopm = () => {

 const [count,dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
       <bold>{count}</bold>
      </div>
      <button onClick={()=> dispatch({type:"init" })}>0으로 초기화</button>
      <button onClick={()=> dispatch({type:"increase", data: 1})}>+</button>
      <button onClick={()=> dispatch({type:"decrease", date: 1})}>-</button>
    </div>
  )
}

export default TestCopm
