/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const size = nums.length;
    nums.sort();
    for (let i = 0; i < size; ++i) {
        if (nums[i] === nums[i+1])
            return true;
    }
    return false;
};
