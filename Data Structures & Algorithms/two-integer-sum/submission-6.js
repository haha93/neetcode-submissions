class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map ={};
        for(let i=0;i<nums.length;i++){
            map[nums[i]] = i;
        }
        console.log(map);

        for(let i=0;i<nums.length;i++){
            if(map[(target-nums[i]).toString()]){
                if(i != map[(target-nums[i]).toString()])
                return [i,map[(target-nums[i]).toString()]];
            }
        }
    }
}
