const options = ['rock', 'paper', 'scissors'];
const beats = {
  rock : 'scissors',
  paper : 'rock',
  scissors : 'paper'
}

let score;
function saveScore() {
  localStorage.setItem('score', JSON.stringify(score));
}

function getScore() {
  const savedScore = localStorage.getItem('score');
  if (savedScore) {
    score = JSON.parse(savedScore);
  }
   else {
    score = {
      wins : 0,
      losses : 0,
      ties : 0
    };
  }
}
  getScore();


const getResult = document.getElementById('result');
const getComputerChoice = document.getElementById('computerChoice');
const getPlayerChoice = document.getElementById('playerChoice');
const getWins = document.getElementById('wins');
const getLosses = document.getElementById('losses');
const getTies = document.getElementById('ties');

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updatescore();
  getResult.textContent = `Score reset!`;
  getComputerChoice.textContent = `-`;
  getPlayerChoice.textContent = `-`;
}

function updatescore(){
  getWins.textContent = `${score.wins}`;
  getLosses.textContent = `${score.losses}`;
  getTies.textContent = `${score.ties}`;
}

function playGame(playerChoice) {
  let computerChoice = Math.random();
 
  if (computerChoice < 1/3){
    computerChoice = 'rock';
  } else if (computerChoice < 2/3 && computerChoice >= 1/3){
    computerChoice = 'paper';
  } else{
    computerChoice = 'scissors';
  }
    getComputerChoice.textContent = `${computerChoice}`;
    getPlayerChoice.textContent = `${playerChoice}`;

  if (playerChoice === computerChoice){
    score.ties++;
    getResult.textContent = `It's a tie!`;
  } else if (beats[playerChoice] === computerChoice){
    score.wins++;
    getResult.textContent = `You win!`;
  } else {
    score.losses++;
    getResult.textContent = `You lose!`;
  } 
  updatescore();
  saveScore();
}

