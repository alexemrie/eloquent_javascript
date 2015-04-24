// Write a function arrayToList that builds up a data structure
// like the previous one produces an array from list.

// Expected output

// { value: 1,
//   rest: { value: 2, rest:
//      { value: 3, rest:
//        [Object]            ****[Object] = null
//      }
//    }
// }

var arrayToList = function(array) {
  var list = null;
  for (var index = array.length - 1; index >= 0; index--) {
    list = {value: array[index], rest: list};
  };
  return list;
};

// console.log(arrayToList([1,2,3,4]));

// Write a listToArray function that produces an array from a list


var listToArray = function(list) {
  var array = [];
  for (var section=list; section; section= section.rest) {
    array.push(section.value);
  };
  return array;
};

// console.log(listToArray(arrayToList([10, 20, 30])));

// Write the helper function prepend, which takes an element and a list
// and creates a new list that adds the element to the front of the
// input list.

var prepend = function(element, list) {
  return {value: element, rest: list};
};

// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


// Write a function nth, which takes a list and a number
// and returns the element at the given position in the list,
// or undefined when there is no such element.



var nth = function(list, index) {
  var array = [];
  for (var section=list; section; section= section.rest) {
    array.push(section.value);
  };
  return array[index];
};

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


var list = {
  data: "a",
  rest: {
    data: "b",
    rest: {
      data: "c",
      rest: null
    }
  }
};


var input = ["a", "b", "c"];
var node = null;

node = {
  data: a[2],
  rest: null
};

node = {
  data: a[1],
  rest: grandchild
}

node = {
  data: "a",
  rest: parent
}
