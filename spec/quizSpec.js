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

// Write the next tests yourself!
// See quiz.js for more details

describe('question2', function() {

  it('returns false if the number input is not a number', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.nearHundred('hello')).toBe('Please enter a number');
    expect(quiz.nearHundred('no good')).toBe('Please enter a number');
  });

  it('returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(91)).toBe(true);
    expect(quiz.nearHundred(99)).toBe(true);
    expect(quiz.nearHundred(52)).toBe(false);
  });
});

describe('question3', function() {
   it('returns value with missing character removed', function() {
    expect(quiz.missingChar('dog', 1)).toBe('dg');
    expect(quiz.missingChar('hello ben', 2)).toBe('helo ben');
    expect(quiz.missingChar('')).toBe('Please enter a string');
  });
});
});