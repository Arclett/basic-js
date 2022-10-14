const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, object) {
  if (!object?.additionSeparator) {
    object.additionSeparator = "|";
  }
  if (!object?.separator) {
    object.separator = "+";
  }
  if (!object?.repeatTimes) {
    object.repeatTimes = 1;
  }
  if (!object?.additionRepeatTimes) {
    object.additionRepeatTimes = 1;
  }
  let x = "";
  for (let i = 0; i < object.repeatTimes; i++) {
    let y = "";
    if (object.hasOwnProperty("addition")) {
      for (let j = 0; j < object.additionRepeatTimes; j++) {
        if (y.length === 0) y += object.addition;
        else y += object.additionSeparator + object.addition;
      }
    }
    if (x.length === 0) {
      x += str + y;
    } else {
      x += object.separator + str + y;
    }
  }
  return x;
}

module.exports = {
  repeater,
};
