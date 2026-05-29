class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let j = 0; j < nums.length; j++) {
            if (map.has(nums[j])) {
                map.set(nums[j], map.get(nums[j]) + 1);
            } else {
                map.set(nums[j], 1);
            }
        }
        
        const arr = [...map.entries()];
        arr.sort((a, b) => b[1] - a[1]);
        
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(arr[i][0]);
        }
        return result;
    }
}