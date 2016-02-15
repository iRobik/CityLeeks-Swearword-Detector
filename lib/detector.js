// cl-swearword-detector

var detector = {

  _badWords: {},

  scan: function (text, callback) {
    var word, match, i;
    var regex = /[\w\u0430-\u044f]+/ig

    while (match = regex.exec(text)) {
      word = match[0].toLowerCase();
      i    = this._badWords.indexOf(word);
      
      if (i > 0) {
        if (callback(word, match.index, this._badWords[i]) === false) {
          break;
        }
      }
    }
  },

  profane: function (text) {
    var profane = false;

    this.scan(text, function (word, index, categories) {
      profane = true;
      return false; // Stop on first match
    });

    return profane;
  },

  censor: function (text) {
    var censored = text;

    this.scan(text, function (word, index, categories) {
      censored = censored.substr(0, index) + 
                  word.replace(/\S/g, '*') +
                  censored.substr(index + word.length);
    });

    return censored;
  },

  loadBadWords: function (path) {
    this._badWords = require(path);
  }
};

detector.loadBadWords("../dicts/swearwords.json");

module.exports = detector;
