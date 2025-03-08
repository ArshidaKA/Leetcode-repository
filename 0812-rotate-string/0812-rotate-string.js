/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
}