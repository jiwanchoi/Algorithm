function solution(a, b, n) {
    var answer = 0;
    let tmp = n;
    while(true){
        if(a>tmp){
            break;
        }
        answer += parseInt(tmp/a)*b;
        tmp = parseInt(tmp/a)*b + tmp%a;
    }
    return answer;
}