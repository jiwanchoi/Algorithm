function solution(n) {
    let arr = [0, 1];
  
    for(let i = 2; i <= n; i++) {
        arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
    }
        
//     if(n < 2){
//         return arr[n];
//     }
    return arr[n];
}