const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  // the minimum number of moves to solve the puzzle is 2**(disksNumber) - 1
  let minTurnsNum = 2**(disksNumber) - 1;

  let hour = 3600 // hour to seconds

  let time =  Math.floor(hour * (minTurnsNum / turnsSpeed));
  
  return {turns: minTurnsNum, seconds: time};
};
 