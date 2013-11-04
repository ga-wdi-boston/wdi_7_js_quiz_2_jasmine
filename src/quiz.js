// var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];
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
        options || (options = {vacation: false});
        var day = new Date();
        day = day.getDay();
        return (day === 0 || day === 6 || options.vacation ); 
};

// // Question 2: function called nearHundred
// //////////////
// // If the number is between 90 and 99, the result is true;
// // If it is 89 or below, it is false.
// // near_hundred(52) => false
// // near_hundred(93) => true
// // near_hundred('two') => Error: Please enter a number!
quiz.near_hundred = function(number) {
        if(typeof(number) === "number" ) {
                return (number <= 99 && number >= 90);
        } else {
                        throw new Error("Please enter a number!");
        };
}

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(a_string, index) {
        if(typeof(a_string) === "string") {
                return a_string.substring(0, index) + a_string.substring(index + 1);
        } else {
                throw new Error("Please enter a string!");
        };
};

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
quiz.delDel = function(a_string) {
        return a_string.replace(/del/gi, '');
};

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

quiz.backAround = function(string) {
        var last = string[string.length - 1];
        return last + string.substr(0, string.length -1);
};