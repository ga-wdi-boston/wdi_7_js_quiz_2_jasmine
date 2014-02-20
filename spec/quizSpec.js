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
describe('question2: quiz.nearHundred()', function() {
  it('returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(90)).toBe(true);
    expect(quiz.nearHundred(99)).toBe(true);
  });
  it('returns false if the number is 89 or below', function() {
    expect(quiz.nearHundred(89)).toBe(false);
    expect(quiz.nearHundred(5)).toBe(false);
  });
  it('throws an error if the argument is not a number', function() {
    expect(function() { quiz.nearHundred('mango'); }).toThrowError("Please enter a number!");
  });
});

describe('question3: quiz.missingChar()', function() {
  it('throws an error if argument is not a string', function() {
    expect(function() { quiz.missingChar(347, 1); }).toThrowError("Please enter a string!");
  });
  it('removes the character that corresponds to the index from the string and returns string',
    function() {
    expect(quiz.missingChar("kittie", 1)).toEqual("kttie");
    expect(quiz.missingChar("Alex", 3)).toEqual("Ale");
  });
});

describe('question4: quiz.delDel()', function() {
  it('removes del from a string each time it appears therein', function() {
    expect(quiz.delDel("abdelcd")).toEqual("abcd");
    expect(quiz.delDel("abdelcddel")).toEqual("abcd");
  });
  it('returns the string untouched if it contains no del', function() {
    expect(quiz.delDel("xyz")).toEqual("xyz");
    expect(quiz.delDel("deDELel")).toEqual("deDELel");
  });
});

describe('question5: String.backAround()', function() {
  it('is a class methond on String', function() {
    expect(String.prototype.hasOwnProperty('backAround')).toBe(true);
    expect(Number.prototype.hasOwnProperty('backAround')).toBe(false);
  });
  it('moves the last character of a string to the beginning', function() {
    expect("cat".backAround()).toEqual("tca");
    expect("hello".backAround()).toEqual("ohell");
  });
});
