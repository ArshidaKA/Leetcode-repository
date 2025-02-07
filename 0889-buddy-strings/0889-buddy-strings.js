/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const diffIndices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
        }
    }

    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        return s[i] === goal[j] && s[j] === goal[i];
    } else if (diffIndices.length === 0) {
       
        const charCount = new Set(s).size;
        return charCount < s.length;
    } else {
        return false;
    }
}

