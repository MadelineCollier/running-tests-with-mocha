function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");
  function noSpaces(string) {
    return string.split(" ").join("");
  }
  return noSpaces(s) == noSpaces(stringReverse);
}


module.exports = isPalindrome;
