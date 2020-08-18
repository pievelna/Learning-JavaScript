// recursion

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// solution - subtract from the number until it is "zero" or "one"

function isEven(number) {
  if (number === 0) return true;
  else if (number === 1) return false;
  else if (number < 0) return isEven(-number);
  else return isEven(number - 2);
}