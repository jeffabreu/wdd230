let temperature = document.getElementById("temperature").innerHTML;

let windSpeed = document.getElementById("windspeed").innerHTML;
let windChill = document.getElementById("windchill");

if (temperature <= 50 || windSpeed > 3) {

    let windChillfunc = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed**0.16) + (0.4275 * temperature * windSpeed**0.16);
    windChill = windChillfunc;

} 
else {
    windChill = "N/A";
}