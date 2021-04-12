/**
 * Given an array with heights, sort them except if the value is -1.
 *
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [];
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArray.push(arr[i]);
    }
  }
  newArray.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resultArray.push(arr[i]);
    } else {
      resultArray.push(newArray.shift());
    }
  }
  return resultArray;
}

module.exports = sortByHeight;
