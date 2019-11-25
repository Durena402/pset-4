const readlineSync = require("readline-sync");

const Min = 1;
const Max = Number.MAX_SAFE_INTEGER;

let num = Number(readlineSync.question("\nPositive integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num))) {
  num = Number(readlineSync.question("Positive integer: "));
}

let digits = "";
let digit = 0;

while (num > 0) {
  digit = num % 10;
  num = Math.floor(num / 10);
    if (num < 1) {
      digits = digits + digit + ".";
    } else {
      digits = digits + digit + ", "
    }
}
console.log("\n" + digits + "\n");
