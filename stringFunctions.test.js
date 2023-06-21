const stringFunctions = require("./stringFunctions");

describe("Ultitize methods in StringFunctions folder", () => {
  test("reverseString(\"word\") => drow", () => {
    expect(stringFunctions.reverseString("word")).toBe("drow");
  });

  test("reverseString(\"\")=> \"\"", () => {
    expect(stringFunctions.reverseString("")).toBe("");
  });

  test("palindrome(\"racecar\") => true", () => {
    expect(stringFunctions.palindrome("racecar")).toBe(true);
  });

  test("palindrome(\"\") => true", () => {
    expect(stringFunctions.palindrome("")).toBe(true);
  });
});
