function reverseString(str) {
  if (typeof str !== "string") {
    return "not a string";
  } else if (!str.length) {
    return "string is empty";
  } else if (str.length === 1) {
    return str;
  }
  return str.split("").reverse().join("");
}

module.exports = reverseString;
