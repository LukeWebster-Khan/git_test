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

## Else If Statements

conditional statements:

```javascript
let season = 'spring';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if ( season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}
```

## The switch keyword

a shorthand for else if statements:

```javascript
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition) {
case 'first place':
console.log('You get the gold medal!');
break;
case 'second place':
console.log('You get the silver medal!');
break;
case 'third place':
console.log('You get the bronze medal!');
break;
default:
console.log('No medal awarded.');
break;
}

```

## Magic Eight Ball

Uses ternary expressions and switch statements to produce 8 unique replys

```javascript
let userName = '';
userName ? console.log(`Hello ${username}!`) : 'Hello!'
const userQuestion = 'What age will I get married?'
console.log(`The user asked: ${userQuestion}`);
randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch(randomNumber) {
  case 0:
  eightBall = 'It is certain'
  break;
  case 1:
  eightBall = 'It is decidedly so'
  break;
  case 2: 
  eightBall = 'Reply hazy try again'
  break;
  case 3:
  eightBall = 'Cannot predict now'
  break;
  case 4:
  eightBall = 'Do not count on it'
  break;
  case 5:
  eightBall = 'My sources say no'
  break;
  case 6:
  eightBall = 'Outlook not so good'
  break;
  case 7:
  eightBall = 'Signs point to yes'
}
console.log(eightBall)
```

## Race Day

This code takes checks in athletes and assigns them race numbers. The timing of the races will be seperated for the over 18's and the youths.

```javascript
let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
const age = 18;

if(early && age > 18) {
  raceNumber += 1000;
}

if(early && age > 18) {
  console.log(`Your race number is ${raceNumber}; your race will start at 9:30am`)
} else if (!early && age > 18) {
  console.log(`Your race number is ${raceNumber}; your race begins at 11:00am`)
} else if (age < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration), your race number is ${raceNumber}`)
}else {
  console.log('Please approach the registration desk, Thanks!')
}
```

## Rock, paper, scissors

In this challenge I will take in a user input consisting of rock, paper or scissors and matching it up with a computer generated choice of the same contents. Special conditions will determine the winner the console the results.
