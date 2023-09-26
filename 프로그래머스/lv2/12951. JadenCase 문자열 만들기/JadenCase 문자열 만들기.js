function solution(s) {
    let arr = s.split(" ");
    
    const answer = arr.map(x=>x.charAt(0).toUpperCase()+x.substring(1).toLowerCase())
    return answer.join(" ");
}