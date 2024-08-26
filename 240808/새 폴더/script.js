// const today = new Date();
// const month = today.getMonth()+1;
// const date = today.getDate();
// const day = today.getDay();

// document.write(`<h1>오늘 날짜 정보</h1>`);

const today = new Date()
const year = today.getFullYear()

const lastDate = new Date(year,11,31)
const diffDate = lastDate - today

const result = Math.round(diffDate / (24*60*60*1000)) 
alert(`염동훈님 환갑까지 ${result}남았습니다ㅠ`)