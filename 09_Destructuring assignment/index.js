// let a, b, rest;
// [a, b, ...rest] = [1, 2, 3, 4, 5]
// console.log(a);
// console.log(b);
// console.log(rest);

// Syntax:
// let [a,b] = [1,2]
// const exm = [a,b]
// console.log(Array.isArray(exm));

// let [a,b, ...[c,d]] = [1, 2, 3, 4, 5, 6, 7]

// console.log(d);

// const x = [1, 2, 3, 4, 5, 6, 7]
// const [y, z, ...rest] = x;
// console.log(typeof y);
// console.log(rest);

// const obj = {a: 1, b: 2}
// const obj = { a: 1, b: { c: 2 } };
// const {a, b: {c: d}} = obj
// console.log(a, d);

// const input = [['9:30', 1], ['9:00', 3], ['8:00', 3]]

// let [a, b, x] = input;
// console.log(a);
// console.log(b);

// let [c,d] = a
// let [e,f] = b
// let [y,z] = x
// console.log(c);
// console.log(d);

// let newArray = []

// if(f > d && f > z && z > d){
//     newArray.push(b)
//     newArray.push(x)
//    newArray.push(a)
// }
// else if(d > f && d > z && f > z){
//     newArray.push(a)
//     newArray.push(b)
//     newArray.push(x)
// }
// else if(z >= f && z > d && f > d){
//     newArray.push(x)
//     newArray.push(b)
//     newArray.push(a)
// }

// console.log(newArray);


// const aString = a.toString()
// const bString = b.toString()

// if(aString > bString){
//     console.log("Good");
// }


// const numbers = [];
// const obj = { a: 1, b: 2 , c:3};
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`
// console.log(obj);

// ({ a, b } = { a: 1, b: 2 })
//  a = 'hi'
//  console.log(a);
 



// const input = [['9:30', 1], ['9:00', 3], ['8:00', 3]]

// const [a, b, c] = input;

// console.log([c,b,a]);

// Swapping

// let a = 1;
// let b = 3;

// [a,b] = [b, a]
// console.log(a);
// console.log(b);


// Parsing an array returned from a function

// function f(){
//     return [1, 2, 3, 4, 5]
// }

// const [a , , , , b] = f();

// console.log(a);
// console.log(b);

// const [, ,...rest] = f()
// console.log( rest);



// Nested Binding Patterns
// const [a, b, ...[c, ...[d, ...[e,f]]]] = [1, 2, 3, 4, 5, 6];
// console.log(a, b,c, d,e,f); // 1 2 3 4 5 6



// Using array destructuring on any iterable

const [a, b] = new Map([
    ['09: 00', 2],
    ['10: 00', 4],
  ]);

  console.log(a[0]);
  






