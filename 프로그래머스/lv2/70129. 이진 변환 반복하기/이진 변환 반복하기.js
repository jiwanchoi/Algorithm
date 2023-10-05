function solution(s) {
    let zero = 0;
    let count = 0;
    while(s.length !== 1) {
       count++;
       let answer = 0;
       let filter = s.split("").filter(x => {
            if(x == 0) {
                zero++;
            } else {
                answer++;
            }
        }); 
        s = answer.toString(2);
    }

    return [count,zero];
}