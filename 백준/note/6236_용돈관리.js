// let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]);
let a = input[1].split(" ").map(Number);
let m = Number(input[2].split(" ")[0]);
let b = input[3].split(" ").map(Number);

a.sort((a, b) => a - b);

let answer = [];
b.forEach((v) => {
  let start = 0;
  let end = a.length - 1;
  let flag = false;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (v < a[mid]) {
      end = mid - 1;
    } else if (v > a[mid]) {
      start = mid + 1;
    } else {
      flag = true;
      break;
    }
  }
  if (flag == true) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});
// console.log(answer.join("\n"));
console.log(answer);
