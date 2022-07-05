const prompt = require("prompt-sync")({ sigint: true });

var again = false;
var counter = 10;

randomNumber100 = () => {
	let numberInMind = Math.floor(Math.random() * 100) + 1;
	return numberInMind;
};

revealNumber = (counter, result, numberToGuess) => {
	if (counter == 9) {
		console.log("Ok, you are cheating >:....the answer is " + numberToGuess);
	} else if (counter >= 6 && counter <= 8 && result === true) {
		console.log("Wow, you are a magician!! the answer is " + numberToGuess);
	} else if (counter >= 3 && counter <= 5 && result === true) {
		console.log(
			"average, not good and not bad, well done, answer: " + numberToGuess
		);
	} else if (counter < 3 && result === true) {
		console.log("You almost lost tho :p, the answer is " + numberToGuess);
	} else {
		console.log(" Aww, you cannot guess it, the answer is " + numberToGuess);
	}
};

compare = (rightAnswer, guessAnswer, counter) => {
	let differences = 0;
	differences = guessAnswer - rightAnswer;

	if (differences == 0) {
		console.log("\nCorrect!");
		return true;
	} else if (differences != 0) {
		howClose(differences);
		return false;
	} else {
		console.log("That is a not a number, my dear");
		return false;
	}
};

howClose = (differences) => {
	if (differences < -10) {
		console.log("too small\n");
	} else if (differences > -10 && differences < 10) {
		console.log("you are close!\n");
	} else {
		console.log("too big\n");
	}
};

promptQuestion = (numberToGuess, counter) => {
	let result = false;

	do {
		if (counter == 10) {
			console.log("I have a number in my mind. It is between 0-100, guess  \n");
			let num = prompt("Guess > ");
			let numGuess = Number(num);
			result = compare(numberToGuess, numGuess, counter);
			counter--;
		} else {
			let numGuess = prompt(counter + " more guesses, Guess Again > ");
			result = compare(numberToGuess, numGuess, counter);
			counter--;
		}
	} while (counter > 0 && result == false);

	revealNumber(counter, result, numberToGuess);
};

let name = prompt("Hi, what's your name? : ");

console.log("Hi " + name + " Let's try to guess a number in my mind. \n");

do {
	let numberToGuess = randomNumber100();
	//console.log(numberToGuess)
	promptQuestion(numberToGuess, counter);

	console.log("\nWanna play again?");

	do {
		retry = prompt("Y/N : ");
		let answer = retry.toUpperCase();
		if (answer == "Y") {
			again = true;
			break;
		} else if (answer == "N") {
			again = false;
			break;
		} else {
			console.log("wrong input");
		}
	} while (true);
} while (again === true);

console.log("\nThank you for playing the game, Bye!");
