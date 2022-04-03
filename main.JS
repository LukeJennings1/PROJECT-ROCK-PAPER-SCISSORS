
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
const output = computerPlay();
console.log(output);
