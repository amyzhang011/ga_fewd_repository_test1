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
	var computerChoice = Math.floor(Math.random()*choices.length);
	return choices[computerChoice];
}

function compare(a, b) {
	var result = "You lose";
	if (a == b) {
		result = "You tied!";
	} else {
		for(var i=0; i<userOutcomes.length; i++){
			if (a + b == userChoice[i]) {
				result = "You win!";
			}
		}
	}
	return result;
}

$( document ).ready(function() {
	console.log( "ready!" );
	alert("Choose rock, paper or scissors");
	getChoice();

});