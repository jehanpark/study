import React from "react"
import"./Body.css"

const Body = ({name,location,favorlist}) => {
 const numberA = 100
 const numberB = 200

 const strA = "박제한"
 const strB = "jehanpark"
 const result = strA + strB

 const boolA = "원숭이"
 const boolB = "공룡"
 
 //UI 출력부
  return (
   <div className="body">
    <h1>
     {name}은 {location}에 거주하고있습니다 <br/>{favorlist.length}개의 스포츠를 좋아합니다
     </h1>
      <h1>body🐒</h1>
      <h2>{numberA + numberB}</h2>
      <h2>{result}</h2>
      <h2>{String(boolA || boolB) }</h2>
      <h2>{numberA}는 {numberA % 2 === 0 ? "짝수" : "홀수"}</h2>
    </div>
  )
 }

 Body.defaultProps = {
  favorlist: [],
 }

export default Body
