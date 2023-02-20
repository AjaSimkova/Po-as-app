let api =
  "https://api.openweathermap.org/data/2.5/weather?lat=50.08804&lon=14.42076&appid=6b8c8cdeedb72650a3508e3a048f3b12";

const city = document.getElementById("towns");
const temp = document.getElementById("temperature");
const mess = document.getElementById("message");
const icon = document.getElementById("icon");

function retreiveData(data) {
  city.textContent = data.name;
  temp.textContent = (data.main.temp - 272.15, 1).toFixed(2);
}

if (navigator.geolocation) {
  console.log(navigator);
  navigator.geolocation.getCurrentPosition((pos) => {
    lon = pos.coords.longitude;
    lat = pos.coords.latitude;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6b8c8cdeedb72650a3508e3a048f3b12`;

    console.log(lon);

    fetch(api)
      .then((respons) => {
        return respons.json();
      })
      .then((data) => {
        console.log(data);
        retreiveData(data);
      });
  });
}
