/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    return calcMaxSum(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const calcMaxSum = (nums, left, right) => {
    if (left === right) return nums[left];

    const middle = parseInt((left + right) / 2);
    let sum = 0;
    let leftMaxSum = -Infinity;
    let rightMaxSum = -Infinity;

    for (let i = middle; i >= left; i--) {
        sum += nums[i];
        leftMaxSum = Math.max(leftMaxSum, sum);
    }

    sum = 0;
    for (let i = middle + 1; i <= right; i++) {
        sum += nums[i];
        rightMaxSum = Math.max(rightMaxSum, sum);
    }

    return Math.max(
        calcMaxSum(nums, left, middle),
        calcMaxSum(nums, middle + 1, right),
        leftMaxSum + rightMaxSum
    );
};
