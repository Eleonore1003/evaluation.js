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

// Nouvelle partie
const replay = function () {
    document.location.reload();
};

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

// Changer de joueur
const changePlayer = function () {
    roundScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("active-player");
    player1.classList.toggle("active-player");
};

// Score GLOBAL : Ajouter le current-score et changer de score
const holdScore = function () {
    scores[activePlayer] += roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

// Vérifier le score : si Winner sinon changer de joueur
if (scores[activePlayer] >= 100) {
    document.querySelector(`.playerName-${activePlayer}`).classList.add("winner-player");
    document.querySelector(`.playerName-${activePlayer}`).innerHTML = `<p>winner !</p>`;
} else {
    changePlayer();
}
};


newGame.addEventListener("click", replay, false);
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);