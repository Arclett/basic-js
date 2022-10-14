const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) return "Unable to determine the time of year!";
  if (Object.getOwnPropertyNames(arguments[0]).length >= 1) {
    throw new Error("Invalid date!");
  }
  if (typeof date.valueOf() !== "number" || typeof date !== "object") {
    throw new Error("Invalid date!");
  }
  const seasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  console.log(typeof date);
  const x = date.getMonth();
  return seasons[x];
}

module.exports = {
  getSeason,
};
