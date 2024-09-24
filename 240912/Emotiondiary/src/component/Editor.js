import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Button1 from "./Button1";
import EmotionItem from "./EmotionItem";
import { getFormattedDate, emotionList } from "../util";
const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 22px;
  }
`;
const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  background: #ECECEC;
  font-family: "Nanum Pen Script", cursive;
  width: 93%;
  min-height: 200px;
  resize: none;
`;
const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 20px;
  background: #ECECEC;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;
const Buttongroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;
const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);
  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <div>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <Emotiongroup>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <div>
          <Textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </EditorSection>
      <Buttongroup>
        <Button1 text={"취소하기"} onClick={handleGoBack} />
        <Button1 text={"작성완료"} type={"positive"} onClick={handleSubmit} />
      </Buttongroup>
    </div>
  );
};
export default Editor;