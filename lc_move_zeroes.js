/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;
    let diff = 1;
    for(let i=0; i<nums.length-k; i=i+diff) {
        for (let j = i; j < nums.length; ++j) {
            if(nums[j] !== 0) {
                continue;
            }
            ++k;
            nums.splice(j, 1);
            nums.push(0);
            diff = j-i;
            break;
        }
        if (k===0)
            break;

        }
