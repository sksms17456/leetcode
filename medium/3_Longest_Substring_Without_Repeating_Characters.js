/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let answer = 0;
    let longestString = "";
    let getChar;

    for (let i = 0; i < s.length; i++) {
        getChar = s[i];

        if (longestString.includes(getChar)) {
            longestString += getChar;
            longestString = longestString.substring(
                longestString.indexOf(getChar) + 1
            );
        } else {
            longestString += getChar;
            answer = Math.max(answer, longestString.length);
        }
    }

    return answer;
};
