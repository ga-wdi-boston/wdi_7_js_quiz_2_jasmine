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

describe('question2', function() {
	it ('returns true if the number is between 90 and 99', function() {
		expect(quiz.nearHundred(90)).toBe(true);
		expect(quiz.nearHundred(99)).toBe(true);
		expect(quiz.nearHundred(100)).toBe(false);
		expect(quiz.nearHundred(89)).toBe(false);
	});

	it ('throws an error if a number is not provided', function(){
		expect(function() {
			quiz.nearHundred("hello")
		}).toThrowError("Error: Please enter a number!");
	});
});

describe('question3', function() {
	it ('removes the specified character of a string', function() {
		expect(quiz.missingChar("kittie", 1)).toEqual("kttie");
	});

	it ('throws an error if a string is not provided as the first parameter', function(){
		expect(function(){
			quiz.missingChar(347, 1)
		}).toThrowError("Error: Please enter a string!");
	});
});

describe('question4', function() {
	it ('removes the substring del from a string or returns the string if it doesnt contain del', function() {
		expect(quiz.delDel("abdelcd")).toEqual("abcd");
		expect(quiz.delDel("abcd")).toEqual("abcd");
		expect(quiz.delDel("xyz")).toEqual("xyz");
	});
});

describe('question5', function() {
	it ('moves the last character of a string to the beginning', function() {
		expect("cat".backAround()).toEqual("tca");
		expect("hello".backAround()).toEqual("ohell");
	});
});
// Write the next tests yourself!
// See quiz.js for more details
