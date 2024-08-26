// Header Nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector(".header");
  const gototop = document.querySelector(".gototop")

  if (scroll > 50) {
    header.classList.add("active");
    gototop.classList.add("active")
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

//triger

const trigger = document.querySelector(".trigger")
trigger.addEventListener(click, function(){
  const gnb = document.querySelector(".gnb")
  const gnbLinks = gnb.querySelectorAll("a")

this.classList.toggle("active")
gnb.classList.toggle("active")
})

gnbLinks.forEach(gnbLinks => {
 Links.addEventListener("click",()=>{
  trigger.classList.remove("active")
  gnb.classList.remove("active")
 })
});

//scroll to
$(".gototop, .gnb a").click(function(){
  $.scrollTo(this.hash || 0, 800)
})

