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
  it('returns true if number is near 100 (90-99)', function() {
    expect(quiz.nearHundred(94)).toBe(true);
  });
  it('returns false if number is not near 100 (<90, >100)', function(n) {
    expect(quiz.nearHundred(2)).toBe(false);
  });
  it('throws an error if a valid number is not entered', function() {
    expect(function() { quiz.nearHundred('two') }).toThrowError('Error: Please enter a number')
  });
});


describe('question3', function() {
  var quiz;

  it('removes a character that corresponds to a specified index from the string', function() {
    expect(quiz.missingChar()).toBe(false);
  });

  it('', function() {
    expect(quiz.missingChar({vacation: true})).toBe(true);
  });

});

// Write the next tests yourself!
// See quiz.js for more details
