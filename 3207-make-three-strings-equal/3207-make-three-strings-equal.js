/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {

   
    let minLength = Math.min(s1.length, s2.length, s3.length);
    let commonPrefixLength = 0;

    for (let i = 0; i < minLength; i++) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) {
            commonPrefixLength++;
        } else {
            break;
        }
    }

    
    if (commonPrefixLength === 0) {
        return -1;
    }

    
    const deletions1 = s1.length - commonPrefixLength;
    const deletions2 = s2.length - commonPrefixLength;
    const deletions3 = s3.length - commonPrefixLength;

    
    return deletions1 + deletions2 + deletions3;



    
};