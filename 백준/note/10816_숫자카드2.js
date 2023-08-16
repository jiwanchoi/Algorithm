const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let data = Number(input[0]); //데이터 수
let arr = input[1].split("").map(Number);
let query = Number(input[0]); //쿼리 수
let arr2 = input[1].split("").map(Number);

arr.sort((a, b) => a - b); //이진탐색 오름차순

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}
function countByRange(arr, leftValue, rightValue) {
  let left = lowerBound(arr, leftValue, 0, arr.length);
  let right = upperBound(arr, rightValue, 0, arr.length);
  return right - left;
}

answer = "";
for (let i = 0; i < query; i++) {
  let count = countByRange(arr, query[i], query[i]);
  answer += count + "";
}
console.log(answer);
