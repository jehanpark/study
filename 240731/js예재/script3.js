// const userCost = document.querySelector(".cost")
// const userSale = document.querySelector(".sale")

// const btn = document.querySelector("button")

// const resultCost = 
// userCost % userSale
// console.log(resultCost)

const button =document.querySelector(".btn")

const showSales = () => {
  const price = document.querySelector("#price").value
  const rate = document.querySelector("#rate").value
  const savedPrice = price * (rate / 100)
  const resultPrice = price - savedPrice

  document.querySelector("bottomInfo p").innerText = `상품의 원래 가격은 ${price}이고, 할인률은 ${rate}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`
}

button.addEventListener("click",showSales)

