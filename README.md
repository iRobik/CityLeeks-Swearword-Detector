# CityLeeks-Swearword-Detector

CityLeeks swearword detection and filtering library.

[![Build Status](https://travis-ci.org/iRobik/CityLeeks-Swearword-Detector.svg?branch=master)](https://travis-ci.org/iRobik/CityLeeks-Swearword-Detector)

[![Coverage Status](https://coveralls.io/repos/github/iRobik/CityLeeks-Swearword-Detector/badge.svg?branch=master)](https://coveralls.io/github/iRobik/CityLeeks-Swearword-Detector?branch=master)

## Usage

### detector.profane(text)

Returns true if the given string contains profanity.

    var detector = require('./cl-swearword-detector');
    detector.profane("я люблю тебя, Гавана"); // false
    detector.profane("я люблю тебя, сука"); // true

### detector.censor(text)

Replaces profanity with *.

    var clean = detector.censor("я люблю тебя, сука"); // я люблю тебя, ****

### detector.loadBadWords(path)

Loads a dictionary of words to be used as filter.

    detector.loadBadWords("../dicts/swearwords.json");

A dictionary is just a array.

	[
		"word1",
		"word2",
		"word3"
	]

