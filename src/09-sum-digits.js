/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
  result = String(n).split('');
  let calc = 0;
  for (let i = 0; i < result.length; i++) {
    calc += +result[i];
  }
  if (calc < 10) {
    return calc;
  }
  return getSumOfDigits(calc);
}

module.exports = getSumOfDigits;
