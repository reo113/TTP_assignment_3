// Takes two numbers a and b and returns their sum
function add(a, b) {
  return a + b;
}
//Takes two numbers a and b and returns the difference between a and b.
function subtract(a, b) {
  return a - b;
}
//Takes two numbers a and b and returns their product
function multiply(a, b) {
  return a * b;
}
//Takes two numbers a and b and returns the result of dividing a by b.
function divide(a, b) {
  return a / b;
}
// exports functions to be tested
module.exports = { add, subtract, multiply, divide };
