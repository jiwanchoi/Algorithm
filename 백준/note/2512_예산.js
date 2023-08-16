// let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = Number(input[0].split(" ")[0]); // 지방 수
let arr = input[1].split(" ").map(Number); // 각 지방의 예산 요청
let money = Number(input[2]); // 예산

let start = 1; //시작 점
let end = arr.reduce((a, b) => Math.max(a, b)); // 가장 큰 수

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 초기 중간점 구함
  let total = 0; //배정된 예상 총액
  for (let x of arr) {
    total += Math.min(mid, x); //예산 합계 액 을 구함
  }

  console.log(total, mid);

  if (total <= money) {
    //총 예산보다 sum값이 더 적으면 left값 +1
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
