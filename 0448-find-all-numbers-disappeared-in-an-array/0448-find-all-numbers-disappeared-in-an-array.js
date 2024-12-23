/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    const n = nums.length;
    const numSet = new Set(nums); 
    return Array.from({ length: n }, (_, i) => i + 1).filter(num => !numSet.has   (num));
}