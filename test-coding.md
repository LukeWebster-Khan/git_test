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

## Dog Years

Convert human years to dog years. Also so use of string interpolation and dot notation.

```javascript
// original variable to convert to dog years
let myAge = 22;
// puppy years
let earlyYears = 2;
earlyYears *= 10.5;
// We have already accounted for the early years
let laterYears = myAge -= 2;
// single line multiplication for mature years
laterYears *= 4;
console.log(earlyYears, laterYears)
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears)
// assigned a value to myname and used method to set to lowercase
let myName = 'Luke'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
```