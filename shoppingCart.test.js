const shoppingCart = require("./shoppingCart");
describe("ShoppingCart", () => {
  let testCart;

  beforeEach(() => {
    testCart = new shoppingCart.Shoppingcart();
  });

  test("addToCart should add items to the cart", () => {
    const item = new shoppingCart.Item("apple", 10);
    testCart.addToCart(item, 2);

    expect(testCart.cart.length).toEqual(1);
  });

  test("removeFromCart should remove items from the cart", () => {
    const item = new shoppingCart.Item("apple", 10);
    testCart.addToCart(item, 3);
    testCart.removeFromCart(item, 2);

    expect(testCart.cart.length).toEqual(1);
  });

  test("removeFromCart should remove the correct amount of items = > 0", () => {
    const item = new shoppingCart.Item("apple", 10);
    testCart.addToCart(item, 3);
    testCart.removeFromCart(item, 4);

    expect(testCart.cart.length).toBe(0);
  });

  test("calculateTotal should return the correct total cost => 35", () => {
    const item1 = new shoppingCart.Item("apple", 10);
    const item2 = new shoppingCart.Item("grapes", 5);
    testCart.addToCart(item1, 2);
    testCart.addToCart(item2, 3);

    testCart.calculateTotal();

    expect(testCart.calculateTotal()).toBe(35);
  });

  test("calculateTotal should return 0 if the cart is empty", () => {
    expect(testCart.calculateTotal()).toBe(0);
  });
});
