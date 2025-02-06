const apiKey = "7e9380a31fab0b9684e718a49575fe58";
document.getElementById("cityInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = e.target.value;
    weatherCheck(city);
  }
});
const cityName = document.querySelector(".cityName");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const feelingTemp = document.querySelector(".feelingTemp");
const humidity = document.querySelector(".humidity");
const country = document.querySelector(".country");
const windSpeed = document.querySelector(".windSpeed");

async function weatherCheck(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  let data = await response.json();
  cityName.innerHTML = `<h1 class="cityName">City: <span>${data.name}</span></h1>`;
  weather.innerHTML = `<h2 class="weather">Weather: <span>${data.weather[0].description}</span></h2>`;
  temp.innerHTML = `<h2 class="temp">Temperature: <span>${Math.round(
    data.main.temp
  )}°C</span></h2>`;
  feelingTemp.innerHTML = `<h2 class="feelingTemp">
        Outside temperature feeling like: <span>${Math.round(
          data.main.feels_like
        )}°C</span>
      </h2>`;
  humidity.innerHTML = `<h2 class="humidity">Humidity: <span>${data.main.humidity}%</span></h2>`;
  country.innerHTML = `<h2 class="country">Country: <span>${data.sys.country}</span></h2>`;
  windSpeed.innerHTML = `<h2 class="windSpeed">Wind speed: <span>${data.wind.speed} km/h</span></h2>`;
  console.log(data);
}
