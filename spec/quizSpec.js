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

// Write the next tests yourself!
// See quiz.js for more details

describe('question2', function() {
  it('will only take a number', function() {
    expect(quiz.nearHundred.bind(null, 'two')).toThrow();
  });
  it('returns true if number is between 90 and 99', function() {
    expect(quiz.nearHundred(93)).toBeTruthy();
  });
  it('returns false if number is not between 90 and 99', function() {
    expect(quiz.nearHundred(52)).toBeFalsy();
  });
});

describe('question3', function() {
  it("removes the character at string[index]", function() {
    expect(quiz.missingChar("kittie", 1)).toMatch("kttie");
  });
  it("throws an error if the input is not a string", function() {
    expect(quiz.missingChar.bind(null, 347, 1)).toThrow();
  });
});

describe('question4', function() {
  it("removes 'del' from a string", function() {
    expect(quiz.delDel("abdelcd")).toMatch("abcd");
    expect(quiz.delDel("xyz")).toMatch('xyz');
  });
});

describe('question5', function() {
  it("move the last character to the beginning", function() {
    expect("cat".backAround()).toMatch("tca");
    expect("hello".backAround()).toMatch('ohell');
  });
});