const readlineSync = require("readline-sync");

const Max = Number.MAX_SAFE_INTEGER;

let sum = 0;
let count = 0;
let a = 0;
let input = Number(readlineSync.question("\nNon-negative integer: "));

while  ((Number.isNaN(input)) || (input >= 0 && input < Max )){
  if(input > 0){
  sum += input;
  count++;
  }
  input = Number(readlineSync.question("Non-negative integer: "));
}


  a = sum / count;
  a = a.toLocaleString ('en', {minimumFractionDigits : 3 , maximimFractionDigits: 3});
  console.log("\n" + a + ".\n")
