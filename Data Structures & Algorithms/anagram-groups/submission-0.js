class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) {
            return [strs];
        }


        const groups = new Map();
        for (let str of strs) {
            const key = str.split('').sort().join('');







            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(str)
        }


        return Array.from(groups.values());

    }
}
