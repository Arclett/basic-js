const { NotImplementedError } = require("../extensions/index.js");

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
  const short = s1.length >= s2.length ? s2 : s1;
  const long = s1.length >= s2.length ? s1 : s2;
  const shortSet = new Set(short.split(""));
  let z = 0;
  shortSet.forEach((e) => {
    const x = short.split("").reduce((acc, elem) => {
      if (elem === e) return ++acc;
      else return acc;
    }, 0);
    const y = long.split("").reduce((acc, elem) => {
      if (elem === e) return ++acc;
      else return acc;
    }, 0);
    z += x >= y ? y : x;
  });
  return z;
}

module.exports = {
  getCommonCharacterCount,
};
