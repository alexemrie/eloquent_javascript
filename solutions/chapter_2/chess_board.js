var size = 8;
var grid = "";

for (var height = 0; height < size; height++) {
  for (var width=0; width < size; width++) {
    if ((height + width) % 2 === 0)
      grid += "#";
    else
      grid += " ";
  }
  grid += "\n";
}

console.log(grid);

// for (var line=1; line < 8; line +=1)
//   if (line % 2 === 0)
//     console.log("# # # #");
//   else console.log(" # # # #");

// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character.
// The characters should form a chess board.

// var size = 8;
// var board = "";
//
// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }
// console.log(board);
