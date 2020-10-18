const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (typeof date !== 'object') return 'Unable to determine the time of year!'; 

  let year = date.getFullYear();

  if (date < new Date(year, 2, 1) 
      && date >= new Date(year - 1, 11, 1) ||
    date >= new Date(year, 11, 1) 
      && date < new Date(year + 1, 2, 1)) return 'winter';

  if (date < new Date(year, 5, 1) 
      && date >= new Date(year, 2, 1)) return 'spring';
  if (date < new Date(year, 8, 1) 
      && date >= new Date(year, 5, 1)) return 'summer';
  if (date < new Date(year, 11, 1) 
      && date >= new Date(year, 8, 1)) return 'fall';
} || 'FAIL';