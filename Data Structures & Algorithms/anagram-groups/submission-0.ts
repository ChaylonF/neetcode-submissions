class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const uniqueStr = [];
        const result = [];

        for (const element of strs) {
            const elementSort = element.split("").sort().join("")

            if (!uniqueStr.includes(elementSort)){
                uniqueStr.push(elementSort)
                result.push([element])
            } else {
                result[uniqueStr.indexOf(elementSort)].push(element)
            }
        }
        
        return result
    }
}
