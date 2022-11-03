let randomNum;
let botPick;
let botScore;
let playerScore;
let winner;
let header = document.querySelector('h1');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

function botChoice() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    
    if (randomNum === 1) {
      botPick = 'Rock';
    } else if (randomNum === 2) {
      botPick = 'Paper';
    } else if (randomNum === 3) {
      botPick = 'Scissors';
    }
    
    console.log(botPick);
    return botPick;
}