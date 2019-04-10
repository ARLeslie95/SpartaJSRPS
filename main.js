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
  alert("Welcome to Rock, Paper, Scissors!");
  alert("The first to score 3 points wins the game. Good luck!");
  var pScore = 0;
  var cScore = 0;
  while (pScore < 3 && cScore < 3){
    var move = prompt("Please enter your move: Rock(r), Paper(p) or Scissors(s)");

    function compMove() {
    var random = Math.floor(Math.random() * 3);
    var moves = ["r", "p", "s"];
    var compMove = moves[random];
    return compMove;
  }
    compMove = compMove();
    if (compMove == "r"){
      prompt("The computer has chosen Rock");
    }
    else if (compMove == "p"){
      prompt("The computer has chosen Paper");
    }
    else if (compMove == "s") {
      prompt("The computer has chosen Scissors");
    }

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

    if (outcome == "w"){
      pScore += 1;
      alert("You win! The score is now : Player- " + pScore + " and CPU- " + cScore);
    }
    else if (outcome == "l"){
      cScore += 1;
      alert("You lose! The score is now : Player- " + pScore + " and CPU- " + cScore);

    }
    else if (outcome == "t"){
      alert("It's a tie! The score is : Player- " + pScore + " and CPU- " + cScore);

    }
  }

  if (pScore == 3){
    alert("Congratulations! You've won a game of chance!")
  }
  else if (cScore == 3){
    alert("Oh no! You've lost. Maybe try playing Heads or Tails")
  }
}
game();
