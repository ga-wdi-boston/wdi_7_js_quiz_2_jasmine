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


describe('quiesiton2', function() {

  it('returns true if number is between 90 and 99', function(){
    expect(quiz.nearHundred(93)).toBe(true);
  });

  it('returns false if number is 89 or below', function(){
    expect(quiz.nearHundred(52)).toBe(false);
  });

  it('throw an error if the input is not a number', function(){
    expect(quiz.nearHundred('two')).toThrowError('Please enter a number!');
  });
});

describe('question3', function() {

  it('returns a new string', function() {
    expect(quiz.missingChar("kittie", 1)).toEqual('kttie');
  });

  it('throw and error if the first parameter is not a string', function(){
    expect(quiz.missingChar(347, 1)).toThrowError('Please enter a string!');
  });
});

describe('question4', function(){
  it('should return a new string without del if it has del', function(){
    expect(quiz.delDel("abdelcd")).toEqual('abcd');
  });

  it('should return origional string if it does not has del', function(){
    expect(quiz.delDel('xyz')).toEqual('xyz');
  });
  
})










// Write the next tests yourself!
// See quiz.js for more details