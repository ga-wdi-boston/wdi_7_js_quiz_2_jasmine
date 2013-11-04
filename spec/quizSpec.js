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
    expect(quiz.sleepIn({vacation: false})).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

describe('question2', function() {

  it('returns true if number is between 90 and 99', function() {
    expect(quiz.nearHundred(99)).toBe(true);
    expect(quiz.nearHundred(90)).toBe(true);
    expect(quiz.nearHundred(95)).toBe(true);
  });

  it('returns false if number is less than 90 or greater than 99', function() {
    expect(quiz.nearHundred(100)).toBe(false);
    expect(quiz.nearHundred(85)).toBe(false);
    expect(quiz.nearHundred(55)).toBe(false);
  });

});


describe('question3', function() {

  it('return the shortened string if passed a valid string', function() {
    expect(quiz.missingChar("blake", 3)).toBe("blae");
    expect(quiz.missingChar("blake's book", 5)).toBe("blakes book");
    expect(quiz.missingChar("a car", 1)).toBe("acar");
  });

  it('should return Error: please enter a string if not a string parameter', function() {
    expect(quiz.missingChar(300, 2)).toBe("Error: Please enter a string!");
  });

});

describe('question4', function() {

  it('should remove del from a string', function() {
    expect(quiz.delDel("delaware")).toBe("aware");
  });

});



// Write the next tests yourself!
// See quiz.js for more details