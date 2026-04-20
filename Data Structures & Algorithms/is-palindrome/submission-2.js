class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNumericString = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
        return alphaNumericString.split('').reverse().join('') == alphaNumericString;
    }
}
