/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let listResult = l;
  while (listResult && listResult.value === k) {
    listResult = listResult.next;
  }
  let itemList = listResult;
  while (itemList && itemList.next !== null) {
    if (itemList.next.value === k) {
      itemList.next = itemList.next.next;
    }
    itemList = itemList.next;
  }
  return listResult;
}

module.exports = removeKFromList;
