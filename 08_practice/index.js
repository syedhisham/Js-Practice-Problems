// 1. Product maximizer

// For a given input array of numbers, find the two that result in the largest product. The output should include the two numbers in the array along with their product.

// const inputArray = [1 ,2 , 10, 10, 5, 20, 10];

// const largestProductFinder = (inputNum) => {
//     inputNum.sort((a,b) => a - b)
//     let largestNum = 1;
//     for(let i = inputNum.length - 1; i >= inputNum.length - 2; i--){
//         largestNum *= inputNum[i]
//     }
//     console.log(largestNum);
    
// }
// largestProductFinder(inputArray)



 // As an extra challenge, use an input of two arrays of numbers and find two numbers — one from each input array — that results in the largest product.

const inputArray1 = [2,4,1,10];
const inputArray2 = [5,2,3];

const highestProductFinder = (arrayNum1, arrayNum2) => {
    arrayNum1.sort((a,b) => a-b);
    arrayNum2.sort((a,b) => a-b);

    
}