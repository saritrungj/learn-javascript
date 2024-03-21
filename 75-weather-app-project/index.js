const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");
const apiKey = "ffa1456c587220867e54b9c2de29a2a6";

console.log(weatherForm);

weatherForm.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please Enter a city!");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Cloud not fetch weather data!");
  }

  return await res.json();
}

function displayWeatherInfo(data) {
  console.log(data);
  const { name: city,
    main: { temp, humidity },
    weather: [{ description, id }] } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descriptionDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${((temp - 273.15) * 9 / 5 + 32).toFixed(2)} ℉`;
  humidityDisplay.textContent = `Humidity: ${humidity} %`;
  descriptionDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  tempDisplay.classList.add("temp-display");
  weatherEmoji.classList.add("weather-emoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descriptionDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch(true){
    case (weatherId >= 200 && weatherId < 300):
      return "⛈️";
    case (weatherId >= 300 && weatherId < 400):
      return "🌧️";
    case (weatherId >= 500 && weatherId < 600):
      return "🌨️";
    case (weatherId >= 600 && weatherId < 700):
      return "❄️";
    case (weatherId >= 700 && weatherId < 800):
      return "🌤️";
    case (weatherId >= 801 && weatherId < 810):
      return "⛅";
    default:
      return "❓";
  }

}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add('error-display');

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}