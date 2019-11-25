const readlineSync = require("readline-sync");

const Max = Number.MAX_SAFE_INTEGER;
const Min = 0;

let num = Number(readlineSync.question("\nNon-negative integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Non-negative integer: "));
}

let value;

for (let i = 2; i < num; i++) {
  if (num % i == 0){
    value = "Not prime.";
    break;
  } else {
    value = "Prime."
  }
}
console.log("\n" + value + "\n")
