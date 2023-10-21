function solution(n) {
    var answer = 0;
    var str = n.toString();
    for(let i = 0; i<str.length; i++){
        answer += parseInt(str[i]);
    }
    return answer;
}