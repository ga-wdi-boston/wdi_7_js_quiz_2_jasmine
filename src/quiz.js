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
	options || (options = {vacation: false})
	var date = new Date();
	var day = date.getDay();
	return (day === 0 || day === 6 || options.vacation );
};

quiz.nearHundred = function(number) {
	if (typeof(number) === 'number' ) {
		return (number <= 99 && number >= 90);
	} else {
			throw new Error('Please enter a number');
		};
};

quiz.missingChar = function(a_string, index) {
	if (typeof(a_string) === 'string' ) {
		return a_string.substring(0, index) + a_string.substring(index + 1);
	} else {
		throw new Error('Please enter a string');
	};
};

quiz.delDel = function(a_string) {
	return a_string.replace(/del/gi, '');
};

quiz.backAround = function(string) {
	var last = string[string.length - 1];
	return last + string.substring(0, string.length - 1);
};
// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"