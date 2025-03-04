const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split(''),
        arr2 = s2.split('');
  let counter = 0;

  arr1.forEach( item => {
    let index = arr2.indexOf(item);
    if (index !== -1) {
      counter++;
      delete arr2[index];
    }
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
