const country = "Argentina";
const continent = "South America";
let population = 43;

console.log(country);
console.log(continent);
console.log(population);

// Data Types, typeof is used to show the type of value ahead
const isIsland = false;
let language = "Spanish";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Basic Operators

let finPopulation = 6;
let avgPopulation = 33;

console.log(population / 2);
//population++;
console.log(population);

console.log(population > finPopulation);
console.log(population < avgPopulation);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Template Literal

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// if else
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      avgPopulation - population
    } million below average`
  );
}

// Type conversion and coercion

// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17; 23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; 1143

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D

if (population < 50 && language === "English" && !isIsland) {
  console.log(`You should live in ${country} `);
} else {
  console.log(`${country} does not meet your criteria`);
}

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

switch (language) {
  case "Mandarin":
    console.log("Most people speak this");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("4th place");
    break;
  default:
    console.log("great anyway");
}

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
//OR
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
