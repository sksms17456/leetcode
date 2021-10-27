/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    const needleLength = needle.length;

    if (needleLength === 0) return 0;

    const range = haystack.length - needleLength + 1;
    const startChar = needle[0];

    for (let i = 0; i < range; i++) {
        if (
            haystack[i] === startChar &&
            haystack.substr(i, needleLength) === needle
        ) {
            return i;
        }
    }

    return -1;
};

console.log(strStr("helloll", "hl"));
