// how to play rock-paper-scissors:
  // get user input for rock-paper-scissors
const acceptedValues = [
  'rock',
  'paper',
  'scissors'
];

function computerPlay() {
  return acceptedValues[Math.floor(Math.round(Math.random() * 2))];
}

function userPlay() {
  let userValue = prompt('Rock-paper-scissors?').toLowerCase();
  if (acceptedValues.indexOf(userValue) > -1) {
    return userValue;
  } else {
    alert("We don't do that here. Try again and specify a correct value");
  }
}

// function whoWon(a,b) {
//   if (a === b) {
//     return tie;
//   } else {
//     if (a !== 'rock') {
//       if (b === 'scissors') {
//         return computerWon;
//       } else {
//         return playerWon;
//       }
//     } else {
//       if (b === 'scissors') {
//         return playerWon;
//       } else {
//         return computerWon;
//       }
//     }
//   }
// }

function playRound(playerSelection,computerSelection) {
  console.log(playerSelection,computerSelection);
  if (playerSelection && computerSelection) {
    const tie = 'It is a tie!';
    const playerWon = 'You won! ' + playerSelection + ' beats ' + computerSelection + '.';
    const computerWon = 'The computer won! ' + computerSelection + ' beats ' + playerSelection + '.';
    let roundResult;
    if (playerSelection === computerSelection) {
      roundResult = tie;
    } else {
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
    alert(roundResult);
  }
}

playRound(userPlay(),computerPlay());

// var userValue = prompt('Rock-paper-scissors?');
// if (acceptedValues.indexOf(userValue.toLowerCase()) > -1) {
//   alert('Computer chose ' + acceptedValues[computerPlay()]);
// } else {
//   alert("We don't do that here. Specify a correct value");
// }
    // check if correct input (any case), put everything in lower case

  // get random input for computer
  // compare user and computer result and determine the result

// Display the winner and result