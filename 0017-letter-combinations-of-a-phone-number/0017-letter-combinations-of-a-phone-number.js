/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (!digits) return [];

    const digitToLetters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    return digits.split('').reduce((acc, digit) => {
        let letters = digitToLetters[digit];
        let newCombinations = [];
        
        for (let prefix of acc) {
            for (let letter of letters) {
                newCombinations.push(prefix + letter);
            }
        }
        
        return newCombinations;
    }, [""]);
}
