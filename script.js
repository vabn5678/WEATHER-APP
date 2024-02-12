
const APIKEY = "f6c30ddc4118efea3e4f6e3eb83161c4";

const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const displayweather = document.querySelector(".weather");

async function checkweather(city) {



    const response = await fetch(APIURL + city + `&appid=${APIKEY}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }



    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        displayweather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

