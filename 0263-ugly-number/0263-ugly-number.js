/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {
    // Handle edge case where n is non-positive
    if (n <= 0) return false;

    for (let prime of [2, 3, 5]) {
        while (n % prime === 0) {
            n /= prime;  
        }
    }

    
    return n === 1;
}
