/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const length = nums.length;

    if (length === 0) return 0;

    let answer = 0;

    for (let i = 0; i < length; i++) {
        if (nums[i] !== val) {
            nums[answer++] = nums[i];
        }
    }

    return answer;
};
