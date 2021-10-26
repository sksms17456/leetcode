/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    const length = nums.length;

    if (length === 0) return 0;

    let answer = 1;

    for (let i = 1; i < length; i++) {
        if (nums[answer - 1] !== nums[i]) {
            nums[answer++] = nums[i];
        }
    }

    return answer;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
