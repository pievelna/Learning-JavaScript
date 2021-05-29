// how to play rock-paper-scissors:
  // get user input for rock-paper-scissors
const acceptedValues = [
  'rock',
  'paper',
  'scissors'
];
var userValue = prompt('Rock-paper-scissors?');
console.log(userValue);
if (acceptedValues.indexOf(userValue.toLowerCase()) > -1) {
  alert("OK. Let us wait for the computer!")
} else {
  alert("We don't do that here. Specify a correct value");
}
    // check if correct input (any case), put everything in lower case

  // get random input for computer
  // compare user and computer result and determine the result

// Display the winner and result