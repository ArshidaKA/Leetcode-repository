/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let a=nums.map((num)=>num*num)
    return a.sort((a,b)=>a-b)
    
};