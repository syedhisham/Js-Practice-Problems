// 1. Count vowels and consonants

//With this challenge, you’ll create a program that will count the number of vowels and the number of consonants in a string.
// const inputString = 'I love Codecademy';
// const vowels = 'aeiou';
// let vowelCount = 0;
// let consonantCount = 0;

// const vowelAndConsonantsCounter = (string) => {
//     const finalString = string.toLowerCase().replace(/\s+/g, '');

//     for(let char of finalString){
//         if(vowels.includes(char)){
//             vowelCount++
//         }
//         else if(char >= 'a' && char <= 'z'){
//             consonantCount++
//         }
//     }
//     console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
// };

// vowelAndConsonantsCounter(inputString);

// 2. Number reversal

//This one is a technical interview favorite. For a given input number, return the number in reverse. So, an input of 3956 should return 6593.

// const number = 6593

// const numberReversal = (num) => {
//     const stringNumber = num.toString()
//     const reverNumber = stringNumber.split('').reverse().join('')    
//     console.log(reverNumber);
    
// }
// numberReversal(number)

// If you’re ready for a bigger challenge, reverse a decimal number. The decimal point should stay in the same place. So, the number 193.56 should output 653.91.

const deciNum = 193.56
const stringdeciNum = deciNum.toString()
let dotPosition = 0;
for(let i in stringdeciNum){
    if(stringdeciNum[i] === '.'){
        dotPosition = i
    }
}
console.log(dotPosition);

const [integerPart, fracPart] = stringdeciNum.split('.')

const combineNumber = integerPart + fracPart
const reverseNumber = combineNumber.split('').reverse().join('')
const result =
  reverseNumber.slice(0, dotPosition) + '.' + reverseNumber.slice(dotPosition);
  console.log(parseFloat(result));
  


