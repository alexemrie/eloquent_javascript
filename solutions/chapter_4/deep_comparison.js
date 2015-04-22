var deepEqual = function(a, b) {
  if (a === b) {return true;}
  if (a === null || b === null) {return false;}

  if (typeof a === 'object' && typeof b === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) {return false;}
    for (var prop in a) {
      if (!deepEqual(a[prop], b[prop])) {return false;}
    };
    return true;
  };
  return false;
};

// function deepEqual(value1, value2) {
//    if (value1 === value2) {return true;}
//    if (value1 == null || value2 == null) {return false;}
//
//    if (typeof value1 === 'object' || typeof value2 === 'object') {
//      if (Object.keys(value1).length !== Object.keys(value2).length) {return false;}
//      for (var i in value1) {
//        if (!deepEqual(value1[i], value2[i])) {return false;}
//      }
//      return true;
//    }
//    return false;
//  }


 // function deepEqual(a, b) {
 //   if (a === b) return true;
 //
 //   if (a == null || typeof a != "object" ||
 //       b == null || typeof b != "object")
 //     return false;
 //
 //   var propsInA = 0, propsInB = 0;
 //
 //   for (var prop in a)
 //     propsInA += 1;
 //
 //   for (var prop in b) {
 //     propsInB += 1;
 //     if (!(prop in a) || !deepEqual(a[prop], b[prop]))
 //       return false;
 //   }
 //
 //   return propsInA == propsInB;
 // }




var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


// 1. Literally the same object (===) => true
// 2. if # of props != => false
// 3. if null => false
// 4. If props are the same
// 5. Are values for the props the same

// ......................................

// # of objects is the same but properties/values are different

// var obj1 = {here: {is: "an"}, object: 2};
// var obj2 = {here: {is: "an"}, foo: 3};

// ......................................


// # of objects is the same, properties(keys) are the same, values are different

// var obj1 = {here: {is: "an"}, foo: 2};
// var obj2 = {here: {is: "an"}, foo: 3};

// ......................................

// # of objects is the same, properties(keys) are the same, values are the same

// var obj1 = {here: {is: "an"}, foo: 2};
// var obj2 = {here: {is: "an"}, foo: 2};
