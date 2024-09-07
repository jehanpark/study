import React from 'react'
import { useState } from 'react'
import "./Main.css"

const Main = () => {
 const username = (e) =>{
  console.log(e.target.value)
 }

 const [name, setName] = useState("박예림")
 function txtclick() {
   setName( name === "박예림" ? "박제한" : "박예림")
 }

  return (
    <div className='mainAll'>
<div className='mainContents'>
<div className='maindesc'>
       <div className='mainImg'>
       </div>
<div className='txtAll'>
 <div className='mainTxt'>안녕하세요 <br/>
 asdfsfsfdfs 
 </div>
 <input 
 onChange={username}
 className='input' 
 placeholder='안녕'/>
 <div>{name}</div>
 <button className='btn' 
 onClick={txtclick}>
  등록
  </button>
 </div>
</div>
</div>
      
    </div>
  )
}

export default Main
