/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function validPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            let removeLeft = s.slice(0, left) + s.slice(left + 1);
            let removeRight = s.slice(0, right) + s.slice(right + 1);
            return isPalindrome(removeLeft) || isPalindrome(removeRight);
        }
        left++;
        right--;
    }
    
    return true;
}

