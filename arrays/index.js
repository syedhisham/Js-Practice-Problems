let max = 0;
const fruitsArray = ["apple", "banana", "cherry"];
console.log(typeof Array.isArray(fruitsArray));
console.log("This is the first element of the array", fruitsArray[0]);
for (let i = 0; i < fruitsArray.length; i++) {
  console.log(i + ":" + fruitsArray[i]);
  max += i;
}
fruitsArray[max] = "red";
console.log("Array after adding element to the end", fruitsArray);
fruitsArray.shift();
console.log("Array after shifting", fruitsArray);
fruitsArray.push('Peach')
console.log("Array after pushing", fruitsArray);

// Step 2: Array Methods
const fruitsLength = fruitsArray.map((fruit) => {
  return fruit.length
})
console.log(fruitsLength);
const fruitsLengthWithMethod2 = fruitsArray.map(fruit => fruit.length)
console.log(fruitsLengthWithMethod2);

const filterArray = ['firstName', 'last', 'num']
const filterArrayLength = filterArray.map(element => element.length)
for(let index = 0; index < filterArrayLength.length; index++){
  if (filterArrayLength[index] > 6) {
    console.log('Only 6 characters are allowed. Correct the element with index: ' + index + ' and element: ' + filterArray[index]);
  }
}
console.log(filterArrayLength);

const newArrayWithLongFruitsNames = fruitsArray.filter(fruit => fruit.length > 5)
console.log(newArrayWithLongFruitsNames);

fruitsArray.forEach((element) => {
  console.log(element);
})








 

 