const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  
  let count = 0;

  if (Array.isArray(matrix) && matrix.length > 0) {
    matrix.forEach(item => {
      item.forEach(each => {
        if (each === '^^') {
          count++;
        }
      });
    });
  }

  return count;
}

module.exports = {
  countCats
};
