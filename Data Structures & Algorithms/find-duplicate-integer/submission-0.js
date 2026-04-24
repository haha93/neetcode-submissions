class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if(nums.length == 1){
            return nums[0];
        }
        let map = {};
        for(let i=0;i<nums.length;i++){
            if(map[nums[i]]){
                return nums[i];
            }else{
                map[nums[i]] = 1;
            }
        }
    }
}
