// For a more advanced word searcher, create a program that returns the number of times a word appears in an input string. For example, given an input word “new” and an input string “I’m the new newt,” the program should return a value of 2.

// const inputString = 'I’m the new newt';

// const wordFinder = (word) => {
//     const normalizeWord = word.toLowerCase();
//     const wordsArray = inputString
//         .toLowerCase()
//         .replace(/[^a-z\s]/g, '') // Remove non-alphanumeric characters except spaces
//         .split(/\s+/); // Split by spaces
//     let count = 0;

//     for (const element of wordsArray) {
//         if (element === normalizeWord) {
//             count++;
//         }
//     }

//     return count;
// };

// const result = wordFinder('new');
// // console.log(result); // Output: 2
// const inputString = 'I’m the new newt';

// const wordFinderCounter = (word) => {
//     const normalizedString = inputString.toLowerCase(); // Normalize input for case-insensitive matching
//     const normalizedWord = word.toLowerCase();
//     let count = 0;

//     // Iterate through the input string to find matches
//     for (let i = 0; i <= normalizedString.length - normalizedWord.length; i++) {
//         let match = true;
//         for (let j = 0; j < normalizedWord.length; j++) {
//             if (normalizedString[i + j] !== normalizedWord[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) count++;
//     }

//     return count;
// };
// const word = 'new'
// const result = wordFinderCounter(word);
// console.log("The word " + word + " is present " + result + " times in the String");

