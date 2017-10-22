// function buttonClick(buttonElement) {
//   console.log("Hello and welcome");
//   console.log(buttonElement);
//   buttonElement.className = "button-2"
// }
window.onload = function() {
var button = document.getElementById("myButton")
var input = document.getElementById("box")
var weatherTemperature = document.getElementById("weatherTemperature")
var weatherHumidity = document.getElementById("weatherHumidity")
var weatherMain = document.getElementById("weatherMain")
var weatherDescription = document.getElementById("weatherDescription")
var weatherImage = document.getElementById("weatherImage")
button.addEventListener('click', function(){
  console.log(input.value)
  button.className = "button-2"
  var xhr = new XMLHttpRequest();
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&APPID=2012f14714381d45ae8cb193b58f6c31"
    console.log("URL", url);
  xhr.open('GET', url, true);
  xhr.onload = function(e) {
      if (xhr.readyState == 4){
      if (xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log("MyData", data);
      weatherTemperature.innerHTML = (data.main.temp - 273).toFixed(0) + "°C";
      weatherHumidity.innerHTML = (data.main.humidity).toString() + "%";
      weatherMain.innerHTML = (data.weather[0].main);
      weatherDescription.innerHTML = (data.weather[0].description);
      var icon = data.weather[0].icon;
      weatherImage.src = "http://openweathermap.org/img/w/" + icon + ".png";

    } else {
      console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  }
  xhr.send(null);
})
}
