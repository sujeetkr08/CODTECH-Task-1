async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "bdce163639796c7ab0a044084c596b87"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      document.getElementById("weatherResult").innerText = "City not found!";
      return;
    }
    const data = await response.json();
    const weatherInfo = `
      <strong>${data.name}</strong><br>
      Temperature: ${data.main.temp}°C<br>
      Condition: ${data.weather[0].description}<br>
      Humidity: ${data.main.humidity}%
    `;
    document.getElementById("weatherResult").innerHTML = weatherInfo;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weatherResult").innerText = "Failed to fetch weather.";
  }
}

