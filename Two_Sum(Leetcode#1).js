/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const size = nums.length;
    for (let i = 0; i < size; i++) {
        let currentNum = nums[i];
        
        let diff = target - currentNum;
        if (nums.indexOf(diff) !== -1 && i !== nums.indexOf(diff)) {
            return [i, nums.indexOf(diff)]
        }
        
    }
};
