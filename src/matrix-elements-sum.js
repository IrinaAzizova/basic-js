const { NotImplementedError } = require('../extensions/index.js');

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
  
  let sum = 0;
  const colLength = matrix.length,
        rowLength = matrix[0].length;

  for (let j = 0; j < colLength; j++){
   for (let i = 0; i < rowLength; i++){
    if (j === 0) {
      sum += matrix[j][i];
    } else {
      if (matrix[j-1][i] !== 0) {
        sum += matrix[j][i];
      }
    }
   }
  }
  return sum;
  
}

module.exports = {
  getMatrixElementsSum
};
