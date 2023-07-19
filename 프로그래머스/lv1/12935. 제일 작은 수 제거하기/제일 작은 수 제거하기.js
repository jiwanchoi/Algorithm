function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr[0] ? arr : [-1];
}