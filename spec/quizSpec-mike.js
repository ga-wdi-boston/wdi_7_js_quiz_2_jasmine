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

  it('returns true if number is between 90 and 99', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.nearHundred(91)).toBe(true);
  });

  it('returns false if a number is under 90 or over 100', function() {
    expect(quiz.nearHundred(88)).toBe(false);
  });

  it('returns an error is a non-number is entered', function() {
    expect(quiz.nearHundred("cat")).toBe("Error: Please enter a number!");
  });

});

// Write the next tests yourself!
// See quiz.js for more details