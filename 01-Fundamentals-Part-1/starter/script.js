//git test

/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof "manuel");


let age = 30
age =31

const birthYear = 1991

//var is the old way of declaring variables, let is the new

var job = 'programmer'
job = 'teacher'


// Basic Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

//assignment operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // X = x + 1
x--; // x = x - 1
x **= 3; // x = x to the power of 3
console.log(x);

// comparison operators, made to create boolean values
>, <, >=, <=


// Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y; //this declares 2 empty variables
x = y = 25 - 10 - 5; //Las restas (-) preceden a los assignments (=) x = y = 10, x = 10, y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// String and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2037;
const jonas =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  "years old " +
  job +
  "!";
console.log(jonas);

// template literals allow to assemble multiple strings into a single string

const jonasNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}`;
console.log(jonasNew);

// string with multiple lines
//old way
console.log("string \n\
with multiple \n\
lines");
//new way post ES6, using the template literal
console.log(`string
with multiple
lines`);


// Desicions, IF - ELSE statements

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

This is called an IF ELSE CONTROL STRUCTURE
if(){

} else {

}


//All variables declared inside a block, are not accessible outside the block, so we declare it empty outside and conditionally reassign it with an IF/ELSE

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// TYPE CONVERSION AND COERCION
//Conversion
const inputYear = "1991";
console.log(inputYear + 18); // this will concatenat, instead of calculate, as the inputYear is a string

//adding NUMBER will convert the type
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // will show NaN, as in NotANumber
console.log(String(23)); // will convert 23 to a string

//Coercion

console.log("I am " + 23 + " years old"); // using the + operator converts numbers to strings
console.log("23" + "10" - 3); // using the - operator converts strings to numbers
console.log("23" * "10"); // using the * operator converts strings to numbers
console.log("23" / "10"); // using the / operator converts strings to numbers

let n = "1" + 1; // this results in a string '11'
n = n - 1; // now we convert the string '11' to number, and substract 1
console.log(n); // results in 10



//TRUTHY AND FALSEY VALUES, conversion to booleans
// 5 Falsey values: 0, undefined, null, Nan, ''
// everything else is "Truthy" value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({})); // {} is an empty object

//JS will do this conversion implicitely
const money = 0; // money is now a number, not a boolean
if (money) {
  // Js will try to convert what's inside the condition to a boolean, so 0 will be converted to false
  console.log("Dont spend it all");
} else {
  console.log("get a job");
}

let height; // height is empty so it will be false, but if we assign a value, it will be true. However, if height's value is 0 , even if it is defined, 0 is a falsey value so it will also trigger as false
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}


// EQUALITY OPERATORS: == VS ===

const age = "18";

/// === is STRICT, it does not type coercion and will look for an exact equal
"18" === 18; // this will be FALSE, as a string is different as a number

if (age === 18) console.log("you are an adult"); // this will not log the string, as a string is compared to a number and wont be equal

/// == is not LOOSE, and will do type coercion
18 == "18"; // is TRUE, as it does change the type and evalueates both 18 as equal

if (age == 18) console.log("you are an adult"); // this will

//Should always default to ===

const favourite = Number(prompt("What is your favourite number"));

console.log(favourite);

// IF ELSE

if (favourite === 23) {
  console.log(`Cool ${favourite}`);
} else if (favourite === 7) {
  console.log("7 is also cool");
} else {
  console.log("Your number sucks");
}
// Operator for different is !== is the strict version, != is the loose version


//BOOLEAN LOGIC
&& -> AND -> both arguments are TRUE
|| -> OR -> one argument is true
! -> NOT -> reverts the argument

Example:
x = 10

1) X is smaller than 30 - this is true
2) X is greater than 20 - this is false

So
1 && (AND) 2 are true = false
1 || (OR) 2 are true = true
!1 (NOT 1) = false, porque 1 es true y not 1 es false



const hasDriverLicense = true; // A
const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true; // c

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}


// SWITCH STATEMENT

const day = "monday";

switch (day) {
  case "monday": // day === monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // Break is needed if not the code will continue working even if the value is not monday, because it was monday before.
  case "tuesday":
    console.log("Prepare food");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("drink");
    break;
  default:
    console.log("not a valid day");
}

// the Switch above would equal to the following IF else
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare food");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("drink");
} else {
  console.log("not a day");
}

*/

//STATEMENTS and EXPRESSIONS
// expressions produce values
// statements are like sentences that translate or do actions

// Conditional (Ternary) operator
//ternary oiperations porque tiene 3 partes

const age = 17;
age >= 18 ? console.log("drink wine") : console.log("drink water");
//condition //?//  //if             //://           //else

// Here the CONST drink, will be wine or water depending of the age value being more or less than 18
const drink = age >= 18 ? "wine" : "water";

//the ternary operation expression above would be as follows expressed in an IF statement
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

// this means we can use the ternary operator in template literals
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
