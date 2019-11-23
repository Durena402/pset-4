const readlineSync = require("readline-sync");

const Max = Number.MAX_SAFE_INTEGER;
const Min = 1;

let num = Number(readlineSync.question("\nPositive integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Positive integer: "));
}

digit = 0;
i = 0;

while (i <= num){
  if ( num % i == 0){
    digit = digit + i + " ";
  }
  i++;
}
console.log("\n" + digit + "\n");

//NEED TO ORDER!!!
