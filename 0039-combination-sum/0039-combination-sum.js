/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    let result = [];
    
    function backtrack(start, currentCombination, currentSum) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }
        
        if (currentSum > target) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            backtrack(i, currentCombination, currentSum + candidates[i]);
            currentCombination.pop();
        }
    }
    
    backtrack(0, [], 0);
    return result;
}