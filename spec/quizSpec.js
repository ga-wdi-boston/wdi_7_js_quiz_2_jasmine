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

'use strict';

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
  it ('returns false if the number is not between', function() {
    expect(quiz.nearHundred(52)).toBe(false);
  });

  it ('returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(93)).toBe(true);
  });

  it ('throws an error if the input is not an integer', function() {
    expect(function() {quiz.nearHundred('two');}).toThrow('Please enter a number!');
  });
});


describe ('question3', function() {
  it ('removes the character that corresponds to the index from the string', function() {
    expect(quiz.missingChar('kittie', 1)).toBe('kttie');
  });

  it ('throws an error if the entered input is not a string', function() {
    expect(function() {quiz.missingChar(347, 1);}).toThrow('Please enter a string!');
  });
});