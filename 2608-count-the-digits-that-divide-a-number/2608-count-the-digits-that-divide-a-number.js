/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let arr=num.toString().split('');
    let numArry=arr.map(Number);
    let output=[]
    for(let i=0;i<numArry.length;i++){
        if(num%numArry[i]===0)
        output.push(numArry[i]);
        
    
    }
    return output.length;
    
};