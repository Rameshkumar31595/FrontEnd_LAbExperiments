async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = `<p class="error">⚠️ Please enter a city name.</p>`;
    return;
  }

  const apiKey = "b29e3e0e6cbb724dbfa6f7c08d36b807"; // ✅ Your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    resultDiv.innerHTML = `
      <p>🏙️ <strong>City:</strong> ${data.name}</p>
      <p>🌡️ <strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p>⛅ <strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p class="error">❌ ${error.message}</p>`;
  }
}

// Runaway button feature
const cityInput = document.getElementById("cityInput");
const button = document.getElementById("getWeather");
const app = document.getElementById("weatherApp");

button.addEventListener("mouseover", () => {
  if (cityInput.value.trim() === "") {
    // Make button absolutely positioned inside app box
    button.style.position = "absolute";

    // Calculate max allowed positions inside the app box
    const maxX = app.clientWidth - button.offsetWidth - 20;
    const maxY = app.clientHeight - button.offsetHeight - 20;

    // Random positions within the box
    const offsetX = Math.floor(Math.random() * maxX);
    const offsetY = Math.floor(Math.random() * maxY);

    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
  }
});

// Reset button position when user types something
cityInput.addEventListener("input", () => {
  if (cityInput.value.trim() !== "") {
    button.style.position = "relative";
    button.style.left = "0";
    button.style.top = "0";
    button.style.transform = "none";
  }
});
