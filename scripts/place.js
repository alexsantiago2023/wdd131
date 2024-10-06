document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastmodified").textContent = new Date(document.lastModified);

const temperature = 19;    // Celsius
const windSpeed = 6;   // km/h

function calculateWindChill(tempC, windSpeedKmh) {
    // Wind chill calculation is valid only for temperatures at or below 10°C and wind speeds above 4.8 km/h
    if (tempC > 10 || windSpeedKmh <= 4.8) {
        return "N/A";
    }

    // Calculate wind chill using the formula for Celsius and km/h
    const windChill = 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windSpeedKmh, 0.16)) + (0.3965 * tempC * Math.pow(windSpeedKmh, 0.16));

    // Return the wind chill, rounded to 2 decimal places
    return windChill.toFixed(2);
}

document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);


function noIcon() {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const lable = document.getElementById("lable");

    if (mediaQuery.matches) {
        // Change text for screens smaller than 600px
        lable.textContent = "Weather";
    } else {
        // Change back to original text for larger screens
        lable.textContent = "Weather ⛅";
    }
}

noIcon()

window.addEventListener('resize', noIcon);
