// 1. Anagrams
// Two words are anagrams if they contain the same letters but in a different order. Here are a few examples of anagram pairs:
// “listen” and “silent”
// “binary” and “brainy”
// “Paris” and “pairs”

let inputString1 = "listen";
let inputString2 = "silent";
// let anagramsArray = ''
// const anagramsFinder = (str1, str2) => {
//     for(let charOfStr1 of str1){
//         for(let charOfStr2 of str2){
//             if(charOfStr1 === charOfStr2){
//                 anagramsArray += charOfStr1
//             }

//         }
//     }
//     if(anagramsArray.length == str1.length){
//         console.log("Yes this is anagram");
//     }
//     else{
//         console.log("No this is not anagram");
//     }
// }
// anagramsFinder(inputString1, inputString2)

// const anagramsFinder = (str1, str2) => {
//     const normalizeString = (str) => str.split('').sort().join('');
//     if(normalizeString(str1) === normalizeString(str2)){
//         console.log("Yes, the " + str1 + " and " + str2 + " are anagrams");
//     }
//     else{
//         console.log("No, the " + str1 + " and " + str2 + " are not anagrams");

//     }
// }

// anagramsFinder(inputString1, inputString2)

// // Challenge: As an added challenge, for a given array of strings, return separate lists that group anagrams together. For example, the input {“tar,” “rat,” “art,” “meats,” “steam”}, the output should look something like {[“tar,” “rat,” “art”], [“meats,” “steam”]}.

// const groupAnagrams = (strings) => {
//   const anagramGroups = {};
//   for (const string of strings) {
//     const normalizeString = string.toLowerCase().split("").sort().join("");

//     if (!anagramGroups[normalizeString]) {
//       anagramGroups[normalizeString] = [];
//     }
//     anagramGroups[normalizeString].push(string);
//   }
//   return Object.values(anagramGroups);
// };
// const input = ["tar", "rat", "art", "meats", "steam"];
// const result = groupAnagrams(input);
// console.log(result);


const text = "hello world hello everyone";
const wordCounts = {};

for (const word of text.split(" ")) {
    wordCounts[word] = (wordCounts[word] || 0) + 1; 
}

console.log(wordCounts);

