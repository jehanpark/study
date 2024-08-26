const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type = 'range']");
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".palyer")
const rateButtons = document.querySelectorAll(".rate")
const fullButton = document.querySelector("#fullscreenBtn")


const play = () => {
  playButton.innerText = "| |";
  video.play();
};
const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};
const togglePlay = () => {
  video.paused ? play() : pause();
};
const setVolume = (e) => {
  video.volume = e.target.value;
};
const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);
  sec < 10 ? (sec = `0${sec}`) : sec;
  min < 10 ? (min = `0${min}`) : min;
  hour < 10 ? (hour = `0${hour}`) : hour;
  return `${hour}:${min}:${sec}`;
};
const updateTime = () => {
  const current = document.querySelector(".current");
  current.innerText = formatting(video.currentTime);
  const duration = document.querySelector(".duration");
  duration.innerText = formatting(video.duration);
};
const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percentage = (currentTime / duration) * 100;
  progressBar.style.width  = `${percentage}%`
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`
  console.log(progressBarWidth);
};

const videoPoint = (e)=>{
  console.log(e.pageX)
  console.log(player.offsetLeft)
  const mouseX = e.pageX - player.offsetLeft
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = mouseX / progressBarWidth* duration
  video.currentTime = clickedTime
}

const setRate = (e)=>{
  const{rate}=e.target.dataset
  video.playbackRate=rate
}

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click",videoPoint)

rateButtons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    setRate(e)
  })
})

//fullScreen
fullButton.addEventListener("click",()=>{
  video.requestFullscreen()
})