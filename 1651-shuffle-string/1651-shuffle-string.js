/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
 
  let shuffled = new Array(s.length);


  for (let i = 0; i < s.length; i++) {
    shuffled[indices[i]] = s[i];
  }

  
  return shuffled.join("");
}