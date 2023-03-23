"use strict";
/*
Example of strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicens = true;
}
if (hasDriversLicense) {
  console.log("I can drive");
}


//FUNCTIONS
// Calling, invoking, or running a function

function logger() {
  console.log("my name is manu");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 5);
console.log(appleOrangeJuice);


// Function Declarations vs Expressions

//Function Declaration. The function returns a value that we then save in a variable age1

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function Expression. The expression (the function) is stored directly in the variable calcAge2

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

//We can call function declarations before they are defined in the code, but not with an expression:

// This DECLARATION will work

//here we call the function
const age1 = calcAge1(1991);

//but only here we declare it

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// This EXPRESSION will not work
//Here we call the function expression

const age2 = calcAge2(1991);

//but only here we declare it
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};


// Arrow functions. Its still a function expression, only faster to write
//It returns a value implicitely without needing to write "return" and no need for curly braces unless multiple lines are needed

const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge3(1989));

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1989, "Manuel"));


//FUNCTIONS Calling other functions

//machine that cuts fruit into pieces for processing then

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// INTRODUCTION TO ARRAYS

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
//instead of doing what's above, use an array like below

// one way
const friends = ["Michael", "Seteven", "Peter"];
// another way
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // this is 0 based so it will return Michael to the console
console.log(friends.length); // this logs the amount of elements in the array, and is not 0 based, so will return 3

console.log(friends.[friends.length - 1]); // This will return "Peter", because "friends.length - 1" will return 2, and so we have friends[2], which is 0 based so its the last element in this array

//We can also change/ mutate the array with the brackers
friends[2] = 'Jay'
console.log(friends) // this will log ['Michael', 'Steven', 'Jay']

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990,1967,2002,2010,2018]

calcAge(years) // this will not work, as years is an array, that is considered a single value containing more values 

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length-1])

console.log(age1, age2, age3) // This logs 47, 70, 19

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]


// INTRODUCTION TO OBJECTS
//array
// const jonas = [
//   firstName,
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["friend 1", "friend 2"],
// ];

//object with 5 keys (or properties)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["friend 1", "friend 2", "friend3"],
};
// DOT vs BRACKET notation
console.log(jonas);

// Dot Notation
console.log(jonas.lastName); // this will log "Schmedtmann"
// Bracket notation
console.log(jonas["lastName"]); // this will log "Schmedtmann", but I can put any expression within the brackets, as below

//Bracket notation
const nameKey = "Name";
console.log(jonas["first" + nameKey]); // It will create the string firstName and therefore log "Jonas"
console.log(jonas["last" + nameKey]); // It will create the string lastName and therefore log "Jonas"

// This will not work with dot notation

// Using bracket notation to return whatever user input says

const interestedIn = prompt("What do you want to know about Jonas");
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("no luck");
}
//you can add properties to an object like this
jonas.location = "Portugal";
jonas["twitter"] = "@dadad";

//Challenge
// 'Jonas has 3 friends and his best friends is called Friend1'
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);


// Object methods
// Functions are values. If a function is just a value, we can create a property in an object that is a function

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher", // string value
  friends: ["friend 1", "friend 2", "friend3"], // array value
  hasDriversLicense: true, // boolean value

  // calcAge: function (birthYear) {
  //   // Function value. Any function attached to an object is called a METHOD
  //   return 2037 - birthYear;
  // },

  // Using the "This" keyword refers to the object that is calling the method
  // calcAge: function () {
  //   // Function value. Any function attached to an object is called a METHOD
  //   return 2037 - this.birthYear;
  // },

  //Instead of calculating the age everytime we need it, we can do it once and store it in another property inside THIS object
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} yo ${this.job} and has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

//CHALLENGE
// "Jonas is a 46yo teacher, and he has a drivers license"
console.log(jonas.getSummary());


//ITERATION: The for loop

//this is shit:
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
//first define starting point ; condition ; loop {codeblock}
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// Looping arrays, Breaking and continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["friend 1", "friend 2"],
];

const types = [];

for (let i = 0; i <= jonas.length; i++) {
  // reading from jonas array
  console.log(`${jonas[i]}`);
  // filling types array
  types[i] = typeof jonas[i];
  // or
  types.push(typeof jonas[i]);
}

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and breaking
// lets say we only want to print the strings in the array, we use continue.
// CONtinue will NOT EXECUTE the iteration if the IF is true
console.log("--- only strings below");
for (let i = 0; i <= jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(`${jonas[i]}`);
}
// lets say we want to stop printing when we hit a number
//break completely exits the loop
console.log("--- breaks with number");
for (let i = 0; i <= jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i]);
}


// Looping backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["friend 1", "friend 2"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// loop inside a loop. In the gym analogy, each set has a number of repetitions. 
//We are doing 3 sets of 5 repetitions

for (let excercise = 1; excercise <= 3; excercise++) {
  console.log(`----- starting excercise ${excercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
*/
// The while Loop

//runs while the condition is not true, but we need to create the variable outside of it, and it does not require a counter mandatorily
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetitions ${rep}`);
//   rep++;
// }

//example without a counter

// loop until we roll a 6 in a die

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
