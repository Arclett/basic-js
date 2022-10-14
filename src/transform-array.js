const { NotImplementedError } = require("../extensions/index.js");

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
// function transform(/* arr */) {
//   throw new NotImplementedError(
//     "'arr' parameter must be an instance of the Array!"
//   );
//   // remove line with error and write your code here
// }

function transform(array) {
  if (!Array.isArray(array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (array.length === 0) return [];
  const x = [];
  array.forEach((e) => x.push(e));
  if (x[0] === "--double-prev" || x[0] === "--discard-prev") {
    console.log("adsajdkajda");
    x.splice(0, 1, " ");
  }
  if (
    x[x.length - 1] === "--double-next" ||
    x[x.length - 1] === "--discard-next"
  ) {
    x.splice(x.length - 1, 1, " ");
  }

  const commands = x
    .map((e, i) => {
      if (
        e === "--discard-next" ||
        e === "--discard-prev" ||
        e === "--double-next" ||
        e === "--double-prev"
      ) {
        return [e, i];
      }
    })
    .filter((e) => typeof e === "object");
  commands.push([" ", " "]);
  commands.push([" ", " "]);
  commands.unshift([" ", " "]);
  commands.unshift([" ", " "]);
  commands.forEach((e, i, arr) => {
    if (
      e[0] === "--discard-next" &&
      arr[i + 1][0] === "--double-prev" &&
      arr[i + 1][1] - e[1] === 2
    ) {
      x.splice(e[1], 3, " ", " ", " ");
    } else if (
      e[0] === "--double-next" &&
      arr[i + 1][0] === "--double-prev" &&
      arr[i + 1][1] - e[1] === 2
    ) {
      x.splice(e[1], 3, array[e[1] + 1], array[e[1] + 1], array[e[1] + 1]);
    } else if (
      e[0] === "--discard-next" &&
      arr[i + 1][0] === "--discard-prev" &&
      arr[i + 1][1] - e[1] === 2
    ) {
      x.splice(e[1], 3, " ", " ", " ");
    } else if (
      e[0] === "--double-next" &&
      arr[i + 1][0] === "--discard-prev" &&
      arr[i + 1][1] - e[1] === 2
    ) {
      x.splice(e[1], 3, " ", array[e[1] + 1], " ");
    } else if (e[0] === "--discard-next") {
      x.splice(e[1], 2, " ", " ");
    } else if (e[0] === "--double-next") {
      x.splice(e[1], 1, array[e[1] + 1]);
    } else if (
      e[0] === "--discard-prev" &&
      arr[i - 1][0] !== "--discard-next" &&
      e[1] - arr[i - 1][1] !== 2
    ) {
      x.splice(e[1] - 1, 2, " ", " ");
    } else if (
      e[0] === "--discard-prev" &&
      arr[i - 1][0] !== "--double-next" &&
      e[1] - arr[i - 1][1] !== 2
    ) {
      x.splice(e[1] - 1, 2, " ", " ");
    } else if (
      e[0] === "--double-prev" &&
      arr[i - 1][0] !== "--discard-next" &&
      e[1] - arr[i - 1][1] !== 2
    ) {
      x.splice(e[1] - 1, 1, array[e[1] - 1], array[e[1] - 1]);
    } else if (
      e[0] === "--double-prev" &&
      arr[i - 1][0] !== "--double-next" &&
      e[1] - arr[i - 1][1] !== 2
    ) {
      x.splice(e[1] - 1, 2, array[e[1] - 1], array[e[1] - 1]);
    }
  });
  return x.filter((e) => {
    if (e !== " " && e !== undefined) return e;
  });
}

module.exports = {
  transform,
};
