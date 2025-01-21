/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
    let balanced = 0;
    let num = 0;   

    for (let char of s) {
        if (char === 'L') {
            balanced++;
        } else if (char === 'R') {
            balanced--;
        }
        
        if (balanced === 0) {
            num++;
        }
    }
return num;}
    