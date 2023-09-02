function solution(s) {
    let answer = [];
    let tmp = [];
    
    for(let i = 0; i < s.length; i++){
        if(!tmp.includes(s[i])){
            answer.push(-1);
            tmp.push(s[i]);
        } else if(tmp.includes(s[i])){
            answer.push(i - tmp.lastIndexOf(s[i]));
            tmp.push(s[i]);
        }
        
    }
    return answer;
}