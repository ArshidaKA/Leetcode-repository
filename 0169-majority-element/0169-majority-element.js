/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};
    const countLimit = Math.floor(nums.length / 2);

    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > countLimit) {
            return num;
        }
    }
};
