## Kelvin Weather 

convert Kelvin to celsius, celsius to fahrenheit and produce a round number using the appropriate method:

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

```javascript
const getUserChoice = userInput => {
userInput.toLowerCase()
if(userInput === 'rock' || userInput === 'rock' || userInput === 'rock' || userInput === 'bomb') {return userInput
} else {return console.log('error');}
};
const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
switch(randomNumber) {
  case 0:
    return 'rock';
  break
  case 1:
    return 'paper';
  break;
  case 2:
    return 'scissors'
  break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'OOF, the game was a Tie!!'
  }
   if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Oh No! The computer Won and so you have not!'
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Whoops! You have LOST'
    } else {
      return 'HURAAH you have won squire!'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'DANG, you\'ve lost'
    } else {
      return 'YOU HAVE WON!'
    }
  }
  if (userChoice === 'bomb') {
    return 'you annihilate everything in sight, victory is yours'
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice();
  console.log(`You dealt ${userChoice}`)
  console.log(`The computer dealt ${computerChoice}`)
  
  console.log(determineWinner(userChoice, computerChoice))
}
playGame()
```

## Sleep Debt Calculator

This calculator logs the total time a person has slept throughout the week and compares it with the ideal amount of sleep needed to conclude whether they get enough hours or not.

```javascript
const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
    return 7
    break;
    case 'wednesday':
    return 6
    break;
    case 'thursday':
    return 5
    break;
    case 'friday':
    return 8
    break
    case 'saturday':
    return 6
    break;
    case 'sunday':
    return 8;
    break;

    default:
    return 'Error!'
  }
};
console.log(getSleepHours('monday'))
let getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
const idealHours = 8
return idealHours * 7;
}
console.log(getActualSleepHours())

const calculateSleepDebt = () => {
const actualSleepHours =
getActualSleepHours();
const idealSleepHours =
getIdealSleepHours();
if (getIdealSleepHours === getActualSleepHours) {
  console.log('You got the perfect amount of sleep!')
} else if (getIdealSleepHours < getActualSleepHours) {
  console.log(`You got ${getSleepHours - getIdealSleepHours} more hours of sleep than you needed`)
} else {
  return console.log("You slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week")
  }
};
console.log(calculateSleepDebt());
```
