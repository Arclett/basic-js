const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const alph = "ABCDEF";
  const number = "0123456789";
  const x = n.replaceAll("-", "");
  for (let i = 0; i < x.length; i++) {
    if (!(alph.includes(x[i]) || number.includes(x[i]))) {
      return false;
    } else return true;
  }
}
module.exports = {
  isMAC48Address,
};
