function solution(s) {
    arr = s.split(" ");
    let x = Math.min(...arr);
    let y = Math.max(...arr);

    return x+" "+y;
}