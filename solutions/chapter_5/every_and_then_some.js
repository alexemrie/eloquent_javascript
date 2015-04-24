var every = function(array, predicate) {
  result = [];

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      result.push(true);
    else {
      return false;
    }
  };
  return true;
};


var some = function(array, predicate) {
  result = [];

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
    else {
      result.push(false);
    }
  };
  return false;
};


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
