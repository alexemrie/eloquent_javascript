// Write a range function that takes two arguments,
// start and end, and returns an array containing all
// the numbers from start up to (and including) end.

function range(start, end) {
  var array = [];
  for (i = start; i <= end; i++) {
    array.push(i);
  }
  console.log(array);
}

console.log(range(1,10));

// Write a sum function that takes an array of numbers and returns
// the sum of these numbers

function sum(array) {
  var total = 0;

  for (i=0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total);
}

console.log(sum([1,2,3,4,5,6,7,8,9,10]));

// Bonus: optional third argument for step that works with negative numbers.

function range(start, end, step) {
  var array = [];
  step = typeof step !== 'undefined' ? step : 1;
  if (start < end) {
    for (i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  if (start > end) {
    for (i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  console.log(array);
}

console.log(range(5,2,-1));
