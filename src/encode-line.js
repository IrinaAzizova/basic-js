const { NotImplementedError } = require('../extensions/index.js');

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
  
  if (typeof(str) === 'string') {
    const arr = str.split('');

    let tempArr =[],
        currIndex = 0;

    arr.forEach( (item, i) => {
      if (i === 0) {
        tempArr.push([1, item]);
      } else {
        if (arr[i] === arr[i - 1]) {
          tempArr[currIndex][0] += 1;
        }
        else {
          currIndex++;
          tempArr[currIndex] = [1, item];
        }
      }
    });

    let result = [];

    tempArr.forEach(item => {
      if (item[0] > 1) {
        result.push(item[0]);
      }
      result.push(item[1]);
    });
    
    return result.join('');
  }
}

module.exports = {
  encodeLine
};
