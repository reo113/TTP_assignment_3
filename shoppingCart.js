//item class represents an item in the shopping cart
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.quantity = 1;
  }
  setQuantity(quantity) {
    this.quantity = quantity;
  }
}
//shopping cart class represents the shopping cart
class Shoppingcart {
  constructor() {
    this.cart = [];
  }
  //adds item to cart
  addToCart(item, quantity) {
    item.setQuantity(quantity);
    this.cart.push(item);
  }
  //removes item from cart
  removeFromCart(item, quantity) {
    if (item.quantity - quantity <= 0) {
      this.cart.splice(this.cart.indexOf(item), 1);
    } else {
      item.setQuantity(item.quantity - quantity);
    }
  }
  //calculates total price of items in cart
  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].price * this.cart[i].quantity;
    }
    return total;
  }
}
const item = new Item("apple", 0.75);
const item2 = new Item("banana", 1.75);
const shoppingcart = new Shoppingcart();
shoppingcart.addToCart(item, 2);
shoppingcart.addToCart(item2, 3);
shoppingcart.removeFromCart(item, 1);
console.log(shoppingcart.calculateTotal());
//export classes to be tested
module.exports = { Item, Shoppingcart };
