const container = require('./containerWithMostWater');
describe("containerWithMostWater", () => {
    test("containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) => 49", () => {
      expect(container([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    });
    test("containerWithMostWater([4, 3, 2, 1, 4]) => 16", () => {
      expect(container([4, 3, 2, 1, 4])).toEqual(16);
    });
    test("containerWithMostWater([1,2,1]) => 2", () => {
      expect(container([1,2,1])).toEqual(2);
    });
  });