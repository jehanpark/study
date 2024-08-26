//콜백지옥

const diplay = ()=>{
console.log("A")
setTimeout(()=>{
 console.log("B")
 setTimeout(()=>{
  console.log("C")
  setTimeout(()=>{
   console.log("stop!")
  },2000)
 },2000)
},2000)
}
diplay()