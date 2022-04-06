function AI(){
  let numberGen = Math.floor(Math.random() * 3 + 1);
  if (numberGen === 1 ) {
      console.log("computer picked rock");
      return  "rock"; }
  if (numberGen === 2) {
      console.log("computer picked paper");
      return "paper"; }
   if (numberGen === 3) {
      console.log("computer picked scissors");
      return "scissors"; }
}
function player(){
  let playerinput = window.prompt("Rock, Paper or scissors?").toLowerCase();
      if (playerinput === "rock") {
          console.log("You picked Rock"); 
          return "rock"}
      if (playerinput ===  "paper") {
          console.log("You picked paper"); 
          return "paper" }
      if (playerinput === "scissors") {
          console.log ("You picked scissors"); 
          return "scissors" }
}
function playround(playerSelection, computerSelection){
      if (playerSelection == computerSelection) {
          console.log("TIE"); 
          return "TIE"}
        if (playerSelection === "paper" && computerSelection === "scissors"){
          console.log ("Computer Wins");
          return "computer wins";}
        if (playerSelection === "paper" && computerSelection === "rock"){
          console.log ("You win");
          return "player wins";}
        if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log ("You win");
          return "player wins";}
        if (playerSelection === "scissors" && computerSelection === "rock"){
          console.log ("Computer Wins");
          return "computer wins";}
        if (playerSelection === "rock" && computerSelection === "scissors"){
          console.log ("You win");
          return "player wins";}
        if (playerSelection === "rock" && computerSelection === "paper"){
        console.log ("Computer Wins");
          return "computer wins";}
}                 
function game(){
let gamer = 0
let computer = 0


  for (let i = 0; i < 5; i++) { 
  let roundoutput = playround(player(),AI());
  if (roundoutput === "player wins") {
      gamer++;
      console.log("YOU WON!");
  } else if (roundoutput === "computer wins") {
      computer++;
      console.log("YOU WON!");
  } if (roundoutput === "TIE") {
      console.log("TIE");
  }

  if (gamer > computer);
  console.log("YOU WON THE GAME!", gamer);
  if (computer > gamer);
  console.log("COMPUTER WINS THE GAME!",computer);
  if (computer === gamer);

}
}
game()

