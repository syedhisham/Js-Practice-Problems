const getMonthName = (mo) => {
    mo--;

    const months = [
        'Jan','Feb','March','April','May','Jun','July','Aug','Sep','Oct','Nov','Dec',
    ]

    if(months[mo]){
        return months[mo]
    }
    else{
        throw new Error('Invalid Month Number')
    }
}

const myMonth = 18;
let myMontFunc;
try {
    myMontFunc = getMonthName(myMonth)
} catch (error) {
   myMontFunc = 'Unknown Please enter valid month name'
   console.log(error.message);
   
}
console.log(myMontFunc);

