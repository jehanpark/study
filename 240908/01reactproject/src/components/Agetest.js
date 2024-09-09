import React, { useState } from 'react';

const Agetest = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const inputAge = (e) => {
    setInput(e.target.value); // 입력 필드 값 상태 업데이트
  };

  const handleButtonClick = () => {
    if (input !== "") {
      const age = parseInt(input, 10); // 입력된 값을 정수로 변환
      if (!isNaN(age)) {
        setMessage(age <= 19 ? "미성년자입니다" : "성인인증되었습니다");
      } else {
        setMessage("숫자를 입력해주세요.");
      }
    } else {
      setMessage("");
    }
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
