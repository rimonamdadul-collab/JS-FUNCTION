function isEvenSizedString (str){
    const size = str.length;
    console.log(size,str);
    if ( size % 2 ===0){
        console.log('even size')
        return true
    }
    else{
        console.log('odd size')
        return false
    }

}
// console.log(isEvenSizedString('dhaka'))   
// console.log(isEvenSizedString('faka'))  
function doubleOrTriple (number, double){
    if (double === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number *3;
        return result
    }
}
console.log(doubleOrTriple(5,true))
console.log(doubleOrTriple(5,false))
function arry (number){
    const len = number.length;
    return len;
}
console.log(arry([13, 54, 674, 2235, 67, 25]))