const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let x = 0;
  n.toString()
    .split("")
    .forEach((_, i) => {
      const y = n.toString().split("");
      y.splice(i, 1);
      x = x > Number(y.join("")) ? x : Number(y.join(""));
    });
  return x;
}

module.exports = {
  deleteDigit,
};
