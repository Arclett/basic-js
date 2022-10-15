const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  encrypt(str, key) {
    if (typeof str !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    let strUpd = str.toUpperCase(),
      keyUpd = key.padEnd(strUpd.replaceAll(" ", "").length, key).toUpperCase(),
      x = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alph.includes(strUpd[i])) {
        const index = this.alph.indexOf(keyUpd[count]);
        const alphUpd = this.alph.substring(index) + this.alph.slice(0, index);
        x += alphUpd[this.alph.indexOf(strUpd[i])];
        count++;
      } else {
        x += strUpd[i];
      }
    }
    return this.mode ? x : x.split("").reverse().join("");
  }
  decrypt(str, key) {
    if (typeof str !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    let strUpd = str.toUpperCase(),
      keyUpd = key.padEnd(strUpd.replaceAll(" ", "").length, key).toUpperCase(),
      x = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alph.includes(strUpd[i])) {
        const index = this.alph.indexOf(keyUpd[count]);
        const alphUpd = this.alph.substring(index) + this.alph.slice(0, index);
        x += this.alph[alphUpd.indexOf(strUpd[i])];
        count++;
      } else {
        x += strUpd[i];
      }
    }
    return this.mode ? x : x.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
