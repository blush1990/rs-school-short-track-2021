/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let dom = '';
  domains.forEach((el) => {
    el.split('.').reverse().forEach((elem) => {
      dom += `.${elem}`;
      res[dom] = res[dom] ? res[dom] + 1 : 1;
    });
    dom = '';
  });
  return res;
}
// console.log(getDNSStats(['epam.com', 'info.epam.com']));
module.exports = getDNSStats;

// (['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
