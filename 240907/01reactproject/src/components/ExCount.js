import React from 'react'
import { useState } from 'react'

const ExCount = () => {

 const [count,setcount] = useState(0);
 const pluslike = ()=>{
  setcount(count+1);
 }
 const miuselike =()=>{
  setcount(count-1)
 }

  return (
    <div>
     <div>{count}</div>
     <button onClick={pluslike}>증가버튼</button>
     <button onClick={miuselike}>감소버튼</button>
    </div>
  )
}

export default ExCount
