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


// console.log(centuries(ancestry));

//mikeheavers.com/main/code-item/removing_duplicates_in_an_array_using_javascript


var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var findCenturies = function(object) {
  var results = [];
  object.filter(function(person){
    results.push(Math.ceil(person.died / 100));
  });
  return results.sort();
};

var unFilteredArray = findCenturies(ancestry);

var arrayOfCenturies = unFilteredArray.filter(function(elem, position){
  return unFilteredArray.indexOf(elem) === position;
});

var averageAgeMaker = function(centuriesArray, ancestryObject) {
  var coolObject = {};
  for (var i = 0; i < centuriesArray.length; i++) {
    coolObject[centuriesArray[i]] = [];
    ancestryObject.filter(function(person) {
      if (Math.ceil(person.died/100) === centuriesArray[i]) {
        coolObject[centuriesArray[i]].push(person.died - person.born);
      }
    });
    var averagedAge = (average(coolObject[centuriesArray[i]]));
    coolObject[centuriesArray[i]] = averagedAge;
  }
  return coolObject;
};

console.log(averageAgeMaker(arrayOfCenturies, ancestry));
