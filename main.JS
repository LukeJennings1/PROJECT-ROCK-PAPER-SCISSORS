/* need to add a display so that current console.logs are displayed on the webpage instead 
- done */



const wordDiv = document.querySelector(".textinput"); //selects div for text
const playerSelection = document.querySelector(".player-input"); //selects p tag for playerinput
const computerSelection = document.querySelector(".computer-input"); //selects p tag for computerinput
const winnerDeclaration = document.querySelector(".winner"); //selects p tag to declare winner
const compScore = document.querySelector(".compscore"); //selects p tag to add current score
const playerScore = document.querySelector(".playerscore"); //selects p tag to add current score


const firstButton = document.querySelector('.button1');
firstButton.addEventListener('click', () => {
  playerSelection.textContent = "Player picked Rock";
  (playround('rock', AI()))
}); 
const secondButton = document.querySelector('.button2')
secondButton.addEventListener('click', () => {
  playerSelection.textContent = "Player picked Paper";
  (playround('paper', AI()))
});
const thirdButton = document.querySelector('.button3')
thirdButton.addEventListener('click', () => {
  playerSelection.textContent = "Player picked Scissors";
  (playround('scissors', AI()))
});
function AI(){ /* this produces a random output or rock, paper or scissors*/
let numberGen = Math.floor(Math.random() * 3 + 1);
/* ^ this produces a ranom number, mathfloor = round down (nearest integer)*/
/*math.random produces a random number to 3, we have set +1 as it starts from 0
therefore it produces a number from 1-3*/
if (numberGen === 1 ) {
  computerSelection.textContent = "Computer picked Rock"; // declares comp choice in html doc
    return  "rock"; }
if (numberGen === 2) {
    computerSelection.textContent = "Computer picked Paper";
    return "paper"; }
 if (numberGen === 3) {
    computerSelection.textContent = "Computer picked Scissors";
    return "scissors"; }
}

let gamer = 0
let computer = 0

function playround(playerSelection, computerSelection){
  if (playerSelection == computerSelection) {
      winnerDeclaration.textContent = "Game TIE!";} // this variable declares the game winner in the html doc
    if (playerSelection === "paper" && computerSelection === "scissors"){
      winnerDeclaration.textContent = "Computer wins!", computer++ ;  }
    if (playerSelection === "paper" && computerSelection === "rock"){
      winnerDeclaration.textContent = "Player wins",gamer++; }
    if (playerSelection === "scissors" && computerSelection === "paper"){
      winnerDeclaration.textContent = "Player wins",gamer++; }
    if (playerSelection === "scissors" && computerSelection === "rock"){
      winnerDeclaration.textContent = "Computer wins!",computer++; }
    if (playerSelection === "rock" && computerSelection === "scissors"){
      winnerDeclaration.textContent = "Player wins",gamer++; }
    if (playerSelection === "rock" && computerSelection === "paper"){
      winnerDeclaration.textContent = "Computer wins!",computer++; }    

      
      playerScore.textContent = gamer;
      compScore.textContent = computer;


}

// function game(){

//     // for (let i = 0; i < 5; i++) { 
//     if (winnerDeclaration === "Player wins") {
//         gamer++;
//     } else if (winnerDeclaration === "Computer wins!") {
//         computer++;
//     } if (winnerDeclaration === "Game TIE!") {
//     }
  
//     // if (gamer > computer);
//     // console.log("YOU WON THE GAME!", gamer);
//     // if (computer > gamer);
//     // console.log("COMPUTER WINS THE GAME!",computer);
//     // if (computer === gamer);
//   }  

// /*  need to keep the score everytime the playround function outputs something.*/









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
 