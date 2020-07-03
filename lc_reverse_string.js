/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s.reverse();
    let length = s.length;
    for (let i = 0; i < length/2; ++i) {
        let temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
};
