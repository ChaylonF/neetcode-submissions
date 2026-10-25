class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const counts = new Map()
        const output = []

        for (const num of nums) {
            if (counts.has(num)) {
                const prev = counts.get(num)
                counts.set(num, prev + 1)
            } else {
                counts.set(num, 1)
            }
        }

        const sortedCounts = Array.from(counts).sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            output.push(sortedCounts[i][0])
        }

        return output
    }
}
