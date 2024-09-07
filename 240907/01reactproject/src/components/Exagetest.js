import React from 'react'
import { useState } from 'react'

const Exagetest = () => {

 const [age,setage] =useState("");
 const [message,setmessage] = useState("")
 const submitAge =(e)=>{
  const inputAge =e.target.value
  setage(inputAge)

  if (inputAge !=="") {
   const message= inputAge <= 19 ? "미성년자입니다" : "성인인증이 완료되었습니다";
   setmessage(message)
  }else{
   setmessage("")
  }
 }

 

  return (
    <div>
     <div>{age}</div>
     {message && <div>{message}</div>}
      <input 
      onChange={submitAge}
       placeholder='나이를 입력하세요'/>
    </div>
  )
}

export default Exagetest
