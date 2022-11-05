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
  let normalValue = normalizeString(userValue);
  if (userValue && acceptedValues.indexOf(normalValue) > -1) {
    return normalValue;
  } else {
    alert("We don't do that here. Try again and specify a correct value");
  }
}

function playRound(playerSelection,computerSelection) {
  // compare user and computer result and determine the result
  if (playerSelection && computerSelection) {
    let roundResult = [0, playerSelection, computerSelection]; //"It is a tie! Computer also chose " + computerSelection + "."; // default value
    const playerWon = [1, playerSelection, computerSelection]; //'You won! ' + playerSelection + ' beats ' + computerSelection + '.';
    const computerWon = [2, playerSelection, computerSelection];//'The computer won! ' + computerSelection + ' beats ' + playerSelection + '.';
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

function finalResult(playerScore,computerScore) {
  if (playerScore > computerScore) {
    return 'You won! The final result:\n You: ' + playerScore + ' Computer: ' + computerScore + '.';
  }
  if (playerScore < computerScore) {
    return 'The computer won! The final result:\n You: ' + playerScore + ' Computer: ' + computerScore + '.';
  } else {
    return 'It is a tie! The final result:\n You: ' + playerScore + ' Computer: ' + computerScore + '.';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundScore;
  let startGame = confirm('Want to play a game of rock-paper-scissors?');
  if (startGame) {
    for (i=1;i<=5;i++) {
      let roundResult = playRound(userPlay(),computerPlay());
      let roundNo = 'Round ' + i + ' results: ';
      let announcement = 'Something went wrong in the round ' + i + ".";
      if (roundResult !== undefined) {
        if (roundResult[0] === 0) {
          announcement = 'It is a tie! Computer also chose ' + roundResult[1] + '.';
        } else if (roundResult[0] === 1) {
          announcement = 'You won! ' + roundResult[1] + ' beats ' + roundResult[2] + '.';
          playerScore++;
        } else if (roundResult[0] === 2) {
          announcement = 'The computer won! ' + roundResult[2] + ' beats ' + roundResult[1] + '.';
          computerScore++;
        }
      }
      roundScore = 'Player: ' + playerScore + '\nComputer: ' + computerScore;
      alert(roundNo + announcement + '\n' + roundScore);
    }
  }
  alert(finalResult(playerScore,computerScore));
}

// game();