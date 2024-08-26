//각 텍스트에 마우스를 올린다 > 텍스트에 마우스가 올라갈때마다 이미지가 변경된다 (노드를 찾아와서 출력하고있는 이미지 확인)> 마우스가 텍스트를 떠나면 원래로 돌아온다

//쿼리셀렉터올로 찾아온다
// 포이츠사용
// 에드이벤트리스너
// 마우스오버 or 마우스 엔터
// 마우스아웃 or 마우스 리브

const liItems=document.querySelectorAll("li")
console.log(liItems)

const photo = document.querySelector(".photo")

liItems.forEach((liItems,index)=>{
 liItems.addEventListener("mouseenter",function(){
  let changeImage = this.getAttribute("data-image")
  photo.style.backgroundImage = `url("${changeImage}")`
 })

 liItems.addEventListener("mouseleave",function(){
  photo.style.backgroundImage = ``
 })
})


