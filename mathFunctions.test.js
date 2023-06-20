const add = require("./mathFunction");
const subtract = require("./mathFunction");
const multiply = require("./mathFunction");
const divide = require("./mathFunction");

describe("Ultitize methods in mathFunctions folder", () => {
  test("add(1,2) => 3", () => {
    expect(add(1,2)).toEqual(3);
  });

  test("subtract(3,2)=> 1", () => {
    expect(subtract(3,2)).toEqual(1);
  });

  test("multiply(3,3) => 9", () =>{
    expect(multiply(3,2)).toEqual(9);
  });

  test("divide(3,0) => null", () =>{
    expect(divide(3,0)).toBeNull();
  });

});
