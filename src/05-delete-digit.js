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

function deleteDigit(num) {
  const res = String(num).split('');
  const minNum = Math.min.apply(null, res);
  const min = res.indexOf(String(minNum));
  res.splice(min, 1);
  return Number(res.join(''));
}

module.exports = deleteDigit;
