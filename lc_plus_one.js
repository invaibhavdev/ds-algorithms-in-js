/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1;
    while (index >= 0) {
        if (digits[index] === 9) {
            digits[index] = 0;
            index -= 1;
            continue;
        }
        digits[index] += 1;
        break;
    }
    if (digits[0] === 0) {
        digits.unshift(1);
    }
    return digits;
};
