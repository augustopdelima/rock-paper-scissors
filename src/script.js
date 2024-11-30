const WINNING_CONDITIONS = {
	scissors: 'paper',
	paper: 'rock',
	rock: 'scissors',
}

const AVAILABLE_CHOICES = ['rock', 'paper', 'scissors'];
const SCORE_TO_WIN = 5;

let humanScore = 0;
let computerScore = 0;
let round = 0;

const addHumanScore = () => humanScore++;
const addComputerScore = () => computerScore++;
const increaseRound = () => round++;



function getComputerChoice() {
	const randomInt = Math.floor(Math.random() * AVAILABLE_CHOICES.length); // return (0,1,2)
	return AVAILABLE_CHOICES[randomInt];
}

function getHumanChoice(event) {
	const humanChoice = event.target.value;

	return humanChoice.toLowerCase();
}


function showGameResult(result) {
	const resultContainer = document.getElementById('game-result');
	resultContainer.textContent = result;
}


function showHumanWin(humanChoice, computerChoice) {
	showGameResult(`You win! ${humanChoice} beats ${computerChoice}`);
}

function showComputerWin(computerChoice, humanChoice) {
	showGameResult(`You lose! ${computerChoice} beats ${humanChoice}`);
}

function playRound(humanChoice, computerChoice, addHumanScore, addComputerScore, increaseRound) {

	increaseRound();

	if (WINNING_CONDITIONS[humanChoice] === computerChoice) {
		addHumanScore();
		showHumanWin(humanChoice, computerChoice);
		return;
	}

	if (WINNING_CONDITIONS[computerChoice] === humanChoice) {
		addComputerScore();
		showComputerWin(computerChoice, humanChoice);
		return;
	}


	if (computerChoice === humanChoice) {
		showGameResult('This round was a draw!');
		return;
	}

}

function showScoreBoard(round, humanScore, computerScore) {
	const humanScoreElement = document.getElementById('human-score-value');
	const computerScoreElement = document.getElementById('computer-score-value');
	const roundElement = document.getElementById('round-value');

	roundElement.textContent = round;
	humanScoreElement.textContent = humanScore;
	computerScoreElement.textContent = computerScore;

}

function showWinner(humanScore, computerScore, stopTheGame) {

	if (humanScore === SCORE_TO_WIN) {
		showGameResult('Human was the winner!');
		stopTheGame();
		return;
	}

	if (computerScore === SCORE_TO_WIN) {
		showGameResult('Computer was the winner!');
		stopTheGame();
		return;
	}

}

function removeRestartButton() {
	const restartButton = document.getElementById('restart-btn');
	const containerOptions = document.getElementById('container-options');

	containerOptions.removeChild(restartButton);
}

function restartGame() {
	humanScore = 0;
	computerScore = 0;
	round = 0;

	showGameResult("");
	createGame();
	removeRestartButton();
}



function addRestartButton() {
	const containerOptions = document.getElementById('container-options');

	const restartButton = document.createElement('button');
	restartButton.className = 'btn-option';
	restartButton.innerHTML = "Restart";
	restartButton.setAttribute('id','restart-btn');
	restartButton.addEventListener('click', restartGame)

	containerOptions.appendChild(restartButton);

}

function removeEventListener() {
	const containerOptions = document.getElementById('container-options');

	containerOptions.removeEventListener('click', playGame);
}

function stopTheGame() {
	removeEventListener();
	addRestartButton();
	
}

function createGame() {

	const containerOptions = document.getElementById('container-options');
	containerOptions.addEventListener('click', playGame)

}


function playGame(event) {


	const humanChoice = getHumanChoice(event);
	const computerChoice = getComputerChoice();

	playRound(
		humanChoice,
		computerChoice,
		addHumanScore,
		addComputerScore,
		increaseRound,
	);

	showScoreBoard(round, humanScore, computerScore);
	showWinner(humanScore, computerScore, stopTheGame);

}


createGame();
