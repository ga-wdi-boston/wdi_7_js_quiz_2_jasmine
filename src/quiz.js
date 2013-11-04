//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
'use strict';

var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.

quiz.sleepIn = function(options) {
	options || (options = {vacation: false});
	var day = new Date();
	day = day.getDay();
	return (day === 0 || day === 6 || options.vacation);
  // quiz.sleepIn({vacation: true}) => true;
};

// Question 2: function called nearHundred
//////////////
quiz.nearHundred = function(number) {
    
  if (typeof number === 'number' && number >= 90 && number <= 99) {
      return true;
  }

  else if (typeof number === 'number' && number <= 90 || number >= 100) {
      return false;
  }

  else {
    throw new Error('Please enter a number!');
  }
};
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(string, index) {
  if (typeof string === 'string') {
    var last = string.length;
    var first_part = string.slice(0, index);
    var second_part = string.slice((index + 1), last);
    return first_part + second_part;
  }
  else {
    throw new Error('Please enter a string!');
  }
};

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(string) {
  return string.replace(/del/, '');
};

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"