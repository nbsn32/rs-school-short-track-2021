/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let mid = Math.floor(first + (last - first) / 2);

  while (array[mid] !== value) {
    if (value < array[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
    mid = Math.floor(first + (last - first) / 2);
  }

  return mid;
}

module.exports = findIndex;
