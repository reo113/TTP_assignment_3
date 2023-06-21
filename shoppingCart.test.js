

const shoppingCart = require("./shoppingCart");

describe("Ultitize methods in shoppingCart folder", () => {
  test("addToCart(item,2) => 0", () => {
    expect(shoppingCart.Shoppingcart.addToCart(shoppingCart.Item,2)).toBe(0);
  });

  test("removeFromcart(item,2)=> 1", () => {
 expect(shoppingCart.Shoppingcart.removeFromcart(shoppingCart.Item,1)).toBe(1);
  });

  test("calculateTotal() => 25", () => {
   expect(shoppingCart.Shoppingcart.calculateTotal()).toBe(25);
  });

});
