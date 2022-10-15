const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.reduce((res, e, i, arr) => {
    if (i > 0) {
      if (names.slice(0, i).includes(e) || res.includes(e)) {
        let count = res.filter((elem) => {
          return e === elem.slice(0, e.length);
        });
        let count2 = res.filter((elem) => elem.length > e.length + 3).length;
        res.push(`${e}(${count.length - count2})`);
        return res;
      } else {
        res.push(e);
        return res;
      }
    }
    res.push(e);
    return res;
  }, []);
}

module.exports = {
  renameFiles,
};
