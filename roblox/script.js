//1 클릭 이벤트 대상을 적용한다
//쿼리셀렉터
//애드이벤트리스너

//2 클릭을 했을 때 css로 정의 해 놓은 가상 클래스를 원하는 요소에 적용시킨다
//클래스 리스트
//애드& 리무드
//button=>기본속성 / 무력화하는 요소=프리밴트디폴트

//2_1.가상 클래스=filldeA filledB

const femaleBtn =document. querySelector("#femalebtn");
const maleBtn =document. querySelector("#malebtn");


femaleBtn.addEventListener("cilck", (e)=>{
Event.preventDefault()
femaleBtnaddEventListener("cilck", (e)=>{
  Event.preventDefault("i"). classlist.toggle(filledA);
  });
  Event.preventDefault("i"). classlist.remove
  (filledB);
  });

  maleBtnaddEventListener("cilck", (e)=>{
  Event.preventDefault("i"). classlist.toggle(filledB);
  });
  Event.preventDefault("i"). classlist.remove
  (filledA);
  



