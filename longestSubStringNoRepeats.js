function longestSubStringNoRepeat(word) {
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (seen[char]) {
        start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    return longest;


}
const res = longestSubStringNoRepeat("pwwkew");
console.log(res);

module.exports = longestSubStringNoRepeat;