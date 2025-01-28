// 1. A pangram is a sentence that contains all 26 letters of the English alphabet. One of the most well-known examples of a pangram is, “The quick brown fox jumps over the lazy dog.” Create a pangram checker that returns a Boolean TRUE if an input string is a pangram and FALSE if it isn’t.

let englishLettersArray = [];
for (let i = 97; i <= 122; i++) {
  englishLettersArray += String.fromCharCode(i);
}
// console.log(englishLettersArray);
const InputString = "Mr. Jock, TV quiz Ph.D., bags few lynx. ";
// let emptyString = "";

// const panagramFinder = (string) => {
//   const finalString = string
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("")
//     .replace(/\s+/g, "");
//   for (let str of finalString) {
//     emptyString += str;
//   }
//   const combinedString = emptyString + englishLettersArray;
//   const unionSet = new Set(combinedString);
//   const isPanagramString = [...unionSet].join("");
//   if (isPanagramString === englishLettersArray) {
//     return "Yes, the string: " + string + " is panagram";
//   } else {
//     return "No, the string: " + string + " is not panagram";
//   }
// };
// const result = panagramFinder(InputString);
// console.log(result);

const panagramFinder = (string) => {
    const finalString = string.toLowerCase().replace(/\s+/g, '');
    const uniqueChars = new Set(finalString)

    for(let str of englishLettersArray){
        if(!uniqueChars.has(str)){
            return "No, the string: " + string + " is not panagram";
        }
        
    }
    return "Yes, the string: " + string + " is panagram";
}
const result = panagramFinder(InputString);
console.log(result);
