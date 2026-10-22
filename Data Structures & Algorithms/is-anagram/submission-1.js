class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const arrT = t.split("")

        for (let i = 0; i < s.length; i++){
            for (let j = 0; j < arrT.length; j++){
                if (s[i] === arrT[j]){
                    arrT.splice(j, 1)
                    break
                }
            }
        }

        if (arrT.length === 0) return true
        return false
    }
}
