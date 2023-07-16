function solution(n) {
    return answer = parseInt(String(n).split('').sort((a,b)=>b-a).join(''));
}