// set of values
const acceptedValues = [
  'Rock',
  'Paper',
  'Scissors'
];

// get the correct string format
function normalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// get computer input
function computerPlay() {
  return acceptedValues[Math.floor(Math.round(Math.random() * 2))];
}

// get user input for rock-paper-scissors
function userPlay() {
  // check if correct input (any case), put everything in lower case
  let userValue = prompt('Rock-paper-scissors?');
  userValue = normalizeString(userValue);
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
    let roundResult = "It is a tie! Computer also chose " + computerSelection + "."; // default value
    const playerWon = 'You won! ' + playerSelection + ' beats ' + computerSelection + '.';
    const computerWon = 'The computer won! ' + computerSelection + ' beats ' + playerSelection + '.';
    if (playerSelection !== computerSelection) { //if true, default result
      if (playerSelection !== 'Rock') {
        if (computerSelection === 'Scissors') {
          roundResult = computerWon;
        } else {
          roundResult = playerWon;
        }
      } else {
        if (computerSelection === 'Scissors') {
          roundResult = playerWon;
        } else {
          roundResult = computerWon;
        }
      }
    }
    // Display the round winner
    return roundResult;
    // alert(roundResult);
  }
}

// playRound(userPlay(),computerPlay());


function game() {
  let computerScore = 0;
  let yourScore = 0
  for (i=1;i<=5;i++) {
    let test = playRound(userPlay(),computerPlay());
    alert('Round ' + i + ' results - ' + test);
  }
}

game();