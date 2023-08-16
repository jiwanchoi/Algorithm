// let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let keep = Number(input[0].split(" ")[0]); //가지고 있는 랜선의 개수
let need = Number(input[0].split(" ")[1]); //필요한 랜선의 개수

let arr = []; //각 랜선의 길이
for (let i = 1; i <= keep; i++) {
  arr.push(Number(input[i]));
}

let start = 1; //시작 점
let end = arr.reduce((a, b) => Math.max(a, b)); // 가장 높은점

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
