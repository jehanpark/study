const orderButton = document.querySelector('#order')
const orderINfo = document.querySelector('#orderInfo')

orderButton.addEventListener("click",()=>{
const newP = document.createElement("h2")
const title = document.querySelector(".desc > h2")
const textNode = document.createTextNode(title.innerText)

newH.style.fontSize="2rem"
newH.style.color="cri"

const newImg = document.createElement("img")
const srcNode = document.createElement("src")
srcNode.value=
"https://www.google.com/search?sca_esv=c1c83ae130d39436&sca_upv=1&sxsrf=ADLYWIJsEHL3OnDaF7Hhd5DlnjJeoP4Lkg:1723010087851&q=vbak+cnrrnghk&udm=2&fbs=AEQNm0DmKhoYsBCHazhZSCWuALW8mC6u5PFP1Ks3xvlaC0GwVFDphqJATVlK4Xe8ceC4SiPQ-LNnsfuQkOZlPe8yEeHmV4PvRpWxW6xOeSRTxNdclTHY_5xj8HDoaMVCXxT374SqPuN8i5iCIxoEOp4VJbkYNdc6Qt6U9s6jnEkP2QJ9kBT2JBaO-DwmVxRoGrOaM-1nTotnlO0FU_J-LAjoq9Wypz74Mg&sa=X&ved=2ahUKEwjj8evhmOKHAxWvh1YBHUAtD1IQtKgLegQIFBAB&biw=500&bih=680&dpr=1.25#vhid=bnUn6DH-SQEwYM&vssid=mosaic"

newImg.setAttributeNode(srcNode)

newInfo,appendChild(textNode)
orderINfo.appendChild(newH)
orderINfo.appendChild(newImg)
})

