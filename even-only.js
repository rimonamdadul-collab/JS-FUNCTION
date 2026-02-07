function evenNumberOnly (numbers){
    let evens = [];
for (const  Number of numbers){
    if (Number % 2 === 0){
     evens.push(Number)
    }
   
}
return evens
}
const arry = [29,42, 33,55,44]
const even1 = evenNumberOnly(arry)
// console.log(even1)
function sumOfNumbers (numbers){
    let sum = 0;
    for (const number of numbers){
        if (number % 2 ===1){
         sum = sum + number;
        }
    }
    return sum;
}
const num1 =[13,35,76,25,576]
const ssl= sumOfNumbers(num1)
console.log(ssl)


 