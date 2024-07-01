document
  .getElementById("weather-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "81069ab928a3cf5330b367b917d4a3d4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const weatherResult = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p> 
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
          document.getElementById("weather-result").innerHTML = weatherResult;
        } else {
          document.getElementById("weather-result").innerHTML =
            '<p class="text-danger">City not found</p>';
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather-result").innerHTML =
          '<p class="text-danger">Error fetching weather data</p>';
      });
  });

//Degree Symbol- Alt + 0176
