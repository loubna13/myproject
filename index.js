var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");


// function main & game what happens when clicking on each of these icons when clicking on rock we have the value "r" and compare it to the computer's choice which will be a random value among the three values and then compare those 2 values and check who wins and show it in the result.

function getComputerChoice() {
	var choices = ['r','p','s'];
	var randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];

}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
	return "Scissors";

	}


function win(userChoice, computerChoice) {
	    var smallUserWord = "user".fontsize(3).sub();
	    var smallComputerWord = "Computer".fontsize(3).sub();
	    userScore++;
		userScore_span.innerHTML = userScore;
	    computerScore_span.innerHTML = computerScore;
	    result_p.innerHTML = convertToWord (userChoice ) + (smallUserWord) +" "+ "beats" +" "+ convertToWord (computerChoice) + (smallComputerWord)+ ". You win!";	
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(function(){
        	document.getElementById(userChoice).classList.remove('green-glow')

		},1000);

  }



function lose(userChoice, computerChoice) {
	    var smallUserWord = "user".fontsize(3).sub();
	    var smallComputerWord = "Computer".fontsize(3).sub();
	    var userChoice_div = document.getElementById(userChoice);
	    computerScore++;
		userScore_span.innerHTML = userScore;
	    computerScore_span.innerHTML = computerScore;
	    result_p.innerHTML = convertToWord(userChoice ) + (smallUserWord)  + " "+ "loses to " +" "+ convertToWord(computerChoice) + (smallComputerWord) + ". You lost...!";
		document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(function(){
        	document.getElementById(userChoice).classList.remove('red-glow')

		},1000);
  }


  function draw(userChoice, computerChoice) {
  	  var smallUserWord = "user".fontsize(3).sub();
	    var smallComputerWord = "Computer".fontsize(3).sub();
	
	    result_p.innerHTML = convertToWord(userChoice ) + (smallUserWord) + " " + "equals" + " "+ convertToWord(computerChoice) + (smallComputerWord) + ". it's a draw!";
		document.getElementById(userChoice).classList.add('gray-glow');
        setTimeout(function(){
        	document.getElementById(userChoice).classList.remove('gray-glow')

		},1000);
  }


function game(userChoice){
	var computerChoice = getComputerChoice();//random previous function
	//console.log(computerChoice) it will show the random choice of the computer from the previous function the choice changes evtime"random"
    //console.log(userChoice); it will show what's in the function game that i called below "c" the choice doesn't change kz i give it a fixed value "c"
    //now we compare if the comchooses r and user chooses p then ... wins we use the switch instead of if conditions and i used console log to check but then i use each of "win loose draw "in a seperate function

     switch (userChoice + computerChoice) {

    	case  "rs":
    	case  "pr":
    	case  "sp":
    	win(userChoice, computerChoice);
    	break;
    	case  "rp":
    	case  "ps":
    	case  "sr":
    	lose(userChoice, computerChoice);
    	break;
    	case  "pp":
    	case  "ss":
    	case  "rr":
    	draw(userChoice, computerChoice);
    	break;

    }


}


function main(){

		    rock_div.addEventListener('click', function() {
		    game("r");
		 
		 })
			paper_div.addEventListener('click', function() {
		    game("p");
		 
		 })
			scissors_div.addEventListener('click', function() {
		    game("s");
		 
		 })

}
main();// call the function to run wht's inside it

	



 
 