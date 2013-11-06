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

  it('returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(97)).toBe(true);
    expect(quiz.nearHundred(90)).toBe(true);
  });
  it('returns false if the number is not between 90 and 99', function() {
    expect(quiz.nearHundred(89)).toBe(false);
    expect(quiz.nearHundred(100)).toBe(false);
  });
  it('returns an error when given a nonnumber', function() {
    expect(function() { quiz.nearHundred('frog') }).toThrow(new Error("Please enter a number"));
  });
});

describe ('question3', function() {
  it('...', function() {
    expect().toBe();
  });
});
// Write the next tests yourself!
// See quiz.js for more details