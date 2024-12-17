/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // Step 1: Create a frequency map to count occurrences of each number
    let freqMap = {};

    // Count the occurrences of each element in the array
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Step 2: Create an array of the frequency values
    let frequencies = Object.values(freqMap);

    // Step 3: Check if any frequency appears more than once using a set
    let frequencySet = new Set(frequencies);

    // If the size of the set is equal to the number of frequencies, all frequencies are unique
    return frequencies.length === frequencySet.size;
};

// Example usage:
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));  // Output: true
console.log(uniqueOccurrences([1, 2]));  // Output: false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));  // Output: true
