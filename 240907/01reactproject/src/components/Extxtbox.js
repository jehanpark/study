import React from 'react'
import { useState } from 'react'


const Extxtbox = () => {

 const [userTxt,setuserTxt] = useState("내용입력")
 const usermemo =(e)=>{
  setuserTxt(e.target.value)
 }


  return (
    <div>
     <div>{userTxt}</div>
      <input onChange={usermemo} placeholder='피드를 작성하세요'/>
    </div>
  )
}

export default Extxtbox
