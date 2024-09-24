import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import DiaryItem from './DiaryItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

 const Wrapper = styled.div`
 
 `

 const DiaryContents = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 20px 0 30px;
 gap: 10px;

 `

 const LeftContent = styled.div`
  flex: 1;
 `

 const RightContent = styled.div`
  flex: 3;
  & button {
  width: 100%;
  }
 `

 const Select = styled.select`
 background: #ececec;
 width: 100%;
 border: none;
 border-radius: 5px;
 height: 100%;
 padding: 10px 20px;
 cursor: pointer;
 font-size: 18px;
 font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
 `

 const ListContents = styled.div`
 
 `

 const sortOptionList=[
  {value: "latest", name:"최신순"},
  {value: "oldest", name:"오래된 순"},
 ];

 

const DiaryList = ({data}) => {

 const [sortType, setsortType] = useState("latest");
 const [sortedData, setsortedData] = useState([]);
 const navigate = useNavigate()
 useEffect(()=>{
  const compare = (a, b) => {
   if(sortType === "latest"){
    return Number(b.date) - Number(a.date)
   }else{
    return Number(a.date) - Number(b.date)
   }
  }
  const copyList = JSON.parse(JSON.stringify(data));
  copyList.sort(compare)
  setsortedData(copyList)
  data.sort(compare)

 },[data, sortType])
 const onChangesortType = (e) => {
  setsortType(e.target.value)
 }
 const onClickNew = ()=>{
  navigate("/new");
 }

  return (
  <Wrapper>
     <DiaryContents>
      <LeftContent>
       <Select value={sortType} onChange={onChangesortType}>
        {sortOptionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
       </Select>
      </LeftContent>
      <RightContent>
       <Button text={"새 일기쓰기"} onClick={onClickNew}/>
      </RightContent>
     </DiaryContents>
     <ListContents>
      {sortedData.map((it) => (<DiaryItem key={it.id} {...it}/>))}
     </ListContents>
  </Wrapper>
  )
}

export default DiaryList
