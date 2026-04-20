class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNumericString = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
        console.log(alphaNumericString)
        let left =0;
        let right =alphaNumericString.length-1;
        while(right >= left){
            if(!(alphaNumericString.charAt(left) == alphaNumericString.charAt(right))){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
