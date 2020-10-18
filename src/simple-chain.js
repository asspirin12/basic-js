const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link: [],
  getLength() {
    return this.link.join('').length;
  },
  addLink(value = '') {
    item = `( ${value} )~~`;
    this.link.push(item);
    return this;
  },
  removeLink(position) {
    if (position < 0 || 
        !position ||
       position >= this.link.length ||
       typeof position !== 'number') {
        this.link = [];
        throw 'THROWN';
       };
    this.link.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.link = this.link.reverse();
    return this;
  },
  finishChain() {
    let result = this.link.join('').replace(/~~$/, "");
    this.link = [];
    return result;
  }
};

module.exports = chainMaker;
