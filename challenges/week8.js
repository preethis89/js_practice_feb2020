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
  let str = n.toString();
  const arr = Array.from(str);
  const newArr = arr.reverse().join(""); s
  return parseFloat(newArr);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
