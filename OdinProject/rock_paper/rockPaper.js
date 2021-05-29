// set of values
const acceptedValues = [
  'rock',
  'paper',
  'scissors'
];

// get computer input
function computerPlay() {
  return acceptedValues[Math.floor(Math.round(Math.random() * 2))];
}

// get user input for rock-paper-scissors
function userPlay() {
  // check if correct input (any case), put everything in lower case
  let userValue = prompt('Rock-paper-scissors?').toLowerCase();
  if (acceptedValues.indexOf(userValue) > -1) {
    return userValue;
  } else {
    alert("We don't do that here. Try again and specify a correct value");
  }
}

function playRound(playerSelection,computerSelection) {
  console.log(playerSelection,computerSelection);
  // compare user and computer result and determine the result
  if (playerSelection && computerSelection) {
    let roundResult = 'It is a tie!'; // default value
    const playerWon = 'You won! ' + playerSelection + ' beats ' + computerSelection + '.';
    const computerWon = 'The computer won! ' + computerSelection + ' beats ' + playerSelection + '.';
    if (playerSelection !== computerSelection) { //if true, default result
      if (playerSelection !== 'rock') {
        if (computerSelection === 'scissors') {
          roundResult = computerWon;
        } else {
          roundResult = playerWon;
        }
      } else {
        if (computerSelection === 'scissors') {
          roundResult = playerWon;
        } else {
          roundResult = computerWon;
        }
      }
    }
    // Display the winner and result
    alert(roundResult);
  }
}

playRound(userPlay(),computerPlay());