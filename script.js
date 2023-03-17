// rook will kill but how

// Want to add the magic move
// want to add kill -> complited

let arr = [
  [
    ["◼️", "b"],
    ["🐎", "b"],
    ["🥷🏿", "b"],
    ["👸🏿", "b"],
    ["🤴🏿", "b"],
    ["🥷🏿", "b"],
    ["🐎", "b"],
    ["◼️", "b"],
  ],
  [
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
    ["👮🏿‍♂️", "b"],
  ],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  [
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
    ["👮🏻‍♂️", "w"],
  ],
  [
    ["◻️", "w"],
    ["🎠", "w"],
    ["🥷🏻", "w"],
    ["👸🏻", "w"],
    ["🤴🏻", "w"],
    ["🥷🏻", "w"],
    ["🎠", "w"],
    ["◻️", "w"],
  ],
];

var wKilled = 0;
var bKilled = 0;

var isClick = false,
  r = 0,
  c = 0,
  value = "",
  blackAndWhite = true,
  chessPiece = 0;
var postion = [];

function cli(x) {
  if (blackAndWhite) {
    r = x.closest("tr").rowIndex;
    c = x.cellIndex;
    // console.log(r+" "+c);
    if (
      (isClick && arr[r][c][1] != "b") ||
      (isClick &&
        postion[4] == "👮🏿‍♂️" &&
        postion[2] == 0 &&
        postion[3] == 0 &&
        arr[r][c][1] == "b")
    ) {
      // Move
      switch (value) {
        case "👮🏿‍♂️":

          console.log(postion);
          let pawn = checkIfIsGoingJump(r, c, postion[0], postion[1], "b","👮🏿‍♂️");

          if (postion[2] == 0 && postion[3] == 0) {
            // For Magical Move
            console.log("here");
            arr[postion[3]][postion[4]] = arr[r][c];
            document.getElementById(
              `(${postion[3]},${postion[4]})`
              ).textContent = arr[r][c][0];
            }
            console.log("out : ",postion[0]," ",postion[1]);
            console.log("out : ",arr[r][postion[3]+1]);//[postion[0]],[postion[1]][0]);
            
            // for kill
            console.log(pawn);
            if(r <= postion[2] && ((c == postion[3]+1) || (c == postion[3]-1))){
            if((arr[r][c][1] == "w")) 
              {
                console.log("kill");
                bKilled++;
                document.getElementById(`(${r},${c})`).textContent = value;
                arr[r][c] = chessPiece;
                isClick = false;
                postion = 0;
              }
              break;
          }
          if (pawn && r >= postion[0]) {
            // Check if jump and if it is come backword
            if (r <= postion[2] && c == postion[3]) {
              document.getElementById(`(${r},${c})`).textContent = value;
              arr[r][c] = chessPiece;
              isClick = false;
              postion = 0;
            }
          }
          break;

        case "◼️":
          let rook = true;

          //To Check if it is Goint to Jump 
          rook = checkIfIsGoingJump(r, c, postion[0], postion[1], "b");
          console.log("check : ",rook);

          // console.log(postion[2]);
          // if(r <= postion[2] && ((c == postion[3]+1) || (c == postion[3]-1))){
          //   if((arr[r][c][1] == "w")) 
          //     {
          //       console.log("kill");
          //       bKilled++;
          //       document.getElementById(`(${r},${c})`).textContent = value;
          //       arr[r][c] = chessPiece;
          //       isClick = false;
          //       postion = 0;
          //     }
          //     break;
          //   }
          if (rook && (r == postion[0] || c == postion[1])) {
            console.log(r, "-", c);
            console.log(postion);
            // if(postion)
            console.log(value);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            console.log(arr);
            postion = 0;
          }
          break;

        case "🐎":
          // No need to check ifJump
          for (let i = 2; i < postion.length; i++) {
            if (postion[i] != null && postion[i].toString() == `${r},${c}`) {
              // Check if clicked Position is movable
              document.getElementById(`(${r},${c})`).textContent = value;
              arr[r][c] = chessPiece;
              postion = 0;
              isClick = false;
              break;
            }
          }
          break;

        case "🥷🏿":
          let bishop = true;

          //To Check if it is Goint to Jump
          bishop = checkBishopMove(r, c, postion[0], postion[1]);

          if (bishop) {
            console.log(r, "-", c);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            postion = 0;
          }
          break;
        case "🤴🏿":
          let king = true;

          //To Check if it is Goint to Jump
          king = checkKingMove(r, c, postion[0], postion[1]);

          if (king) {
            console.log(r, "-", c);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            postion = 0;
          }
          break;

        case "👸🏿": //Queen
          let queen = true;

          //To Check if it is Goint to Jump
          console.log(
            checkKingMove(r, c, postion[0], postion[1]) +
              "||" +
              checkBishopMove(r, c, postion[0], postion[1]) +
              "||" +
              (checkIfIsGoingJump(r, c, postion[0], postion[1], "b") &&
                (r == postion[0] || c == postion[1]))
          );

          queen =
            checkKingMove(r, c, postion[0], postion[1]) ||
            checkBishopMove(r, c, postion[0], postion[1]) ||
            (checkIfIsGoingJump(r, c, postion[0], postion[1], "b") &&
              (r == postion[0] || c == postion[1]));

          if (queen) {
            console.log(r, "-", c);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            postion = 0;
          }
          break;

        default:
          break;
      }
      blackAndWhite = false;
    } else if (!isClick && arr[r][c][1] == "b") {
      // Select
      value = document.getElementById(`(${r},${c})`).textContent;
      console.log(value);
      switch (value) {
        //Pawn
        case "👮🏿‍♂️":
          isClick = true;
          console.log("r,c = ",r,c);
          if (r < 6) postion = [r, c, r + 2, Number(c), value];
          // Store in Array to check correct Move
          else if (r == 6) postion = [r, c, r + 1, Number(c), value];
          else {
            // Magic :
            postion = [0, 0, value, r, c];
          }
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;
        case "◼️":
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "🐎": // Knight
          isClick = true;
          postion = [r, c];

          postion[2] = r + 2 > 7 || c + 1 > 7 ? null : [r + 2, c + 1];
          postion[3] = r - 2 < 0 || c + 1 > 7 ? null : [r - 2, c + 1];
          postion[4] = r + 1 > 7 || c + 2 > 7 ? null : [r + 1, c + 2];
          postion[5] = r - 1 < 0 || c + 2 > 7 ? null : [r - 1, c + 2];
          postion[6] = r - 2 < 0 || c - 1 < 0 ? null : [r - 2, c - 1];
          postion[7] = r + 2 > 7 || c - 1 < 0 ? null : [r + 2, c - 1];
          postion[8] = r - 1 < 0 || c - 2 < 0 ? null : [r - 1, c - 2];
          postion[9] = r + 1 > 7 || c - 2 < 0 ? null : [r + 1, c - 2];
          postion[10] = [r, c];

          console.log(postion);
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "🥷🏿": //Bishop
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "🤴🏿": //King
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "👸🏿": //Queen
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        default:
          break;
      }
    }
  } else {
    //white



    r = x.closest("tr").rowIndex;
    c = x.cellIndex;
    // console.log(r+" "+c);
    if (
      (isClick && arr[r][c][1] != "w") ||
      (isClick &&
        postion[4] == "👮🏻‍♂️" &&
        postion[2] == 0 &&
        postion[3] == 0 &&
        arr[r][c][1] == "w")
    ) {
      // Move
      switch (value) {
        case "👮🏻‍♂️":
          let pawn = checkIfIsGoingJump(r, c, postion[0], postion[1], "w","👮🏻‍♂️");


            // For Magical Move
            if (postion[2] == 0 && postion[3] == 0) {
              arr[postion[3]][postion[4]] = arr[r][c];
              document.getElementById(
                `(${postion[3]},${postion[4]})`
              ).textContent = arr[r][c][0];
            // } else if (r <= postion[2] && c == postion[3]) {
            }
          
          // Check if jump and if it is come backword
          if(r >= postion[2] && (c == postion[3]+1) ||(r >= postion[2] && (c == postion[3]-1))){
            if((arr[r][c][1] == "b")){
              document.getElementById(`(${r},${c})`).textContent = value;
              arr[r][c] = chessPiece;
              isClick = false;
              postion = 0;
            }
          }
          if (pawn && r <= postion[0]) {
          if (r >= postion[2] && c == postion[3]) {
              document.getElementById(`(${r},${c})`).textContent = value;
              arr[r][c] = chessPiece;
              console.log(arr);
              isClick = false;
              postion = 0;
            }
          }
          break;

        case "◻️":
          let rook = true;

          //To Check if it is Goint to Jump
          rook = checkIfIsGoingJump(r, c, postion[0], postion[1], "w");
          console.log("check = "+rook);
          if (rook && (r == postion[0] || c == postion[1])) {
            wKilled++;
            console.log(value);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            // console.log(arr);
            postion = 0;
          }
          break;

        case "🎠":
          // No need to check ifJump
          for (let i = 2; i < postion.length; i++) {
            if (postion[i] != null && postion[i].toString() == `${r},${c}`) {
              // Check if clicked Position is movable
              document.getElementById(`(${r},${c})`).textContent = value;
              arr[r][c] = chessPiece;
              postion = 0;
              isClick = false;
              break;
            }
          }
          break;

        case "🥷🏻":
          let bishop = true;

          //To Check if it is Goint to Jump
          bishop = checkBishopMove(r, c, postion[0], postion[1]);

          if (bishop) {
            console.log(r, "-", c);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            postion = 0;
          }
          break;
        case "🤴🏻":
          let king = true;

          //To Check if it is Goint to Jump
          king = checkKingMove(r, c, postion[0], postion[1]);

          if (king) {
            console.log(r, "-", c);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            postion = 0;
          }
          break;

        case "👸🏻": //Queen
          let queen = true;

          //To Check if it is Goint to Jump
          console.log(
            checkKingMove(r, c, postion[0], postion[1]) +
              "||" +
              checkBishopMove(r, c, postion[0], postion[1]) +
              "||" +
              checkIfIsGoingJump(r, c, postion[0], postion[1], "w") &&
              (r == postion[0] || c == postion[1])
          );

          queen =
            checkKingMove(r, c, postion[0], postion[1]) ||
            checkBishopMove(r, c, postion[0], postion[1]) ||
            (checkIfIsGoingJump(r, c, postion[0], postion[1], "w") &&
              (r == postion[0] || c == postion[1]));

          if (queen) {
            console.log(r, "-", c);
            document.getElementById(`(${r},${c})`).textContent = value;
            arr[r][c] = chessPiece;
            isClick = false;
            postion = 0;
          }
          break;

        default:
          break;
      }
      blackAndWhite = true;
    } else if (!isClick && arr[r][c][1] == "w") {
      // Select
      value = document.getElementById(`(${r},${c})`).textContent;
      console.log(value);
      switch (value) {
        //Pawn
        case "👮🏻‍♂️":
          isClick = true;
          console.log("r,c = ",r,c);
          if (r > 1) postion = [r, c, r - 2, Number(c), value];
          // Store in Array to check correct Move
          else if (r == 1) {
            console.log("in else If");
            postion = [r, c, r - 1, Number(c), value];
          }
          else {
            // Magic :
            postion = [0, 0, value, r, c];
          }
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;
        case "◻️":
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "🎠": // Knight
          isClick = true;
          postion = [r, c];

          postion[2] = r + 2 > 7 || c + 1 > 7 ? null : [r + 2, c + 1];
          postion[3] = r - 2 < 0 || c + 1 > 7 ? null : [r - 2, c + 1];
          postion[4] = r + 1 > 7 || c + 2 > 7 ? null : [r + 1, c + 2];
          postion[5] = r - 1 < 0 || c + 2 > 7 ? null : [r - 1, c + 2];
          postion[6] = r - 2 < 0 || c - 1 < 0 ? null : [r - 2, c - 1];
          postion[7] = r + 2 > 7 || c - 1 < 0 ? null : [r + 2, c - 1];
          postion[8] = r - 1 < 0 || c - 2 < 0 ? null : [r - 1, c - 2];
          postion[9] = r + 1 > 7 || c - 2 < 0 ? null : [r + 1, c - 2];
          postion[10] = [r, c];

          console.log(postion);
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "🥷🏻": //Bishop
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "🤴🏻": //King
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        case "👸🏻": //Queen
          isClick = true;
          postion = [r, c];
          document.getElementById(`(${r},${c})`).textContent = "";
          chessPiece = arr[r][c];
          arr[r][c] = "";
          break;

        default:
          break;
      }
    }
  }
}

function checkIfIsGoingJump(destinationRow,
  destinationColo,
  sourceRow,
  sourceCol ,
  colour,play){
    // console.log("here : ",sourceRow+" "+destinationRow);
    if (sourceRow == destinationRow && sourceCol == destinationColo) return true;

    //Try:
    // if (((sourceRow == destinationRow+1) || (sourceRow == destinationRow -1)) && ((sourceCol == destinationColo+1) || sourceCol == destinationColo-1) && (play == "👮🏿‍♂️" || play == "👮🏻‍♂️")){
    //   if(colour == "b"){
    //     console.log(colour+" "+arr[destinationRow][destinationColo][1]);
    //     if(arr[destinationRow][destinationColo][1] == 'w'){
    //       console.log("here");
    //       return true;
    //     }
    //   }
    //   else{
    //     if(arr[destinationColo][destinationRow][1] == 'b')return true;
    //   }
    //   return false;
    // }

    let checkisWhite = false;
    if(sourceRow != destinationRow){
      if(colour == 'w'){
        temp = sourceRow;
        sourceRow = destinationRow;
        destinationRow = temp;
        checkisWhite = true;
      }
      for(let i=sourceRow ; i < destinationRow;i++){
        if(checkisWhite){
          //i confuse here on kill
          // if(i == destinationRow-1){
          //   wKilled++;
          //   if(arr[i][destinationColo][1] != 'w')
          //   return true
          //   else return false
          // }
      
          if(arr[i][destinationColo][1] == 'w' || arr[i][destinationColo][1] == 'b'){
            return false;
          }
        }else{
          console.log("Black");
          console.log("sourceRow != destinationRow : ",destinationColo );
          console.log(i+","+destinationColo );
          // console.log(arr[i]);
          console.log(arr[i][destinationColo]);
          console.log(arr[i][destinationColo][1]);
          if(arr[i][destinationColo][1] == 'b' || arr[i][destinationColo][1] == 'w'){
            return false;
          }
        }
      }
      return true;
    }else{
      if(colour == 'w'){
        temp = sourceCol
        sourceCol = destinationColo;
        destinationColo = temp;
        checkisWhite = true;
      }
      for(let i=Math.min(sourceCol,destinationColo) ; i < Math.max(sourceCol,destinationColo);i++){
        if(checkisWhite){
          console.log("White Coloumn");
          console.log(destinationRow+","+i);
          console.log(arr[destinationRow][i]);
          console.log(arr[destinationRow][i][1]);
          if(arr[destinationRow][i][1] == 'w' || arr[destinationRow][i][1] == 'b'){
            return false;
          }
        }else{
          console.log("Black Coloumn");
          console.log(destinationRow+","+i);
          console.log("In the position : ",arr[destinationRow][i]);
          console.log("In the position b/r: ",arr[destinationRow][i][1]);
          if(arr[destinationRow][i][1] == 'b' || arr[destinationRow][i][1] == 'w'){
            return false;
          }

          
          console.log(i+","+destinationColo);
          console.log(arr);
          console.log("In the position : ",arr[destinationRow][destinationColo]);
          console.log("In the position : b/w",arr[destinationRow][destinationColo][1]);
          if(arr[destinationRow][destinationColo][1] == 'b' || arr[destinationRow][destinationColo][1] == 'w'){
            return false;
          }
        }
      }
      return true;
    }
}

/*
function checkIfItIsGoingJump(
  destinationRow,
  destinationColo,
  sourceRow,
  sourceCol ,
  colour
) {
    console.log("inside");
  if (sourceRow == destinationRow && sourceCol == destinationColo) return true;
  if (destinationRow != sourceRow) {
    console.log("row");
  if (colour == "b") {
    for (i = sourceRow + 1; i <= destinationRow; i++) {
      if (
        arr[i][destinationColo][1] == "w" ||
        arr[i][destinationColo][1] == "b"
      ) {
        console.log("NO!!!r");
        return false;
      }
    }
  } else {
    for (i = sourceRow; i >= destinationRow; i--) {
      // console.log("sdgd--"+arr[i][destinationColo][1]+" != "+colour);
      if (
        arr[i][destinationColo][1] == "w" ||
        arr[i][destinationColo][1] == "b"
      ) {
        console.log("NO!!!r");
        return false;
      }
    }
  }
  return true;
}else{
    console.log("coloum");
    if (colour == "b") {
        for (i = Math.min(sourceCol, destinationColo);i <= Math.max(sourceCol, destinationColo);i++) {
            console.log(i+" "+destinationRow);
            if (arr[i][destinationRow][1] == "w" || arr[i][destinationRow][1] == "b") {
                console.log("NO!!!r");
                return false;
            }
        }
    }else{
        // console.log("j");
        console.log(sourceRow+" == "+destinationColo);
        for (i = sourceRow-1;i >= destinationRow;i++) {
            console.log("--->"+arr[i][destinationColo][1]);
            if (arr[i][destinationColo][1] == "w" || arr[i][destinationColo][1] == "b") {
                console.log("NO!!!r");
                return false;
            }
        }
    }
  return true;
}
}

*/
  //   console.log("postion : " + postion);

  //   if (destinationRow != sourceRow) {
  //     console.log("Inside the if : " + destinationRow + " " + sourceRow);
  //     // for (i = Math.min(sourceRow,destinationRow); i <= Math.max(sourceRow,destinationRow); i++) {
  //     for (i = sourceRow; i <= destinationRow; i++) {
  //         console.log("sdgd"+arr[i][destinationColo][1]+" != "+colour);
  //       if (arr[i][destinationColo] != colour) {
  //         console.log("NO!!!r");
  //         return false;
  //       }
  //     }
  //   } else {
  //     console.log("colomn " + sourceCol + " " + destinationColo);
  //     for (
  //       i = Math.min(sourceCol, destinationColo);
  //       i <= Math.max(sourceCol, destinationColo);
  //       i++
  //     ) {
  //       if (arr[destinationRow][i] != "") {
  //         console.log("NO!!!c");
  //         return false;
  //       }
  //     }
  //   }
  //   return true;


function checkBishopMove(
  destinationRow,
  destinationColo,
  sourceRow,
  sourceCol
) {
  if (destinationRow == sourceRow && destinationColo == sourceCol) return true;
  console.log(destinationRow + " " + destinationColo);
  // right Down
  if (destinationRow > sourceRow && destinationColo > sourceCol) {
    for (let i = sourceRow, j = sourceCol; i <= 7 && j <= 7; i++, j++) {
      console.log(i + " " + j + " " + arr[i][j]);
      if (arr[i][j] != "") {
        console.log(arr[i][j] + "hewre ");
        return false;
      }
      if (i == destinationRow && j == destinationColo) return true;
    }
    return false;
  }
  // right Up
  else if (destinationRow < sourceRow && destinationColo > sourceCol) {
    for (let i = sourceRow, j = sourceCol; i >= 0 && j <= 7; i--, j++) {
      if (arr[i][j] != "") {
        console.log(arr[i][j] + "hewre ");
        return false;
      }
      if (i == destinationRow && j == destinationColo) return true;
    }
    return false;
  }
  // left Up
  else if (destinationRow < sourceRow && destinationColo < sourceCol) {
    for (let i = sourceRow, j = sourceCol; i >= 0 && j >= 0; i--, j--) {
      if (arr[i][j] != "") {
        console.log(arr[i][j] + "hewre ");
        return false;
      }
      if (i == destinationRow && j == destinationColo) return true;
    }
    return false;
  }
  // left Down
  else if (destinationRow > sourceRow && destinationColo < sourceCol) {
    for (let i = sourceRow, j = sourceCol; i <= 7 && j >= 0; i++, j--) {
      if (arr[i][j] != "") {
        console.log(arr[i][j] + "hewre ");
        return false;
      }
      if (i == destinationRow && j == destinationColo) return true;
    }
    return false;
  }
}

function checkKingMove(destinationRow, destinationColo, sourceRow, sourceCol) {
  console.log(
    sourceRow + " " + destinationRow + " " + sourceCol + " " + destinationColo
  );
  if (sourceRow == destinationRow && sourceCol == destinationColo) return true;
  if (
    (sourceRow == destinationRow ||
      sourceRow == destinationRow + 1 ||
      sourceRow == destinationRow - 1) &&
    (sourceCol == destinationColo ||
      sourceCol == destinationColo + 1 ||
      sourceCol == destinationColo - 1)
  ) {
    return true;
  }

  return false;
}
/*

function f(){
                return document.getElementById(`(${r},${c})`).textContent;
                // return arr[r][c][0]; // NOT WORKING PROPERLY
            }
*/
