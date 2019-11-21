const readlineSync = require("readline-sync");

const Max = Number.MAX_SAFE_INTEGER;

let sum = 0;
let count = 0;
let input = 0;
let a = 0;
console.log("\n")
while  ((Number.isNaN(input)) || (input >= 0 && input < Max )){
  input = Number(readlineSync.question("Non-negative integer: "));
if(input > 0){
  sum = input + sum;
  ++count;
  }
}
if (input < 0){
  a = sum / count;
  a = a.toLocaleString ('en', {minimumFractionDigits : 3 , maximimFractionDigits: 3});
  console.log("\n" + a + ".\n")
}
