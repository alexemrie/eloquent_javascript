// Write a function min that takes two arguments and returns their minimum

function min(number_one, number_two) {
  if (number_one < number_two)
    console.log(number_one);
  else if (number_one > number_two)
    console.log(number_two);
  else
    console.log("These two numbers are equal!");
}

console.log(min(-10, 25));

// Book Solution

// function min(a, b) {
//   if (a < b)
//     return a;
//   else
//     return b;
// }
