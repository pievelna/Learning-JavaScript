function addZero(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${addZero(cows, 3)} Cows`);
  console.log(`${addZero(chickens, 3)} Chickens`);
  console.log(`${addZero(pigs, 3)} Pigs`);
}

printFarmInventory(7, 11, 45);