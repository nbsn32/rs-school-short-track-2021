/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = n.toString().split('').map((number, index, array) => {
    const newArray = [...array];
    newArray.splice(index, 1);

    return +newArray.join('');
  });

  return Math.max(...result);
}

module.exports = deleteDigit;
