class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++){
            if(!binarySearch(matrix[i],target)){
                continue
            }else{
                return true;
            }
        }
        return false;

        function binarySearch(arr,target){
            let left =0;
            let right = arr.length-1;
            while(left <= right){
                const mid = Math.floor((left+right)/2);
                if(arr[mid] == target){
                    return true;
                }

                if(arr[mid] > target){
                    right = mid-1;
                }

                if(arr[mid] < target){
                    left = mid+1;
                }
            }

            return false;
        }
    }
}
