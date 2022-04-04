
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

const computerOutput = computerPlay();

function humanPlay(playerinput){
    if (playerinput == "rock") { 
      return "rock"; }
      if (playerinput == "paper"){
         return "paper"; }
            if (playerinput == "scissors"){
               return "scissors" }
}

const playerOutput = humanPlay("rock");

const comparitor = function playerSelection(playerOutput, computerOutput) {
   playerOutput = playerOutput.toLowerCase() // this line changes the input arguements to lowercase before they reach the OR statements (hence having them at the top as JS renders from the top down // 
      if (playerOutput === computerOutput) { // this line reduces the amount of code we need to a tie from three options (one per potential arguement) // 
            return "tie"; }
      if (playerOutput == "paper" && computerOutput == "scissors") {
            return "computer wins "; }
      if (playerOutput == "paper" && computerOutput == "rock") {
            return "You win"; }
      if (playerOutput == "scissors" && computerOutput == "paper") {
            return "You win"; }
      if (playerOutput == "scissors" && computerOutput == "rock") {
            return "computer wins "; }
      if (playerOutput =="rock" && computerOutput == "scissors") {
            return "You win"; }
      if (playerOutput == "rock" && computerOutput == "paper") {
            return "computer wins"; }
}
const comparitoroutput = comparitor(playerOutput, computerOutput);

// This is the bestof5 loop that computes a winner of the game // 
const gameloop = function bestof5(comparitoroutput){
let computer = 0;
let player = 0;
   
   for (let i = 0; i < 5; i++) {
      if (comparitoroutput === "computer wins"){
         player++;
      } else {
         computer++; } 
      if (player >= 3) {
         return "YOU WIN!"; }
      if (computer >= 3) {
         return "COMPUTER WINS!"; }
}
}
const bestof5output = gameloop(comparitoroutput);
console.log(bestof5output);
