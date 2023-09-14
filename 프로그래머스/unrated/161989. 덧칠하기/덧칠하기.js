function solution(n, m, sections) {
    let count = 0;
    let painted = 0;
    for(let i of sections) {
        if(painted > i) {
            continue;
        }
            painted = i+m;
            count++;
        }
    return count;
}