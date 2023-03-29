function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right= word.length - 1;

  while( left < right) {
    if (word[left]!== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
// function reverseString(word) {
//   const wordArray = word.split("");
//   const reversedWordArray = wordArray.reverse();
//   const reversedWord = reversedWordArray.join("");
//   return reversedWord;
// }

// function isPalindrome(word) {
//   const reversedWord = reverseString(word);
//   if (word === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }
/* 
  Add your pseudocode here
  Initialize two pointers, one at the beginning of the word and one at the end.
  While the pointers haven't met yet:
  a. If the characters at the two pointers are not equal, return false.
  b. Otherwise, move the first pointer to the right and the second pointer to the left.
  If the pointers have met, return true.
*/

/*
  Add written explanation of your solution here
  The isPalindrome function takes a word as an input and returns a boolean value indicating whether or not the word is a palindrome. The function uses two pointers to compare the characters at opposite ends of the word, and moves them towards the middle of the word until they meet. If at any point the characters at the two pointers are not equal, the function returns false. If the pointers meet, the function returns true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));
console.log("=>", isPalindrome("abba"));
console.log("=>", isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
console.log("=>", isPalindrome("ab"));
