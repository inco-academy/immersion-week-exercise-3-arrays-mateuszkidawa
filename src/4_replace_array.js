module.exports = replaceArray;

function replaceArray(arr) {
  // TODO Implement me.
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i][0])
    // newarr[i] = arr[i];
    if (arr[i][0] == "h" || arr[i][0] == "H") {
      arr[i] = arr[i].toString()
      arr[i] = arr[i].toUpperCase();
      // newarr[i] = arr[i];
      // console.log(newarr[i])
    }
  }
  return arr;
}

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(replaceArray(["banana", "suit", "hammer"]), ["banana", "suit", "HAMMER"]);
verify(replaceArray(["Hello", "there"]), ["HELLO", "there"]);
verify(replaceArray(["Hey!", "hey..."]), ["HEY!", "HEY..."]);
