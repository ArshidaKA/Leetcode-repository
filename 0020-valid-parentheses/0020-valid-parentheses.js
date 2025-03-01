/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = [];
    let bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in bracketMap) {
            let topElement = stack.length ? stack.pop() : '#';
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
