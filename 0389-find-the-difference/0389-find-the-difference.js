/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let b=t.split('').sort();
    let a=s.split('').sort();
    for(let i=0;i<b.length;i++){
        if (b[i]!==a[i]){
            return b[i]
        }
    }

};