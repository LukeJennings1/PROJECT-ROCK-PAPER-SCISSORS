
/* -  Rock, Paper and Scissors Game
Make an option where we can pick either rock paper scissors
have the computer randomly pick one of the three also
compare the two results against eachother
declare a winner
*/

/*  if ("Rock" === "Rock");
   if ("Paper" === "Paper");
   if ("Scissors" === "Scissors");
   return "game is a tie" */
   
   
function computerPlay(){
        let numberGen = Math.floor(Math.random() * 3 + 1);
        if (numberGen === 1 ) {
            return  "rock"; }
        if (numberGen === 2) {
            return "paper"; }
         if (numberGen === 3) {
            return "scissors"; }
}

const mainbody = function playerSelection(input, computerOutput) {
   input = input.toLowerCase() // this line changes the input arguements to lowercase before they reach the OR statements (hence having them at the top as JS renders from the top down // 
      if (input === computerOutput) { // this line reduces the amount of code we need to a tie from three options (one per potential arguement) // 
            return "tie"; }
      if (input == "paper" && computerOutput == "scissors") {
            return "computer wins "; }
      if (input == "paper" && computerOutput == "rock") {
            return "You win"; }
      if (input == "scissors" && computerOutput == "paper") {
            return "You win"; }
      if (input == "scissors" && computerOutput == "rock") {
            return "computer wins "; }
      if (input =="rock" && computerOutput == "scissors") {
            return "You win"; }
      if (input == "rock" && computerOutput == "paper") {
            return "computer wins"; }
}
const computerOutput = computerPlay();
const playerOutput = mainbody("Paper" , computerOutput);
console.log(playerOutput);


