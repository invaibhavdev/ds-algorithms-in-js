/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    if (s.split('').sort().join('') === t.split('').sort())
        return true;
    return false;
};
