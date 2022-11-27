const convertToCelsius = function(fahrenheit) {
  celsius = Math.round(((fahrenheit - 32) * 5/9)*10) / 10
  return celsius
 
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = Math.round(((celsius * 9/5) + 32)*10) / 10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
