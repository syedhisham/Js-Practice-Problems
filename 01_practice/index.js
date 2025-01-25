// for(let i = 0; i <= 10; i++){
//     for(let j = 0; j <= 10; j++){
//         console.log(i + ' X ' + j + ' = ' + j*i);

//     }
// }
// const converterFunction = (x) => {
//     return x / 1.609
// }
// console.log("The 10 km in miles is:", converterFunction(10));
// let total = 0;
// const numbersArray = [2, 4, 5, 7, 10, 2, 1];
// for(n in numbersArray){
//     total += numbersArray[n]
// }
// console.log(total);

// for(let index = numbersArray.length - 1 ; index >= 0; index--){
//     console.log(numbersArray[index]);
// }

// numbersArray.sort((a,b) => a-b)
// console.log(numbersArray);

// for (let i = 0; i < numbersArray.length; i++) {
//   for (let j = 0; j < numbersArray.length - i - 1; j++) {
//     if (numbersArray[j] > numbersArray[j + 1]) {
//       let temp = numbersArray[j];
//       numbersArray[j] = numbersArray[j + 1];
//       numbersArray[j + 1] = temp;
//     }
//   }
// }
// console.log(numbersArray);

// const negNumRemover = (x) => {
//     return x.filter((num) => num >= 0);
// };

// const negativeArray = [-1, -8, -2, 1, 4, 0];
// console.log(negNumRemover(negativeArray));

// const inputString = "Remove all the spaces in this string.";

// const removeWhiteSpaces = (str) => {
//     return str.replace(/\s/g, '');
// }
// console.log(removeWhiteSpaces(inputString));

// let number = 100;
// const boolFunction = (num) => {
//     if(num % 10 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(boolFunction(number));

// const vowels = ['a','e','i','o','u',]
// let temp = 0;
// const vowelsFinder = (str) => {
//     for(let i in str){
//         for(let j in vowels){
//             if(vowels[j] === str[i]){
//                 console.log(str[i]);
                
//                 temp++;
//             }
//         }
//     }
//     console.log(temp);
    
// }

// const vowelsFinder2 = (str) => {
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             console.log(char);
//             temp++;
            
//         }
//     }
//     console.log(temp);
    
// }

// vowelsFinder2("This is good")

// let maxNumber = 0;
// for(let num of numbersArray){
//     if(maxNumber < num){
//         maxNumber = num;
//     }
// }
// console.log(maxNumber);
// let newString = ''
// const palindromeCheck = (str) => {
//     const normalizedString = str.toLowerCase().replace(/\s+/g,'')
//     let reversedString = ''
//     for(let index = normalizedString.length - 1; index >= 0; index--){
//         reversedString += normalizedString[index]
//     }
//     if(reversedString === normalizedString){
//         console.log("Yes, This String is Palindrome");
        
//     }
//     else{
//         console.log("No, This String is not Palindrome");
        
//     }

// }
// palindromeCheck("MMMommm")

