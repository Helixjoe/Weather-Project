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
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temperature in Delhi is " + temp + " degree Celcius</h1>"
      );
      res.write("<p>The weather is " + desc + ".</p>");
      res.write("<img src = " + imageURL + ">");
      res.send();
    });
  });
});
app.listen(3000, function () {
  console.log("Server is running on 3000");
});
