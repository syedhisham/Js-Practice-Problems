// do while loop

// let i = 0;

// do{
//     i++ ;
//     console.log(i);
    
// } while(i < 5)

// while(i < 10){
//     i++;
//     console.log(i);
    
// }

// Understandin break

// labels:for (let index = 0; index <= 2; index++) {
//     for(let i = 0; i <= 5; i++){
//         if(i === 3){
//             break labels
//         }
//         console.log('This is i: ',i);
//     }
//     console.log('This is index:', index);
// }

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 2 && x === 2) {
//       break labelCancelLoops;
//     } else if (z === 5) {
//       break;
//     }
//   }
// }


// // Understanding Continue statement with label
// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkJ: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkJ;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }


// const obj = { foo: 1, bar: 2 };

// for(const [key , value] of Object.entries(obj)){
//     console.log(key, value);
    
// }

// const map = new Map([
//     ["a", 1],
//     ["b", 2]
// ]);

// for (const value in map) {
//     console.log(map[value]);
// }

// const setEx = new Set([10, 20, 30])
// const newSet = setEx
// for(const value in newSet){
//     console.log(value);
    
// }

