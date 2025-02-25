/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const unique=[...new Set(nums)];
    const sorted=unique.sort((a,b)=>b-a);
    if(sorted.length<3){
        return sorted[0]
    }else{
    return sorted[2]}
    
};