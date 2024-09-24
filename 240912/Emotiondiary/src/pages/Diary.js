import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useDiary from '../hooks/useDiary';
import Header from '../component/Header';
import Button from '../component/Button';
import Viewer from '../component/Viewer';
import { getFormattedDate, setpageTitle } from '../util';

const Diary = () => {
  useEffect(()=>{
    setpageTitle(`${id} Diary`)
  },[])
  const {id}= useParams()
  const data = useDiary(id);
  const navigate = useNavigate();

  if (!data) {
    return <div>일기를 불러오고있습니다..</div>
  }else{
    
    const goBack = () => {
      navigate(-1)
    }
    const goEdit = () => {
      navigate(`/edit/${id}`)
    }

    const {date, emotionId, content} = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`
    return ( 
   <div>
    <Header 
    leftChlid={<Button text={"뒤로가기"} onClick={goBack}/>} 
    rightChlid={<Button text={"수정하기"} onClick={goEdit}/>} 
    title={title}/>
    <Viewer content={content} emotionId={emotionId}/>
    </div>
    )
  }
}

export default Diary
