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
  const arr = str.split('');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      if (arr[i + 1] === arr[i + 2]) {
        if (arr[i + 2] === arr[i + 3]) {
          if (arr[i + 3] !== arr[i + 4]) {
            res.push(`4${arr[i]}`);
            i += 3;
          }
        } else {
          res.push(`3${arr[i]}`);
          i += 2;
        }
      } else {
        res.push(`2${arr[i]}`);
        i++;
      }
    } else {
      (
        res.push(arr[i])
      );
    }
  }
  return res.join('');
}
// console.log(encodeLine('aaaatttt'))
module.exports = encodeLine;
