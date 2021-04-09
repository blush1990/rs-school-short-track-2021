/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// let s1 = '';
// let s2 = 'xyzbac';

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let temp;
  if (arr1.length < arr2.length) {
    temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  arr2.forEach((item) => {
    const index = arr1.indexOf(item);
    if (index !== -1) {
      count++;
      arr1.splice(index, 1);
    }
  });
  return count;
}
// console.log(getCommonCharacterCount(s1, s2))
module.exports = getCommonCharacterCount;
