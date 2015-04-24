
// var flatten = function(arrays) {
//   var results;
//   arrays.reduce(function(previous, current) {
//     results = previous.concat(current);
//   });
//   return results;
// };


var flatten = function(arrays) {
  return arrays.reduce(function(previous, current) {
    return results = previous.concat(current);
  });
};


var arrays = [[1,2,3],[4,5,6], [5,6]];
console.log(flatten(arrays));
