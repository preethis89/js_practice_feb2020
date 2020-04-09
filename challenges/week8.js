let i ;
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === n && nums[i] != nums[nums.length - 1])
      return nums[i + 1];
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const newObj = {
    1: 0,
    0: 0
  };
  const arr = str.split("");
  let count1 = 0;
  let count0 = 0;
  arr.forEach(item => {
    if (item === "0")
      count0++;
    else
      count1++
  }
  );
  newObj[1] = count1;
  newObj[0] = count0;
  return newObj;

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const arr = Array.from(n.toString());
  return parseFloat(arr.reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let resArray = [];
  resArray = arrs.flat(1);
  return resArray.reduce((a, b) => a + b, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length != 0 && arr.lenght != 1) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  const searchArr = Object.values(haystack);
  let result = searchArr.join(" ");
  return result.toLowerCase().includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  str = str.replace(/[^\w\s]/gi, " ").replace(/\s+/g, " ").trim();
  let resultObj = {};
  let strArr = str.toLowerCase().split(" ");

  for (i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (resultObj[word] === undefined) {
      resultObj[word] = 1;
    }
    else {
      resultObj[word] += 1;
    }

  }
  return resultObj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
