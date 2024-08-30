const getCurrentWeather = (latitude , longitude)=>{
 const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&units=metric`

 fetch(URL).then(response.json())
 .then(data=>{
  const icon = document.querySelector(".icon")
  const temp = document.querySelector(".temp")
  const weather = document.querySelector(".weather")
  const city = document.querySelector(".city")

  let weatherName
  switch(data?.weather[0]?.main){
   case "clouds":
   weatherName = "구름"
   break
   case "rain":
   weatherName = "비"
   break
  }
  let cityName
  switch(data?.weather[0]?.main){
   case "yaksu":
   weatherName = "구름"
   break
   case "sindang":
   weatherName = "비"
   break
  }

  icon.src = ``

  temp.innerHTML = `${data.main.temp} ℃`
  weather.innerHTML = weatherName
  city.innerHTML = data.name
 })
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