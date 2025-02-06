/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let a=num.split("");
    for (let i=a.length-1;i>=0;i--){
        if(a[i]!="0"){
            break;
        }
        a.pop();

    }
            return a.join("");
    
};