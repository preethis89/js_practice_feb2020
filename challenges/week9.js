/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let sum = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0)
      sum += arr[i];
  }
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  let checkstr = str.toUpperCase();
  for (let i = 0; i < checkstr.length; i++) {
    if (checkstr[i] != "A" && checkstr[i] != "C" && checkstr[i] != "G" && checkstr[i] != "T")
      return false;

  }
  return true;
};


/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let compStr = "";
  let checkstr = str.toUpperCase();
  for (let i = 0; i < checkstr.length; i++) {
    switch (checkstr[i]) {
      case "A":
        compStr += "T";
        break;
      case "C":
        compStr += "G";
        break;
      case "G":
        compStr += "C";
        break;
      case "T":
        compStr += "A";
        break;

    }

  }
  return compStr.toLowerCase();

};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let i = 2; i < n; i++)
    {
      if(n % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let i,j;
  let arr= [];
  for(i=0;i<n;i++)
    {
      arr[i]=[];     
      for(j=0;j<n;j++){
       arr[i][j]=fill;
     } 
    }
    return arr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let i,count=0;
  switch(day){
    case "Monday":
      for(i=0 ; i<staff.length ; i++){
        let c = Object.values(staff[i].rota);
        if(c.includes("Monday"))
        count++;}
        if(count<3)
        return false;
      break;
      case "Tuesday":
        for(i=0 ; i<staff.length ; i++){
          let c = Object.values(staff[i].rota);
          if(c.includes("Tuesday"))
          count++;}
          if(count<3)
          return false;
      break;
      case "Wednesday":
        for(i=0 ; i<staff.length ; i++){
          let c = Object.values(staff[i].rota);
          if(c.includes("Wednesday"))
          count++;}
          if(count<3)
          return false;
      break;
      case "Thursday":
        for(i=0 ; i<staff.length ; i++){
          let c = Object.values(staff[i].rota);
          if(c.includes("Thursday"))
          count++;}
          if(count<3)
          return false;
      break;
      case "Friday":
        for(i=0 ; i<staff.length ; i++){
          let c = Object.values(staff[i].rota);
          if(c.includes("Friday"))
          count++;}
          if(count<3)
          return false;
      break;
      case "Saturday":
        for(i=0 ; i<staff.length ; i++){
          let c = Object.values(staff[i].rota);
          if(c.includes("Saturday"))
          count++;}
          if(count<3)
          return false;
      break;
      case "Sunday":
        for(i=0 ; i<staff.length ; i++){
          let c = Object.values(staff[i].rota);
          if(c.includes("Sunday"))
          count++;}
          if(count<3)
          return false;
      break;
  }
  return true;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
