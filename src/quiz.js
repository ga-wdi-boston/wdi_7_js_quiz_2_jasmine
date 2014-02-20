//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {

  sleepIn: function(options) {
    var date = new Date;
    if(options.vacation = true) {
      return true;
    } else if(date.getDay() % 6 === 0) {
      return true;
    } else return false;
  },

  nearHundred: function(num) {
    if(90 < num == num < 99) {  // doesn't work without the "num == num"
      return true;
    } else return false;
  },

  missingChar: function(string, index) {
    var array = string.split('');
    array.splice(index, 1);
    return array.join('');
  },

  delDel: function(string) {
    var newString = string.replace('del', '')
    return newString;
  },

  backAround: function(string) {
    var array = string.split('');
    var last_element = array.pop();
    var new_string = last_element + string;
    return new_string;
  }
};

