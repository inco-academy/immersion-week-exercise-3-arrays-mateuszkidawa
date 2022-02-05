module.exports = displayFullName;

function displayFullName(name_surname) {
  console.log(`My name is `+ name_surname.split(" ")[name_surname.split(" ").length-1] + `, ` + name_surname);
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayFullName("James Bond"), "My name is Bond, James Bond");
verify(displayFullName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
verify(displayFullName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");