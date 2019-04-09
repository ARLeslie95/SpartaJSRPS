// function compMove() {
//   var random = Math.floor(Math.random() * 3);
//   var moves = ["r", "p", "s"];
//   var compMove = moves[random];
//   return compMove;
//   console.log(compMove);
// }

// function outcome(move) {
//   var playerMove = move;
//   var compMove = "r"; //placeholder
//   var wins = ["rs", "pr", "sp"];
//   var losses = ["rp", "ps", "sr"];
//   var ties = ["rr", "pp", "ss"]
//   var combo = move + compMove;
//   console.log(combo);
//   var result = "" ;
//
//   for (i=0; i < 3; i++){
//     if (combo == wins[i]){
//       result += "w";
//     }
//     else if (combo == losses[i]){
//       result += "l" ;
//     }
//     else if (combo == ties[i]){
//       result += "t" ;
//     }
//   }
//   return result;
// }

function game(){

  var pScore = 0;
  var cScore = 0;
  while (pScore < 3 && cScore < 3){
    var move = prompt("Please enter your move");

    function compMove() {
    var random = Math.floor(Math.random() * 3);
    var moves = ["r", "p", "s"];
    var compMove = moves[random];
    return compMove;
  }
    compMove = compMove();
    console.log(compMove);

    function outcome(mve) {
    var playerMove = mve;
    var cMove = compMove; //placeholder
    var wins = ["rs", "pr", "sp"];
    var losses = ["rp", "ps", "sr"];
    var ties = ["rr", "pp", "ss"]
    var combo = mve + cMove;
    var result = "" ;

    for (i=0; i < 3; i++){
      if (combo == wins[i]){
        result += "w";
      }
      else if (combo == losses[i]){
        result += "l" ;
      }
      else if (combo == ties[i]){
        result += "t" ;
      }
    }
    return result;
  }
    outcome = outcome(move);
    console.log(outcome);

    if (outcome == "w"){
      pScore += 1;
    }
    else if (outcome == "l"){
      cScore += 1;
    }
    else if (outcome == "t"){

    }
    console.log(pScore);
    console.log(cScore);
  }
}
game();
