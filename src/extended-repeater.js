const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}) {
  
  let total = [],
    add = [];
  
  const addStr = addition === undefined ? '' : `${addition}`;
  if (!repeatTimes) {
    repeatTimes = 1;
  }

  if (!additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  if (!separator) {
    separator = '+';
  }

  if (!additionSeparator) {
    additionSeparator = '|';
  }
  for (let j = 0; j < additionRepeatTimes; j++) {
    add.push(addStr);
  }
  for (let i = 0; i < repeatTimes; i++) {
    
    total.push(`${str}` + add.join(additionSeparator));
  }

  return total.join(separator);
}

module.exports = {
  repeater
};
