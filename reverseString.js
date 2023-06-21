//Takes a string str and returns the reversed string.
function reverseString(str) {
  if (typeof str !== "string") {
    return "not a string";
  } else if (!str.length) {
    return "string is empty";
  } else if (str.length === 1) {
    return str;
  }
  // splits the string into a char array, reverses the array, and joins the array back into a string
  return str.split("").reverse().join("");
}
//export function to be tested
module.exports = reverseString;
