var userOutcomes = ["rockscissors", "paperrock", "scissorspaper"];
var choices = ["rock", "paper", "scissors"];

function getChoice() {
	document.getElementById('rock').onclick = function(){userChoice('rock')};
	document.getElementById('paper').onclick = function(){userChoice('paper')};
	document.getElementById('scissors').onclick = function(){userChoice('scissors')};	
}

function userChoice(pick) {
	var computerChoice = randomChoice();
	console.log(pick);
	console.log(computerChoice);
	var result = compare(pick, computerChoice);
	console.log(result);
	alert("Computer chose " + computerChoice)
	alert(result);
}

function randomChoice(){
	var computerChoice = Math.floor(Math.random() * choices.length); // Becareful about declairing var computerChoic in multiple places. Better to pick a different name, or declair computerChoice as a global variable at the top of your program.
	return choices[computerChoice];
}

function compare(a, b) {
	var result = "You lose";
	if (a == b) {
		result = "You tied!";
	} else {
		for (var i = 0; i < userOutcomes.length; i++){
			if (a + b == userChoice[i]) { 					// I think you want to write 'userOutcomes' instead of 'userChoice' here. Your program is operating fine with it as is, but I'm actually not sure how this line of code is working. Can you explain?
				result = "You win!";
			}
		}
	}
	return result;
}

$( document ).ready(function() {							// Good use of docment.ready! This is completely valid. Another way to have your JavaScript fire after your page is loaded is to but your <script> linking to this JS file at the bottom of your body tag. I prefer the second way, but I believe either's good practice.
	console.log( "ready!" );
	alert("Choose rock, paper or scissors");
	getChoice();
});