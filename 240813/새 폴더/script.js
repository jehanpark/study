//객체생성=> 선언

const book1 = {
 title: "자바스크립트",
 level: "nomal",
 study:"done",
}

//객체 안에 담겨있는 데이터를 찾아온다(프로퍼티에 접근한다, 2가지 방법)
//온점표기법
//대괄호표기법

//console.log(book1.title)
//console.log(book1["study"])

//book1.study = "ready"

//console.log(book1)

//book1.master = "David"


//js 어딘가에 class 생성자함수를 활용해서 이미 누군가가 개게를 만들어놓았음

//class생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때는 반드시 new 예약어 + prototype함수를 활용해야함

//prototype을 통해서 생성된 값을 인스턴스 객체

//최초에 선언한 변수의 값으로 할당

let book2 = new Object()
console.log(typeof book2)
book2.title = "타입스크립트"
book2.title = "타입스크립트"

// let book3 = new Array()
// console.log(typeof book3)

//delete book2.bestSeller

const student={
 name: "전진우",
 age: "22",
 fav: "game",
 score:{
  history:85,
  science:90,
  average:function(){
   return (this.history + this.science) / 2
  }
  like(){
   alert(`전진우님은 컴퓨터를 좋아한다`)
  }
 } 
}

//function

console.log(student.score.history)
console.log(student.score.average())

//객체안에 property 일부로서 탄생된 함수는 method라고 칭한다
