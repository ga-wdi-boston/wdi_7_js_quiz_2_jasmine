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


// describe('question1', function() {
//   it('returns true if today is saturday or sunday', function() {
//     // Assuming you're taking this on a weekday!
//     expect(quiz.sleepIn()).toBe(false);
//   });
//   it('returns true if an options hash is passed with vacation set to true', function() {
//     expect(quiz.sleepIn({vacation: true})).toBe(true);
//   });
// });

describe('question2', function() {
  it('returns true if n is near 100', function() {
    expect(quiz.nearHundred(95)).toBe(true);
  });
  it('false is n is not near 100', function() {
     expect(quiz.nearHundred(80)).toBe(false);
  });
  it('throw an error if you enter a non-number', function() {
     expect(quiz.nearHundred("n")).toThrow("Please enter a number");
  });
});

// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!
describe('question3', function() {
  it('returns true if n is near 100', function() {
    expect(quiz.missingChar("kittie")).toEqual(kttie);
  });
  it('throw an error if you enter a non-string', function() {
     expect(quiz.missingChar(347)).toThrow("Please enter a string!");
  });
});

// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
describe('question4', function() {
  it('deletes del', function() {
    expect(quiz.delDel("abdelcd")).toEqual("abcd");
  });
  it('does not delete things that are not del', function() {
     expect(quiz.delDel("xyz")).toEqual("xyz");
  });
});

// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
describe('question5', function() {
  it('turns around a word', function() {
    expect("cat".backAround()).toEqual("tca");
  });
  it('turns around a word', function() {
     expect("hello".backAround).toEqual("ohell");
  });
});








