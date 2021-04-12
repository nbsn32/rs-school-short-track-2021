/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;

  return str.split('').reduce((out, letter, index, array) => {
    const nextLetter = array[index + 1];
    count += 1;

    if (letter !== nextLetter) {
      const countBackup = count;
      count = 0;

      return `${out}${(countBackup > 1) ? countBackup : ''}${letter}`;
    }

    return out;
  }, '');
}

module.exports = encodeLine;
