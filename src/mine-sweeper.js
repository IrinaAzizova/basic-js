const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  
  const matrixLength = matrix.length,
        rowLength = matrix[0].length;
  let counter = 0,
      result = [];

  for (let i=0; i < matrixLength; i++) {
      result.push([]);
  }

  for (let i=0; i < matrixLength; i++) {
    for (let j=0; j < rowLength; j++) {
      if (matrix[i-1] && matrix[i-1][j-1]) {
        counter++;
      } 
      if (matrix[i-1] && matrix[i-1][j]) {
        counter++;
      }
      if (matrix[i-1] && matrix[i-1][j+1]) {
        counter++;
      }
      if (matrix[i][j-1]) {
        counter++;
      }
      if (matrix[i][j+1]) {
        counter++;
      }
      if (matrix[i+1] && matrix[i+1][j-1]) {
        counter++;
      }
      if (matrix[i+1] && matrix[i+1][j]) {
        counter++;
      }
      if (matrix[i+1] && matrix[i+1][j+1]) {
        counter++;
      }
      result[i][j] = counter;
      counter = 0;
    }
  }      
  return result;
}

module.exports = {
  minesweeper
};
