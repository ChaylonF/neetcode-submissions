class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStrs = ""
        for (const element of strs) {
            encodedStrs += element.length + "#" + element
        }
        return encodedStrs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] { 
        const returnArr = []

        while (str.length > 0) {
            let count = Number(str.slice(0, str.indexOf("#", 0)))
            let a = str.indexOf('#') + 1
            let b = a + count
            returnArr.push(str.slice(a, b))
            str = str.slice(b)
        }
        return returnArr
    }
}
