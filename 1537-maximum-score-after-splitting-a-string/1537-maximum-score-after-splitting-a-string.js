/**
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
    let maxScore = 0;
    let leftZeros = 0;
    let rightOnes = s.split('').filter(char => char === '1').length;
    
   
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }
        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }
    
    return maxScore;
}