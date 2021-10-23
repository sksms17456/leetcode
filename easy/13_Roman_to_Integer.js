/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const length = s.length;
    const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900],
    ]);
    var answer = 0;
    var getRoman, getInteger;

    for (let i = 0; i < length; i++) {
        if (i == length - 1) {
            getRoman = s.substr(i, 1);
            getInteger = romanMap.get(getRoman);
            answer += getInteger;
        } else {
            getRoman = s.substr(i, 2);
            if (romanMap.get(getRoman)) {
                getInteger = romanMap.get(getRoman);
                answer += getInteger;
                i++;
            } else {
                getRoman = s.substr(i, 1);
                getInteger = romanMap.get(getRoman);
                answer += getInteger;
            }
        }
    }

    return answer;
};
