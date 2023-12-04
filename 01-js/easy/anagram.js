/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //Lowercase and length compare
  let lower1 = str1.toLowerCase();
  let lower2 = str2.toLowerCase();
  if (lower1.length!=lower2.length){
    return false;
  }
  //Sort for alphabetical order
  let sortStr1 = lower1.split('').sort().join('');
  let sortStr2 = lower2.split('').sort().join('');

  if (sortStr1 === sortStr2){
    return true;
  } 
  else if(str1!=str2){
    return false;
  }
};

module.exports = isAnagram;
