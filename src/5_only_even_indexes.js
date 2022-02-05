module.exports = evenIndexes

function evenIndexes(word) {
  // TODO Implement me.
  let arr=[];
  for(let i=0; i<=word.length; i++){
    if(i%2==0){
      arr.push(word[i])
    }
  }
  return arr;
};

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(evenIndexes("lol"), [ 'l', 'l' ]);
verify(evenIndexes("You're weird"), [ 'Y', 'u', 'r', ' ', 'e', 'r' ]);
verify(evenIndexes(""), [ ]);