//0
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

//1
const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, "").toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice .. we chose ${DEFAULT_USER_CHOICE} for you`);
        return;
    }
    return selection;
};

//2
const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

//3
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === PAPER && pChoice === ROCK ||
        cChoice === ROCK && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === PAPER
        ) {
        return RESULT_COMPUTER_WINS;
    } else {
        return RESULT_PLAYER_WINS;
    }
};

//4a
startGameBtn.addEventListener("click", function() {
    if (gameIsRunning) {
        return; //return ends function execution; the below code won't execute; clicking the button won't do anything
    }
    gameIsRunning = true;
    console.log("Let's start the game!..");

    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    

    //5 - what if user enters something not expected? Lets add a default parameter value for player choice in the getWinner() function
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChoice, playerSelection);
    } else {
        winner = getWinner(computerChoice);
    }
    
    //4b
    let message = `You picked ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE}, the computer picked ${computerChoice}, therefore `;
    if (winner === RESULT_DRAW) {
        message = message + "it was a DRAW!";
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + "the PLAYER WINS!";
    } else {
        message = message + "the COMPUTER WINS!";
    }
    alert(message);
    gameIsRunning = false;
});
    // addEventListener is a method on the startGameBtn object
    // startGameBtn is an object created by JS when we called the method getElementById, on the document object
