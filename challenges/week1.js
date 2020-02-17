function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  const capitalizeFirstLetter = word.charAt(0).toUpperCase();
  return capitalizeFirstLetter + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  const firstNameInitial = firstName.charAt(0).toUpperCase();
  const lastNameInitial = lastName.charAt(0).toUpperCase();
  return firstNameInitial + "." + lastNameInitial;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  const getVatPrice = ((vatRate/100)*originalPrice);
  const finalVatPrice = (Math.round(getVatPrice*100))/100;
  const finalPrice = originalPrice + finalVatPrice ;
  return finalPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  const reductionPrice = ((reduction/100)*originalPrice);
  const finalReduction = (Math.round(reductionPrice*100))/100;
  const finalPrice = originalPrice - finalReduction
  return finalPrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
