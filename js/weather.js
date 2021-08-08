
const API_KEY = "d97d906def1f4cd53e8f2f388554cc16";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)// url을 호출. promise이므로 응답을 기다림 then()이후로 처리
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}\u2103`;
    }); 
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); // 두개의 callback 함수 인자로 넘겨야 함