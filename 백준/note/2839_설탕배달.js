const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// 문제 설명 : N킬로그램이 있는 설탕을 5kg, 3kg 봉지를 이용하여 배달 할 때, 필요로 하는 가장 적은 봉지의 수
// 가장 작은 봉지로 배달 해야하므로 최대한 5kg 봉지를 이용해야 한다.

let count = 0; // 봉지개수

// 5로 나누어 떨어지는지 확인
while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break; // 탈출
  }

  // 0보다 적은 값이 나올 경우 -1
  if (0 > input) {
    console.log(-1);
    break;
  }

  count++; // 3kg 봉지 갯수를 counting
  input -= 3; // input값이 0이 될 때 까지 -3(kg)을 해줌.
}
