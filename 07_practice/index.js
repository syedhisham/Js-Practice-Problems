// 1. Armstrong numbers

// An Armstrong number is a whole number that’s equal to the sum of its digits raised to the power of the total number of digits.

// Create an Armstrong number checker that returns a Boolean TRUE if the input number is an Armstrong number.

// const armstrongNum = 8208;

// const toStringInputNum = armstrongNum.toString()
// const power = toStringInputNum.length
// let sum = 0;

// for(let num of toStringInputNum){
//     sum += Number(num) ** power
// }
// if(sum === armstrongNum){
//     console.log(`Yes, the number ${armstrongNum} is an Armstrong Number`);
    
// }
// else{
//     console.log(`No, the number ${armstrongNum} is not an Armstrong Number`);
// }

// If you’re looking for something a little more challenging, create an Armstrong number calculator that returns all Armstrong numbers between 0 and the input number.
const inputNumber = 12;

const findArmstrongNumbers = (num) => {
    let armstrongNumbers = [];

    for (let i = 0; i <= num; i++) {
        let power = i.toString().length;
        let splitStringNum = i.toString().split('');
        console.log(splitStringNum);
        
        let sum = 0;

        for (let str of splitStringNum) {
            sum += Number(str) ** power;
        }

        if (sum === i) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
};

console.log(findArmstrongNumbers(inputNumber));
