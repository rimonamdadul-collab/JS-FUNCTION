function oddNumbers (numbers){
    console.log(numbers)
        if (numbers % 2 === 1){
           const diff = numbers *2;
           return diff
        }
        else {
        const diff = numbers /2;
        return diff
        }
    }
   

const odd = oddNumbers(5)
console.log(odd)