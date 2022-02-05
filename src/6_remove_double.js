module.exports = removeDouble;

function removeDouble(arr) {
  // TODO Implement me.
  const result = arr.filter((item, index, arr) => arr.indexOf(item) === index);
  return result
}

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(["suit", "clock", "butter", "suit"]), [
  "clock",
  "butter",
  "suit",
]);
verify(removeDouble(["hello", "hello", 23, -3, 23, "hello"]), [-3, 23, "hello"]);
