'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};
// // the course goes from bottom to top in this file

// SUNMMARY, WHICH DATA STRUCTURE TO USE

//There are escensially 3 sources of data (Examples from the dice game from before)
//1. From program itself: data directly in the source code; like the "You win" or "you lose" messages
//2. From the UI: data input from the user or data written in the DOM; like the number the user inputs to guess the dice
//3. From external sources: Data fetched, normally from a web API

// If we need a simple list of values we use ARRAYS or SETS
// If we need a pair of KEYS and VALUEs, we use OBJECTS or MAPS

// When getting data from an API, it will come in format of JSON

//USE ARRAYS WHEN:
// - Need ordered list of values that might contain duplicates
// -Use when you need to manipulate data

//USE SETS WHEN:
// - Need to work with unique values
// - use when performance is necessary, it can be 10x faster than arrays
// - use to remove duplicate values from an array

//USE OBJECTS WHEN:
// - More traditional key/value store
// - Easier to write and access using . and []
// - If you need to use functions (methods) as values
// - Most likely when using JSON data

//USE MAPS WHEN:
// - Better performance
// - Keys can have any data type (e.g booleans)
// - Easy to iterate and to compute size
// - Simply need to map keys to values and use keys that are not strings

// //ITERATING MAPS
// //There is another way to add elements to a map, without using the rest operator
// //by creating an array of arrays, the first element is the key and the second the value inside each array
// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again'],
// ]);

// console.log(question);
// //The syntax is the same as when using Object.entries(), so we can easily convert objects to maps
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Iteration on maps
// //This will log only the elements of the map for which the keys are a number (so only the first 3)
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// console.log(question.get('question'));

// //This is a small quiz, that takes your answer and then compares it with an element of the map to return its value if correct
// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));
// //Breaking down:

// //answer === question.get('correct') THIS WILL RETURN TRUE WHEN THE VALUE ENTERED IS 3
// //question.get(answer === question.get('correct')) THIS WILL TRY TO NOW FIND 'TRUE' INSIDE THE MAP, AND RETURNS THE VALUE OF THE KEY TRUE

// //Sometimes we need to convert a map back to an array with the spread operator

// const newArray = [...question]

// //MAPS
// //A map is a data structure that we can use to map values to keys
// //The main difference between an object and maps is that the keys can have any type of key (In objects they can only be strings)

// //Easiest way is to create an empty map and then fill it up with set method
// const rest = new Map();
// rest.set('name', 'Classico italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// //The set method returns the updated map, so we can chain them
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));

// //We can have boolean keys which is useful
// const time = 21;
// rest.get(time > rest.get('open') && time < rest.get('close'));

// //Cn also use has and delete
// rest.has('categories'); // would log TRUE
// rest.delete(2); // this would delete the second element
// //Can also use .size
// console.log(rest.size);
// //Can also clear it and leave it empty
// //rest.clear();

// //We can also use arrays and objects as map keys

// //This will set the array [1,2] as a kety for the value Test
// rest.set([1, 2], 'Test');
// console.log(rest);
// //However, we cannot use get directly to an array, as even if it contains the same values it will be a different array
// console.log(rest.get([1, 2])); // This will log undefined

// //So we have to previously set the array so it all points to the same place in memory
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr)); // This will log Test

// //We can also use objects as keys, and here is ane xample adding a DOM element to a map

// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// //SETS
// //A set is a collection of unique values, a set is iterable like an array

// //Here we are creating a set with an array that contains duplicates
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta', 'Pizza'])
// //when we log it, it simply logs the values once and ignores the duplicates
// console.log(ordersSet)

// //we can get the size of a set, which is the number of elements in the set (like .length for arrays but uses .size)
// console.log(ordersSet.size)
// //check if the set has something, below evaluates in True and False respectively
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('Bread'))

// //Add stuff to a set, even if you do it twice, it will only add it once as a set has unique elements
// ordersSet.add('Garlick Bread')
// ordersSet.add('Garlick Bread')

// //We can also delete elements
// ordersSet.delete('Risotto')
// //Delete the elements of a set, but not the set
// ordersSet.clear()

// //Can also loop a set, this would log each element inside the set in each loop of the FOR OF
// for (const order of ordersSet) console.log(order)

// //Example
// //array with employees
// const staff = ['Waiter', 'Cheff', 'Waiter', 'Manager', 'Chef', 'Waiter']

// //If we want to know how many unique positions are in our restaurant, we create a set of it
// const staffUnique = new Set(staff)
// console.log(staffUnique)
//

// //The spread operator works in all iterables, so we can use it in sets to easily create an array with unique values from a set
// const staffUniqueArr = [...new Set(staff)]
// console.log(staffUniqueArr)

// //Arrays can use duplicates and order matters
// //Sets cannot have duplicates and order does not matter

// //Looping objects indirectly, keys, values and entries

// //PROPERTY NAMES (MON, TUE, FRI, ETC) test
// //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// const properties = Object.keys(openingHours);
// console.log(properties);

// //Here we use the variable created above in a FOR OF loop to log a string for each day of the week its open
// let openStr = `We are open on ${properties.lenght} days`;

// for (const day of properties) {
//   openStr += `${day}`;
// }

// //PROPERTY VALUES (0-12, 11-23, etc)
// const values = Object.values(openingHours);

// //ENTIRE OBJECT
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// //We can check if a method exist before calling it
// console.log(restaurant.order?.(0, 1) ?? 'METHOD DOES NOT EXIST');
// //As orderRissotto doesnt exist i
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'METHOD DOES NOT EXIST');

// //Arrays
// const users = [{ name: 'Jonas', email: 'test@eamail.com' }];
// //We can check if speciific things exist before trying to assign new values to it
// console.log(users[0]?.name ?? 'user array empty');

// //OPTIONAL CHAINING
// //If we dont know if the restaurant has the "mon" variable we won't get anything
// console.log(restaurant.openingHours.mon);

// // To avoid this, we could use an if function
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
// //But if the property openingHours also dont exist we are fucked,
// //so instead we use optional chaining
// //We use the optional operator ?. and if that doesn't exist, it will return a failure immediately
// //If all elements before the operator exist, only then it will run "open" in the case of this example
// //An element exists if its not undefined or null
// console.log(restaurant.openingHours.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //This above will return that we don't open on saturdays, because saturdays value is 0, so it is a FALSEY value
// // So we use the knowledge coalescence operator
// //instead of or (?? instead of ||)
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//OBJECT LITERALS
///An object literal, like restaurant above, is an object literally written in code between curly braces {}
// with all elements of it written inside, instead of using variables
//Object literals enhancements in E6:

//The first enhancement allows us to call variables from outside the object simply by name
//Before enhancement:
// const property1 = 'value';
// const object1 = {
//   //from inside the object we create the prperty and define it as equal of the variable outside
//   property1: property1,
// };

// //With enhancement
// const property2 = 'value';
// const object2 = {
//   //from inside the object we create the prperty and define it as equal of the variable outside
//   property1,
// };

// //Second enhancement allows us to create frunctions without the need of the function syntax:
// //before enhancement
// const a = {
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   },
// };

// //with enhancement

// const manu = {
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   },
// };

// //Third enhancements allows us to compute the property names as well
// const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// const openingHours2 = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// //LOOPING ARRAYS
// const menu = [...restaurant.starterMenu, restaurant.starterMenu];

// //The FOR OF operator is used to loop through an array. Here, we are declaring a variable called "item" OF the menu object
// //This will loop through the array and log each item in the array in order one by one
// for (const item of menu) console.log(item);

// //If we also need the index, its trickier, we need to call a function of the "menu", in this case "entries"
// //the .entries in the menu adds an array iterator to the function, and for each element in "menu" it creates an array for each element, with the index and then the element
// for (const item of menu.entries()) {
//   console.log(item);
// }
// //We can deconstruct in the middle of a FOR OF operator
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// // LOGICAL ASSIGNMENT OPERATORS
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// //Assuming we want to assign the numGuests property to the objects that do not have it
// //Doing this will evaluate rest1.numGuests, and if it is falsey, will return 10
// //In the case of rest1, it has the property so it returns the actual value of the property
// rest1.numGuests = rest1.numGuests || 10;
// // in rest2, however, as it does not exist it adds the property and assigns the value 10
// rest2.numGuests = rest2.numGuests || 10;

// //OR ASSIGNMENT OPERATOR
// //This assigns a value to a variable if the variable is falsey, just as above, but easier
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// //This works except in the situation when we need the falsey value, for example, the numGuests is 0, which is the value we need
// //So, we can use the NULLISH ASSIGNMENT OPERATOR, which is the same logic but stops for NULLISH values not FALSEY values
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //We want to anonymize the owner property of the first value
// //As rest1 does not have the owner property, it is "undefined", and undefined is a FALSEY value, so it adds that to the object
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// //As the value exists, it is TRUTHY, so the it continues the operation and returns <ANONYMOUS>
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// //Thsi can be replaced with the  AND assignment operator
// //In this case, it simply does not assign the new value because the object property is NOT TRUTHY, it does not exist, so it doesn't get added anything to it
// rest1.owner &&= '<ANONYMOUS>';
// //Owner of rest2 is replaced with <anonymous>
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
// //THE NULLISH COALESCING OPERATOR ??
// //It works with the idea of NULLISH values instead of FALSEY values
// //Nullish values are: Null, Undefined (NOT 0 or '')

// // const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // const guestCorrect = restaurant.numGuests ?? 10

// //The issue with short circuiting, for example, is that if you have a variable that
// // Here we simply check if restaurant.Guests is truthy, and if it is not, returns the value 10
// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // If restaurant.numGuests is 0, this will also return 10, as 0 is a FALSEY value.
// // Using the Nullish operator, we can return 0 as the value which is what we actually need

// // //SHORT CIRCUITING &&(and)||(or)

// // //They can use any data type, they can return any data type and they do shortcircuiting (or short circuit evaluation)
// // //used in not a boolean, it returns the first TRUTHY value, and stops evaluating the following values
// // //this will log 3
// // console.log('===OR===');
// // console.log(3 || 'jonas');
// // //this will log 'jonas'
// // console.log(3 || 'jonas');
// // //This logs  true
// // console.log(true || 0);
// // //This logs null (which is also a falsey value)
// // console.log(undefined || null);
// // //This logs 'hello' as it is the FIRST truthy value
// // console.log(undefined || null || 0 || '' || 'hello' || 23 || null);

// // //Here we are checking if the numGuests value exists (as it does not, its falsey), if it does, it shows uses it, if not, it returns 10
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // // here we simply check if restaurant.Guests is truthy, and if it is not, returns the value 10
// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // // the AND operator short circuits when the value is FALSEY
// // //
// // console.log('===AND===');
// // //Logs 0 as it is the falsey value and stops looking
// // console.log(0 && 'jonas');
// // //Logs 'jonas' as it is the last value
// // console.log(7 && 'jonas');
// // //Reaches null and stops as it is the first FALSEY value
// // console.log('hello' && 23 && null && 'jonas');

// // //This is usiong an iff to see if the3 orderPizza method exists, and then it calls it if it does
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushroom', 'spinach');
// // }
// // //Simply checks if the first restaurant.orderPizza exists, and if it doesn't it stops right there because it is FALSEY (it would be undefined)
// // //if it does exist, it continues and calls it
// // restaurant.orderPizza && restaurant.orderPizza;

// // //THE REST PATTERN
// // //It has the same syntax as the spread operator, but it does the opposite, it packs elements into an array instead of unpacking an array

// // //This is the spread operator because it is on the RIGHT side of the assignment operator (=)
// // const arr = [1, 2, ...[3, 4]];
// // //Here as it is to the LEFT of the =, it is the rest pattern and will pack others into an array
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // //The REST pattern should always be last of the elements in the new array, as it will include all the REST of the elements, without including any previously skipped elements
// // //See below it included Risotto, which is from the mainMenu, and all starterMenu items in the same array
// // const [pizza, , ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, otherFood);

// // // OBJECTS
// // // If we want to extract the weekdays from the object inside restaurant, we can simply extract saturday, even though its the last element, and then group the other days, fri and thur, in a weekDays object
// // const { sat, ...weekdays } = restaurant.openingHours;

// // // FUNCTIONS
// // //Imagining we need a function with an unknown number of parameters
// // // We can use the REST operator in the parameter to expect any amount of numbers and add them individually to erachother
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };

// // add(1, 55556);

// // //WE can also deconstruct an array and add its elements easily:
// // //array with 3 numbers:
// // const x = [23, 7, 5];
// // //now call the function with the SPREAD operator

// // add(...x);

// // //This logs mushroom asd the main ingredient and creates an array with all the following ones
// // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // //This will only log pepperoni, but will still create an empty array, that we could use if we wanted
// // restaurant.orderPizza('pepperoni');

// // //SPREAD OPERATOR
// // //To create an array with new data from another array, without spread operator it would be done as such:
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // //with spread operator. Its like taking out all elements of the arr array and entering them in the newArr
// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // //This deconstructs the array into separate elements
// // console.log(...newArr);
// // //Its the same as writting
// // console.log(1, 2, 7, 8, 9);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // //Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // //Iterables: arrays, strings, maps, sets. NOT objects
// // const str = 'Jonas';
// // const letters = [...str, , 'S.'];
// // console.log(letters);

// // // //Writing
// // // console.log(...str)
// // // ///Is the same as
// // // console.log('j','o','n', etc etc

// // // const ingredients = [
// // //   prompt('Lets make pasta! Ingredient 1?'),
// // //   prompt('Lets make pasta! Ingredient 2?'),
// // //   prompt('Lets make pasta! Ingredient 3?'),
// // // ];

// // //
// // console.log(ingredients);
// // // calling the function can be done in two ways with the same result:
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // //but clearly this is the best way
// // restaurant.orderPasta(...ingredients);

// // //Creating objects
// // const newRestaurant = { ...restaurant, founder: 'Giuseppe', foundIn: 1998 };

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: 'Via del Sole, 21',
// //   starterIndex: 2,
// // });

// // //DECONSTRUCTING OBJECTS (scaloneta)
// // //Same as with arrays, but using curly braces. Also, the order of the elements in the object do not matter, we can take them in any order
// // //The variable names must match the name of the elements in the object
// // const { name, openingHours, categories } = restaurant;

// // //To rename the elements of an object we can use objectElementName: newName, and end up with variables named differently as the elements in the object
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;

// // console.log(restaurantName, hours, tags);

// // //Default values in case the variable names do not match an element in the object. When that happens you get undefined
// // const { menu = [], starterMenu: starters = [] } = restaurant;

// // //Mutating variables (as above with the arrays, to change the order)

// // //To change the a, b variables into the elements of the object below, we cannot simply redefine it as with arrays because of the curly braces.
// // //When starting a line with a curly brace {, JS thinks that next is a code block, and the = is an unexpected token
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // //To fix this, wrap the whole thing in parenthesis
// // ({ a, b } = obj);
// // console.log(a, b);

// // //Nested objects
// // //As with the arrays, we can assign variables to objects within objects
// // const {
// //   fri: { open, close },
// // } = hours;
// // console.log(open, close);

// // //DECONSTRUCTING ARRAYS
// // //without destructing the array, to assign variables to each element of an array it would be done like this:
// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // //with deconstruction, it is simpler:
// // const [x, y, z] = arr;
// // //This will follow the order of the elements in the array and assign the variable in the array to each in order

// // //You can skip elements and select the first and third, for example, by leaving spaces in the variable array
// // let [main, , seconday] = (restaurant.categories[(main, secondary)] = [
// //   secondary,
// //   main,
// // ]);
// //If you want to switch variables, without deconstructing, you need to first store one of them in a temporal variable called temp, so then you can assign a new value to the first element without losing the original value
// // const temp = main
// // main = secondary
// // secondary = temp
// //With deconstructing is easier and no need for a temp variable:

// //Receiving and savint 2 variables from 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// //with nested arrays is pretty much the same
// const nested = [2, 4, [5, 6]];

// // const [one, , two] = nested;
// // // This will log 2, [5,6]
// // console.log(one, two);

// // This will log each element inside the nested array as their own variables
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// //This asssigns a default value to the variable in case3 the array is shorter, when it runss out of elements in the array simply uses the default value
// const [p = 1, q = 1, r = 1] = [8, 9];
// //This logs 8,9,1 (r being 1 as there are no more elements in the array)
// console.log(p, q, r);
