## Kelvin Weather 

convert Kelvin to celsius, celsius to fahrenheit and produce a round number using the approiate method:

```javascript
// constant level of Kelvin
const kelvin = 0;
// this converts kevlin to celsius
let celsius = kelvin - 273;
// converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounds F to lower point
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
```
