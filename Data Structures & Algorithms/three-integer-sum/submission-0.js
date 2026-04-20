class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const finalSumArray = [];
        for(let i=0;i<nums.length;i++){
            for(let j =i+1;j<nums.length;j++){
                for(let k = j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k] == 0){
                        if(!finalSumArray.includes([nums[i],nums[j],nums[k]].sort((a,b) => a-b)))
                        finalSumArray.push([nums[i],nums[j],nums[k]].sort((a,b) => a-b));
                    }
                }
            }
        }

        const map = {};
        const output = [];
        for (let arr of finalSumArray){
            if(map[arr.toString()]){
                continue;
            }else{
                map[arr.toString()] = true;
                output.push(arr);
            }
        }
        return output;
    }
}
