const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  members.forEach(function(item, index) {
    if (typeof item === 'string') {
      this[index] = item.replace(/^\s+/, '')[0].toUpperCase();
    } else {
      delete this[index];
    }
    
  }, members)
  
  return members.sort().join('');
};
 