//Given a string str, find the length of the longest substring without repeating characters.
function longestSubStringNoRepeat(word) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    ///if the character is already in the seen object, then we need to move the start pointer to the right of the last time we saw that character
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    ///update the longest length
    longest = Math.max(longest, i - start + 1);
    ///update the seen object with the character and the index
    seen[char] = i + 1;
  }
  return longest;
}
const res = longestSubStringNoRepeat("pwwkew");
//export function to be tested
module.exports = longestSubStringNoRepeat;
