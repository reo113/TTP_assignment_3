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
class Shoppingcart {
  constructor() {
    this.cart = [];
  }
  addToCart(item, quantity) {
    this.item.setQuantity(quantity);
    this.cart.push(item);
  }
  removeFromCart(item, quantity) {
    if (this.item.quantity - quantity <= 0) {
      this.cart.splice(this.cart.indexOf(item), 1);
    } else {
      this.item.setQuantity(this.item.quantity - quantity);
    }
  }
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

module.exports = { Item, Shoppingcart };
