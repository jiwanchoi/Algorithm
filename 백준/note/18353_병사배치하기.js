const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]); //데이터 수
let arr = input[1].split("").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

answer = "";
for (let i = 0; i < query; i++) {
  let count = countByRange(arr, query[i], query[i]);
  answer += count + "";
}
console.log(answer);
