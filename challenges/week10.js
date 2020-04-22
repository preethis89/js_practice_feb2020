/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
let i;
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  let total = 0;
  const dgt = Array.from(String(n), Number);
  for (i = 0; i < dgt.length; i++) {
    total += dgt[i];
  }
  return total;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let rangeArr = [], counter = start;
  rangeArr[0] = start;
  if (step) {
    for (i = 1; i < (end / step); i++) {
      counter = counter + step;
      rangeArr.push(counter);
    }
    return rangeArr;
  }
  else {
    step = 1
    for (i = 1; i < (end / step) - 1; i++) {
      counter = counter + step;
      rangeArr.push(counter);
    }
    return rangeArr;

  }

};


/**
 * This function takes an array of user objects and their usage in minutes of letious applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreenTimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let length = users.length;
  let screenLength,j,k, sum = 0, array;
  let result = [];
  let values;
  
  for (i=0;i<length;i++){
    
  screenLength = users[i].screenTime.length;
  for (j=0; j<screenLength; j++){
  if (users[i].screenTime[j].date===date){
   
  values = users[i].screenTime[j].usage;
  
  array = Object.values(values);
  for (k=0;k<array.length;k++){
  
    sum = sum + array[k];
  }
  if( sum >= 100){
    result.push(users[i].username);
    
  }
  }
  
  }
  
  }
  return result;
  
  };
/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let r,g,b,rgbStr;
  hexStr = hexStr.replace('#','');
    r = parseInt(hexStr.substring(0,2), 16);
    g = parseInt(hexStr.substring(2,4), 16);
    b = parseInt(hexStr.substring(4,6), 16);
    rgbStr = 'rgb('+r+','+g+','+b+')';
    return rgbStr;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
 let winningCombination = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
 let boards=[];
 boards =  board.flat(1);
 for(let i = 0; i < winningCombination.length; i++) { 
  let sum = 0,count=0;
  let w = winningCombination[i];
  for(let b = 0; b < w.length; b++) {
    if(boards[w[b]] === "X") {
      sum++
      if(sum === 3) {
        return "X is the Winner";
       }
    }
    else if(boards[w[b]] === "0")
      count++
      if(count ===3)
      return "0 is the Winner";
  } 
  
 
  
}
return "Null";

};

module.exports = {
  sumDigits,
  createRange,
  getScreenTimeAlertList,
  hexToRGB,
  findWinner
};
