import React from 'react'
import { useState } from 'react'

const Agetest = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const inputAge = (e) => setInput(e.target.value); // 입력 필드 값 상태 업데이트

  const handleButtonClick = () => {
    const age = parseInt(input, 10); // 입력된 값을 정수로 변환
    const newMessage = 
      !input ? "" : // 입력이 비어있으면 빈 문자열
      isNaN(age) ? "숫자를 입력해주세요." : // 입력이 숫자가 아니면 오류 메시지
      age <= 19 ? "미성년자입니다" : "성인인증되었습니다"; // 입력된 나이에 따라 메시지 설정
    
    setMessage(newMessage);
  };

  return (
    <div>
      <input 
        onChange={inputAge} 
        placeholder='나이 입력' 
        value={input} 
      />
      <button onClick={handleButtonClick}>확인</button>
      <div>{message}</div>
    </div>
  );
};

export default Agetest;



// const Exagetest = () => {

//  const [age,setage] =useState("");
//  const [message,setmessage] = useState("")
//  const submitAge =(e)=>{
//   const inputAge =e.target.value
//   setage(inputAge)

//   if (inputAge !=="") {
//    const resultmessage= inputAge <= 19 ? "미성년자입니다" : "성인인증이 완료되었습니다";
//    setmessage(resultmessage)
//   }else{
//    setmessage("")
//   }
//  }

 

//   return (
//     <div>
//      <div>{age}</div>
//      {message && <div>{message}</div>}
//       <input 
//       onChange={submitAge}
//        placeholder='나이를 입력하세요'/>
//     </div>
//   )
// }

// export default Exagetest
