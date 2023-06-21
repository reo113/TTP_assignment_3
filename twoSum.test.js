const twosum = require("./twosum");

describe("twoSum", () => {
  test("twoSum([2, 7, 11, 15], 9) => [0,1]", () => {
    expect(twosum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
  test("twoSum([2, 7, 11, 15], 3) => []", () => {
    expect(twosum([2, 7, 11, 15], 3)).toStrictEqual([]);
  });
  test("twoSum([-1,-2,-3,-4,-5], -8) => [2,4]", () => {
    expect(twosum([-1,-2,-3,-4,-5],-8)).toStrictEqual([2,4]);
  });
});
