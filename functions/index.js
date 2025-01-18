const HelloFunction = () => {
    console.log('Hello, World!');
}
HelloFunction();

const sum = (x, y) => {
    return x + y;
}
console.log(sum(10,20));

const isEven = (x) => {
    if (x%2 == 0) {
        console.log("The number provided is even");
        
    }
    else {
        console.log('The number provided is not even');
        
    }
}
isEven(11)

function StringLength(string){
    console.log('The string length is', string.length);
    
}
StringLength('Hisham shah')