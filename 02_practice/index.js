// 1. Word reversal

// const reverseWords = (str) => {
//     const splittedArray = str.split(' ');
//     const reversedString = splittedArray.reverse();
//     const rejoinedString = reversedString.join(' ');
//     return rejoinedString;
// }

// const string = 'I love my MOM(TIM)';
// console.log(reverseWords(string));

// const reverseWords = (str) => {
//     let result = ''
//     let word = ''
//     for (let index = str.length - 1; index >= 0; index--) {
//         if(str[index] === ' '){
//             result += word + ' ';
//             word = ''
            
//         }
//         else{
//             word = str[index] + word            
//         }
//     }
//     result += word;
//     return result
    
// }
// const input = 'This is me'
// console.log(reverseWords(input));

// 2. Find the word

// let inputString = 'Hey there! I am using VScode'
// const wordFinder = (str) => {
//     const splittedString = inputString.split(' ');
//     for(let word in splittedString){
//        if(splittedString[word] === str){
//         return 'The word ' + str + ' is found at index ' + word;
//        }
//     }
//     return 'The word ' + str + ' is not found'
    
// }
// console.log(wordFinder('VScode'));

// 3. Word search

// const isStringStartWithWord = (str) => {
//     let splittedString = inputString.split(' ');
//     if(splittedString[0] === str){
//         return 'Yes, the string starts with the word ' + str
//     }
//     else{
//         return 'No, the string does not starts with the word ' + str
//     }
// }

// console.log(isStringStartWithWord('Hey'));

