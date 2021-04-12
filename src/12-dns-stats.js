/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The sol should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const sol = {};

  domains.forEach((adress) => {
    const lvls = adress.split('.').reverse();
    let domain = '';

    lvls.forEach((level) => {
      domain += `.${level}`;
      if (domain in sol) {
        sol[domain]++;
      } else {
        sol[domain] = 1;
      }
    });
  });

  return sol;
}

module.exports = getDNSStats;
