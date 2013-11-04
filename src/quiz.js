var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];
//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
  options || (options = {});
  var day = new Date();
  if (day === 6 || day === 7 || options.vacation) {
    return true;
  } else {
    return false;
  }
}

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// near_hundred(52) => false
// near_hundred(93) => false
// near_hundred('two') => Error: Please enter a number!
quiz.nearHundred = function(n) {
  if (typeof n !== "number") {
    throw new Error("Please enter a number!");
  }
  return (n > 90) && (n < 100);
}

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!
quiz.missingChar = function(string, index) {
  letters = string.split('')
  letters.splice(index, 1);
  return letters.join('');
}

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
quiz.delDel = function(string) {
  if (typeof string === "string") {
    return string.replace(/del/g, '');
  } else {
    return false;
  }
}

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
String.prototype.backAround = function() {
  var letters = this.split('');
  var head = letters.pop()
  letters.unshift(head);
  return letters.join('');
}