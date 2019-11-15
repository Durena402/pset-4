const readlineSync = require("readline-sync");

const Min = 0;
const Max = Number.MAX_SAFE_INTEGER;

let input = Number(readlineSync.question("\nNon-negative integer: "));

while  ((Number.isNaN(input)) || (input < Min ) ||  (input > Max )) {
  input = Number(readlineSync.question("Non-negative integer: "));
  if( input < min) {
    break;
  }
}
console.log (input)
