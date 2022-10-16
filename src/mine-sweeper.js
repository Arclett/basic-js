const { NotImplementedError } = require("../extensions/index.js");

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
  return matrix.map((e, i, arr) => {
    return e.map((elem, ind, array) => {
      let count = 0;
      if (ind === 0) {
        if (i === 0) {
          if (array[1]) count++;
          if (arr[1][0]) count++;
          if (arr[1][1]) count++;
        }
        if (i > 0 && i < arr.length - 1) {
          if (array[1]) count++;
          if (arr[i - 1][0]) {
            console.log(e[i - 1][0]);
            count++;
          }
          if (arr[i - 1][1]) count++;
          if (arr[i + 1][1]) count++;
          if (arr[i + 1][0]) count++;
        }
        if (i === arr.length - 1) {
          if (array[1]) count++;
          if (arr[arr.length - 2][0]) count++;
          if (arr[arr.length - 2][1]) count++;
        }
      } else if (ind > 0 && ind < array.length - 1) {
        if (i === 0) {
          if (array[ind - 1]) count++;
          if (array[ind + 1]) count++;
          if (arr[1][ind]) count++;
          if (arr[1][ind + 1]) count++;
          if (arr[1][ind - 1]) count++;
        }
        if (i > 0 && i < arr.length - 1) {
          if (array[ind - 1]) count++;
          if (array[ind + 1]) count++;
          if (arr[i - 1][ind]) count++;
          if (arr[i - 1][ind - 1]) count++;
          if (arr[i - 1][ind + 1]) count++;
          if (arr[i + 1][ind]) count++;
          if (arr[i + 1][ind - 1]) count++;
          if (arr[i + 1][ind + 1]) count++;
        }
        if (i === arr.length - 1) {
          if (array[ind - 1]) count++;
          if (array[ind + 1]) count++;
          if (arr[arr.length - 2][ind]) count++;
          if (arr[arr.length - 2][ind + 1]) count++;
          if (arr[arr.length - 2][ind - 1]) count++;
        }
      } else if (ind === array.length - 1) {
        if (i === arr.length - 1) {
          if (array[ind - 1]) count++;
          if (arr[arr.length - 2][array.length - 1]) count++;
          if (arr[arr.length - 2][array.length - 2]) count++;
        }
        if (i > 0 && i < arr.length - 1) {
          if (array[ind - 1]) count++;
          if (arr[i - 1][array.length - 1]) count++;
          if (arr[i - 1][array.length - 2]) count++;
          if (arr[i + 1][array.length - 1]) count++;
          if (arr[i + 1][array.length - 2]) count++;
        }
        if (i === 0) {
          if (array[ind - 1]) count++;
          if (arr[1][array.length - 1]) count++;
          if (arr[1][array.length - 2]) count++;
        }
      }
      return count;
    });
  });
}

module.exports = {
  minesweeper,
};
