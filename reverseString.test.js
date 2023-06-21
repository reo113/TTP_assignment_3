const reverseString = require("./reverseString");
const string = require("./reverseString");

describe("Reversing a string", () => {
  test("reverseString(\"word\") => drow", () => {
    expect(reverseString("word")).toBe("drow");
  });
  test("reverseString(\"\") => \"\"", () => {
    expect(reverseString("")).toBe("string is empty");
  });
  test("reverseString(\"a\") => \"a\"", () => {
    expect(reverseString("a")).toBe("a");
  });
});
