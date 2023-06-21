const substring = require("./longestSubStringNoRepeats");

describe("longestSubStringNoRepeats()", () => {
  test('longestSubStringNoRepeats("abcabcbb") => 3', () => {
    expect(substring("abcabcbb")).toEqual(3);
  });
  test('longestSubStringNoRepeats("bbbbb") => 1', () => {
    expect(substring("bbbbb")).toEqual(1);
  });
  test('longestSubStringNoRepeats("pwwkew") => 3', () => {
    expect(substring("abcabcbb")).toEqual(3);
  });
});
