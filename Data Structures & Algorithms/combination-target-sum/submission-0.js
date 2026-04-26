class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

     output = [];
     res = [];

    combinationSum(nums, target) {
        this.backtrack(0,nums,target);
        return this.output;
    }

    backtrack(index,nums,target){
        if(target == 0){
            this.output.push([...this.res]);
        }else if(target < 0 || index >= nums.length){
            return
        }else{
            this.res.push(nums[index]);
            this.backtrack(index,nums,target-nums[index]);
            this.res.pop();
            this.backtrack(index+1,nums,target);
        }
    }
}
