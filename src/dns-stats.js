const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const x = {};
  domains.forEach((e) => {
    e.split(".")
      .reverse()
      .reduce((acc, e) => {
        acc += `.${e}`;
        if (x.hasOwnProperty(acc)) {
          x[acc] = ++x[acc];
        } else {
          x[acc] = 1;
        }
        return acc;
      }, "");
  });
  return x;
}

module.exports = {
  getDNSStats,
};
