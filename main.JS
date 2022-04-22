/* need to add a display so that current console.logs are displayed on the webpage instead 
- done */
/*next I need to create the best of 5 and display a game winner after 5*/

let gamer = 0
let computer = 0
 /* these scores must be placed in the global scope as if they were placed inside of a function
   we would have to loop them. By placing them in the global scope they hold the value of the round
   output when the playround function is repeatedly called to output an answer (instead of resetting 
    the score everytime the playround function is called) */ 


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
};

function playround(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
      winnerDeclaration.textContent = "Game TIE!";} // this variable declares the game winner in the html doc
    if (playerSelection === "paper" && computerSelection === "scissors"){
      winnerDeclaration.textContent = "Computer wins this round", computer++; }
    if (playerSelection === "paper" && computerSelection === "rock"){
      winnerDeclaration.textContent = "Player wins this round",gamer++; }
    if (playerSelection === "scissors" && computerSelection === "paper"){
      winnerDeclaration.textContent = "Player wins this round",gamer++; }
    if (playerSelection === "scissors" && computerSelection === "rock"){
      winnerDeclaration.textContent = "Computer wins this round",computer++; }
    if (playerSelection === "rock" && computerSelection === "scissors"){
      winnerDeclaration.textContent = "Player wins this round",gamer++; }
    if (playerSelection === "rock" && computerSelection === "paper"){
      winnerDeclaration.textContent = "Computer wins this round",computer++; } 
      
      playerScore.textContent = gamer; 
      compScore.textContent = computer;
      /* these two textContents update the html doc with the gamer and computer score everytime
      the playround function is called. if they were not placed inside the playround function 
      the score would stay static at 0 as it is updating them in the global score were there
      is no input telling them to increase (computer++ or gamer++) */ 

    if (gamer === 5){
      gamer = 0;
      computer = 0; 
      return winnerDeclaration.textContent = "Player wins!!"; }
    if (computer === 5){
      computer = 0;
      gamer = 0;
      return winnerDeclaration.textContent = "Computer wins !!"; } 
    if (computer && gamer === 5){
      computer = 0;
      gamer = 0;
      return winnerDeclaration.textContent = "TIE!!"; } 
}
const wordDiv = document.querySelector(".textinput"); //selects div for text
const playerSelection = document.querySelector(".player-input"); //selects p tag for playerinput
const computerSelection = document.querySelector(".computer-input"); //selects p tag for computerinput
const winnerDeclaration = document.querySelector(".winner"); //selects p tag to declare winner
const compScore = document.querySelector(".compscore"); //selects p tag to add current score
const playerScore = document.querySelector(".playerscore"); //selects p tag to add current score

