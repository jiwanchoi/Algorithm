function solution(n) {
    let count = n.toString(2).split("").filter((x)=> x==='1').length;
    let answer = n;
    while(count != answer){
        n++;
        answer = n.toString(2).split('').filter((x)=>x==='1').length;
    }
    return n;
}