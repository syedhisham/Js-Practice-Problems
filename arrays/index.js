let max = 0;
const fruitsArray = ["apple", "banana", "juice"];
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

// Step 2: Array Methods