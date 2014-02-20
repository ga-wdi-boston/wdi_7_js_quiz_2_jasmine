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

//////////////////////////

describe('question2', function() {

	it('throws an error if the argument is not a number', function() {
		expect(function() {quiz.nearHundred('two')}).toThrow();
	});

	it('returns true if the number is between 90 and 99', function() {
		expect(quiz.nearHundred(93)).toEqual(true);
		expect(quiz.nearHundred(99)).toEqual(true);
		expect(quiz.nearHundred(101)).toEqual(false);
		expect(quiz.nearHundred(53)).toEqual(false);
	});

});

///////////////////////////

describe('question3', function() {

	it('throws an error if the first argument is not a string', function() {
		expect(function() {quiz.missingChar(347,1)}).toThrow();
	});

	it('returns the specified word with the specified character deleted', function() {
		expect(quiz.missingChar("kittie", 1)).toEqual("kttie");
	});

});

///////////////////////////

describe('question4', function() {

	it("removes the string 'del' from the entered string", function() {
		expect(quiz.delDel("abdelcd")).toEqual("abcd");
		expect(quiz.delDel("xyz")).toEqual("xyz");
	});

});

///////////////////////////

describe('question5', function() {

	it("moves the last character to the beginning of the given string", function() {
		expect(quiz.backAround("cat")).toEqual("tca");
		expect(quiz.backAround("hello")).toEqual("ohell");
	});

});
