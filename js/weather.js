const API_KEY = config.apikey;

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // units=metric: 화씨를 섭씨로 변환
  console.log(url);
  // 서버의 응답을 기다려야 하므로 fetch를 쓴다
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-info");
      const city = document.querySelector("#city");
      const icon = document.querySelector("#weather-icon");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;    // 날씨이름/온도
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);