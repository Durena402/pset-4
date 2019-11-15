const readlineSync = require("readline-sync");

const Min = 1;
const Max = Number.MAX_SAFE_INTEGER;

let num = Number(readlineSync.question("\nPositive integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num))) {
  num = Number(readlineSync.question("Positive integer: "));
}


while (num > 0) {
  let digit = num % 10;
  num = Math.floor(num / 10);

  console.log(mylet);
}
