/**
 * @param {number[]} nums
 * @return {number[]}
 */
function distinctDifferenceArray(nums) {
    const n = nums.length;
    const diff = new Array(n).fill(0);

    const prefixSet = new Set();
    const prefixCounts = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSet.add(nums[i]);
        prefixCounts[i] = prefixSet.size;
    }

    const suffixSet = new Set();
    const suffixCounts = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffixCounts[i] = suffixSet.size;
        suffixSet.add(nums[i]);
    }

    for (let i = 0; i < n; i++) {
        diff[i] = prefixCounts[i] - suffixCounts[i];
    }

    return diff;
}

