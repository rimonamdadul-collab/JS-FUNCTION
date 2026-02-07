function count_zero (str){
    let count = 0;
    for (let i =0; i <str.length; i++){
        if (str [i] === '0'){
        count++
        }
    }
    return count;
}
const even =count_zero('10010100')
console.log(even)