const readlineSync = require("readline-sync");

const Max = 78;
const Min = 1;

let num = Number(readlineSync.question("\nPositive integer: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Positive integer: "));
}
let a = 0, b = 1, f = 1;
for(var i = 2; i <= num; i++) {
   f = a + b;
   a = b;
   b = f;
 }
f = f.toLocaleString("en");
console.log("\n" + f + ".\n");
