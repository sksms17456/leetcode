/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let middle;

    if (target > nums[end]) return end + 1;
    if (target < nums[0]) return 0;

    while (start <= end) {
        middle = parseInt((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        if (start > end) return start;
    }
};
