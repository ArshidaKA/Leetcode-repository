/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
   const reversed1= parseInt(String(num).split("").reverse().join(""));
  const reversed2=parseInt(reversed1.toString().split("").reverse().join(""));

   if(num===reversed2){
    return true
   }else{
    return false
   }
    
};