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
    expect(quiz.sleepIn("Monday")).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

// Jasmine doesn't run if the tests below are uncommented.

describe('question2', function() {

	it('returns false if the numbers id 89 or lower', function() {
		expect(quiz.nearHundred(52)).toBe(false);
	});

	it('returns true if the number is between 90 and 99', function() {
		expect(quiz.nearHundred(93).toBe(true);
	});

	it('returns Error: Please enter a number! if passed a string', function() {
		expect(quit.nearHundred('two').toBe('Error: Please enter a number!'));
	});
		 
});





// Write the next tests yourself!
// See quiz.js for more details