class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    output =[];
    res = [];
    subsets(nums) {
        this.dp(0,nums);
        return this.res;
    }

    dp(i,nums){
        if(i >= nums.length ){
            this.res.push([...this.output]);
            return;
        }

        this.output.push(nums[i]);
        this.dp(i+1,nums);

        this.output.pop();
        this.dp(i+1,nums);
        
    }
}
