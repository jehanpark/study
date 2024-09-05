import React,{useEffect} from 'react'

const Even = () => {
 useEffect((Even)=>{
  return()=>{
   console.log("unmount 되었습니다")
  }
 })
  return (
    <div>
      현재 카운트는 짝수 입니다
    </div>
  )
}

export default Even
