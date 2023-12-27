// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

const celsiusTemp = parseFloat(prompt("Enter the temperature in Celsius: "));
const convertedToFahrenheit = (celsiusTemp * 9) / 5 + 32;
alert("YOUR CONVERTED TEMPERATURE IS: " + convertedToFahrenheit + "°F");

const fahrTemp = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
const convertedToCelsius = ((fahrTemp - 32) * 5) / 9;
alert("YOUR CONVERTED TEMPERATURE IS: " + convertedToCelsius + "°C");