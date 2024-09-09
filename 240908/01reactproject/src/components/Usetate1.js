import React from 'react'
import { useState } from 'react'

const Usetate1 = () => {

 const [like,setliek] = useState(0);
 const [inputTxt,setinputTxt] = useState("");
 const likeNum = ()=>{
 setliek(like+1)
 }
 const hateNum = ()=>{
  setliek(like-1)
 }

 const inputText =(e)=>{
  setinputTxt(e.target.value)
 }

  return (
    <div>
      <div>{like}</div>
      <button onClick={likeNum}>좋아요</button>
      <button onClick={hateNum}>싫어요</button>

      <div>
       <div>{inputTxt}</div>
       <input onChange={inputText} placeholder='피드입력'/>
      </div>
    </div>
  )
}

export default Usetate1
