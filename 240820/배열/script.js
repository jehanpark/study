const txtArea = document.querySelector(".txtArea")
const result = document.querySelector(".result")

const userDataList = [
{id : 123, name: "곰"},
{id : 1021, name: "사자"},
{id : 6021, name: "호랑이"},
]

const findUser = (searchId) =>{
 const targetData = userDataList.find((data)=>data.id === searchId)

if(targetData == undefined || targetData === null){
 result.innerHTML = "유저검색결과 없음"
}

 result.innerHTML = targetData.name
}

txtArea.addEventListener("keyup",(e)=>{

 const searchId = e.target.value

if (isNaN(e.target.value)) result.innerText = "숫자가 아닙니다"

findUser(searchId)
})