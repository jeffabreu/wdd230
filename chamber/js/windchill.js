let temperature = document.querySelector("#temperature");

let windSpeed = document.getElementById("windSpeed");
let windChill = document.getElementById("windChill");

if (temperature <= 50 || windSpeed > 3) {

    const windChillfunc = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed**0.16) + (0.4275 * temperature * windSpeed**0.16);
    windChill = windChillfunc;

} else {
    windChill = "N/A";
}