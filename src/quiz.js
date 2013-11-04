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
	var vacation = options.vacation;
	var date = new Date();
	var day = date.getDay();
	if (day === 0 || day === 6) {
		return true;
	} else if (vacation === true) {
		return true;
	} else {
		return false;
	}
};

quiz.nearHundred = function(number) {
	var number = number;
	if (typeof(number) === "number"){
		if (number >= 90 && number <= 99) {
			return true;
		} else {
			return false;
		}
	} else {
		return "Error: Please enter a number!"
	}
};


quiz.missingChar = function(string, index) {
	var string = string;
	var index = index;
	if (typeof(string) === "string"){
		var newString = string.substring(0, index) + string.substring(index + 1, string.length);
		return newString;
	} else {
		return "Error: Please enter a string!"
	}
};

quiz.delDel = function(string) {
	var string = string;
	return string.replace("del","");
}


// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"