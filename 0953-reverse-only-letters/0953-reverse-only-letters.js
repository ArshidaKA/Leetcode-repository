/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let b=s.replace(/[^a-zA-Z]/g,"").split("")
    let c=s.split("").map(char=>/[a-zA-Z]/.test(char)? b.pop():char).join("");

    return c

    
   
};