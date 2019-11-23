const readlineSync = require("readline-sync");

const Max = 24;
const Min = 1;

let num = Number(readlineSync.question("\nHeight: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Height: "));
}

let number = "#";
let space = " ";
for (let i = 1; i <= num; i++) {
  number = number + "#";
    for (let x = (num - 1); x < (num); x--){
      space = " " + space;
    }
  console.log(space + number);
}
