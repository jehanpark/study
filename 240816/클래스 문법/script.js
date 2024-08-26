function Book (title, price){
this.title = title
this.price = price
}

Book.prototype.buy = function(){
 console.log(`${this.title}을(를)${this.price}원에 구매하였습니다!`)
}

const book1 = new Book("박제한,500000")
book1.buy()

function Textbook(title,price,major){
 Book.call(this,title,price)
 this.major = major
}

Textbook.prototype.buyTextbook = function(){
 console.log(`${this.major} 전공서적 ${this.title}을(를) 구매하였습니다!`)
}

Object.setPrototypeOf(Textbook.prototype, Book.prototype)


const book2 =new Textbook("타입스크립트",20000,"컵퓨터공학")

console.log(book2)

book2.buyTextbook()
book2.buy()

//class (신문법)

class BookC {
 constructor(title,price){
  this.title = title
  this.price = price 
 }

 buy(){
  console.log(`${this.title}을(를)${this.price}원에 구매하였습니다`)
 }
}

const book3 = new BookC("자료구조", 10000)
book3.buy()

class TextbookC extends BookC{
 constructor(title,price,majar){
  super(title,price)
  this.majar = majar
 }
 buyTextbook(){
  console.log(`${this.majar}전공서적 ${this.title}을 구매하였습니다`)
 }
}

let book4 =new TextbookC("알고리즘",50000,"산업디자인")
book4.buyTextbook()