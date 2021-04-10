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
  const res = String(n).split('');
  let result = 0;
  if (res.length === 2) {
    result = Number(res[0]) + Number(res[1]);
  } else if (res.length === 3) {
    result = Number(res[0]) + Number(res[1]) + Number(res[2]);
  } else {
    (
      result = Number(res[0])
    );
  }

  if (String(result).split('').length > 1) {
    result = String(result).split('');
    result = Number(result[0]) + Number(result[1]);
  }
  return result;
}
// console.log(getSumOfDigits(98))
module.exports = getSumOfDigits;
