class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let map = {};
        let arr = [];

        points.sort((a,b) =>  {
            return (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1])
        });
        
        let output = [];
        for(let i=0;i<k;i++){
            output.push(points[i]);
        }

        return output;
    }
}
