/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let addedNode = new ListNode();
    let current = addedNode;
    let val1, val2, plusedValue;
    let isUp = false;

    while (l1 || l2) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;

        l1 = l1.next ? l1.next : new ListNode(0);
        l2 = l2.next ? l2.next : new ListNode(0);

        plusedValue = isUp ? val1 + val2 + 1 : val1 + val2;

        isUp = plusedValue > 9 ? true : false;

        current.next = new ListNode(plusedValue % 10);
        current = current.next;

        if (isEndNode(l1, l2)) break;
    }

    if (isUp) {
        current.next = new ListNode(1);
    }

    return addedNode.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {boolean}
 */
const isEndNode = (l1, l2) => {
    return !l1.next && !l2.next && l1.val === 0 && l2.val === 0 ? true : false;
};
