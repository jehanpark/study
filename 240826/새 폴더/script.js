const getCurrentWeather = (latitude , longitude)=>{
 const URL = `https://api.openweathermap.org/data/3.0/onecall?lat={latitude}&lon={longitude}&appid={env.API_KET}`

 fetch(URL).then(response.json()).then(data=>console.log(data))
}

const getPosition = (position) =>{
 const {latitude , longitude} = position.coords
 getCurrentWeather(latitude , longitude)
}

const errorHandler = (err) =>{
 const noti = document.querySelector(".noti")
 noti.computedStyleMap.display = "block"
 alert(err.message)
}


if(navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(getPosition,errorHandler)
}else{
 alert("위치정보를 찾을 수 없습니다")
}