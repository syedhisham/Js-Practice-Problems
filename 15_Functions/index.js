// function addSquares (a , b) {
//     function sqaure (x){
//         return x * x
//     }

//     return sqaure(a) + sqaure(b);
// }

// const result = addSquares(2 , 4)
// console.log(result);

// // Recursive function calls
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {

//       return n * factorial(n - 1);
//     }
//   }
//   console.log(factorial(5)); // 120

// let x = 0;
// // "x < 10" is the loop condition
// while (x < 3) {
//   console.log(x);

//   x++;
// }

// function loop(y){
//     if(y >= 3){
//         return;
//     }
//     console.log(y);
//     loop(y + 1)
// }
// loop(0)


// // Recursive functions
// function foo(i) {
//     if (i < 0) {
//       return;
//     }
//     console.log(`begin: ${i}`);
//     foo(i - 1);
//     console.log(`end: ${i}`);
//   }
//   foo(3);


// Object containing function

const person = {
  name: 'Hisham',
  greet: function(){
    console.log(`Hello my name is ${this.name}`);
    
  }
}
// person.greet()
// console.log(person.name);

// const person2 = {
//   name: 'Hammad',
//   greet: function() {
//     console.log(`Hello my name is ${this.name}`);
    
//   }
// }
// person2.greet()


// const animal = {
//   name: 'Dog',
//   setName(newName){
//     this.name = newName
//     return this.name
//   }
// }
// console.log(animal.name);
// console.log(animal.setName('Cat'));


// const createPet = function(name){
//   let sex;
  
//   const pet = {

//     setName(newName){
//       name = newName;
//     },

//     getName(){
//       return name;
//     },

//     setSex(newSex){
//       if(
//         typeof newSex === 'string' && 
//         newSex.toLowerCase() === 'male' ||
//         newSex.toLowerCase() === 'female'
//       ){
//         sex = newSex
//       }
//     },

//     getSex(){
//       return sex;
//     }
//   }
//   return pet
// }

// const newPet = createPet('Charls')
// console.log(newPet.getName());

// newPet.setName('Hellen')
// console.log(newPet.getName());

// newPet.setSex('male')
// console.log(newPet.getSex());



// function grades(){
//   const grade = 'A';
//   return grade
// }

// let myGrade  = grades()
// myGrade = 'B';
// console.log(myGrade);

// const getGrade = (function () {
//   const grade = 'A'; // Private
//   return function () {
//     return grade;
//   };
// })();

// let myGrade = getGrade();
// myGrade = 'C';
// console.log(myGrade);


// const getGrade = (function () {
//   const grade = 'A'; // Private
//   return function () {
//     return grade;
//   };
// })();

// console.log(getGrade()); // "A"
// getGrade.grade = "B"; // Won't affect the actual grade
// console.log(getGrade()); // Still "A"
// console.log(getGrade.grade);

// const getCode = (function() {
//   const apiKey = '45[]klj542'
  
//   return function(){
//     return apiKey
//   }
// })()

// console.log(getCode());



// // Default parameters
function multiply (a , b = 1) {
  return a * b
}

console.log(multiply(2));

