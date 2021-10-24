/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const length = s.length;
    const brackets = {
        "(": 1,
        "[": 2,
        "{": 3,
        ")": 4,
        "]": 5,
        "}": 6,
    };
    let answer = false;
    let stack = [];
    let stackLength = 0;
    let value = brackets[s[0]];

    if (value > 3) {
        return answer;
    } else {
        stack.push(value);
        stackLength++;
    }

    for (let i = 1; i < length; i++) {
        let lastValue = stack[stackLength - 1];
        let currentValue = brackets[s.charAt(i)];

        if (currentValue < 4) {
            stack.push(currentValue);
            stackLength++;
        } else {
            if (currentValue - 3 === lastValue) {
                stack.pop();
                stackLength--;
            } else {
                stack.push(currentValue);
                stackLength++;
            }
        }
    }

    answer = stack.length === 0 ? true : false;

    return answer;
};
