const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let myArr = arr.flat();
  let count = 0;
  for (el of myArr) {
    if (el === '^^') count++;
  }
  return count;
};