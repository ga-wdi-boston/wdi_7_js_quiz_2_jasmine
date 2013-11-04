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
// describe('a quiz', function() {

//   it('is about JavaScript and testing with Jasmine', function() {
//     expect(QUIZ_TOPICS).toContain('jasmine');
//     expect(QUIZ_TOPICS).toContain('javascript');
//   });

// });


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
    expect(quiz.near_hundred(99)).toBe(true);
  });
  it('returns false if the number is not between 90 and 99', function() {
    expect(quiz.near_hundred(89)).toBe(false);
  });
  it('returns and error when given a non-number', function() {
    expect(function(){ quiz.near_hundred("89") }).toThrow(new Error("Please enter a number!"));
  });
});

describe('question3', function() {
  it('returns with removed char', function() {
    expect(quiz.missingChar("kittie", 1)).toBe("kttie");
    expect(quiz.missingChar("doggie", 1)).toBe("dggie");
  });
  it('returns an error when passed a number as a string', function() {
    expect(function() {quiz.missingChar(42, 1)}).toThrow(new Error("Please enter a string!"));
  });
});

describe('question4', function() {
  it('returns altered string when it has abcd', function() {
    expect(quiz.delDel("abdelcd")).toBe("abcd");
  });

  it('returns an unaltered string when it doesnt have del in it', function() {
    expect(quiz.delDel("whatever")).toBe("whatever");
  });
});

describe('question5', function() {
  it('returns altered strings', function() {
    expect(quiz.backAround("cat")).toBe("tca");
    expect(quiz.backAround("hello")).toBe("ohell");
  });
});