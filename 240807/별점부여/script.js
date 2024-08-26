const stars =document.querySelectorAll(".fa-star")

const comment = document.querySelector(".comment")

stars.forEach((star,index)=>{
 star.addEventListener("click",()=>{
  stars.forEach((s,i)=>{
   if (i <= index) {
    s.classList.add("active")
   }else{
    s.classList.remove("active")
   }
  })

 let message = ""
 let imageURL = ""

  switch(index){
   case 0:
    message = "별로에요🤯"
    break
   case 1:
    message = "그저그래요😒"
    break
   case 2:
    message = "보통이에요🤔"
    break
   case 3:
    message = "괜찮아요😊"
    break
   case 4:
    message = "아주좋아요😍"
    break
  }

  comment.innerHTML = `${message}`
 })
})


