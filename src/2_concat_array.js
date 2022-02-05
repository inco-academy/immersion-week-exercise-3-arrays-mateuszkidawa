module.exports = concatArray

function concatArray(words) {
  // TODO Implement me.
  let chars = "";
  words.forEach(element => { chars+=" " + element});
  return chars + "."
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(concatArray(["Hello", "this", "is", "dog"]), 'Hello this is dog.');
verify(concatArray(["All", "I", "want", "for", "christmas", "is", "you"]), 'All I want for christmas is you.');
verify(concatArray([]), '.');


// let a=[2,3,4];
// console.log("a przed = " + a);

// function t(z){
//   //let y=z.shift();
//   return "z.shift() = " + z.shift() + " z = " + z/* + `
// y = ` + y;*/
// }

// console.log("a przed  = " + a);
// console.log(`t(a):  
// ` + t(a));
// console.log("a po = " + a);