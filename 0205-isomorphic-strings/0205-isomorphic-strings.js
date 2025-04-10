/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const patternS=[...s].map(x=> s.indexOf(x));
    const patternT=[...t].map(x=> t.indexOf(x));
    return patternS.toString()===patternT.toString()
    
};