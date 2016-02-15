var assert = require('assert');
var detector = require('../lib/detector.js');

describe('detector.profane', function () {

  it('should should detect bad words', function () {
    assert.equal(detector.profane('я люблю тебя, Гавана'), false);
    assert.equal(detector.profane('насрать на тебя'), true);
  });

  it('should detect uppercase bad words', function () {
    assert.equal(detector.profane('НАСРАТЬ на тебя'), true);
  });

  it('should detect mixedcase bad words', function () {
    assert.equal(detector.profane('НасРАТь на тебя'), true);
  });

});

describe('detector.censor', function () {

  it('should remove bad words', function () {
    assert.equal(detector.censor('НАСРАТЬ на тебя, шлюха'), "******* на тебя, *****");
  });

  it('should handle edgecases', function () {
    assert.equal(detector.censor("Каспийский Груз говно"), "Каспийский Груз *****");
    assert.equal(detector.censor("Каспийский Груз\nговно"), "Каспийский Груз\n*****");
  });

});
