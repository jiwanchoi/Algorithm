const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let keep = Number(input[0].split(" ")[0]);
let need = Number(input[0].split(" ")[1]);

let arr = [];
for (let i = 1; i <= keep; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += parseInt(x / mid);
  }
  if (total < need) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);