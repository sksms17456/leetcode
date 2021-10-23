/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let answer = "";

    const length = strs.length;
    const standard = strs[0];
    const standardLength = strs[0].length;

    for (let i = 0; i < standardLength; i++) {
        const getChar = standard.charAt(i);

        for (let j = 1; j < length; j++) {
            if (getChar !== strs[j].charAt(i)) {
                return answer;
            }
        }

        answer += getChar;
    }

    return answer;
};
