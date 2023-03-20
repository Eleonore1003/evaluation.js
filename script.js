let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];


const dice = document.querySelector("#dice");
const roll = document.querySelector("#reload");
const hold = document.querySelector("#download");
const newGame = document.querySelector("#new-game");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

// Lancer le dé 
const rollDice = function () {
    randomNumber = Math.floor(Math.random()*6) + 1;
    dice.innerHTML = `<img class="dice" src="images/dice${randomNumber}.jpg" alt="dice ${randomNumber}">`;
    if (randomNumber !== 1) {
        roundScore += randomNumber;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        changePlayer();
    }
};