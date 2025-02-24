// If an expression evaluates to an object, then the left-hand side of an assignment expression may make assignments to properties of that expression. For example:


// const obj = {}

// obj.x = 3;

// console.log(obj);

// const key = 'y'
// obj[key] = 5;

// console.log(obj);


// // Destructuring
// const foo = ["one", "two", "three"];

// // const one = foo[0];
// // const two = foo[1];
// // const three = foo[2];

// const [x, y, z] = foo;

//  console.log(x, y, z);


// // Comparison operators

// const str = '2'
// const num = 2;

// console.log(str === num); // false
// console.log(str == num); // true
// console.log(str !== num); //true


// // Logical operators
// console.log(5 && 10);// 10
// console.log(0 && 10);// 0
// console.log(5 || 10);// 5
// console.log(0 || 10);// 10

// let x ;
// let y ;
// console.log(x ?? 10);// 10
// console.log(2 ?? 10);// 2
// console.log(x ?? y);// undefined
// console.log(x ?? (y = 1));// 1
// console.log(0 ?? y);// 0
// console.log(0 ?? 10);// 0



// // Short-circuit evaluation
// let num1 = true;
// let num2;

// num1 && console.log(5);
// !num1 || console.log(10);
// num2 ?? console.log(15);


// // Conditional (ternary) operator
// let age = 10
// const status = age > 18 ? 'adult' : 'child'
// console.log(status);


// // ?Comma operator
// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [x, x, x, x, x];


// for(let i = 0, j = 9; i <= j; i++, j--){
//     console.log(`a[${i}][${j}] = ${a[i][j]}`);
// }

// let y = (1,2)
// console.log(y);


// // ?Unary operators
// const obj = {
//     h: 'Hi',
//     i: 'sham'
// }
// console.log(obj);
// delete obj.h
// console.log(obj);

// const arrayEx = [1, 4, 5]
// console.log(arrayEx);
// arrayEx[0] = undefined;
// console.log(arrayEx);
// console.log(arrayEx[0]);


// // ?Relational Operators
// const fruits = ["Apple", "Banana", "Cherry"];

// console.log(0 in fruits); // true (index 0 exists)
// console.log(2 in fruits); // true (index 2 exists)
// console.log(3 in fruits); // false (index 3 does not exist)
// console.log("Banana" in fruits); // false (checks index, not value)


const obj = {
    name: 'Hisham',
    age: 25
}
console.log(obj.x?.name); //undefined


















 



