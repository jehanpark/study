const dosplayA = ()=>{
 console.log("A")
}
const dosplayB = (callback)=>{
 setTimeout(()=>{console.log("B")
  callback()
 },2000)

}
const dosplayC = ()=>{
 console.log("C")
}

dosplayA()
dosplayB(dosplayC)