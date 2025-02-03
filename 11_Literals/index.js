// Literals

// Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script. This section describes the following types of literals:

// Array literals
// Boolean literals
// Numeric literals
// Object literals
// RegExp literals
// String literals

// Array literals:

// const coffees = ["French Roast", "Colombian", "Kona"];
// console.log(coffees);

// const arrayWithEmpty = ["apple", , 'banana']
// console.log(arrayWithEmpty); // [ 'apple', <1 empty item>, 'banana' ]


// Numeric Literals:


// const octal2 = 0o123; // New style octal
// console.log(octal2 + 1); // Output: 83 (in decimal)

// console.log(parseInt('123', 8));


// Object literals

// const sales = "Toyota";

// function carTypes(name) {
//   return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
// }

// const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

// console.log(car.myCar); // Saturn
// console.log(car.getCar); // Honda
// console.log(car.special); // Toyota

// const colorTypes = {RGB: {R: 'red', G: 'Green', B: 'Blue'}, 7: 'Hex'}

// console.log(colorTypes.RGB);
// console.log(colorTypes.RGB.R);

// console.log(colorTypes[7]);


