const WINNING_CONDITIONS = {
	scissors: 'paper',
	paper: 'rock',
	rock: 'scissors',
}

const AVAILABLE_CHOICES = ['rock', 'paper','scissors'];
const ROUND_OFFSET = 1;

function getComputerChoice() {
	const randomInt = Math.floor(Math.random() * AVAILABLE_CHOICES.length); // return (0,1,2)
	return AVAILABLE_CHOICES[randomInt];
}

function getHumanChoice() {
	const humanChoice = prompt('Type your choice (rock, paper or scissors):');

	while(!AVAILABLE_CHOICES.includes(humanChoice)) {
		humanChoice = prompt();
	}

	return humanChoice.toLowerCase();
}

function showHumanWin(humanChoice, computerChoice) {
	console.log(`You win! ${humanChoice} beats ${computerChoice}`);
}

function showComputerWin(computerChoice, humanChoice) {
	console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}

function playRound(humanChoice, computerChoice, addHumanScore, addComputerScore) {

	if (WINNING_CONDITIONS[humanChoice] === computerChoice) {		
		addHumanScore();
		showHumanWin(humanChoice, computerChoice);
		return;
	}

	if (WINNING_CONDITIONS[computerChoice] === humanChoice){
		addComputerScore();
		showComputerWin(computerChoice, humanChoice);
		return;
	}


	if (computerChoice === humanChoice) {
		console.log('This round was a draw!');
		return;
	}

}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let round;

	for (round = 0; round < 5; round++) {

		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();


		playRound(
			humanChoice, 
			computerChoice, 
			() => humanScore++, 
			() => computerScore++
		);

		console.log(`Round:${round + ROUND_OFFSET}`);
		console.log(`Human Score:${humanScore}`);
		console.log(`Computer Score:${computerScore}`);
	}
}

playGame();
