const readlineSync = require("readline-sync");

const Min = Number.MIN_SAFE_INTEGER;
const Max = Number.MAX_SAFE_INTEGER;

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let sum = 0;

while ((lowerBound > upperBound) || (Number.isNaN(lowerBound)) || (Number.isNaN(upperBound)) || (!Number.isInteger(lowerBound)) || (!Number.isInteger(upperBound)) || (lowerBound < Min ) ||  (upperBound > Max )) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

for (let i = lowerBound; i <= upperBound; i++) {
  if (i % 2 === 0){
    sum += i;
  }
}
sum = sum.toLocaleString ("en");
console.log("\n" + sum + ".\n")
