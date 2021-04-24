//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.

function sumMix(x){
    return x.map(el => parseInt(el)).reduce((accum, ini) => accum + ini)
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));