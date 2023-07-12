function solution(n) {
    var answer = 0;
    let number = Math.sqrt(n);
    
    if(number%1===0){
        return answer+=Math.pow(number+1,2);
    }else{
        return-1;
    }
}