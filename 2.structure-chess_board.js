// chess board

for (var n=0; n<8; n++) {
  var chesBoard = "";
  if (n % 2 == 0) {
    output = "# # # # ";
  } else {
    output = " # # # #";
  }
  console.log(output);
}

// chess board how it should be
var size = 4;
chessBoard = "";

for (x=0;x<size;x++) {
  for (y=0;y<size;y++) {
    if ((x + y) % 2 == 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
} 

console.log(chessBoard);