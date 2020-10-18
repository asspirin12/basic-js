const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(str, keyword) {

    if (!(str && keyword)) throw Error;
    const letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

    while (keyword.length < str.length) {
      keyword += keyword;
    }
    keyword = keyword.substring(0, str.length).toLowerCase();
    str = str.toLowerCase();

    let encoded = "";

    for (let i = 0; i < str.length; i++) {
      if (!letters.includes(str[i])) {
        keyword = keyword.substring(0, i) + " " + keyword.substring(i, keyword.length);
        encoded += str[i];
      } else {
        let positionWord = letters.indexOf(str[i]);
        let positionKeyword = letters.indexOf(keyword[i]);
        encoded += letters[positionWord + positionKeyword];
      }
      
    }
    return encoded.toUpperCase();
  }  

  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
