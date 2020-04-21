let i;
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNum = [];
  smallNum = nums.filter(element => element < 1)
  return smallNum;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let listOfNames = [];
  listOfNames = names.filter(element => element[0] === char);
  return listOfNames; 
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbWords = [];
  verbWords = words.filter(element => element[0] === "t" && element[1] === "o" && element[2] === " ");
  return verbWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let intArray = [];
  intArray = nums.filter(element => Number.isInteger(element));
  return intArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cityArr = [];
  for (i = 0; i < users.length; i++)
    cityArr.push(users[i].data.city.displayName);
  return cityArr;

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numArr = [];
  let sqrtNum = null;
  for (i = 0; i < nums.length; i++) {
    sqrtNum = Math.sqrt(nums[i]);
    if (Number.isInteger(sqrtNum))
      numArr[i] = sqrtNum;
    else
      numArr[i] = parseFloat(sqrtNum.toFixed(2));
  }
  return numArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let expString = [];
  for (i = 0; i < sentences.length; i++) {
    let mystr = sentences[i]
    if (mystr.toLowerCase().includes(str))
      expString.push(mystr);
  }

  return expString;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longArr = [];
  let num = [];
  let res = null;
  for (i = 0; i < triangles.length; i++) {
    num[i] = triangles[i].sort(function (a, b) { return b - a });
    res = num[i][0];
    longArr.push(res);

  }
  return longArr;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
