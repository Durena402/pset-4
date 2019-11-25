const readlineSync = require("readline-sync");

const Max = Number.MAX_SAFE_INTEGER;
const Min = 1;

let num = Number(readlineSync.question("\nPositive integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Positive integer: "));
}

final = ""
for(let i = 2; i < (num / i); i++){
  if ( num % i == 0){
   final +=  ", " + i + ", ";
   final += (num / i) + "";
  }
}
if (num % Math.sqrt(num) == 0){
  final += ", " + Math.sqrt(num);
}
console.log("\n1, " + num + final + ".\n")
