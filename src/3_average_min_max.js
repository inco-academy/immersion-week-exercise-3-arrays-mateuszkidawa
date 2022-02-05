module.exports = averageMinMax

function averageMinMax(arr) {
  // TODO Implement me.
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
  return "Min: " + Math.min(...arr) + " Max: " + Math.max(...arr) + " Average: " + sum/arr.length;
}

/**Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');