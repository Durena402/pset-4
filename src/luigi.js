const readlineSync = require("readline-sync");

const Max = 24;
const Min = 1;

let num = Number(readlineSync.question("\nHeight: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Height: "));
}
console.log("");
let row;
let value = "#";
for (let i = 1; i <= num; i++) {
  row = "";
  second = "";
  for (let x = 1; x <= (num - i); x++) {
    row = row + " ";
  }
  for (let y = 1; y <= i; y++) {
    row = row + "#";
  }
  for (let y = 1; y <= i; y++) {
    second = second + "#";
  }
  console.log(row + "#" + "  "+ second + "#");
}
console.log("");
