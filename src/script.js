const MAX_RANDOM_NUMBER = 3;
const ROCK_OPTION = 1;
const PAPER_OPTION = 0;

function getComputerChoice() {
	const randomInt = Math.floor(Math.random() * MAX_RANDOM_NUMBER); // return (0,1,2)
	if (randomInt === PAPER_OPTION) return 'paper';
	if (randomInt === ROCK_OPTION) return 'rock';
	return 'scissors';
}
