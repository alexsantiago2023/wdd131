document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastmodified").textContent = new Date(document.lastModified);

async function fetchKellyWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=f505272f6055490f9b320539242710&q=83443");
    const data = await response.json();
    let snow = document.getElementById("kelly-weather")

    let temperature = document.createElement("p")
    let snowfall = document.createElement("p")
    let snowStatus = document.createElement("p")

    temperature.innerHTML = `Temp: ${data.current.temp_f}°F`
    snowfall.innerHTML = `Snowfall: ${data.current.precip_in} inches`

    if (data.current.will_it_snow == 1) {
        snowStatus.innerHTML = `It is currently snowing.`
    } else {
        snowStatus.innerHTML = `It is not currently snowing.`
    }
    

    snow.appendChild(temperature)
    snow.appendChild(snowfall)
    snow.appendChild(snowStatus)
}
fetchKellyWeather();

async function fetchTargheeWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=f505272f6055490f9b320539242710&q=83414");
    const data = await response.json();
    let snow = document.getElementById("targhee-weather")

    let temperature = document.createElement("p")
    let snowfall = document.createElement("p")
    let snowStatus = document.createElement("p")

    temperature.innerHTML = `Temp: ${data.current.temp_f}°F`
    snowfall.innerHTML = `Snowfall: ${data.current.precip_in} inches`

    if (data.current.will_it_snow == 1) {
        snowStatus.innerHTML = `It is currently snowing.`
    } else {
        snowStatus.innerHTML = `It is not currently snowing.`
    }

    snow.appendChild(temperature)
    snow.appendChild(snowfall)
    snow.appendChild(snowStatus)
}
fetchTargheeWeather();

async function fetchJacksonWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=f505272f6055490f9b320539242710&q=83025");
    const data = await response.json();
    let snow = document.getElementById("jackson-weather")

    let temperature = document.createElement("p")
    let snowfall = document.createElement("p")
    let snowStatus = document.createElement("p")

    temperature.innerHTML = `Temp: ${data.current.temp_f}°F`
    snowfall.innerHTML = `Snowfall: ${data.current.precip_in} inches`

    if (data.current.will_it_snow == 1) {
        snowStatus.innerHTML = `It is currently snowing.`
    } else {
        snowStatus.innerHTML = `It is not currently snowing.`
    }

    snow.appendChild(temperature)
    snow.appendChild(snowfall)
    snow.appendChild(snowStatus)
}
fetchJacksonWeather();