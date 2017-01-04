/*
The kelvinWeather program will convert Kelvin to Celsius, then to Fahrenheit.
*/

var kelvin = prompt('What is the Kelvin temperature today?');
var celsius = kelvin - 273;
var fahrenheit = celsius * (9 /5) + 32;
console.log(fahrenheit);
