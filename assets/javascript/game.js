
//letter options for computer choice
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	var wins = 0;
	var losses = 0;
	var guesses = 10;
	var newComputerGuess = null;
	var userGuesses = [];

//computer selects a random letter...and a new letter after each game
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	console.log(computerGuess);

	var updateComputerGuess = function() {
 		this.newComputerGuess = this.options[Math.floor(Math.random() * this.options.length)];
 		console.log(newComputerGuess);
	};

//user guesses a letter and their guesses are displayed in a list
	document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		userGuesses.push(" " + userGuess);
		console.log(userGuess);

//reset # of guesses and list of guesses after user wins or loses
	var reset = function() {
		guesses = 10;
		userGuesses = [];
	};

//compare user guess to computer's selection and trigger stat changes
	if (userGuess == computerGuess || userGuess == newComputerGuess) {
		wins++;
		reset();
		updateComputerGuess();
		alert("You must be psychic! Let's see if you can do it again...");
	 } else {
  		guesses--;
  		};

  	if (guesses < 1) {
  		losses++;
  		reset();
  		updateComputerGuess();
  		alert("Your psychic ability is a little rusty... Better luck next time!");
  	}

//display results to user
  	var html = "<h1>Guess what letter I'm thinking of..." + 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guesses + "</p>" +
		"<p>Your Guesses: " + userGuesses + "</p>";

	document.querySelector('#game').innerHTML = html; 
  	};