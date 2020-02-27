function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!

  let result = nums.map((item) => item * item);
  return result;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let resWord;
  let camelCaseArr = [];
  if (words[1] === undefined)
    return words[0];
  else {
    for (i = 1; i < words.length; i++) {
      let capWord = words[i];
      resWord = capWord[0].toUpperCase() + capWord.slice(1);
      camelCaseArr.push(resWord);
    }
  }
  return words[0] + camelCaseArr.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let totalSubjects = [];
  if (people.values === 0)
    return null;
  else
    totalSubjects = people.map(element => element.subjects);
  return totalSubjects.flat(1).length;

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let ingredientArr = menu.map(element => element.ingredients);
  return ingredientArr.flat(1).some(element => element === ingredient);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
