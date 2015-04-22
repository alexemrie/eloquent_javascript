// reverseArray takes an array as an argument and produces
// a new array that has the same elements in the inverse order


function reverseArray(array) {
  var newArray = [];
  for (i=(array.length - 1); i >= 0; i--) {
    newArray.push(array[i]);
  };
  console.log(newArray);
};

console.log(reverseArray([1,2,3,4,5]));



// reverseArrayInPlace does what the reverse method does:
// it modifies the array given as arguments in order to
// reverse its elements.


// while loop
function reverseArrayInPlace(array) {
  var a = 0;
  var b = (array.length - 1);
  while (a < b) {
    var x = array[a];
    array[a] = array[b];
    array[b] = x;
    a++;
    b--;
  };
  console.log(array);
};

// for loop 0 < b (use this one)
function reverseArrayInPlace(array) {
  var b = (array.length - 1);
  for (var a = 0; b > 0; a++) {
    var x = array[a];
    array[a] = array[b];
    array[b] = x;
    b--;
  };
  console.log(array);
};

// another for loop a < b
function reverseArrayInPlace(array) {
  var b = (array.length - 1);
  for (var a = 0; a < b; a++) {
    var x = array[a];
    array[a] = array[b];
    array[b] = x;
    b--;
  };
  console.log(array);
};

console.log(reverseArrayInPlace([1,2,3,4]));
