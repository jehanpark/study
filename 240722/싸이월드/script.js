const menuHome = document.querySelector("#menuHome")
const menuGame = document.querySelector("#menuGame")
const menuJukebox = document.querySelector("#menuJukebox")
const contentFrame = document.querySelector("#contentFrame")


const homeChange = ()=>{
 contentFrame.setAttribute("src","./home.html")
 menuHome.style = "background: #000000; color: #dc143c;"
 menuGame.style = "background: #000000; color: #dc143c;"
 menuJukebox.style = "background: #000000; color: #dc143c;"
}
const gameChange = ()=>{
 contentFrame.setAttribute("src","./game.html")
 menuHome.style = "background: #000000; color: #dc143c;"
 menuGame.style = "background: #000000; color: #dc143c;"
 menuJukebox.style = "background: #000000; color: #dc143c;"
}
const jukeboxChange = ()=>{
 contentFrame.setAttribute("src","./jukebox.html")
 menuHome.style = "background: #000000; color: #dc143c;"
 menuGame.style = "background: #000000; color: #dc143c;"
 menuJukebox.style = "background: #000000; color: #dc143c;"
}

menuHome.addEventListener("click", homeChange)
menuGame.addEventListener("click", gameChange)
menuJukebox.addEventListener("click", jukeboxChange)