/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const anagrams = {};

    for (const str of strs) {
        
        const sortedStr = str.split('').sort().join('');
        
        
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        anagrams[sortedStr].push(str);
    }

    
    return Object.values(anagrams);
}

