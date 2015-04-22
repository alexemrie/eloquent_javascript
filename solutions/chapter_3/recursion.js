// Zero is even
// One is odd
// For any other number N, its evenness is the same as N - 2


function isEven(number) {
  if (number < 0)
    return isEven(number * (-1));
  else if (number === 0)
    return true;
  else if (number === 1)
    return false;
  else
    return isEven(number - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));





// function power(base, exponent) {
//   if (exponent == 0)
//     return 1;
//   else
//     return base * power(base, exponent - 1);
// }
//
// console.log(power(2,3));
//8


var isEven = function(number) {
  if (number == 0) return true;
  if (number == 1) return false;
  if (number < 0) return isEven(number + 2);

  // alternate solution for negatives:
  // if (number < 0) return isEven(number*(-1);

  return isEven(number -2);
};

var isEven = function(number) {
  number = Math.abs(number);
  if (number == 0) return true;
  if (number == 1) return false;
  return isEven(number -2);
};
