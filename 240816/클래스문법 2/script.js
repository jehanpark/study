class Pet{
 constructor(name,color){
  this.name = name
  this.color = color
 }

 run(){
  alert(`${this.name} is running`)
 }
}

const cheez = new Pet ("치즈","yellow")
// cheez.run()

class Cat extends Pet{
 constructor(name,color,breed){
  super(name,color)
  this.breed = breed
 }

 viewInfo(){
  alert(`이름 : ${this.name}, 품좀 : ${this.breed},색깔 : ${this.color}`)
 }
}

const dusan = new Cat("두산","터키쉬 앙고라","흰색")
dusan.viewInfo()