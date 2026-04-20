class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 0) return 0;
        let maxLength =1;
        let left =0;
        let right =1;

        for(let i=0;i<s.length;i++){
            for(let j = i+1;j<s.length;j++){
            if(!checkForRepeatedCharacters(i,j)){
                maxLength = Math.max(maxLength,j-i+1);
            }
            }
            
        }
        function checkForRepeatedCharacters(i,j){
            const subString = s.substring(i,j+1);
            const map ={};
            for(let s1 of subString){
               if(map[s1]){
                return true;
               } else{
                map[s1] = 1;
               }
            }
            return false;
        }

        return maxLength;
    }
}
