//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/


describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

describe('question2', function() {

	it ('returns true is number is between 90-99', function() {
		expect(quiz.nearHundred(99)).toBe(true);
	});
	
	it ('returns false if passed is below 89', function() {
		expect(quiz.nearHundred(75)).toBe(false);
	});

	it ('returns error if passed non-number', function() {
		expect(function(){ quiz.nearHundred('cat') }).toThrow(new Error('Please enter a number'));
	});

});

describe('question3', function() {

	it ('returns with removes char', function() {
		expect(quiz.missingChar('kittie', 1)).toBe('kttie');
	});

	it ('returns with removes char', function() {
		expect(quiz.missingChar('doggie', 1)).toBe('dggie');
	});
	
	it ('returns error if passed number', function() {
		expect(function(){ quiz.missingChar(42) }).toThrow(new Error('Please enter a string'));
	});

});

describe('question4', function() {

	it ('returns with removes char', function() {
		expect(quiz.delDel('abdelcd')).toBe('abcd');
	});

	it ('returns an unaltered string when it doesnt have del', function() {
		expect(quiz.delDel('whatevs')).toBe('whatevs');
	});

});

describe('question5', function() {

	it ('returns altered strings', function() {
		expect(quiz.backAround('cat')).toBe('tca');
	});

	it ('returns altered strings', function() {
		expect(quiz.backAround('hello')).toBe('ohell');
	});

});