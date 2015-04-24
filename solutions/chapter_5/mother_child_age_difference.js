var ancestry = JSON.parse(require('./ancestry.js'));

// Using the example data set from this chapter, compute the average age difference between mothers and children
// (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
// 31.222

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var peopleWithMothers = ancestry.filter(function(person) {
  if (person.mother !== null && person.birth !== null) {
    return person;
  }
});

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var birthAge = function(object) {
  results = [];
  object.forEach(function(person) {
    if (byName[person.mother]) {
    results.push(person.born - byName[person.mother]["born"]);
    }
    // results.push(person.born);
  });
  return results;
};



console.log(average(birthAge(peopleWithMothers)));






// console.log(peopleWithMothers);

// Mother_name; child_name; born
// Child born - Mother born = mother age when born
// enter mother ages into an array
// Add all of the ages in array/ array.length

// Pull out person; check if have mother propery (not null); if mother property is not null pull them out;

// Find the data of each person's mother; i.e. born_year (if does not exist then )

// Check for mothers that have born year

// function average(array) {
//   function plus(a, b) { return a + b; }
//   return array.reduce(plus) / array.length;
// }
//
// var byName = {};
// ancestry.forEach(function(person) {
//   byName[person.name] = person;
// });

// Use forEach
