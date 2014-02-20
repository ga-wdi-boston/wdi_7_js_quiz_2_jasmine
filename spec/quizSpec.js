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

describe('question2', function(){

  it('returns true if the num is between 90 and 99 inclusive', function(){
    expect(quiz.nearHundred(91)).toEqual(true)
  });

  it('returns false if the num is less than 90', function(){
    expect(quiz.nearHundred(50)).toEqual(false)
  });

  it('throws an error if the argument is not a number', function(){
    expect(function(){
      quiz.nearHundred('bananas')
    }).toThrowError("Error: Please enter a number!")
  });
});




