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

  it('returns true if number is near hundred', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.nearHundred(93)).toBe(true);
  });

  it('returns false if number is not near hundred', function() {
    expect(quiz.nearHundred(10)).toBe(false);
  });
  it('raise error if not pass number', function(){
  			expect(function(){
 				quiz.nearHundred('two')
 			}).toThrowError("Please enter a number!");
  });
});


describe('question3', function() {

  it('returns character removed corresponds to the index', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.missingChar("kittie", 1)).toEqual("kttie");
  });

  it('raise error if not pass string', function(){
  			expect(function(){
 				quiz.missingChar(347, 1)
 			}).toThrowError("Please enter a string!");
  });
});

describe('question4', function() {

  it('remove del from a string', function() {
    
    expect(quiz.delDel("abdelcd")).toEqual("abcd");
  });
  it('remove nothing from a string if no del', function() {

    expect(quiz.delDel("xyz")).toEqual("xyz");
  });
  
});

describe('question5', function() {

  it('move last char to beginning', function() {
  	expect("hello".backAround()).toEqual("ohell");
    expect("cat".backAround()).toEqual("tca");
  });
  
  
});



