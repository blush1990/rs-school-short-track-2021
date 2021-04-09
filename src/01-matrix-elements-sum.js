/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let i = matrix.length - 1; i >= 1; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        res += matrix[i - 1][j];
        if (i > 1) {
          res += matrix[i - 2][j];
        }
      }
    }
  }
  if (res === 0) {
    for (let k = 0; k < matrix.length; k++) {
      for (let f = 0; f < matrix[k].length; f++) {
        res += matrix[k][f];
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
