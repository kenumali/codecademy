/*
This code will break the game into 4 parts:
1. Get the user's choice
2. Get the computer's choice
3. Compare the two choices and determine a winner
4. Start the program and display the results
*/

function getUserChoice(){
  var userInput = prompt('Rock, Paper, or Scissors?');
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

function getComputerChoice(){
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
	}
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice) {
    return 'Tie!';
  } else if (userChoice === 'rock'){
  	if(computerChoice === 'scissors') {
      return 'Human won!';
    } else {
      return 'Computer won!';
    }
  } else if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'Human won!';
    }
  } else if (userChoice === 'scissors'){
    if(computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'Human won!';
    }
  } else if(userChoice === 'bomb') {
    return 'Human won!';
  }
}

function playGame(){
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
  console.log('User choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
