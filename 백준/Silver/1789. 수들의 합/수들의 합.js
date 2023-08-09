const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let sum = 0;
let count = 0;
for (let i = 1; i < input; i++) {
  sum += i;
  count++;
  if (sum > input) {
    count--;
    break;
  }
}
count=(input==1)?1:count;
console.log(count);
