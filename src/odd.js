const readlineSync = require("readline-sync");

const Max = Number.MAX_SAFE_INTEGER;
const Min = 1;

let num = Number(readlineSync.question("\nPositive integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Positive integer: "));
}

sum = 0;
digit = 0;

while (num > 0) {
  let digit = num % 10;
  num = Math.floor(num / 10);

  if (digit % 2 !== 0) {
     sum = digit + sum;
  }
}
console.log("\n" + sum + ".\n");
