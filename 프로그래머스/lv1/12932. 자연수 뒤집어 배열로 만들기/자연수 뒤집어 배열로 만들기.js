function solution(n) {
    var answer = [];
    let reverse = String(n).split('').reverse();
    for(let i = 0; i<reverse.length; i++){
        answer.push(parseInt(reverse[i]));
    }
    return answer;
}