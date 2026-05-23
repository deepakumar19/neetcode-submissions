class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        } else {
            let m = new Map();
            let n = new Map();
            let count1 = 0;
            let count2 = 0;
            for (let i = 0, j = 0; i < s.length && j < t.length; i++, j++) {
                if (m.has(s[i])) {
                    count1 = m.get(s[i]);
                    count1++;
                } else {
                    count1 = 1;
                }
                m.set(s[i], count1);
                if (n.has(t[j])) {
                    count2 = n.get(t[j]);
                    count2++;

                } else {
                    count2 = 1;
                }

                n.set(t[j], count2)
            }
            // Iterate through the entries of one map
            for (let [char, count] of m) {
                // Check if the other map has the same character and the same count
                if (n.get(char) !== count) {
                    return false;
                }
            }


        }
        return true;
    }
}
