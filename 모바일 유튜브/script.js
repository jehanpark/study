//스티키 이벤트

window.addEventListener("scroll",()=>{
 const hashList = document.querySelector(".hashlist")
 const scrollY = window.scrollY
if (scrollY > 300) {
 hashList.classList.add("active")
}else{
 hashList.classList.remove("active")
}
})

//터치 이벤트
const hashContent = document.querySelector(".hashcontent")
const listClientWidth = hashContent.clientWidth
const listScrollWidth = hashContent.clientWidth

//최초 터치 및 마우스 다운 지점
let startX= 0

//연재 이동중인 지점
let nowX= 0

//터치 종료 지점
const endX = 0

//두번째 터치 지점
let listX = 0

//손가락으로 찍은 지점 인식 함수
const getClientX = (e)=>{
 return e.touches ? e.touches[0].clientX :e.cientX
}

const getTranslateX = () =>{
return parseInt(getCumputedStyle(hashContent).transform.split(/[^\-0-9]+/g)) 
}

const setTranslateX=(x)=>{
 hashContent.computedStyleMap.transform = `translateX(${x}px)`
}

const onScrollmove = (e)=>{
 nowX = getClientX(e)
 setTranslateX(listX + nowX - startX)
}

const onScrollEnd = (e)=>{
 endX = getClientX(e)
 listX = getTranslateX()
 if (listX>0) {
  setTranslateX(0)
  hashContent.computedStyleMap.transition=`all 0.1s ease`
  listX = 0
 }else if(listX < listClientWidth - listScrollWidth) {
  setTranslateX(listClientWidth - listScrollWidth)
  hashContent.computedStyleMap.transition=`all 0.1s ease`
  listX = listClientWidth - listScrollWidth
 }
 window.removeEventListener("touchmove", onScrollmove)
 window.removeEventListener("mousemove", onScrollmove)
 window.removeEventListener("touchend", onScrollmove)
 window.removeEventListener("mouseup", onScrollmove)
 hashContent.removeEventListener("touchstart",onScrollStart)
hashContent.removeEventListener("mousedown",onScrollStart)
}


const onScrollStart =(e)=>{
 startX = getClientX(e)

 window.addEventListener("touchmove", onScrollmove)
 window.addEventListener("mousemove", onScrollmove)
 window.addEventListener("touchend", onScrollmove)
 window.addEventListener("mouseup", onScrollmove)
}


hashContent.addEventListener("touchstart",onScrollStart)
hashContent.addEventListener("mousedown",onScrollStart)


