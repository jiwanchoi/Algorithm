// let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = Number(input[0].split(" ")[0]); // 나무 수
let m = Number(input[0].split(" ")[1]); // 가져갈 나무 길이
let arr = input[1].split(" ").map(Number); // 각 나무 높이

let start = 0; //시작 점
let end = arr.reduce((a, b) => Math.max(a, b)); // 가장 높은점

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    if (x > mid) {
      total += x - mid;
    }
  }
  console.log(m);
  if (total < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
