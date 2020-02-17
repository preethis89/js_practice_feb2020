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
  const len = Math.floor(str.length/2);
  if(str.length % 2 ===1) {
      //return str[len-1] + str[len];
      return str[len];
  } 
  else{
      //return str[len];
      return str[len-1] + str[len];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
    let arr = [];
    for(k=0 ; k < word.length ; k++){
    for(i=1 ; i < word.length+1; i++)
{
  j = word.length-i;
  arr[i-1] = word[j];
} 
    }
    let reversalWord = arr.join("");
    return reversalWord;   


}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let arr = [];
  let finalReversedWord =[];
  for(k=0 ; k < words.length ; k++){
    let arrayWord = words[k];
  for(i=1 ; i < arrayWord.length+1; i++)
{
j = arrayWord.length-i;
arr[i-1] = arrayWord[j];
} 
finalReversedWord[k] = arr.join("");
}
return finalReversedWord;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux")
      count++;
  }
  return count
  
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let addedScores =0 ;
  for(i=0 ; i< scores.length ; i++){
    addedScores += scores[i];

  }
  const meanScore = addedScores/scores.length;
  const finalMeanScore = (Math.round(meanScore*100)/100);
  return finalMeanScore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if(n%3 === 0 && n%5 === 0)
  return "fizzbuzz";
  else{
  {
    if(n%5===0)
    return "buzz";
    else if(n%3===0)
    return "fizz";
    else
    return n;
  }
  
}
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
