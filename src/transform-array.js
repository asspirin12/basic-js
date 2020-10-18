const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let funArr = [...arr];
  
  funArr.forEach(function(item, index) {
    if (item === '--discard-next')
      index === funArr.length - 1 ? this[index] = null : this[index + 1] = this[index] = null;
    if (item === '--discard-prev') 
      index === 0 ? this[index] = null : this[index - 1] = this[index] = null;
    if (item === '--double-next') this[index] = this[index + 1];
    if (item === '--double-prev') this[index] = this[index - 1];
  }, funArr)
  
  return funArr.filter(item => item != null);
};
