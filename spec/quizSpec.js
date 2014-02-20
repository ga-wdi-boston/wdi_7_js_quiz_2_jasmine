//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/

// The first question's tests are written.
// See quiz.js for more details

describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

describe('#nearHundred', function(){
	it('returns true if the number passed is between 90 and 110', function(){
		expect(quiz.nearHundred(93)).toBe(true);
		expect(quiz.nearHundred(107)).toBe(true);
		expect(quiz.nearHundred(89)).toBe(false);
	});

	it('throws an error if not passed a number', function(){
		expect(function(){
			quiz.nearHundred('number')}).toThrowError("Error: Please enter a number!");
	});

});

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

describe('#quiz.missingChar', function(){
	it('removes a character at a specified index and returns the modified string', function(){
		expect(quiz.missingChar('hello', 3)).toEqual('helo');
		expect(quiz.missingChar('kittie', 1)).toEqual('kttie');
	});

	it('throws and error if a string is not entered', function(){
		expect(function(){
			quiz.missingChar(347, 1)}).toThrowError('Error: Please enter a string!')
	});
});

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"


describe('#quiz.delDel', function(){
	it('should remove "del" from a string', function(){
		expect(quiz.delDel('abcdeloops')).toEqual('abcoops');
		expect(quiz.delDel('xyz')).toEqual('xyz');
	});

});

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

describe('#quiz.backAround', function(){
	it('should move the last character to the front of the string', function(){
		expect(quiz.backAround('sloop')).toEqual('psloo');
		expect(quiz.backAround('cat')).toEqual('tca');
	});

});



