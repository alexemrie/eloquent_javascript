// Write a function countBs...
// that takes a string as its only argument and returns a
// number that indicates how many uppercase "B" characters are in the string

function countBs(string) {
  var count = 0;
  for (var number = 0; number < (string.length); number++) {
    if (string.charAt(number)==="B")
      count++;
  };
  return count;
};

// console.log(countBs("Banana Boat"));


// Write a fuction called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase "B" characters). Rewrite countBs to make use
// of this new function.


function countChar(string, char) {
  var count = 0;
  for (var number = 0; number < string.length; number++) {
    if (string.charAt(number)===char)
      count++;
  };
  return count;
};

// console.log(countChar("Banana Boat", "a"));
