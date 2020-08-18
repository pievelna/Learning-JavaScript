// FizzBuzz

var number = 1;
for (i=0;i<99;++i) {
  if(number%3==0 && number%5==0) {
    console.log('FizzBuzz');
  } else if(number%3==0) {
    console.log('Fizz');
  } else if(number%5==0) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number += 1;
}

/* Expected result:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
*/

//how it should be:
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n); //really like this part
}