/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero=nums.filter((item)=>item===0);
    let nonZero=nums.filter((item)=>item!==0);
    let newArr=[...nonZero,...zero]
    return nums.splice(0,nums.length,...newArr)
    
};