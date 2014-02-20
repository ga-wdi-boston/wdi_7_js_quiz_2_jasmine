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

  it('.sleepIn returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('.sleepIn returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

// Write the next tests yourself!
// See quiz.js for more details

describe('question2', function() {

  it('.nearHundred returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(90)).toBe(true);
  });

  it('.nearHundred returns false if the number is not between 90 and 99', function() {
    expect(quiz.nearHundred(100)).toBe(false);
  });

});


describe('question3', function() {

  it('.missingChar removes a character that corresponds to the index from the string', function() {
    expect(quiz.missingChar("pokemon", 1)).toEqual("pkemon");
  });

  it(".missingChar gives you an error if you don't feed it a string", function() {
    expect(quiz.missingChar(347, 1)).toEqual("Error: Please enter a string!");
  });

});







