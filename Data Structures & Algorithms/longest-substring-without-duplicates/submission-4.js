class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength =0;
        let left =0;
        const seen ={};
        for(let right =0;right<s.length;right++){
            

            while(seen[s.charAt(right)]){
                delete seen[s.charAt(left)];
                left++;
            }

            maxLength = Math.max(maxLength,right-left+1);
            seen[s.charAt(right)] =1;

        }
        return maxLength;
    }
}
