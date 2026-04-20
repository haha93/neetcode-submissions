class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map ={};
        const finalarr =[];
        for(let i=0;i<strs.length;i++){
            const chararr =new Array(26).fill(0);
            for(let j =0;j<strs[i].length;j++){
                chararr[strs[i].charCodeAt(j)-97]++;
            }
            if(map[chararr]){
                map[chararr].push(i)
            }else{
                map[chararr] = [i];
            }
            
        }

        for(const key in map){
            let arr = [];
            for(let k =0;k<map[key].length;k++){
                arr.push(strs[map[key][k]]);
            }
            finalarr.push(arr);
        }

        return finalarr;
    }
}
