const readlineSync = require("readline-sync");

const Max = 9999999999999999;
const Min = 10000000000000;

let num = Number(readlineSync.question("\nNumber: "));

while ((num < Min) || (num > Max) || Number.isNaN(num) || (!Number.isInteger(num)))  {
  num = Number(readlineSync.question("Number: "));
}
let num2 = num;
let num3 = num + "";
let digit;

let sum = 0;
while (num > 10){

  num = Math.floor( num / 10);
  digit = num % 10;
  num = Math.floor( num / 10);

  if (digit * 2 >= 10){
    sum += 1 + ((digit * 2) % 10);
  } else{
    sum += (digit * 2);
  }
}

let others;
let sumOthers = 0;
while (num2 > 0){
  others = (num2 % 10)
  num2 = Math.floor(num2 / 100);
  sumOthers += others;
}
let totalSum = sum + sumOthers;
let front = num3.charAt(0) + num3.charAt(1);
let front1 = num3.charAt(0);
let len = num3.length;

if (totalSum % 10 !== 0){
  console.log("\nInvalid. \n");
} else if (len == 15 && (front == 34) || (front == 37)){
  console.log("\nAmex. \n");
} else if (len == 16 && (front == 51) || (front == 52) || (front == 53) || (front == 54) || (front == 55)){
  console.log("\nMastercard.\n");
} else if ((len == 16) || (len == 13) && (front1 == 4)){
  console.log("\nVisa.\n")
}
