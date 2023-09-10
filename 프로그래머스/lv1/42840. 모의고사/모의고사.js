function solution(answers) {
    var answer = [];
    const number1 = [1, 2, 3, 4, 5];
    const number2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const number3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    var tmp1 = answers.filter((v,i)=> v == number1[i%number1.length]).length;
    var tmp2 = answers.filter((v,i)=> v == number2[i%number2.length]).length;
    var tmp3 = answers.filter((v,i)=> v == number3[i%number3.length]).length;
    var max = Math.max(tmp1,tmp2,tmp3);

    if (tmp1 == max) {
        answer.push(1)
    };
    if (tmp2 == max) {
        answer.push(2)
    };
    if (tmp3 == max) {
        answer.push(3)
    };
    return answer;
}