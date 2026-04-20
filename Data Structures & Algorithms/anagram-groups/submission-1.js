class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map ={};
        const finalOutPut = [];
        for(let i=0;i<strs.length;i++){
            const sortedString = strs[i].split("").sort().join();
            if(map[sortedString]){
               map[sortedString].push(strs[i]); 
            }else{
                map[sortedString] = [strs[i]];
            }
        }
        for(let key in map){
            finalOutPut.push(map[key]);
        }
        return finalOutPut;
        
    }
}
