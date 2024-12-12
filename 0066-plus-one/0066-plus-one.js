/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    const num=digits.join(''); 
    const nextNum=BigInt(num)+1n;
    const arr=nextNum.toString().split('').map(Number)
    return arr
    
};