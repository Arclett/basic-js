const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  x: "",
  getLength() {
    return this.x.split("~~").length;
  },
  addLink(value) {
    if (this.x.length === 0) {
      this.x = this.x + `( ${value} )`;
    } else {
      this.x = this.x + `~~( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()
    ) {
      this.x = "";
      throw new Error("You can't remove incorrect link!");
    } else {
      const y = this.x.split("~~");
      y.splice(position - 1, 1);
      this.x = y.join("~~");
    }
    return this;
  },
  reverseChain() {
    this.x = this.x.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const z = this.x.replace("( undefined )", "( )");
    this.x = "";
    return z;
  },
};

module.exports = {
  chainMaker,
};
