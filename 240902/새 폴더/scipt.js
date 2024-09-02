const ul =document.querySelector("ul")
const grid = [9,5]
const col = [0]
const row = grid[1]
const allElem = col*row

for(let i =0; i < allElem; i++){
 const li = document.createElement("li")
 ul.appendChild(li)
}

const tl = anime.timeline({
 target:"li",
 loop: true,
 direction: "alternate"
})

tl.add({
 scale: [
  {value: 0.1, easing:"easeOutsine", duration : 500}, 
  {value: 1, easing: "easeOutQuad", duration : 1200}.
 ]
})