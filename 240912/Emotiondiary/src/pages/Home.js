import React from "react";
import Editor from "../component/Editor";
import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setpageTitle } from "../util";

const Home = () => {
  const [pivotDate, setpivotDate] = useState(new Date());
  const [filteredData, setfilteredData] = useState([]);
  const data = useContext(DiaryStateContext);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setfilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setfilteredData([]);
    }
  }, [data, pivotDate]);
  useEffect(()=>{
    setpageTitle("제한의 메인페이지")
  },[])

  const onIncreaseMonth = () => {
    setpivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setpivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const headertitle = `${pivotDate.getFullYear()} 년 ${
    pivotDate.getMonth() + 1
  }월`;

  return (
    <div>
      <Header
        leftChlid={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headertitle}
        rightChlid={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};
export default Home;
