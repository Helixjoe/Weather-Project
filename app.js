const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1edfabf03549997d11e05eb35eae1e4b&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData.main.temp);
      console.log(weatherData.weather[0].description);
    });
  });
  res.send("Server is up and running");
});
app.listen(3000, function () {
  console.log("Server is running on 3000");
});
