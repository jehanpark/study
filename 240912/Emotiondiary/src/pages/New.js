import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { setpageTitle } from "../util";

const New = () => {
  useEffect(()=>{
    setpageTitle("일기작성하기")
  },[])
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        title={"훈동님의 새 일기쓰기"}
        rightChild={<Button text={"Home"} onClick={goHome} type={"positive"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;