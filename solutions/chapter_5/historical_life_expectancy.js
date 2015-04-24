// collect a list of centuries in dataset
  // filter?
// build object with centuries
//   "17th": [array of ages]
//   '18th': [array of ages]
// fill in object with ages
//   find which century person belongs to and push age into appropriate century
// Average ages per century
//   sum of ages/ array.length


// function average(array) {
//   function plus(a, b) { return a + b; }
//   return array.reduce(plus) / array.length;
// }





var ancestry = JSON.parse(require('./ancestry.js'));

// console.log(ancestry);

// function average(array) {
//   function plus(a, b) { return a + b; }
//   return array.reduce(plus) / array.length;
// }

var centuries = function(object) {
  var results = [];
  object.filter(function(person) {
    results.push(Math.ceil(person.died / 100));
  });

  return results;
};

var originalArray = centuries(ancestry);


// console.log(centuries(ancestry));

//mikeheavers.com/main/code-item/removing_duplicates_in_an_array_using_javascript

var uniqueArray = originalArray.filter(function(elem, pos) {
    return originalArray.indexOf(elem) == pos;
  });

console.log(uniqueArray);
