class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length)
        return false;
        let map = {};
        let map2 ={};
        for(let i=0;i<s.length;i++){
            if(!map[s.charAt(i)]){
                map[s.charAt(i)] =1;
            }else{
                map[s.charAt(i)]++;
            }
        }
        for(let i=0;i<t.length;i++){
            if(!map2[t.charAt(i)]){
                map2[t.charAt(i)] =1;
            }else{
                map2[t.charAt(i)]++;
            }
        }

        for(let key in map){
            if(!(map[key] == map2[key]))
            return false;
        }
        return true;
    }
}
