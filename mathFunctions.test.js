const mathFunctions = require("./mathFunctions");

describe("Ultitize methods in mathFunctions folder", () => {
  test("add(1,-1) => 0", () => {
const mathFunctions = require("./mathFunctions");
expect(mathFunctions.add(1,-1)).toEqual(0);
  })

  test("subtract(3,2)=> 1", () => {
    expect(mathFunctions.subtract(3,2)).toEqual(1);
  })

  test("multiply(3,3) => 9", () =>{
    expect(mathFunctions.multiply(3,3)).toEqual(9);
  })

  test("divide(3,0) => Infinity", () =>{
    expect(mathFunctions.divide(3,0)).toBe(Infinity);
  })

});