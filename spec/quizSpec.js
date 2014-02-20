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


  it('returns true if the number is near 100', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.nearHundred(92)).toBe(true);
    expect(quiz.nearHundred(89)).toBe(false);
  });

  it('returns an error if no number is provided', function() {
    expect(function() {quiz.nearHundred('dfsdfsd')}).toThrow(new Error('Please enter a number!'));
  });
  //expect(function() {myFunctionToTest(invalidParamter)}).toThrow()

});

describe('question3', function() {


  it('returns the new string', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.missingChar('kittie', 1)).toEqual('kttie');
  });

  it('returns an error if no string is provided', function() {
    expect(function() {quiz.missingChar(5434, 3434)}).toThrow(new Error('Please enter a string!'));
  });

});

describe('question4', function() {


  it('returns the new string without del', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.delDel('abdelcd')).toEqual('abcd');
    expect(quiz.delDel('xyz')).toEqual('xyz');
  });

});

describe('question5', function() {


  it('returns the new string, adding the last letter in front of the word', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.backAround('cat')).toEqual('tca');
    expect(quiz.backAround('hello')).toEqual('ohell');
  });

});

// Write the next tests yourself!
// See quiz.js for more details
