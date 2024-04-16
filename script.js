// https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=412db4c0efcaab8aba898b353dd420d0

const apiKey = "412db4c0efcaab8aba898b353dd420d0";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const weatherIcon = document.querySelector(".weather")
async function checkWeather(city) {
    const respons = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await respons.json(0)
    console.log(data);
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidityPer").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " Km/h";
    let weather = data.weather[0].main
    if(weather){
        weatherIcon.src = `images/${weather}.png`
    }
}
async function byDefault(){

    const def = await fetch(apiUrl + "bangalore" + `&appid=${apiKey}`)
    var data = await def.json(0)
    console.log(data);
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidityPer").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " Km/h";
    let weather = data.weather[0].main
    if(weather){
        weatherIcon.src = `images/${weather}.png`
    }
}
byDefault()

let search = document.querySelector("nav input")
let searhBtn = document.querySelector("nav img")
search.addEventListener('keypress', function (e){
    if(e.keyCode == 13){
    checkWeather(search.value)
    }
})
searhBtn.addEventListener("click", () => {
    checkWeather(search.value)
})

