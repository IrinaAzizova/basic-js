const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    const newArr = arr.slice()
    arr.forEach( (item, i) => {
      switch (item) {
        case ('--discard-next'): 
          newArr.splice(i, 2);
          break;
        case ('--discard-prev'):
          newArr.splice(i-1, 2);
          break;
        case ('--double-next'):
          newArr[i] = arr[i+1];
          break;
        case ('--double-prev'):
          newArr[i] = arr[i-1];
          break;
      }
    });
    return newArr;
  }
}

module.exports = {
  transform
};
