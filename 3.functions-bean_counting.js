// Bean counting

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// solution

function countBs(string) {
  let n = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "B") {
     n += 1;
    }
  }
  return n;
}

function countChar(string, char) {
  let n = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
     n += 1;
    }
  }
  return n;
}

function countBs2(string) {
  return countChar(string, "B");
}