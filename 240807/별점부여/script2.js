const stars = document.querySelectorAll(".fa-star")

const comment = document.querySelector(".comment")

console.log(stars)

stars.forEach((star,index)=>{
star.addEventListener("click",()=>{
  stars.forEach((s,i)=>{
  if (i <= index) {
    s.classList.add("active")
  }else{
    s.classList.remove("active")
  }
  })
  let ment = ""
  
  switch(index){
   case 0 : 
   ment = "모드리치"
   break
   case 1 : 
   ment = "호날두"
   break
   case 2 : 
   ment = "외데고르"
   break
   case 3 : 
   ment = "아스날 최고"
   break
   case 4 : 
   ment = "최고"
   break
  }

  comment.innerHTML = `${ment}`
})
})


