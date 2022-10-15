const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixReorg = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let acc = [];
    matrix.forEach((e) => {
      acc.push(e[i]);
    });
    matrixReorg.push(acc);
  }
  let accum = 0;
  matrixReorg.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] <= 0) break;
      accum += e[i];
    }
  });
  return accum;
}

module.exports = {
  getMatrixElementsSum,
};
