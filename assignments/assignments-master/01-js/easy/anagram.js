/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to lowercase before sorting
  const lowercaseStr1 = str1.toLowerCase();
  const lowercaseStr2 = str2.toLowerCase();

  // Convert strings to arrays, sort them, and join them back into strings
  const sortedStr1 = lowercaseStr1.split('').sort().join('');
  const sortedStr2 = lowercaseStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
module.exports = isAnagram;

module.exports = isAnagram;
