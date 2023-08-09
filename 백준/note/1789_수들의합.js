const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// 서로 다른 최대한 많은 자연수들을 골라서 합이 input값이 되는 개수를 구해야함
// 1부터 하나씩 증가
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
console.log((count = input == 1 ? 1 : count));
