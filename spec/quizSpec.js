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
    var date = new Date;
  it('returns false if today is not saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if today is saturday or sunday', function() {
    expect(quiz.sleepIn()).toBe(true);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});


describe('question2', function() {

  it('returns true if number is between 90 and 99', function() {
    expect(quiz.nearHundred(92)).toBe(true);
  });

  it('returns false if number is 89 or below', function() {
    expect(quiz.nearHundred(43)).toBe(false);
  });

});

describe('question3', function() {

  it('removes the character corresponding to the index of the string', function() {
    expect(quiz.missingChar("kittie", 1)).toBe("kttie");
  });

});

describe('question4', function() {

  it('removes "del" from a string', function() {
    expect(quiz.delDel("abdelcd")).toBe("abcd");
  });

  it('removes nothing if "del" is not present', function() {
    expect(quiz.delDel("xyz")).toBe("xyz");
  });

});

describe('question5', function() {

  it('move the last character of a string to the beginning', function() {
    expect(quiz.backAround("cat")).toBe("atc");
    expect(quiz.backAround("hello")).toBe("ohell");
  });

});
