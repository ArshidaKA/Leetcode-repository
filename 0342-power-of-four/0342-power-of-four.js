var isPowerOfFour = function(n) {
    if (n <= 0) return false;  // Negative numbers and zero can't be powers of four
    while (n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
};

// Example usage:
console.log(isPowerOfFour(16));  // Output: true
console.log(isPowerOfFour(5));   // Output: false
console.log(isPowerOfFour(1));   // Output: true
