
const firstButton = document.querySelector('button_one');
firstButton.addEventListener('click', () => {



});

const secondButton = document.querySelector('button_two')
secondButton.addEventListener('click', () => {

});
const thirdButton = document.querySelector('button_three')
thirdButton.addEventListener('click', () => {

});

function AI(){ /* this produces a random output or rock, paper or scissors*/
let numberGen = Math.floor(Math.random() * 3 + 1);
/* ^ this produces a ranom number, mathfloor = round down (nearest integer)*/
/*math.random produces a random number to 3, we have set +1 as it starts from 0
therefore it produces a number from 1-3*/
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

















// function player(){ /* this is the function that prompts the user for input and outputs result
//                   .lowercaase() changes all letters to lower case so that the input is okay */
//   //let playerinput = window.prompt("Rock, Paper or scissors?").toLowerCase();
//       if (playerinput === "rock") {
//           console.log("You picked Rock"); 
//           return "rock"}
//       if (playerinput ===  "paper") {
//           console.log("You picked paper"); 
//           return "paper" }
//       if (playerinput === "scissors") {
//           console.log ("You picked scissors"); 
//           return "scissors" }
// }
// /* this takes the input from the two previous functions and compares them, producing a result,
// note that the parameters (player selection and computer selection) are called within the 
// function game () function below. */
// function playround(playerSelection, computerSelection){
//       if (playerSelection == computerSelection) {
//           console.log("TIE"); 
//           return "TIE"}
//         if (playerSelection === "paper" && computerSelection === "scissors"){
//           console.log ("Computer Wins");
//           return "computer wins";}
//         if (playerSelection === "paper" && computerSelection === "rock"){
//           console.log ("You win");
//           return "player wins";}
//         if (playerSelection === "scissors" && computerSelection === "paper"){
//         console.log ("You win");
//           return "player wins";}
//         if (playerSelection === "scissors" && computerSelection === "rock"){
//           console.log ("Computer Wins");
//           return "computer wins";}
//         if (playerSelection === "rock" && computerSelection === "scissors"){
//           console.log ("You win");
//           return "player wins";}
//         if (playerSelection === "rock" && computerSelection === "paper"){
//         console.log ("Computer Wins");
//           return "computer wins";}
// }                 
// /* this is a very important function as it allows the code to loop 5 times and produce a result
// that is logged everytime. It also calls the playround function (above) with the arguements
// being the computer input and playerinput. IT MUST call this function inside the loop as 
// it tells the code to loop the prompt for input 5 times (otherwise the code will accept one
//   prompt for 5 inputs) */


// // function game(){ 
// // let gamer = 0
// // let computer = 0
// // /* ^ these are the score card variables */

// //   for (let i = 0; i < 5; i++) { /* i = 0 (i starts at 0 and loops till it hits 5. i++ adds one per cycle to the total)*/
// //   let roundoutput = playround(player(),AI()); /* we have called the function under the for loop so that it is included... 
// //   in short, if we want something to be included in the loop we must call it inside the loop function
// //   hence calling all three functions */
// //   if (roundoutput === "player wins") {
// //       gamer++;   /* these add 1 to the score card if the arguement is proved true */
// //       console.log("YOU WON!");
// //   } else if (roundoutput === "computer wins") {
// //       computer++;
// //       console.log("YOU WON!"); /* the log is just to display to us who has won */
// //   } if (roundoutput === "TIE") {
// //       console.log("TIE"); 
// //   }
// // /* this below section says that if gamerscore is more than computer, display a string 
// // the gamer and computer call in the console.log shows the score that is being kept by
// // the let gamer and computer variables. */
// //   if (gamer > computer);
// //   console.log("YOU WON THE GAME!", gamer);
// //   if (computer > gamer);
// //   console.log("COMPUTER WINS THE GAME!",computer);
// //   if (computer === gamer);
// //   console.log("TIE!");
// // }
// // }
// // game()
// // /* this calls the game function to allow it to run, otherwise it would simply sit
// // out of scope. Note that functions need to be called always to work */


// const firstButton = document.querySelector('button_one');
// firstButton.addEventListener('click', () =>  alert("Rock")

// let secondButton = document.querySelector('button_two')
// secondButton.addEventListener('click', () => alert("Paper")

// const thirdButton = document.querySelector('button_three')
// thirdButton.addEventListener('click', () => alert("Scissors")
 