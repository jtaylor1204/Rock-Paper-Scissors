let randomNum;
let botPick;
let playerSelection;
let botScore;
let playerScore;
let winner;
let winnerMsg = document.querySelector('#winner-msg');
let cpuMsg = document.querySelector('#cpu-msg');
let playerMsg = document.querySelector('#player-msg');
let header = document.querySelector('h1');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let buttons = document.querySelectorAll('button');
let scores = [0,0];
let scoreTally = document.querySelector('#score');

for ( let i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener('click', playGame);
}


// Play Game
function playGame(e){
  let playerSelection = e.target.innerText
  randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    botPick = 'Rock';
  } else if (randomNum === 2) {
    botPick = 'Paper';
  } else if (randomNum === 3) {
    botPick = 'Scissors';
  }
  winner = checkWinner(playerSelection, botPick);
  return winner;

  function checkWinner(playerSelection, botPick){

  if (playerSelection === botPick){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "Draw. Its a tie!";
  }
  
  if(playerSelection === 'Rock' && botPick === 'Paper'){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "The computer won!";
  }
  if (playerSelection === 'Paper' && botPick === 'Scissors'){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "The computer won!";
  }
  if (playerSelection === 'Scissors' && botPick === 'Rock'){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "The computer won!";
  }
  if (playerSelection === 'Rock' && botPick === 'Scissors'){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "You won!";
  }
  if (playerSelection === 'Paper' && botPick === 'Rock'){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "You won!";
  }
  if (playerSelection === 'Scissors' && botPick === 'Paper'){
    playerMsg.innerHTML = "You threw" + " " + playerSelection;
    cpuMsg.innerHTML = "The computer threw" + " " + botPick;
    winnerMsg.innerHTML = "You won!";
  }

// Output scores
if(winnerMsg.innerHTML === "You won!"){
  scores[0]++;
}
if(winnerMsg.innerHTML === "The computer won!"){
  scores[1]++;
}
scoreTally.innerHTML = 'You:  [ ' + scores[0]+ ' ] Computer: [ ' + scores[1]  + ' ]';
}
}



