class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map =new Map();
        for(let i=0;i<nums.length;i++){
            if(map.get(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }else{
                map.set(nums[i], 1);
            }
        }
        const sortedMapByValue = new Map([...map].sort((a,b) => {
            return b[1]-a[1];
        }));
        
        return Array.from(sortedMapByValue.keys()).slice(0, k);
    }
}
