const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = "";

  additionSep = options.addition + options.additionSeparator;

  strWithAddition = str + additionSep.repeat(options.additionRepeatTimes - 1) + options.addition;

  strWithAdditionSep = strWithAddition + options.separator;

  return strWithAdditionSep.repeat(options.repeatTimes - 1) + strWithAddition;

};
  